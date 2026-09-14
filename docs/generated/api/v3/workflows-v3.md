# workflows API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/workflows-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for workflows API

## Workflows

### Get Workflow

**Endpoint:** `GET /workflows/`
**Scope:** `workflows.readonly`
**Token Type:** bearer

Get Workflow

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetWorkflowSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### WorkflowSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `status` | `string` | No | — |
| `version` | `number` | No | — |
| `createdAt` | `string` | No | — |
| `updatedAt` | `string` | No | — |
| `locationId` | `string` | No | — |

### GetWorkflowSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `workflows` | `array<WorkflowSchema>` | No | — |
