# Forms API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/forms-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for forms API

## Forms

### Get Forms Submissions

**Endpoint:** `GET /forms/submissions`
**Scope:** `forms.readonly`
**Token Type:** bearer

Get Forms Submissions

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `page` | query | `number` | No | Page No. By default it will be 1 |
| `limit` | query | `number` | No | Limit Per Page records count. will allow maximum up to 100 and default will be 20 |
| `formId` | query | `string` | No | Filter submission by form id |
| `q` | query | `string` | No | Filter by contactId, name, email or phone no. |
| `startAt` | query | `string` | No | Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD). |
| `endAt` | query | `string` | No | Get submission by ending of this date. By default it will be current date(YYYY-MM-DD). |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `FormsSubmissionsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upload files to custom fields

**Endpoint:** `POST /forms/upload-custom-files`
**Scope:** `forms.write`
**Token Type:** bearer, Location-Access

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "< custom_field_id >_< file_id >". <br /> Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) <br /> There is support for multiple file uploads as well. Have multiple fields in the format mentioned.<br />File size is limited to 50 MB.<br /><br /> The allowed file types are: <br/> <ul><li>PDF</li><li>DOCX</li><li>DOC</li><li>JPG</li><li>JPEG</li><li>PNG</li><li>GIF</li><li>CSV</li><li>XLSX</li><li>XLS</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>TXT</li><li>SVG</li></ul> <br /><br /> The API will return the updated contact object.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | query | `string` | Yes | Contact ID to upload the file to. |
| `locationId` | query | `string` | Yes | Location ID of the contact. |

**Request Body**

| Content type | Schema |
| --- | --- |
| multipart/form-data | `object` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Forms

**Endpoint:** `GET /forms/`
**Scope:** `forms.readonly`
**Token Type:** bearer

Get Forms

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
| `200` | Successful response | `FormsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Schemas

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

### FormsSubmissionsSubmissionsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `contactId` | `string` | No | — |
| `createdAt` | `string` | No | — |
| `formId` | `string` | No | — |
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

### FormsSubmissionsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `submissions` | `array<FormsSubmissionsSubmissionsSchema>` | No | — |
| `meta` | `metaSchema` | No | — |

### FormsParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `locationId` | `string` | No | — |

### FormsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `forms` | `array<FormsParams>` | No | — |
| `total` | `number` | No | Total number of forms |
