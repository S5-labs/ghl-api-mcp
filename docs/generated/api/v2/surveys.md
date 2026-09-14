# Surveys API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/surveys.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for surveys API

## Surveys

### Get Surveys Submissions

**Endpoint:** `GET /surveys/submissions`
**Scope:** `surveys.readonly`
**Token Type:** bearer

Get Surveys Submissions

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `page` | query | `number` | No | Page No. By default it will be 1 |
| `limit` | query | `number` | No | Limit Per Page records count. will allow maximum up to 100 and default will be 20 |
| `surveyId` | query | `string` | No | Filter submission by survey id |
| `q` | query | `string` | No | Filter by contactId, name, email or phone no. |
| `startAt` | query | `string` | No | Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD). |
| `endAt` | query | `string` | No | Get submission by ending of this date. By default it will be current date(YYYY-MM-DD). |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetSurveysSubmissionSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Surveys

**Endpoint:** `GET /surveys/`
**Scope:** `surveys.readonly`
**Token Type:** bearer

Get Surveys

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `skip` | query | `number` | No | — |
| `limit` | query | `number` | No | Limit Per Page records count. will allow maximum up to 50 and default will be 10 |
| `type` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetSurveysSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Schemas

### GetSurveysSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `locationId` | `string` | No | — |

### GetSurveysSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `surveys` | `array<GetSurveysSchema>` | No | — |
| `total` | `number` | No | Number of surveys |

### PageDetailsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | No | — |
| `title` | `string` | No | — |

### ContactSessionIds

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ids` | `array<string>` | No | — |

### EventDataSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fbc` | `string` | No | — |
| `fbp` | `string` | No | — |
| `page` | `PageDetailsSchema` | No | — |
| `type` | `string` | No | — |
| `domain` | `string` | No | — |
| `medium` | `string` | No | — |
| `source` | `string` | No | — |
| `version` | `string` | No | — |
| `adSource` | `string` | No | — |
| `mediumId` | `string` | No | — |
| `parentId` | `string` | No | — |
| `referrer` | `string` | No | — |
| `fbEventId` | `string` | No | — |
| `timestamp` | `number` | No | — |
| `parentName` | `string` | No | — |
| `fingerprint` | `string` | No | — |
| `pageVisitType` | `string` | No | — |
| `contactSessionIds` | `ContactSessionIds` | No | — |

### othersSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `__submissions_other_field__` | `string` | No | — |
| `__custom_field_id__` | `string` | No | — |
| `eventData` | `EventDataSchema` | No | — |
| `fieldsOriSequance` | `array<string>` | No | — |

### SubmissionSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `contactId` | `string` | No | — |
| `createdAt` | `string` | No | — |
| `surveyId` | `string` | No | — |
| `name` | `string` | No | — |
| `email` | `string` | No | — |
| `others` | `othersSchema` | No | — |

### metaSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total` | `number` | No | — |
| `currentPage` | `number` | No | — |
| `nextPage` | `number` | No | — |
| `prevPage` | `number` | No | — |

### GetSurveysSubmissionSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `submissions` | `array<SubmissionSchema>` | No | — |
| `meta` | `metaSchema` | No | — |
