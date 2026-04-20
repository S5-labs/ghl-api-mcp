# GoHighLevel API 2.0 Rate Limits Review

**Author:** Internal Project Notes  
**Date:** April 20, 2026  
**API Version:** 2.0 / `2021-07-28` header-based APIs  
**Base URL:** `https://services.leadconnectorhq.com`

---

## Table of Contents

1. [Overview](#1-overview)
2. [Current Limits](#2-current-limits)
3. [How Limits Are Applied](#3-how-limits-are-applied)
4. [Response Headers for Monitoring](#4-response-headers-for-monitoring)
5. [Worked Example](#5-worked-example)
6. [Implementation Guidance](#6-implementation-guidance)
7. [References](#7-references)

---

## 1. Overview

GoHighLevel applies rate limits to public API 2.0 traffic that uses OAuth in order to protect platform performance and stability.

For practical integration design, the important point is that the limits are applied **per Marketplace app client** and **per resource**, where the resource is either:

- a **Location** (sub-account), or
- a **Company** (agency)

This means the same Marketplace app can have separate rate-limit budgets for different installed locations or companies.

---

## 2. Current Limits

### 2.1 Burst Limit

- **100 API requests per 10 seconds**
- applied **per Marketplace app (client)** per **resource** (`Location` or `Company`)

### 2.2 Daily Limit

- **200,000 API requests per day**
- applied **per Marketplace app (client)** per **resource** (`Location` or `Company`)

### 2.3 Summary Table

| Limit Type | Value | Scope |
|---|---|---|
| Burst limit | `100 requests / 10 seconds` | Per Marketplace app per resource |
| Daily limit | `200,000 requests / day` | Per Marketplace app per resource |

---

## 3. How Limits Are Applied

The rate limit budget is not shared globally across every installation of the app. It is applied separately for each resource that has the Marketplace app installed.

### 3.1 Per-Resource Interpretation

If the same Marketplace app is installed on multiple sub-accounts, each sub-account gets its own burst and daily allocation.

Likewise, if a company-level installation is in use, the company resource has its own budget.

### 3.2 Resource Types

| Resource Type | Meaning |
|---|---|
| `Location` | A sub-account installation or a location-scoped resource budget |
| `Company` | An agency/company-scoped installation or company resource budget |

---

## 4. Response Headers for Monitoring

GHL exposes rate-limit usage information in API response headers.

| Header | Meaning |
|---|---|
| `X-RateLimit-Limit-Daily` | The total daily request limit |
| `X-RateLimit-Daily-Remaining` | Remaining requests for the current day |
| `X-RateLimit-Interval-Milliseconds` | Time window used for burst limiting |
| `X-RateLimit-Max` | Maximum requests allowed in the current burst interval |
| `X-RateLimit-Remaining` | Remaining requests in the current burst interval |

### 4.1 Header Interpretation

For a typical successful response, agents or application code should inspect:

- `X-RateLimit-Remaining` to see how close the client is to hitting the short-term burst limit
- `X-RateLimit-Daily-Remaining` to estimate whether the integration is approaching daily exhaustion
- `X-RateLimit-Interval-Milliseconds` together with `X-RateLimit-Max` to determine safe retry pacing

---

## 5. Worked Example

If the Marketplace app `GHL-APP` is installed on two different locations:

- **Sub-account A** can make:
  - `200,000` API requests per day
  - `100` API requests per `10` seconds
- **Sub-account B** can make:
  - `200,000` API requests per day
  - `100` API requests per `10` seconds

These budgets are separate because the limits are enforced per Marketplace app per resource.

---

## 6. Implementation Guidance

### 6.1 Design Assumptions

Agents and apps should assume:

1. burst exhaustion can happen long before daily exhaustion
2. one noisy location should not be assumed to consume another location's quota
3. rate-limit headers should be treated as the source of truth at runtime

### 6.2 Operational Recommendations

For production integrations:

1. log all `X-RateLimit-*` headers for non-trivial workflows
2. build short-window throttling around `X-RateLimit-Remaining`
3. track daily usage per location or company installation
4. avoid fan-out jobs that hit the same location with many parallel requests
5. prefer queueing and paced retries over unbounded concurrent retries

### 6.3 Agent Lookup Terms

This document should be the primary reference when agents search for:

- `rate limits`
- `API 2.0 rate limits`
- `burst limit`
- `daily limit`
- `X-RateLimit-Limit-Daily`
- `X-RateLimit-Max`
- `X-RateLimit-Remaining`
- `200,000 requests per day`
- `100 requests per 10 seconds`

---

## 7. References

[^1]: Internal project note provided on April 20, 2026 regarding current GoHighLevel API 2.0 OAuth rate limits and response headers.
