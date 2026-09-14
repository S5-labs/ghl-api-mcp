# Trigger Links API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/links-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for links API

## Trigger Links

### Get Link by ID

**Endpoint:** `GET /links/id/{linkId}`
**Scope:** `links.readonly`
**Token Type:** bearer

Get a single link by its ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |
| `linkId` | path | `string` | Yes | Link Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetLinkSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Link

**Endpoint:** `PUT /links/{linkId}`
**Scope:** `links.write`
**Token Type:** bearer

Update Link

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `linkId` | path | `string` | Yes | Link Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LinkUpdateDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `GetLinkSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Link

**Endpoint:** `DELETE /links/{linkId}`
**Scope:** `links.write`
**Token Type:** bearer

Delete Link

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `linkId` | path | `string` | Yes | Link Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `DeleteLinksSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Links

**Endpoint:** `GET /links/`
**Scope:** `links.readonly`
**Token Type:** bearer

Get Links

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location ID of the business profile |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetLinksSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Link

**Endpoint:** `POST /links/`
**Scope:** `links.write`
**Token Type:** bearer

Create Link

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LinksDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `GetLinkSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Trigger Links Search

### Search Trigger Links

**Endpoint:** `GET /links/search`
**Scope:** `links.readonly`
**Token Type:** bearer

Get list of links by searching

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |
| `query` | query | `string` | No | Search query as a string |
| `skip` | query | `number` | No | Numbers of query results to skip |
| `limit` | query | `number` | No | Limit on number of search results |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetLinksSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Schemas

### LinkSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the trigger link |
| `name` | `string` | No | Display name of the trigger link |
| `redirectTo` | `string` | No | URL or variable to redirect to when the trigger link is clicked |
| `fieldKey` | `string` | No | Template variable key used to reference this trigger link |
| `locationId` | `string` | No | Location ID this trigger link belongs to |

### GetLinksSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `links` | `array<LinkSchema>` | No | List of trigger links |

### LinksDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID of the business profile |
| `name` | `string` | Yes | Display name of the trigger link |
| `redirectTo` | `string` | Yes | URL or variable to redirect to when the trigger link is clicked |

### GetLinkSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `link` | `LinkSchema` | No | The trigger link object |

### LinkUpdateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Display name of the trigger link |
| `redirectTo` | `string` | Yes | URL or variable to redirect to when the trigger link is clicked |

### DeleteLinksSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | Indicates whether the link was successfully deleted (legacy field, misspelled). Use `succeeded` with x-api-version: v3. |
| `succeeded` | `boolean` | No | Indicates whether the link was successfully deleted. |
