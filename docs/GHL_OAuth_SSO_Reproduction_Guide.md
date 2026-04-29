# GoHighLevel OAuth + SSO Reproduction Guide

**Audience:** Engineers implementing a new GoHighLevel marketplace integration in another application  
**Repo Context:** This repository is a documentation corpus plus an MCP stdio docs server. It does **not** contain a runnable OAuth/SSO application implementation.  
**Primary Source in This Repo:** `docs/GHL_Marketplace_OAuth_SSO_Integration_Review.md`

---

## 1. Scope and Purpose

This guide translates the OAuth + SSO findings already documented in this repo into a practical reproduction plan for another codebase.

Its job is to help you build a new app that can:

- support GoHighLevel marketplace installs at both company and sub-account scope
- launch correctly inside the GHL iframe via SSO
- resolve the active `locationId` during SSO
- obtain or bootstrap a usable location-scoped token
- persist enough state to survive token expiry and repeat launches

This guide is intentionally explicit about what is documented here versus what must be implemented elsewhere.

---

## 2. What Exists in This Repo vs. What Does Not

### 2.1 What exists in this repo

- documentation about GHL APIs, OAuth/SSO behavior, and implementation notes
- an MCP stdio server that indexes markdown files under `docs/`
- endpoint-search tooling for docs consumers

Relevant evidence:

- `README.md` describes the repo as `ghl-api-mcp`, an MCP stdio server for GHL documentation
- `src/server.js` exposes doc lookup tools such as `list_docs`, `search_docs`, `list_endpoints`, and `get_endpoint_details`
- `docs/GHL_Marketplace_OAuth_SSO_Integration_Review.md` contains the actual OAuth + SSO findings

### 2.2 What does not exist in this repo

- no runnable Express, Next.js, Rails, or other web application for OAuth/SSO
- no callback handler implementation
- no SSO decryption utility implementation
- no DB migrations or ORM models for installs/tokens/users/sessions
- no production session middleware configuration in running app code

Do not treat this repo as a sample app. Treat it as implementation guidance and an indexed documentation source.

---

## 3. Source Confidence Labels

To avoid overstating certainty, this guide uses three evidence categories.

### 3.1 Documented GHL behavior

Behavior stated directly in repo documentation, especially `docs/GHL_Marketplace_OAuth_SSO_Integration_Review.md`.

### 3.2 Recommended implementation pattern

A practical pattern recommended by the repo notes for building a robust integration, even if not guaranteed to be the only valid design.

### 3.3 Inference / assumption

A reasonable implementation assumption derived from internal notes. Validate these in your own environment.

---

## 4. Core Terms

The source review distinguishes these entities:

- `companyId`: GHL agency/company identifier
- `locationId`: GHL sub-account identifier
- company install: marketplace install that yields a company-scoped token
- sub-account install: marketplace install that yields a location-scoped token
- SSO: iframe launch where GHL sends encrypted user and active-location context via `ssoKey`

The key lesson from the source document is this:

- Documented GHL behavior: a successful company install does not necessarily produce a directly usable location-scoped token
- Recommended implementation pattern: use SSO launch context to recover the active `locationId`, then exchange the saved company token for a location token

---

## 5. Prerequisites

Before implementing this in another app, you need:

- a GHL marketplace app with OAuth credentials
- a redirect/callback URL registered with the marketplace app
- the SSO shared secret used to decrypt `ssoKey`
- a server-side session mechanism that works inside an iframe
- persistent storage for installs, tokens, locations, users, and sessions
- an HTTPS deployment, because iframe cookies require secure cross-site settings

Recommended implementation pattern:

- use a server-rendered or API-backed web app that can terminate OAuth callbacks and create server-side sessions
- store tokens in a relational database so you can support refresh, fallback lookup, and company-to-location bootstrap

---

## 6. Environment Variables

The primary source explicitly lists these variables:

```text
SMBCRM_CLIENT_ID
SMBCRM_CLIENT_SECRET
SMBCRM_REDIRECT_URI
GHL_SSO_SECRET
SESSION_SECRET
DATABASE_URL
```

How they fit into the flow:

- `SMBCRM_CLIENT_ID`: sent to `POST /oauth/token`
- `SMBCRM_CLIENT_SECRET`: sent to `POST /oauth/token`
- `SMBCRM_REDIRECT_URI`: must match the callback registered in GHL and the value used during OAuth exchange
- `GHL_SSO_SECRET`: used to decrypt the inbound `ssoKey`
- `SESSION_SECRET`: signs your app session cookie/session state
- `DATABASE_URL`: stores installations, tokens, locations, users, and sessions

Inference / assumption:

- if you use different variable names in your own app, keep the semantic mapping identical even if the prefixes differ

---

## 7. Data Model

The source document recommends three core tables and a strict ID boundary.

### 7.1 `ghl_installations`

Raw record of install-derived tokens, keyed by external GHL identity.

```text
id              UUID (PK)
external_id     VARCHAR  -- company:{companyId} or location:{locationId}
company_id      VARCHAR
location_id     VARCHAR  -- nullable for initial company installs
user_type       VARCHAR  -- Company or Location
access_token    TEXT
refresh_token   TEXT
expires_at      TIMESTAMP
```

### 7.2 `oauth_tokens`

Working tokens keyed to your app's internal location record.

```text
id              UUID (PK)
location_id     UUID     -- your internal locations.id
platform        VARCHAR
access_token    TEXT
refresh_token   TEXT
expires_at      TIMESTAMP
is_valid        BOOLEAN
```

### 7.3 `locations`

Your application's location row, mapped to external GHL identifiers.

```text
id                  UUID (PK)
smbcrm_location_id  VARCHAR  -- actual GHL locationId
smbcrm_company_id   VARCHAR  -- actual GHL companyId
name                VARCHAR
```

### 7.4 DB state expectations

Documented GHL behavior and source guidance imply these expected states:

- after sub-account install: you should have a location row, a location-level installation row, and a usable working token row
- after company install but before first SSO launch: you may only have `ghl_installations.external_id = company:{companyId}` with `location_id = null`
- after first SSO launch following company install: you should create or update the location row, create `location:{locationId}` installation state, and persist a working location token

Critical distinction from the source review:

- `locations.id` is your internal UUID
- `locations.smbcrm_location_id` is the GHL `locationId`
- `oauth_tokens.location_id` should point to your internal UUID, not the external GHL ID

---

## 8. Route Inventory for the App You Need to Build

This repo does not provide these routes. The list below is a recommended implementation pattern for another app.

### 8.1 Required or likely app routes

- `GET /oauth/callback`
  Purpose: receive marketplace install callback params such as `code`, `companyId`, `locationId`, and `userType`
- `GET /launch` or `GET /sso/launch`
  Purpose: receive iframe entry request with `ssoKey`
- `POST /auth/logout` or equivalent
  Purpose: clear session if your app supports explicit logout
- catch-all application route for authenticated UI
  Purpose: render the app once session bootstrap is complete

### 8.2 External GHL endpoints referenced by this flow

- `POST /oauth/token`
  Use for initial code exchange and for refresh-token exchange
- `POST /oauth/locationToken`
  Use to exchange a saved company token for a location-scoped token once `locationId` is known
- `GET /oauth/installedLocations`
  Exists, but the source review says it is unreliable and should not be foundational
- `GET /locations/{locationId}`
  Use after you have a location-scoped token to hydrate the human-readable location name

---

## 9. End-to-End Flow Summaries

### 9.1 Sub-account install summary

- Documented GHL behavior: callback includes `code`, `locationId`, and `userType=Location`
- Documented GHL behavior: `POST /oauth/token` returns a location-scoped token
- Recommended implementation pattern: persist install, upsert location, create working token immediately

### 9.2 Company install summary

- Documented GHL behavior: callback includes `code`, `companyId`, and `userType=Company`
- Documented GHL behavior: the initial token is company-scoped
- Documented GHL behavior: callback does not provide `locationId`
- Recommended implementation pattern: save the company install immediately, then wait for SSO launch to reveal the active `locationId`
- Recommended implementation pattern: exchange company token through `POST /oauth/locationToken` during SSO bootstrap

### 9.3 SSO launch summary

- Documented GHL behavior: app launch includes encrypted `ssoKey`
- Documented GHL behavior: decrypted payload includes active location context and user identity
- Documented GHL behavior: payload does not include OAuth tokens or location name
- Recommended implementation pattern: session bootstrap should resolve location token, hydrate location name, then establish authenticated app session

---

## 10. Text Sequence Diagrams

### 10.1 Sub-account install sequence

```text
User installs app at location scope in GHL
  -> GHL redirects to your callback with code + locationId + userType=Location
  -> Your app calls POST /oauth/token
  -> GHL returns location-scoped access_token + refresh_token
  -> Your app upserts location using locationId/companyId context
  -> Your app saves ghl_installations.external_id = location:{locationId}
  -> Your app saves oauth_tokens for the internal location row
  -> App is ready for location-scoped API calls
```

### 10.2 Company install followed by first SSO launch

```text
User installs app at company scope in GHL
  -> GHL redirects to your callback with code + companyId + userType=Company
  -> Your app calls POST /oauth/token
  -> GHL returns company-scoped access_token + refresh_token
  -> Your app saves ghl_installations.external_id = company:{companyId}
  -> No location-scoped token exists yet

Later, user opens app inside GHL iframe
  -> GHL launches your app with ssoKey
  -> Your app decrypts ssoKey
  -> Payload reveals activeLocation and companyId
  -> Your app looks for existing working token for activeLocation
  -> If missing, app loads saved company install for companyId
  -> App calls POST /oauth/locationToken with activeLocation and Bearer company token
  -> GHL returns location-scoped token
  -> Your app creates/updates location row
  -> Your app saves ghl_installations.external_id = location:{locationId}
  -> Your app saves oauth_tokens for internal location row
  -> Your app calls GET /locations/{locationId}
  -> Your app stores the location name
  -> Your app creates the session and renders the application
```

### 10.3 Token retrieval and refresh sequence

```text
App needs token for a location
  -> Check oauth_tokens for valid non-expired token
  -> If expired but refreshable, call POST /oauth/token with grant_type=refresh_token
  -> Save refreshed token set
  -> If no working token exists, check ghl_installations for location:{locationId}
  -> If still missing, check company:{companyId}
  -> If company install exists, call POST /oauth/locationToken
  -> Save location installation + working token
  -> If all fail, require reinstall or re-auth path
```

---

## 11. Exact Reproduction Strategy: Sub-Account Installs

Use this when `userType=Location` arrives at your callback.

### 11.1 Callback handling

1. Validate the callback parameters and confirm `code` is present.
2. Read `locationId` and `userType` from the callback.
3. Require `userType=Location` for this branch.

### 11.2 OAuth exchange

Call `POST /oauth/token`.

This guide only asserts what is documented in the repo:

- Documented GHL behavior: use this endpoint to exchange the install code
- Documented GHL behavior: resulting token is location-scoped for sub-account installs

Recommended implementation pattern:

- store raw token response fields in `ghl_installations`
- normalize a working token row into `oauth_tokens`
- calculate and persist `expires_at` from the token response

### 11.3 Persistence steps

1. Upsert `locations` by external `locationId`.
2. Save `ghl_installations.external_id = location:{locationId}`.
3. Save `oauth_tokens` keyed by your internal `locations.id`.
4. If you already have a location token, call `GET /locations/{locationId}` to hydrate the human-readable name.

### 11.4 Success condition

The install is complete when a later request for that location can retrieve a valid location-scoped token without needing company-token bootstrap.

---

## 12. Exact Reproduction Strategy: Company Installs

Use this when `userType=Company` arrives at your callback.

### 12.1 Initial callback handling

1. Validate the callback parameters and confirm `code` is present.
2. Read `companyId` and `userType`.
3. Expect no usable `locationId` in this branch.

### 12.2 OAuth exchange

Call `POST /oauth/token`.

Documented GHL behavior:

- initial token is company-scoped
- this token alone is not enough for location-scoped API work

### 12.3 Persistence steps

1. Save `ghl_installations.external_id = company:{companyId}`.
2. Persist the returned company access token, refresh token, and expiry.
3. Do not assume you can complete location setup yet.

### 12.4 Installed locations lookup

`GET /oauth/installedLocations` should be treated carefully.

Documented GHL behavior from the source review:

- the endpoint exists
- it has been unreliable in production

Recommended implementation pattern:

- do not make install success depend on this endpoint
- you may log or inspect it as a secondary diagnostic path, but not as the core bootstrap mechanism

### 12.5 Completion strategy

The recommended completion path is deferred bootstrap on first SSO launch:

1. wait for the user to open the app from inside GHL
2. decrypt `ssoKey`
3. read `activeLocation`
4. use the saved company token to call `POST /oauth/locationToken`
5. create the location-level installation and working token rows

---

## 13. SSO Launch Handling

### 13.1 What arrives from GHL

Documented GHL behavior:

- the app receives encrypted `ssoKey` as a query parameter
- decrypted payload includes fields like:

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

### 13.2 What the SSO payload is for

- identify the active GHL location
- identify the company context
- identify the launching user

### 13.3 What the SSO payload is not for

- it does not provide OAuth tokens
- it does not provide the location name

### 13.4 Decryption notes

Documented GHL behavior from the source review:

- encryption is described as AES-256-CBC
- payload format is OpenSSL-style with `Salted__`
- key/IV derivation is MD5-based and compatible with `EVP_BytesToKey`

Inference / assumption:

- implementation details can be sensitive to byte handling and encoding, so validate against real `ssoKey` samples in a safe test environment

### 13.5 Recommended SSO bootstrap order

1. decrypt `ssoKey`
2. validate required payload fields, especially `activeLocation`, `companyId`, and user identity
3. upsert the user record
4. upsert the location shell row using external IDs
5. resolve a location-scoped token using the fallback chain in Section 14
6. call `GET /locations/{locationId}` if you still need the human-readable name
7. create the app session
8. render or redirect into the authenticated UI

---

## 14. Token Lookup, Refresh, and Bootstrap Logic

This is the most important operational logic to reproduce.

### 14.1 Working fallback chain

The source review recommends this order when your app needs a location token:

1. use an existing valid row from `oauth_tokens`
2. bootstrap from a matching location-level `ghl_installations` record
3. fall back to a company-level installation and exchange via `POST /oauth/locationToken`
4. if all fail, require reinstall

### 14.2 Refresh flow

Use `POST /oauth/token` with `grant_type=refresh_token`.

Documented fields from the source review:

- `grant_type=refresh_token`
- `refresh_token`
- `client_id`
- `client_secret`

Recommended implementation pattern:

- refresh slightly before hard expiry, not only after a 401
- mark tokens invalid if refresh fails permanently
- overwrite both access and refresh tokens if GHL rotates them

### 14.3 Company-to-location bootstrap

When SSO gives you `activeLocation` and you only have a company install:

1. load `ghl_installations` for `company:{companyId}`
2. confirm company token is still usable or refresh it first if needed
3. call `POST /oauth/locationToken`
4. persist `location:{locationId}` installation state
5. persist working location token keyed to your internal location row

### 14.4 Endpoint roles in the flow

- `POST /oauth/token`
  Used for the initial callback code exchange and later refresh-token exchange
- `POST /oauth/locationToken`
  Used only after you know a concrete `locationId`, typically from SSO after a company install
- `GET /oauth/installedLocations`
  Optional diagnostic or secondary lookup path, not the primary production bootstrap path
- `GET /locations/{locationId}`
  Used after you already have a location-scoped token and need correct display metadata such as location name

---

## 15. Iframe Cookie and Session Requirements

The source review is explicit that marketplace apps run inside a GHL iframe, so session cookies are cross-site.

Documented configuration pattern:

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

Documented GHL/browser implication:

- without `sameSite: 'none'` and `secure: true`, the browser can reject the cookie
- when that happens, every iframe request appears unauthenticated

Recommended implementation pattern:

- verify session persistence in the actual embedded iframe, not only in a direct browser tab
- if deployed behind a proxy or load balancer, ensure the framework trusts forwarded protocol headers so secure cookies are set correctly

---

## 16. Error Handling Expectations

This repo is documentation-only, so these are implementation recommendations grounded in the documented failure modes.

### 16.1 Callback errors

- missing `code`: fail the install and log the inbound params safely
- unexpected `userType`: reject and log for investigation
- token exchange failure from `POST /oauth/token`: mark install incomplete and retain correlation data for support

### 16.2 SSO errors

- missing `ssoKey`: reject launch as unauthenticated
- decryption failure: treat as fatal for that launch and log only non-sensitive metadata
- missing `activeLocation`: do not attempt location bootstrap

### 16.3 Token bootstrap errors

- no matching location token and no company install: require reinstall
- company install exists but `POST /oauth/locationToken` fails: keep company install record, mark location bootstrap incomplete, and surface a recoverable app error
- `GET /locations/{locationId}` fails after token success: continue with a null or temporary display name, then retry hydration later

### 16.4 Session errors

- cookie not persisting in iframe: inspect `SameSite`, `Secure`, proxy trust, and HTTPS termination first

---

## 17. Verification Checklist

Use this after implementation in the new app.

- sub-account install stores a location-level installation row
- sub-account install stores a working token row keyed to internal location UUID
- company install stores a company-level installation row even when no `locationId` exists yet
- first SSO launch after company install successfully decrypts `ssoKey`
- SSO payload yields `activeLocation` and `companyId`
- company token can be exchanged through `POST /oauth/locationToken`
- exchange creates a location-level installation row and working token row
- `GET /locations/{locationId}` hydrates the human-readable location name
- token refresh via `POST /oauth/token` works for expired access tokens
- iframe session persists across multiple authenticated requests
- direct app reload inside the GHL iframe stays authenticated
- failure of `GET /oauth/installedLocations` does not block the main install-to-launch flow

---

## 18. Suggested Implementation Order

1. create DB tables for `locations`, `ghl_installations`, `oauth_tokens`, `users`, and `sessions`
2. implement OAuth callback handling for both `userType=Location` and `userType=Company`
3. implement token persistence and expiry tracking
4. implement SSO decryption for `ssoKey`
5. implement SSO launch bootstrap that resolves the active location and user
6. implement company-to-location token exchange with `POST /oauth/locationToken`
7. implement token refresh via `POST /oauth/token`
8. implement location name hydration via `GET /locations/{locationId}`
9. implement iframe-safe session configuration
10. add diagnostics for callback, bootstrap, and refresh failures
11. run separate end-to-end tests for sub-account install and company install

This order matches the risk profile in the source notes: installation and SSO bootstrap must be correct before UI polish matters.

---

## 19. Known Uncertainties

These items should be treated as validation points, not guaranteed facts beyond what the repo already documents.

- `GET /oauth/installedLocations` is described as unreliable in production, but this repo does not include reproducible test fixtures showing every failure mode
- the exact request/response payload shapes for `POST /oauth/token` and `POST /oauth/locationToken` are not fully modeled in runnable code here
- the SSO decryption notes describe the crypto approach, but this repo does not include executable decryption test vectors
- app-specific route names, session-store choice, user model shape, and retry strategy are implementation decisions outside this repo
- whether you update the original company installation row with a resolved `location_id`, in addition to creating a separate location installation row, is a schema policy decision inferred from the notes rather than enforced by code here

---

## 20. Bottom Line

If you are rebuilding this in another application, the safest reproduction strategy from the evidence in this repo is:

1. treat company and sub-account installs as different entry paths
2. persist company installs immediately even without a `locationId`
3. rely on SSO launch to reveal `activeLocation`
4. use `POST /oauth/locationToken` to bootstrap a location token from a company install
5. store working tokens by your internal location row, not by raw GHL IDs
6. hydrate the location name separately with `GET /locations/{locationId}`
7. configure iframe-safe secure cross-site sessions from the start

That is the clearest implementation path supported by the current repo documentation.
