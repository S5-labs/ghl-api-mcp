# Business API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/businesses.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for business API

## Businesses

### Update Business

**Endpoint:** `PUT /businesses/{businessId}`
**Scope:** `businesses.write`
**Token Type:** bearer

Update Business

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `businessId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateBusinessDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateBusinessResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Business

**Endpoint:** `DELETE /businesses/{businessId}`
**Scope:** `businesses.write`
**Token Type:** bearer

Delete Business

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `businessId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteBusinessResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Business

**Endpoint:** `GET /businesses/{businessId}`
**Scope:** `businesses.readonly`
**Token Type:** bearer

Get Business

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `businessId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetBusinessByIdResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Businesses by Location

**Endpoint:** `GET /businesses/`
**Scope:** `businesses.readonly`
**Token Type:** bearer

Get Businesses by Location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `limit` | query | `string` | No | — |
| `skip` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetBusinessByLocationResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Business

**Endpoint:** `POST /businesses/`
**Scope:** `businesses.write`
**Token Type:** bearer

Create Business

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateBusinessDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `UpdateBusinessResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### BusinessCreatedByOrUpdatedBy

Type: `object`

### BusinessDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Business Id |
| `name` | `string` | Yes | Business Name |
| `phone` | `string` | No | phone number |
| `email` | `string` | No | email |
| `website` | `string` | No | website |
| `address` | `string` | No | address |
| `city` | `string` | No | city |
| `description` | `string` | No | description |
| `state` | `string` | No | state |
| `postalCode` | `string` | No | postal code |
| `country` | `string` | No | country |
| `updatedBy` | `BusinessCreatedByOrUpdatedBy` | No | updated By |
| `locationId` | `string` | Yes | locaitonId |
| `createdBy` | `BusinessCreatedByOrUpdatedBy` | No | Created By |
| `createdAt` | `string (date-time)` | No | Creation Time |
| `updatedAt` | `string (date-time)` | No | Last updation time |

### GetBusinessByLocationResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businesses` | `array<BusinessDto>` | Yes | Business Response |

### CreateBusinessDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | — |
| `locationId` | `string` | Yes | — |
| `phone` | `string` | No | — |
| `email` | `string` | No | — |
| `website` | `string` | No | — |
| `address` | `string` | No | — |
| `city` | `string` | No | — |
| `postalCode` | `string` | No | — |
| `state` | `string` | No | — |
| `country` | `string` | No | — |
| `description` | `string` | No | — |

### UpdateBusinessResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success Value |
| `buiseness` | `BusinessDto` | Yes | Business Response |

### UpdateBusinessDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | — |
| `phone` | `string` | No | — |
| `email` | `string` | No | — |
| `postalCode` | `string` | No | — |
| `website` | `string` | No | — |
| `address` | `string` | No | — |
| `state` | `string` | No | — |
| `city` | `string` | No | — |
| `country` | `string` | No | — |
| `description` | `string` | No | — |

### DeleteBusinessResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success value |

### GetBusinessByIdResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business` | `BusinessDto` | Yes | Business Response |
