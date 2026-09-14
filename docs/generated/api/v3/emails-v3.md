# Email API v3

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/emails-v3.json). Do not edit this generated file directly.

**API Version:** v3
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for emails API

## API Version v3

All APIs available via `/v3` route prefix with AIP-compliant responses.

## Templates

### Create an email template

**Endpoint:** `POST /emails/locations/{locationId}/templates`
**Scope:** `emails/templates.write`
**Token Type:** Location-Access

Create a new email template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateTemplatePublicV2BodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Success | `CreateTemplatePublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List templates

**Endpoint:** `GET /emails/locations/{locationId}/templates`
**Scope:** `emails/templates.readonly`
**Token Type:** Location-Access

Get list of templates by location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `limit` | query | `number` | No | Number of templates to return |
| `offset` | query | `number` | No | Number of templates to skip |
| `search` | query | `string` | No | Search by template name |
| `sortBy` | query | `string` | No | Field to sort by |
| `sortOrder` | query | `string` | No | Sort direction |
| `archived` | query | `boolean` | No | Return archived templates |
| `folderId` | query | `string` | No | Folder to list templates from. Use 'root' for top-level listing. |
| `include` | query | `string` | No | Whether to include templates, folders, or both in the response. `templates` will return only templates, `folders` will return only folders, and `all` will return both. |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `ListTemplatesPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Import an email template

**Endpoint:** `POST /emails/locations/{locationId}/templates/import`
**Scope:** `emails/templates.write`
**Token Type:** Location-Access

Import a template from a provider URL

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ImportTemplatePublicV2BodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Success | `ImportTemplatePublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create a template folder

**Endpoint:** `POST /emails/locations/{locationId}/templates/folders`
**Scope:** `emails/templates.write`
**Token Type:** Location-Access

Create a new template folder

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateTemplateFolderPublicV2BodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Success | `CreateTemplateFolderPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Email Template by ID

**Endpoint:** `GET /emails/locations/{locationId}/templates/{templateId}`
**Scope:** `emails/templates.readonly`
**Token Type:** Location-Access

Get a single email template by its ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `templateId` | path | `string` | Yes | Template ID |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `GetTemplatePublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete a template

**Endpoint:** `DELETE /emails/locations/{locationId}/templates/{templateId}`
**Scope:** `emails/templates.write`
**Token Type:** Location-Access

Delete a template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `templateId` | path | `string` | Yes | Template ID |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `DeleteTemplatePublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update an email template

**Endpoint:** `PATCH /emails/locations/{locationId}/templates/{templateId}`
**Scope:** `emails/templates.write`
**Token Type:** Location-Access

Update email template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `templateId` | path | `string` | Yes | Template ID |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateTemplatePublicV2BodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `UpdateTemplatePublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Statistics

### Get Campaign Statistics

**Endpoint:** `GET /emails/locations/{locationId}/campaigns/stats/{source}/{sourceId}`
**Scope:** `emails/stats.readonly`
**Token Type:** Location-Access

Get statistics for email campaigns, workflows, or bulk actions

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `source` | path | `string` | Yes | Source type: email-campaigns, workflow-campaigns, or bulk-actions |
| `sourceId` | path | `string` | Yes | Source ID of the email campaign, workflow campaign, or bulk action |
| `subSourceId` | query | `string` | No | Workflow action ID. Only valid when source is `workflow-campaigns` |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `GetCampaignStatsPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Campaigns

### Create Email Campaign

**Endpoint:** `POST /emails/locations/{locationId}/campaigns/emails`
**Scope:** `emails/campaigns.write`
**Token Type:** Location-Access

Create a new email campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateEmailCampaignPublicV2BodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Success | `CreateEmailCampaignPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Email Campaigns

**Endpoint:** `GET /emails/locations/{locationId}/campaigns/emails`
**Scope:** `emails/campaigns.readonly`
**Token Type:** Location-Access

Get list of email campaigns for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `limit` | query | `number` | No | Number of campaigns to return. Defaults to 10, minimum is 1, maximum is 20 |
| `offset` | query | `number` | No | Number of campaigns to skip for pagination. Defaults to 0, minimum is 0 |
| `search` | query | `string` | No | Search text for campaign name |
| `status` | query | `string` | No | Filter by campaign status |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `ListEmailCampaignsPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Email Campaign

**Endpoint:** `PATCH /emails/locations/{locationId}/campaigns/emails/{campaignId}`
**Scope:** `emails/campaigns.write`
**Token Type:** Location-Access

Update an email campaign draft

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `campaignId` | path | `string` | Yes | Campaign ID |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateEmailCampaignPublicV2BodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `UpdateEmailCampaignPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Email Campaign by ID

**Endpoint:** `GET /emails/locations/{locationId}/campaigns/emails/{campaignId}`
**Scope:** `emails/campaigns.readonly`
**Token Type:** Location-Access

Get a single email campaign by its ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `campaignId` | path | `string` | Yes | Campaign ID |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `GetEmailCampaignPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Campaign

**Endpoint:** `DELETE /emails/locations/{locationId}/campaigns/emails/{campaignId}`
**Scope:** `emails/campaigns.write`
**Token Type:** Location-Access

Delete a campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `campaignId` | path | `string` | Yes | Campaign ID |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `DeleteCampaignPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Workflow Campaigns

**Endpoint:** `GET /emails/locations/{locationId}/campaigns/workflows`
**Scope:** `emails/campaigns.readonly`
**Token Type:** Location-Access

Get list of workflow campaigns for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `limit` | query | `number` | No | Number of campaigns to return. Defaults to 10, minimum is 1, maximum is 20 |
| `offset` | query | `number` | No | Number of items to skip for pagination. Defaults to 0, minimum is 0 |
| `search` | query | `string` | No | Search query to filter campaigns. |
| `status` | query | `string` | No | Filter by campaign status |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `ListWorkflowCampaignsPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Workflow Campaign by ID

**Endpoint:** `GET /emails/locations/{locationId}/campaigns/workflows/{campaignId}`
**Scope:** `emails/campaigns.readonly`
**Token Type:** Location-Access

Get a single workflow campaign by its ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `campaignId` | path | `string` | Yes | Campaign ID |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `GetWorkflowCampaignPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Bulk Action Campaigns

**Endpoint:** `GET /emails/locations/{locationId}/campaigns/bulk-actions`
**Scope:** `emails/campaigns.readonly`
**Token Type:** Location-Access

Get list of bulk action campaigns for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `limit` | query | `number` | No | Number of campaigns to return. Defaults to 10, minimum is 1, maximum is 20 |
| `offset` | query | `number` | No | Number of campaigns to skip for pagination. Defaults to 0, minimum is 0 |
| `search` | query | `string` | No | Search query to filter campaigns. |
| `dateFrom` | query | `string` | No | Filter by start date (ISO 8601 format) |
| `dateTo` | query | `string` | No | Filter by end date (ISO 8601 format) |
| `status` | query | `string` | No | Filter by status |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `ListBulkActionCampaignsPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Bulk Action Campaign by ID

**Endpoint:** `GET /emails/locations/{locationId}/campaigns/bulk-actions/{campaignId}`
**Scope:** `emails/campaigns.readonly`
**Token Type:** Location-Access

Get a single bulk action campaign by its ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `campaignId` | path | `string` | Yes | Campaign ID |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `GetBulkActionCampaignPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Schedule Campaign

**Endpoint:** `POST /emails/locations/{locationId}/campaigns/emails/{campaignId}/schedule`
**Scope:** `emails/campaigns.write`
**Token Type:** Location-Access

Schedule or start an email campaign. The campaign must be in draft, cancelled, or paused status.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `campaignId` | path | `string` | Yes | Campaign ID |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ScheduleCampaignPublicV2BodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Success | `ScheduleCampaignPublicV2ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `409` | Conflict - Campaign is already scheduled or being processed | `—` |
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
| `statusCode` | `number` | No | HTTP status code for invalid location access |
| `message` | `string` | No | Error message describing the location access failure |

### NotFoundDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | HTTP status code for not found |
| `message` | `string` | No | Error message describing the not found failure |
| `error` | `string` | No | Error type identifier |

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
| `subjectLine` | `string` | No | — |
| `fromName` | `string` | No | — |
| `fromEmail` | `string` | No | — |
| `previewText` | `string` | No | — |

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
| `elements` | `array<string>` | Yes | Array of VNode elements representing the email structure |
| `attrs` | `object` | Yes | Object mapping element IDs to their attributes and styles |
| `templateSettings` | `TemplateSettings` | Yes | Template-level settings and configuration |

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
| `usedEmailAI` | `boolean` | No | Whether Email AI was used |

### BuilderUpdateSuccessfulDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `string` | No | ok |
| `traceId` | `string` | No | trace id |
| `previewUrl` | `string` | No | preview url |
| `templateDownloadUrl` | `string` | No | template data download url |
| `versionId` | `string` | No | version id of the saved template |

### UpdateEmailTemplateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID where the template belongs |
| `updatedBy` | `string` | No | User ID who is updating the template |
| `editorContent` | `string or IBuilderJsonMapper` | No | Editor content - can be HTML string, plain text string, or DND builder object depending on editorType. When editorType is "html" or "text", this should be a string. When editorType is "builder", this should be a DND object with elements, attrs, and templateSettings. Must be provided together with editorType. |
| `editorType` | `string` | No | Type of editor content: "html" for HTML content, "text" for plain text content, "builder" for drag-and-drop builder content. Must be provided together with editorContent. |
| `previewText` | `string` | No | Preview text shown in email clients before opening |
| `subjectLine` | `string` | No | Email subject line |
| `fromName` | `string` | No | Sender name displayed in email |
| `fromEmail` | `string` | No | Sender email address |
| `name` | `string` | No | Template name |
| `archived` | `boolean` | No | Whether the template is archived |
| `fieldDefaults` | `object` | No | Field-level default values for custom variables in template fields (fromName, subjectLine, previewText) |

### UpdateEmailTemplateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes | Indicates if the update was successful |
| `id` | `string` | Yes | Unique template identifier |
| `name` | `string` | Yes | Template name |
| `archived` | `boolean` | Yes | Whether the template is archived |
| `builderVersion` | `string` | Yes | Builder version used for the template |
| `fromName` | `string` | Yes | Sender name displayed in email |
| `fromEmail` | `string` | Yes | Sender email address |
| `subjectLine` | `string` | Yes | Email subject line |
| `previewText` | `string` | Yes | Preview text shown in email clients |
| `previewUrl` | `string` | Yes | URL to preview the rendered template |
| `type` | `string` | Yes | Type of template editor used |
| `lastUpdated` | `string` | Yes | Timestamp of last update |
| `createdAt` | `string` | Yes | Timestamp when template was created |
| `isPlainText` | `boolean` | Yes | Whether the template contains plain text content (true) or HTML content (false) |
| `fieldDefaults` | `object` | No | Field-level default values for custom variables in template fields |

### BuilderElementNodePublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Element ID |
| `tagName` | `string` | Yes | Tag name |
| `children` | `array<BuilderElementNodePublicV2Dto>` | No | Child elements |

### BuilderEditorContentPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `elements` | `array<BuilderElementNodePublicV2Dto>` | No | Builder elements |
| `attrs` | `object` | No | Builder attributes map keyed by element ID |
| `templateSettings` | `object` | No | Template-level settings map keyed by setting group |

### BuilderAttributePublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Attribute name |
| `default` | `object` | No | Attribute default value |
| `unit` | `string` | No | Attribute unit |

### BuilderCustomFlagsPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `layoutId` | `object` | No | Layout ID |
| `theme` | `string` | No | Theme name |
| `socialElementType` | `string` | No | Social element rendering type |

### BuilderNodeAttrsPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tagName` | `string` | Yes | Tag name |
| `attributes` | `array<BuilderAttributePublicV2Dto>` | Yes | Element attributes |
| `content` | `string` | No | Element content |
| `customFlags` | `BuilderCustomFlagsPublicV2Dto` | No | Custom flags |

### CreateTemplatePublicV2BodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Template name |
| `editorType` | `string` | Yes | Editor type for the new template. Use `html` for code-editor templates or `text` for plain-text templates. |
| `editorContent` | `string` | No | Optional initial editor content. Provide HTML or plain-text string content. |
| `parentFolderId` | `string` | No | Parent folder ID |
| `subjectLine` | `string` | No | Email subject line |
| `fromName` | `string` | No | Sender name |
| `fromEmail` | `string` | No | Sender email address |
| `previewText` | `string` | No | Preview text |
| `userId` | `string` | No | ID of the user performing this action |

### CreateTemplatePublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Template ID |
| `name` | `string` | Yes | Template name |
| `editorType` | `string` | Yes | Editor type |
| `isPlainText` | `boolean` | Yes | Whether template is plain text |
| `parentFolderId` | `string` | No | Parent folder ID |
| `fromName` | `string` | No | Sender name |
| `fromEmail` | `string` | No | Sender email address |
| `subjectLine` | `string` | No | Email subject line |
| `previewText` | `string` | No | Preview text |
| `previewUrl` | `string` | No | Preview URL |
| `createdAt` | `string` | No | Created timestamp |
| `updatedAt` | `string` | No | Updated timestamp |
| `traceId` | `string` | No | Trace ID of request |

### ImportTemplatePublicV2BodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `importProvider` | `string` | Yes | Import provider (URL-based providers only) |
| `importUrl` | `string` | Yes | Public import URL |
| `name` | `string` | No | Template name |
| `parentFolderId` | `string` | No | Parent folder ID |
| `userId` | `string` | No | ID of the user performing this action |

### ImportTemplatePublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Template ID |
| `name` | `string` | Yes | Template name |
| `editorType` | `string` | Yes | Editor type |
| `isPlainText` | `boolean` | Yes | Whether template is plain text |
| `parentFolderId` | `string` | No | Parent folder ID |
| `fromName` | `string` | No | Sender name |
| `fromEmail` | `string` | No | Sender email address |
| `subjectLine` | `string` | No | Email subject line |
| `previewText` | `string` | No | Preview text |
| `previewUrl` | `string` | No | Preview URL |
| `createdAt` | `string` | No | Created timestamp |
| `updatedAt` | `string` | No | Updated timestamp |
| `traceId` | `string` | No | Trace ID of request |

### CreateTemplateFolderPublicV2BodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Folder name |
| `userId` | `string` | No | ID of the user performing this action |

### CreateTemplateFolderPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Folder ID |
| `name` | `string` | Yes | Folder name |
| `createdAt` | `string` | No | Created timestamp |
| `updatedAt` | `string` | No | Updated timestamp |
| `traceId` | `string` | No | Trace ID of request |

### TemplateListItemPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Resource ID |
| `name` | `string` | Yes | Resource name |
| `type` | `string` | Yes | Resource type |
| `isPlainText` | `boolean` | No | Whether template is plain text |
| `updatedAt` | `string` | No | Last updated timestamp |
| `createdAt` | `string` | No | Created timestamp |
| `previewUrl` | `string` | No | Preview URL |
| `editorType` | `string` | No | Editor type for template resources |
| `childCount` | `number` | No | Children count for folder resources |
| `hasChildren` | `boolean` | No | Whether folder has child resources |
| `parentFolderId` | `string` | No | Parent folder ID |

### ListTemplatesPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `array<TemplateListItemPublicV2Dto>` | Yes | List of template and folder resources |
| `total` | `number` | Yes | Total count of templates and folders |
| `traceId` | `string` | No | Trace ID of the request |

### GetTemplatePublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Template ID |
| `name` | `string` | Yes | Template name |
| `editorType` | `string` | Yes | Editor type |
| `isPlainText` | `boolean` | Yes | Whether template is plain text |
| `parentFolderId` | `string` | No | Parent folder ID |
| `fromName` | `string` | No | Sender name |
| `fromEmail` | `string` | No | Sender email address |
| `subject` | `string` | No | Email subject line |
| `previewText` | `string` | No | Preview text |
| `editorContentUrl` | `string` | No | URL to fetch the rendered template content as HTML. Issue a GET against this URL to retrieve the body. |
| `deleted` | `boolean` | Yes | Whether the template is deleted |
| `createdAt` | `string` | No | Created timestamp |
| `updatedAt` | `string` | No | Updated timestamp |
| `traceId` | `string` | No | Trace ID of request |

### DeleteTemplatePublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deleted` | `boolean` | Yes | Whether the template was deleted successfully |
| `traceId` | `string` | No | Trace ID of the request |

### UpdateTemplatePublicV2BodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Template name |
| `editorContent` | `string` | No | Editor content to update. Required only when updating template content, and must be provided together with editorType. Provide HTML or plain-text string content. |
| `editorType` | `string` | No | Type of editor content. Required only when updating template content, and must be provided together with editorContent. |
| `previewText` | `string` | No | Preview text |
| `subjectLine` | `string` | No | Email subject line |
| `fromName` | `string` | No | Sender name |
| `fromEmail` | `string` | No | Sender email address |
| `archived` | `boolean` | No | Whether template is archived |
| `parentFolderId` | `string` | No | Parent folder ID. Pass `null` to move template to the root level. |
| `userId` | `string` | No | ID of the user performing this action |

### UpdateTemplatePublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Template ID |
| `name` | `string` | Yes | Template name |
| `archived` | `boolean` | Yes | Whether template is archived |
| `fromName` | `string` | Yes | Sender name |
| `fromEmail` | `string` | Yes | Sender email address |
| `subjectLine` | `string` | Yes | Email subject line |
| `previewText` | `string` | Yes | Preview text |
| `previewUrl` | `string` | Yes | Preview URL |
| `editorType` | `string` | No | Template type |
| `isPlainText` | `boolean` | No | Whether template is plain text |
| `parentFolderId` | `string` | No | Parent folder ID |
| `updatedAt` | `string` | No | Last updated timestamp |
| `createdAt` | `string` | No | Created timestamp |
| `traceId` | `string` | No | Trace ID of request |

### EmailStatsNumbersDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delivered` | `number` | Yes | Emails delivered |
| `opened` | `number` | Yes | Emails opened |
| `clicked` | `number` | Yes | Links clicked |
| `unsubscribed` | `number` | Yes | Unsubscribes |
| `complained` | `number` | Yes | Spam complaints |
| `permanentFail` | `number` | Yes | Hard bounces |
| `temporaryFail` | `number` | Yes | Soft bounces |
| `rejected` | `number` | Yes | Rejected emails |
| `failed` | `number` | Yes | Failed emails |
| `replied` | `number` | Yes | Replies received |

### GetCampaignStatsResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `source` | `string` | Yes | Source type |
| `sourceId` | `string` | Yes | Source ID |
| `subSourceId` | `string` | No | Workflow action ID |
| `stats` | `EmailStatsNumbersDto` | Yes | Email performance metrics |

### EmailStatsNumbersPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sent` | `number` | Yes | Total emails sent (delivered + accepted + bounced) |
| `accepted` | `number` | Yes | Emails accepted by the mail server |
| `delivered` | `number` | Yes | Emails delivered to inbox |
| `opened` | `number` | Yes | Emails opened |
| `clicked` | `number` | Yes | Links clicked |
| `unsubscribed` | `number` | Yes | Unsubscribes |
| `complained` | `number` | Yes | Spam complaints |
| `permanentFail` | `number` | Yes | Hard bounces |
| `temporaryFail` | `number` | Yes | Soft bounces |
| `rejected` | `number` | Yes | Rejected emails |
| `failed` | `number` | Yes | Failed emails |
| `replied` | `number` | Yes | Replies received |
| `openRate` | `number` | Yes | Open rate as percentage of delivered |
| `clickRate` | `number` | Yes | Click rate as percentage of delivered |
| `unsubscribeRate` | `number` | Yes | Unsubscribe rate as percentage of delivered |
| `complaintRate` | `number` | Yes | Complaint rate as percentage of delivered |
| `bounceRate` | `number` | Yes | Bounce rate as percentage of sent |
| `replyRate` | `number` | Yes | Reply rate as percentage of delivered |

### GetCampaignStatsPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `source` | `string` | Yes | Source type |
| `sourceId` | `string` | Yes | Source ID |
| `subSourceId` | `string` | No | Workflow action ID |
| `stats` | `EmailStatsNumbersPublicV2Dto` | Yes | Email performance metrics |
| `traceId` | `string` | No | Trace ID of the request |

### WorkflowCampaignPublicDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Campaign ID |
| `name` | `string` | Yes | Campaign name |
| `status` | `string` | Yes | Campaign status |
| `sourceId` | `string` | Yes | Source ID |
| `deleted` | `boolean` | Yes | Whether the campaign is deleted |
| `createdAt` | `string` | Yes | Created at timestamp |
| `updatedAt` | `string` | Yes | Updated at timestamp |

### GetWorkflowCampaignsPublicResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaigns` | `array<WorkflowCampaignPublicDto>` | Yes | List of workflow campaigns |
| `total` | `number` | Yes | Total count of campaigns |

### BulkActionCampaignEmailDetailsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | No | Email subject line |
| `from` | `string` | No | Sender (name and email) |
| `name` | `string` | No | Sender name |
| `templateId` | `string` | No | Email template ID |

### BulkActionCampaignDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Campaign ID |
| `name` | `string` | Yes | Campaign name |
| `status` | `string` | Yes | Campaign status |
| `scheduleType` | `string` | Yes | Schedule type (NOW or SCHEDULED) |
| `createdBy` | `string` | Yes | User who created the campaign |
| `deleted` | `boolean` | Yes | Whether the campaign is deleted |
| `createdAt` | `string` | Yes | Created at timestamp |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `completedAt` | `string` | No | Processing completion timestamp |
| `emailMetadata` | `BulkActionCampaignEmailDetailsDto` | No | Email metadata |

### GetBulkActionCampaignsResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaigns` | `array<BulkActionCampaignDto>` | Yes | List of bulk action campaigns |
| `total` | `number` | Yes | Total count of bulk action campaigns |

### CreateEmailCampaignPublicV2BodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Campaign name |
| `editorType` | `string` | Yes | Editor type for the campaign content. Use `html` for code-editor campaigns or `text` for plain-text campaigns. |
| `templateId` | `string` | No | Existing template ID to create the campaign from. Omit this field to create a blank campaign. |
| `editorContent` | `string` | No | Optional initial editor content to persist immediately after campaign creation. Provide HTML or plain-text string content. |
| `parentFolderId` | `string` | No | Parent folder ID |
| `timeZone` | `string` | Yes | Timezone for the campaign |
| `userId` | `string` | Yes | ID of the user performing this action |
| `userName` | `string` | No | Name of the user performing this action |

### EmailCampaignVariationPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sourceId` | `string` | Yes | Variation source ID for stats lookup |
| `isWinner` | `boolean` | Yes | Whether this is the winning variation |

### CreateEmailCampaignPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Campaign ID |
| `source` | `string` | No | Source of the campaign |
| `sourceId` | `string` | No | Source ID of the campaign |
| `name` | `string` | No | Campaign name |
| `status` | `string` | No | Campaign status |
| `campaignType` | `string` | No | Campaign type |
| `campaignCategory` | `string` | No | Campaign category |
| `variations` | `array<EmailCampaignVariationPublicV2Dto>` | No | AB test variation identifiers (available only for AB test campaigns) |
| `deleted` | `boolean` | Yes | Whether the campaign is deleted |
| `createdAt` | `string` | Yes | Created at timestamp |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `traceId` | `string` | No | Trace ID of request |

### EmailCampaignPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Campaign ID |
| `source` | `string` | No | Source of the campaign |
| `sourceId` | `string` | No | Source ID of the campaign |
| `name` | `string` | No | Campaign name |
| `status` | `string` | No | Campaign status |
| `campaignType` | `string` | No | Campaign type |
| `campaignCategory` | `string` | No | Campaign category |
| `variations` | `array<EmailCampaignVariationPublicV2Dto>` | No | AB test variation identifiers (available only for AB test campaigns) |
| `deleted` | `boolean` | Yes | Whether the campaign is deleted |
| `createdAt` | `string` | Yes | Created at timestamp |
| `updatedAt` | `string` | Yes | Last updated timestamp |

### ListEmailCampaignsPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaigns` | `array<EmailCampaignPublicV2Dto>` | Yes | List of email campaigns |
| `total` | `number` | Yes | Total count of email campaigns |
| `traceId` | `string` | No | Trace ID of the request |

### UpdateEmailCampaignPublicV2BodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Campaign name |
| `editorContent` | `string` | No | Editor content to update. Required only when updating campaign content, and must be provided together with editorType. Provide HTML or plain-text string content. |
| `editorType` | `string` | No | Editor type for campaign content. Required only when updating campaign content, and must be provided together with editorContent. |
| `userId` | `string` | No | ID of the user performing this action |

### UpdateEmailCampaignPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Campaign ID |
| `source` | `string` | No | Source of the campaign |
| `sourceId` | `string` | No | Source ID of the campaign |
| `name` | `string` | No | Campaign name |
| `status` | `string` | No | Campaign status |
| `campaignType` | `string` | No | Campaign type |
| `campaignCategory` | `string` | No | Campaign category |
| `variations` | `array<EmailCampaignVariationPublicV2Dto>` | No | AB test variation identifiers (available only for AB test campaigns) |
| `deleted` | `boolean` | Yes | Whether the campaign is deleted |
| `createdAt` | `string` | Yes | Created at timestamp |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `traceId` | `string` | No | Trace ID of request |

### GetEmailCampaignPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Campaign ID |
| `source` | `string` | No | Source of the campaign |
| `sourceId` | `string` | No | Source ID of the campaign |
| `name` | `string` | No | Campaign name |
| `status` | `string` | No | Campaign status |
| `campaignType` | `string` | No | Campaign delivery type |
| `campaignCategory` | `string` | No | Campaign category |
| `variations` | `array<EmailCampaignVariationPublicV2Dto>` | No | AB test variation identifiers (available only for AB test campaigns) |
| `editorType` | `string` | No | Original editor type the campaign was created with |
| `isPlainText` | `boolean` | No | Whether the campaign uses plain text |
| `editorContentUrl` | `string` | No | URL to fetch the rendered campaign content as HTML. Issue a GET against this URL to retrieve the body. |
| `fromName` | `string` | No | Sender name |
| `fromEmail` | `string` | No | Sender email address |
| `subject` | `string` | No | Email subject line |
| `replyToAddress` | `string` | No | Reply-to email address |
| `previewText` | `string` | No | Preview text |
| `deleted` | `boolean` | Yes | Whether the campaign is deleted |
| `createdAt` | `string` | Yes | Created at timestamp |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `traceId` | `string` | No | Trace ID of the request |

### WorkflowCampaignPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Campaign ID |
| `name` | `string` | No | Campaign name |
| `status` | `string` | No | Campaign status |
| `source` | `string` | No | Source of the campaign |
| `sourceId` | `string` | No | Source ID of the campaign |
| `deleted` | `boolean` | No | Whether the campaign is deleted |
| `createdAt` | `string` | Yes | Created at timestamp |
| `updatedAt` | `string` | Yes | Updated at timestamp |

### ListWorkflowCampaignsPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaigns` | `array<WorkflowCampaignPublicV2Dto>` | Yes | List of workflow campaigns |
| `total` | `number` | Yes | Total count of campaigns |
| `traceId` | `string` | No | Trace ID of the request |

### WorkflowCampaignSubSourcePublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Sub-source identifier (workflow step). Pass this value as the `subSourceId` query parameter on the campaign stats endpoint to retrieve stats scoped to this step. |
| `name` | `string` | No | Workflow step name |
| `subject` | `string` | No | Email subject line |
| `fromName` | `string` | No | Sender name |
| `fromEmail` | `string` | No | Sender email address |
| `previewText` | `string` | No | Preview text |
| `editorType` | `string` | No | Editor type for this step |
| `isPlainText` | `boolean` | No | Whether this step uses plain text |
| `editorContentUrl` | `string` | No | URL to fetch the rendered step content as HTML. Issue a GET against this URL to retrieve the body. |
| `createdAt` | `string` | No | Timestamp when this step was added to the workflow |
| `updatedAt` | `string` | No | Timestamp when this step was last updated |

### GetWorkflowCampaignPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Campaign ID |
| `name` | `string` | No | Campaign name |
| `status` | `string` | No | Campaign status |
| `source` | `string` | No | Source of the campaign |
| `sourceId` | `string` | No | Source ID of the campaign |
| `subSources` | `array<WorkflowCampaignSubSourcePublicV2Dto>` | No | Sub-sources (email-sending steps) within this workflow. Each entry's `id` can be passed as the `subSourceId` query parameter to the campaign stats endpoint to retrieve per-step stats. |
| `deleted` | `boolean` | No | Whether the campaign is deleted |
| `createdAt` | `string` | Yes | Created at timestamp |
| `updatedAt` | `string` | Yes | Updated at timestamp |
| `traceId` | `string` | No | Trace ID of the request |

### BulkActionCampaignPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Campaign ID |
| `source` | `string` | No | Source of the campaign |
| `sourceId` | `string` | No | Source ID of the campaign |
| `name` | `string` | No | Campaign name |
| `status` | `string` | Yes | Campaign status |
| `scheduleType` | `string` | No | Schedule type (NOW, SCHEDULED, or DRIP) |
| `deleted` | `boolean` | Yes | Whether the campaign is deleted |
| `createdAt` | `string` | Yes | Created at timestamp |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `completedAt` | `string` | No | Processing completion timestamp |
| `emailMetadata` | `BulkActionCampaignEmailDetailsDto` | No | Email metadata |

### ListBulkActionCampaignsPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaigns` | `array<BulkActionCampaignPublicV2Dto>` | Yes | List of bulk action campaigns |
| `total` | `number` | Yes | Total count of bulk action campaigns |
| `traceId` | `string` | No | Trace ID of the request |

### GetBulkActionCampaignPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Campaign ID |
| `source` | `string` | No | Source of the campaign |
| `sourceId` | `string` | No | Source ID of the campaign |
| `name` | `string` | No | Campaign name |
| `status` | `string` | Yes | Campaign status |
| `scheduleType` | `string` | No | Schedule type (NOW, SCHEDULED, or DRIP) |
| `fromName` | `string` | No | Sender name |
| `fromEmail` | `string` | No | Sender email address |
| `subject` | `string` | No | Email subject line |
| `replyToAddress` | `string` | No | Reply-to email address |
| `previewText` | `string` | No | Preview text |
| `editorType` | `string` | No | Editor type for this campaign |
| `isPlainText` | `boolean` | No | Whether the campaign uses plain text |
| `editorContentUrl` | `string` | No | URL to fetch the rendered campaign content as HTML. Issue a GET against this URL to retrieve the body. |
| `deleted` | `boolean` | Yes | Whether the campaign is deleted |
| `createdAt` | `string` | Yes | Created at timestamp |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `completedAt` | `string` | No | Processing completion timestamp |
| `traceId` | `string` | No | Trace ID of the request |

### ScheduleCampaignEmailMetaPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Email subject line |
| `fromName` | `string` | Yes | Sender display name |
| `fromEmail` | `string` | Yes | Sender email address |
| `replyToAddress` | `string` | No | Reply-to email address |
| `previewText` | `string` | No | Preview text shown in inbox after subject |
| `attachments` | `array<string>` | No | Attachment download URLs |

### ScheduleCampaignRecipientsPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Recipient selection type |
| `contactIds` | `array<string>` | No | Contact IDs to send to. Required when type is contact. |
| `tagIds` | `array<string>` | No | Tag IDs to filter recipients by. Required when type is tag. |
| `segment` | `string` | No | Segment type for pre-built segments. Required when type is segment. |
| `freezeList` | `boolean` | No | Freeze the contact list at schedule time — new matching contacts will not be added later |

### ScheduleCampaignBatchConfigPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `batchSize` | `number` | Yes | Number of contacts to process per batch |
| `interval` | `number` | Yes | Delay between batches |
| `intervalUnit` | `string` | Yes | Unit for the interval |
| `skipDays` | `array<string>` | No | Days to skip sending |
| `windowStart` | `string` | No | Earliest time to send batches |
| `windowEnd` | `string` | No | Latest time to send batches |

### ScheduleCampaignTrackingPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clickTracking` | `boolean` | No | Enable click tracking on links |
| `utmTracking` | `boolean` | No | Enable UTM parameters on links |

### ScheduleCampaignResendPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | No | Enable resend to contacts who did not open |
| `waitHours` | `number` | No | Hours to wait before resending. Required when enabled is true. |
| `subject` | `string` | No | Override subject line for the resend email |

### ScheduleCampaignScheduleConfigPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sendAt` | `string` | No | Date/time to send. Required for scheduled, batch, and smart_send. Ignored for immediate. |
| `batch` | `ScheduleCampaignBatchConfigPublicV2Dto` | No | Batch/drip configuration. Required when scheduleType is batch. Ignored otherwise. |
| `tracking` | `ScheduleCampaignTrackingPublicV2Dto` | No | Click and UTM tracking options |
| `resend` | `ScheduleCampaignResendPublicV2Dto` | No | Auto-resend to contacts who did not open |
| `emailPreferenceId` | `string` | No | Email preference type ID for categorizing this campaign |

### ScheduleCampaignRssConfigPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | RSS schedule name |
| `rssFeedURL` | `string` | Yes | RSS feed URL |
| `repeatAfter` | `string` | Yes | How often to check the feed |
| `repeatAfterTime` | `string` | Yes | Time of day to execute |
| `rssFeedLimit` | `number` | No | Max number of RSS items per email |
| `startAtDay` | `string` | No | Day of week for weekly RSS |
| `startAtMonthDay` | `string` | No | Day of month for monthly RSS |
| `firstExecutionDate` | `string` | No | Override first execution date/time |

### ScheduleCampaignABTestVariationPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | No | Subject line for this variation |
| `documentId` | `string` | No | Template/document ID for this variation |

### ScheduleCampaignABTestConfigPublicV2Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `testType` | `string` | Yes | What is being tested |
| `testDuration` | `number` | Yes | Seconds to run the test before picking a winner |
| `variationCount` | `number` | Yes | Number of variations |
| `testSize` | `number` | Yes | Percentage of contacts in the test group (0-100) |
| `winningCriteria` | `string` | Yes | How to pick the winner |
| `variations` | `array<ScheduleCampaignABTestVariationPublicV2Dto>` | Yes | A/B test variations |

### ScheduleCampaignPublicV2BodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `scheduleType` | `string` | Yes | How to schedule the campaign |
| `timeZone` | `string` | Yes | IANA timezone |
| `userId` | `string` | Yes | ID of the user performing this action |
| `userName` | `string` | No | Name of the user performing this action |
| `emailMeta` | `ScheduleCampaignEmailMetaPublicV2Dto` | Yes | Email subject, sender, and content metadata |
| `recipients` | `ScheduleCampaignRecipientsPublicV2Dto` | Yes | Who receives the email. Must provide either contactIds or filter. |
| `sendDays` | `array<string>` | No | Days of the week to allow sending. Used for batch and RSS scheduleTypes. |
| `scheduleConfig` | `ScheduleCampaignScheduleConfigPublicV2Dto` | No | Schedule configuration for immediate, scheduled, batch, and smart_send types. Required when scheduleType is not rss. |
| `rssConfig` | `ScheduleCampaignRssConfigPublicV2Dto` | No | RSS feed configuration. Required when scheduleType is rss. |
| `abTestConfig` | `ScheduleCampaignABTestConfigPublicV2Dto` | No | A/B test configuration. Can be combined with any scheduleType except rss. |

### ScheduleCampaignPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaignId` | `string` | Yes | Campaign ID |
| `sourceId` | `string` | Yes | Source ID for fetching campaign statistics |
| `traceId` | `string` | No | Trace ID of the request |

### DeleteCampaignPublicV2ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deleted` | `boolean` | Yes | Whether the campaign was deleted successfully |
| `traceId` | `string` | No | Trace ID of the request |
