# Ad Manager API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/ad-manager.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Ad-publishing API

## Facebook Reporting

### Get reporting data

**Endpoint:** `GET /ad-publishing/facebook/reporting`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve aggregated Facebook ad reporting metrics for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `groupBy` | query | `string` | Yes | Time grouping interval |
| `startDate` | query | `string` | Yes | Report start date |
| `endDate` | query | `string` | Yes | Report end date |
| `type` | query | `string` | Yes | Integration source type |
| `fields` | query | `array<string>` | Yes | Comma-separated reporting fields |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get campaign reporting

**Endpoint:** `GET /ad-publishing/facebook/reporting/campaign/{campaignId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve reporting metrics for a specific Facebook campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `campaignId` | path | `string` | Yes | Campaign identifier |
| `locationId` | query | `string` | Yes | Location identifier |
| `startDate` | query | `string` | Yes | Report start date |
| `endDate` | query | `string` | Yes | Report end date |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get reporting list

**Endpoint:** `GET /ad-publishing/facebook/reporting/list`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a list of Facebook campaigns, adsets, or ads with reporting data

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `listType` | query | `string` | Yes | Reporting list type |
| `startDate` | query | `string` | Yes | Report start date |
| `endDate` | query | `string` | Yes | Report end date |
| `campaignId` | query | `string` | Yes | Campaign identifier |
| `type` | query | `string` | Yes | Integration source type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Facebook Integration

### Get current Facebook user

**Endpoint:** `GET /ad-publishing/facebook/me`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve the authenticated Facebook user profile for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Facebook pages

**Endpoint:** `GET /ad-publishing/facebook/pages`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Facebook pages associated with the connected account

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `fetchExisting` | query | `string` | No | Fetch existing pages flag |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Instagram accounts for page

**Endpoint:** `GET /ad-publishing/facebook/page/{pageId}/instagram`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Instagram accounts linked to a specific Facebook page

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `pageId` | path | `string` | Yes | Facebook page identifier |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | No | Integration type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get page lead forms

**Endpoint:** `GET /ad-publishing/facebook/page/{pageId}/forms`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve lead gen forms for a specific Facebook page

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `pageId` | path | `string` | Yes | Facebook page identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create page lead form

**Endpoint:** `POST /ad-publishing/facebook/page/{pageId}/forms`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create a new lead gen form on a Facebook page

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `pageId` | path | `string` | Yes | Facebook page identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateLeadFormDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get ad accounts

**Endpoint:** `GET /ad-publishing/facebook/ad-accounts`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Facebook ad accounts available for the connected user

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | No | Account source type |
| `next` | query | `string` | No | Pagination cursor |
| `fetchAll` | query | `string` | No | Fetch all accounts |
| `limit` | query | `string` | No | Results page limit |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get ad account details

**Endpoint:** `GET /ad-publishing/facebook/ad-accounts/{adAccountId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve details of a specific Facebook ad account

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adAccountId` | path | `string` | Yes | Ad account identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete ad account

**Endpoint:** `DELETE /ad-publishing/facebook/ad-accounts/{adAccountId}`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Remove a Facebook ad account connection from a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adAccountId` | path | `string` | Yes | Ad account identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get conversation forms

**Endpoint:** `GET /ad-publishing/facebook/conversation-forms`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Facebook conversation lead forms for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create conversation form

**Endpoint:** `POST /ad-publishing/facebook/conversation-forms`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create a new Facebook conversation lead form

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateConversationFormDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Facebook integration

**Endpoint:** `POST /ad-publishing/facebook/integration`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create a Facebook ad integration for a location with page and ad account

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateIntegrationDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Facebook integration

**Endpoint:** `GET /ad-publishing/facebook/integration`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve the Facebook ad integration details for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Facebook integration

**Endpoint:** `DELETE /ad-publishing/facebook/integration`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Remove the Facebook ad integration from a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete page connection

**Endpoint:** `DELETE /ad-publishing/facebook/page`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Remove a Facebook page connection from a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `pageId` | query | `string` | Yes | Facebook page ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Set default page

**Endpoint:** `PUT /ad-publishing/facebook/page/default`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Set the default Facebook page for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `FbSetDefaultPageBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get lead form by ID

**Endpoint:** `GET /ad-publishing/facebook/lead-form/{leadFormId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a specific Facebook lead form by its ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `leadFormId` | path | `string` | Yes | Lead form identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Facebook Ads

### Search targeting options

**Endpoint:** `GET /ad-publishing/facebook/targeting/search`
**Token Type:** bearer

Search Facebook geo-locations and interests for ad targeting

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `type` | query | `string` | Yes | Targeting search type |
| `query` | query | `string` | Yes | Search query string |
| `searchType` | query | `string` | No | Specific search subtype |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Publish campaign

**Endpoint:** `POST /ad-publishing/facebook/campaigns/{campaignId}/publish`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Publish a Facebook campaign and push it live to Facebook

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `campaignId` | path | `string` | Yes | Campaign identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `PublishAdDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get conversion pixels

**Endpoint:** `GET /ad-publishing/facebook/pixels`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Facebook conversion pixels for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `channel` | query | `string` | No | Channel type |
| `pageId` | query | `string` | No | Facebook page ID |
| `igUserId` | query | `string` | No | Instagram user ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert conversion pixel

**Endpoint:** `PUT /ad-publishing/facebook/pixels`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create or update a Facebook conversion pixel configuration

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertConversionPixelDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get custom audiences

**Endpoint:** `GET /ad-publishing/facebook/custom-audience`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Facebook custom audiences for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | Yes | Audience list type |
| `source` | query | `string` | No | Audience data source |
| `adAccountId` | query | `string` | Yes | Ad account identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete custom audience

**Endpoint:** `DELETE /ad-publishing/facebook/custom-audience/{audienceId}`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Delete a Facebook custom audience by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `audienceId` | path | `string` | Yes | Custom audience identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update custom audience

**Endpoint:** `PUT /ad-publishing/facebook/custom-audience/{audienceId}`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Update name or description of a Facebook custom audience

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `audienceId` | path | `string` | Yes | Custom audience identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `FbUpdateAudienceBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get custom audience by ID

**Endpoint:** `GET /ad-publishing/facebook/custom-audience/{audienceId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a specific Facebook custom audience by its ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `audienceId` | path | `string` | Yes | Custom audience identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Add custom audience member

**Endpoint:** `PUT /ad-publishing/facebook/custom-audience/{audienceId}/member`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Add a member to a Facebook custom audience

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `audienceId` | path | `string` | Yes | Custom audience identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCustomAudienceDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Remove custom audience member

**Endpoint:** `DELETE /ad-publishing/facebook/custom-audience/{audienceId}/member`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Remove a member from a Facebook custom audience

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `audienceId` | path | `string` | Yes | Custom audience identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCustomAudienceDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Batch update audience members

**Endpoint:** `PUT /ad-publishing/facebook/custom-audience/{audienceId}/member/batch`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Add or remove members in bulk from a Facebook custom audience via CSV or smart lists

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `audienceId` | path | `string` | Yes | Custom audience identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCustomAudienceBatchDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get campaign with linked entities

**Endpoint:** `GET /ad-publishing/facebook/campaign/{campaignId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a Facebook campaign with its linked adsets and ads

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `campaignId` | path | `string` | Yes | Campaign identifier |
| `locationId` | query | `string` | Yes | Location identifier |
| `fields` | query | `string` | No | Comma-separated field names |
| `source` | query | `string` | No | Campaign data source |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get entities

**Endpoint:** `GET /ad-publishing/facebook/entity`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Facebook campaigns, adsets, or ads based on entity type

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | Yes | Integration source type |
| `next` | query | `string` | No | Pagination cursor |
| `fetchAll` | query | `string` | No | Fetch all entities |
| `campaignId` | query | `string` | No | Campaign identifier |
| `adSetId` | query | `string` | No | Ad set identifier |
| `entityType` | query | `string` | Yes | Entity type to fetch |
| `searchId` | query | `string` | No | Search identifier |
| `selectedAdAccountId` | query | `string` | No | Selected ad account ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert campaign

**Endpoint:** `PUT /ad-publishing/facebook/campaigns`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create or update a Facebook campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertCampaignDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert adset

**Endpoint:** `PUT /ad-publishing/facebook/adsets`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create or update a Facebook ad set

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertAdsetDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert ad

**Endpoint:** `PUT /ad-publishing/facebook/ads-v2`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create or update a Facebook ad (v2)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertAdDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Pause campaign

**Endpoint:** `POST /ad-publishing/facebook/campaigns/{campaignId}/pause`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Pause a running Facebook campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `campaignId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Resume campaign

**Endpoint:** `POST /ad-publishing/facebook/campaigns/{campaignId}/resume`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Resume a paused Facebook campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `campaignId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Duplicate campaign

**Endpoint:** `POST /ad-publishing/facebook/campaigns/{campaignId}/duplicate`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Duplicate an existing Facebook campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `campaignId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete campaign

**Endpoint:** `DELETE /ad-publishing/facebook/campaigns/{campaignId}`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Delete a Facebook campaign by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `campaignId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Pause ad set

**Endpoint:** `POST /ad-publishing/facebook/adsets/{adsetId}/pause`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Pause a running Facebook ad set

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adsetId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Resume ad set

**Endpoint:** `POST /ad-publishing/facebook/adsets/{adsetId}/resume`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Resume a paused Facebook ad set

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adsetId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Duplicate ad set

**Endpoint:** `POST /ad-publishing/facebook/adsets/{adsetId}/duplicate`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Duplicate an existing Facebook ad set

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adsetId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete ad set

**Endpoint:** `DELETE /ad-publishing/facebook/adsets/{adsetId}`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Delete a Facebook ad set by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adsetId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Pause ad

**Endpoint:** `POST /ad-publishing/facebook/ads/{adId}/pause`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Pause a running Facebook ad

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Resume ad

**Endpoint:** `POST /ad-publishing/facebook/ads/{adId}/resume`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Resume a paused Facebook ad

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Duplicate ad

**Endpoint:** `POST /ad-publishing/facebook/ads/{adId}/duplicate`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Duplicate an existing Facebook ad

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete ad

**Endpoint:** `DELETE /ad-publishing/facebook/ads/{adId}`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Delete a Facebook ad by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Google Reporting

### Get reporting data

**Endpoint:** `GET /ad-publishing/google/reporting`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve aggregated Google Ads reporting metrics for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `groupBy` | query | `string` | No | Group by period |
| `startDate` | query | `string` | Yes | Report start date |
| `endDate` | query | `string` | Yes | Report end date |
| `type` | query | `string` | Yes | Integration type |
| `fields` | query | `array<string>` | Yes | Comma-separated reporting fields |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get reporting list

**Endpoint:** `GET /ad-publishing/google/reporting/list`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a list of Google campaigns or ad groups with reporting data

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `listType` | query | `string` | Yes | Report list type |
| `startDate` | query | `string` | Yes | Report start date |
| `endDate` | query | `string` | Yes | Report end date |
| `campaignId` | query | `string` | No | Campaign identifier |
| `type` | query | `string` | Yes | Integration type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get campaign reporting

**Endpoint:** `GET /ad-publishing/google/reporting/campaign/{campaignId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve reporting metrics for a specific Google campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `campaignId` | path | `string` | Yes | Campaign identifier |
| `locationId` | query | `string` | Yes | Location identifier |
| `startDate` | query | `string` | Yes | Report start date |
| `endDate` | query | `string` | Yes | Report end date |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Google Ads

### Get conversions

**Endpoint:** `GET /ad-publishing/google/conversions`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Google Ads conversion actions for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | No | Integration type |
| `conversionType` | query | `string` | No | Conversion type |
| `category` | query | `string` | No | Conversion category |
| `startDate` | query | `string` | No | Filter start date |
| `endDate` | query | `string` | No | Filter end date |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert conversion

**Endpoint:** `PUT /ad-publishing/google/conversions`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create or update a Google Ads conversion action

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertConversionDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get conversion by ID

**Endpoint:** `GET /ad-publishing/google/conversions/{conversionId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a specific Google Ads conversion action by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `conversionId` | path | `string` | Yes | Conversion identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete conversion

**Endpoint:** `DELETE /ad-publishing/google/conversions/{conversionId}`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Delete a Google Ads conversion action by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `conversionId` | path | `string` | Yes | Conversion identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Publish ad

**Endpoint:** `POST /ad-publishing/google/ads/{adId}/publish`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Publish a Google ad and push it live

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adId` | path | `string` | Yes | Ad identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Search targeting options

**Endpoint:** `GET /ad-publishing/google/targeting/search`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Search Google geo-locations for ad targeting

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `type` | query | `string` | Yes | Search type |
| `query` | query | `string` | No | Search query |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get keyword ideas

**Endpoint:** `POST /ad-publishing/google/keyword-ideas`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve keyword suggestions for Google Ads campaigns

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `KeywordSuggestionDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get assets

**Endpoint:** `GET /ad-publishing/google/assets`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Google Ads creative assets for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | Yes | Asset type to retrieve |
| `id` | query | `string` | No | Asset identifier |
| `advertiserOnly` | query | `string` | No | Advertiser only flag |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert assets

**Endpoint:** `POST /ad-publishing/google/assets`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create or update Google Ads creative assets

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertAssetsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get entities

**Endpoint:** `GET /ad-publishing/google/entity`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Google campaigns, ad groups, or ads based on entity type

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | Yes | Integration type |
| `campaignId` | query | `string` | No | Campaign identifier |
| `adGroupId` | query | `string` | No | Ad group identifier |
| `entityType` | query | `string` | Yes | Entity type |
| `searchId` | query | `string` | No | Search identifier |
| `startDate` | query | `string` | No | Filter start date |
| `endDate` | query | `string` | No | Filter end date |
| `selectedAdAccountId` | query | `string` | No | Selected ad account ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get target interests

**Endpoint:** `GET /ad-publishing/google/target-interests`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve affinity and in-market audience options for Google Ads targeting

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | Yes | Interest type |
| `advertisingChannelType` | query | `string` | Yes | Channel type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get segments

**Endpoint:** `GET /ad-publishing/google/segments`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Google Ads audience segments for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | No | Segment type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert segment

**Endpoint:** `PUT /ad-publishing/google/segments`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create or update a Google Ads audience segment

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | Yes | Segment type |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertSegmentDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete segment

**Endpoint:** `DELETE /ad-publishing/google/segments/{segmentId}`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Delete a Google Ads audience segment by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `segmentId` | path | `string` | Yes | Segment identifier |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | Yes | Segment type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get segment by ID

**Endpoint:** `GET /ad-publishing/google/segments/{segmentId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a specific Google Ads audience segment by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `segmentId` | path | `string` | Yes | Segment identifier |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | Yes | Segment type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create offline user list job

**Endpoint:** `POST /ad-publishing/google/segments/offline-user-list-job`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create a job to upload users to a Google customer match list

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateOfflineUserListJobDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert audience

**Endpoint:** `PUT /ad-publishing/google/audiences`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create or update a Google Ads combined audience

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertAudienceDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get audiences

**Endpoint:** `GET /ad-publishing/google/audiences`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Google Ads combined audiences for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get audience by ID

**Endpoint:** `GET /ad-publishing/google/audiences/{audienceId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a specific Google Ads combined audience by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `audienceId` | path | `string` | Yes | Audience identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert Google campaign

**Endpoint:** `PUT /ad-publishing/google/ads`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create or update a full Google Ads campaign structure

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CampaignDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Google campaign by ID

**Endpoint:** `GET /ad-publishing/google/ads/{adId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a specific Google Ads campaign by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adId` | path | `string` | Yes | Ad identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get conversion goals

**Endpoint:** `GET /ad-publishing/google/conversion-goals`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Google Ads conversion goals for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Google Integration

### Get Google integration

**Endpoint:** `GET /ad-publishing/google/integration`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve the Google Ads integration details for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Google integration

**Endpoint:** `POST /ad-publishing/google/integration`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create a Google Ads integration for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateGoogleIntegrationDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get current Google user

**Endpoint:** `GET /ad-publishing/google/me`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve the authenticated Google user info for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Google ad accounts

**Endpoint:** `GET /ad-publishing/google/ad-accounts`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve Google Ads accounts available for the connected user

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `type` | query | `string` | No | Account type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get ad account details

**Endpoint:** `GET /ad-publishing/google/ad-accounts/{adAccountId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve details of a specific Google Ads account

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `adAccountId` | path | `string` | Yes | Ad account identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete ad account

**Endpoint:** `DELETE /ad-publishing/google/ad-accounts/{adAccountId}`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Remove a Google Ads account connection from a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adAccountId` | path | `string` | Yes | Ad account identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## LinkedIn Integration

### Get LinkedIn integration

**Endpoint:** `GET /ad-publishing/linkedin/integration`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve the LinkedIn Ads integration details for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create LinkedIn integration

**Endpoint:** `POST /ad-publishing/linkedin/integration`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create a LinkedIn Ads integration for a location with ad account details

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateLinkedinIntegrationDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get LinkedIn ad accounts

**Endpoint:** `GET /ad-publishing/linkedin/ad-accounts`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve LinkedIn Ads accounts available for the connected user

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get ad account details

**Endpoint:** `GET /ad-publishing/linkedin/ad-account`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve details of a specific LinkedIn ad account

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `adAccountId` | query | `string` | Yes | Ad account identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete ad account

**Endpoint:** `DELETE /ad-publishing/linkedin/ad-account`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Remove a LinkedIn ad account connection from a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `adAccountId` | query | `string` | Yes | Ad account identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get current LinkedIn user

**Endpoint:** `GET /ad-publishing/linkedin/me`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve the authenticated LinkedIn user info for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## LinkedIn Ads

### Get ad campaign group

**Endpoint:** `GET /ad-publishing/linkedin/ads/{adId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a LinkedIn ad campaign group by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adId` | path | `string` | Yes | Ad identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Publish ad campaign group

**Endpoint:** `POST /ad-publishing/linkedin/ads/{adId}/publish`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Publish a LinkedIn ad campaign group and push it live

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adId` | path | `string` | Yes | Ad identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LocationIdBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert ad campaign group

**Endpoint:** `PUT /ad-publishing/linkedin/ads`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create or update a LinkedIn ad campaign group with campaigns and ads

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AdCampaignGroupDataDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Search targeting options

**Endpoint:** `GET /ad-publishing/linkedin/targeting/search`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Search LinkedIn targeting facets such as locations, industries, and job titles

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |
| `facet` | query | `string` | Yes | Targeting facet |
| `query` | query | `string` | No | Search query |
| `q` | query | `string` | No | Query parameter |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get lead forms

**Endpoint:** `GET /ad-publishing/linkedin/{accountId}/forms`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve LinkedIn lead gen forms for an ad account

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `accountId` | path | `string` | Yes | Account identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create lead form

**Endpoint:** `POST /ad-publishing/linkedin/{accountId}/form`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Create a new LinkedIn lead gen form for an ad account

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LinkedInCreateLeadFormBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update ad status

**Endpoint:** `PATCH /ad-publishing/linkedin/{adId}/status`
**Scope:** `adPublishing.write`
**Token Type:** bearer

Pause or resume a LinkedIn ad, campaign, or ad group

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `adId` | path | `string` | Yes | Ad identifier |
| `locationId` | query | `string` | Yes | Location identifier |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `LinkedInUpdateAdStatusBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## LinkedIn Reporting

### Get ad analytics

**Endpoint:** `GET /ad-publishing/linkedin/reporting`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve LinkedIn Ads analytics data with configurable pivot and time grouping

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location ID |
| `pivot` | query | `string` | No | Analytics pivot type |
| `groupBy` | query | `string` | No | Time granularity for analytics |
| `startDate` | query | `string` | Yes | Start date in yyyy-mm-dd format |
| `endDate` | query | `string` | Yes | End date in yyyy-mm-dd format |
| `entityUrns` | query | `string` | No | Comma-separated list of entity URNs |
| `fields` | query | `array<string>` | No | Comma-separated list of fields to retrieve |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get reporting list

**Endpoint:** `GET /ad-publishing/linkedin/reporting/list`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve a list of LinkedIn campaigns or campaign groups with reporting data

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location ID |
| `listType` | query | `string` | Yes | List type |
| `campaignId` | query | `string` | Yes | Campaign ID |
| `campaignGroupId` | query | `string` | Yes | Campaign group ID |
| `startDate` | query | `string` | Yes | Start date in yyyy-mm-dd format |
| `endDate` | query | `string` | Yes | End date in yyyy-mm-dd format |
| `fields` | query | `array<string>` | No | Comma-separated list of fields to retrieve |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get campaign group reporting

**Endpoint:** `GET /ad-publishing/linkedin/reporting/campaign-group/{campaignGroupId}`
**Scope:** `adPublishing.readonly`
**Token Type:** bearer

Retrieve reporting metrics for a specific LinkedIn campaign group

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `campaignGroupId` | path | `string` | Yes | Campaign group identifier |
| `locationId` | query | `string` | Yes | Location ID |
| `startDate` | query | `string` | Yes | Start date in yyyy-mm-dd format |
| `endDate` | query | `string` | Yes | End date in yyyy-mm-dd format |
| `fields` | query | `array<string>` | No | Comma-separated list of fields to retrieve |
| `campaignGroupId` | query | `string` | No | Campaign group ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### GreetingCard

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Greeting card title |
| `style` | `string` | Yes | Greeting card style |
| `content` | `array<string>` | Yes | Greeting card content |

### FormQuestionOption

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | Option key |
| `value` | `string` | Yes | Option value |

### FormQuestion

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | No | Question label text shown to the user |
| `key` | `string` | Yes | Question key |
| `type` | `string` | Yes | Question input type — use a prefilled type for standard fields or CUSTOM / SHORT_ANSWER for freeform questions |
| `options` | `array<FormQuestionOption>` | No | Answer options for multiple-choice questions (only applies to CUSTOM type) |

### CustomDisclaimerCheckbox

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `is_required` | `boolean` | Yes | Checkbox required flag |
| `text` | `string` | Yes | Checkbox text label |
| `key` | `string` | Yes | Checkbox unique key |

### CustomDisclaimer

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Disclaimer title |
| `body` | `string` | Yes | Disclaimer body text |
| `checkboxes` | `array<CustomDisclaimerCheckbox>` | No | Consent checkboxes the user must agree to before submitting the form |

### ThankYouPage

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Thank you page title |
| `body` | `string` | Yes | Thank you page body |
| `buttonText` | `string` | Yes | Button text label |
| `buttonType` | `string` | Yes | Button action type |
| `buttonLink` | `string` | No | Button destination link |
| `businessPhone` | `string` | No | Business phone number |
| `countryCode` | `string` | No | Phone country code |

### CreateLeadFormDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Lead form type |
| `name` | `string` | Yes | Lead form name |
| `locationId` | `string` | Yes | Location identifier |
| `greetingCard` | `GreetingCard` | No | Greeting card config |
| `questions` | `array<FormQuestion>` | Yes | List of questions displayed on the lead form |
| `questionPageHeadline` | `string` | No | Question page headline |
| `privacyPolicyLink` | `string` | Yes | Privacy policy URL |
| `privacyPolicyText` | `string` | No | Privacy policy text |
| `customDisclaimer` | `CustomDisclaimer` | No | Custom disclaimer config |
| `thankYouPage` | `ThankYouPage` | Yes | Thank you page config |

### LocationIdBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |

### WelcomeMessageQuestion

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `question` | `string` | Yes | Question title text |
| `response` | `string` | No | Auto-response message |

### CreateConversationFormDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `name` | `string` | Yes | Conversation form name |
| `text` | `string` | Yes | Welcome message text |
| `questions` | `array<WelcomeMessageQuestion>` | Yes | Quick-reply questions shown in the welcome message of the conversation form |

### CreateIntegrationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `pageId` | `string` | Yes | Facebook page ID |
| `adAccountId` | `string` | No | Ad account identifier |

### PublishAdDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |

### UpsertConversionPixelDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `conversionPixelId` | `string` | No | Conversion pixel ID |
| `name` | `string` | No | Pixel name |
| `igUserId` | `string` | No | Instagram user ID |
| `type` | `string` | Yes | Pixel event type |

### FbUpdateAudienceBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `name` | `string` | Yes | Audience name |
| `description` | `string` | Yes | Audience description |

### UpdateCustomAudienceDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `contactId` | `string` | Yes | Contact identifier |
| `fbAdAccountId` | `string` | No | Facebook ad account ID |

### UpdateCustomAudienceBatchDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `csvPath` | `string` | No | CSV file path |
| `operationType` | `string` | Yes | Batch operation type |
| `smartlistIds` | `array<string>` | No | Smartlist IDs array |
| `dynamicAudience` | `string` | No | Dynamic audience flag |

### FbSetDefaultPageBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pageId` | `string` | Yes | Facebook page identifier |

### UpsertCampaignDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Campaign identifier |
| `locationId` | `string` | Yes | Location identifier |
| `name` | `string` | No | Campaign name |
| `objective` | `string` | No | Campaign objective |
| `specialAdCategories` | `string` | No | Special ad categories |
| `source` | `string` | No | Campaign data source |

### AudienceLocationGeometry

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `object` | Yes | Geographic coordinates |
| `location_type` | `string` | Yes | Geocoding result type |

### AudienceLocationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | Facebook location key |
| `name` | `string` | Yes | Location display name |
| `type` | `string` | Yes | Geographic location type |
| `selectionType` | `string` | Yes | Whether the location is included or excluded from targeting |
| `radius` | `number` | No | Targeting radius around the location (for city/address types) |
| `radiusUnit` | `string` | No | Unit for the targeting radius |
| `geometry` | `AudienceLocationGeometry` | No | Geometry data for address-based targeting |

### AudienceLocaleDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Locale display name |
| `key` | `number` | Yes | Facebook locale key |

### AudiencePlacementsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `facebook` | `array<string>` | No | Facebook placement positions |
| `instagram` | `array<string>` | No | Instagram placement positions |
| `messenger` | `array<string>` | No | Messenger placement positions |

### AudienceCustomAudienceItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Custom audience ID |
| `name` | `string` | Yes | Custom audience name |

### AudienceInterestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Interest ID |
| `name` | `string` | Yes | Interest name |
| `type` | `string` | No | Interest category type (defaults to "interests" if omitted) |

### FacebookAudienceDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geo_locations` | `array<AudienceLocationDTO>` | Yes | Geographic locations to target or exclude |
| `locales` | `array<AudienceLocaleDTO>` | No | Language locales to target |
| `placements` | `AudiencePlacementsDTO` | No | Ad placement positions per platform (only used when placementType is "manual") |
| `placementType` | `string` | No | Placement strategy — "auto" lets Facebook choose, "manual" uses the placements config |
| `lookalike` | `array<AudienceCustomAudienceItemDTO>` | No | Lookalike audiences to target |
| `retargeting` | `array<AudienceCustomAudienceItemDTO>` | No | Retargeting custom audiences to target |
| `interests` | `array<AudienceInterestDTO>` | No | Interest-based targeting criteria |
| `age_min` | `number` | No | Minimum age for targeting |
| `age_max` | `number` | No | Maximum age for targeting |
| `genders` | `array<number>` | No | Gender targeting (1 = male, 2 = female) |

### Budget

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `budgetType` | `string` | Yes | Budget type |
| `amount` | `number` | Yes | Budget amount |
| `scheduleStartDate` | `string` | No | Schedule start date |
| `scheduleEndDate` | `string` | No | Schedule end date |

### UpsertAdsetDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Ad set identifier |
| `locationId` | `string` | Yes | Location identifier |
| `name` | `string` | No | Ad set name |
| `pageId` | `string` | No | Facebook page ID |
| `instagramActorId` | `string` | No | Instagram actor ID |
| `messagingPlatforms` | `string` | No | Messaging platforms |
| `whatsappNumber` | `string` | No | WhatsApp phone number |
| `audience` | `FacebookAudienceDTO` | No | Targeting audience configuration including geo-locations, locales, placements, and custom audiences |
| `budget` | `Budget` | No | Ad set budget config |
| `conversionLocation` | `string` | No | Conversion location |
| `customEventType` | `string` | No | Custom event type |
| `pixelId` | `string` | No | Conversion pixel ID |
| `campaignId` | `string` | Yes | Parent campaign ID |

### MediaDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `src` | `string` | Yes | Media source URL |
| `thumbnailUrl` | `string` | No | Thumbnail URL (required when type is video) |
| `selectedPoster` | `number` | No | Selected poster index (required when type is video) |
| `type` | `string` | Yes | Media content type |
| `name` | `string` | No | Media file name |
| `headline` | `string` | No | Media headline |
| `description` | `string` | No | Media description |
| `link` | `string` | No | Media destination link |

### UpsertAdDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Ad identifier |
| `locationId` | `string` | Yes | Location identifier |
| `name` | `string` | No | Ad name |
| `primaryText` | `string` | No | Ad primary text |
| `headline` | `string` | No | Ad headline text |
| `description` | `string` | No | Ad description text |
| `imageUrl` | `string` | No | Ad image URL |
| `mediaType` | `string` | No | Ad media type |
| `media` | `array<MediaDTO>` | No | Media items (images or videos) attached to the ad creative |
| `multiAdvertiserAds` | `boolean` | No | Enable multi-advertiser ads |
| `campaignId` | `string` | Yes | Parent campaign ID |
| `adsetId` | `string` | Yes | Parent ad set ID |
| `cta` | `string` | No | Call to action type |
| `conversationFormId` | `string` | No | Conversation form ID |
| `destinationLink` | `string` | No | Destination link URL |
| `destinationFormId` | `string` | No | Destination form ID |

### AdScheduleTargetDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `startMinute` | `string` | Yes | Minute mark the schedule starts at |
| `endMinute` | `string` | Yes | Minute mark the schedule ends at |
| `dayOfWeek` | `string` | Yes | Day of the week for this schedule |
| `startHour` | `number` | Yes | Start hour in 24h format (0-23) |
| `endHour` | `number` | Yes | End hour in 24h format (0-23) |

### CallAssetPayloadDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `phoneNumber` | `string` | Yes | Phone number for call ads |
| `countryCode` | `string` | Yes | Two-letter ISO country code |
| `callConversionAction` | `string` | No | Call conversion action resource name |
| `adScheduleTargets` | `array<AdScheduleTargetDTO>` | No | Ad schedule targets restricting when the call asset is shown |
| `resourceName` | `string` | No | Google Ads resource name for an existing call asset |

### SitelinkAssetPayloadDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resourceName` | `string` | No | Google Ads resource name for an existing sitelink asset |
| `linkText` | `string` | Yes | Sitelink display text |
| `finalUrls` | `string` | Yes | Final landing page URL |
| `description1` | `string` | No | First description line |
| `description2` | `string` | No | Second description line |
| `startDate` | `string` | No | Start date for the sitelink (YYYY-MM-DD) |
| `endDate` | `string` | No | End date for the sitelink (YYYY-MM-DD) |
| `adScheduleTargets` | `array<AdScheduleTargetDTO>` | No | Ad schedule targets restricting when the sitelink is shown |

### LeadFormFieldDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `inputType` | `string` | Yes | Field input type from Google Ads LeadFormFieldUserInputType |
| `singleChoiceAnswers` | `array<string>` | No | Single-choice answer options for the field |

### CustomQuestionFieldDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customQuestionText` | `string` | Yes | Custom question text shown to the user |
| `singleChoiceAnswers` | `array<string>` | Yes | Answer choices for the custom question |

### LeadFormAssetPayloadDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resourceName` | `string` | No | Google Ads resource name for an existing lead form asset |
| `headline` | `string` | Yes | Lead form headline |
| `description` | `string` | Yes | Lead form description |
| `businessName` | `string` | Yes | Business name shown on the form |
| `privacyPolicyUrl` | `string` | Yes | Privacy policy URL |
| `fields` | `array<LeadFormFieldDTO>` | Yes | Form fields to collect user input |
| `callToActionType` | `string` | Yes | Call to action button type |
| `callToActionDescription` | `string` | No | Description text for the CTA button |
| `backgroundImageAsset` | `string` | No | Background image asset resource name |
| `desiredIntent` | `string` | No | Desired lead intent level |
| `customQuestionFields` | `array<CustomQuestionFieldDTO>` | No | Custom question fields appended after standard fields |
| `postSubmitHeadline` | `string` | No | Headline shown after form submission |
| `postSubmitDescription` | `string` | No | Description shown after form submission |
| `postSubmitCallToActionType` | `string` | No | Post-submit CTA button type |
| `finalUrls` | `string` | No | Final URL shown after form submission |

### ConversionValueSettings

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `defaultValue` | `number` | Yes | Default monetary value assigned to each conversion |
| `defaultCurrencyCode` | `string` | Yes | ISO 4217 currency code for the default value |
| `alwaysUseDefaultValue` | `boolean` | Yes | When true, always uses the default value even if a transaction-specific value is provided |

### UpsertConversionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `conversionId` | `string` | No | Conversion identifier |
| `name` | `string` | Yes | Conversion name |
| `type` | `string` | Yes | Conversion type |
| `category` | `string` | Yes | Conversion category |
| `valueSettings` | `ConversionValueSettings` | Yes | Value settings that control how monetary value is attributed to conversions |
| `countingType` | `string` | Yes | How conversions are counted per interaction |
| `attributionModel` | `string` | Yes | Attribution model used to credit conversions |
| `clickThroughWindow` | `number` | Yes | Click-through conversion window in days |

### CreateGoogleIntegrationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `adAccountId` | `string` | Yes | Ad account identifier |
| `mccId` | `string` | Yes | MCC identifier |

### KeywordSuggestionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | Yes | Target URL |
| `languageCode` | `string` | No | Language code |
| `locations` | `array<string>` | No | Target locations |
| `keywords` | `array<string>` | No | Seed keywords |

### UpsertAssetsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `type` | `string` | Yes | Asset type to create or update |
| `payload` | `CallAssetPayloadDTO or SitelinkAssetPayloadDTO or LeadFormAssetPayloadDTO` | Yes | Asset payload — shape depends on the type field: CallAssetPayload (CALL), SitelinkAssetPayload (SITELINK), or LeadFormAssetPayload (LEAD_FORM) |

### MemberDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `memberType` | `string` | Yes | Member type |
| `keyword` | `string` | No | Keyword value |
| `url` | `string` | No | URL value |
| `app` | `string` | No | App identifier |

### StringRuleItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `operator` | `string` | Yes | Rule operator |
| `value` | `string` | Yes | Rule value |

### RuleItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Rule item name |
| `stringRuleItem` | `StringRuleItemDTO` | Yes | String rule item condition |

### RuleItemGroupDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ruleItems` | `array<RuleItemDTO>` | Yes | List of rule items |

### RuleDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ruleItemGroups` | `array<RuleItemGroupDTO>` | Yes | List of rule item groups |

### RuleOperandDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lookbackWindowDays` | `number` | Yes | Lookback window in days |
| `rule` | `RuleDTO` | Yes | Rule definition |

### FlexibleRuleUserListDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `inclusiveRuleOperator` | `string` | No | Operator for combining inclusive operands |
| `inclusiveOperands` | `array<RuleOperandDTO>` | Yes | Inclusive rule operands |
| `exclusiveOperands` | `array<RuleOperandDTO>` | Yes | Exclusive rule operands |

### RuleBasedUserListDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `prepopulationStatus` | `string` | No | Prepopulation status |
| `flexibleRuleUserList` | `FlexibleRuleUserListDTO` | Yes | Flexible rule user list configuration |

### UpsertSegmentDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Segment name |
| `description` | `string` | No | Segment description |
| `members` | `array<MemberDTO>` | No | Segment members — keywords, URLs, or apps that define the custom segment |
| `status` | `string` | No | Segment status |
| `type` | `string` | No | Segment type |
| `id` | `string` | No | Segment identifier |
| `membershipStatus` | `string` | No | Membership status |
| `ruleBasedUserList` | `RuleBasedUserListDTO` | No | Rule-based user list config |
| `membershipLifeSpan` | `number` | No | Membership life span |
| `seedUserListIds` | `array<string>` | No | Seed user list IDs |
| `countryCodes` | `array<string>` | No | Country codes |
| `expansionLevel` | `string` | No | Expansion level |

### CreateOfflineUserListJobDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `smartListIds` | `array<string>` | No | Smart list IDs |
| `csvPath` | `string` | No | CSV file path |
| `userListId` | `string` | No | User list identifier |
| `isDynamic` | `boolean` | No | Dynamic list flag |

### AudienceSegmentsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customAudiences` | `array<string>` | No | Resource names of custom audience segments |
| `userLists` | `array<string>` | No | Resource names of user lists (remarketing lists, customer match lists, etc.) |
| `userInterests` | `array<string>` | No | Resource names of user interest segments (in-market or affinity audiences) |

### AudienceDimensionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isAgeUnknown` | `boolean` | No | Include unknown age |
| `ageRanges` | `array<string>` | No | Age range filters |
| `genders` | `array<string>` | No | Gender targets |
| `parentalStatuses` | `array<string>` | No | Parental status targets |
| `audienceSegments` | `AudienceSegmentsDTO` | No | Audience segment references used for targeting |

### UpsertAudienceDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `resourceName` | `string` | No | Audience resource name |
| `name` | `string` | Yes | Audience name |
| `dimensions` | `AudienceDimensionDTO` | No | Audience dimensions |
| `exclusionDimension` | `AudienceDimensionDTO` | No | Exclusion dimensions |

### GoogleBudgetDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `budgetType` | `string` | No | Budget type |
| `amount` | `number` | No | Budget amount in micros |
| `scheduleStartDate` | `string` | No | Schedule start date |
| `scheduleEndDate` | `string` | No | Schedule end date |

### GeoLatLngDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lat` | `number` | No | Latitude |
| `lng` | `number` | No | Longitude |

### GeoViewportDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `northeast` | `GeoLatLngDTO` | No | Northeast corner of the viewport |
| `southwest` | `GeoLatLngDTO` | No | Southwest corner of the viewport |

### GeoGeometryDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `GeoLatLngDTO` | No | Location coordinates |
| `location_type` | `string` | No | Location type (e.g. APPROXIMATE) |
| `viewport` | `GeoViewportDTO` | No | Viewport bounding box |

### GeoAddressComponentDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `long_name` | `string` | No | Full name of the address component |
| `short_name` | `string` | No | Abbreviated name of the address component |
| `types` | `array<string>` | No | Address component types |

### GoogleGeoLocationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No | Geo target constant resource name |
| `id` | `string` | No | Location identifier (place_id) |
| `name` | `string` | No | Location display name |
| `country_name` | `string` | No | Country name |
| `type` | `string` | No | Location type (city, region, country, address, etc.) |
| `radius` | `number` | No | Radius for proximity targeting |
| `radiusUnit` | `string` | No | Radius unit |
| `selectionType` | `string` | No | Include or exclude this location |
| `resourceName` | `string` | No | Google Ads resource name |
| `place_id` | `string` | No | Google place ID |
| `formatted_address` | `string` | No | Full formatted address string |
| `geometry` | `GeoGeometryDTO` | No | Geometry data from Google Geocoding API |
| `address_components` | `array<GeoAddressComponentDTO>` | No | Address components from Google Geocoding API |

### GoogleLocaleDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Language display name |
| `key` | `string` | No | Language key |
| `id` | `string` | No | Language identifier |
| `resourceName` | `string` | No | Language resource name |

### GoogleDemographicTargetDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enum` | `string` | Yes | Demographic enum value |
| `negative` | `boolean` | Yes | Whether this is a negative target |

### GoogleSegmentTargetDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Segment type |
| `id` | `string` | Yes | Segment identifier |

### GoogleTargetInterestsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affinity` | `array<string>` | No | Affinity audience IDs |
| `inMarket` | `array<string>` | No | In-market audience IDs |

### GoogleCampaignAudienceDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geo_locations` | `array<GoogleGeoLocationDTO>` | No | Geo-location targeting |
| `locales` | `array<GoogleLocaleDTO>` | No | Language/locale targeting |
| `gender` | `array<GoogleDemographicTargetDTO>` | No | Gender targeting |
| `ageRange` | `array<GoogleDemographicTargetDTO>` | No | Age range targeting |
| `segments` | `array<GoogleSegmentTargetDTO>` | No | Audience segment targeting |
| `targetInterests` | `GoogleTargetInterestsDTO` | No | Interest-based targeting |

### GoogleNetworkSettingsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `targetSearchNetwork` | `boolean` | Yes | Target Google Search Network |
| `targetContentNetwork` | `boolean` | Yes | Target Google Display Network |

### GoogleBiddingStrategyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | No | Bidding strategy type |
| `value` | `number` | No | Bid value in micros |

### GoogleAssetImageDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | Yes | Image URL |
| `resourceName` | `string` | No | Google Ads resource name |
| `name` | `string` | No | Asset name |
| `error` | `string` | No | Error message if asset upload failed |

### GoogleAssetsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calls` | `array<string>` | No | Call extension asset resource names |
| `sitelinks` | `array<string>` | No | Sitelink asset resource names |
| `leadForm` | `string` | No | Lead form asset resource name |
| `images` | `array<GoogleAssetImageDTO>` | No | Image assets |
| `businessLogo` | `GoogleAssetImageDTO` | No | Business logo asset |

### GoogleMediaDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | No | Media type |
| `src` | `string` | No | Media source URL |
| `isLogo` | `boolean` | No | Is logo flag |
| `error` | `string` | No | Error message if media failed |
| `url` | `string` | No | Public URL of the media |
| `imageType` | `string` | No | Image type classification |

### GoogleYouTubeVideoLinkDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `youtubeVideoId` | `string` | Yes | YouTube video ID |

### GoogleCarouselCardDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `headline` | `string` | No | Card headline |
| `finalUrl` | `string` | No | Card final URL |
| `callToActionLabel` | `string` | No | Call to action label |
| `media` | `array<GoogleMediaDTO>` | No | Card media items |

### GoogleAdContentDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Ad identifier |
| `name` | `string` | No | Ad name |
| `mediaType` | `string` | No | Media type |
| `headlines` | `array<string>` | No | Ad headlines |
| `longHeadlines` | `array<string>` | No | Long headlines |
| `descriptions` | `array<string>` | No | Ad descriptions |
| `finalUrl` | `string` | No | Final URL |
| `path1` | `string` | No | Display path 1 |
| `path2` | `string` | No | Display path 2 |
| `isDeleted` | `boolean` | No | Whether the ad is soft-deleted |
| `adError` | `string` | No | Ad-level error message from Google |
| `publishingStatus` | `string` | No | Ad publishing status |
| `adId` | `string` | No | Internal ad identifier |
| `adCampaignId` | `string` | No | Ad campaign identifier |
| `adGroupId` | `string` | No | Ad group identifier |
| `googleAdId` | `string` | No | Google Ads ad resource ID |
| `media` | `array<GoogleMediaDTO>` | No | Ad media items |
| `callToActionLabel` | `string` | No | Call to action label |
| `businessName` | `string` | No | Business name |
| `youtubeVideoLinks` | `array<GoogleYouTubeVideoLinkDTO>` | No | YouTube video links |
| `carouselCards` | `array<GoogleCarouselCardDTO>` | No | Carousel cards |
| `placements` | `array<string>` | No | Channel placements |
| `customChannels` | `boolean` | No | Custom channels flag |

### GoogleKeywordItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `keyword` | `string` | Yes | Keyword text |
| `matchType` | `string` | Yes | Match type (BROAD, PHRASE, EXACT) |

### GoogleKeywordsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `positives` | `array<GoogleKeywordItemDTO>` | No | Positive keywords |
| `negatives` | `array<GoogleKeywordItemDTO>` | No | Negative keywords |

### GoogleAdGroupAudienceDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geo_locations` | `array<GoogleGeoLocationDTO>` | No | Geo-location targeting |
| `locales` | `array<GoogleLocaleDTO>` | No | Language/locale targeting |

### GoogleAdGroupDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Ad group identifier |
| `adGroupId` | `string` | No | Google ad group identifier |
| `name` | `string` | No | Ad group name |
| `adCampaignId` | `string` | No | Ad campaign identifier |
| `adContent` | `array<GoogleAdContentDTO>` | No | Ad content items |
| `keywords` | `GoogleKeywordsDTO` | No | Keyword targeting |
| `publishingStatus` | `string` | No | Ad group publishing status |
| `adGroupError` | `string` | No | Ad group-level error from Google |
| `googleAdGroupId` | `string` | No | Google Ads ad group resource ID |
| `customChannels` | `boolean` | No | Custom channels flag |
| `selectedChannels` | `array<string>` | No | Selected channel placements |
| `googleAudienceId` | `string` | No | Google audience resource ID |
| `audience` | `GoogleAdGroupAudienceDTO` | No | Ad group audience targeting |

### GoogleCampaignGoalDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Campaign goal type |
| `value` | `string` | No | Goal value (e.g. conversion action resource name) |
| `isCustomConversionGoal` | `boolean` | No | Whether this is a custom conversion goal |

### GoogleAdScheduleDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dayOfWeek` | `string` | Yes | Day of week |
| `from` | `string` | Yes | Start time (HH:MM) |
| `to` | `string` | Yes | End time (HH:MM) |

### CampaignDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Campaign identifier |
| `name` | `string` | Yes | Campaign name |
| `locationId` | `string` | Yes | Location identifier |
| `advertisingChannelType` | `string` | Yes | Advertising channel |
| `advertisingChannelSubType` | `string` | No | Channel sub type |
| `goalType` | `string` | No | Goal type |
| `budget` | `GoogleBudgetDTO` | No | Campaign budget |
| `audience` | `GoogleCampaignAudienceDTO` | No | Campaign audience targeting |
| `networkSettings` | `GoogleNetworkSettingsDTO` | No | Network settings |
| `biddingStrategy` | `GoogleBiddingStrategyDTO` | No | Bidding strategy config |
| `assets` | `GoogleAssetsDTO` | No | Campaign assets |
| `isEuPoliticalAds` | `boolean` | No | EU political ads flag |
| `adGroups` | `array<GoogleAdGroupDTO>` | No | Campaign ad groups |
| `campaignGoal` | `GoogleCampaignGoalDTO` | No | Campaign goal config |
| `adSchedule` | `array<GoogleAdScheduleDTO>` | No | Ad schedule rules |
| `publishingStatus` | `string` | No | Publishing status |
| `googleAdAccountId` | `string` | No | Google Ad account identifier |
| `unpublishedChanges` | `boolean` | No | Whether the campaign has unpublished changes |
| `maximumCpc` | `number` | No | Maximum CPC bid in micros |
| `googleCampaignId` | `string` | No | Google Ads campaign resource ID |
| `source` | `string` | No | Traffic source |
| `advancedOptions` | `object` | No | Advanced options |

### CreateLinkedinIntegrationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location identifier |
| `adAccountId` | `string` | Yes | Ad account identifier |
| `adAccountName` | `string` | Yes | Ad account name |
| `currencyCode` | `string` | Yes | Currency code |
| `organizationId` | `string` | Yes | Organization identifier |

### LinkedInBudgetDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `budgetType` | `string` | No | — |
| `amount` | `number` | No | — |
| `scheduleStartDate` | `string` | No | Schedule start date (ISO 8601) |
| `scheduleEndDate` | `string` | No | Schedule end date (ISO 8601) |

### LocaleDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | Yes | Country code |
| `language` | `string` | Yes | Language code |

### GeoLocationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Location display name |
| `urn` | `string` | Yes | Location URN |
| `facetUrn` | `string` | Yes | Facet URN |
| `selectionType` | `string` | Yes | Selection type |

### SelectedAttributeDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `urn` | `string` | Yes | Targeting attribute URN |
| `name` | `string` | Yes | Display name |
| `categoryName` | `string` | Yes | Category name |
| `facet` | `string` | Yes | Facet identifier |

### TargetAudienceDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include` | `array<array<SelectedAttributeDTO>>` | No | Included targeting attributes (groups of ANDed attributes, ORed together) |
| `exclude` | `array<array<SelectedAttributeDTO>>` | No | Excluded targeting attributes |

### AudienceDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geo_locations` | `array<GeoLocationDTO>` | No | Geographic location targets |
| `targetAudience` | `TargetAudienceDTO` | No | Target audience attribute selections |

### UnitCostDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Bid amount in currency minor units |

### LinkedInMediaDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | No | Media type |
| `src` | `string` | No | Media source URL |
| `frames` | `array<string>` | No | Video frame URLs |
| `selectedPoster` | `number` | No | Selected poster frame index |
| `thumbnailUrl` | `string` | No | Thumbnail URL |
| `name` | `string` | No | Media name |
| `headline` | `string` | No | Media headline |
| `destinationUrl` | `string` | No | Click-through destination URL |
| `fileSizeBytes` | `number` | No | File size in bytes |

### LinkedInAdDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `introductoryText` | `string` | No | — |
| `destinationUrl` | `string` | No | — |
| `callToActionLabel` | `string` | No | — |
| `destinationFormId` | `string` | No | — |
| `contentReferenceString` | `string` | No | — |
| `media` | `array<LinkedInMediaDTO>` | No | — |
| `adCampaignId` | `string` | No | — |
| `adId` | `string` | No | — |
| `headline` | `string` | No | — |
| `publishingStatus` | `string` | No | — |
| `adCampaignGroupId` | `string` | No | — |
| `description` | `string` | No | — |
| `meta` | `object` | No | — |
| `linkedInError` | `string` | No | LinkedIn API error message |

### AdCampaignDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `locale` | `LocaleDTO` | No | Campaign locale |
| `name` | `string` | No | — |
| `publishingStatus` | `string` | No | — |
| `mediaType` | `string` | No | Campaign audience targeting |
| `audience` | `AudienceDTO` | No | Campaign audience targeting |
| `unitCost` | `UnitCostDTO` | No | Bid unit cost |
| `campaignType` | `string` | No | — |
| `adCampaignGroupId` | `string` | No | — |
| `adCampaignId` | `string` | No | — |
| `ads` | `array<LinkedInAdDTO>` | No | — |
| `linkedInError` | `string` | No | LinkedIn API error message |
| `meta` | `object` | No | — |

### AdCampaignGroupDataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `locationId` | `string` | Yes | Location ID |
| `budget` | `LinkedInBudgetDTO` | No | — |
| `adCampaigns` | `array<AdCampaignDTO>` | No | — |
| `adBudgetOptimization` | `string` | No | — |
| `objectiveType` | `string` | No | — |
| `name` | `string` | No | — |
| `adCampaignGroupId` | `string` | No | — |
| `publishingStatus` | `string` | No | — |
| `linkedInAdAccountId` | `string` | No | — |
| `unpublishedChanges` | `boolean` | No | — |
| `meta` | `object` | No | — |
| `linkedInError` | `string` | No | — |

### SponsoredAccountOwnerDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sponsoredAccount` | `string` | Yes | Sponsored account URN |

### CreationLocaleDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | Yes | Country code |
| `language` | `string` | Yes | Language code |

### LocalizedStringDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `localized` | `object` | Yes | Locale-keyed string map |

### MultipleChoiceOptionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes | Option ID |
| `text` | `LocalizedStringDTO` | Yes | Option text |

### MultipleChoiceQuestionDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `options` | `array<MultipleChoiceOptionDTO>` | Yes | Choice options |

### QuestionDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `textQuestionDetails` | `object` | No | Text question details (empty object for text questions) |
| `multipleChoiceQuestionDetails` | `MultipleChoiceQuestionDetailsDTO` | No | Multiple choice question details |

### LeadFormQuestionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `question` | `LocalizedStringDTO` | Yes | Question text |
| `name` | `string` | Yes | Question field name |
| `questionDetails` | `QuestionDetailsDTO` | Yes | Question type details |
| `predefinedField` | `string` | No | Predefined field identifier |

### PostSubmissionCallToActionTargetDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `landingPageUrl` | `string` | Yes | Landing page URL |

### PostSubmissionCallToActionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `callToActionTarget` | `PostSubmissionCallToActionTargetDTO` | Yes | Call to action target |
| `callToActionLabel` | `string` | Yes | Call to action label |

### PostSubmissionInfoDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `LocalizedStringDTO` | Yes | Thank-you message |
| `callToAction` | `PostSubmissionCallToActionDTO` | Yes | Post-submission call to action |

### ConsentDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkRequired` | `boolean` | Yes | Whether consent checkbox is required |
| `id` | `number` | Yes | Consent identifier |
| `consent` | `LocalizedStringDTO` | Yes | Consent text |

### LegalInfoDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consents` | `array<ConsentDTO>` | Yes | Consent entries |
| `privacyPolicyUrl` | `string` | Yes | Privacy policy URL |
| `legalDisclaimer` | `LocalizedStringDTO` | No | Legal disclaimer text |

### LeadFormContentDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `questions` | `array<LeadFormQuestionDTO>` | Yes | Form questions |
| `description` | `LocalizedStringDTO` | No | Form description |
| `headline` | `LocalizedStringDTO` | Yes | Form headline |
| `postSubmissionInfo` | `PostSubmissionInfoDTO` | Yes | Post-submission info |
| `legalInfo` | `LegalInfoDTO` | Yes | Legal information |

### HiddenFieldDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Field name |
| `value` | `string` | Yes | Field value |

### LinkedInCreateLeadFormBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `owner` | `SponsoredAccountOwnerDTO` | Yes | Form owner |
| `creationLocale` | `CreationLocaleDTO` | Yes | Creation locale |
| `name` | `string` | Yes | Form name |
| `state` | `string` | Yes | Form state |
| `content` | `LeadFormContentDTO` | Yes | Form content |
| `hiddenFields` | `array<HiddenFieldDTO>` | No | Hidden fields |

### LinkedInUpdateAdStatusBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `operationType` | `string` | Yes | Update operation |
| `type` | `string` | Yes | Ad object type |
