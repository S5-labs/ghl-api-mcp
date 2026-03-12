# GoHighLevel Custom Objects, Custom Fields & Associations: Comprehensive API Review

**Author:** Manus AI
**Date:** March 9, 2026
**API Version:** 2021-07-28
**Base URL:** `https://services.leadconnectorhq.com`

---

## Table of Contents

1. [Overview and Core Concepts](#1-overview-and-core-concepts)
2. [Custom Fields V2](#2-custom-fields-v2)
3. [Object Schema](#3-object-schema)
4. [Object Records](#4-object-records)
5. [Search Object Records](#5-search-object-records)
6. [Associations](#6-associations)
7. [Relations](#7-relations)
8. [Authentication and Scopes Reference](#8-authentication-and-scopes-reference)
9. [References](#9-references)

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

A real estate CRM requires a way to manage properties as a Custom Object and link them to potential buyer Contacts. The workflow would proceed as follows:

1. Define a Custom Object called `Property Listings` with fields such as `Property Name`, `Address`, `Price`, `Property Type`, `Bedrooms`, `Bathrooms`, and `Listing Status`. Set `Property Name` as the Primary Display Property.
2. Create individual records for each property, such as "Luxury Villa - 123 Street" (Price: $2,000,000) and "Modern Apartment - Downtown" (Price: $750,000).
3. Associate records with Contacts using the Associations API — for example, linking a contact named "John Doe" to "Luxury Villa - 123 Street" as an Interested Buyer. [^1]

### Current Platform Limitations

As of the time of this writing, the records API supports **Custom Objects** and **Company (Business)** only. Support for additional Standard Objects (Contacts, Opportunities) is planned for future releases. [^1]

---

## 2. Custom Fields V2

Custom fields are data points that allow you to capture and store specific information tailored to your business requirements. You can create fields across field types like text, numeric, selection options, and special fields like date/time or signature. [^2]

> **INFO:** The Custom Fields V2 API only supports Custom Objects and Company (Business) today. It will be extended to other Standard Objects in the future. [^2]

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

### 2.2 Field Key Conventions

The `fieldKey` is a critical identifier that follows a strict naming convention depending on the object type:

- **Custom Objects:** `custom_object.{objectKey}.{fieldKey}` — for example, `custom_object.pet.name` for a "name" field in a "pet" custom object. [^3]
- **Standard Objects (Business):** Standard field keys are used directly without the `custom_object.` prefix.

The `objectKey` for custom objects always uses the `custom_objects.` prefix (note the plural form), for example `custom_objects.pet`. [^3]

### 2.3 Create Custom Field

**Endpoint:** `POST /custom-fields/`
**Scope:** `locations/customFields.write`
**Token Type:** Sub-Account Token [^3]

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

### 2.4 Get Custom Field by ID

**Endpoint:** `GET /custom-fields/:id`
**Scope:** `locations/customFields.readonly`
**Token Type:** Sub-Account Token [^4]

This endpoint retrieves a single custom field or folder by its ID. The response includes a `field` object containing all field metadata.

```bash
curl -L 'https://services.leadconnectorhq.com/custom-fields/FIELD_ID_HERE' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28'
```

### 2.5 Update Custom Field by ID

**Endpoint:** `PUT /custom-fields/:id`
**Scope:** `locations/customFields.write`
**Token Type:** Sub-Account Token [^5]

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

### 2.6 Get Custom Fields by Object Key

**Endpoint:** `GET /custom-fields/object-key/:objectKey`
**Scope:** `locations/customFields.readonly`
**Token Type:** Sub-Account Token [^6]

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

## 3. Object Schema

The Object Schema API allows you to create, retrieve, and update the structural definition of custom and standard objects. [^7]

### 3.1 Create Custom Object

**Endpoint:** `POST /objects/`
**Scope:** `objects/schema.write`
**Token Type:** Agency Token [^8]

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

### 3.2 Get Object Schema by Key / ID

**Endpoint:** `GET /objects/:key`
**Scope:** `objects/schema.readonly`
**Token Type:** Sub-Account Token [^9]

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

### 3.3 Get All Objects for a Location

**Endpoint:** `GET /objects/`
**Scope:** `objects/schema.readonly`
**Token Type:** Sub-Account Token

This endpoint returns all objects for a given location, including contact, opportunity, business, and all custom objects. [^7]

---

## 4. Object Records

The Records API enables CRUD operations on individual records within any supported object. [^10]

### 4.1 Create Record

**Endpoint:** `POST /objects/:schemaKey/records`
**Scope:** `objects/record.write`
**Token Type:** Sub-Account Token [^11]

The `schemaKey` path parameter must include the `custom_objects.` prefix for custom objects (e.g., `custom_objects.pet`). For standard objects, use the respective key (e.g., `business`).

**Request Body Structure:**

The body is a single `object` containing the record's data. For custom objects, the `properties` field holds key-value pairs corresponding to the custom fields defined in the schema. [^12]

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

### 4.2 Update Record

**Endpoint:** `PUT /objects/:schemaKey/records/:recordId?locationId={locationId}`
**Scope:** `objects/record.write`
**Token Type:** Sub-Account Token [^12]

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

> **Note:** To remove the value of a custom field entirely, pass its value as `null`. For example: `{"properties": {"ticket_name": null}}` [^12]

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

### 4.3 Get Record by ID

**Endpoint:** `GET /objects/:schemaKey/records/:id`
**Token Type:** Sub-Account Token [^13]

```bash
curl -L 'https://services.leadconnectorhq.com/objects/custom_objects.pet/records/RECORD_ID_HERE' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Version: 2021-07-28'
```

---

## 5. Search Object Records

The Search Records API enables powerful, filterable, sortable, and paginated search across custom objects and business records. [^14]

> **Note:** Due to the complexity of the advanced filtering requirements, updates may take a few seconds to appear in the search results. [^14]

**Endpoint:** `POST /objects/:schemaKey/records/search`
**Scope:** `objects/record.readonly`
**Token Type:** Sub-Account Token [^15]

### 5.1 Request Body Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `locationId` | string | Yes | The sub-account location ID |
| `page` | number | Yes | Page number to retrieve |
| `pageLimit` | number | Yes | Number of results per page |
| `query` | string | No | Free-text search string (max 75 characters) |
| `searchAfter` | array | No | Cursor for deep pagination (returned in each response) |
| `filters` | array | No | Nested filter groups with logical operators |
| `sort` | array | No | Sorting criteria |

### 5.2 Filter Structure

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

### 5.3 Sample Search Requests

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

### 5.4 Sample Response

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

The `sort` array in each record is used as the `searchAfter` cursor for the next page of results, enabling efficient deep pagination. [^14]

---

## 6. Associations

Associations define the structural connection between two types of objects. Before you can link individual records together (Relations), you must first define the Association that describes the relationship type. [^16]

> An **Association** represents a connection between two records in the system. It is used to establish a meaningful link between different entities such as contacts, opportunities and custom objects. The purpose of an association is to categorize how two objects are related to each other and to provide labels that define their relationship. [^16]

### Supported Association Pairs

The following object-to-object association types are currently supported:
- Contact to Contact
- Contact to Custom Object
- Custom Object to Custom Object
- Opportunity to Custom Object

### Association Types

Associations can be either `USER_DEFINED` (created via the API) or `SYSTEM_DEFINED` (built-in platform associations). [^16]

### 6.1 Create Association

**Endpoint:** `POST /associations/`
**Scope:** `associations.write`
**Token Type:** Sub-Account Token [^17]

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

### 6.2 Get All Associations for a Location

**Endpoint:** `GET /associations/`
**Scope:** `associations.readonly`
**Token Type:** Sub-Account Token [^18]

| Parameter | Type | Required | Description |
|---|---|---|---|
| `locationId` (query) | string | Yes | The sub-account location ID |
| `skip` (query) | number | Yes | Number of records to skip (for pagination) |
| `limit` (query) | number | Yes | Maximum number of records to return |

### 6.3 Get Association by Object Keys

**Endpoint:** `GET /associations/` (with object key filters)
**Scope:** `associations.readonly`

This endpoint retrieves associations filtered by the object keys involved, making it easy to find all associations that involve a specific object type (e.g., all associations involving `custom_objects.pet`). [^16]

### 6.4 Update Association by ID

**Endpoint:** `PUT /associations/:id`
**Scope:** `associations.write`

This endpoint allows you to update the labels of an existing association. Note that the `key`, `firstObjectKey`, and `secondObjectKey` are immutable once the association is created. [^16]

### 6.5 Delete Association

**Endpoint:** `DELETE /associations/:id`
**Scope:** `associations.write`

> **Warning:** Deleting a USER_DEFINED Association by ID will also delete **all the relations** for that association. This is a destructive, irreversible operation. [^16]

---

## 7. Relations

A Relation is the actual link between two specific records, created using a previously defined Association. While the Association defines the *type* of connection, the Relation instantiates the actual connection between two record instances. [^16]

> A **Relation** specifies how two associated records are conceptually linked. Unlike an association, which simply establishes a connection, a relation defines the meaning behind the connection. [^16]

**Examples of Relations:**
- A mentor-mentee relation between two contacts.
- A supplier-client relation between two businesses.
- A tenant-lease relation between a tenant (contact) and a rental property (custom object).
- An investor-property relation between an opportunity and a property (custom object). [^16]

### 7.1 Create Relation

**Endpoint:** `POST /associations/relations`
**Scope:** `associations/relation.write`
**Token Type:** Sub-Account Token [^19]

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

### 7.2 Get All Relations by Record ID

**Endpoint:** `GET /associations/relations/:recordId`
**Scope:** `associations/relation.readonly`
**Token Type:** Sub-Account Token [^20]

This endpoint retrieves all relations for a given record, regardless of which side of the association the record is on.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `recordId` (path) | string | Yes | The ID of the record to look up |
| `locationId` (query) | string | Yes | The sub-account location ID |
| `skip` (query) | number | Yes | Records to skip for pagination |
| `limit` (query) | number | Yes | Max records to return |
| `associationIds` (query) | string[] | No | Filter by specific association IDs |

### 7.3 Delete Relation

**Endpoint:** `DELETE /associations/relations/:id`
**Scope:** `associations/relation.write`

Deletes a single relation between two records. Unlike deleting an Association (which cascades to all relations), deleting a single Relation only removes that specific link. [^16]

---

## 8. Authentication and Scopes Reference

All endpoints require a `Version` header set to `2021-07-28` and a `Bearer` token in the `Authorization` header. The following table summarizes the required scopes for each API group.

| API Group | Read Scope | Write Scope | Token Type |
|---|---|---|---|
| Custom Fields | `locations/customFields.readonly` | `locations/customFields.write` | Sub-Account |
| Object Schema (Read) | `objects/schema.readonly` | — | Sub-Account |
| Object Schema (Create) | — | `objects/schema.write` | **Agency** |
| Object Records | `objects/record.readonly` | `objects/record.write` | Sub-Account |
| Associations | `associations.readonly` | `associations.write` | Sub-Account |
| Relations | `associations/relation.readonly` | `associations/relation.write` | Sub-Account |

> **Important:** Creating a new Custom Object schema (`POST /objects/`) is the only operation in this documentation set that requires an **Agency Token**. All other operations use a Sub-Account Token.

---

## 9. References

[^1]: [Understanding Objects and Records in CRM](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0) — ClickUp Documentation, Ansh Nagrath, last updated 7/21/25

[^2]: [Custom Fields V2 — Overview](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/custom-fields-v-2) — GHL Marketplace API Docs

[^3]: [Create Custom Field](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/create-custom-field) — GHL Marketplace API Docs

[^4]: [Get Custom Field / Folder By Id](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/get-custom-field-by-id) — GHL Marketplace API Docs

[^5]: [Update Custom Field By Id](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/update-custom-field) — GHL Marketplace API Docs

[^6]: [Get Custom Fields By Object Key](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/get-custom-fields-by-object-key) — GHL Marketplace API Docs

[^7]: [Object Schema — Overview](https://marketplace.gohighlevel.com/docs/ghl/objects/object-schema) — GHL Marketplace API Docs

[^8]: [Create Custom Object](https://marketplace.gohighlevel.com/docs/ghl/objects/create-custom-object-schema) — GHL Marketplace API Docs

[^9]: [Get Object Schema by key / id](https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-schema-by-key) — GHL Marketplace API Docs

[^10]: [Records — Overview](https://marketplace.gohighlevel.com/docs/ghl/objects/records) — GHL Marketplace API Docs

[^11]: [Create Record](https://marketplace.gohighlevel.com/docs/ghl/objects/create-object-record) — GHL Marketplace API Docs

[^12]: [Update Records API](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296) — ClickUp Documentation, Ansh Nagrath, last updated 3/19/25

[^13]: [Get Record By Id](https://marketplace.gohighlevel.com/docs/ghl/objects/get-record-by-id) — GHL Marketplace API Docs

[^14]: [Records Search Api](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-379336) — ClickUp Documentation, Ansh Nagrath, last updated 12/8/25

[^15]: [Search Object Records](https://marketplace.gohighlevel.com/docs/ghl/objects/search-object-records) — GHL Marketplace API Docs

[^16]: [Understanding Associations And Relations](https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3) — ClickUp Documentation, Ansh Nagrath, last updated 10/9/25

[^17]: [Create Association](https://marketplace.gohighlevel.com/docs/ghl/associations/create-association) — GHL Marketplace API Docs

[^18]: [Get all associations for a sub-account / location](https://marketplace.gohighlevel.com/docs/ghl/associations/find-associations) — GHL Marketplace API Docs

[^19]: [Create Relation for you associated entities](https://marketplace.gohighlevel.com/docs/ghl/associations/create-relation) — GHL Marketplace API Docs

[^20]: [Get all relations By record Id](https://marketplace.gohighlevel.com/docs/ghl/associations/get-relations-by-record-id) — GHL Marketplace API Docs
