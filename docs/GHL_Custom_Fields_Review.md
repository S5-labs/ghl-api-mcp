# GoHighLevel Custom Fields API Review

**Author:** Manus AI
**Date:** March 9, 2026
**API Version:** 2021-07-28
**Base URL:** `https://services.leadconnectorhq.com`

---

## Table of Contents

1. [Overview](#1-overview)
2. [Custom Fields V2](#2-custom-fields-v2)
3. [Authentication and Scopes Reference](#3-authentication-and-scopes-reference)
4. [References](#4-references)

---

## 1. Overview

Custom fields are data points that allow you to capture and store specific information tailored to your business requirements. You can create fields across field types like text, numeric, selection options, and special fields like date/time or signature. [^1]

> **INFO:** The Custom Fields V2 API only supports Custom Objects and Company (Business) today. It will be extended to other Standard Objects in the future. [^1]

The `fieldKey` is a critical identifier that follows a strict naming convention depending on the object type:

- **Custom Objects:** `custom_object.{objectKey}.{fieldKey}` — for example, `custom_object.pet.name` for a "name" field in a "pet" custom object. [^2]
- **Standard Objects (Business):** Standard field keys are used directly without the `custom_object.` prefix.

The `objectKey` for custom objects always uses the `custom_objects.` prefix (note the plural form), for example `custom_objects.pet`. [^2]

---

## 2. Custom Fields V2

### 2.1 Field Data Types

When creating or updating a custom field, you must specify a `dataType`. The following types are supported:

| Data Type | Description | Notes |
|---|---|---|
| `TEXT` | Single-line text input | |
| `LARGE_TEXT` | Multi-line text input | |
| `NUMERICAL` | Numeric value | |
| `PHONE` | Phone number | Must include country code with `+` |
| `MONETORY` | Currency/monetary value | Only `"default"` (location's currency) supported today |
| `CHECKBOX` | Multi-select checkbox | Values passed as `{add: [], remove: []}` |
| `SINGLE_OPTIONS` | Dropdown single select | Only option keys accepted, not labels |
| `MULTIPLE_OPTIONS` | Dropdown multi-select | Values passed as `{add: [], remove: []}` |
| `DATE` | Date picker | Format: `YYYY-MM-DD` (ISO 8601) |
| `TEXTBOX_LIST` | List of labeled text boxes | Key format: `{field_key}.{label_key}` |
| `FILE_UPLOAD` | File upload field | Values passed as `{add: [{url}], remove: [{url}]}` |
| `RADIO` | Radio button single select | Only option keys accepted |
| `EMAIL` | Email address | Only supported for Business (Company) |

### 2.2 Create Custom Field

**Endpoint:** `POST /custom-fields/`
**Scope:** `locations/customFields.write`
**Token Type:** Sub-Account Token [^2]

**Request Body Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `locationId` | string | Yes | The sub-account location ID |
| `name` | string | No | Display name for the field |
| `description` | string | No | Description of the field |
| `placeholder` | string | No | Placeholder text |
| `showInForms` | boolean | Yes | Whether to show in forms |
| `dataType` | string | Yes | One of the supported data types |
| `fieldKey` | string | Yes | Unique field key with object prefix |
| `objectKey` | string | Yes | The parent object key |
| `options` | object[] | No | Options for selection-type fields |
| `acceptedFormats` | string | No | Allowed formats for `FILE_UPLOAD` fields |
| `maxFileLimit` | number | No | Max files for `FILE_UPLOAD` fields |
| `allowCustomOption` | boolean | No | Allow custom values in `RADIO` fields |
| `parentId` | string | Yes | ID of the parent folder |

**Sample cURL Request:**

```bash
curl -L 'https://services.leadconnectorhq.com/custom-fields/' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28' \
  -d '{
    "locationId": "ve9EPM428h8vShlRW1KT",
    "name": "Pet Name",
    "dataType": "TEXT",
    "fieldKey": "custom_object.pet.name",
    "objectKey": "custom_objects.pet",
    "showInForms": true,
    "parentId": "folder_id_here"
  }'
```

**Sample Request Body — Selection Field with Options:**

```json
{
  "locationId": "ve9EPM428h8vShlRW1KT",
  "name": "Pet Type",
  "dataType": "SINGLE_OPTIONS",
  "fieldKey": "custom_object.pet.type",
  "objectKey": "custom_objects.pet",
  "showInForms": true,
  "options": [
    { "key": "dog", "label": "Dog" },
    { "key": "cat", "label": "Cat" },
    { "key": "bird", "label": "Bird" }
  ],
  "parentId": "folder_id_here"
}
```

### 2.3 Get Custom Field by ID

**Endpoint:** `GET /custom-fields/:id`
**Scope:** `locations/customFields.readonly`
**Token Type:** Sub-Account Token [^3]

This endpoint retrieves a single custom field or folder by its ID. The response includes a `field` object containing all field metadata.

```bash
curl -L 'https://services.leadconnectorhq.com/custom-fields/FIELD_ID_HERE' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28'
```

### 2.4 Update Custom Field by ID

**Endpoint:** `PUT /custom-fields/:id`
**Scope:** `locations/customFields.write`
**Token Type:** Sub-Account Token [^4]

The update endpoint accepts the same body parameters as the create endpoint (excluding `dataType`, `fieldKey`, and `objectKey`, which are immutable after creation). You can update the name, description, placeholder, options, and file-related settings.

```bash
curl -L -X PUT 'https://services.leadconnectorhq.com/custom-fields/FIELD_ID_HERE' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28' \
  -d '{
    "locationId": "ve9EPM428h8vShlRW1KT",
    "name": "Updated Pet Name",
    "showInForms": true
  }'
```

### 2.5 Get Custom Fields by Object Key

**Endpoint:** `GET /custom-fields/object-key/:objectKey`
**Scope:** `locations/customFields.readonly`
**Token Type:** Sub-Account Token [^5]

This endpoint retrieves all custom fields and folders associated with a specific object. The `objectKey` path parameter must include the `custom_objects.` prefix for custom objects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `objectKey` (path) | string | Yes | e.g., `custom_objects.pet` |
| `locationId` (query) | string | Yes | The sub-account location ID |

**Response Schema:**
- `fields`: array of field objects
- `folders`: array of folder objects

```bash
curl -L 'https://services.leadconnectorhq.com/custom-fields/object-key/custom_objects.pet?locationId=ve9EPM428h8vShlRW1KT' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28'
```

---

## 3. Authentication and Scopes Reference

All endpoints require a `Version` header set to `2021-07-28` and a `Bearer` token in the `Authorization` header.

| API Group | Read Scope | Write Scope | Token Type |
|---|---|---|---|
| Custom Fields | `locations/customFields.readonly` | `locations/customFields.write` | Sub-Account |

---

## 4. References

[^1]: [Custom Fields V2 — Overview](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/custom-fields-v-2) — GHL Marketplace API Docs

[^2]: [Create Custom Field](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/create-custom-field) — GHL Marketplace API Docs

[^3]: [Get Custom Field / Folder By Id](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/get-custom-field-by-id) — GHL Marketplace API Docs

[^4]: [Update Custom Field By Id](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/update-custom-field) — GHL Marketplace API Docs

[^5]: [Get Custom Fields By Object Key](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/get-custom-fields-by-object-key) — GHL Marketplace API Docs
