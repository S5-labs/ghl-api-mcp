# GHL Core CRM & Business APIs — Comprehensive Review

*Generated: March 2026 | Source: GHL API v2 Official Documentation*


---

## Overview

This document provides a comprehensive review of the GoHighLevel Core CRM & Business API sections, covering Businesses, Companies, Sub-Accounts (Locations), and Users. These APIs form the foundational layer of the GHL platform, enabling management of the organizational hierarchy from agency level down to individual sub-accounts and their associated users and business entities.

Source: [GHL API GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs) and [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)


This document covers **4 API sections** with a total of **42 endpoints**.


## Quick Reference

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Business API** | 5 | `businesses.readonly`, `businesses.write` |
| **Companies API** | 1 | `companies.readonly` |
| **Sub-Account (Formerly location) API** | 29 | `locations.internal-access-only`, `locations.readonly`, `locations.write`, `locations/customFields.readonly` _(+7 more)_ |
| **Users API** | 7 | `users.readonly`, `users.write` |

## Detailed API Reference


---

## Business API

Documentation for business API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `PUT` | `/businesses/{businessId}` | Update Business | `businesses.write` |
| `DELETE` | `/businesses/{businessId}` | Delete Business | `businesses.write` |
| `GET` | `/businesses/{businessId}` | Get Business | `businesses.readonly` |
| `GET` | `/businesses/` | Get Businesses by Location | `businesses.readonly` |
| `POST` | `/businesses/` | Create Business | `businesses.write` |

### PUT Update Business

**Endpoint:** `PUT https://services.leadconnectorhq.com/businesses/{businessId}`

**Required Scope(s):** `businesses.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `businessId` | `string` | Yes |  | 5DP4iH6HLkQsiKESj6rh |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | No |  | Microsoft |
| `phone` | `string` | No |  | +18832327657 |
| `email` | `string` | No |  | john@deo.com |
| `postalCode` | `string` | No |  | 12312312 |
| `website` | `string` | No |  | www.xyz.com |
| `address` | `string` | No |  | street adress |
| `state` | `string` | No |  | new york |
| `city` | `string` | No |  | new york |
| `country` | `string` | No |  | us |
| `description` | `string` | No |  | business description |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success Value | True |
| `buiseness` | `object` | Yes | Business Response |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/businesses/:<businessId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Microsoft",
    "phone": "+18832327657",
    "email": "john@deo.com",
    "postalCode": "12312312",
    "website": "www.xyz.com",
    "address": "street adress",
    "state": "new york",
    "city": "new york"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Business

**Endpoint:** `DELETE https://services.leadconnectorhq.com/businesses/{businessId}`

**Required Scope(s):** `businesses.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `businessId` | `string` | Yes |  | 5DP4iH6HLkQsiKESj6rh |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success value | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/businesses/:<businessId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Business

**Endpoint:** `GET https://services.leadconnectorhq.com/businesses/{businessId}`

**Required Scope(s):** `businesses.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `businessId` | `string` | Yes |  | 5DP4iH6HLkQsiKESj6rh |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `business` | `object` | Yes | Business Response |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/businesses/:<businessId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Businesses by Location

**Endpoint:** `GET https://services.leadconnectorhq.com/businesses/`

**Required Scope(s):** `businesses.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | 5DP4iH6HLkQsiKESj6rh |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `businesses` | `array[BusinessDto]` | Yes | Business Response |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/businesses/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Business

**Endpoint:** `POST https://services.leadconnectorhq.com/businesses/`

**Required Scope(s):** `businesses.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes |  | Microsoft |
| `locationId` | `string` | Yes |  | 5DP4iH6HLkQsiKESj6rh |
| `phone` | `string` | No |  | +18832327657 |
| `email` | `string` | No |  | john@deo.com |
| `website` | `string` | No |  | www.xyz.com |
| `address` | `string` | No |  | street adress |
| `city` | `string` | No |  | new york |
| `postalCode` | `string` | No |  | 12312312 |
| `state` | `string` | No |  | new york |
| `country` | `string` | No |  | us |
| `description` | `string` | No |  | business description |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success Value | True |
| `buiseness` | `object` | Yes | Business Response |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/businesses/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Microsoft",
    "locationId": "5DP4iH6HLkQsiKESj6rh",
    "phone": "+18832327657",
    "email": "john@deo.com",
    "website": "www.xyz.com",
    "address": "street adress",
    "city": "new york",
    "postalCode": "12312312"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


---

## Companies API

Documentation for Companies API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/companies/{companyId}` | Get Company | `companies.readonly` |

### GET Get Company

**Endpoint:** `GET https://services.leadconnectorhq.com/companies/{companyId}`

Get Comapny

**Required Scope(s):** `companies.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `company` | `GetCompanyByIdSchema` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/companies/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


---

## Sub-Account (Formerly location) API

Documentation for Sub-Account (Formerly location) API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/locations/search` | Search | `locations.readonly, locations.readonly` |
| `GET` | `/locations/{locationId}` | Get Sub-Account (Formerly Location) | `locations.readonly, locations.readonly` |
| `PUT` | `/locations/{locationId}` | Put Sub-Account (Formerly Location) | `locations.write` |
| `DELETE` | `/locations/{locationId}` | Delete Sub-Account (Formerly Location) | `locations.internal-access-only` |
| `GET` | `/locations/{locationId}/tags` | Get Tags | `locations/tags.readonly` |
| `POST` | `/locations/{locationId}/tags` | Create Tag | `locations/tags.write` |
| `GET` | `/locations/{locationId}/tags/{tagId}` | Get tag by id | `—` |
| `PUT` | `/locations/{locationId}/tags/{tagId}` | Update tag | `—` |
| `DELETE` | `/locations/{locationId}/tags/{tagId}` | Delete tag | `—` |
| `POST` | `/locations/{locationId}/tasks/search` | Task Search Filter | `locations/tasks.readonly` |
| `GET` | `/locations/{locationId}/recurring-tasks/{id}` | Get Recurring Task By Id | `—` |
| `PUT` | `/locations/{locationId}/recurring-tasks/{id}` | Update Recurring Task | `—` |
| `DELETE` | `/locations/{locationId}/recurring-tasks/{id}` | Delete Recurring Task | `—` |
| `POST` | `/locations/{locationId}/recurring-tasks` | Create Recurring Task | `—` |
| `GET` | `/locations/{locationId}/customFields` | Get Custom Fields | `locations/customFields.readonly` |
| `POST` | `/locations/{locationId}/customFields` | Create Custom Field | `locations/customFields.write` |
| `GET` | `/locations/{locationId}/customFields/{id}` | Get Custom Field | `—` |
| `PUT` | `/locations/{locationId}/customFields/{id}` | Update Custom Field | `—` |
| `DELETE` | `/locations/{locationId}/customFields/{id}` | Delete Custom Field | `—` |
| `POST` | `/locations/{locationId}/customFields/upload` | Uploads File to customFields | `locations/customFields.write` |
| `GET` | `/locations/{locationId}/customValues` | Get Custom Values | `locations/customValues.readonly` |
| `POST` | `/locations/{locationId}/customValues` | Create Custom Value | `locations/customValues.write` |
| `GET` | `/locations/{locationId}/customValues/{id}` | Get Custom Value | `—` |
| `PUT` | `/locations/{locationId}/customValues/{id}` | Update Custom Value | `—` |
| `DELETE` | `/locations/{locationId}/customValues/{id}` | Delete Custom Value | `—` |
| `GET` | `/locations/{locationId}/timezones` | Fetch Timezones | `locations.readonly, locations.readonly` |
| `GET` | `/locations/{locationId}/templates` | GET all or email/sms templates | `locations/templates.readonly` |
| `DELETE` | `/locations/{locationId}/templates/{id}` | DELETE an email/sms template | `—` |
| `POST` | `/locations/` | Create Sub-Account (Formerly Location) | `locations.write` |

### GET Search

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/search`

Search Sub-Account (Formerly Location)

**Required Scope(s):** `locations.readonly`, `locations.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | No | The company/agency id on which you want to perform the search | 5DP4iH6HLkQsiKESj6rh |
| `skip` | `string` | No | The value by which the results should be skipped. Default will be 0 | 1 |
| `limit` | `string` | No | The value by which the results should be limited. Default will be 10 | 10 |
| `order` | `string` | No | The order in which the results should be returned - Allowed values asc, desc. Default will be asc | asc |
| `email` | `string` | No |  | johndoe@mail.com |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locations` | `array[GetLocationSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/search' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Sub-Account (Formerly Location)

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/{locationId}`

Get details of a Sub-Account (Formerly Location) by passing the sub-account id

**Required Scope(s):** `locations.readonly`, `locations.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `location` | `GetLocationByIdSchema` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Put Sub-Account (Formerly Location)

**Endpoint:** `PUT https://services.leadconnectorhq.com/locations/{locationId}`

Update a Sub-Account (Formerly Location) based on the data provided

**Required Scope(s):** `locations.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | No | The name for the sub-account/location | Mark Shoes |
| `phone` | `string` | No | The phone number of the business for which sub-account is created | +1410039940 |
| `companyId` | `string` | Yes | Company/Agency Id | UAXssdawIWAWD |
| `address` | `string` | No | The address of the business for which sub-account is created | 4th fleet street |
| `city` | `string` | No | The city where the business is located for which sub-account is created | New York |
| `state` | `string` | No | The state in which the business operates for which sub-account is created | Illinois |
| `country` | `string` | No | The country in which the business is present for which sub-account is created | US |
| `postalCode` | `string` | No | The postal code of the business for which sub-account is created | 567654 |
| `website` | `string` | No | The website of the business for which sub-account is created | https://yourwebsite.com |
| `timezone` | `string` | No | The timezone of the business for which sub-account is created | US/Central |
| `prospectInfo` | `object` | No |  | {'firstName': 'John', 'lastName': 'Doe', 'email': 'john.doe@ |
| `settings` | `object` | No | The default settings for location |  |
| `social` | `object` | No | The social media links for location |  |
| `twilio` | `object` | No | The twilio credentials for location |  |
| `mailgun` | `object` | No | The mailgun credentials for location |  |
| `snapshot` | `object` | No | The snapshot to be updated in the location. |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | No | Location Id | ve9EPM428h8vShlRW1KT |
| `companyId` | `string` | No | Company/Agency Id | UAXssdawIWAWD |
| `name` | `string` | No | The name for the sub-account/location | Mark Shoes |
| `phone` | `string` | No | The phone number of the business for which sub-account is created | +1410039940 |
| `email` | `string` | No | The email for the sub-account/location | john.doe@mail.com |
| `address` | `string` | No | The address of the business for which sub-account is created | 4th fleet street |
| `city` | `string` | No | The city where the business is located for which sub-account is created | New York |
| `state` | `string` | No | The state in which the business operates for which sub-account is created | Illinois |
| `domain` | `string` | No |  | test.msgsndr.com |
| `country` | `string` | No | The country in which the business is present for which sub-account is created | US |
| `postalCode` | `string` | No | The postal code of the business for which sub-account is created | 567654 |
| `website` | `string` | No | The website of the business for which sub-account is created | https://yourwebsite.com |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/locations/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Mark Shoes",
    "phone": "+1410039940",
    "companyId": "UAXssdawIWAWD",
    "address": "4th fleet street",
    "city": "New York",
    "state": "Illinois",
    "country": "US",
    "postalCode": "567654"
}'
```

**Response Codes:** `200` | `400` | `401`


### DELETE Delete Sub-Account (Formerly Location)

**Endpoint:** `DELETE https://services.leadconnectorhq.com/locations/{locationId}`

Delete a Sub-Account (Formerly Location) from the Agency

**Required Scope(s):** `locations.internal-access-only`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `deleteTwilioAccount` | `boolean` | Yes | Boolean value to indicate whether to delete Twilio Account or not | False |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success status of the API | True |
| `message` | `string` | Yes | Success message of the API | Deleted location with id: ve9EPM428h8vShlRW1KT |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/locations/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Tags

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/{locationId}/tags`

Get Sub-Account (Formerly Location) Tags

**Required Scope(s):** `locations/tags.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `tags` | `array[LocationTagsSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/:<locationId>/tags' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Tag

**Endpoint:** `POST https://services.leadconnectorhq.com/locations/{locationId}/tags`

Create tag

**Required Scope(s):** `locations/tags.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | Tag name | Tag |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `tag` | `LocationTagsSchema` | No |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/locations/:<locationId>/tags' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Tag"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get tag by id

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/{locationId}/tags/{tagId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `tagId` | `string` | Yes | Tag Id | flGwEuzsfJOia1i1ikRN |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `tag` | `LocationTagsSchema` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/:<locationId>/tags/:<tagId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update tag

**Endpoint:** `PUT https://services.leadconnectorhq.com/locations/{locationId}/tags/{tagId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `tagId` | `string` | Yes | Tag Id | flGwEuzsfJOia1i1ikRN |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | Tag name | Tag |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `tag` | `LocationTagsSchema` | No |  |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/locations/:<locationId>/tags/:<tagId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Tag"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete tag

**Endpoint:** `DELETE https://services.leadconnectorhq.com/locations/{locationId}/tags/{tagId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `tagId` | `string` | Yes | Tag Id | flGwEuzsfJOia1i1ikRN |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `succeded` | `boolean` | No |  | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/locations/:<locationId>/tags/:<tagId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Task Search Filter

**Endpoint:** `POST https://services.leadconnectorhq.com/locations/{locationId}/tasks/search`

Task Search

**Required Scope(s):** `locations/tasks.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `contactId` | `array[string]` | No | Contact Ids | ['dSMo5jnqkJyh8YeGXM7k', 'j5WESpmRj816VtyUuWwh'] |
| `completed` | `boolean` | No | Task Completed Or Pending | True |
| `assignedTo` | `array[string]` | No | Assigned User Ids | ['0004Mtfsd11SBU1mBPgd'] |
| `query` | `string` | No | Search Value | Task Name |
| `limit` | `number` | No | Limit To Api | 10 |
| `skip` | `number` | No | Number Of Tasks To Skip | 10 |
| `businessId` | `string` | No | Bussiness Id | 6348240b98722079e5417332 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `tasks` | `array[array]` | No |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/locations/:<locationId>/tasks/search' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "contactId": [
        "dSMo5jnqkJyh8YeGXM7k",
        "j5WESpmRj816VtyUuWwh"
    ],
    "completed": true,
    "assignedTo": [
        "0004Mtfsd11SBU1mBPgd"
    ],
    "query": "Task Name",
    "limit": 10,
    "skip": 10,
    "businessId": "6348240b98722079e5417332"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Recurring Task By Id

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/{locationId}/recurring-tasks/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Recurring Task Id |  |
| `locationId` | `string` | Yes | Location Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `recurringTask` | `object` | Yes | Recurring Tasks |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/:<locationId>/recurring-tasks/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### PUT Update Recurring Task

**Endpoint:** `PUT https://services.leadconnectorhq.com/locations/{locationId}/recurring-tasks/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Recurring Task Id |  |
| `locationId` | `string` | Yes | Location Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | `string` | No | Name of the task | Task Name |
| `description` | `string` | No | Description of the task | Task Description |
| `contactIds` | `array[string]` | No | Contact Id | ['sx6wyHhbFdRXh302Lunr'] |
| `owners` | `array[string]` | No | Assigned To | ['sx6wyHhbFdRXh302Lunr'] |
| `rruleOptions` | `object` | No | Recurring rules | {'intervalType': 'hourly', 'interval': 1, 'startDate': '2025 |
| `ignoreTaskCreation` | `boolean` | No | Create initial task or not | True |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `recurringTask` | `object` | Yes | Recurring Tasks |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/locations/:<locationId>/recurring-tasks/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Task Name",
    "description": "Task Description",
    "contactIds": [
        "sx6wyHhbFdRXh302Lunr"
    ],
    "owners": [
        "sx6wyHhbFdRXh302Lunr"
    ],
    "rruleOptions": {
        "intervalType": "hourly",
        "interval": 1,
        "startDate": "2025-07-23T10:00:00.000Z",
        "dueAfterSeconds": 600
    },
    "ignoreTaskCreation": true
}'
```

**Response Codes:** `200` | `400` | `401`


### DELETE Delete Recurring Task

**Endpoint:** `DELETE https://services.leadconnectorhq.com/locations/{locationId}/recurring-tasks/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Recurring Task Id |  |
| `locationId` | `string` | Yes | Location Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes | Recurring Task Id | sx6wyHhbFdRXh302Lunr |
| `success` | `boolean` | Yes | Success | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/locations/:<locationId>/recurring-tasks/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Recurring Task

**Endpoint:** `POST https://services.leadconnectorhq.com/locations/{locationId}/recurring-tasks`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | `string` | Yes | Name of the task | Task Name |
| `description` | `string` | No | Description of the task | Task Description |
| `contactIds` | `array[string]` | No | Contact Id | ['sx6wyHhbFdRXh302Lunr'] |
| `owners` | `array[string]` | No | Assigned To | ['sx6wyHhbFdRXh302Lunr'] |
| `rruleOptions` | `object` | Yes | Recurring rules | {'intervalType': 'hourly', 'interval': 1, 'startDate': '2025 |
| `ignoreTaskCreation` | `boolean` | No | Create initial task or not | True |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `recurringTask` | `object` | Yes | Recurring Tasks |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/locations/:<locationId>/recurring-tasks' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Task Name",
    "description": "Task Description",
    "contactIds": [
        "sx6wyHhbFdRXh302Lunr"
    ],
    "owners": [
        "sx6wyHhbFdRXh302Lunr"
    ],
    "rruleOptions": {
        "intervalType": "hourly",
        "interval": 1,
        "startDate": "2025-07-23T10:00:00.000Z",
        "dueAfterSeconds": 600
    },
    "ignoreTaskCreation": true
}'
```

**Response Codes:** `201` | `400` | `401`


### GET Get Custom Fields

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/{locationId}/customFields`

**Required Scope(s):** `locations/customFields.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `model` | `string` | No | Model of the custom field you want to retrieve | opportunity |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customFields` | `array[CustomFieldSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customFields' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Custom Field

**Endpoint:** `POST https://services.leadconnectorhq.com/locations/{locationId}/customFields`

**Required Scope(s):** `locations/customFields.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes |  | Custom Field |
| `dataType` | `string` | Yes |  | TEXT |
| `placeholder` | `string` | No |  | Placeholder Text |
| `acceptedFormat` | `array[string]` | No |  | ['.pdf', '.docx', '.jpeg'] |
| `isMultipleFile` | `boolean` | No |  | False |
| `maxNumberOfFiles` | `number` | No |  | 2 |
| `textBoxListOptions` | `array[object]` | No |  |  |
| `position` | `number` | No |  | 0 |
| `model` | `string` | No | Model of the custom field you want to create | opportunity |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customField` | `CustomFieldSchema` | No |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customFields' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Custom Field",
    "dataType": "TEXT",
    "placeholder": "Placeholder Text",
    "acceptedFormat": [
        ".pdf",
        ".docx",
        ".jpeg"
    ],
    "isMultipleFile": false,
    "maxNumberOfFiles": 2,
    "textBoxListOptions": [],
    "position": 0
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Get Custom Field

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/{locationId}/customFields/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id |  |
| `id` | `string` | Yes | Custom Field Id or Field Key (e.g. "contact.first_name" or "opportunity.pipeline_id") |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customField` | `CustomFieldSchema` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customFields/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Custom Field

**Endpoint:** `PUT https://services.leadconnectorhq.com/locations/{locationId}/customFields/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `id` | `string` | Yes | Custom Field Id | 00NhGCcN1tlO8ZHcu7Wb |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes |  | Custom Field |
| `placeholder` | `string` | No |  | Placeholder Text |
| `acceptedFormat` | `array[string]` | No |  | ['.pdf', '.docx', '.jpeg'] |
| `isMultipleFile` | `boolean` | No |  | False |
| `maxNumberOfFiles` | `number` | No |  | 2 |
| `textBoxListOptions` | `array[object]` | No |  |  |
| `position` | `number` | No |  | 0 |
| `model` | `string` | No | Model of the custom field you want to update | opportunity |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customField` | `CustomFieldSchema` | No |  |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customFields/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Custom Field",
    "placeholder": "Placeholder Text",
    "acceptedFormat": [
        ".pdf",
        ".docx",
        ".jpeg"
    ],
    "isMultipleFile": false,
    "maxNumberOfFiles": 2,
    "textBoxListOptions": [],
    "position": 0,
    "model": "opportunity"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Custom Field

**Endpoint:** `DELETE https://services.leadconnectorhq.com/locations/{locationId}/customFields/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `id` | `string` | Yes | Custom Field Id | 00NhGCcN1tlO8ZHcu7Wb |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `succeded` | `boolean` | No |  | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customFields/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Uploads File to customFields

**Endpoint:** `POST https://services.leadconnectorhq.com/locations/{locationId}/customFields/upload`

**Required Scope(s):** `locations/customFields.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | No | Id(Contact Id/Opportunity Id/Custom Field Id) | aWdODOBVOlH1RUFKWQke |
| `maxFiles` | `string` | No | Max number of files | 15 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `uploadedFiles` | `object` | No | Uploaded files | {'FileName.csv': 'https://highlevel-private-staging.storage. |
| `meta` | `array[string]` | No | Meta data of uploaded files | [{'fieldname': 'FileName.csv', 'originalname': 'FileName.csv |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customFields/upload' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "id": "aWdODOBVOlH1RUFKWQke",
    "maxFiles": "15"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Custom Values

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/{locationId}/customValues`

**Required Scope(s):** `locations/customValues.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customValues` | `array[CustomValueSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customValues' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Custom Value

**Endpoint:** `POST https://services.leadconnectorhq.com/locations/{locationId}/customValues`

**Required Scope(s):** `locations/customValues.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes |  | Custom Field Name |
| `value` | `string` | Yes |  | Value |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customValue` | `CustomValueSchema` | No |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customValues' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Custom Field Name",
    "value": "Value"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Get Custom Value

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/{locationId}/customValues/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `id` | `string` | Yes | Custom Value Id | kOBjMVAJhFuUeYIojVet |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customValue` | `CustomValueSchema` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customValues/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Custom Value

**Endpoint:** `PUT https://services.leadconnectorhq.com/locations/{locationId}/customValues/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `id` | `string` | Yes | Custom Value Id | kOBjMVAJhFuUeYIojVet |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes |  | Custom Field Name |
| `value` | `string` | Yes |  | Value |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customValue` | `CustomValueSchema` | No |  |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customValues/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Custom Field Name",
    "value": "Value"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Custom Value

**Endpoint:** `DELETE https://services.leadconnectorhq.com/locations/{locationId}/customValues/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `id` | `string` | Yes | Custom Value Id | kOBjMVAJhFuUeYIojVet |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `succeded` | `boolean` | No |  | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/locations/:<locationId>/customValues/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Fetch Timezones

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/{locationId}/timezones`

Fetch the available timezones

**Required Scope(s):** `locations.readonly`, `locations.readonly`


**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/:<locationId>/timezones' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET GET all or email/sms templates

**Endpoint:** `GET https://services.leadconnectorhq.com/locations/{locationId}/templates`

**Required Scope(s):** `locations/templates.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `deleted` | `boolean` | No |  | False |
| `skip` | `string` | No |  | 1 |
| `limit` | `string` | No |  | 25 |
| `type` | `string` | No |  |  |
| `originId` | `string` | Yes | Origin Id | ve9EPM428h8vShlRW1KT |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `templates` | `array[object]` | No |  |  |
| `totalCount` | `number` | No |  | 100 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/locations/:<locationId>/templates' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE DELETE an email/sms template

**Endpoint:** `DELETE https://services.leadconnectorhq.com/locations/{locationId}/templates/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `id` | `string` | Yes | Template Id | ve9EPM428h8vShlRW1KT |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/locations/:<locationId>/templates/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Sub-Account (Formerly Location)

**Endpoint:** `POST https://services.leadconnectorhq.com/locations/`

<div>
                  <p>Create a new Sub-Account (Formerly Location) based on the data provided</p> 
                  <div>
                    <span style= "display: inline-block;
                                width: 25px; height: 25px;
                                background-color: yellow;
                                color: black;
                                font-weight: bold;
                                font-size: 24px;
                                text-align: center;
                                line-height: 22px;
                                border: 2px solid black;
                                border-radius: 10%;
                                margin-right: 10px;">
                                !
                      </span>
                      <span>
                        <strong>
                          This feature is only available on Agency Pro ($497) plan.
                        </strong>
                      </span>
                  </div>
                </div>
    

**Required Scope(s):** `locations.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | The name for the sub-account/location | Mark Shoes |
| `phone` | `string` | No | The phone number of the business for which sub-account is created with the appropriate country-code | +1410039940 |
| `companyId` | `string` | Yes | Company/Agency Id | UAXssdawIWAWD |
| `address` | `string` | No | The address of the business for which sub-account is created | 4th fleet street |
| `city` | `string` | No | The city where the business is located for which sub-account is created | New York |
| `state` | `string` | No | The state in which the business operates for which sub-account is created | Illinois |
| `country` | `string` | No | The 2 letter country-code in which the business is present for which sub-account is created | US |
| `postalCode` | `string` | No | The postal code of the business for which sub-account is created | 567654 |
| `website` | `string` | No | The website of the business for which sub-account is created | https://yourwebsite.com |
| `timezone` | `string` | No | The timezone of the business for which sub-account is created | US/Central |
| `prospectInfo` | `object` | No |  | {'firstName': 'John', 'lastName': 'Doe', 'email': 'john.doe@ |
| `settings` | `object` | No | The default settings for location |  |
| `social` | `object` | No | The social media links for location |  |
| `twilio` | `object` | No | The twilio credentials for location |  |
| `mailgun` | `object` | No | The mailgun credentials for location |  |
| `snapshotId` | `string` | No | The snapshot ID to be loaded into the location. | XXXXXXXXXXX |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | No | Location Id | ve9EPM428h8vShlRW1KT |
| `companyId` | `string` | No | Company/Agency Id | UAXssdawIWAWD |
| `name` | `string` | No | The name for the sub-account/location | Mark Shoes |
| `phone` | `string` | No | The phone number of the business for which sub-account is created | +1410039940 |
| `email` | `string` | No | The email for the sub-account/location | john.doe@mail.com |
| `address` | `string` | No | The address of the business for which sub-account is created | 4th fleet street |
| `city` | `string` | No | The city where the business is located for which sub-account is created | New York |
| `state` | `string` | No | The state in which the business operates for which sub-account is created | Illinois |
| `domain` | `string` | No |  | test.msgsndr.com |
| `country` | `string` | No | The country in which the business is present for which sub-account is created | US |
| `postalCode` | `string` | No | The postal code of the business for which sub-account is created | 567654 |
| `website` | `string` | No | The website of the business for which sub-account is created | https://yourwebsite.com |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/locations/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Mark Shoes",
    "phone": "+1410039940",
    "companyId": "UAXssdawIWAWD",
    "address": "4th fleet street",
    "city": "New York",
    "state": "Illinois",
    "country": "US",
    "postalCode": "567654"
}'
```

**Response Codes:** `200` | `400` | `401`


---

## Users API

Documentation for users API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/users/search` | Search Users | `users.readonly, users.readonly` |
| `POST` | `/users/search/filter-by-email` | Filter Users by Email | `users.readonly, users.readonly` |
| `GET` | `/users/{userId}` | Get User | `users.readonly, users.readonly` |
| `PUT` | `/users/{userId}` | Update User | `users.write, users.write` |
| `DELETE` | `/users/{userId}` | Delete User | `users.write, users.write` |
| `GET` | `/users/` | Get User by Location | `users.readonly` |
| `POST` | `/users/` | Create User | `users.write, users.write` |

### GET Search Users

**Endpoint:** `GET https://services.leadconnectorhq.com/users/search`

**Required Scope(s):** `users.readonly`, `users.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes | Company ID in which the search needs to be performed |  |
| `query` | `string` | No | The search term for the user is matched based on the user full name, email or phone |  |
| `skip` | `string` | No | No of results to be skipped before returning the result |  |
| `limit` | `string` | No | No of results to be limited before returning the result |  |
| `locationId` | `string` | No | Location ID in which the search needs to be performed |  |
| `type` | `string` | No | Type of the users to be filtered in the search |  |
| `role` | `string` | No | Role of the users to be filtered in the search |  |
| `ids` | `string` | No | List of User IDs to be filtered in the search |  |
| `sort` | `string` | No | The field on which sort is applied in which the results need to be sorted. Default is based on the f |  |
| `sortDirection` | `string` | No | The direction in which the results need to be sorted |  |
| `enabled2waySync` | `boolean` | No |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `users` | `array[UserSchema]` | No |  |  |
| `count` | `number` | No |  | 1231 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/users/search' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Filter Users by Email

**Endpoint:** `POST https://services.leadconnectorhq.com/users/search/filter-by-email`

Filter users by company ID, deleted status, and email array

**Required Scope(s):** `users.readonly`, `users.readonly`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `companyId` | `string` | Yes | Company ID to filter users | 5DP41231LkQsiKESj6rh |
| `emails` | `array[string]` | Yes | Array of email addresses to filter users | ['user1@example.com', 'user2@example.com'] |
| `deleted` | `boolean` | No | Filter deleted users | False |
| `skip` | `string` | No | No of results to be skipped before returning the result | 1 |
| `limit` | `string` | No | No of results to be limited before returning the result | 10 |
| `projection` | `string` | No | Projection fields to return. Use "all" for all fields, or specify comma-separated field names. Defau | all |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `users` | `array[UserSchema]` | No |  |  |
| `count` | `number` | No |  | 1231 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/users/search/filter-by-email' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "companyId": "5DP41231LkQsiKESj6rh",
    "emails": [
        "user1@example.com",
        "user2@example.com"
    ],
    "deleted": false,
    "skip": "1",
    "limit": "10",
    "projection": "all"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get User

**Endpoint:** `GET https://services.leadconnectorhq.com/users/{userId}`

**Required Scope(s):** `users.readonly`, `users.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `userId` | `string` | Yes | User Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | No |  | 0IHuJvc2ofPAAA8GzTRi |
| `name` | `string` | No |  | John Deo |
| `firstName` | `string` | No |  | John |
| `lastName` | `string` | No |  | Deo |
| `email` | `string` | No |  | john@deo.com |
| `phone` | `string` | No |  | +1 808-868-8888 |
| `extension` | `string` | No |  |  |
| `permissions` | `PermissionsDto` | No |  |  |
| `scopes` | `string` | No |  |  |
| `roles` | `RoleSchema` | No |  |  |
| `lcPhone` | `object` | No | LC Phone Inbound Phone Numbers | {'locationId': '+1234556677'} |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/users/:<userId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update User

**Endpoint:** `PUT https://services.leadconnectorhq.com/users/{userId}`

**Required Scope(s):** `users.write`, `users.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `firstName` | `string` | No |  | John |
| `lastName` | `string` | No |  | Deo |
| `email` | `string` | No | Email update is no longer supported due to security reasons. | john@deo.com |
| `emailChangeOTP` | `string` | No | OTP to change the email ID of the user | 191344 |
| `password` | `string` | No |  | ******* |
| `phone` | `string` | No |  | +18832327657 |
| `type` | `string` | No |  | account |
| `role` | `string` | No |  | admin |
| `companyId` | `string` | No | Company/Agency Id. Required for Agency Level access | UAXssdawIWAWD |
| `locationIds` | `array[string]` | No |  | ['C2QujeCh8ZnC7al2InWR'] |
| `permissions` | `PermissionsDto` | No |  |  |
| `scopes` | `array[string]` | No | Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the | ['contacts.write', 'campaigns.readonly'] |
| `scopesAssignedToOnly` | `array[string]` | No | Assigned Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empt | ['contacts.write', 'campaigns.readonly'] |
| `profilePhoto` | `string` | No |  | https://img.png |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | No |  | 0IHuJvc2ofPAAA8GzTRi |
| `name` | `string` | No |  | John Deo |
| `firstName` | `string` | No |  | John |
| `lastName` | `string` | No |  | Deo |
| `email` | `string` | No |  | john@deo.com |
| `phone` | `string` | No |  | +1 808-868-8888 |
| `extension` | `string` | No |  |  |
| `permissions` | `PermissionsDto` | No |  |  |
| `scopes` | `string` | No |  |  |
| `roles` | `RoleSchema` | No |  |  |
| `lcPhone` | `object` | No | LC Phone Inbound Phone Numbers | {'locationId': '+1234556677'} |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/users/:<userId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "firstName": "John",
    "lastName": "Deo",
    "email": "john@deo.com",
    "emailChangeOTP": "191344",
    "password": "*******",
    "phone": "+18832327657",
    "type": "account",
    "role": "admin"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete User

**Endpoint:** `DELETE https://services.leadconnectorhq.com/users/{userId}`

**Required Scope(s):** `users.write`, `users.write`


**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `succeded` | `boolean` | No |  | True |
| `message` | `string` | No |  | Queued deleting user with e-mail john@deo.com and name John  |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/users/:<userId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get User by Location

**Endpoint:** `GET https://services.leadconnectorhq.com/users/`

**Required Scope(s):** `users.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `users` | `array[UserSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/users/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create User

**Endpoint:** `POST https://services.leadconnectorhq.com/users/`

**Required Scope(s):** `users.write`, `users.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `firstName` | `string` | Yes |  | John |
| `lastName` | `string` | Yes |  | Deo |
| `email` | `string` | Yes |  | john@deo.com |
| `password` | `string` | Yes |  | ******* |
| `phone` | `string` | No |  | +18832327657 |
| `type` | `string` | Yes |  | account |
| `role` | `string` | Yes |  | admin |
| `locationIds` | `array[string]` | Yes |  | ['C2QujeCh8ZnC7al2InWR'] |
| `permissions` | `PermissionsDto` | No |  |  |
| `scopes` | `array[string]` | No | Scopes allowed for users. Only scopes that have been passed will be enabled. Note:- If passed empty  | ['contacts.write', 'campaigns.readonly'] |
| `scopesAssignedToOnly` | `array[string]` | No | Assigned Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empt | ['contacts.write', 'campaigns.readonly'] |
| `profilePhoto` | `string` | No |  | https://img.png |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | No |  | 0IHuJvc2ofPAAA8GzTRi |
| `name` | `string` | No |  | John Deo |
| `firstName` | `string` | No |  | John |
| `lastName` | `string` | No |  | Deo |
| `email` | `string` | No |  | john@deo.com |
| `phone` | `string` | No |  | +1 808-868-8888 |
| `extension` | `string` | No |  |  |
| `permissions` | `PermissionsDto` | No |  |  |
| `scopes` | `string` | No |  |  |
| `roles` | `RoleSchema` | No |  |  |
| `lcPhone` | `object` | No | LC Phone Inbound Phone Numbers | {'locationId': '+1234556677'} |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/users/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "companyId": "ve9EPM428h8vShlRW1KT",
    "firstName": "John",
    "lastName": "Deo",
    "email": "john@deo.com",
    "password": "*******",
    "phone": "+18832327657",
    "type": "account",
    "role": "admin"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


---
## References

[1]: https://marketplace.gohighlevel.com/docs/ghl/ "GHL API Marketplace Documentation"
[2]: https://github.com/GoHighLevel/highlevel-api-docs "GHL API v2 GitHub Repository"
[3]: https://services.leadconnectorhq.com "GHL API Base URL"
[4]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/businesses.json "GHL Businesses API OpenAPI Schema"
[5]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/companies.json "GHL Companies API OpenAPI Schema"
[6]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/locations.json "GHL Locations API OpenAPI Schema"
[7]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/users.json "GHL Users API OpenAPI Schema"