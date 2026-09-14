> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/SandboxPIT). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Private Integration Tokens (PIT) for Sandbox Accounts

## Overview

A **Private Integration Token (PIT)** is a **scoped authentication token** that provides **secure server-to-server** access to **HighLevel APIs**. PITs let you build custom integrations without running an OAuth user-consent flow.

This document explains:

- What PITs are and when to use them
- What changed for PITs in Sandbox accounts
- How Sandbox PITs differ from Production PITs
- How to use PITs in API calls
- Best practices and how to move from Sandbox to Production

---

## What Is a Private Integration Token (PIT)?

A **PIT** is a token you generate in the HighLevel UI to authenticate API requests.

### Key characteristics

- **Scoped permissions:** Access is limited to the scopes you select.
- **Static token behavior:** PITs act like a fixed OAuth2 access token. They **do not auto-refresh**. If you need a new token, you must **rotate** or regenerate it manually.
- **UI-generated and managed:** Create/manage PITs in **HighLevel Settings → Private Integrations**.
- **API version:** PITs work with **API v2.0** (supported/modern API surface).
- **Context support:** PITs are available for both **agency** and **sub-account (location)** contexts.

---

## When Should You Use a PIT?

Use a PIT when:

- You are building a **backend integration** that needs direct API access.
- You want **scoped access** to account data without using full user credentials.
- You want to test workflows **outside OAuth / Marketplace install flows**.
- You are validating API interactions in code (example: create contact, update workflows).

---

## PITs in Sandbox Accounts: What’s New?

Previously, **Sandbox (App Test) Accounts** did not support PIT creation. This has changed:

- Sandbox accounts can now **generate PITs**.
- You can use Sandbox PITs to test:
  - Authentication
  - Scopes / permissions
  - Integration logic end-to-end
- Sandbox PITs behave like production PITs **in authentication and usage**.

This enables full integration testing in Sandbox **without switching to a live account** early.

---

## How Sandbox PITs Differ from Production PITs

Sandbox PITs work the same way technically, but there are important operational differences.

### 1) API Limits (Sandbox)

Sandbox PITs have reduced API limits for development/testing:

- **25 requests per 10 seconds**
- **10,000 requests per day**

Notes:

- Limits apply at the **account (location) level**.
- Limits **do not multiply** if you generate multiple PITs.
- Production PITs use the standard API limits based on the paid HighLevel plan.

### 2) Environment Characteristics

| Category | Sandbox PITs | Production PITs |
| --- | --- | --- |
| Intended usage | Temporary, test-only | Real systems and production workloads |
| API limits | Reduced | Standard production limits |
| Lifetime | Sandbox account may exist up to **6 months** | Persistent unless rotated/expired |
| Stability | No uptime/persistence guarantees | Stable production support |

**Important:** Sandbox environments are not meant for production workflows or real customer data.

---

## Data & Lifecycle

Sandbox data (including PITs) is temporary and may be:

- Reset
- Purged
- Deactivated after **6 months**
- Deactivated earlier under **Fair Use** review

When moving to production, you should create a **separate PIT** in the production account.

---

## Using a PIT in API Calls

Once you generate a PIT, include it in the `Authorization` header:

```http
Authorization: Bearer <YOUR_PRIVATE_INTEGRATION_TOKEN>
```

```bash
curl --request GET \
  --url https://services.leadconnectorhq.com/locations/{LOCATION_ID} \
  --header "Authorization: Bearer <YOUR_PRIVATE_INTEGRATION_TOKEN>" \
  --header "Accept: application/json" \
  --header "Version: 2021-07-28"
```

**Replace**

- `{LOCATION_ID}` with a real location ID from your Sandbox account
- `<YOUR_PRIVATE_INTEGRATION_TOKEN>` with your PIT

---

## Best Practices Around PITs

Even in Sandbox environments:

- **Limit scopes** to only what your integration requires.
- **Rotate tokens periodically** to maintain security.
- Treat tokens like **secrets**:
  - Do not commit to source control
  - Do not log in plaintext
  - Do not expose publicly
- **Recreate tokens** when migrating to production.

---

## Transitioning from Sandbox to Production

When your integration is ready for production:

1. Create a **new PIT** in the production HighLevel account.
1. Update your integration to use **production credentials**.
1. Revalidate flows using **production API limits**.
1. **Do not reuse Sandbox PITs** in production systems.

---

## Summary

Private Integration Tokens (PITs) provide secure, scoped server-to-server authentication for HighLevel APIs.

Sandbox accounts now support PITs, enabling:

- Full integration testing
- Scope and permissions validation
- End-to-end API testing without needing a production account early

Sandbox PITs behave the same way in code, but have:

- Reduced API limits
- Temporary lifecycle expectations
- No guarantees for persistence or uptime

Use Sandbox PITs for development/testing only, and generate fresh PITs for production.
