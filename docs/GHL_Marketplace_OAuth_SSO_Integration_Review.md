# GoHighLevel Marketplace OAuth + SSO Integration Review

**Author:** Internal Project Notes  
**Date:** April 14, 2026  
**API Version:** 2021-07-28  
**Base URL:** `https://services.leadconnectorhq.com`

---

## Table of Contents

1. [Overview](#1-overview)
2. [Core Terminology](#2-core-terminology)
3. [Data Model](#3-data-model)
4. [Environment Variables](#4-environment-variables)
5. [Sub-Account Install Flow](#5-sub-account-install-flow)
6. [Company Install Flow](#6-company-install-flow)
7. [SSO Flow](#7-sso-flow)
8. [Token Refresh and Retrieval Fallback](#8-token-refresh-and-retrieval-fallback)
9. [Location Name Hydration](#9-location-name-hydration)
10. [Iframe Session and Cookie Requirements](#10-iframe-session-and-cookie-requirements)
11. [Common Pitfalls](#11-common-pitfalls)
12. [Implementation Checklist](#12-implementation-checklist)
13. [References](#13-references)

---

## 1. Overview

This document captures the implementation details and failure modes involved in building a GoHighLevel marketplace app that uses both OAuth and SSO while running inside a GHL iframe. It is not just an endpoint reference. The critical knowledge is how company installs, sub-account installs, SSO payloads, token exchange, and iframe session behavior fit together.

The main architectural lesson is that a successful marketplace install does **not** always produce a directly usable location-scoped token. Company installs often require a second step during SSO, where the app receives the active `locationId` and exchanges the saved company token for a location token.

---

## 2. Core Terminology

| Term | Meaning |
|---|---|
| **Company / Agency** | The white-label agency account in GHL. Identified by `companyId`. |
| **Location / Sub-Account** | A customer sub-account inside the agency. Identified by `locationId`. |
| **Company Install** | Marketplace app install at the agency level. OAuth token is company-scoped. |
| **Sub-Account Install** | Marketplace app install at the location level. OAuth token is location-scoped. |
| **SSO** | GHL launches the app inside an iframe and sends an encrypted payload containing user identity and active location context. |

---

## 3. Data Model

You need two token-oriented tables and a clear separation between your internal location IDs and GHL location IDs.

### 3.1 `ghl_installations`

Raw record of what GHL returned during install. Key by `external_id`.

```text
id              UUID (PK)
external_id     VARCHAR  -- "company:{companyId}" or "location:{locationId}"
company_id      VARCHAR  -- GHL agency ID
location_id     VARCHAR  -- GHL location ID; null for company-only installs
user_type       VARCHAR  -- "Company" or "Location"
access_token    TEXT
refresh_token   TEXT
expires_at      TIMESTAMP
```

### 3.2 `oauth_tokens`

Your app's working tokens, keyed by your internal location row plus platform.

```text
id              UUID (PK)
location_id     UUID     -- FK to your internal locations table
platform        VARCHAR  -- e.g. "smbcrm"
access_token    TEXT
refresh_token   TEXT
expires_at      TIMESTAMP
is_valid        BOOLEAN
```

### 3.3 `locations`

Your app's representation of a GHL sub-account.

```text
id                  UUID (PK)
smbcrm_location_id  VARCHAR  -- actual GHL location ID
smbcrm_company_id   VARCHAR  -- GHL agency ID
name                VARCHAR  -- location name fetched from GHL
```

**Critical distinction:** `locations.id` is your internal UUID. `locations.smbcrm_location_id` is the GHL location ID. Do not mix them. In practice:

- `oauth_tokens.location_id` stores your internal UUID
- `ghl_installations.location_id` stores the GHL location ID

---

## 4. Environment Variables

```text
SMBCRM_CLIENT_ID       OAuth client ID from the GHL marketplace app
SMBCRM_CLIENT_SECRET   OAuth client secret from the GHL marketplace app
SMBCRM_REDIRECT_URI    OAuth callback URL
GHL_SSO_SECRET         Secret used to decrypt the iframe SSO payload
SESSION_SECRET         Session signing secret
DATABASE_URL           PostgreSQL connection string
```

---

## 5. Sub-Account Install Flow

This is the simpler install path. GHL sends `code`, `locationId`, and `userType=Location`. The token response is already location-scoped.

### 5.1 Exchange Install Code

**Endpoint:** `POST /oauth/token`

Use the marketplace callback parameters to exchange the authorization code.

**Callback Inputs:**

| Field | Description |
|---|---|
| `code` | OAuth authorization code |
| `locationId` | GHL location ID |
| `userType` | `Location` |

**Expected Result:** save the returned token into `ghl_installations`, `oauth_tokens`, and `locations`. Once stored, the token is immediately usable for location-scoped API calls.

**Flow Summary:**

```text
Marketplace callback with code + locationId + userType=Location
  -> POST /oauth/token
  -> receive location-scoped access_token + refresh_token
  -> save installation, location, and working token
```

---

## 6. Company Install Flow

This is the path that causes the most confusion. GHL sends `code`, `companyId`, and `userType=Company`, but **does not send `locationId`**.

### 6.1 Exchange Company Install Code

**Endpoint:** `POST /oauth/token`

This returns a company-scoped token, which is useful for representing the install but is not sufficient for location-scoped API work.

### 6.2 Attempt to Resolve Installed Locations

**Endpoint:** `GET /oauth/installedLocations`

This endpoint exists, but in production it is unreliable and should not be treated as the primary path for resolving the location.

> **Important:** Do not build the install flow around `GET /oauth/installedLocations` being available or reliable.

### 6.3 Exchange Company Token for Location Token

**Endpoint:** `POST /oauth/locationToken`

Once you know the `locationId`, exchange the saved company token for a location-scoped token and persist it as a location installation plus a working token.

**Required Inputs:**

| Field | Description |
|---|---|
| `locationId` | GHL location ID to scope the company install down to |
| `Authorization` | Bearer company access token |

### 6.4 Recommended Company Install Strategy

1. Save the company install token immediately using `external_id = company:{companyId}`.
2. Do **not** block on `GET /oauth/installedLocations`.
3. Wait for the user to open the app through GHL.
4. Use the SSO payload to get the active `locationId`.
5. Exchange the saved company token via `POST /oauth/locationToken`.
6. Save a second installation record using `external_id = location:{locationId}` and create the working token.

---

## 7. SSO Flow

When the app opens inside GHL, it receives an encrypted `ssoKey` query parameter. Your app must decrypt it and use the payload to establish user and location context.

### 7.1 SSO Payload Shape

```json
{
  "activeLocation": "TLLPYxRjW6i9OUF35Iuu",
  "companyId": "LlDBpGOdlgDgjETd7vyv",
  "email": "user@example.com",
  "userId": "abc123",
  "userName": "John Doe",
  "role": "admin"
}
```

### 7.2 What SSO Gives You

- active GHL location ID
- company ID
- user identity

### 7.3 What SSO Does Not Give You

- location name
- OAuth tokens

### 7.4 SSO Decryption Notes

GHL encrypts the payload using AES-256-CBC with an OpenSSL-style `Salted__` payload and MD5-based key/IV derivation compatible with `EVP_BytesToKey`.

### 7.5 SSO Authentication Sequence

1. Decrypt `ssoKey`
2. Upsert the user by email
3. Upsert the location using `activeLocation`
4. Check whether `oauth_tokens` already exists for that location
5. If missing, find a saved company installation and call `POST /oauth/locationToken`
6. Fetch the location name from GHL
7. Create the session and grant access

---

## 8. Token Refresh and Retrieval Fallback

GHL access tokens expire and must be refreshed.

### 8.1 Refresh Token Flow

**Endpoint:** `POST /oauth/token`

**Grant Type:** `refresh_token`

**Required Form Fields:**

| Field | Description |
|---|---|
| `grant_type` | `refresh_token` |
| `refresh_token` | current refresh token |
| `client_id` | marketplace OAuth client ID |
| `client_secret` | marketplace OAuth client secret |

### 8.2 Recommended Token Retrieval Fallback

When your app needs a location token:

1. Return an existing valid token from `oauth_tokens`
2. Bootstrap from a matching location-level `ghl_installations` record
3. Find a company-level installation and exchange it using `POST /oauth/locationToken`
4. If all of those fail, require reinstall

---

## 9. Location Name Hydration

The SSO payload gives you the location ID, but not the human-readable location name.

### 9.1 Fetch Location Details

**Endpoint:** `GET /locations/{locationId}`

Call this after you have a valid location-scoped token and persist the returned `location.name` into your own `locations` table.

**Required Headers:**

| Header | Value |
|---|---|
| `Authorization` | `Bearer {location_access_token}` |
| `Version` | `2021-07-28` |
| `Accept` | `application/json` |

**Why it matters:** if you do not hydrate the name, your UI often falls back to showing the raw location ID.

---

## 10. Iframe Session and Cookie Requirements

Marketplace apps run inside a GHL iframe. Session cookies are therefore cross-site cookies.

### 10.1 Required Express Session Settings

```javascript
app.set('trust proxy', 1);

session({
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: sessionTtlMs
  },
  proxy: true
});
```

Without `sameSite: 'none'` and `secure: true`, the browser will reject session cookies and each request will appear unauthenticated.

### 10.2 Express 5 Catch-All Route Change

If you use Express 5, the old `'*'` wildcard route syntax breaks. Use:

```javascript
app.get('{*path}', handler);
```

---

## 11. Common Pitfalls

### 11.1 Company Install Produces No Usable Location Token

Saving only the company token is not enough. Use SSO to recover the active `locationId`, then call `POST /oauth/locationToken`.

### 11.2 `GET /oauth/installedLocations` Is Unreliable

Treat it as optional, not foundational.

### 11.3 Location Name Stays Wrong

SSO does not return the location name. Fetch it from `GET /locations/{locationId}` and store it.

### 11.4 Placeholder Names Become Permanent

If you save a hardcoded fallback name such as `"SMBcrm Location"`, you may never overwrite it later. Prefer `null` until you have the real name.

### 11.5 Cookie Settings Fail Inside the Iframe

Missing `sameSite: 'none'`, `secure: true`, or trusted proxy configuration will break sessions.

### 11.6 Company Install Leaves `ghl_installations.location_id` Null

That is expected at first. Once SSO reveals the `locationId`, update the company installation and create the separate location-level installation record.

### 11.7 Two ID Systems Get Mixed Up

Keep internal DB UUIDs and external GHL IDs separate. This is a common source of broken token lookup and access control bugs.

---

## 12. Implementation Checklist

1. Create `locations`, `ghl_installations`, `oauth_tokens`, `users`, and `sessions`
2. Configure `SMBCRM_CLIENT_ID`, `SMBCRM_CLIENT_SECRET`, `SMBCRM_REDIRECT_URI`, `GHL_SSO_SECRET`, `SESSION_SECRET`, and `DATABASE_URL`
3. Add iframe-safe session configuration
4. Implement OpenSSL-compatible AES-256-CBC SSO decryption
5. Handle both `userType=Company` and `userType=Location` in the marketplace callback
6. Persist company installs even when no `locationId` is available yet
7. During SSO, exchange company tokens for location tokens when needed
8. Always hydrate the location name from `GET /locations/{locationId}`
9. Implement refresh-token support
10. Implement the fallback chain: working token -> location install -> company install + exchange -> reinstall
11. Use Express 5-compatible wildcard routes if applicable

---

## 13. References

[^1]: Internal project notes from `/Users/nicholasflowers/Downloads/GHL-OAUTH-SSO-INTEGRATION.md`
[^2]: [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)
[^3]: [Platform & Automation Review](./GHL_Platform_Automation_API_Review.md)
