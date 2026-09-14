# Campaigns API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/campaigns.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for campaigns API

## Campaigns

### Get Campaigns

**Endpoint:** `GET /campaigns/`
**Scope:** `campaigns.readonly`
**Token Type:** bearer

Get Campaigns

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `status` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CampaignsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### campaignsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `status` | `string` | No | — |
| `locationId` | `string` | No | — |

### CampaignsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaigns` | `array<campaignsSchema>` | No | — |
