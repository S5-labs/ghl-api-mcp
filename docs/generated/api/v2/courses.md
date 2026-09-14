# MEMBERSHIPS API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/courses.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

API Service for Courses and Memberships

## Endpoints

### Import Courses

**Endpoint:** `POST /courses/courses-exporter/public/import`
**Token Type:** bearer

Import Courses through public channels

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `PublicExporterPayload` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |

## Schemas

### visibility

Type: `string`

### contentType

Type: `string`

### type

Type: `string`

### PostMaterialInterface

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `type` | `type` | Yes | — |
| `url` | `string` | Yes | — |

### PostInterface

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `visibility` | `visibility` | Yes | — |
| `thumbnailUrl` | `string` | No | — |
| `contentType` | `contentType` | Yes | — |
| `description` | `string` | Yes | — |
| `bucketVideoUrl` | `string` | No | — |
| `postMaterials` | `array<PostMaterialInterface>` | No | — |

### SubCategoryInterface

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `visibility` | `visibility` | Yes | — |
| `thumbnailUrl` | `string` | No | — |
| `posts` | `array<PostInterface>` | No | — |

### CategoryInterface

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `visibility` | `visibility` | Yes | — |
| `thumbnailUrl` | `string` | No | — |
| `posts` | `array<PostInterface>` | No | — |
| `subCategories` | `array<SubCategoryInterface>` | No | — |

### InstructorDetails

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | — |
| `description` | `string` | Yes | — |

### ProductInterface

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `imageUrl` | `string` | No | — |
| `categories` | `array<CategoryInterface>` | Yes | — |
| `instructorDetails` | `InstructorDetails` | No | — |

### PublicExporterPayload

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | — |
| `userId` | `string` | No | — |
| `products` | `array<ProductInterface>` | Yes | — |
