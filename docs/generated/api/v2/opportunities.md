# Opportunities API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/opportunities.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Opportunities API

## Lost reason

### Get lost reason

**Endpoint:** `GET /opportunities/lost-reason`
**Scope:** `opportunities.readonly`
**Token Type:** bearer

Get lost reason

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `name` | query | `string` | No | lost reason name |
| `deleted` | query | `boolean` | No | deleted |
| `query` | query | `string` | No | search query |
| `skip` | query | `number` | No | skip |
| `limit` | query | `number` | No | limit |
| `getCount` | query | `boolean` | No | get count |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `LostReasonsResponseSchema` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Search

### Search Opportunity

**Endpoint:** `GET /opportunities/search`
**Scope:** `opportunities.readonly`
**Token Type:** bearer

Search Opportunity

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `q` | query | `string` | No | — |
| `location_id` | query | `string` | Yes | Location Id |
| `pipeline_id` | query | `string` | No | Pipeline Id |
| `pipeline_stage_id` | query | `string` | No | stage Id |
| `contact_id` | query | `string` | No | Contact Id |
| `status` | query | `string` | No | — |
| `assigned_to` | query | `string` | No | — |
| `campaignId` | query | `string` | No | Campaign Id |
| `id` | query | `string` | No | Opportunity Id |
| `order` | query | `string` | No | — |
| `endDate` | query | `string` | No | End date |
| `startAfter` | query | `string` | No | Start After |
| `startAfterId` | query | `string` | No | Start After Id |
| `date` | query | `string` | No | Start date |
| `country` | query | `string` | No | — |
| `page` | query | `number` | No | — |
| `limit` | query | `number` | No | Limit Per Page records count. will allow maximum up to 100 and default will be 20 |
| `getTasks` | query | `boolean` | No | get Tasks in contact |
| `getNotes` | query | `boolean` | No | get Notes in contact |
| `getCalendarEvents` | query | `boolean` | No | get Calender event in contact |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `SearchSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Search Opportunities

**Endpoint:** `POST /opportunities/search`
**Scope:** `opportunities.readonly`
**Token Type:** bearer

Search Opportunities based on combinations of advanced filters. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-424216/7bf11bc9b94f80f

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-424216/7bf11bc9b94f80f)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `OpportunitySearchBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `PostSearchSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Pipelines

### Get Pipelines

**Endpoint:** `GET /opportunities/pipelines`
**Scope:** `opportunities.readonly`
**Token Type:** bearer

Get Pipelines

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPipelinesSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Opportunities

### Get Opportunity

**Endpoint:** `GET /opportunities/{id}`
**Scope:** `opportunities.readonly`
**Token Type:** bearer

Get Opportunity

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Opportunity Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPostOpportunitySuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Opportunity

**Endpoint:** `DELETE /opportunities/{id}`
**Scope:** `opportunities.write`
**Token Type:** bearer

Delete Opportunity

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Opportunity Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteUpdateOpportunitySuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Opportunity

**Endpoint:** `PUT /opportunities/{id}`
**Scope:** `opportunities.write`
**Token Type:** bearer

Update Opportunity

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Opportunity Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateOpportunityDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPostOpportunitySuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Opportunity Status

**Endpoint:** `PUT /opportunities/{id}/status`
**Scope:** `opportunities.write`
**Token Type:** bearer

Update Opportunity Status

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Opportunity Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateStatusDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteUpdateOpportunitySuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert Opportunity

**Endpoint:** `POST /opportunities/upsert`
**Scope:** `opportunities.write`
**Token Type:** bearer

Upsert Opportunity

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertOpportunityDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpsertOpportunitySuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Opportunity

**Endpoint:** `POST /opportunities/`
**Scope:** `opportunities.write`
**Token Type:** bearer

Create Opportunity

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `GetPostOpportunitySuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Followers

### Add Followers

**Endpoint:** `POST /opportunities/{id}/followers`
**Scope:** `opportunities.write`
**Token Type:** bearer

Add Followers

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Opportunity Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `FollowersDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateAddFollowersSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Remove Followers

**Endpoint:** `DELETE /opportunities/{id}/followers`
**Scope:** `opportunities.write`
**Token Type:** bearer

Allows removal of one or all followers from an opportunity.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Opportunity Id |
| `isRemoveAllFollowers` | query | `boolean` | No | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `FollowersDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Followers successfully removed. | `DeleteFollowersSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### LostReasonResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | lost reason id |
| `name` | `string` | No | lost reason name |
| `locationId` | `string` | No | location id |
| `updatedAt` | `string (date-time)` | No | updated at |
| `createdAt` | `string (date-time)` | No | created at |

### LostReasonsResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lostReasons` | `array<LostReasonResponseSchema>` | No | — |
| `total` | `number` | No | — |

### SearchOpportunitiesContactResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `companyName` | `string` | No | — |
| `email` | `string` | No | — |
| `phone` | `string` | No | — |
| `tags` | `array<string>` | No | — |

### CustomFieldResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `fieldValue` | `string or object or array<string> or array<object>` | Yes | The value of the custom field |

### SearchOpportunitiesResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `monetaryValue` | `number` | No | — |
| `pipelineId` | `string` | No | — |
| `pipelineStageId` | `string` | No | — |
| `assignedTo` | `string` | No | — |
| `status` | `string` | No | — |
| `source` | `string` | No | — |
| `lastStatusChangeAt` | `string` | No | — |
| `lastStageChangeAt` | `string` | No | — |
| `lastActionDate` | `string` | No | — |
| `indexVersion` | `string` | No | — |
| `createdAt` | `string` | No | — |
| `updatedAt` | `string` | No | — |
| `contactId` | `string` | No | — |
| `locationId` | `string` | No | — |
| `contact` | `SearchOpportunitiesContactResponseSchema` | No | — |
| `notes` | `array<array<object>>` | No | — |
| `tasks` | `array<array<object>>` | No | — |
| `calendarEvents` | `array<array<object>>` | No | — |
| `lostReasonId` | `string` | No | — |
| `customFields` | `array<CustomFieldResponseSchema>` | No | — |
| `followers` | `array<array<object>>` | No | — |
| `externalObjectId` | `string` | No | — |

### SearchMetaResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total` | `number` | No | — |
| `nextPageUrl` | `string` | No | — |
| `startAfterId` | `string` | No | — |
| `startAfter` | `number` | No | — |
| `currentPage` | `number` | No | — |
| `nextPage` | `number` | No | — |
| `prevPage` | `number` | No | — |

### SearchSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `opportunities` | `array<SearchOpportunitiesResponseSchema>` | No | — |
| `meta` | `SearchMetaResponseSchema` | No | — |
| `aggregations` | `object` | No | — |

### AdditionalDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `notes` | `boolean` | Yes | — |
| `tasks` | `boolean` | Yes | — |
| `calendarEvents` | `boolean` | Yes | — |
| `unReadConversations` | `boolean` | Yes | — |

### OpportunitySearchBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `query` | `string` | Yes | — |
| `limit` | `number` | Yes | — |
| `page` | `number` | Yes | — |
| `searchAfter` | `array<string>` | Yes | — |
| `additionalDetails` | `AdditionalDetailsDTO` | Yes | — |

### PostSearchSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `opportunities` | `array<SearchOpportunitiesResponseSchema>` | No | — |
| `total` | `number` | Yes | — |
| `aggregations` | `object` | No | — |

### PipelinesResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `stages` | `array<array<object>>` | No | — |
| `showInFunnel` | `boolean` | No | — |
| `showInPieChart` | `boolean` | No | — |
| `locationId` | `string` | No | — |
| `colorRenderMode` | `string` | No | How pipeline/stage colors are rendered |

### GetPipelinesSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipelines` | `array<PipelinesResponseSchema>` | No | — |

### GetPostOpportunitySuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `opportunity` | `SearchOpportunitiesResponseSchema` | No | — |

### DeleteUpdateOpportunitySuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |

### UpdateStatusDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | Yes | — |
| `lostReasonId` | `string` | No | lost reason Id |

### customFieldsInputArraySchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `array<string>` | No | — |

### customFieldsInputObjectSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `object` | No | — |

### customFieldsInputStringSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `field_value` | `string` | No | — |

### CreateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipelineId` | `string` | Yes | pipeline Id |
| `locationId` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `pipelineStageId` | `string` | No | — |
| `status` | `string` | Yes | — |
| `contactId` | `string` | Yes | — |
| `monetaryValue` | `number` | No | — |
| `assignedTo` | `string` | No | — |
| `customFields` | `array<customFieldsInputStringSchema or customFieldsInputArraySchema or customFieldsInputObjectSchema>` | No | Add custom fields to opportunities. |

### UpdateOpportunityDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipelineId` | `string` | No | pipeline Id |
| `name` | `string` | No | — |
| `pipelineStageId` | `string` | No | — |
| `status` | `string` | No | — |
| `monetaryValue` | `number` | No | — |
| `assignedTo` | `string` | No | — |
| `customFields` | `array<customFieldsInputStringSchema or customFieldsInputArraySchema or customFieldsInputObjectSchema>` | No | Update custom fields to opportunities. |

### UpsertOpportunityDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | opportunityId |
| `pipelineId` | `string` | Yes | pipeline Id |
| `locationId` | `string` | Yes | locationId |
| `followers` | `array<string>` | Yes | contactId |
| `isRemoveAllFollowers` | `boolean` | Yes | isRemoveAllFollowers |
| `followersActionType` | `string` | Yes | followers action type |
| `name` | `string` | No | name |
| `status` | `string` | No | — |
| `pipelineStageId` | `string` | No | — |
| `monetaryValue` | `object` | No | — |
| `assignedTo` | `string` | No | — |
| `lostReasonId` | `string` | No | lost reason Id |

### UpsertOpportunitySuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `opportunity` | `object` | Yes | Updated / New Opportunity |
| `new` | `boolean` | Yes | — |

### FollowersDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | Yes | — |

### CreateAddFollowersSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | No | — |
| `followersAdded` | `array<string>` | No | — |

### DeleteFollowersSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | No | — |
| `followersRemoved` | `array<string>` | No | — |
