# Email API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/emails.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for emails API

## Campaigns

### Get Campaigns

**Endpoint:** `GET /emails/schedule`
**Scope:** `emails/schedule.readonly`
**Token Type:** Location-Access

Get Campaigns

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | query | `string` | Yes | Location ID to fetch campaigns from |
| `limit` | query | `number` | No | Maximum number of campaigns to return. Defaults to 10, maximum is 100 |
| `offset` | query | `number` | No | Number of campaigns to skip for pagination |
| `status` | query | `string` | No | Filter by schedule status |
| `emailStatus` | query | `string` | No | Filter by email delivery status |
| `name` | query | `string` | No | Filter campaigns by name |
| `parentId` | query | `string` | No | Filter campaigns by parent folder ID |
| `limitedFields` | query | `boolean` | No | When true, returns only essential campaign fields like id, templateDataDownloadUrl, updatedAt, type, templateType, templateId, downloadUrl and isPlainText. When false, returns complete campaign data including meta information, bulkRequestStatusInfo, ABTestInfo, resendScheduleInfo and all other campaign properties |
| `archived` | query | `boolean` | No | Filter archived campaigns |
| `campaignsOnly` | query | `boolean` | No | Return only campaigns, excluding folders |
| `showStats` | query | `boolean` | No | When true, returns campaign statistics including delivered count, opened count, clicked count and revenue if available for the campaign. When false, returns campaign data without statistics. |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `ScheduleFetchSuccessfulDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Templates

### Create a new template

**Endpoint:** `POST /emails/builder`
**Scope:** `emails/builder.write`
**Token Type:** Location-Access

Create a new template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateBuilderDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Success | `CreateBuilderSuccesfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Not Found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Fetch email templates

**Endpoint:** `GET /emails/builder`
**Scope:** `emails/builder.readonly`
**Token Type:** Location-Access

Fetch email templates by location id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | query | `string` | Yes | — |
| `limit` | query | `string` | No | — |
| `offset` | query | `string` | No | — |
| `search` | query | `string` | No | — |
| `sortByDate` | query | `string` | No | — |
| `archived` | query | `string` | No | — |
| `builderVersion` | query | `string` | No | — |
| `name` | query | `string` | No | — |
| `parentId` | query | `string` | No | — |
| `originId` | query | `string` | No | — |
| `templatesOnly` | query | `string` | No | — |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `FetchBuilderSuccesfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Not Found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete a template

**Endpoint:** `DELETE /emails/builder/{locationId}/{templateId}`
**Token Type:** Location-Access

Delete a template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | — |
| `templateId` | path | `string` | Yes | — |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `DeleteBuilderSuccesfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Not Found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update a template

**Endpoint:** `POST /emails/builder/data`
**Scope:** `emails/builder.write`
**Token Type:** Location-Access

Update a template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SaveBuilderDataDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Success | `BuilderUpdateSuccessfulDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Not Found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### ScheduleDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | — |
| `repeatAfter` | `string` | Yes | — |
| `id` | `string` | Yes | — |
| `parentId` | `string` | Yes | — |
| `childCount` | `number` | Yes | — |
| `campaignType` | `string` | Yes | — |
| `bulkActionVersion` | `string` | Yes | — |
| `_id` | `string` | Yes | — |
| `status` | `string` | Yes | — |
| `sendDays` | `array<string>` | Yes | — |
| `deleted` | `boolean` | Yes | — |
| `migrated` | `boolean` | Yes | — |
| `archived` | `boolean` | Yes | — |
| `hasTracking` | `boolean` | Yes | — |
| `isPlainText` | `boolean` | Yes | — |
| `hasUtmTracking` | `boolean` | Yes | — |
| `enableResendToUnopened` | `boolean` | Yes | — |
| `locationId` | `string` | Yes | — |
| `templateId` | `string` | Yes | — |
| `templateType` | `string` | Yes | — |
| `createdAt` | `string` | Yes | — |
| `updatedAt` | `string` | Yes | — |
| `__v` | `number` | Yes | — |
| `documentId` | `string` | Yes | — |
| `downloadUrl` | `string` | Yes | — |
| `templateDataDownloadUrl` | `string` | Yes | — |
| `child` | `array<string>` | Yes | — |

### ScheduleFetchSuccessfulDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `schedules` | `array<ScheduleDto>` | Yes | The list of campaigns |
| `total` | `array<string>` | Yes | The total number of campaigns |
| `traceId` | `string` | Yes | Trace Id |

### InvalidLocationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `string` | No | — |

### NotFoundDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `string` | No | — |
| `error` | `string` | No | — |

### CreateBuilderDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | — |
| `title` | `string` | No | — |
| `type` | `string` | Yes | — |
| `updatedBy` | `string` | No | — |
| `builderVersion` | `string` | No | — |
| `name` | `string` | No | — |
| `parentId` | `string` | No | — |
| `templateDataUrl` | `string` | No | — |
| `importProvider` | `string` | Yes | — |
| `importURL` | `string` | No | — |
| `templateSource` | `string` | No | — |
| `isPlainText` | `boolean` | No | — |

### CreateBuilderSuccesfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redirect` | `string` | Yes | template id |
| `traceId` | `string` | Yes | trace id |

### FetchBuilderSuccesfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | template name |
| `updatedBy` | `string` | No | updated by |
| `isPlainText` | `boolean` | No | plain text based template |
| `lastUpdated` | `string` | No | last updated |
| `dateAdded` | `string` | No | date added |
| `previewUrl` | `string` | No | preview url |
| `id` | `string` | No | id |
| `version` | `string` | No | version |
| `templateType` | `string` | No | type |

### DeleteBuilderSuccesfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `string` | No | ok |
| `traceId` | `string` | No | trace id |

### TemplateSettings

Type: `object`

### IBuilderJsonMapper

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `elements` | `array<string>` | Yes | — |
| `attrs` | `object` | Yes | — |
| `templateSettings` | `TemplateSettings` | Yes | — |

### SaveBuilderDataDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | — |
| `templateId` | `string` | Yes | — |
| `updatedBy` | `string` | Yes | — |
| `dnd` | `IBuilderJsonMapper` | Yes | — |
| `html` | `string` | Yes | — |
| `editorType` | `string` | Yes | — |
| `previewText` | `string` | No | — |
| `isPlainText` | `boolean` | No | — |

### BuilderUpdateSuccessfulDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `string` | No | ok |
| `traceId` | `string` | No | trace id |
| `previewUrl` | `string` | No | preview url |
| `templateDownloadUrl` | `string` | No | template data download url |
