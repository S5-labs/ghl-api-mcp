# GHL Contacts API — Comprehensive Review Document

**Base URL:** `https://services.leadconnectorhq.com`  
**API Version Header:** `Version: 2021-07-28` (required on all requests)  
**Authentication:** Bearer Token (OAuth Access Token or Private Integration Token)  
**Token Type:** Sub-Account Token (all endpoints unless noted)

---

## Table of Contents

1. [Overview & Architecture](#1-overview--architecture)
2. [Core Contact Endpoints (CRUD)](#2-core-contact-endpoints-crud)
3. [Search Contacts (Advanced)](#3-search-contacts-advanced)
4. [Get Duplicate Contact](#4-get-duplicate-contact)
5. [Tasks](#5-tasks)
6. [Notes](#6-notes)
7. [Tags](#7-tags)
8. [Appointments](#8-appointments)
9. [Campaigns](#9-campaigns)
10. [Workflow](#10-workflow)
11. [Followers](#11-followers)
12. [Bulk Actions](#12-bulk-actions)
13. [Authentication & Scopes Reference](#13-authentication--scopes-reference)
14. [Key Patterns & Best Practices](#14-key-patterns--best-practices)

---

## 1. Overview & Architecture

The GHL Contacts API provides full lifecycle management of contact records within a GoHighLevel sub-account (location). Every contact belongs to a `locationId` and can carry standard fields (name, email, phone, address), DND settings, tags, custom fields, and relationships to tasks, notes, appointments, campaigns, and workflows.

> **Important:** The legacy `GET /contacts/` endpoint is **deprecated**. All new integrations must use `POST /contacts/search` for listing and filtering contacts.

### Contact Object — Top-Level Fields

| Field | Type | Notes |
|---|---|---|
| `id` | string | System-generated contact ID |
| `firstName` | string (nullable) | First name |
| `lastName` | string (nullable) | Last name |
| `name` | string (nullable) | Full name (can be set independently) |
| `email` | string (nullable) | Primary email |
| `phone` | string (nullable) | E.164 format recommended (e.g. `+18885551234`) |
| `locationId` | string | **Required** — the sub-account ID |
| `gender` | string | `male`, `female`, or other |
| `address1` | string (nullable) | Street address |
| `city` | string (nullable) | City |
| `state` | string (nullable) | State/province |
| `postalCode` | string | Postal/ZIP code |
| `country` | string | ISO 2-letter code (e.g. `US`) |
| `website` | string (nullable) | Contact's website URL |
| `timezone` | string (nullable) | IANA timezone (e.g. `America/Chicago`) |
| `companyName` | string (nullable) | Company name |
| `dateOfBirth` | string (nullable) | Multiple formats supported (see below) |
| `assignedTo` | string | User ID of the assigned team member |
| `source` | string | Origin of the contact (e.g. `public api`) |
| `dnd` | boolean | Do Not Disturb — master toggle |
| `dndSettings` | object | Per-channel DND settings |
| `inboundDndSettings` | object | Inbound DND settings |
| `tags` | string[] | Array of tag strings |
| `customFields` | object[] | Array of `{id, key, field_value}` objects |

**Date of Birth Supported Formats:** `YYYY/MM/DD`, `MM/DD/YYYY`, `YYYY-MM-DD`, `MM-DD-YYYY`, `YYYY.MM.DD`, `MM.DD.YYYY`, `YYYY_MM_DD`, `MM_DD_YYYY`

### DND Settings Structure

The `dndSettings` object supports per-channel configuration. Each channel key (`Call`, `Email`, `SMS`, `WhatsApp`, `GMB`, `FB`) accepts:

```json
{
  "Call": {
    "status": "active",
    "message": "I am currently unavailable",
    "code": "string"
  },
  "Email": { "status": "active", "message": "string", "code": "string" },
  "SMS":   { "status": "active", "message": "string", "code": "string" },
  "WhatsApp": { "status": "active", "message": "string", "code": "string" },
  "GMB":   { "status": "active", "message": "string", "code": "string" },
  "FB":    { "status": "active", "message": "string", "code": "string" }
}
```

The `inboundDndSettings` object uses an `all` key:

```json
{
  "all": {
    "status": "active",
    "message": "Not accepting inbound messages"
  }
}
```

---

## 2. Core Contact Endpoints (CRUD)

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts)

### 2.1 Create Contact

| Property | Value |
|---|---|
| **Method** | `POST` |
| **Endpoint** | `/contacts/` |
| **Scope** | `contacts.write` |

**Full Request Body Sample:**

```json
{
  "firstName": "Rosan",
  "lastName": "Deo",
  "name": "Rosan Deo",
  "email": "rosan@deos.com",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "gender": "male",
  "phone": "+1 888-888-8888",
  "address1": "3535 1st St N",
  "city": "Dolomite",
  "state": "AL",
  "postalCode": "35061",
  "website": "https://www.tesla.com",
  "timezone": "America/Chihuahua",
  "dnd": true,
  "dndSettings": {
    "Call":     { "status": "active", "message": "string", "code": "string" },
    "Email":    { "status": "active", "message": "string", "code": "string" },
    "SMS":      { "status": "active", "message": "string", "code": "string" },
    "WhatsApp": { "status": "active", "message": "string", "code": "string" },
    "GMB":      { "status": "active", "message": "string", "code": "string" },
    "FB":       { "status": "active", "message": "string", "code": "string" }
  },
  "inboundDndSettings": {
    "all": { "status": "active", "message": "string" }
  },
  "tags": ["nisi sint commodo amet", "consequat"],
  "customFields": [
    { "id": "6dvNaf7VhkQ9snc5vnjJ", "key": "my_text_field",        "field_value": "My Text" },
    { "id": "6dvNaf7VhkQ9snc5vnjJ", "key": "my_dropdown_field",    "field_value": "My Selected Option" },
    { "id": "6dvNaf7VhkQ9snc5vnjJ", "key": "my_number_field",      "field_value": 100 },
    { "id": "6dvNaf7VhkQ9snc5vnjJ", "key": "my_decimal_field",     "field_value": 100.5 },
    { "id": "6dvNaf7VhkQ9snc5vnjJ", "key": "my_multiselect_field", "field_value": ["test", "test2"] },
    {
      "id": "6dvNaf7VhkQ9snc5vnjJ",
      "key": "my_file_field",
      "field_value": {
        "f31175d4-2b06-4fc6-b7bc-74cd814c68cb": {
          "meta": {
            "fieldname": "1HeGizb13P0odwgOgKSs",
            "originalname": "IMG_20231215_164412935.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 1786611,
            "uuid": "f31175d4-2b06-4fc6-b7bc-74cd814c68cb"
          },
          "url": "https://services.leadconnectorhq.com/documents/download/w2M9qTZ0ZJz8rGt02jdJ",
          "documentId": "w2M9qTZ0ZJz8rGt02jdJ"
        }
      }
    }
  ],
  "source": "public api",
  "dateOfBirth": "1990-09-25",
  "country": "US",
  "companyName": "DGS VolMAX",
  "assignedTo": "y0BeYjuRIlDwsDcOHOJo"
}
```

**Response:** `201 Created` — returns `{ "contact": { ...contactObject } }`

---

### 2.2 Get Contact

| Property | Value |
|---|---|
| **Method** | `GET` |
| **Endpoint** | `/contacts/:contactId` |
| **Scope** | `contacts.readonly` |

**Path Parameter:** `contactId` (string, required)

**cURL Sample:**
```bash
curl -L 'https://services.leadconnectorhq.com/contacts/sx6wyHhbFdRXh302LLNR' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response:** `200 OK` — returns `{ "contact": { ...contactObject } }`

---

### 2.3 Update Contact

| Property | Value |
|---|---|
| **Method** | `PUT` |
| **Endpoint** | `/contacts/:contactId` |
| **Scope** | `contacts.write` |

Accepts the same body fields as Create Contact. Only fields included in the request body are updated (partial update supported). The `country` field must use ISO 2-letter codes — see the [Country List](https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list) for valid values.

**Sample Body (partial update):**
```json
{
  "firstName": "Jane",
  "tags": ["vip", "newsletter"],
  "customFields": [
    { "id": "6dvNaf7VhkQ9snc5vnjJ", "key": "lead_score", "field_value": 85 }
  ]
}
```

---

### 2.4 Delete Contact

| Property | Value |
|---|---|
| **Method** | `DELETE` |
| **Endpoint** | `/contacts/:contactId` |
| **Scope** | `contacts.write` |

**Response:** `200 OK` — returns `{ "succeded": true }`

---

### 2.5 Upsert Contact

| Property | Value |
|---|---|
| **Method** | `POST` |
| **Endpoint** | `/contacts/upsert` |
| **Scope** | `contacts.write` |

The Upsert endpoint creates a new contact or updates an existing one based on the **Allow Duplicate Contact** setting configured at the Location level.

**Deduplication Logic:**
- If the setting checks **both email and phone**, the API uses the priority sequence defined in the location settings.
- If two separate contacts already exist — one matching by email and another by phone — the API updates the contact matching the **first field in the configured priority sequence** and ignores the second to prevent duplication.

**Sample Body:**
```json
{
  "firstName": "Alex",
  "lastName": "Smith",
  "email": "alex@example.com",
  "phone": "+14155551234",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "tags": ["lead"]
}
```

---

### 2.6 Get Contacts By Business ID

| Property | Value |
|---|---|
| **Method** | `GET` |
| **Endpoint** | `/contacts/business/:businessId` |
| **Scope** | `contacts.readonly` |

**Path Parameter:** `businessId` (string, required)

**Query Parameters:**
- `locationId` (string, required)
- `limit` (number, optional) — default 20, max 100
- `skip` (number, optional)

---

## 3. Search Contacts (Advanced)

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/search-contacts-advanced](https://marketplace.gohighlevel.com/docs/ghl/contacts/search-contacts-advanced)  
**ClickUp Documentation:** [https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad](https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad)

> **Note:** Due to the complexity of advanced filtering, updates may take a few seconds to appear in search results.

| Property | Value |
|---|---|
| **Method** | `POST` |
| **Endpoint** | `/contacts/search` |
| **Scope** | `contacts.readonly` |

The Search Contacts API is the **primary method** for retrieving contact lists. It replaces the deprecated `GET /contacts/` endpoint and supports advanced filtering, multi-field sorting, full-text query, and two distinct pagination modes.

---

### 3.1 Request Body Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `locationId` | string | **Yes** | The sub-account ID to search within |
| `pageLimit` | number | **Yes** | Records per page (max 500) |
| `page` | number | No | Page number for standard pagination. **Do not use with `searchAfter`** |
| `searchAfter` | array | No | Cursor for deep pagination. **Required for records beyond 10,000** |
| `filters` | array | No | Array of filter objects or nested filter groups |
| `sort` | array | No | Array of sort criteria |
| `query` | string | No | Full-text search string (max 75 characters) |

---

### 3.2 Pagination — Two Modes

#### Mode 1: Standard Pagination (`page` + `pageLimit`)

- Retrieves up to **10,000 records** in total
- Maximum **500 records per request**
- Use `page` (1-based) and `pageLimit` parameters

```json
{
  "locationId": "5DP41231LkQsiKESj6rh",
  "page": 1,
  "pageLimit": 500
}
```

To retrieve the last batch: `page=20` with `pageLimit=500` reaches record 10,000.

> **Warning:** Do not provide `page` when using `searchAfter`.

#### Mode 2: Cursor-Based Pagination (`searchAfter` + `pageLimit`)

- **Required** for accessing more than 10,000 records
- The `searchAfter` value is returned in **each response document** and defines the cursor position for the next page
- Omit `page` entirely when using this mode
- Enables efficient traversal of very large contact databases

**How `searchAfter` Works:**

1. Make the first request **without** `searchAfter` (use `page: 1` or omit `page`)
2. Each contact in the response includes a `searchAfter` array value
3. Take the `searchAfter` value from the **last contact** in the response
4. Pass that value as `searchAfter` in the next request
5. Repeat until the response returns fewer records than `pageLimit` (indicating the last page)

**First Request (no cursor):**
```json
{
  "locationId": "5DP41231LkQsiKESj6rh",
  "pageLimit": 100,
  "sort": [{ "field": "dateAdded", "direction": "asc" }]
}
```

**Subsequent Request (with cursor from previous response):**
```json
{
  "locationId": "5DP41231LkQsiKESj6rh",
  "pageLimit": 100,
  "searchAfter": ["bs5qhs78vqhs", "2FP41231LkQsiKESj6eg"],
  "sort": [{ "field": "dateAdded", "direction": "asc" }]
}
```

> **Critical:** The `searchAfter` cursor is tied to the sort order. If you change the `sort` parameters between requests, the cursor will not work correctly. Always use the same sort configuration throughout a paginated traversal.

---

### 3.3 Filters

Filters can be applied individually or grouped with logical operators (`AND` / `OR`). By default, all filters in the top-level `filters` array are combined with `AND` logic.

**Filter Object Structure:**
```json
{
  "field": "firstNameLowerCase",
  "operator": "contains",
  "value": "john"
}
```

**Filter Group Structure (nested AND/OR):**
```json
{
  "group": "OR",
  "filters": [
    { "field": "city", "operator": "eq", "value": "New York" },
    { "field": "state", "operator": "eq", "value": "California" }
  ]
}
```

#### Supported Filter Operators

| Operator | Definition | Value Type | Character Limit |
|---|---|---|---|
| `eq` | Equals | Number, String, Boolean | 75 |
| `not_eq` | Not Equals | Number, String, Boolean | 75 |
| `contains` | Contains (no special characters) | String | 75 |
| `not_contains` | Not Contains (no special characters) | String | 75 |
| `exists` | Has a value (no `value` field needed) | Undefined | None |
| `not_exists` | Has no value (no `value` field needed) | Undefined | None |
| `range` | Range (for date fields) | Object | 75 |

#### Supported Filter Fields

**Contact Information Fields:**

| Display Name | Field Name | Supported Operators |
|---|---|---|
| Contact Id | `id` | `eq`, `not_eq` |
| Contact Name | `contactName` | `eq`, `not_eq`, `exists`, `not_exists` |
| First Name (lowercase) | `firstNameLowerCase` | `eq`, `not_eq`, `contains`, `not_contains`, `exists`, `not_exists` |
| Last Name (lowercase) | `lastNameLowerCase` | `eq`, `not_eq`, `contains`, `not_contains`, `exists`, `not_exists` |
| Email | `email` | `eq`, `not_eq`, `exists`, `not_exists` *(contains/not_contains not yet supported)* |
| Phone | `phone` | `eq`, `not_eq`, `contains`, `not_contains`, `exists`, `not_exists` |
| Address | `address` | `eq`, `not_eq`, `contains`, `not_contains`, `exists`, `not_exists` |
| City | `city` | `eq`, `not_eq`, `contains`, `not_contains`, `exists`, `not_exists` |
| State | `state` | `eq`, `not_eq`, `exists`, `not_exists` |
| Country | `country` | `eq`, `not_eq`, `exists`, `not_exists` |
| Postal Zip Code | `postalCode` | `eq`, `not_eq`, `contains`, `not_contains`, `exists`, `not_exists` |
| Company Name | `companyName` | `eq`, `not_eq`, `contains`, `not_contains`, `exists`, `not_exists` |
| Business Name | `businessName` | `eq`, `not_eq`, `contains`, `not_contains`, `exists`, `not_exists` |
| Assigned | `assignedTo` | `eq`, `not_eq`, `exists`, `not_exists` |
| Source | `source` | `eq`, `not_eq`, `exists`, `not_exists` |
| DND | `dnd` | `eq`, `not_eq`, `exists`, `not_exists` |
| Is Valid WhatsApp | `isValidWhatsapp` | `eq`, `not_eq`, `exists`, `not_exists` |
| Followers | `followers` | `eq`, `not_eq`, `exists`, `not_exists` |
| Created At | `dateAdded` | `range`, `exists`, `not_exists` |
| Updated At | `dateUpdated` | `range`, `exists`, `not_exists` |
| Last Email Clicked Date | `lastEmailClickedDate` | `range`, `exists`, `not_exists` |
| Last Email Opened Date | `lastEmailOpenedDate` | `range`, `exists`, `not_exists` |
| Tags | `tags` | `eq`, `not_eq`, `exists`, `not_exists` |

> **Coming Soon:** `firstName` and `lastName` without lowercase normalization are listed as "Coming soon" in the documentation.

---

### 3.4 Sort

The `sort` array accepts one or more sort criteria. Each item specifies a `field` and `direction`.

**Supported Sort Fields:**

| Display Name | Field Name |
|---|---|
| Email | `email` |
| DND | `dnd` |
| Source | `source` |
| First Name | `firstNameLowerCase` |
| Last Name | `lastNameLowerCase` |
| Created At | `dateAdded` |
| Updated At | `dateUpdated` |

**Sample Sort Payloads:**

```json
// Sort by first name descending
{
  "sort": [{ "field": "firstNameLowerCase", "direction": "desc" }]
}

// Sort by created date ascending (recommended for searchAfter pagination)
{
  "sort": [{ "field": "dateAdded", "direction": "asc" }]
}

// Multi-field sort
{
  "sort": [
    { "field": "lastNameLowerCase", "direction": "asc" },
    { "field": "firstNameLowerCase", "direction": "asc" }
  ]
}
```

---

### 3.5 Full Request Body Sample

```json
{
  "locationId": "5DP41231LkQsiKESj6rh",
  "pageLimit": 20,
  "searchAfter": ["bs5qhs78vqhs", "2FP41231LkQsiKESj6eg"],
  "filters": [
    {
      "field": "dnd",
      "operator": "eq",
      "value": true
    },
    {
      "group": "OR",
      "filters": [
        { "field": "firstNameLowerCase", "operator": "eq", "value": "alex" },
        { "field": "lastNameLowerCase",  "operator": "eq", "value": "peter" }
      ]
    }
  ],
  "sort": [
    { "field": "firstNameLowerCase", "direction": "desc" }
  ],
  "query": "tom"
}
```

---

### 3.6 Sample Filter Payloads

**Contacts with email AND in New York or California:**
```json
{
  "filters": [
    {
      "group": "AND",
      "filters": [
        { "field": "firstNameLowerCase", "operator": "contains", "value": "John" },
        { "field": "email", "operator": "exists" }
      ]
    },
    {
      "group": "OR",
      "filters": [
        { "field": "city", "operator": "eq", "value": "New York" },
        { "field": "state", "operator": "eq", "value": "California" }
      ]
    }
  ]
}
```

**Contacts created within a date range:**
```json
{
  "filters": [
    {
      "field": "dateAdded",
      "operator": "range",
      "value": {
        "from": "2024-01-01T00:00:00.000Z",
        "to": "2024-12-31T23:59:59.999Z"
      }
    }
  ]
}
```

**Contacts assigned to a specific user with a tag:**
```json
{
  "filters": [
    { "field": "assignedTo", "operator": "eq", "value": "y0BeYjuRIlDwsDcOHOJo" },
    { "field": "tags", "operator": "eq", "value": "vip" }
  ]
}
```

---

### 3.7 The `query` Parameter

The `query` string performs a full-text search against fields configured as **searchable** in the Custom Fields Settings tab of the location. This is distinct from `filters` — it is a free-text search rather than a structured field comparison.

- Maximum length: **75 characters**
- Searchable fields are customizable per location
- Can be combined with `filters` in the same request

---

### 3.8 Response Body

```json
{
  "contacts": [
    {
      "id": "102goXVW3lIExEQPOnd3",
      "additionalEmails": ["john@example.com", "jane@example.com"],
      "additionalPhones": ["123456789", "987654321"],
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+14155551234",
      "locationId": "5DP41231LkQsiKESj6rh",
      "dateAdded": "2024-01-15T10:30:00.000Z",
      "dateUpdated": "2024-06-01T14:22:00.000Z",
      "tags": ["vip", "newsletter"],
      "customFields": [...],
      "searchAfter": ["bs5qhs78vqhs", "102goXVW3lIExEQPOnd3"]
    }
  ],
  "total": 1542,
  "traceId": "abc123"
}
```

> **Key:** Each contact object in the response contains a `searchAfter` array. To paginate, pass the `searchAfter` value from the **last item** in the current response as the `searchAfter` parameter in the next request.

---

## 4. Get Duplicate Contact

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/get-duplicate-contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-duplicate-contact)

| Property | Value |
|---|---|
| **Method** | `GET` |
| **Endpoint** | `/contacts/search/duplicate` |
| **Scope** | `contacts.readonly` |

This endpoint checks for existing contacts that match a given email or phone number, respecting the **Allow Duplicate Contact** setting at the location level.

**Deduplication Behavior:**
- If **Allow Duplicate Contact is disabled**: the global unique identifier is used for searching
- If **Allow Duplicate Contact is enabled**: first priority is `email`, second priority is `phone`

**Query Parameters:**

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `locationId` | string | **Yes** | Sub-account ID |
| `email` | string | No | URL-encode special characters (e.g. `test+abc@gmail.com` → `test%2Babc%40gmail.com`) |
| `number` | string | No | Phone number — URL-encode `+` sign (e.g. `+14231645160` → `%2B14231645160`) |

**cURL Sample:**
```bash
curl -L 'https://services.leadconnectorhq.com/contacts/search/duplicate?locationId=sadadya1u12basyhasd&email=test%40example.com&number=%2B14155551234' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28'
```

---

## 5. Tasks

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/tasks](https://marketplace.gohighlevel.com/docs/ghl/contacts/tasks)

Tasks are to-do items associated with a specific contact. All task endpoints are scoped under `/contacts/:contactId/tasks`.

### Endpoint Summary

| Operation | Method | Endpoint | Scope |
|---|---|---|---|
| Get All Tasks | `GET` | `/contacts/:contactId/tasks` | `contacts.readonly` |
| Create Task | `POST` | `/contacts/:contactId/tasks` | `contacts.write` |
| Get Task | `GET` | `/contacts/:contactId/tasks/:taskId` | `contacts.readonly` |
| Update Task | `PUT` | `/contacts/:contactId/tasks/:taskId` | `contacts.write` |
| Delete Task | `DELETE` | `/contacts/:contactId/tasks/:taskId` | `contacts.write` |
| Update Task Completed | `PUT` | `/contacts/:contactId/tasks/:taskId/completed` | `contacts.write` |

**Create Task — Request Body:**
```json
{
  "title": "Follow up call",
  "body": "Call to discuss the proposal",
  "assignedTo": "y0BeYjuRIlDwsDcOHOJo",
  "dueDate": "2024-07-15T10:00:00+00:00",
  "completed": false
}
```

**Update Task Completed — Request Body:**
```json
{
  "completed": true
}
```

---

## 6. Notes

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/notes](https://marketplace.gohighlevel.com/docs/ghl/contacts/notes)

Notes are free-text records attached to a contact. All note endpoints are scoped under `/contacts/:contactId/notes`.

### Endpoint Summary

| Operation | Method | Endpoint | Scope |
|---|---|---|---|
| Get All Notes | `GET` | `/contacts/:contactId/notes` | `contacts.readonly` |
| Create Note | `POST` | `/contacts/:contactId/notes` | `contacts.write` |
| Get Note | `GET` | `/contacts/:contactId/notes/:id` | `contacts.readonly` |
| Update Note | `PUT` | `/contacts/:contactId/notes/:id` | `contacts.write` |
| Delete Note | `DELETE` | `/contacts/:contactId/notes/:id` | `contacts.write` |

**Create Note — Request Body:**
```json
{
  "userId": "GCs5KuzPqTls7vWclkEV",
  "body": "Spoke with contact — interested in the enterprise plan. Follow up in 2 weeks."
}
```

**cURL Sample:**
```bash
curl -L 'https://services.leadconnectorhq.com/contacts/sx6wyHhbFdRXh302LLNR/notes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28' \
  -d '{ "userId": "GCs5KuzPqTls7vWclkEV", "body": "lorem ipsum" }'
```

---

## 7. Tags

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/tags](https://marketplace.gohighlevel.com/docs/ghl/contacts/tags)

Tags can be added to or removed from individual contacts via dedicated endpoints.

### Endpoint Summary

| Operation | Method | Endpoint | Scope |
|---|---|---|---|
| Add Tags | `POST` | `/contacts/:contactId/tags` | `contacts.write` |
| Remove Tags | `DELETE` | `/contacts/:contactId/tags` | `contacts.write` |

**Add Tags — Request Body:**
```json
{
  "tags": ["vip", "newsletter", "hot-lead"]
}
```

**Remove Tags — Request Body:**
```json
{
  "tags": ["newsletter"]
}
```

---

## 8. Appointments

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/appointments](https://marketplace.gohighlevel.com/docs/ghl/contacts/appointments)

Retrieve all appointments associated with a specific contact.

| Operation | Method | Endpoint | Scope |
|---|---|---|---|
| Get Contact Appointments | `GET` | `/contacts/:contactId/appointments` | `contacts.readonly` |

**cURL Sample:**
```bash
curl -L 'https://services.leadconnectorhq.com/contacts/sx6wyHhbFdRXh302LLNR/appointments' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28'
```

---

## 9. Campaigns

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/campaigns](https://marketplace.gohighlevel.com/docs/ghl/contacts/campaigns)

Manage a contact's enrollment in campaigns.

### Endpoint Summary

| Operation | Method | Endpoint | Scope |
|---|---|---|---|
| Add to Campaign | `POST` | `/contacts/:contactId/campaigns/:campaignId` | `contacts.write` |
| Remove from Campaign | `DELETE` | `/contacts/:contactId/campaigns/:campaignId` | `contacts.write` |
| Remove from All Campaigns | `DELETE` | `/contacts/:contactId/campaigns/removeAll` | `contacts.write` |

**Add to Campaign — Request Body:**
```json
{
  "eventStartTime": "2024-07-01T09:00:00+00:00"
}
```

---

## 10. Workflow

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/workflow](https://marketplace.gohighlevel.com/docs/ghl/contacts/workflow)

Add or remove a contact from an automation workflow.

### Endpoint Summary

| Operation | Method | Endpoint | Scope |
|---|---|---|---|
| Add to Workflow | `POST` | `/contacts/:contactId/workflow/:workflowId` | `contacts.write` |
| Delete from Workflow | `DELETE` | `/contacts/:contactId/workflow/:workflowId` | `contacts.write` |

**Add to Workflow — Request Body:**
```json
{
  "eventStartTime": "2021-06-23T03:30:00+01:00"
}
```

**Response:**
```json
{
  "succeded": true
}
```

> **Note:** The `eventStartTime` field is optional. When provided, it schedules the workflow trigger at the specified time rather than immediately.

---

## 11. Followers

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/followers](https://marketplace.gohighlevel.com/docs/ghl/contacts/followers)

Followers are team members who are subscribed to updates on a contact record.

### Endpoint Summary

| Operation | Method | Endpoint | Scope |
|---|---|---|---|
| Add Followers | `POST` | `/contacts/:contactId/followers` | `contacts.write` |
| Remove Followers | `DELETE` | `/contacts/:contactId/followers` | `contacts.write` |

**Add Followers — Request Body:**
```json
{
  "followers": ["y0BeYjuRIlDwsDcOHOJo", "GCs5KuzPqTls7vWclkEV"]
}
```

---

## 12. Bulk Actions

**Source:** [https://marketplace.gohighlevel.com/docs/ghl/contacts/bulk](https://marketplace.gohighlevel.com/docs/ghl/contacts/bulk)

Bulk endpoints allow operations on multiple contacts simultaneously.

### 12.1 Update Contacts Tags (Bulk)

| Property | Value |
|---|---|
| **Method** | `POST` |
| **Endpoint** | `/contacts/bulk/tags` |
| **Scope** | `contacts.write` |

Allows adding or removing tags from multiple contacts at once.

**Request Body:**
```json
{
  "contactIds": ["contactId1", "contactId2", "contactId3"],
  "tags": ["vip", "newsletter"],
  "action": "add"
}
```

Use `"action": "remove"` to remove the specified tags from all listed contacts.

---

### 12.2 Add/Remove Contacts From Business (Bulk)

| Property | Value |
|---|---|
| **Method** | `POST` |
| **Endpoint** | `/contacts/bulk/business` |
| **Scope** | `contacts.write` |

Associates or disassociates multiple contacts with a business record.

**Request Body:**
```json
{
  "contactIds": ["contactId1", "contactId2"],
  "businessId": "businessId123"
}
```

> **Note:** Passing `null` as `businessId` removes the business association from all listed contacts.

---

## 13. Authentication & Scopes Reference

All Contacts API endpoints use **Sub-Account Token** authentication. Both OAuth Access Tokens and Private Integration Tokens are accepted.

| Endpoint Group | Required Scope | HTTP Methods |
|---|---|---|
| Get Contact, Get All Notes, Get Task, Get Appointments, Search Contacts, Get Duplicate | `contacts.readonly` | GET, POST (search only) |
| Create, Update, Delete Contact, Upsert | `contacts.write` | POST, PUT, DELETE |
| Notes (Create/Update/Delete) | `contacts.write` | POST, PUT, DELETE |
| Tasks (Create/Update/Delete) | `contacts.write` | POST, PUT, DELETE |
| Tags (Add/Remove) | `contacts.write` | POST, DELETE |
| Campaigns (Add/Remove) | `contacts.write` | POST, DELETE |
| Workflow (Add/Delete) | `contacts.write` | POST, DELETE |
| Followers (Add/Remove) | `contacts.write` | POST, DELETE |
| Bulk Actions | `contacts.write` | POST |

**Required Headers on All Requests:**

```
Authorization: Bearer <TOKEN>
Version: 2021-07-28
Content-Type: application/json   (for POST/PUT requests)
Accept: application/json
```

---

## 14. Key Patterns & Best Practices

### 14.1 Pagination Strategy

For any integration that needs to retrieve large numbers of contacts, the recommended approach is cursor-based pagination using `searchAfter`:

```
Step 1: POST /contacts/search with { locationId, pageLimit: 500, sort: [{ field: "dateAdded", direction: "asc" }] }
Step 2: Extract searchAfter from the last contact in the response
Step 3: POST /contacts/search with { locationId, pageLimit: 500, searchAfter: <cursor>, sort: [...same sort...] }
Step 4: Repeat until response.contacts.length < pageLimit
```

> Always use a consistent `sort` order throughout a `searchAfter` traversal. Changing sort parameters invalidates the cursor.

### 14.2 Custom Fields in Contacts

Custom fields are passed as an array of objects in the `customFields` property. Each object requires either `id` or `key` (or both) to identify the field, plus `field_value` containing the value.

```json
"customFields": [
  { "id": "fieldId123", "key": "contact.lead_score", "field_value": 85 },
  { "id": "fieldId456", "key": "contact.preferred_contact_method", "field_value": "email" }
]
```

### 14.3 Phone Number Formatting

Always pass phone numbers in **E.164 format** (e.g. `+14155551234`). When using phone numbers in URL query parameters (such as in Get Duplicate Contact), URL-encode the `+` sign as `%2B`.

### 14.4 Upsert vs. Create

Use `POST /contacts/upsert` when you cannot guarantee uniqueness of the incoming contact. The upsert respects the location's duplicate-contact settings and avoids creating duplicate records. Use `POST /contacts/` (Create) only when you have already verified via Get Duplicate Contact that the contact does not exist.

### 14.5 Deprecated Endpoint

The `GET /contacts/` endpoint is officially deprecated. Any existing integration using it should be migrated to `POST /contacts/search` with appropriate `filters` and `pageLimit` parameters.

---

## Sources

| # | Source |
|---|---|
| 1 | [Contacts API Introduction](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts-api) |
| 2 | [Contacts Endpoints Index](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts) |
| 3 | [Create Contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-contact) |
| 4 | [Get Contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact) |
| 5 | [Update Contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/update-contact) |
| 6 | [Delete Contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/delete-contact) |
| 7 | [Upsert Contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/upsert-contact) |
| 8 | [Get Contacts By BusinessId](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contacts-by-business-id) |
| 9 | [Get Contacts (Deprecated)](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contacts) |
| 10 | [Search Contacts (Advanced)](https://marketplace.gohighlevel.com/docs/ghl/contacts/search-contacts-advanced) |
| 11 | [Contacts Search API — ClickUp Documentation](https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad) |
| 12 | [Get Duplicate Contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-duplicate-contact) |
| 13 | [Tasks Section](https://marketplace.gohighlevel.com/docs/ghl/contacts/tasks) |
| 14 | [Notes Section](https://marketplace.gohighlevel.com/docs/ghl/contacts/notes) |
| 15 | [Create Note](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-note) |
| 16 | [Tags Section](https://marketplace.gohighlevel.com/docs/ghl/contacts/tags) |
| 17 | [Appointments Section](https://marketplace.gohighlevel.com/docs/ghl/contacts/appointments) |
| 18 | [Campaigns Section](https://marketplace.gohighlevel.com/docs/ghl/contacts/campaigns) |
| 19 | [Workflow Section](https://marketplace.gohighlevel.com/docs/ghl/contacts/workflow) |
| 20 | [Add Contact to Workflow](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-workflow) |
| 21 | [Followers Section](https://marketplace.gohighlevel.com/docs/ghl/contacts/followers) |
| 22 | [Bulk Actions Section](https://marketplace.gohighlevel.com/docs/ghl/contacts/bulk) |
| 23 | [Country List Reference](https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list) |
