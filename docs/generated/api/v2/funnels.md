# Funnels API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/funnels.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for funnels API

## Redirect

### Create Redirect

**Endpoint:** `POST /funnels/lookup/redirect`
**Scope:** `funnels/redirect.write`
**Token Type:** Location-Access

The "Create Redirect" API Allows adding a new url redirect to the system. Use this endpoint to create a url redirect with the specified details. Ensure that the required information is provided in the request payload.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateRedirectParams` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CreateRedirectResponseDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Redirect By Id

**Endpoint:** `PATCH /funnels/lookup/redirect/{id}`
**Scope:** `funnels/redirect.write`
**Token Type:** Location-Access

The "Update Redirect By Id" API Allows updating an existing URL redirect in the system. Use this endpoint to modify a URL redirect with the specified ID using details provided in the request payload.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateRedirectParams` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateRedirectResponseDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Redirect By Id

**Endpoint:** `DELETE /funnels/lookup/redirect/{id}`
**Scope:** `funnels/redirect.write`
**Token Type:** Location-Access

The "Delete Redirect By Id" API Allows deletion of a URL redirect from the system using its unique identifier. Use this endpoint to delete a URL redirect with the specified ID using details provided in the request payload.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response - URL redirect deleted successfully | `DeleteRedirectResponseDTO` |
| `422` | Unprocessable Entity - The provided data is invalid or incomplete | `—` |

### Fetch List of Redirects

**Endpoint:** `GET /funnels/lookup/redirect/list`
**Scope:** `funnels/redirect.readonly`
**Token Type:** Location-Access

Retrieves a list of all URL redirects based on the given query parameters.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `limit` | query | `number` | Yes | — |
| `offset` | query | `number` | Yes | — |
| `search` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response - List of URL redirects returned | `RedirectListResponseDTO` |
| `422` | Unprocessable Entity - The provided data is invalid or incomplete | `—` |

## Funnel

### Fetch List of Funnels

**Endpoint:** `GET /funnels/funnel/list`
**Token Type:** Location-Access

Retrieves a list of all funnels based on the given query parameters.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | query | `string` | Yes | — |
| `type` | query | `string` | No | — |
| `category` | query | `string` | No | — |
| `offset` | query | `string` | No | — |
| `limit` | query | `string` | No | — |
| `parentId` | query | `string` | No | — |
| `name` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response - List of funnels returned | `FunnelListResponseDTO` |

### Fetch list of funnel pages

**Endpoint:** `GET /funnels/page`
**Token Type:** Location-Access

Retrieves a list of all funnel pages based on the given query parameters.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | query | `string` | Yes | — |
| `funnelId` | query | `string` | Yes | — |
| `name` | query | `string` | No | — |
| `limit` | query | `number` | Yes | — |
| `offset` | query | `number` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response - List of funnel pages returned | `FunnelPageResponseDTO` |

### Fetch count of funnel pages

**Endpoint:** `GET /funnels/page/count`
**Token Type:** Location-Access

Retrieves count of all funnel pages based on the given query parameters.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | query | `string` | Yes | — |
| `funnelId` | query | `string` | Yes | — |
| `name` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response - Count of funnel pages returned | `FunnelPageCountResponseDTO` |

## Schemas

### CreateRedirectParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | — |
| `domain` | `string` | Yes | — |
| `path` | `string` | Yes | — |
| `target` | `string` | Yes | — |
| `action` | `string` | Yes | — |

### RedirectResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of the redirect |
| `locationId` | `string` | Yes | Identifier of the location associated with the redirect |
| `domain` | `string` | Yes | Domain where the redirect occurs |
| `path` | `string` | Yes | Original path that will be redirected |
| `pathLowercase` | `string` | Yes | Lowercase version of the original path |
| `type` | `string` | Yes | Type of redirect (e.g., Permanent, Temporary) |
| `target` | `string` | Yes | Target URL to which the original path will be redirected |
| `action` | `string` | Yes | Action performed by the redirect |

### CreateRedirectResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `RedirectResponseDTO` | Yes | Data containing details of the created redirect |

### UpdateRedirectParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `target` | `string` | Yes | — |
| `action` | `string` | Yes | — |
| `locationId` | `string` | Yes | — |

### RedirectListResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `object` | Yes | Object containing the count of redirects and an array of redirect data |

### DeleteRedirectResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `object` | Yes | Status of the delete operation |

### UpdateRedirectResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `RedirectResponseDTO` | Yes | Data containing details of the updated redirect |

### FunnelPageResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | — |
| `locationId` | `string` | Yes | — |
| `funnelId` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `stepId` | `string` | Yes | — |
| `deleted` | `string` | Yes | — |
| `updatedAt` | `string` | Yes | — |

### FunnelPageCountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | — |

### FunnelListResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `funnels` | `object` | Yes | — |
| `count` | `number` | Yes | — |
| `traceId` | `string` | Yes | — |
