# Opportunities API v3

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/opportunities-v3.json). Do not edit this generated file directly.

**API Version:** v3
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Opportunities API

## API Version v3

All APIs available via `/v3` route prefix with AIP-compliant responses.

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
| `locationId` | query | `string` | Yes | Identifier of the location (sub-account) |
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
| `q` | query | `string` | No | Search query (max 75 characters) |
| `status` | query | `string` | No | Filter by opportunity status |
| `campaignId` | query | `string` | No | Campaign Id |
| `id` | query | `string` | No | Opportunity Id |
| `order` | query | `string` | No | Sort order for results (e.g. added_asc, added_desc, name_asc, name_desc) |
| `endDate` | query | `string` | No | End date |
| `startAfter` | query | `string` | No | Start After |
| `startAfterId` | query | `string` | No | Start After Id |
| `date` | query | `string` | No | Start date |
| `country` | query | `string` | No | Filter by country code (ISO 3166-1 alpha-2) |
| `page` | query | `number` | No | Page number for pagination |
| `limit` | query | `number` | No | Limit Per Page records count. will allow maximum up to 100 and default will be 20 |
| `getTasks` | query | `boolean` | No | get Tasks in contact |
| `getNotes` | query | `boolean` | No | get Notes in contact |
| `getCalendarEvents` | query | `boolean` | No | get Calender event in contact |
| `locationId` | query | `string` | Yes | Location Id |
| `pipelineId` | query | `string` | No | Pipeline Id |
| `pipelineStageId` | query | `string` | No | Stage Id |
| `contactId` | query | `string` | No | Contact Id |
| `assignedTo` | query | `string` | No | Filter by assigned user identifier |

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
| `locationId` | query | `string` | Yes | Identifier of the location (sub-account) to retrieve pipelines for |

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
| application/json | `UpdateOpportunityDtoV3` |

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
| application/json | `CreateDtoV3` |

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
| `isRemoveAllFollowers` | query | `boolean` | No | Set to true to remove all followers from the opportunity |

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
| `lostReasons` | `array<LostReasonResponseSchema>` | No | List of lost reasons for the location |
| `total` | `number` | No | Total number of lost reasons matching the query |

### SearchOpportunitiesContactResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the contact |
| `name` | `string` | No | Full name of the contact |
| `companyName` | `string` | No | Company name associated with the contact |
| `email` | `string` | No | Email address of the contact |
| `phone` | `string` | No | Phone number of the contact |
| `tags` | `array<string>` | No | Tags associated with the contact |

### CustomFieldResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of the custom field |
| `fieldValue` | `string or object or array<string> or array<object>` | Yes | The value of the custom field |

### SearchOpportunitiesResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the opportunity |
| `name` | `string` | No | Name of the opportunity |
| `monetaryValue` | `number` | No | Monetary value of the opportunity |
| `pipelineId` | `string` | No | Identifier of the pipeline the opportunity belongs to |
| `pipelineStageId` | `string` | No | Identifier of the pipeline stage the opportunity is in |
| `assignedTo` | `string` | No | Identifier of the user the opportunity is assigned to |
| `status` | `string` | No | Current status of the opportunity |
| `source` | `string` | No | Source of the opportunity |
| `lastStatusChangeAt` | `string` | No | ISO 8601 timestamp of the last status change |
| `lastStageChangeAt` | `string` | No | ISO 8601 timestamp of the last stage change |
| `lastActionDate` | `string` | No | ISO 8601 timestamp of the last action on the opportunity |
| `indexVersion` | `string` | No | Index version of the opportunity record |
| `createdAt` | `string` | No | ISO 8601 timestamp when the opportunity was created |
| `updatedAt` | `string` | No | ISO 8601 timestamp when the opportunity was last updated |
| `forecastExpectedCloseDate` | `string` | No | Expected close date for the forecast (YYYY-MM-DD) |
| `forecastOriginalCloseDate` | `string` | No | Original forecast close date before any slippage (YYYY-MM-DD) |
| `forecastSlippageCount` | `number` | No | Number of times the close date has slipped |
| `forecastDaysSlipped` | `number` | No | Total days the close date has slipped |
| `forecastLastSlippedAt` | `string` | No | ISO 8601 timestamp of the last close-date slip |
| `forecastProbability` | `number` | No | Forecast win probability percentage (0–100) |
| `effectiveProbability` | `number` | No | Effective win probability after stage and forecast adjustments (0–100) |
| `contactId` | `string` | No | Identifier of the contact linked to the opportunity |
| `locationId` | `string` | No | Identifier of the location (sub-account) the opportunity belongs to |
| `contact` | `SearchOpportunitiesContactResponseSchema` | No | Contact details associated with the opportunity |
| `notes` | `array<array<object>>` | No | Notes attached to the opportunity |
| `tasks` | `array<array<object>>` | No | Tasks attached to the opportunity |
| `calendarEvents` | `array<array<object>>` | No | Calendar events attached to the opportunity |
| `lostReasonId` | `string` | No | Identifier of the lost reason if the opportunity was marked lost |
| `customFields` | `array<CustomFieldResponseSchema>` | No | Custom fields associated with the opportunity |
| `followers` | `array<array<object>>` | No | User IDs following this opportunity |
| `externalObjectId` | `string` | No | External object identifier for integrations |

### SearchMetaResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total` | `number` | No | Total number of opportunities matching the query |
| `nextPageUrl` | `string` | No | URL to retrieve the next page of results |
| `startAfterId` | `string` | No | Cursor id to use for pagination (startAfterId param) |
| `startAfter` | `number` | No | Cursor timestamp to use for pagination (startAfter param) |
| `currentPage` | `number` | No | Current page number |
| `nextPage` | `number` | No | Next page number |
| `prevPage` | `number` | No | Previous page number |

### SearchSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `opportunities` | `array<SearchOpportunitiesResponseSchema>` | No | List of opportunities matching the search criteria |
| `meta` | `SearchMetaResponseSchema` | No | Pagination metadata for the result set |
| `aggregations` | `object` | No | Aggregation results keyed by aggregation name |

### AdditionalDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `notes` | `boolean` | Yes | Include notes in the response |
| `tasks` | `boolean` | Yes | Include tasks in the response |
| `calendarEvents` | `boolean` | Yes | Include calendar events in the response |
| `unReadConversations` | `boolean` | Yes | Include unread conversations count in the response |

### OpportunitySearchBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `query` | `string` | Yes | Full-text search query string (max 75 characters) |
| `limit` | `number` | Yes | Maximum number of results to return per page |
| `page` | `number` | Yes | Page number (0-indexed) |
| `searchAfter` | `array<string>` | Yes | Search-after cursor values for deep pagination |
| `additionalDetails` | `AdditionalDetailsDTO` | Yes | Flags to include additional related entities in the response |

### StageAggregationResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipelineStageId` | `string` | Yes | Identifier of the pipeline stage being aggregated |
| `totalCount` | `number` | Yes | Total number of opportunities in this stage |
| `totalValue` | `number` | Yes | Total monetary value of all opportunities in this stage |
| `weightedValue` | `number` | Yes | Probability-weighted total value of opportunities in this stage |
| `openValue` | `number` | Yes | Total value of open opportunities in this stage |
| `openWeightedValue` | `number` | Yes | Probability-weighted value of open opportunities in this stage |
| `wonValue` | `number` | Yes | Total value of won opportunities in this stage |

### PostSearchSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `opportunities` | `array<SearchOpportunitiesResponseSchema>` | No | List of opportunities matching the search criteria |
| `total` | `number` | Yes | Total number of opportunities matching the query |
| `stageAggregations` | `array<StageAggregationResponseDto>` | No | Per-stage totals when pipeline filter is present |
| `aggregations` | `object` | No | Aggregation results keyed by aggregation name |

### PipelinesResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the pipeline |
| `name` | `string` | No | Name of the pipeline |
| `stages` | `array<array<object>>` | No | Stages belonging to this pipeline |
| `showInFunnel` | `boolean` | No | Whether the pipeline is shown in the funnel view |
| `showInPieChart` | `boolean` | No | Whether the pipeline is shown in the pie chart view |
| `locationId` | `string` | No | Identifier of the location (sub-account) this pipeline belongs to |
| `useOpportunityProbability` | `boolean` | No | Whether stage-level win probability is enabled for this pipeline |
| `colorRenderMode` | `string` | No | How pipeline/stage colors are rendered |

### GetPipelinesSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipelines` | `array<PipelinesResponseSchema>` | No | List of pipelines for the location |

### GetPostOpportunitySuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `opportunity` | `SearchOpportunitiesResponseSchema` | No | The created or retrieved opportunity object |

### DeleteUpdateOpportunitySuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | Indicates whether the operation was successful. Deprecated — use `success` instead. |
| `success` | `boolean` | No | Indicates whether the operation was successful |

### UpdateStatusDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | Yes | New status for the opportunity |
| `lostReasonId` | `string` | No | lost reason Id |

### customFieldsInputStringSchemaV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `string` | No | Value of the custom field |

### customFieldsInputArraySchemaV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `array<string>` | No | Value of the custom field |

### customFieldsInputObjectSchemaV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `object` | No | Value of the custom field |

### CreateDtoV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipelineId` | `string` | Yes | pipeline Id |
| `locationId` | `string` | Yes | Identifier of the location (sub-account) |
| `name` | `string` | Yes | Name of the opportunity |
| `pipelineStageId` | `string` | No | Identifier of the pipeline stage |
| `status` | `string` | Yes | Current status of the opportunity |
| `contactId` | `string` | Yes | Identifier of the contact linked to the opportunity |
| `monetaryValue` | `number` | No | Monetary value of the opportunity |
| `forecastExpectedCloseDate` | `string` | No | Expected close date. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, or ISO 8601 |
| `forecastProbability` | `number` | No | Forecast probability |
| `assignedTo` | `string` | No | Identifier of the user the opportunity is assigned to |
| `customFields` | `array<customFieldsInputStringSchemaV3 or customFieldsInputArraySchemaV3 or customFieldsInputObjectSchemaV3>` | No | Add custom fields to opportunities. |

### UpdateOpportunityDtoV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipelineId` | `string` | No | pipeline Id |
| `name` | `string` | No | Name of the opportunity |
| `pipelineStageId` | `string` | No | Identifier of the pipeline stage |
| `status` | `string` | No | Current status of the opportunity |
| `monetaryValue` | `number` | No | Monetary value of the opportunity |
| `forecastExpectedCloseDate` | `string` | No | Expected close date. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, or ISO 8601 |
| `forecastProbability` | `number` | No | Forecast probability |
| `assignedTo` | `string` | No | Identifier of the user the opportunity is assigned to |
| `customFields` | `array<customFieldsInputStringSchemaV3 or customFieldsInputArraySchemaV3 or customFieldsInputObjectSchemaV3>` | No | Update custom fields to opportunities. |

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
| `status` | `string` | No | Current status of the opportunity |
| `pipelineStageId` | `string` | No | Identifier of the pipeline stage |
| `monetaryValue` | `object` | No | Monetary value of the opportunity |
| `forecastExpectedCloseDate` | `string` | No | Expected close date. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, or ISO 8601 |
| `forecastProbability` | `number` | No | Forecast probability |
| `assignedTo` | `string` | No | Identifier of the user the opportunity is assigned to |
| `lostReasonId` | `string` | No | lost reason Id |

### UpsertOpportunitySuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `opportunity` | `object` | Yes | Updated / New Opportunity |
| `new` | `boolean` | Yes | Indicates whether the opportunity was newly created (true) or updated (false) |

### FollowersDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | Yes | Array of user IDs to add or remove as followers (max 10) |

### CreateAddFollowersSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | No | Current list of all follower user IDs after the operation |
| `followersAdded` | `array<string>` | No | User IDs that were successfully added as followers |

### DeleteFollowersSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | No | Current list of all follower user IDs after the operation |
| `followersRemoved` | `array<string>` | No | User IDs that were successfully removed as followers |
