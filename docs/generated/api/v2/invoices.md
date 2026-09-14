# Invoice API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/invoices.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for invoice API

## Template

### Create template

**Endpoint:** `POST /invoices/template`
**Scope:** `invoices/template.write`
**Token Type:** Location-Access, Agency-Access

API to create a template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateInvoiceTemplateDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CreateInvoiceTemplateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List templates

**Endpoint:** `GET /invoices/template`
**Scope:** `invoices/template.readonly`
**Token Type:** Location-Access, Agency-Access

API to get list of templates

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | location Id / company Id based on altType |
| `altType` | query | `string` | Yes | Alt Type |
| `status` | query | `string` | No | status to be filtered |
| `startAt` | query | `string` | No | startAt in YYYY-MM-DD format |
| `endAt` | query | `string` | No | endAt in YYYY-MM-DD format |
| `search` | query | `string` | No | To search for an invoice by id / name / email / phoneNo |
| `paymentMode` | query | `string` | No | payment mode |
| `limit` | query | `string` | Yes | Limit the number of items to return |
| `offset` | query | `string` | Yes | Number of items to skip |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListTemplatesResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get an template

**Endpoint:** `GET /invoices/template/{templateId}`
**Scope:** `invoices/template.readonly`
**Token Type:** Location-Access, Agency-Access

API to get an template by template id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `templateId` | path | `string` | Yes | Template Id |
| `altId` | query | `string` | Yes | location Id / company Id based on altType |
| `altType` | query | `string` | Yes | Alt Type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetTemplateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update template

**Endpoint:** `PUT /invoices/template/{templateId}`
**Scope:** `invoices/template.write`
**Token Type:** Location-Access, Agency-Access

API to update an template by template id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `templateId` | path | `string` | Yes | Template Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateInvoiceTemplateDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateInvoiceTemplateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete template

**Endpoint:** `DELETE /invoices/template/{templateId}`
**Scope:** `invoices/template.write`
**Token Type:** Location-Access, Agency-Access

API to update an template by template id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `templateId` | path | `string` | Yes | Template Id |
| `altId` | query | `string` | Yes | location Id / company Id based on altType |
| `altType` | query | `string` | Yes | Alt Type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteInvoiceTemplateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update template late fees configuration

**Endpoint:** `PATCH /invoices/template/{templateId}/late-fees-configuration`
**Token Type:** Location-Access, Agency-Access

API to update template late fees configuration by template id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `templateId` | path | `string` | Yes | Template Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateInvoiceLateFeesConfigurationDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateInvoiceTemplateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update template late fees configuration

**Endpoint:** `PATCH /invoices/template/{templateId}/payment-methods-configuration`
**Token Type:** Location-Access, Agency-Access

API to update template late fees configuration by template id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `templateId` | path | `string` | Yes | Template Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdatePaymentMethodsConfigurationDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateInvoiceTemplateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schedule

### Create Invoice Schedule

**Endpoint:** `POST /invoices/schedule`
**Scope:** `invoices/schedule.write`
**Token Type:** Location-Access, Agency-Access

API to create an invoice Schedule

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateInvoiceScheduleDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CreateInvoiceScheduleResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List schedules

**Endpoint:** `GET /invoices/schedule`
**Scope:** `invoices/schedule.readonly`
**Token Type:** Location-Access, Agency-Access

API to get list of schedules

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | location Id / company Id based on altType |
| `altType` | query | `string` | Yes | Alt Type |
| `status` | query | `string` | No | status to be filtered |
| `startAt` | query | `string` | No | startAt in YYYY-MM-DD format |
| `endAt` | query | `string` | No | endAt in YYYY-MM-DD format |
| `search` | query | `string` | No | To search for an invoice by id / name / email / phoneNo |
| `paymentMode` | query | `string` | No | payment mode |
| `limit` | query | `string` | Yes | Limit the number of items to return |
| `offset` | query | `string` | Yes | Number of items to skip |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListSchedulesResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get an schedule

**Endpoint:** `GET /invoices/schedule/{scheduleId}`
**Scope:** `invoices/schedule.readonly`
**Token Type:** Location-Access, Agency-Access

API to get an schedule by schedule id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `scheduleId` | path | `string` | Yes | Schedule Id |
| `altId` | query | `string` | Yes | location Id / company Id based on altType |
| `altType` | query | `string` | Yes | Alt Type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetScheduleResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update schedule

**Endpoint:** `PUT /invoices/schedule/{scheduleId}`
**Scope:** `invoices/schedule.write`
**Token Type:** Location-Access, Agency-Access

API to update an schedule by schedule id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `scheduleId` | path | `string` | Yes | Schedule Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateInvoiceScheduleDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateInvoiceScheduleResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete schedule

**Endpoint:** `DELETE /invoices/schedule/{scheduleId}`
**Scope:** `invoices/schedule.write`
**Token Type:** Location-Access, Agency-Access

API to delete an schedule by schedule id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `scheduleId` | path | `string` | Yes | Schedule Id |
| `altId` | query | `string` | Yes | location Id / company Id based on altType |
| `altType` | query | `string` | Yes | Alt Type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteInvoiceScheduleResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update scheduled recurring invoice

**Endpoint:** `POST /invoices/schedule/{scheduleId}/updateAndSchedule`
**Scope:** `invoices/schedule.write`
**Token Type:** Location-Access, Agency-Access

API to update scheduled recurring invoice

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `scheduleId` | path | `string` | Yes | Schedule Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateAndScheduleInvoiceScheduleResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Schedule an schedule invoice

**Endpoint:** `POST /invoices/schedule/{scheduleId}/schedule`
**Scope:** `invoices/schedule.write`
**Token Type:** Location-Access, Agency-Access

API to schedule an schedule invoice to start sending to the customer

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `scheduleId` | path | `string` | Yes | Schedule Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ScheduleInvoiceScheduleDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ScheduleInvoiceScheduleResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Manage Auto payment for an schedule invoice

**Endpoint:** `POST /invoices/schedule/{scheduleId}/auto-payment`
**Scope:** `invoices/schedule.write`
**Token Type:** Location-Access, Agency-Access

API to manage auto payment for a schedule

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `scheduleId` | path | `string` | Yes | Schedule Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AutoPaymentScheduleDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `AutoPaymentInvoiceScheduleResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Cancel an scheduled invoice

**Endpoint:** `POST /invoices/schedule/{scheduleId}/cancel`
**Scope:** `invoices/schedule.write`
**Token Type:** Location-Access, Agency-Access

API to cancel a scheduled invoice by schedule id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `scheduleId` | path | `string` | Yes | Schedule Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CancelInvoiceScheduleDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CancelInvoiceScheduleResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Text2Pay

### Create & Send

**Endpoint:** `POST /invoices/text2pay`
**Scope:** `invoices.write`
**Token Type:** Location-Access

API to create or update a text2pay invoice

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `Text2PayDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `Text2PayInvoiceResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Invoice

### Generate Invoice Number

**Endpoint:** `GET /invoices/generate-invoice-number`
**Scope:** `invoices.readonly`
**Token Type:** Location-Access, Agency-Access

Get the next invoice number for the given location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | Location Id |
| `altType` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GenerateInvoiceNumberResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Invoice Settings

**Endpoint:** `GET /invoices/settings`
**Scope:** `invoices.readonly`
**Token Type:** Location-Access, Agency-Access

Get the invoice settings for the given location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetInvoiceSettingsResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get invoice

**Endpoint:** `GET /invoices/{invoiceId}`
**Scope:** `invoices.readonly`
**Token Type:** Location-Access, Agency-Access

API to get invoice by invoice id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `invoiceId` | path | `string` | Yes | Invoice Id |
| `altId` | query | `string` | Yes | location Id / company Id based on altType |
| `altType` | query | `string` | Yes | Alt Type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetInvoiceResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update invoice

**Endpoint:** `PUT /invoices/{invoiceId}`
**Scope:** `invoices.write`
**Token Type:** Location-Access, Agency-Access

API to update invoice by invoice id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `invoiceId` | path | `string` | Yes | Invoice Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateInvoiceDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateInvoiceResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete invoice

**Endpoint:** `DELETE /invoices/{invoiceId}`
**Scope:** `invoices.write`
**Token Type:** Location-Access, Agency-Access

API to delete invoice by invoice id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `invoiceId` | path | `string` | Yes | Invoice Id |
| `altId` | query | `string` | Yes | location Id / company Id based on altType |
| `altType` | query | `string` | Yes | Alt Type |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteInvoiceResponseDto` |
| `400` | Bad Request | `object` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update invoice late fees configuration

**Endpoint:** `PATCH /invoices/{invoiceId}/late-fees-configuration`
**Token Type:** Location-Access, Agency-Access

API to update invoice late fees configuration by invoice id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `invoiceId` | path | `string` | Yes | Invoice Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateInvoiceLateFeesConfigurationDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateInvoiceResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Void invoice

**Endpoint:** `POST /invoices/{invoiceId}/void`
**Scope:** `invoices.write`
**Token Type:** Location-Access, Agency-Access

API to delete invoice by invoice id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `invoiceId` | path | `string` | Yes | Invoice Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `VoidInvoiceDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `VoidInvoiceResponseDto` |
| `400` | Bad Request | `object` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Send invoice

**Endpoint:** `POST /invoices/{invoiceId}/send`
**Scope:** `invoices.write`
**Token Type:** Location-Access, Agency-Access

API to send invoice by invoice id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `invoiceId` | path | `string` | Yes | Invoice Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SendInvoiceDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `SendInvoicesResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Record a manual payment for an invoice

**Endpoint:** `POST /invoices/{invoiceId}/record-payment`
**Scope:** `invoices.write`
**Token Type:** Location-Access, Agency-Access

API to record manual payment for an invoice by invoice id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `invoiceId` | path | `string` | Yes | Invoice Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `RecordPaymentDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `RecordPaymentResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update invoice last visited at

**Endpoint:** `PATCH /invoices/stats/last-visited-at`
**Token Type:** Location-Access, Agency-Access

API to update invoice last visited at by invoice id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `PatchInvoiceStatsLastViewedDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Invoice

**Endpoint:** `POST /invoices/`
**Scope:** `invoices.write`
**Token Type:** Location-Access, Agency-Access

API to create an invoice

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateInvoiceDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CreateInvoiceResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List invoices

**Endpoint:** `GET /invoices/`
**Scope:** `invoices.readonly`
**Token Type:** Location-Access, Agency-Access

API to get list of invoices

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | location Id / company Id based on altType |
| `altType` | query | `string` | Yes | Alt Type |
| `status` | query | `string` | No | status to be filtered |
| `startAt` | query | `string` | No | startAt in YYYY-MM-DD format |
| `endAt` | query | `string` | No | endAt in YYYY-MM-DD format |
| `search` | query | `string` | No | To search for an invoice by id / name / email / phoneNo |
| `paymentMode` | query | `string` | No | payment mode |
| `contactId` | query | `string` | No | Contact ID for the invoice |
| `limit` | query | `string` | Yes | Limit the number of items to return |
| `offset` | query | `string` | Yes | Number of items to skip |
| `sortField` | query | `string` | No | The field on which sorting should be applied |
| `sortOrder` | query | `string` | No | The order of sort which should be applied for the sortField |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListInvoicesResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Estimate

### Create New Estimate

**Endpoint:** `POST /invoices/estimate`
**Scope:** `invoices/estimate.write`
**Token Type:** Location-Access, Agency-Access

Create a new estimate with the provided details

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateEstimatesDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Created | `EstimateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Estimate

**Endpoint:** `PUT /invoices/estimate/{estimateId}`
**Scope:** `invoices/estimate.write`
**Token Type:** Location-Access, Agency-Access

Update an existing estimate with new details

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `estimateId` | path | `string` | Yes | Estimate Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateEstimateDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully updated | `EstimateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Estimate

**Endpoint:** `DELETE /invoices/estimate/{estimateId}`
**Scope:** `invoices/estimate.write`
**Token Type:** Location-Access, Agency-Access

Delete an existing estimate

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `estimateId` | path | `string` | Yes | Estimate Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AltDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully Deleted | `EstimateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Generate Estimate Number

**Endpoint:** `GET /invoices/estimate/number/generate`
**Scope:** `invoices/estimate.readonly`
**Token Type:** Location-Access, Agency-Access

Get the next estimate number for the given location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GenerateEstimateNumberResponse` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Send Estimate

**Endpoint:** `POST /invoices/estimate/{estimateId}/send`
**Scope:** `invoices/estimate.write`
**Token Type:** Location-Access, Agency-Access

API to send estimate by estimate id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `estimateId` | path | `string` | Yes | Estimate Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SendEstimateDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Created | `EstimateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Invoice from Estimate

**Endpoint:** `POST /invoices/estimate/{estimateId}/invoice`
**Scope:** `invoices/estimate.write`
**Token Type:** Location-Access, Agency-Access

Create a new invoice from an existing estimate

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `estimateId` | path | `string` | Yes | Estimate Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateInvoiceFromEstimateDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully Created | `CreateInvoiceFromEstimateResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Estimates

**Endpoint:** `GET /invoices/estimate/list`
**Scope:** `invoices/estimate.readonly`
**Token Type:** Location-Access, Agency-Access

Get a paginated list of estimates

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `startAt` | query | `string` | No | startAt in YYYY-MM-DD format |
| `endAt` | query | `string` | No | endAt in YYYY-MM-DD format |
| `search` | query | `string` | No | search text for estimates name |
| `status` | query | `string` | No | estimate status |
| `contactId` | query | `string` | No | Contact ID for the estimate |
| `limit` | query | `string` | Yes | Limit the number of items to return |
| `offset` | query | `string` | Yes | Number of items to skip |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListEstimatesResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update estimate last visited at

**Endpoint:** `PATCH /invoices/estimate/stats/last-visited-at`
**Token Type:** Location-Access, Agency-Access

API to update estimate last visited at by estimate id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `EstimateIdParam` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### List Estimate Templates

**Endpoint:** `GET /invoices/estimate/template`
**Scope:** `invoices/estimate.readonly`
**Token Type:** Location-Access, Agency-Access

Get a list of estimate templates or a specific template by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `search` | query | `string` | No | To search for an estimate template by id / name |
| `limit` | query | `string` | Yes | Limit the number of items to return |
| `offset` | query | `string` | Yes | Number of items to skip |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListEstimateTemplateResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Estimate Template

**Endpoint:** `POST /invoices/estimate/template`
**Scope:** `invoices/estimate.write`
**Token Type:** Location-Access, Agency-Access

Create a new estimate template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `EstimateTemplatesDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successfully created | `EstimateTemplateResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Estimate Template

**Endpoint:** `PUT /invoices/estimate/template/{templateId}`
**Scope:** `invoices/estimate.write`
**Token Type:** Location-Access, Agency-Access

Update an existing estimate template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `templateId` | path | `string` | Yes | Template Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `EstimateTemplatesDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully updated | `EstimateTemplateResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Estimate Template

**Endpoint:** `DELETE /invoices/estimate/template/{templateId}`
**Scope:** `invoices/estimate.write`
**Token Type:** Location-Access, Agency-Access

Delete an existing estimate template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `templateId` | path | `string` | Yes | Template Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AltDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully deleted | `EstimateTemplateResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Preview Estimate Template

**Endpoint:** `GET /invoices/estimate/template/preview`
**Scope:** `invoices/estimate.readonly`
**Token Type:** Location-Access, Agency-Access

Get a preview of an estimate template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `templateId` | query | `string` | Yes | Template Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `EstimateTemplateResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### AddressDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addressLine1` | `string` | No | Address Line 1 |
| `addressLine2` | `string` | No | Address Line 2 |
| `city` | `string` | No | City |
| `state` | `string` | No | State |
| `countryCode` | `string` | No | Country Code |
| `postalCode` | `string` | No | Postal Code |

### BusinessDetailsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `logoUrl` | `string` | No | Business Logo URL |
| `name` | `string` | No | Business Name |
| `phoneNo` | `string` | No | Business Phone Number |
| `address` | `AddressDto` | No | Business Address |
| `website` | `string` | No | Business Website Link |
| `customValues` | `array<string>` | No | Custom Values |

### ItemTaxDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `rate` | `number` | Yes | — |
| `calculation` | `string` | No | — |
| `description` | `string` | No | — |
| `taxId` | `string` | No | — |

### InvoiceItemDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Invoice Item Name |
| `description` | `string` | No | Invoice descriptions |
| `productId` | `string` | No | Product Id |
| `priceId` | `string` | No | Price Id |
| `currency` | `string` | Yes | Currency |
| `amount` | `number` | Yes | Product amount |
| `qty` | `number` | Yes | Product Quantity |
| `taxes` | `array<ItemTaxDto>` | No | Tax |
| `automaticTaxCategoryId` | `string` | No | Tax category id for calculating automatic tax |
| `isSetupFeeItem` | `boolean` | No | Setupfee item, only created when 1st invoice of recurring schedule is generated |
| `type` | `string` | No | Price type of the item |
| `taxInclusive` | `boolean` | No | true if item amount is tax inclusive |

### DiscountDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | `number` | No | Discount Value |
| `type` | `string` | Yes | Discount type |
| `validOnProductIds` | `array<string>` | No | Product Ids on which discount is applicable |

### TipsConfigurationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tipsPercentage` | `array<string>` | Yes | Percentage of tips allowed |
| `tipsEnabled` | `boolean` | Yes | Tips enabled status |

### LateFeesFrequencyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `intervalCount` | `number` | Yes | Late fees interval count |
| `interval` | `string` | Yes | Late fees interval |

### LateFeesGraceDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `intervalCount` | `number` | Yes | Late fees grace interval count |
| `interval` | `string` | Yes | Late fees grace interval |

### LateFeesMaxFeesDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | — |
| `value` | `number` | Yes | Max late fees to pay |

### LateFeesConfigurationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable` | `boolean` | Yes | Enable late fees |
| `value` | `number` | Yes | Late Fees Value |
| `type` | `string` | Yes | Late Fees Type |
| `frequency` | `LateFeesFrequencyDto` | Yes | Late Fees Frequency |
| `grace` | `LateFeesGraceDto` | No | Late Fees Grace |
| `maxLateFees` | `LateFeesMaxFeesDto` | No | Max late fees payable |

### StripePaymentMethodDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enableBankDebitOnly` | `boolean` | Yes | Enable Bank Debit Only |

### PaymentMethodDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `stripe` | `StripePaymentMethodDto` | Yes | Payment Method |

### ProcessingFeePaidChargeDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | name of the processing fee |
| `charge` | `number` | Yes | charge for the processing fee |
| `amount` | `number` | Yes | amount of the processing fee |
| `_id` | `string` | Yes | id of the processing fee |

### ProcessingFeeDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `charges` | `array<array<object>>` | Yes | charges for the processing fee |
| `collectedMiscellaneousCharges` | `number` | No | collected miscellaneous charges |
| `paidCharges` | `array<ProcessingFeePaidChargeDto>` | No | paid miscellaneous charges |

### CreateInvoiceTemplateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `internal` | `boolean` | No | — |
| `name` | `string` | Yes | Name of the template |
| `businessDetails` | `BusinessDetailsDto` | Yes | — |
| `currency` | `string` | Yes | — |
| `items` | `array<InvoiceItemDto>` | Yes | — |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `discount` | `DiscountDto` | No | — |
| `termsNotes` | `string` | No | — |
| `title` | `string` | No | Template title |
| `tipsConfiguration` | `TipsConfigurationDto` | No | Configuration for tips on invoices |
| `lateFeesConfiguration` | `LateFeesConfigurationDto` | No | Late fees configuration for the invoices |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number |
| `paymentMethods` | `PaymentMethodDto` | No | Payment Methods for Invoices |
| `attachments` | `array<string>` | No | attachments for the invoice |
| `miscellaneousCharges` | `ProcessingFeeDto` | No | miscellaneous charges for the invoice |

### CreateInvoiceTemplateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Template Id |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the Template |
| `businessDetails` | `BusinessDetailsDto` | Yes | Business Details |
| `currency` | `string` | Yes | Currency |
| `discount` | `DiscountDto` | No | Discount |
| `items` | `array<string>` | Yes | Invoice Items |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number |
| `total` | `number` | Yes | Total Amount |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### GetTemplateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Template Id |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the Template |
| `businessDetails` | `BusinessDetailsDto` | Yes | Business Details |
| `currency` | `string` | Yes | Currency |
| `discount` | `DiscountDto` | No | Discount |
| `items` | `array<string>` | Yes | Invoice Items |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number |
| `total` | `number` | Yes | Total Amount |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### ListTemplatesResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array<GetTemplateResponseDto>` | Yes | — |
| `totalCount` | `number` | Yes | Total number of Templates |

### UpdateInvoiceTemplateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `internal` | `boolean` | No | — |
| `name` | `string` | Yes | Name of the template |
| `businessDetails` | `BusinessDetailsDto` | Yes | — |
| `currency` | `string` | Yes | — |
| `items` | `array<InvoiceItemDto>` | Yes | — |
| `discount` | `DiscountDto` | No | — |
| `termsNotes` | `string` | No | — |
| `title` | `string` | No | Template title |
| `miscellaneousCharges` | `ProcessingFeeDto` | No | miscellaneous charges for the invoice |

### UpdateInvoiceTemplateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Template Id |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the Template |
| `businessDetails` | `BusinessDetailsDto` | Yes | Business Details |
| `currency` | `string` | Yes | Currency |
| `discount` | `DiscountDto` | No | Discount |
| `items` | `array<string>` | Yes | Invoice Items |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number |
| `total` | `number` | Yes | Total Amount |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### UpdateInvoiceLateFeesConfigurationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `lateFeesConfiguration` | `LateFeesConfigurationDto` | Yes | late fees configuration |

### UpdatePaymentMethodsConfigurationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `paymentMethods` | `PaymentMethodDto` | No | Payment Methods for Invoices |

### DeleteInvoiceTemplateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | success |

### AdditionalEmailsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | — |

### ContactDetailsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Contact ID |
| `name` | `string` | Yes | Contact Name |
| `phoneNo` | `string` | Yes | Contact Phone Number |
| `email` | `string` | Yes | Contact Email |
| `additionalEmails` | `array<AdditionalEmailsDto>` | No | Secondary email addresses for the contact to be saved |
| `companyName` | `string` | No | Contact Company Name |
| `address` | `AddressDto` | No | — |
| `customFields` | `array<string>` | No | Custom Values |

### CustomRRuleOptionsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `intervalType` | `string` | Yes | — |
| `interval` | `number` | Yes | — |
| `startDate` | `string` | Yes | Start date in YYYY-MM-DD format |
| `startTime` | `string` | No | Start time in HH:mm:ss format |
| `endDate` | `string` | No | End date in YYYY-MM-DD format |
| `endTime` | `string` | No | End time in HH:mm:ss format |
| `dayOfMonth` | `number` | No | -1, 1, 2, 3, ..., 27, 28 |
| `dayOfWeek` | `string` | No | — |
| `numOfWeek` | `number` | No | -1, 1, 2, 3, 4 |
| `monthOfYear` | `string` | No | — |
| `count` | `number` | No | Max number of task executions |
| `daysBefore` | `number` | No | Execute task number of days before |
| `useStartAsPrimaryUserAccepted` | `boolean` | No | Start as primary user accepted date |
| `endType` | `string` | No | End type like after, by, count |

### ScheduleOptionsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `executeAt` | `string` | No | — |
| `rrule` | `CustomRRuleOptionsDto` | No | — |

### AttachmentsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Id of the file selected |
| `name` | `string` | Yes | Name of the file |
| `url` | `string` | Yes | URL of the file |
| `type` | `string` | Yes | Type of the file |
| `size` | `number` | Yes | Size of the file |

### CreateInvoiceScheduleDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `name` | `string` | Yes | — |
| `contactDetails` | `ContactDetailsDto` | Yes | — |
| `schedule` | `ScheduleOptionsDto` | Yes | — |
| `liveMode` | `boolean` | Yes | — |
| `businessDetails` | `BusinessDetailsDto` | Yes | — |
| `currency` | `string` | Yes | — |
| `items` | `array<InvoiceItemDto>` | Yes | — |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `discount` | `DiscountDto` | Yes | — |
| `termsNotes` | `string` | No | — |
| `title` | `string` | No | — |
| `tipsConfiguration` | `TipsConfigurationDto` | No | Configuration for tips on invoices |
| `lateFeesConfiguration` | `LateFeesConfigurationDto` | No | Late fees configuration for the invoices |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number |
| `paymentMethods` | `PaymentMethodDto` | No | Payment Methods for Invoices |
| `attachments` | `array<AttachmentsDto>` | No | attachments for the invoice |
| `miscellaneousCharges` | `ProcessingFeeDto` | No | miscellaneous charges for the invoice |

### DefaultInvoiceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Invoice Id |
| `status` | `string` | Yes | Invoice Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `amountPaid` | `number` | Yes | Amount Paid |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `businessDetails` | `object` | Yes | Business Details |
| `invoiceNumber` | `number` | Yes | Invoice Number |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `object` | Yes | Contact Details |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format |
| `dueDate` | `string` | Yes | Due date in YYYY-MM-DD format |
| `discount` | `object` | No | Discount |
| `invoiceItems` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `amountDue` | `number` | Yes | Total Amount Due |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `automaticTaxesCalculated` | `boolean` | No | Is Automatic taxes calculated for the Invoice items |
| `paymentSchedule` | `object` | No | split invoice into payment schedule summing up to full invoice amount |

### CreateInvoiceScheduleResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Schedule Id |
| `status` | `object` | Yes | Schedule Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `schedule` | `ScheduleOptionsDto` | No | — |
| `invoices` | `array<DefaultInvoiceResponseDto>` | Yes | List of invoices |
| `businessDetails` | `BusinessDetailsDto` | Yes | Business Details |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact Details |
| `discount` | `DiscountDto` | No | Discount |
| `items` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `termsNotes` | `string` | Yes | Terms notes |
| `compiledTermsNotes` | `string` | Yes | Compiled terms notes |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### GetScheduleResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Schedule Id |
| `status` | `object` | Yes | Schedule Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `schedule` | `ScheduleOptionsDto` | No | — |
| `invoices` | `array<DefaultInvoiceResponseDto>` | Yes | List of invoices |
| `businessDetails` | `BusinessDetailsDto` | Yes | Business Details |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact Details |
| `discount` | `DiscountDto` | No | Discount |
| `items` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `termsNotes` | `string` | Yes | Terms notes |
| `compiledTermsNotes` | `string` | Yes | Compiled terms notes |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### ListSchedulesResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `schedules` | `array<GetScheduleResponseDto>` | Yes | — |
| `total` | `number` | Yes | Total number of Schedules |

### UpdateInvoiceScheduleDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `name` | `string` | Yes | — |
| `contactDetails` | `ContactDetailsDto` | Yes | — |
| `schedule` | `ScheduleOptionsDto` | Yes | — |
| `liveMode` | `boolean` | Yes | — |
| `businessDetails` | `BusinessDetailsDto` | Yes | — |
| `currency` | `string` | Yes | — |
| `items` | `array<InvoiceItemDto>` | Yes | — |
| `discount` | `DiscountDto` | Yes | — |
| `termsNotes` | `string` | No | — |
| `title` | `string` | No | — |
| `attachments` | `array<AttachmentsDto>` | No | attachments for the invoice |
| `miscellaneousCharges` | `ProcessingFeeDto` | No | miscellaneous charges for the invoice |

### UpdateInvoiceScheduleResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Schedule Id |
| `status` | `object` | Yes | Schedule Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `schedule` | `ScheduleOptionsDto` | No | — |
| `invoices` | `array<DefaultInvoiceResponseDto>` | Yes | List of invoices |
| `businessDetails` | `BusinessDetailsDto` | Yes | Business Details |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact Details |
| `discount` | `DiscountDto` | No | Discount |
| `items` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `termsNotes` | `string` | Yes | Terms notes |
| `compiledTermsNotes` | `string` | Yes | Compiled terms notes |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### DeleteInvoiceScheduleResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | success |

### UpdateAndScheduleInvoiceScheduleResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Schedule Id |
| `status` | `object` | Yes | Schedule Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `schedule` | `ScheduleOptionsDto` | No | — |
| `invoices` | `array<DefaultInvoiceResponseDto>` | Yes | List of invoices |
| `businessDetails` | `BusinessDetailsDto` | Yes | Business Details |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact Details |
| `discount` | `DiscountDto` | No | Discount |
| `items` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `termsNotes` | `string` | Yes | Terms notes |
| `compiledTermsNotes` | `string` | Yes | Compiled terms notes |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### CardDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand` | `string` | Yes | — |
| `last4` | `string` | Yes | — |

### USBankAccountDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_name` | `string` | Yes | — |
| `last4` | `string` | Yes | — |

### SepaDirectDebitDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_code` | `string` | Yes | — |
| `last4` | `string` | Yes | — |
| `branch_code` | `string` | Yes | — |

### BacsDirectDebitDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sort_code` | `string` | Yes | — |
| `last4` | `string` | Yes | — |

### BecsDirectDebitDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bsb_number` | `string` | Yes | — |
| `last4` | `string` | Yes | — |

### AutoPaymentDetailsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable` | `boolean` | Yes | — |
| `type` | `string` | No | — |
| `paymentMethodId` | `string` | No | — |
| `customerId` | `string` | No | — |
| `card` | `CardDto` | No | — |
| `usBankAccount` | `USBankAccountDto` | No | — |
| `sepaDirectDebit` | `SepaDirectDebitDTO` | No | — |
| `bacsDirectDebit` | `BacsDirectDebitDTO` | No | — |
| `becsDirectDebit` | `BecsDirectDebitDTO` | No | — |
| `cardId` | `string` | No | — |
| `provider` | `object` | No | — |

### ScheduleInvoiceScheduleDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `liveMode` | `boolean` | Yes | — |
| `autoPayment` | `AutoPaymentDetailsDto` | No | auto-payment configuration |

### ScheduleInvoiceScheduleResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Schedule Id |
| `status` | `object` | Yes | Schedule Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `schedule` | `ScheduleOptionsDto` | No | — |
| `invoices` | `array<DefaultInvoiceResponseDto>` | Yes | List of invoices |
| `businessDetails` | `BusinessDetailsDto` | Yes | Business Details |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact Details |
| `discount` | `DiscountDto` | No | Discount |
| `items` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `termsNotes` | `string` | Yes | Terms notes |
| `compiledTermsNotes` | `string` | Yes | Compiled terms notes |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### AutoPaymentScheduleDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `id` | `string` | Yes | — |
| `autoPayment` | `AutoPaymentDetailsDto` | Yes | auto-payment configuration |

### AutoPaymentInvoiceScheduleResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Schedule Id |
| `status` | `object` | Yes | Schedule Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `schedule` | `ScheduleOptionsDto` | No | — |
| `invoices` | `array<DefaultInvoiceResponseDto>` | Yes | List of invoices |
| `businessDetails` | `BusinessDetailsDto` | Yes | Business Details |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact Details |
| `discount` | `DiscountDto` | No | Discount |
| `items` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `termsNotes` | `string` | Yes | Terms notes |
| `compiledTermsNotes` | `string` | Yes | Compiled terms notes |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### CancelInvoiceScheduleDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |

### CancelInvoiceScheduleResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Schedule Id |
| `status` | `object` | Yes | Schedule Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `schedule` | `ScheduleOptionsDto` | No | — |
| `invoices` | `array<DefaultInvoiceResponseDto>` | Yes | List of invoices |
| `businessDetails` | `BusinessDetailsDto` | Yes | Business Details |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact Details |
| `discount` | `DiscountDto` | No | Discount |
| `items` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `termsNotes` | `string` | Yes | Terms notes |
| `compiledTermsNotes` | `string` | Yes | Compiled terms notes |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### SentToDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `array<string>` | Yes | Email Address |
| `emailCc` | `array<string>` | No | cc to be kept in any sent out emails |
| `emailBcc` | `array<string>` | No | bcc to be kept in any sent out emails |
| `phoneNo` | `array<string>` | No | Contact Phone Number |

### PaymentScheduleDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Payment schedule type |
| `schedules` | `array<string>` | Yes | payment schedule item |

### Text2PayDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `name` | `string` | Yes | Invoice Name |
| `currency` | `string` | Yes | Currency code |
| `items` | `array<InvoiceItemDto>` | Yes | An array of items for the invoice. |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups |
| `title` | `string` | No | Title for the invoice |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact information to send the invoice to |
| `invoiceNumber` | `string` | No | Invoice Number |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format |
| `dueDate` | `string` | No | Due date in YYYY-MM-DD format |
| `sentTo` | `SentToDto` | Yes | — |
| `liveMode` | `boolean` | Yes | — |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `paymentSchedule` | `PaymentScheduleDto` | No | split invoice into payment schedule summing up to full invoice amount |
| `lateFeesConfiguration` | `LateFeesConfigurationDto` | No | late fees configuration |
| `tipsConfiguration` | `TipsConfigurationDto` | No | tips configuration for the invoice |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number |
| `paymentMethods` | `PaymentMethodDto` | No | Payment Methods for Invoices |
| `attachments` | `array<AttachmentsDto>` | No | attachments for the invoice |
| `miscellaneousCharges` | `ProcessingFeeDto` | No | miscellaneous charges for the invoice |
| `id` | `string` | No | id of invoice to update. If skipped, a new invoice will be created |
| `includeTermsNote` | `boolean` | No | include terms & notes with receipts |
| `action` | `string` | Yes | create invoice in draft mode or send mode |
| `userId` | `string` | Yes | id of user generating invoice |
| `discount` | `DiscountDto` | No | — |
| `businessDetails` | `BusinessDetailsDto` | No | — |

### Text2PayInvoiceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoice` | `DefaultInvoiceResponseDto` | Yes | — |
| `invoiceUrl` | `string` | Yes | preview url of generated invoice |

### GenerateInvoiceNumberResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoiceNumber` | `number` | No | Invoice Number |

### CustomNotificationItemDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Flag indicating if the notification is enabled or not |
| `emailTemplate` | `string` | Yes | Template to be used for sending email |
| `smsTemplate` | `string` | Yes | Template to be used for sending sms |
| `fromName` | `string` | No | Name to be used while sending email |
| `fromEmail` | `string` | No | Email address to be used for sending email |
| `emailSubject` | `string` | No | Subject of email which is sent out |
| `defaultEmailTemplateId` | `string` | No | Default email TemplateId to be used for sending via email |

### CustomNotificationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customerSendInvoice` | `CustomNotificationItemDto` | Yes | — |
| `teamPaymentSuccess` | `CustomNotificationItemDto` | Yes | — |
| `customerPaymentSuccess` | `CustomNotificationItemDto` | Yes | — |
| `teamAutoPaymentSuccess` | `CustomNotificationItemDto` | Yes | — |
| `customerAutoPaymentSuccess` | `CustomNotificationItemDto` | Yes | — |
| `teamPaymentFailure` | `CustomNotificationItemDto` | Yes | — |
| `customerPaymentFailure` | `CustomNotificationItemDto` | Yes | — |
| `teamAutoPaymentFailure` | `CustomNotificationItemDto` | Yes | — |
| `customerAutoPaymentFailure` | `CustomNotificationItemDto` | Yes | — |
| `customerAutoPaymentInfo` | `CustomNotificationItemDto` | Yes | — |
| `customerAutoPaymentAmountChanged` | `CustomNotificationItemDto` | Yes | — |
| `teamAutoPaymentSkip` | `CustomNotificationItemDto` | Yes | — |
| `teamRecurringSendInvoiceFailed` | `CustomNotificationItemDto` | Yes | — |
| `customerSendEstimate` | `CustomNotificationItemDto` | Yes | — |
| `teamEstimateAccepted` | `CustomNotificationItemDto` | Yes | — |
| `teamEstimateDeclined` | `CustomNotificationItemDto` | Yes | — |

### Address

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addressLine1` | `string` | No | — |
| `addressLine2` | `string` | No | — |
| `city` | `string` | No | — |
| `state` | `string` | No | — |
| `countryCode` | `string` | No | — |
| `postalCode` | `string` | No | — |

### InvoiceSettingsBusinessDetailsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `logoUrl` | `string` | No | — |
| `name` | `string` | Yes | — |
| `phoneNo` | `string` | No | — |
| `address` | `Address` | No | — |
| `website` | `string` | No | — |
| `customValues` | `array<string>` | No | — |

### InvoiceSettingsSenderConfigurationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fromName` | `string` | No | Sender name to be used while sending email notification |
| `fromEmail` | `string` | No | Email id to be used while sending email notification |

### InvoiceProductSettingsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enableImportProductDescription` | `boolean` | No | Flag indicating if the product description import is enabled or not |
| `descriptionOptional` | `boolean` | No | Flag indicating if the product description is optional or not |

### ReminderDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Flag indicating if the reminder is enabled or not |
| `emailTemplate` | `string` | Yes | Email template to be used for sending reminders |
| `smsTemplate` | `string` | Yes | SMS template to be used for sending reminders |
| `emailSubject` | `string` | Yes | Subject of the reminder |
| `reminderId` | `string` | Yes | Unique identifier for the reminder |
| `reminderName` | `string` | Yes | Name of the reminder |
| `reminderTime` | `string` | Yes | Time condition for the reminder |
| `intervalType` | `string` | Yes | Interval type for the reminder |
| `maxReminders` | `number` | Yes | Maximum number of reminders that can be sent |
| `reminderInvoiceCondition` | `string` | Yes | Condition for sending the reminder |
| `reminderNumber` | `number` | Yes | frequency gap of the reminder to exeucte |
| `startTime` | `string` | No | Business Hour Start Time |
| `endTime` | `string` | No | Business Hour End Time |
| `timezone` | `string` | No | Timezone at which reminder will be sent |

### ReminderSettingsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `defaultEmailTemplateId` | `string` | Yes | default template Id of reminder |
| `reminders` | `array<ReminderDto>` | Yes | List of reminders |

### GetInvoiceSettingsResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | No | Sub-Account Id |
| `altType` | `string` | No | Alt Type |
| `termsNote` | `string` | No | Terms and conditions for invoices |
| `estimatesTermsNote` | `string` | No | Terms and conditions for estimates |
| `title` | `string` | No | Title for invoices |
| `estimatesTitle` | `string` | No | Title for estimates |
| `invoiceNumberPrefix` | `string` | No | Prefix for invoice numbers |
| `estimateNumberPrefix` | `string` | No | Prefix for estimate numbers |
| `dueAfterXDays` | `number` | No | Number of days after which invoice is due |
| `estimatesExpireAfterXDays` | `number` | No | Number of days after which estimate expires |
| `minimumPercentagePartialPayment` | `number` | No | Minimum percentage for partial payment |
| `customFields` | `array<string>` | No | Custom fields array |
| `customNotification` | `CustomNotificationDto` | No | Custom notification settings |
| `businessDetails` | `InvoiceSettingsBusinessDetailsDto` | No | Business details |
| `senderConfiguration` | `InvoiceSettingsSenderConfigurationDto` | No | Sender configuration |
| `productSettings` | `InvoiceProductSettingsDto` | No | Product settings |
| `reminderSettings` | `ReminderSettingsDto` | No | Reminder settings |
| `lateFeesConfiguration` | `LateFeesConfigurationDto` | No | Late fees configuration |
| `tipsConfiguration` | `TipsConfigurationDto` | No | Tips configuration |
| `paymentMethods` | `PaymentMethodDto` | No | Payment methods configuration |

### CreateInvoiceDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `name` | `string` | Yes | Invoice Name |
| `businessDetails` | `BusinessDetailsDto` | Yes | — |
| `currency` | `string` | Yes | Currency code |
| `items` | `array<InvoiceItemDto>` | Yes | An array of items for the invoice. |
| `discount` | `DiscountDto` | Yes | — |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups |
| `title` | `string` | No | Title for the invoice |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact information to send the invoice to |
| `invoiceNumber` | `string` | No | Invoice Number |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format |
| `dueDate` | `string` | No | Due date in YYYY-MM-DD format |
| `sentTo` | `SentToDto` | Yes | — |
| `liveMode` | `boolean` | Yes | — |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `paymentSchedule` | `PaymentScheduleDto` | No | split invoice into payment schedule summing up to full invoice amount |
| `lateFeesConfiguration` | `LateFeesConfigurationDto` | No | late fees configuration |
| `tipsConfiguration` | `TipsConfigurationDto` | No | tips configuration for the invoice |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number |
| `paymentMethods` | `PaymentMethodDto` | No | Payment Methods for Invoices |
| `attachments` | `array<AttachmentsDto>` | No | attachments for the invoice |
| `miscellaneousCharges` | `ProcessingFeeDto` | No | miscellaneous charges for the invoice |

### OldCreateInvoiceDTO

Type: `object`

### CreateInvoiceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Invoice Id |
| `status` | `string` | Yes | Invoice Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `amountPaid` | `number` | Yes | Amount Paid |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `businessDetails` | `object` | Yes | Business Details |
| `invoiceNumber` | `number` | Yes | Invoice Number |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `object` | Yes | Contact Details |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format |
| `dueDate` | `string` | Yes | Due date in YYYY-MM-DD format |
| `discount` | `object` | No | Discount |
| `invoiceItems` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `amountDue` | `number` | Yes | Total Amount Due |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `automaticTaxesCalculated` | `boolean` | No | Is Automatic taxes calculated for the Invoice items |
| `paymentSchedule` | `object` | No | split invoice into payment schedule summing up to full invoice amount |

### TotalSummaryDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subTotal` | `number` | Yes | subTotal |
| `discount` | `number` | Yes | discount |
| `tax` | `number` | Yes | tax |

### ReminderExecutionDetailsList

Type: `object`

### RemindersConfigurationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reminderExecutionDetailsList` | `ReminderExecutionDetailsList` | Yes | List of reminders |
| `reminderSettings` | `ReminderSettingsDto` | Yes | Reminder settings |

### GetInvoiceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Invoice Id |
| `status` | `string` | Yes | Invoice Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `amountPaid` | `number` | Yes | Amount Paid |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `businessDetails` | `object` | Yes | Business Details |
| `invoiceNumber` | `number` | Yes | Invoice Number |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `object` | Yes | Contact Details |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format |
| `dueDate` | `string` | Yes | Due date in YYYY-MM-DD format |
| `discount` | `object` | No | Discount |
| `invoiceItems` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `amountDue` | `number` | Yes | Total Amount Due |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `automaticTaxesCalculated` | `boolean` | No | Is Automatic taxes calculated for the Invoice items |
| `paymentSchedule` | `object` | No | split invoice into payment schedule summing up to full invoice amount |
| `totalSummary` | `TotalSummaryDto` | Yes | — |
| `remindersConfiguration` | `RemindersConfigurationDto` | No | Reminders Configuration |

### ListInvoicesResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoices` | `array<GetInvoiceResponseDto>` | Yes | — |
| `total` | `number` | Yes | Total number of invoices |

### UpdateInvoiceDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `name` | `string` | Yes | Name to be updated |
| `title` | `string` | No | Title for the invoice |
| `currency` | `string` | Yes | Currency |
| `description` | `string` | No | Description |
| `businessDetails` | `BusinessDetailsDto` | No | Business details which need to be updated |
| `invoiceNumber` | `string` | No | Invoice Number |
| `contactId` | `string` | No | Id of the contact which you need to send the invoice |
| `contactDetails` | `ContactDetailsDto` | No | — |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups |
| `discount` | `DiscountDto` | No | — |
| `invoiceItems` | `array<InvoiceItemDto>` | Yes | — |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `liveMode` | `boolean` | No | Payment mode |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format |
| `dueDate` | `string` | Yes | Due date in YYYY-MM-DD format |
| `paymentSchedule` | `PaymentScheduleDto` | No | split invoice into payment schedule summing up to full invoice amount |
| `tipsConfiguration` | `TipsConfigurationDto` | No | tips configuration for the invoice |
| `xeroDetails` | `object` | No | — |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number |
| `paymentMethods` | `PaymentMethodDto` | No | Payment Methods for Invoices |
| `attachments` | `array<AttachmentsDto>` | No | attachments for the invoice |
| `miscellaneousCharges` | `ProcessingFeeDto` | No | miscellaneous charges for the invoice |

### UpdateInvoiceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Invoice Id |
| `status` | `string` | Yes | Invoice Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `amountPaid` | `number` | Yes | Amount Paid |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `businessDetails` | `object` | Yes | Business Details |
| `invoiceNumber` | `number` | Yes | Invoice Number |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `object` | Yes | Contact Details |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format |
| `dueDate` | `string` | Yes | Due date in YYYY-MM-DD format |
| `discount` | `object` | No | Discount |
| `invoiceItems` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `amountDue` | `number` | Yes | Total Amount Due |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `automaticTaxesCalculated` | `boolean` | No | Is Automatic taxes calculated for the Invoice items |
| `paymentSchedule` | `object` | No | split invoice into payment schedule summing up to full invoice amount |

### DeleteInvoiceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Invoice Id |
| `status` | `string` | Yes | Invoice Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `amountPaid` | `number` | Yes | Amount Paid |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `businessDetails` | `object` | Yes | Business Details |
| `invoiceNumber` | `number` | Yes | Invoice Number |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `object` | Yes | Contact Details |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format |
| `dueDate` | `string` | Yes | Due date in YYYY-MM-DD format |
| `discount` | `object` | No | Discount |
| `invoiceItems` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `amountDue` | `number` | Yes | Total Amount Due |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `automaticTaxesCalculated` | `boolean` | No | Is Automatic taxes calculated for the Invoice items |
| `paymentSchedule` | `object` | No | split invoice into payment schedule summing up to full invoice amount |

### VoidInvoiceDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |

### VoidInvoiceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Invoice Id |
| `status` | `string` | Yes | Invoice Status |
| `liveMode` | `boolean` | Yes | Live Mode |
| `amountPaid` | `number` | Yes | Amount Paid |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the invoice |
| `businessDetails` | `object` | Yes | Business Details |
| `invoiceNumber` | `number` | Yes | Invoice Number |
| `currency` | `string` | Yes | Currency |
| `contactDetails` | `object` | Yes | Contact Details |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format |
| `dueDate` | `string` | Yes | Due date in YYYY-MM-DD format |
| `discount` | `object` | No | Discount |
| `invoiceItems` | `array<string>` | Yes | Invoice Items |
| `total` | `number` | Yes | Total Amount |
| `title` | `string` | Yes | Title |
| `amountDue` | `number` | Yes | Total Amount Due |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice |
| `automaticTaxesCalculated` | `boolean` | No | Is Automatic taxes calculated for the Invoice items |
| `paymentSchedule` | `object` | No | split invoice into payment schedule summing up to full invoice amount |

### SendInvoiceDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `userId` | `string` | Yes | Please ensure that the UserId corresponds to an authorized personnel, either by an employee ID or agency ID, to access this location. This account will serve as the primary channel for all future communications and updates. |
| `action` | `string` | Yes | — |
| `liveMode` | `boolean` | Yes | — |
| `sentFrom` | `InvoiceSettingsSenderConfigurationDto` | No | sender details for invoice, valid only if invoice is not sent manually |
| `autoPayment` | `AutoPaymentDetailsDto` | No | auto-payment configuration |

### SendInvoicesResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoice` | `DefaultInvoiceResponseDto` | Yes | — |
| `smsData` | `object` | Yes | — |
| `emailData` | `object` | Yes | — |

### ChequeDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `number` | `string` | Yes | check number |

### RecordPaymentDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | location Id / company Id based on altType |
| `altType` | `string` | Yes | Alt Type |
| `mode` | `string` | Yes | manual payment method |
| `card` | `CardDto` | Yes | — |
| `cheque` | `ChequeDto` | Yes | — |
| `notes` | `string` | Yes | Any note to be recorded with the transaction |
| `amount` | `number` | No | Amount to be paid against the invoice. |
| `meta` | `object` | No | — |
| `paymentScheduleIds` | `array<string>` | No | Payment Schedule Ids to be recorded against the invoice. |
| `fulfilledAt` | `string` | No | Updated At to be recorded against the invoice. |

### RecordPaymentResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | status |
| `invoice` | `DefaultInvoiceResponseDto` | Yes | — |

### PatchInvoiceStatsLastViewedDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoiceId` | `string` | Yes | Invoice Id |

### EstimateLineItemDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Invoice Item Name |
| `description` | `string` | No | Invoice descriptions |
| `productId` | `string` | No | Product Id |
| `priceId` | `string` | No | Price Id |
| `currency` | `string` | Yes | Currency |
| `amount` | `number` | Yes | Product amount |
| `qty` | `number` | Yes | Product Quantity |
| `taxes` | `array<ItemTaxDto>` | No | Tax |
| `automaticTaxCategoryId` | `string` | No | Tax category id for calculating automatic tax |
| `isSetupFeeItem` | `boolean` | No | Setupfee item, only created when 1st invoice of recurring schedule is generated |
| `type` | `string` | No | Price type of the item |
| `taxInclusive` | `boolean` | No | true if item amount is tax inclusive |
| `attachments` | `array<string>` | No | Attachments for the line item |

### SendEstimateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `action` | `string` | Yes | — |
| `liveMode` | `boolean` | Yes | livemode for estimate |
| `userId` | `string` | Yes | Please ensure that the UserId corresponds to an authorized personnel, either by an employee ID or agency ID, to access this location. This account will serve as the primary channel for all future communications and updates. |
| `sentFrom` | `InvoiceSettingsSenderConfigurationDto` | No | sender details for invoice, valid only if invoice is not sent manually |
| `estimateName` | `string` | No | estimate name |

### FrequencySettingsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | enabled for the frequency settings |
| `schedule` | `ScheduleOptionsDto` | Yes | schedule setting for the estimate |

### AutoInvoicingDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Enable Auto Invoice |
| `directPayments` | `boolean` | No | Direct Payments |

### PaymentScheduleDateConfigDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `depositDateType` | `string` | Yes | Deposit date type |
| `scheduleDateType` | `string` | Yes | Payment Schedule Date Type |

### PaymentScheduleConfigDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Payment Schedule Type |
| `dateConfig` | `PaymentScheduleDateConfigDto` | Yes | Due date type configuration |
| `schedules` | `array<array<object>>` | Yes | Payment Schedule Items |

### CreateEstimatesDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Estimate Name |
| `businessDetails` | `BusinessDetailsDto` | Yes | — |
| `currency` | `string` | Yes | Currency code |
| `items` | `array<EstimateLineItemDto>` | Yes | An array of items for the estimate. |
| `liveMode` | `boolean` | No | livemode for estimate |
| `discount` | `DiscountDto` | Yes | — |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups |
| `title` | `string` | No | Title for the estimate |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact information to send the estimate to |
| `estimateNumber` | `number` | No | Estimate Number, if not specified will take in the next valid estimate number |
| `issueDate` | `string` | No | issue date estimate |
| `expiryDate` | `string` | No | expiry date estimate |
| `sentTo` | `SentToDto` | No | Email and sent to details for the estimate |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Estimate |
| `meta` | `object` | No | Meta data for the estimate |
| `sendEstimateDetails` | `SendEstimateDto` | No | When sending estimate directly while saving |
| `frequencySettings` | `FrequencySettingsDto` | Yes | frequency settings for the estimate |
| `estimateNumberPrefix` | `string` | No | Prefix for the estimate number |
| `userId` | `string` | No | User Id |
| `attachments` | `array<AttachmentsDto>` | No | attachments for the invoice |
| `autoInvoice` | `AutoInvoicingDto` | No | Auto invoice for the estimate |
| `miscellaneousCharges` | `ProcessingFeeDto` | No | miscellaneous charges for the estimate |
| `paymentScheduleConfig` | `PaymentScheduleConfigDto` | No | Payment Schedule Config for the estimate |

### BusinessDetails

Type: `object`

### ContactDetails

Type: `object`

### SentTo

Type: `object`

### AutoInvoice

Type: `object`

### EstimateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `_id` | `string` | Yes | Unique identifier |
| `liveMode` | `boolean` | Yes | Indicates if it is in live mode |
| `deleted` | `boolean` | Yes | Indicates if deleted |
| `name` | `string` | Yes | Name |
| `currency` | `string` | Yes | Currency code |
| `businessDetails` | `BusinessDetails` | Yes | Business details associated with the estimate |
| `items` | `array<array<object>>` | Yes | An array of items |
| `discount` | `DiscountDto` | Yes | Discount details for the estimate template |
| `title` | `string` | No | Title |
| `estimateNumberPrefix` | `string` | No | Estimate number prefix |
| `attachments` | `array<AttachmentsDto>` | No | Attachments |
| `updatedBy` | `string` | No | User Id of who last updated |
| `total` | `number` | Yes | Total amount |
| `createdAt` | `string (date-time)` | Yes | Timestamp when created |
| `updatedAt` | `string (date-time)` | Yes | Timestamp when last updated |
| `__v` | `number` | Yes | Version number |
| `automaticTaxesEnabled` | `boolean` | Yes | Indicates if automatic taxes are enabled for this estimate |
| `termsNotes` | `string` | No | Terms and conditions for the estimate, supports HTML markup |
| `companyId` | `string` | Yes | Company identifier associated with the estimate |
| `contactDetails` | `ContactDetails` | Yes | Contact details for the estimate |
| `issueDate` | `string (date-time)` | Yes | Date when the estimate was issued |
| `expiryDate` | `string (date-time)` | Yes | Date when the estimate expires |
| `sentBy` | `string` | No | User who sent the estimate |
| `automaticTaxesCalculated` | `boolean` | Yes | Indicates if automatic taxes were calculated |
| `meta` | `object` | Yes | Additional metadata associated with the estimate |
| `estimateActionHistory` | `array<string>` | Yes | History of actions taken on the estimate |
| `sentTo` | `SentTo` | Yes | Recipient details for the estimate |
| `frequencySettings` | `FrequencySettingsDto` | Yes | Frequency settings for recurring estimates |
| `lastVisitedAt` | `string (date-time)` | Yes | Timestamp when the estimate was last visited |
| `totalamountInUSD` | `number` | Yes | Total amount in USD |
| `autoInvoice` | `AutoInvoice` | No | Auto-invoice settings for the estimate |
| `traceId` | `string` | Yes | Trace ID for logging and debugging |

### UpdateEstimateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Estimate Name |
| `businessDetails` | `BusinessDetailsDto` | Yes | — |
| `currency` | `string` | Yes | Currency code |
| `items` | `array<EstimateLineItemDto>` | Yes | An array of items for the estimate. |
| `liveMode` | `boolean` | No | livemode for estimate |
| `discount` | `DiscountDto` | Yes | — |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups |
| `title` | `string` | No | Title for the estimate |
| `contactDetails` | `ContactDetailsDto` | Yes | Contact information to send the estimate to |
| `estimateNumber` | `number` | No | Estimate Number, if not specified will take in the next valid estimate number |
| `issueDate` | `string` | No | issue date estimate |
| `expiryDate` | `string` | No | expiry date estimate |
| `sentTo` | `SentToDto` | No | Email and sent to details for the estimate |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Estimate |
| `meta` | `object` | No | Meta data for the estimate |
| `sendEstimateDetails` | `SendEstimateDto` | No | When sending estimate directly while saving |
| `frequencySettings` | `FrequencySettingsDto` | Yes | frequency settings for the estimate |
| `estimateNumberPrefix` | `string` | No | Prefix for the estimate number |
| `userId` | `string` | No | User Id |
| `attachments` | `array<AttachmentsDto>` | No | attachments for the invoice |
| `autoInvoice` | `AutoInvoicingDto` | No | Auto invoice for the estimate |
| `miscellaneousCharges` | `ProcessingFeeDto` | No | miscellaneous charges for the estimate |
| `paymentScheduleConfig` | `PaymentScheduleConfigDto` | No | Payment Schedule Config for the estimate |
| `estimateStatus` | `string` | No | Estimate Status |

### GenerateEstimateNumberResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `estimateNumber` | `number` | Yes | — |
| `traceId` | `string` | Yes | — |

### AltDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |

### CreateInvoiceFromEstimateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `markAsInvoiced` | `boolean` | Yes | Mark Estimate as Invoiced |
| `version` | `string` | No | Version of the update request |

### CreateInvoiceFromEstimateResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `estimate` | `EstimateResponseDto` | Yes | Estimate details |
| `invoice` | `DefaultInvoiceResponseDto` | Yes | Invoice details |

### ListEstimatesResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `estimates` | `array<string>` | Yes | List of estimates |
| `total` | `number` | Yes | Total number of estimates |
| `traceId` | `string` | Yes | Unique identifier for tracing the request |

### EstimateIdParam

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `estimateId` | `string` | Yes | Estimate Id |

### ListEstimateTemplateResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array<string>` | Yes | List of estimate templates |
| `totalCount` | `number` | Yes | Total number of estimate templates available |
| `traceId` | `string` | Yes | Unique identifier for tracing the request |

### EstimateTemplatesDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Estimate Name |
| `businessDetails` | `BusinessDetailsDto` | Yes | — |
| `currency` | `string` | Yes | Currency code |
| `items` | `array<array<object>>` | Yes | An array of items for the estimate. |
| `liveMode` | `boolean` | No | livemode for estimate |
| `discount` | `DiscountDto` | Yes | — |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups |
| `title` | `string` | No | Title for the estimate |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Estimate |
| `meta` | `object` | No | Meta data for the estimate |
| `sendEstimateDetails` | `SendEstimateDto` | No | When sending estimate directly while saving |
| `estimateNumberPrefix` | `string` | No | Prefix for the estimate number |
| `attachments` | `array<AttachmentsDto>` | No | attachments for the invoice |
| `miscellaneousCharges` | `ProcessingFeeDto` | No | miscellaneous charges for the estimate |

### EstimateTemplateResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `_id` | `string` | Yes | Unique identifier |
| `liveMode` | `boolean` | Yes | Indicates if it is in live mode |
| `deleted` | `boolean` | Yes | Indicates if deleted |
| `name` | `string` | Yes | Name |
| `currency` | `string` | Yes | Currency code |
| `businessDetails` | `BusinessDetails` | Yes | Business details associated with the estimate |
| `items` | `array<array<object>>` | Yes | An array of items |
| `discount` | `DiscountDto` | Yes | Discount details for the estimate template |
| `title` | `string` | No | Title |
| `estimateNumberPrefix` | `string` | No | Estimate number prefix |
| `attachments` | `array<AttachmentsDto>` | No | Attachments |
| `updatedBy` | `string` | No | User Id of who last updated |
| `total` | `number` | Yes | Total amount |
| `createdAt` | `string (date-time)` | Yes | Timestamp when created |
| `updatedAt` | `string (date-time)` | Yes | Timestamp when last updated |
| `__v` | `number` | Yes | Version number |
| `automaticTaxesEnabled` | `boolean` | Yes | Indicates if automatic taxes are enabled for this estimate |
| `termsNotes` | `string` | No | Terms and conditions for the estimate, supports HTML markup |
