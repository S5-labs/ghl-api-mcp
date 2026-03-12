# GoHighLevel Custom Objects, Records, Associations & Relations API Review

**Author:** Manus AI
**Date:** March 9, 2026
**API Version:** 2021-07-28
**Base URL:** `https://services.leadconnectorhq.com`

---

## Table of Contents

1. [Overview and Core Concepts](#1-overview-and-core-concepts)
2. [Object Schema](#2-object-schema)
3. [Object Records](#3-object-records)
4. [Search Object Records](#4-search-object-records)
5. [Associations](#5-associations)
6. [Relations](#6-relations)
7. [Authentication and Scopes Reference](#7-authentication-and-scopes-reference)
8. [References](#8-references)

---

## 1. Overview and Core Concepts

The GoHighLevel CRM API organizes data around two foundational concepts: **Objects** and **Records**. Understanding the distinction between these is essential before working with any of the APIs covered in this document.

### Objects

> Objects represent entities in the CRM system, such as Contacts, Companies, or Custom Objects. Objects serve as a foundation for organising and managing data. [^1]

There are two categories of objects in the system. **Standard Objects** — such as Contacts, Opportunities, and Companies (Business) — come pre-defined with fixed schemas. **Custom Objects**, by contrast, allow users to define and structure their own data models entirely from scratch. Custom Objects offer flexibility by enabling users to specify the name of the object, the fields and field types (e.g., single line text), searchable properties (fields that can be indexed for searching), and the primary display property (the main identifier used for displaying the record). [^1]

> Currently, Custom Objects can be fully configured, while support for Standard Objects (like Contacts and Companies) will be expanded with additional configuration features in future updates. [^1]

### Records

A **Record** is a single instance of an object. Each record contains specific data according to the schema defined in its parent object. For example, if you have a Custom Object called `Property Listings`, then a specific property such as "Luxury Villa - 123 Street" would be a record of that object. [^1]

**Illustrative Use Case: Real Estate CRM**

1. Define a Custom Object called `Property Listings` with fields such as `Property Name`, `Address`, `Price`, `Property Type`, `Bedrooms`, `Bathrooms`, and `Listing Status`. Set `Property Name` as the Primary Display Property.
2. Create individual records for each property, such as "Luxury Villa - 123 Street" (Price: $2,000,000) and "Modern Apartment - Downtown" (Price: $750,000).
3. Associate records with Contacts using the Associations API — for example, linking a contact named "John Doe" to "Luxury Villa - 123 Street" as an Interested Buyer. [^1]

### Current Platform Limitations

As of the time of this writing, the records API supports **Custom Objects** and **Company (Business)** only. Support for additional Standard Objects (Contacts, Opportunities) is planned for future releases. [^1]

---

## 2. Object Schema

The Object Schema API allows you to create, retrieve, and update the structural definition of custom and standard objects. [^2]

### 2.1 Create Custom Object

**Endpoint:** `POST /objects/`
**Scope:** `objects/schema.write`
**Token Type:** Agency Token [^3]

> **Important:** Creating a custom object schema requires an **Agency Token**, not a Sub-Account Token. This is the only endpoint in this group that requires agency-level access.

**Request Body Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `labels` | object | Yes | Contains `singular` and `plural` display names |
| `key` | string | Yes | Internal key (lowercase + underscore_separated). The `custom_objects.` prefix is added automatically. |
| `description` | string | No | Description of the custom object |
| `locationId` | string | Yes | The sub-account location ID |
| `primaryDisplayPropertyDetails` | object | No | Defines the primary display field |

**Sample Request:**

```bash
curl -L 'https://services.leadconnectorhq.com/objects/' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <AGENCY_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -d '{
    "labels": {
      "singular": "Pet",
      "plural": "Pets"
    },
    "key": "custom_objects.pet",
    "description": "These are non vaccinated pets",
    "locationId": "ve9EPM428h8vShlRW1KT",
    "primaryDisplayPropertyDetails": {
      "key": "custom_objects.pet.name",
      "name": "Pet name",
      "dataType": "TEXT"
    }
  }'
```

### 2.2 Get Object Schema by Key / ID

**Endpoint:** `GET /objects/:key`
**Scope:** `objects/schema.readonly`
**Token Type:** Sub-Account Token [^4]

This endpoint retrieves the full schema of an object — including all its fields and properties. It supports contact, opportunity, business, and custom objects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` (path) | string | Yes | Object key, e.g., `custom_objects.pet` |
| `locationId` (query) | string | Yes | The sub-account location ID |
| `fetchProperties` (query) | string | No | Set to `true` to include all standard/custom fields |

**Response Schema:**
- `object`: the schema definition object
- `cache`: boolean indicating if the response was served from cache
- `fields`: array of field objects (when `fetchProperties=true`)

### 2.3 Get All Objects for a Location

**Endpoint:** `GET /objects/`
**Scope:** `objects/schema.readonly`
**Token Type:** Sub-Account Token

This endpoint returns all objects for a given location, including contact, opportunity, business, and all custom objects. [^2]

---

## 3. Object Records

The Records API enables CRUD operations on individual records within any supported object. [^5]

### 3.1 Create Record

**Endpoint:** `POST /objects/:schemaKey/records`
**Scope:** `objects/record.write`
**Token Type:** Sub-Account Token [^6]

The `schemaKey` path parameter must include the `custom_objects.` prefix for custom objects (e.g., `custom_objects.pet`). For standard objects, use the respective key (e.g., `business`).

**Request Body Structure:**

The body is a single `object` containing the record's data. For custom objects, the `properties` field holds key-value pairs corresponding to the custom fields defined in the schema. [^7]

**Sample Request — Custom Object Record:**

```json
{
  "properties": {
    "name": "Buddy",
    "type_of_pet": "dog",
    "age": 3,
    "vaccinated": {
      "add": ["rabies", "distemper"]
    }
  }
}
```

### 3.2 Update Record

**Endpoint:** `PUT /objects/:schemaKey/records/:recordId?locationId={locationId}`
**Scope:** `objects/record.write`
**Token Type:** Sub-Account Token [^7]

**Request Body Fields:**

| Field | Type | Notes |
|---|---|---|
| `owners` | array[string] | Limited to 1. Custom objects only. |
| `followers` | array[string] | Limited to 10. Custom objects only. |
| `properties` | object | Key-value pairs of field data |

**Field Type Formatting for `properties`:**

| Field Type | Body Format | Notes |
|---|---|---|
| Single Line / Multi Line | `"field_key": "string value"` | |
| Number | `"field_key": 1424` | |
| Phone | `"field_key": "+917000000000"` | Must include country code with `+` |
| Monetary | `"field_key": {"currency": "default", "value": 100}` | Only `"default"` currency supported |
| Dropdown (Single) / Radio | `"field_key": "option_key"` | Only option keys accepted, not labels |
| Dropdown (Multiple) / Checkbox | `"field_key": {"add": ["key1"], "remove": ["key2"]}` | Only option keys accepted |
| Date Picker | `"field_key": "2024-07-11"` | ISO 8601 format (YYYY-MM-DD) |
| File Upload | `"field_key": {"add": [{"url": "..."}], "remove": [{"url": "..."}]}` | URL must be valid |
| Textbox List | `"field_key.label_key": "value"` | Each label is a separate key |

**Complete Update Request Example:**

```json
{
  "owners": {
    "add": ["v5cEPM428h8vShlRW1KT"],
    "remove": ["sx6wyHhbFdRXh302Lunr"]
  },
  "followers": {
    "add": ["v5cEPM428h8vShlRW1KT", "17asdaashqw6wbsd7qwhe"],
    "remove": ["sx6wyHhbFdRXh302Lunr"]
  },
  "properties": {
    "customer_number": 1424,
    "ticket_name": "Customer not able login",
    "phone_number": "+917000000000",
    "money": {
      "currency": "default",
      "value": 100
    },
    "type_of_ticket": "doubt",
    "section_of_app": {
      "add": ["option_3_internal_key", "option_4_internal_key"],
      "remove": ["option_1_internal_key"]
    },
    "recieved_on": "2024-07-11",
    "my_files": {
      "add": [{"url": "https://example.com/file.pdf"}],
      "remove": [{"url": "https://example.com/old_file.pdf"}]
    },
    "my_textbox_list.option_a": "Value 1",
    "my_textbox_list.option_b": "Value 2"
  }
}
```

> **Note:** To remove the value of a custom field entirely, pass its value as `null`. For example: `{"properties": {"ticket_name": null}}` [^7]

**Company (Business) Update Example:**

When updating a Business record, standard fields are included alongside custom fields in the same `properties` object:

```json
{
  "properties": {
    "name": "Microsoft Inc",
    "city": "Redmond",
    "website": "https://www.microsoft.com",
    "state": "Washington D.C.",
    "address": "One Microsoft Way, Redmond, WA 98052-6399, USA",
    "postalcode": "98052-6390",
    "phone": "+919012345670",
    "email": "contact@microsoft.com",
    "country": "us",
    "customer_number": 1424
  }
}
```

### 3.3 Get Record by ID

**Endpoint:** `GET /objects/:schemaKey/records/:id`
**Token Type:** Sub-Account Token [^8]

```bash
curl -L 'https://services.leadconnectorhq.com/objects/custom_objects.pet/records/RECORD_ID_HERE' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28'
```

---

## 4. Search Object Records

The Search Records API enables powerful, filterable, sortable, and paginated search across custom objects and business records. [^9]

> **Note:** Due to the complexity of the advanced filtering requirements, updates may take a few seconds to appear in the search results. [^9]

**Endpoint:** `POST /objects/:schemaKey/records/search`
**Scope:** `objects/record.readonly`
**Token Type:** Sub-Account Token [^10]

### 4.1 Request Body Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `locationId` | string | Yes | The sub-account location ID |
| `page` | number | Yes | Page number to retrieve |
| `pageLimit` | number | Yes | Number of results per page |
| `query` | string | No | Free-text search string (max 75 characters) |
| `searchAfter` | array | No | Cursor for deep pagination (returned in each response) |
| `filters` | array | No | Nested filter groups with logical operators |
| `sort` | array | No | Sorting criteria |

### 4.2 Filter Structure

Filters are organized as nested groups with logical operators. Each filter has three components:
- **`field`:** The property to filter on (e.g., `properties.name`, `customFields.{field_id}`)
- **`operator`:** The comparison operation
- **`value`:** The value to compare against

**Supported Filter Operators:**

| Operator | Definition | Value Type | Character Limit |
|---|---|---|---|
| `eq` | Equals | Number, String, Boolean | None |
| `not_eq` | Not Equals | Number, String, Boolean | None |
| `contains` | Contains (no special characters) | String | 75 |
| `not_contains` | Not Contains (no special characters) | String | 75 |
| `exists` | Has a value | None (omit value) | None |
| `not_exists` | Has no value | None (omit value) | None |
| `range` | Range comparison | Object with `gt`/`lt` | 75 |

**Supported Filter Fields by Type:**

| Field Type | Filter Key Format | Supported Operators |
|---|---|---|
| TEXT, LARGE_TEXT, SINGLE_OPTIONS, RADIO, PHONE | `customFields.{field_id}` | eq, not_eq, contains, not_contains, exists, not_exists |
| EMAIL (Business only) | `customFields.{field_id}` | eq, not_eq, contains, not_contains, exists, not_exists |
| CHECKBOX, MULTIPLE_OPTIONS | `customFields.{field_id}` | eq, not_eq, exists, not_exists |
| NUMERICAL, MONETORY | `customFields.{field_id}` | range, exists, not_exists, eq, not_eq |
| DATE | `customFields.{field_id}` | range, exists, not_exists |
| TEXTBOX_LIST | `customFields.{field_id}.{option_id}` | eq, not_eq, contains, not_contains, exists, not_exists |

### 4.3 Sample Search Requests

**Custom Object Search with Nested AND/OR Filters:**

```json
{
  "locationId": "mbEVGywZGDnPkLKytm26",
  "page": 1,
  "pageLimit": 20,
  "query": "buddy",
  "filters": [
    {
      "group": "AND",
      "filters": [
        {
          "group": "OR",
          "filters": [
            {
              "group": "AND",
              "filters": [
                {
                  "field": "properties.name",
                  "operator": "eq",
                  "value": "jerry"
                }
              ]
            },
            {
              "group": "AND",
              "filters": [
                {
                  "field": "properties.color",
                  "operator": "eq",
                  "value": "red"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "sort": [
    {
      "field": "updatedAt",
      "direction": "asc"
    }
  ]
}
```

**Date Range Filter Example:**

```json
{
  "filters": [
    {
      "group": "AND",
      "filters": [
        {
          "field": "customFields.OBj007JIEmLP0IEHdV1l",
          "operator": "range",
          "value": {
            "gt": "2025-07-21T00:00:00.000Z",
            "lt": "2025-07-21T23:59:59.999Z"
          }
        }
      ]
    }
  ]
}
```

### 4.4 Sample Response

```json
{
  "records": [
    {
      "id": "67765debc3113762ca85855a",
      "locationId": "eHy2cOSZxMQzQ6Yyvl8P",
      "objectId": "6627560bb1344762ae5b110c",
      "objectKey": "custom_objects.mad",
      "createdBy": {
        "source": "WORKFLOW_NEW",
        "channel": "ISTIO_MESH",
        "sourceId": "26653146-ec82-435d-8a99-84ecdb7fde13",
        "createdAt": "2025-01-02T09:35:39.032Z"
      },
      "createdAt": "2025-01-02T09:35:39.033Z",
      "updatedAt": "2025-01-06T15:26:14.921Z",
      "owners": ["llj8YI0kb31XOHI5sUrQ"],
      "followers": [],
      "properties": {
        "name": "create 1qasdccasasdc",
        "number": 13,
        "cool": "mvjsdcasd"
      },
      "sort": [1735810539033, "67765debc3113762ca85855a"]
    }
  ],
  "total": 20
}
```

The `sort` array in each record is used as the `searchAfter` cursor for the next page of results, enabling efficient deep pagination. [^9]

---

## 5. Associations

Associations define the structural connection between two types of objects. Before you can link individual records together (Relations), you must first define the Association that describes the relationship type. [^11]

> An **Association** represents a connection between two records in the system. It is used to establish a meaningful link between different entities such as contacts, opportunities and custom objects. The purpose of an association is to categorize how two objects are related to each other and to provide labels that define their relationship. [^11]

### Supported Association Pairs

The following object-to-object association types are currently supported:
- Contact to Contact
- Contact to Custom Object
- Custom Object to Custom Object
- Opportunity to Custom Object

### Association Types

Associations can be either `USER_DEFINED` (created via the API) or `SYSTEM_DEFINED` (built-in platform associations). [^11]

### 5.1 Create Association

**Endpoint:** `POST /associations/`
**Scope:** `associations.write`
**Token Type:** Sub-Account Token [^12]

**Request Body Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `locationId` | string | Yes | The sub-account location ID |
| `key` | string | Yes | Unique key for this association (e.g., `student_teacher`) |
| `firstObjectLabel` | object | Yes | Display label for the first object in this association |
| `firstObjectKey` | object | Yes | Object key for the first entity (e.g., `custom_objects.children`) |
| `secondObjectLabel` | object | Yes | Display label for the second object |
| `secondObjectKey` | object | Yes | Object key for the second entity (e.g., `contact`) |

**Sample Request:**

```bash
curl -L 'https://services.leadconnectorhq.com/associations/' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28' \
  -d '{
    "locationId": "clF1LD04GTUKN3b3XuOj",
    "key": "student_teacher",
    "firstObjectLabel": "student",
    "firstObjectKey": "custom_objects.children",
    "secondObjectLabel": "Teacher",
    "secondObjectKey": "contact"
  }'
```

**Sample Response:**

```json
{
  "locationId": "clF1LD04GTUKN3b3XuOj",
  "id": "ve9EPM428h8vShlRW1KT",
  "key": "student_teacher",
  "firstObjectLabel": "student",
  "firstObjectKey": "custom_objects.children",
  "secondObjectLabel": "Teacher",
  "secondObjectKey": "contact",
  "associationType": "USER_DEFINED"
}
```

### 5.2 Get All Associations for a Location

**Endpoint:** `GET /associations/`
**Scope:** `associations.readonly`
**Token Type:** Sub-Account Token [^13]

| Parameter | Type | Required | Description |
|---|---|---|---|
| `locationId` (query) | string | Yes | The sub-account location ID |
| `skip` (query) | number | Yes | Number of records to skip (for pagination) |
| `limit` (query) | number | Yes | Maximum number of records to return |

### 5.3 Get Association by Object Keys

**Endpoint:** `GET /associations/` (with object key filters)
**Scope:** `associations.readonly`

This endpoint retrieves associations filtered by the object keys involved, making it easy to find all associations that involve a specific object type (e.g., all associations involving `custom_objects.pet`). [^11]

### 5.4 Update Association by ID

**Endpoint:** `PUT /associations/:id`
**Scope:** `associations.write`

This endpoint allows you to update the labels of an existing association. Note that the `key`, `firstObjectKey`, and `secondObjectKey` are immutable once the association is created. [^11]

### 5.5 Delete Association

**Endpoint:** `DELETE /associations/:id`
**Scope:** `associations.write`

> **Warning:** Deleting a USER_DEFINED Association by ID will also delete **all the relations** for that association. This is a destructive, irreversible operation. [^11]

---

## 6. Relations

A Relation is the actual link between two specific records, created using a previously defined Association. While the Association defines the *type* of connection, the Relation instantiates the actual connection between two record instances. [^11]

> A **Relation** specifies how two associated records are conceptually linked. Unlike an association, which simply establishes a connection, a relation defines the meaning behind the connection. [^11]

**Examples of Relations:**
- A mentor-mentee relation between two contacts.
- A supplier-client relation between two businesses.
- A tenant-lease relation between a tenant (contact) and a rental property (custom object).
- An investor-property relation between an opportunity and a property (custom object). [^11]

### 6.1 Create Relation

**Endpoint:** `POST /associations/relations`
**Scope:** `associations/relation.write`
**Token Type:** Sub-Account Token [^14]

**Request Body Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `locationId` | string | Yes | The sub-account location ID |
| `associationId` | string | Yes | The ID of the Association definition to use |
| `firstRecordId` | string | Yes | ID of the first record (corresponding to `firstObjectKey` in the Association) |
| `secondRecordId` | string | Yes | ID of the second record (corresponding to `secondObjectKey` in the Association) |

**Sample Request:**

```bash
curl -L 'https://services.leadconnectorhq.com/associations/relations' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28' \
  -d '{
    "locationId": "clF1LD04GTUKN3b3XuOj",
    "associationId": "ve9EPM428h8vShlRW1KT",
    "firstRecordId": "contact_id_abc123",
    "secondRecordId": "custom_object_record_id_xyz789"
  }'
```

### 6.2 Get All Relations by Record ID

**Endpoint:** `GET /associations/relations/:recordId`
**Scope:** `associations/relation.readonly`
**Token Type:** Sub-Account Token [^15]

This endpoint retrieves all relations for a given record, regardless of which side of the association the record is on.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `recordId` (path) | string | Yes | The ID of the record to look up |
| `locationId` (query) | string | Yes | The sub-account location ID |
| `skip` (query) | number | Yes | Records to skip for pagination |
| `limit` (query) | number | Yes | Max records to return |
| `associationIds` (query) | string[] | No | Filter by specific association IDs |

### 6.3 Delete Relation

**Endpoint:** `DELETE /associations/relations/:id`
**Scope:** `associations/relation.write`

Deletes a single relation between two records. Unlike deleting an Association (which cascades to all relations), deleting a single Relation only removes that specific link. [^11]

---

## 7. Authentication and Scopes Reference

All endpoints require a `Version` header set to `2021-07-28` and a `Bearer` token in the `Authorization` header. The following table summarizes the required scopes for each API group.

| API Group | Read Scope | Write Scope | Token Type |
|---|---|---|---|
| Object Schema (Read) | `objects/schema.readonly` | — | Sub-Account |
| Object Schema (Create) | — | `objects/schema.write` | **Agency** |
| Object Records | `objects/record.readonly` | `objects/record.write` | Sub-Account |
| Associations | `associations.readonly` | `associations.write` | Sub-Account |
| Relations | `associations/relation.readonly` | `associations/relation.write` | Sub-Account |

> **Important:** Creating a new Custom Object schema (`POST /objects/`) is the only operation in this documentation set that requires an **Agency Token**. All other operations use a Sub-Account Token.

---

## 8. References

[^1]: [Understanding Objects and Records in CRM](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0) — ClickUp Documentation, Ansh Nagrath, last updated 7/21/25

[^2]: [Object Schema — Overview](https://marketplace.gohighlevel.com/docs/ghl/objects/object-schema) — GHL Marketplace API Docs

[^3]: [Create Custom Object](https://marketplace.gohighlevel.com/docs/ghl/objects/create-custom-object-schema) — GHL Marketplace API Docs

[^4]: [Get Object Schema by key / id](https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-schema-by-key) — GHL Marketplace API Docs

[^5]: [Records — Overview](https://marketplace.gohighlevel.com/docs/ghl/objects/records) — GHL Marketplace API Docs

[^6]: [Create Record](https://marketplace.gohighlevel.com/docs/ghl/objects/create-object-record) — GHL Marketplace API Docs

[^7]: [Update Records API](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296) — ClickUp Documentation, Ansh Nagrath, last updated 3/19/25

[^8]: [Get Record By Id](https://marketplace.gohighlevel.com/docs/ghl/objects/get-record-by-id) — GHL Marketplace API Docs

[^9]: [Records Search Api](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-379336) — ClickUp Documentation, Ansh Nagrath, last updated 12/8/25

[^10]: [Search Object Records](https://marketplace.gohighlevel.com/docs/ghl/objects/search-object-records) — GHL Marketplace API Docs

[^11]: [Understanding Associations And Relations](https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3) — ClickUp Documentation, Ansh Nagrath, last updated 10/9/25

[^12]: [Create Association](https://marketplace.gohighlevel.com/docs/ghl/associations/create-association) — GHL Marketplace API Docs

[^13]: [Get all associations for a sub-account / location](https://marketplace.gohighlevel.com/docs/ghl/associations/find-associations) — GHL Marketplace API Docs

[^14]: [Create Relation for you associated entities](https://marketplace.gohighlevel.com/docs/ghl/associations/create-relation) — GHL Marketplace API Docs

[^15]: [Get all relations By record Id](https://marketplace.gohighlevel.com/docs/ghl/associations/get-relations-by-record-id) — GHL Marketplace API Docs
