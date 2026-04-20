# GHL Sales & Commerce APIs — Comprehensive Review

*Generated: March 2026 | Source: GHL API v2 Official Documentation*


---

## Overview

This document covers the GoHighLevel Sales and Commerce API sections: Invoices, Opportunities, Payments, Products, Proposals (Documents & Contracts), and Store. These APIs power the revenue-generating capabilities of the GHL platform, enabling programmatic management of the sales pipeline, payment processing, product catalogs, and e-commerce operations.

Source: [GHL API GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs) and [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)


This document covers **6 API sections** with a total of **124 endpoints**.


## Quick Reference

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Invoice API** | 41 | `invoices.readonly`, `invoices.write`, `invoices/estimate.readonly`, `invoices/estimate.write` _(+4 more)_ |
| **Opportunities API** | 10 | `opportunities.readonly`, `opportunities.write` |
| **Payments API** | 24 | `payments/coupons.readonly`, `payments/coupons.write`, `payments/custom-provider.readonly`, `payments/custom-provider.write` _(+7 more)_ |
| **Products API** | 27 | `products.readonly`, `products.write`, `products/collection.readonly`, `products/collection.write` _(+2 more)_ |
| **Documents and Contracts API** | 4 |  |
| **Store API** | 18 |  |

## Detailed API Reference


---

## Invoice API

Documentation for invoice API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `POST` | `/invoices/template` | Create template | `invoices/template.write, invoices/template.write` |
| `GET` | `/invoices/template` | List templates | `invoices/template.readonly, invoices/template.readonly` |
| `GET` | `/invoices/template/{templateId}` | Get an template | `invoices/template.readonly, invoices/template.readonly` |
| `PUT` | `/invoices/template/{templateId}` | Update template | `invoices/template.write, invoices/template.write` |
| `DELETE` | `/invoices/template/{templateId}` | Delete template | `invoices/template.write, invoices/template.write` |
| `PATCH` | `/invoices/template/{templateId}/late-fees-configuration` | Update template late fees configuration | `—` |
| `PATCH` | `/invoices/template/{templateId}/payment-methods-configuration` | Update template late fees configuration | `—` |
| `POST` | `/invoices/schedule` | Create Invoice Schedule | `invoices/schedule.write, invoices/schedule.write` |
| `GET` | `/invoices/schedule` | List schedules | `invoices/schedule.readonly, invoices/schedule.readonly` |
| `GET` | `/invoices/schedule/{scheduleId}` | Get an schedule | `invoices/schedule.readonly, invoices/schedule.readonly` |
| `PUT` | `/invoices/schedule/{scheduleId}` | Update schedule | `invoices/schedule.write, invoices/schedule.write` |
| `DELETE` | `/invoices/schedule/{scheduleId}` | Delete schedule | `invoices/schedule.write, invoices/schedule.write` |
| `POST` | `/invoices/schedule/{scheduleId}/updateAndSchedule` | Update scheduled recurring invoice | `invoices/schedule.write, invoices/schedule.write` |
| `POST` | `/invoices/schedule/{scheduleId}/schedule` | Schedule an schedule invoice | `invoices/schedule.write, invoices/schedule.write` |
| `POST` | `/invoices/schedule/{scheduleId}/auto-payment` | Manage Auto payment for an schedule invoice | `invoices/schedule.write, invoices/schedule.write` |
| `POST` | `/invoices/schedule/{scheduleId}/cancel` | Cancel an scheduled invoice | `invoices/schedule.write, invoices/schedule.write` |
| `POST` | `/invoices/text2pay` | Create & Send | `invoices.write` |
| `GET` | `/invoices/generate-invoice-number` | Generate Invoice Number | `invoices.readonly, invoices.readonly` |
| `GET` | `/invoices/{invoiceId}` | Get invoice | `invoices.readonly, invoices.readonly` |
| `PUT` | `/invoices/{invoiceId}` | Update invoice | `invoices.write, invoices.write` |
| `DELETE` | `/invoices/{invoiceId}` | Delete invoice | `invoices.write, invoices.write` |
| `PATCH` | `/invoices/{invoiceId}/late-fees-configuration` | Update invoice late fees configuration | `—` |
| `POST` | `/invoices/{invoiceId}/void` | Void invoice | `invoices.write, invoices.write` |
| `POST` | `/invoices/{invoiceId}/send` | Send invoice | `invoices.write, invoices.write` |
| `POST` | `/invoices/{invoiceId}/record-payment` | Record a manual payment for an invoice | `invoices.write, invoices.write` |
| `PATCH` | `/invoices/stats/last-visited-at` | Update invoice last visited at | `—` |
| `POST` | `/invoices/estimate` | Create New Estimate | `invoices/estimate.write, invoices/estimate.write` |
| `PUT` | `/invoices/estimate/{estimateId}` | Update Estimate | `invoices/estimate.write, invoices/estimate.write` |
| `DELETE` | `/invoices/estimate/{estimateId}` | Delete Estimate | `invoices/estimate.write, invoices/estimate.write` |
| `GET` | `/invoices/estimate/number/generate` | Generate Estimate Number | `invoices/estimate.readonly, invoices/estimate.readonly` |
| `POST` | `/invoices/estimate/{estimateId}/send` | Send Estimate | `invoices/estimate.write, invoices/estimate.write` |
| `POST` | `/invoices/estimate/{estimateId}/invoice` | Create Invoice from Estimate | `invoices/estimate.write, invoices/estimate.write` |
| `GET` | `/invoices/estimate/list` | List Estimates | `invoices/estimate.readonly, invoices/estimate.readonly` |
| `PATCH` | `/invoices/estimate/stats/last-visited-at` | Update estimate last visited at | `—` |
| `GET` | `/invoices/estimate/template` | List Estimate Templates | `invoices/estimate.readonly, invoices/estimate.readonly` |
| `POST` | `/invoices/estimate/template` | Create Estimate Template | `invoices/estimate.write, invoices/estimate.write` |
| `PUT` | `/invoices/estimate/template/{templateId}` | Update Estimate Template | `invoices/estimate.write, invoices/estimate.write` |
| `DELETE` | `/invoices/estimate/template/{templateId}` | Delete Estimate Template | `invoices/estimate.write, invoices/estimate.write` |
| `GET` | `/invoices/estimate/template/preview` | Preview Estimate Template | `invoices/estimate.readonly, invoices/estimate.readonly` |
| `POST` | `/invoices/` | Create Invoice | `invoices.write, invoices.write` |
| `GET` | `/invoices/` | List invoices | `invoices.readonly, invoices.readonly` |

### POST Create template

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/template`

API to create a template

**Required Scope(s):** `invoices/template.write`, `invoices/template.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `internal` | `boolean` | No |  |  |
| `name` | `string` | Yes | Name of the template | New Template |
| `businessDetails` | `BusinessDetailsDto` | Yes |  |  |
| `currency` | `string` | Yes |  |  |
| `items` | `array[InvoiceItemDto]` | Yes |  |  |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice | True |
| `discount` | `DiscountDto` | No |  |  |
| `termsNotes` | `string` | No |  |  |
| `title` | `string` | No | Template title | New Template |
| `tipsConfiguration` | `object` | No | Configuration for tips on invoices |  |
| `lateFeesConfiguration` | `object` | No | Late fees configuration for the invoices |  |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number | INV- |
| `paymentMethods` | `object` | No | Payment Methods for Invoices |  |
| `attachments` | `array[string]` | No | attachments for the invoice |  |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the invoice |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Template Id | 6578278e879ad2646715ba9c |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the Template | New Template |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |
| `items` | `array[string]` | Yes | Invoice Items | [{'taxes': [], '_id': 'c6tZZU0rJBf30ZXx9Gli', 'productId': ' |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number | INV- |
| `total` | `number` | Yes | Total Amount | 999 |
| `createdAt` | `string` | Yes | created at | 2023-12-12T09:27:42.355Z |
| `updatedAt` | `string` | Yes | updated at | 2023-12-12T09:27:42.355Z |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/template' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "internal": false,
    "name": "New Template",
    "currency": "<currency>",
    "items": [],
    "automaticTaxesEnabled": true
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List templates

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/template`

API to get list of templates

**Required Scope(s):** `invoices/template.readonly`, `invoices/template.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType |  |
| `altType` | `string` | Yes | Alt Type |  |
| `status` | `string` | No | status to be filtered |  |
| `startAt` | `string` | No | startAt in YYYY-MM-DD format |  |
| `endAt` | `string` | No | endAt in YYYY-MM-DD format |  |
| `search` | `string` | No | To search for an invoice by id / name / email / phoneNo |  |
| `paymentMode` | `string` | No | payment mode |  |
| `limit` | `string` | Yes | Limit the number of items to return |  |
| `offset` | `string` | Yes | Number of items to skip |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[GetTemplateResponseDto]` | Yes |  |  |
| `totalCount` | `number` | Yes | Total number of Templates | 100 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/template' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get an template

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/template/{templateId}`

API to get an template by template id

**Required Scope(s):** `invoices/template.readonly`, `invoices/template.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `templateId` | `string` | Yes | Template Id |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType |  |
| `altType` | `string` | Yes | Alt Type |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Template Id | 6578278e879ad2646715ba9c |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the Template | New Template |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |
| `items` | `array[string]` | Yes | Invoice Items | [{'taxes': [], '_id': 'c6tZZU0rJBf30ZXx9Gli', 'productId': ' |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number | INV- |
| `total` | `number` | Yes | Total Amount | 999 |
| `createdAt` | `string` | Yes | created at | 2023-12-12T09:27:42.355Z |
| `updatedAt` | `string` | Yes | updated at | 2023-12-12T09:27:42.355Z |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/template/:<templateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update template

**Endpoint:** `PUT https://services.leadconnectorhq.com/invoices/template/{templateId}`

API to update an template by template id

**Required Scope(s):** `invoices/template.write`, `invoices/template.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `templateId` | `string` | Yes | Template Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `internal` | `boolean` | No |  |  |
| `name` | `string` | Yes | Name of the template | New Template |
| `businessDetails` | `BusinessDetailsDto` | Yes |  |  |
| `currency` | `string` | Yes |  |  |
| `items` | `array[InvoiceItemDto]` | Yes |  |  |
| `discount` | `DiscountDto` | No |  |  |
| `termsNotes` | `string` | No |  |  |
| `title` | `string` | No | Template title | New Template |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the invoice |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Template Id | 6578278e879ad2646715ba9c |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the Template | New Template |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |
| `items` | `array[string]` | Yes | Invoice Items | [{'taxes': [], '_id': 'c6tZZU0rJBf30ZXx9Gli', 'productId': ' |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number | INV- |
| `total` | `number` | Yes | Total Amount | 999 |
| `createdAt` | `string` | Yes | created at | 2023-12-12T09:27:42.355Z |
| `updatedAt` | `string` | Yes | updated at | 2023-12-12T09:27:42.355Z |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/invoices/template/:<templateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "internal": false,
    "name": "New Template",
    "currency": "<currency>",
    "items": []
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete template

**Endpoint:** `DELETE https://services.leadconnectorhq.com/invoices/template/{templateId}`

API to update an template by template id

**Required Scope(s):** `invoices/template.write`, `invoices/template.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `templateId` | `string` | Yes | Template Id |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType |  |
| `altType` | `string` | Yes | Alt Type |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | success | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/invoices/template/:<templateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PATCH Update template late fees configuration

**Endpoint:** `PATCH https://services.leadconnectorhq.com/invoices/template/{templateId}/late-fees-configuration`

API to update template late fees configuration by template id


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `templateId` | `string` | Yes | Template Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `lateFeesConfiguration` | `object` | Yes | late fees configuration |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Template Id | 6578278e879ad2646715ba9c |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the Template | New Template |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |
| `items` | `array[string]` | Yes | Invoice Items | [{'taxes': [], '_id': 'c6tZZU0rJBf30ZXx9Gli', 'productId': ' |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number | INV- |
| `total` | `number` | Yes | Total Amount | 999 |
| `createdAt` | `string` | Yes | created at | 2023-12-12T09:27:42.355Z |
| `updatedAt` | `string` | Yes | updated at | 2023-12-12T09:27:42.355Z |

**Sample Request**

```bash
curl -X PATCH \
  'https://services.leadconnectorhq.com/invoices/template/:<templateId>/late-fees-configuration' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PATCH Update template late fees configuration

**Endpoint:** `PATCH https://services.leadconnectorhq.com/invoices/template/{templateId}/payment-methods-configuration`

API to update template late fees configuration by template id


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `templateId` | `string` | Yes | Template Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `paymentMethods` | `object` | No | Payment Methods for Invoices |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Template Id | 6578278e879ad2646715ba9c |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the Template | New Template |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |
| `items` | `array[string]` | Yes | Invoice Items | [{'taxes': [], '_id': 'c6tZZU0rJBf30ZXx9Gli', 'productId': ' |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number | INV- |
| `total` | `number` | Yes | Total Amount | 999 |
| `createdAt` | `string` | Yes | created at | 2023-12-12T09:27:42.355Z |
| `updatedAt` | `string` | Yes | updated at | 2023-12-12T09:27:42.355Z |

**Sample Request**

```bash
curl -X PATCH \
  'https://services.leadconnectorhq.com/invoices/template/:<templateId>/payment-methods-configuration' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Invoice Schedule

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/schedule`

API to create an invoice Schedule

**Required Scope(s):** `invoices/schedule.write`, `invoices/schedule.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `name` | `string` | Yes |  |  |
| `contactDetails` | `ContactDetailsDto` | Yes |  |  |
| `schedule` | `ScheduleOptionsDto` | Yes |  |  |
| `liveMode` | `boolean` | Yes |  |  |
| `businessDetails` | `BusinessDetailsDto` | Yes |  |  |
| `currency` | `string` | Yes |  |  |
| `items` | `array[InvoiceItemDto]` | Yes |  |  |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice | True |
| `discount` | `DiscountDto` | Yes |  |  |
| `termsNotes` | `string` | No |  |  |
| `title` | `string` | No |  |  |
| `tipsConfiguration` | `object` | No | Configuration for tips on invoices |  |
| `lateFeesConfiguration` | `object` | No | Late fees configuration for the invoices |  |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number | INV- |
| `paymentMethods` | `object` | No | Payment Methods for Invoices |  |
| `attachments` | `array[AttachmentsDto]` | No | attachments for the invoice |  |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the invoice |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Schedule Id | 6578278e879ad2646715ba9c |
| `status` | `object` | Yes | Schedule Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `schedule` | `ScheduleOptionsDto` | No |  |  |
| `invoices` | `array[DefaultInvoiceResponseDto]` | Yes | List of invoices |  |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/schedule' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "name": "<name>",
    "liveMode": false,
    "currency": "<currency>"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List schedules

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/schedule`

API to get list of schedules

**Required Scope(s):** `invoices/schedule.readonly`, `invoices/schedule.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType |  |
| `altType` | `string` | Yes | Alt Type |  |
| `status` | `string` | No | status to be filtered |  |
| `startAt` | `string` | No | startAt in YYYY-MM-DD format |  |
| `endAt` | `string` | No | endAt in YYYY-MM-DD format |  |
| `search` | `string` | No | To search for an invoice by id / name / email / phoneNo |  |
| `paymentMode` | `string` | No | payment mode |  |
| `limit` | `string` | Yes | Limit the number of items to return |  |
| `offset` | `string` | Yes | Number of items to skip |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `schedules` | `array[GetScheduleResponseDto]` | Yes |  |  |
| `total` | `number` | Yes | Total number of Schedules | 100 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/schedule' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get an schedule

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/schedule/{scheduleId}`

API to get an schedule by schedule id

**Required Scope(s):** `invoices/schedule.readonly`, `invoices/schedule.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `scheduleId` | `string` | Yes | Schedule Id |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType |  |
| `altType` | `string` | Yes | Alt Type |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Schedule Id | 6578278e879ad2646715ba9c |
| `status` | `object` | Yes | Schedule Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `schedule` | `ScheduleOptionsDto` | No |  |  |
| `invoices` | `array[DefaultInvoiceResponseDto]` | Yes | List of invoices |  |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/schedule/:<scheduleId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update schedule

**Endpoint:** `PUT https://services.leadconnectorhq.com/invoices/schedule/{scheduleId}`

API to update an schedule by schedule id

**Required Scope(s):** `invoices/schedule.write`, `invoices/schedule.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `scheduleId` | `string` | Yes | Schedule Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `name` | `string` | Yes |  |  |
| `contactDetails` | `ContactDetailsDto` | Yes |  |  |
| `schedule` | `ScheduleOptionsDto` | Yes |  |  |
| `liveMode` | `boolean` | Yes |  |  |
| `businessDetails` | `BusinessDetailsDto` | Yes |  |  |
| `currency` | `string` | Yes |  |  |
| `items` | `array[InvoiceItemDto]` | Yes |  |  |
| `discount` | `DiscountDto` | Yes |  |  |
| `termsNotes` | `string` | No |  |  |
| `title` | `string` | No |  |  |
| `attachments` | `array[AttachmentsDto]` | No | attachments for the invoice |  |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the invoice |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Schedule Id | 6578278e879ad2646715ba9c |
| `status` | `object` | Yes | Schedule Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `schedule` | `ScheduleOptionsDto` | No |  |  |
| `invoices` | `array[DefaultInvoiceResponseDto]` | Yes | List of invoices |  |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/invoices/schedule/:<scheduleId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "name": "<name>",
    "liveMode": false,
    "currency": "<currency>"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete schedule

**Endpoint:** `DELETE https://services.leadconnectorhq.com/invoices/schedule/{scheduleId}`

API to delete an schedule by schedule id

**Required Scope(s):** `invoices/schedule.write`, `invoices/schedule.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `scheduleId` | `string` | Yes | Schedule Id |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType |  |
| `altType` | `string` | Yes | Alt Type |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | success | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/invoices/schedule/:<scheduleId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Update scheduled recurring invoice

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/schedule/{scheduleId}/updateAndSchedule`

API to update scheduled recurring invoice

**Required Scope(s):** `invoices/schedule.write`, `invoices/schedule.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `scheduleId` | `string` | Yes | Schedule Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Schedule Id | 6578278e879ad2646715ba9c |
| `status` | `object` | Yes | Schedule Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `schedule` | `ScheduleOptionsDto` | No |  |  |
| `invoices` | `array[DefaultInvoiceResponseDto]` | Yes | List of invoices |  |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/schedule/:<scheduleId>/updateAndSchedule' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Schedule an schedule invoice

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/schedule/{scheduleId}/schedule`

API to schedule an schedule invoice to start sending to the customer

**Required Scope(s):** `invoices/schedule.write`, `invoices/schedule.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `scheduleId` | `string` | Yes | Schedule Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `liveMode` | `boolean` | Yes |  |  |
| `autoPayment` | `object` | No | auto-payment configuration |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Schedule Id | 6578278e879ad2646715ba9c |
| `status` | `object` | Yes | Schedule Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `schedule` | `ScheduleOptionsDto` | No |  |  |
| `invoices` | `array[DefaultInvoiceResponseDto]` | Yes | List of invoices |  |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/schedule/:<scheduleId>/schedule' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "liveMode": false
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Manage Auto payment for an schedule invoice

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/schedule/{scheduleId}/auto-payment`

API to manage auto payment for a schedule

**Required Scope(s):** `invoices/schedule.write`, `invoices/schedule.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `scheduleId` | `string` | Yes | Schedule Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `id` | `string` | Yes |  |  |
| `autoPayment` | `object` | Yes | auto-payment configuration |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Schedule Id | 6578278e879ad2646715ba9c |
| `status` | `object` | Yes | Schedule Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `schedule` | `ScheduleOptionsDto` | No |  |  |
| `invoices` | `array[DefaultInvoiceResponseDto]` | Yes | List of invoices |  |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/schedule/:<scheduleId>/auto-payment' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "id": "<id>"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Cancel an scheduled invoice

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/schedule/{scheduleId}/cancel`

API to cancel a scheduled invoice by schedule id

**Required Scope(s):** `invoices/schedule.write`, `invoices/schedule.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `scheduleId` | `string` | Yes | Schedule Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Schedule Id | 6578278e879ad2646715ba9c |
| `status` | `object` | Yes | Schedule Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `schedule` | `ScheduleOptionsDto` | No |  |  |
| `invoices` | `array[DefaultInvoiceResponseDto]` | Yes | List of invoices |  |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `discount` | `object` | No | Discount | {'type': 'percentage', 'value': 0} |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/schedule/:<scheduleId>/cancel' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create & Send

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/text2pay`

API to create or update a text2pay invoice

**Required Scope(s):** `invoices.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `name` | `string` | Yes | Invoice Name | New Invoice |
| `currency` | `string` | Yes | Currency code | USD |
| `items` | `array[InvoiceItemDto]` | Yes | An array of items for the invoice. |  |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups | <p>This is a default terms.</p> |
| `title` | `string` | No | Title for the invoice | INVOICE |
| `contactDetails` | `object` | Yes | Contact information to send the invoice to |  |
| `invoiceNumber` | `string` | No | Invoice Number | 1001 |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format | 2023-01-01 |
| `dueDate` | `string` | No | Due date in YYYY-MM-DD format | 2023-01-14 |
| `sentTo` | `SentToDto` | Yes |  |  |
| `liveMode` | `boolean` | Yes |  |  |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice | True |
| `paymentSchedule` | `object` | No | split invoice into payment schedule summing up to full invoice amount |  |
| `lateFeesConfiguration` | `object` | No | late fees configuration |  |
| `tipsConfiguration` | `object` | No | tips configuration for the invoice |  |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number | INV- |
| `paymentMethods` | `object` | No | Payment Methods for Invoices |  |
| `attachments` | `array[AttachmentsDto]` | No | attachments for the invoice |  |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the invoice |  |
| `id` | `string` | No | id of invoice to update. If skipped, a new invoice will be created |  |
| `includeTermsNote` | `boolean` | No | include terms & notes with receipts | True |
| `action` | `string` | Yes | create invoice in draft mode or send mode | draft |
| `userId` | `string` | Yes | id of user generating invoice |  |
| `discount` | `DiscountDto` | No |  |  |
| `businessDetails` | `BusinessDetailsDto` | No |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `invoice` | `DefaultInvoiceResponseDto` | Yes |  |  |
| `invoiceUrl` | `string` | Yes | preview url of generated invoice |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/text2pay' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "name": "New Invoice",
    "currency": "USD",
    "items": [],
    "termsNotes": "<p>This is a default terms.</p>",
    "title": "INVOICE"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Generate Invoice Number

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/generate-invoice-number`

Get the next invoice number for the given location

**Required Scope(s):** `invoices.readonly`, `invoices.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id |  |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `invoiceNumber` | `number` | No | Invoice Number | 19 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/generate-invoice-number' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get invoice

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/{invoiceId}`

API to get invoice by invoice id

**Required Scope(s):** `invoices.readonly`, `invoices.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `invoiceId` | `string` | Yes | Invoice Id |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType |  |
| `altType` | `string` | Yes | Alt Type |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Invoice Id | 6578278e879ad2646715ba9c |
| `status` | `string` | Yes | Invoice Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `amountPaid` | `number` | Yes | Amount Paid | 0 |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `invoiceNumber` | `number` | Yes | Invoice Number | 19 |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format | 2023-01-01 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/:<invoiceId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update invoice

**Endpoint:** `PUT https://services.leadconnectorhq.com/invoices/{invoiceId}`

API to update invoice by invoice id

**Required Scope(s):** `invoices.write`, `invoices.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `invoiceId` | `string` | Yes | Invoice Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `name` | `string` | Yes | Name to be updated | New Invoice |
| `title` | `string` | No | Title for the invoice | INVOICE |
| `currency` | `string` | Yes | Currency | USD |
| `description` | `string` | No | Description | ABC Corp payments |
| `businessDetails` | `object` | No | Business details which need to be updated | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `invoiceNumber` | `string` | No | Invoice Number | 1001 |
| `contactId` | `string` | No | Id of the contact which you need to send the invoice | 6578278e879ad2646715ba9c |
| `contactDetails` | `ContactDetailsDto` | No |  |  |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups | <p>This is a default terms.</p> |
| `discount` | `DiscountDto` | No |  |  |
| `invoiceItems` | `array[InvoiceItemDto]` | Yes |  |  |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice | True |
| `liveMode` | `boolean` | No | Payment mode |  |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format | 2023-01-01 |
| `dueDate` | `string` | Yes | Due date in YYYY-MM-DD format | 2023-01-14 |
| `paymentSchedule` | `object` | No | split invoice into payment schedule summing up to full invoice amount |  |
| `tipsConfiguration` | `object` | No | tips configuration for the invoice |  |
| `xeroDetails` | `object` | No |  |  |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number | INV- |
| `paymentMethods` | `object` | No | Payment Methods for Invoices |  |
| `attachments` | `array[AttachmentsDto]` | No | attachments for the invoice |  |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the invoice |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Invoice Id | 6578278e879ad2646715ba9c |
| `status` | `string` | Yes | Invoice Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `amountPaid` | `number` | Yes | Amount Paid | 0 |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `invoiceNumber` | `number` | Yes | Invoice Number | 19 |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format | 2023-01-01 |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/invoices/:<invoiceId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "name": "New Invoice",
    "title": "INVOICE",
    "currency": "USD",
    "description": "ABC Corp payments",
    "businessDetails": {
        "name": "Alex",
        "address": {
            "addressLine1": "9931 Beechwood",
            "city": "St. Houston",
            "state": "TX",
            "countryCode": "USA",
            "postalCode": "559-6993"
        },
        "phoneNo": "+1-214-559-6993",
        "website": "www.example.com"
    },
    "invoiceNumber": "1001"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete invoice

**Endpoint:** `DELETE https://services.leadconnectorhq.com/invoices/{invoiceId}`

API to delete invoice by invoice id

**Required Scope(s):** `invoices.write`, `invoices.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `invoiceId` | `string` | Yes | Invoice Id |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType |  |
| `altType` | `string` | Yes | Alt Type |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Invoice Id | 6578278e879ad2646715ba9c |
| `status` | `string` | Yes | Invoice Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `amountPaid` | `number` | Yes | Amount Paid | 0 |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `invoiceNumber` | `number` | Yes | Invoice Number | 19 |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format | 2023-01-01 |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/invoices/:<invoiceId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PATCH Update invoice late fees configuration

**Endpoint:** `PATCH https://services.leadconnectorhq.com/invoices/{invoiceId}/late-fees-configuration`

API to update invoice late fees configuration by invoice id


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `invoiceId` | `string` | Yes | Invoice Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `lateFeesConfiguration` | `object` | Yes | late fees configuration |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Invoice Id | 6578278e879ad2646715ba9c |
| `status` | `string` | Yes | Invoice Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `amountPaid` | `number` | Yes | Amount Paid | 0 |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `invoiceNumber` | `number` | Yes | Invoice Number | 19 |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format | 2023-01-01 |

**Sample Request**

```bash
curl -X PATCH \
  'https://services.leadconnectorhq.com/invoices/:<invoiceId>/late-fees-configuration' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Void invoice

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/{invoiceId}/void`

API to delete invoice by invoice id

**Required Scope(s):** `invoices.write`, `invoices.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `invoiceId` | `string` | Yes | Invoice Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Invoice Id | 6578278e879ad2646715ba9c |
| `status` | `string` | Yes | Invoice Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `amountPaid` | `number` | Yes | Amount Paid | 0 |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `invoiceNumber` | `number` | Yes | Invoice Number | 19 |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format | 2023-01-01 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/:<invoiceId>/void' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Send invoice

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/{invoiceId}/send`

API to send invoice by invoice id

**Required Scope(s):** `invoices.write`, `invoices.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `invoiceId` | `string` | Yes | Invoice Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `userId` | `string` | Yes | Please ensure that the UserId corresponds to an authorized personnel, either by an employee ID or ag | 6578278e879ad2646715ba9c |
| `action` | `string` | Yes |  |  |
| `liveMode` | `boolean` | Yes |  |  |
| `sentFrom` | `object` | No | sender details for invoice, valid only if invoice is not sent manually |  |
| `autoPayment` | `object` | No | auto-payment configuration |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `invoice` | `DefaultInvoiceResponseDto` | Yes |  |  |
| `smsData` | `object` | Yes |  |  |
| `emailData` | `object` | Yes |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/:<invoiceId>/send' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "userId": "6578278e879ad2646715ba9c",
    "action": "<action>",
    "liveMode": false
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Record a manual payment for an invoice

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/{invoiceId}/record-payment`

API to record manual payment for an invoice by invoice id

**Required Scope(s):** `invoices.write`, `invoices.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `invoiceId` | `string` | Yes | Invoice Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `mode` | `string` | Yes | manual payment method | card |
| `card` | `CardDto` | Yes |  |  |
| `cheque` | `ChequeDto` | Yes |  |  |
| `notes` | `string` | Yes | Any note to be recorded with the transaction | This was a direct payment |
| `amount` | `number` | No | Amount to be paid against the invoice. | 999 |
| `meta` | `object` | No |  |  |
| `paymentScheduleIds` | `array[string]` | No | Payment Schedule Ids to be recorded against the invoice. | ['6578278e879ad2646715ba9c'] |
| `fulfilledAt` | `string` | No | Updated At to be recorded against the invoice. | 2025-03-19T05:03:00.000Z |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | status | True |
| `invoice` | `DefaultInvoiceResponseDto` | Yes |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/:<invoiceId>/record-payment' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "mode": "card",
    "notes": "This was a direct payment",
    "amount": 999
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PATCH Update invoice last visited at

**Endpoint:** `PATCH https://services.leadconnectorhq.com/invoices/stats/last-visited-at`

API to update invoice last visited at by invoice id


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `invoiceId` | `string` | Yes | Invoice Id | 6578278e879ad2646715ba9c |

**Sample Request**

```bash
curl -X PATCH \
  'https://services.leadconnectorhq.com/invoices/stats/last-visited-at' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "invoiceId": "6578278e879ad2646715ba9c"
}'
```

**Response Codes:** `200` | `400` | `401`


### POST Create New Estimate

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/estimate`

Create a new estimate with the provided details

**Required Scope(s):** `invoices/estimate.write`, `invoices/estimate.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Estimate Name | Home Service Estimate |
| `businessDetails` | `BusinessDetailsDto` | Yes |  |  |
| `currency` | `string` | Yes | Currency code | USD |
| `items` | `array[InvoiceItemDto]` | Yes | An array of items for the estimate. |  |
| `liveMode` | `boolean` | No | livemode for estimate | True |
| `discount` | `DiscountDto` | Yes |  |  |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups | <p>This is a default terms.</p> |
| `title` | `string` | No | Title for the estimate | ESTIMATE |
| `contactDetails` | `object` | Yes | Contact information to send the estimate to |  |
| `estimateNumber` | `number` | No | Estimate Number, if not specified will take in the next valid estimate number | 1001 |
| `issueDate` | `string` | No | issue date estimate | 2024-08-07 |
| `expiryDate` | `string` | No | expiry date estimate | 2024-08-10 |
| `sentTo` | `object` | No | Email and sent to details for the estimate |  |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Estimate | True |
| `meta` | `object` | No | Meta data for the estimate | {'key': 'value'} |
| `sendEstimateDetails` | `object` | No | When sending estimate directly while saving |  |
| `frequencySettings` | `object` | Yes | frequency settings for the estimate |  |
| `estimateNumberPrefix` | `string` | No | Prefix for the estimate number | EST- |
| `userId` | `string` | No | User Id | 6578278e879ad2646715ba9c |
| `attachments` | `array[AttachmentsDto]` | No | attachments for the invoice |  |
| `autoInvoice` | `object` | No | Auto invoice for the estimate | {'enabled': True, 'directPayments': True} |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the estimate |  |
| `paymentScheduleConfig` | `object` | No | Payment Schedule Config for the estimate |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `_id` | `string` | Yes | Unique identifier | 67ac9a51106ee8311e911XXXX |
| `liveMode` | `boolean` | Yes | Indicates if it is in live mode | True |
| `deleted` | `boolean` | Yes | Indicates if deleted | False |
| `name` | `string` | Yes | Name | Estimate Name |
| `currency` | `string` | Yes | Currency code | USD |
| `businessDetails` | `object` | Yes | Business details associated with the estimate | {'logoUrl': 'your_image-url', 'name': 'Business name', 'addr |
| `items` | `array[array]` | Yes | An array of items | [{'taxes': [], 'taxInclusive': False, '_id': '67ac9a51106ee8 |
| `discount` | `object` | Yes | Discount details for the estimate template | {'type': 'percentage', 'value': 0} |
| `title` | `string` | No | Title | ESTIMATE |
| `estimateNumberPrefix` | `string` | No | Estimate number prefix | EST- |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/estimate' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "name": "Home Service Estimate",
    "currency": "USD",
    "items": [],
    "liveMode": true
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### PUT Update Estimate

**Endpoint:** `PUT https://services.leadconnectorhq.com/invoices/estimate/{estimateId}`

Update an existing estimate with new details

**Required Scope(s):** `invoices/estimate.write`, `invoices/estimate.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `estimateId` | `string` | Yes | Estimate Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Estimate Name | Home Service Estimate |
| `businessDetails` | `BusinessDetailsDto` | Yes |  |  |
| `currency` | `string` | Yes | Currency code | USD |
| `items` | `array[InvoiceItemDto]` | Yes | An array of items for the estimate. |  |
| `liveMode` | `boolean` | No | livemode for estimate | True |
| `discount` | `DiscountDto` | Yes |  |  |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups | <p>This is a default terms.</p> |
| `title` | `string` | No | Title for the estimate | ESTIMATE |
| `contactDetails` | `object` | Yes | Contact information to send the estimate to |  |
| `estimateNumber` | `number` | No | Estimate Number, if not specified will take in the next valid estimate number | 1001 |
| `issueDate` | `string` | No | issue date estimate | 2024-08-07 |
| `expiryDate` | `string` | No | expiry date estimate | 2024-08-10 |
| `sentTo` | `object` | No | Email and sent to details for the estimate |  |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Estimate | True |
| `meta` | `object` | No | Meta data for the estimate | {'key': 'value'} |
| `sendEstimateDetails` | `object` | No | When sending estimate directly while saving |  |
| `frequencySettings` | `object` | Yes | frequency settings for the estimate |  |
| `estimateNumberPrefix` | `string` | No | Prefix for the estimate number | EST- |
| `userId` | `string` | No | User Id | 6578278e879ad2646715ba9c |
| `attachments` | `array[AttachmentsDto]` | No | attachments for the invoice |  |
| `autoInvoice` | `object` | No | Auto invoice for the estimate | {'enabled': True, 'directPayments': True} |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the estimate |  |
| `paymentScheduleConfig` | `object` | No | Payment Schedule Config for the estimate |  |
| `estimateStatus` | `string` | No | Estimate Status | sent |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `_id` | `string` | Yes | Unique identifier | 67ac9a51106ee8311e911XXXX |
| `liveMode` | `boolean` | Yes | Indicates if it is in live mode | True |
| `deleted` | `boolean` | Yes | Indicates if deleted | False |
| `name` | `string` | Yes | Name | Estimate Name |
| `currency` | `string` | Yes | Currency code | USD |
| `businessDetails` | `object` | Yes | Business details associated with the estimate | {'logoUrl': 'your_image-url', 'name': 'Business name', 'addr |
| `items` | `array[array]` | Yes | An array of items | [{'taxes': [], 'taxInclusive': False, '_id': '67ac9a51106ee8 |
| `discount` | `object` | Yes | Discount details for the estimate template | {'type': 'percentage', 'value': 0} |
| `title` | `string` | No | Title | ESTIMATE |
| `estimateNumberPrefix` | `string` | No | Estimate number prefix | EST- |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/invoices/estimate/:<estimateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "name": "Home Service Estimate",
    "currency": "USD",
    "items": [],
    "liveMode": true
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Estimate

**Endpoint:** `DELETE https://services.leadconnectorhq.com/invoices/estimate/{estimateId}`

Delete an existing estimate

**Required Scope(s):** `invoices/estimate.write`, `invoices/estimate.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `estimateId` | `string` | Yes | Estimate Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `_id` | `string` | Yes | Unique identifier | 67ac9a51106ee8311e911XXXX |
| `liveMode` | `boolean` | Yes | Indicates if it is in live mode | True |
| `deleted` | `boolean` | Yes | Indicates if deleted | False |
| `name` | `string` | Yes | Name | Estimate Name |
| `currency` | `string` | Yes | Currency code | USD |
| `businessDetails` | `object` | Yes | Business details associated with the estimate | {'logoUrl': 'your_image-url', 'name': 'Business name', 'addr |
| `items` | `array[array]` | Yes | An array of items | [{'taxes': [], 'taxInclusive': False, '_id': '67ac9a51106ee8 |
| `discount` | `object` | Yes | Discount details for the estimate template | {'type': 'percentage', 'value': 0} |
| `title` | `string` | No | Title | ESTIMATE |
| `estimateNumberPrefix` | `string` | No | Estimate number prefix | EST- |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/invoices/estimate/:<estimateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Generate Estimate Number

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/estimate/number/generate`

Get the next estimate number for the given location

**Required Scope(s):** `invoices/estimate.readonly`, `invoices/estimate.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `estimateNumber` | `number` | Yes |  |  |
| `traceId` | `string` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/estimate/number/generate' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Send Estimate

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/estimate/{estimateId}/send`

API to send estimate by estimate id

**Required Scope(s):** `invoices/estimate.write`, `invoices/estimate.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `estimateId` | `string` | Yes | Estimate Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `action` | `string` | Yes |  |  |
| `liveMode` | `boolean` | Yes | livemode for estimate | True |
| `userId` | `string` | Yes | Please ensure that the UserId corresponds to an authorized personnel, either by an employee ID or ag | 6578278e879ad2646715ba9c |
| `sentFrom` | `object` | No | sender details for invoice, valid only if invoice is not sent manually |  |
| `estimateName` | `string` | No | estimate name | Estimate |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `_id` | `string` | Yes | Unique identifier | 67ac9a51106ee8311e911XXXX |
| `liveMode` | `boolean` | Yes | Indicates if it is in live mode | True |
| `deleted` | `boolean` | Yes | Indicates if deleted | False |
| `name` | `string` | Yes | Name | Estimate Name |
| `currency` | `string` | Yes | Currency code | USD |
| `businessDetails` | `object` | Yes | Business details associated with the estimate | {'logoUrl': 'your_image-url', 'name': 'Business name', 'addr |
| `items` | `array[array]` | Yes | An array of items | [{'taxes': [], 'taxInclusive': False, '_id': '67ac9a51106ee8 |
| `discount` | `object` | Yes | Discount details for the estimate template | {'type': 'percentage', 'value': 0} |
| `title` | `string` | No | Title | ESTIMATE |
| `estimateNumberPrefix` | `string` | No | Estimate number prefix | EST- |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/estimate/:<estimateId>/send' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "action": "<action>",
    "liveMode": true,
    "userId": "6578278e879ad2646715ba9c",
    "estimateName": "Estimate"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### POST Create Invoice from Estimate

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/estimate/{estimateId}/invoice`

Create a new invoice from an existing estimate

**Required Scope(s):** `invoices/estimate.write`, `invoices/estimate.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `estimateId` | `string` | Yes | Estimate Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `markAsInvoiced` | `boolean` | Yes | Mark Estimate as Invoiced | True |
| `version` | `string` | No | Version of the update request | v2 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `estimate` | `object` | Yes | Estimate details |  |
| `invoice` | `object` | Yes | Invoice details |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/estimate/:<estimateId>/invoice' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "markAsInvoiced": true,
    "version": "v2"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List Estimates

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/estimate/list`

Get a paginated list of estimates

**Required Scope(s):** `invoices/estimate.readonly`, `invoices/estimate.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `startAt` | `string` | No | startAt in YYYY-MM-DD format |  |
| `endAt` | `string` | No | endAt in YYYY-MM-DD format |  |
| `search` | `string` | No | search text for estimates name |  |
| `status` | `string` | No | estimate status |  |
| `contactId` | `string` | No | Contact ID for the estimate |  |
| `limit` | `string` | Yes | Limit the number of items to return |  |
| `offset` | `string` | Yes | Number of items to skip |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `estimates` | `array[string]` | Yes | List of estimates |  |
| `total` | `number` | Yes | Total number of estimates |  |
| `traceId` | `string` | Yes | Unique identifier for tracing the request |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/estimate/list' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PATCH Update estimate last visited at

**Endpoint:** `PATCH https://services.leadconnectorhq.com/invoices/estimate/stats/last-visited-at`

API to update estimate last visited at by estimate id


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `estimateId` | `string` | Yes | Estimate Id | 5f9d6d8b1b2d2c001f2d9e4b |

**Sample Request**

```bash
curl -X PATCH \
  'https://services.leadconnectorhq.com/invoices/estimate/stats/last-visited-at' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "estimateId": "5f9d6d8b1b2d2c001f2d9e4b"
}'
```

**Response Codes:** `200` | `400` | `401`


### GET List Estimate Templates

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/estimate/template`

Get a list of estimate templates or a specific template by ID

**Required Scope(s):** `invoices/estimate.readonly`, `invoices/estimate.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `search` | `string` | No | To search for an estimate template by id / name |  |
| `limit` | `string` | Yes | Limit the number of items to return |  |
| `offset` | `string` | Yes | Number of items to skip |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[string]` | Yes | List of estimate templates |  |
| `totalCount` | `number` | Yes | Total number of estimate templates available |  |
| `traceId` | `string` | Yes | Unique identifier for tracing the request |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/estimate/template' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Estimate Template

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/estimate/template`

Create a new estimate template

**Required Scope(s):** `invoices/estimate.write`, `invoices/estimate.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Estimate Name | Home Service Estimate Template |
| `businessDetails` | `BusinessDetailsDto` | Yes |  |  |
| `currency` | `string` | Yes | Currency code | USD |
| `items` | `array[array]` | Yes | An array of items for the estimate. |  |
| `liveMode` | `boolean` | No | livemode for estimate | True |
| `discount` | `DiscountDto` | Yes |  |  |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups | <p>This is a default terms.</p> |
| `title` | `string` | No | Title for the estimate | ESTIMATE |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Estimate | True |
| `meta` | `object` | No | Meta data for the estimate | {'key': 'value'} |
| `sendEstimateDetails` | `object` | No | When sending estimate directly while saving |  |
| `estimateNumberPrefix` | `string` | No | Prefix for the estimate number | EST- |
| `attachments` | `array[AttachmentsDto]` | No | attachments for the invoice |  |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the estimate |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `_id` | `string` | Yes | Unique identifier | 67ac9a51106ee8311e911XXXX |
| `liveMode` | `boolean` | Yes | Indicates if it is in live mode | True |
| `deleted` | `boolean` | Yes | Indicates if deleted | False |
| `name` | `string` | Yes | Name | Estimate Name |
| `currency` | `string` | Yes | Currency code | USD |
| `businessDetails` | `object` | Yes | Business details associated with the estimate | {'logoUrl': 'your_image-url', 'name': 'Business name', 'addr |
| `items` | `array[array]` | Yes | An array of items | [{'taxes': [], 'taxInclusive': False, '_id': '67ac9a51106ee8 |
| `discount` | `object` | Yes | Discount details for the estimate template | {'type': 'percentage', 'value': 0} |
| `title` | `string` | No | Title | ESTIMATE |
| `estimateNumberPrefix` | `string` | No | Estimate number prefix | EST- |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/estimate/template' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "name": "Home Service Estimate Template",
    "currency": "USD",
    "items": [],
    "liveMode": true
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### PUT Update Estimate Template

**Endpoint:** `PUT https://services.leadconnectorhq.com/invoices/estimate/template/{templateId}`

Update an existing estimate template

**Required Scope(s):** `invoices/estimate.write`, `invoices/estimate.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `templateId` | `string` | Yes | Template Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Estimate Name | Home Service Estimate Template |
| `businessDetails` | `BusinessDetailsDto` | Yes |  |  |
| `currency` | `string` | Yes | Currency code | USD |
| `items` | `array[array]` | Yes | An array of items for the estimate. |  |
| `liveMode` | `boolean` | No | livemode for estimate | True |
| `discount` | `DiscountDto` | Yes |  |  |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups | <p>This is a default terms.</p> |
| `title` | `string` | No | Title for the estimate | ESTIMATE |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Estimate | True |
| `meta` | `object` | No | Meta data for the estimate | {'key': 'value'} |
| `sendEstimateDetails` | `object` | No | When sending estimate directly while saving |  |
| `estimateNumberPrefix` | `string` | No | Prefix for the estimate number | EST- |
| `attachments` | `array[AttachmentsDto]` | No | attachments for the invoice |  |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the estimate |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `_id` | `string` | Yes | Unique identifier | 67ac9a51106ee8311e911XXXX |
| `liveMode` | `boolean` | Yes | Indicates if it is in live mode | True |
| `deleted` | `boolean` | Yes | Indicates if deleted | False |
| `name` | `string` | Yes | Name | Estimate Name |
| `currency` | `string` | Yes | Currency code | USD |
| `businessDetails` | `object` | Yes | Business details associated with the estimate | {'logoUrl': 'your_image-url', 'name': 'Business name', 'addr |
| `items` | `array[array]` | Yes | An array of items | [{'taxes': [], 'taxInclusive': False, '_id': '67ac9a51106ee8 |
| `discount` | `object` | Yes | Discount details for the estimate template | {'type': 'percentage', 'value': 0} |
| `title` | `string` | No | Title | ESTIMATE |
| `estimateNumberPrefix` | `string` | No | Estimate number prefix | EST- |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/invoices/estimate/template/:<templateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "name": "Home Service Estimate Template",
    "currency": "USD",
    "items": [],
    "liveMode": true
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Estimate Template

**Endpoint:** `DELETE https://services.leadconnectorhq.com/invoices/estimate/template/{templateId}`

Delete an existing estimate template

**Required Scope(s):** `invoices/estimate.write`, `invoices/estimate.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `templateId` | `string` | Yes | Template Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `_id` | `string` | Yes | Unique identifier | 67ac9a51106ee8311e911XXXX |
| `liveMode` | `boolean` | Yes | Indicates if it is in live mode | True |
| `deleted` | `boolean` | Yes | Indicates if deleted | False |
| `name` | `string` | Yes | Name | Estimate Name |
| `currency` | `string` | Yes | Currency code | USD |
| `businessDetails` | `object` | Yes | Business details associated with the estimate | {'logoUrl': 'your_image-url', 'name': 'Business name', 'addr |
| `items` | `array[array]` | Yes | An array of items | [{'taxes': [], 'taxInclusive': False, '_id': '67ac9a51106ee8 |
| `discount` | `object` | Yes | Discount details for the estimate template | {'type': 'percentage', 'value': 0} |
| `title` | `string` | No | Title | ESTIMATE |
| `estimateNumberPrefix` | `string` | No | Estimate number prefix | EST- |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/invoices/estimate/template/:<templateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Preview Estimate Template

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/estimate/template/preview`

Get a preview of an estimate template

**Required Scope(s):** `invoices/estimate.readonly`, `invoices/estimate.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `templateId` | `string` | Yes | Template Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `_id` | `string` | Yes | Unique identifier | 67ac9a51106ee8311e911XXXX |
| `liveMode` | `boolean` | Yes | Indicates if it is in live mode | True |
| `deleted` | `boolean` | Yes | Indicates if deleted | False |
| `name` | `string` | Yes | Name | Estimate Name |
| `currency` | `string` | Yes | Currency code | USD |
| `businessDetails` | `object` | Yes | Business details associated with the estimate | {'logoUrl': 'your_image-url', 'name': 'Business name', 'addr |
| `items` | `array[array]` | Yes | An array of items | [{'taxes': [], 'taxInclusive': False, '_id': '67ac9a51106ee8 |
| `discount` | `object` | Yes | Discount details for the estimate template | {'type': 'percentage', 'value': 0} |
| `title` | `string` | No | Title | ESTIMATE |
| `estimateNumberPrefix` | `string` | No | Estimate number prefix | EST- |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/estimate/template/preview' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Invoice

**Endpoint:** `POST https://services.leadconnectorhq.com/invoices/`

API to create an invoice

**Required Scope(s):** `invoices.write`, `invoices.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `name` | `string` | Yes | Invoice Name | New Invoice |
| `businessDetails` | `BusinessDetailsDto` | Yes |  |  |
| `currency` | `string` | Yes | Currency code | USD |
| `items` | `array[InvoiceItemDto]` | Yes | An array of items for the invoice. |  |
| `discount` | `DiscountDto` | Yes |  |  |
| `termsNotes` | `string` | No | Terms notes, Also supports HTML markups | <p>This is a default terms.</p> |
| `title` | `string` | No | Title for the invoice | INVOICE |
| `contactDetails` | `object` | Yes | Contact information to send the invoice to |  |
| `invoiceNumber` | `string` | No | Invoice Number | 1001 |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format | 2023-01-01 |
| `dueDate` | `string` | No | Due date in YYYY-MM-DD format | 2023-01-14 |
| `sentTo` | `SentToDto` | Yes |  |  |
| `liveMode` | `boolean` | Yes |  |  |
| `automaticTaxesEnabled` | `boolean` | No | Automatic taxes enabled for the Invoice | True |
| `paymentSchedule` | `object` | No | split invoice into payment schedule summing up to full invoice amount |  |
| `lateFeesConfiguration` | `object` | No | late fees configuration |  |
| `tipsConfiguration` | `object` | No | tips configuration for the invoice |  |
| `invoiceNumberPrefix` | `string` | No | prefix for invoice number | INV- |
| `paymentMethods` | `object` | No | Payment Methods for Invoices |  |
| `attachments` | `array[AttachmentsDto]` | No | attachments for the invoice |  |
| `miscellaneousCharges` | `object` | No | miscellaneous charges for the invoice |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Invoice Id | 6578278e879ad2646715ba9c |
| `status` | `string` | Yes | Invoice Status | draft |
| `liveMode` | `boolean` | Yes | Live Mode | False |
| `amountPaid` | `number` | Yes | Amount Paid | 0 |
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the invoice | New Invoice |
| `businessDetails` | `object` | Yes | Business Details | {'name': 'Alex', 'address': {'addressLine1': '9931 Beechwood |
| `invoiceNumber` | `number` | Yes | Invoice Number | 19 |
| `currency` | `string` | Yes | Currency | USD |
| `contactDetails` | `object` | Yes | Contact Details | {'id': 'c6tZZU0rJBf30ZXx9Gli', 'phoneNo': '+1-214-559-6993', |
| `issueDate` | `string` | Yes | Issue date in YYYY-MM-DD format | 2023-01-01 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/invoices/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "name": "New Invoice",
    "currency": "USD",
    "items": [],
    "termsNotes": "<p>This is a default terms.</p>"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List invoices

**Endpoint:** `GET https://services.leadconnectorhq.com/invoices/`

API to get list of invoices

**Required Scope(s):** `invoices.readonly`, `invoices.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType |  |
| `altType` | `string` | Yes | Alt Type |  |
| `status` | `string` | No | status to be filtered |  |
| `startAt` | `string` | No | startAt in YYYY-MM-DD format |  |
| `endAt` | `string` | No | endAt in YYYY-MM-DD format |  |
| `search` | `string` | No | To search for an invoice by id / name / email / phoneNo |  |
| `paymentMode` | `string` | No | payment mode |  |
| `contactId` | `string` | No | Contact ID for the invoice |  |
| `limit` | `string` | Yes | Limit the number of items to return |  |
| `offset` | `string` | Yes | Number of items to skip |  |
| `sortField` | `string` | No | The field on which sorting should be applied |  |
| `sortOrder` | `string` | No | The order of sort which should be applied for the sortField |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `invoices` | `array[GetInvoiceResponseDto]` | Yes |  |  |
| `total` | `number` | Yes | Total number of invoices | 100 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/invoices/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


---

## Opportunities API

Documentation for Opportunities API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/opportunities/search` | Search Opportunity | `opportunities.readonly` |
| `GET` | `/opportunities/pipelines` | Get Pipelines | `opportunities.readonly` |
| `GET` | `/opportunities/{id}` | Get Opportunity | `opportunities.readonly` |
| `DELETE` | `/opportunities/{id}` | Delete Opportunity | `opportunities.write` |
| `PUT` | `/opportunities/{id}` | Update Opportunity | `opportunities.write` |
| `PUT` | `/opportunities/{id}/status` | Update Opportunity Status | `opportunities.write` |
| `POST` | `/opportunities/upsert` | Upsert Opportunity | `opportunities.write` |
| `POST` | `/opportunities/{id}/followers` | Add Followers | `opportunities.write` |
| `DELETE` | `/opportunities/{id}/followers` | Remove Followers | `opportunities.write` |
| `POST` | `/opportunities/` | Create Opportunity | `opportunities.write` |

### GET Search Opportunity

**Endpoint:** `GET https://services.leadconnectorhq.com/opportunities/search`

**Required Scope(s):** `opportunities.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `q` | `string` | No |  |  |
| `location_id` | `string` | Yes | Location Id |  |
| `pipeline_id` | `string` | No | Pipeline Id |  |
| `pipeline_stage_id` | `string` | No | stage Id |  |
| `contact_id` | `string` | No | Contact Id |  |
| `status` | `string` | No |  |  |
| `assigned_to` | `string` | No |  |  |
| `campaignId` | `string` | No | Campaign Id |  |
| `id` | `string` | No | Opportunity Id |  |
| `order` | `string` | No |  |  |
| `endDate` | `string` | No | End date |  |
| `startAfter` | `string` | No | Start After |  |
| `startAfterId` | `string` | No | Start After Id |  |
| `date` | `string` | No | Start date |  |
| `country` | `string` | No |  |  |
| `page` | `number` | No |  |  |
| `limit` | `number` | No | Limit Per Page records count. will allow maximum up to 100 and default will be 20 |  |
| `getTasks` | `boolean` | No | get Tasks in contact | False |
| `getNotes` | `boolean` | No | get Notes in contact | False |
| `getCalendarEvents` | `boolean` | No | get Calender event in contact |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `opportunities` | `array[SearchOpportunitiesResponseSchema]` | No |  |  |
| `meta` | `SearchMetaResponseSchema` | No |  |  |
| `aggregations` | `object` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/opportunities/search' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Pipelines

**Endpoint:** `GET https://services.leadconnectorhq.com/opportunities/pipelines`

**Required Scope(s):** `opportunities.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `pipelines` | `array[PipelinesResponseSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/opportunities/pipelines' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Opportunity

**Endpoint:** `GET https://services.leadconnectorhq.com/opportunities/{id}`

**Required Scope(s):** `opportunities.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Opportunity Id | yWQobCRIhRguQtD2llvk |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `opportunity` | `SearchOpportunitiesResponseSchema` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/opportunities/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Opportunity

**Endpoint:** `DELETE https://services.leadconnectorhq.com/opportunities/{id}`

**Required Scope(s):** `opportunities.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Opportunity Id | yWQobCRIhRguQtD2llvk |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `succeded` | `boolean` | No |  | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/opportunities/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Opportunity

**Endpoint:** `PUT https://services.leadconnectorhq.com/opportunities/{id}`

**Required Scope(s):** `opportunities.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Opportunity Id | yWQobCRIhRguQtD2llvk |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `pipelineId` | `string` | No | pipeline Id | bCkKGpDsyPP4peuKowkG |
| `name` | `string` | No |  | First Opps |
| `pipelineStageId` | `string` | No |  | 7915dedc-8f18-44d5-8bc3-77c04e994a10 |
| `status` | `string` | No |  |  |
| `monetaryValue` | `number` | No |  | 220 |
| `assignedTo` | `string` | No |  | 082goXVW3lIExEQPOnd3 |
| `customFields` | `array[object]` | No | Update custom fields to opportunities. |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `opportunity` | `SearchOpportunitiesResponseSchema` | No |  |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/opportunities/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "pipelineId": "bCkKGpDsyPP4peuKowkG",
    "name": "First Opps",
    "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",
    "status": "<status>",
    "monetaryValue": 220,
    "assignedTo": "082goXVW3lIExEQPOnd3",
    "customFields": []
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Opportunity Status

**Endpoint:** `PUT https://services.leadconnectorhq.com/opportunities/{id}/status`

**Required Scope(s):** `opportunities.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Opportunity Id | yWQobCRIhRguQtD2llvk |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `succeded` | `boolean` | No |  | True |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/opportunities/:<id>/status' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "status": "<status>"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Upsert Opportunity

**Endpoint:** `POST https://services.leadconnectorhq.com/opportunities/upsert`

**Required Scope(s):** `opportunities.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `pipelineId` | `string` | Yes | pipeline Id | bCkKGpDsyPP4peuKowkG |
| `locationId` | `string` | Yes | locationId | CLu7BaljjqrEjBGKTNNe |
| `contactId` | `string` | Yes | contactId | LiKJ2vnRg5ETM8Z19K7 |
| `name` | `string` | No | name | opportunity name |
| `status` | `string` | No |  |  |
| `pipelineStageId` | `string` | No |  | 7915dedc-8f18-44d5-8bc3-77c04e994a10 |
| `monetaryValue` | `number` | No |  | 220 |
| `assignedTo` | `string` | No |  | 082goXVW3lIExEQPOnd3 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `opportunity` | `object` | Yes | Updated / New Opportunity |  |
| `new` | `boolean` | Yes |  | True |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/opportunities/upsert' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "pipelineId": "bCkKGpDsyPP4peuKowkG",
    "locationId": "CLu7BaljjqrEjBGKTNNe",
    "contactId": "LiKJ2vnRg5ETM8Z19K7",
    "name": "opportunity name",
    "status": "<status>",
    "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",
    "monetaryValue": 220,
    "assignedTo": "082goXVW3lIExEQPOnd3"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Add Followers

**Endpoint:** `POST https://services.leadconnectorhq.com/opportunities/{id}/followers`

**Required Scope(s):** `opportunities.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Opportunity Id | sx6wyHhbFdRXh302Lunr |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `followers` | `array[string]` | Yes |  | ['sx6wyHhbFdRXh302Lunr', 'sx6wyHhbFdRXh302Lunr'] |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `followers` | `array[string]` | No |  | ['sx6wyHhbFdRXh302Lunr', 'sx6wyHhbFdRXh302LLss'] |
| `followersAdded` | `array[string]` | No |  | ['Mx6wyHhbFdRXh302Luer', 'Ka6wyHhbFdRXh302LLsAm'] |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/opportunities/:<id>/followers' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "followers": [
        "sx6wyHhbFdRXh302Lunr",
        "sx6wyHhbFdRXh302Lunr"
    ]
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### DELETE Remove Followers

**Endpoint:** `DELETE https://services.leadconnectorhq.com/opportunities/{id}/followers`

**Required Scope(s):** `opportunities.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Opportunity Id | sx6wyHhbFdRXh302Lunr |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `followers` | `array[string]` | Yes |  | ['sx6wyHhbFdRXh302Lunr', 'sx6wyHhbFdRXh302Lunr'] |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `followers` | `array[string]` | No |  | ['sx6wyHhbFdRXh302Lunr', 'sx6wyHhbFdRXh302LLss'] |
| `followersRemoved` | `array[string]` | No |  | ['Mx6wyHhbFdRXh302Luer', 'Ka6wyHhbFdRXh302LLsAm'] |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/opportunities/:<id>/followers' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "followers": [
        "sx6wyHhbFdRXh302Lunr",
        "sx6wyHhbFdRXh302Lunr"
    ]
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Opportunity

**Endpoint:** `POST https://services.leadconnectorhq.com/opportunities/`

**Required Scope(s):** `opportunities.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `pipelineId` | `string` | Yes | pipeline Id | VDm7RPYC2GLUvdpKmBfC |
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `name` | `string` | Yes |  | First Opps |
| `pipelineStageId` | `string` | No |  | 7915dedc-8f18-44d5-8bc3-77c04e994a10 |
| `status` | `string` | Yes |  |  |
| `contactId` | `string` | Yes |  | mTkSCb1UBjb5tk4OvB69 |
| `monetaryValue` | `number` | No |  | 220 |
| `assignedTo` | `string` | No |  | 082goXVW3lIExEQPOnd3 |
| `customFields` | `array[object]` | No | Add custom fields to opportunities. |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `opportunity` | `SearchOpportunitiesResponseSchema` | No |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/opportunities/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "pipelineId": "VDm7RPYC2GLUvdpKmBfC",
    "locationId": "ve9EPM428h8vShlRW1KT",
    "name": "First Opps",
    "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",
    "status": "<status>",
    "contactId": "mTkSCb1UBjb5tk4OvB69",
    "monetaryValue": 220,
    "assignedTo": "082goXVW3lIExEQPOnd3"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


---

## Payments API

Documentation for payments API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `POST` | `/payments/integrations/provider/whitelabel` | Create White-label Integration Provider | `payments/integration.write` |
| `GET` | `/payments/integrations/provider/whitelabel` | List White-label Integration Providers | `payments/integration.readonly` |
| `GET` | `/payments/orders` | List Orders | `payments/orders.readonly` |
| `GET` | `/payments/orders/{orderId}` | Get Order by ID | `payments/orders.readonly` |
| `POST` | `/payments/orders/{orderId}/record-payment` | Record Order Payment | `payments/orders.collectPayment` |
| `POST` | `/payments/orders/migrate-order-ps` | migration Endpoint for Order Payment Status | `—` |
| `POST` | `/payments/orders/{orderId}/fulfillments` | Create order fulfillment | `payments/orders.write` |
| `GET` | `/payments/orders/{orderId}/fulfillments` | List fulfillment | `payments/orders.readonly` |
| `GET` | `/payments/orders/{orderId}/notes` | List Order Notes | `—` |
| `GET` | `/payments/transactions` | List Transactions | `payments/transactions.readonly` |
| `GET` | `/payments/transactions/{transactionId}` | Get Transaction by ID | `payments/transactions.readonly` |
| `GET` | `/payments/subscriptions` | List Subscriptions | `payments/subscriptions.readonly` |
| `GET` | `/payments/subscriptions/{subscriptionId}` | Get Subscription by ID | `payments/subscriptions.readonly` |
| `GET` | `/payments/coupon/list` | List Coupons | `payments/coupons.readonly` |
| `POST` | `/payments/coupon` | Create Coupon | `payments/coupons.write` |
| `PUT` | `/payments/coupon` | Update Coupon | `payments/coupons.write` |
| `DELETE` | `/payments/coupon` | Delete Coupon | `payments/coupons.write` |
| `GET` | `/payments/coupon` | Fetch Coupon | `payments/coupons.readonly` |
| `POST` | `/payments/custom-provider/provider` | Create new integration | `payments/custom-provider.write` |
| `DELETE` | `/payments/custom-provider/provider` | Deleting an existing integration | `payments/custom-provider.write` |
| `GET` | `/payments/custom-provider/connect` | Fetch given provider config | `payments/custom-provider.readonly` |
| `POST` | `/payments/custom-provider/connect` | Create new provider config | `payments/custom-provider.write` |
| `POST` | `/payments/custom-provider/disconnect` | Disconnect existing provider config | `payments/custom-provider.write` |
| `PUT` | `/payments/custom-provider/capabilities` | Custom-provider marketplace app update capabilities | `payments/custom-provider.write` |

### POST Create White-label Integration Provider

**Endpoint:** `POST https://services.leadconnectorhq.com/payments/integrations/provider/whitelabel`

The "Create White-label Integration Provider" API allows adding a new payment provider integration to the system which is built on top of Authorize.net or NMI. Use this endpoint to create a integration provider with the specified details. Ensure that the required information is provided in the request payload. This endpoint can be only invoked using marketplace-app token

**Required Scope(s):** `payments/integration.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `uniqueName` | `string` | Yes | A unique name given to the integration provider, uniqueName must start and end with a character. Onl | easy-direct |
| `title` | `string` | Yes | The title or name of the integration provider. | Title |
| `provider` | `string` | Yes | The type of payment provider associated with the integration provider. | {'AUTHORIZE_NET': 'authorize-net', 'NMI': 'nmi'} |
| `description` | `string` | Yes | A brief description providing additional information about the integration provider. | Description |
| `imageUrl` | `string` | Yes | The URL to an image representing the integration provider. The imageUrl should start with "https://" | https://example.com/image.jpg |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | The unique identifier of the integration provider. | 65cb47dda50f4f13ced4b870 |
| `altId` | `string` | Yes | The altId / locationId of the integration provider. | Z4Bxl8J4SaPEPLq9IQ8g |
| `altType` | `string` | Yes | The altType of the integration provider. | location |
| `title` | `string` | Yes | The title or name of the integration provider. | Example |
| `route` | `string` | Yes | The route name associated with the integration provider. | epd |
| `provider` | `string` | Yes | The payment provider associated with the integration provider. | nmi |
| `description` | `string` | Yes | A brief description providing additional information about the integration provider. | Lorem |
| `imageUrl` | `string` | Yes | The URL to an image representing the integration provider. | https://example.com/assets/pmd/img/payments/nmi-logo.webp |
| `createdAt` | `string (date-time)` | Yes | The timestamp when the integration provider was created. | 2024-02-13T10:43:41.026Z |
| `updatedAt` | `string (date-time)` | Yes | The timestamp when the integration provider was last updated. | 2024-02-13T10:43:41.026Z |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/payments/integrations/provider/whitelabel' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "uniqueName": "easy-direct",
    "title": "Title",
    "provider": {
        "AUTHORIZE_NET": "authorize-net",
        "NMI": "nmi"
    },
    "description": "Description",
    "imageUrl": "https://example.com/image.jpg"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List White-label Integration Providers

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/integrations/provider/whitelabel`

The "List White-label Integration Providers" API allows to retrieve a paginated list of integration providers. Customize your results by filtering whitelabel integration providers(which are built directly on top of Authorize.net or NMI) based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve integration provider information.

**Required Scope(s):** `payments/integration.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `limit` | `number` | No | The maximum number of items to be included in a single page of results | 20 |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. | 0 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `providers` | `object` | Yes | list of integration provider. |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/integrations/provider/whitelabel' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List Orders

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/orders`

The "List Orders" API allows to retrieve a paginated list of orders. Customize your results by filtering orders based on name, alt type, order status, payment mode, date range, type of source, contact, funnel products or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve order information.

**Required Scope(s):** `payments/orders.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | No | LocationId is the id of the sub-account. | 3SwdhCu3svxI8AKsPJt6 |
| `altId` | `string` | Yes | AltId is the unique identifier e.g: location id. | 3SwdhCu3svxI8AKsPJt6 |
| `altType` | `string` | Yes | AltType is the type of identifier. | location |
| `status` | `string` | No | Order status. | completed |
| `paymentMode` | `string` | No | Mode of payment. | live |
| `startAt` | `string` | No | Starting interval of orders. | 2024-02-01 |
| `endAt` | `string` | No | Closing interval of orders. | 2024-02-13 |
| `search` | `string` | No | The name of the order for searching. | Awesome order |
| `contactId` | `string` | No | Contact id for filtering of orders. | XPLSw2SVagl12LMDeTmQ |
| `funnelProductIds` | `string` | No | Funnel product ids separated by comma. | 61dd0c7dc077f712a5f787ff,61d6afc9d39ac5e35965c017 |
| `limit` | `number` | No | The maximum number of items to be included in a single page of results | 20 |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. | 0 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[OrderResponseSchema]` | Yes | An array of orders |  |
| `totalCount` | `number` | Yes | total orders count |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/orders' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Order by ID

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/orders/{orderId}`

The "Get Order by ID" API allows to retrieve information for a specific order using its unique identifier. Use this endpoint to fetch details for a single order based on the provided order ID.

**Required Scope(s):** `payments/orders.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `orderId` | `string` | Yes | ID of the order that needs to be returned | 653f5e0cde5a1314e62a837c |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | No | LocationId is the id of the sub-account. | 3SwdhCu3svxI8AKsPJt6 |
| `altId` | `string` | Yes | AltId is the unique identifier e.g: location id. | 3SwdhCu3svxI8AKsPJt6 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | The unique identifier for the order. | 653f5e0cde5a1314e62a837c |
| `altId` | `string` | Yes | AltId is the unique identifier eg: location id. | 3SwdhCu3svxI8AKsPJt6 |
| `altType` | `string` | Yes | AltType is the type of identifier. | location |
| `contactId` | `string` | No | Contact id corresponding to the order. | XPLSw2SVagl12LMDeTmQ |
| `currency` | `string` | No | Currency in which order was created. | USD |
| `amount` | `number` | No | Order value. | 100 |
| `status` | `string` | Yes | The status of the order (e.g., completed). | completed |
| `liveMode` | `boolean` | No | Order is in live / test mode. | false |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the order. | 2023-11-20T10:23:36.515Z |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the order. | 2024-01-23T09:57:04.846Z |
| `fulfillmentStatus` | `string` | No | Fulfillment status of the order. | unfulfilled |
| `contactSnapshot` | `object` | No | Contact details of the order. | { last_name: "Mcclain", type: "lead", first_name_lower_case: |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/orders/:<orderId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Record Order Payment

**Endpoint:** `POST https://services.leadconnectorhq.com/payments/orders/{orderId}/record-payment`

The "Record Order Payment" API allows to record a payment for an order. Use this endpoint to record payment for an order and update the order status to "Paid".

**Required Scope(s):** `payments/orders.collectPayment`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `orderId` | `string` | Yes | MongoDB Order ID |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | location Id / company Id based on altType | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | Alt Type | location |
| `mode` | `string` | Yes | manual payment method | card |
| `card` | `object` | No | Details of Card if used for payment |  |
| `cheque` | `object` | No | Details of the Cheque if used for payment |  |
| `notes` | `string` | No | Any note to be recorded with the transaction | This was a direct payment |
| `amount` | `number` | No | Amount to be paid against the invoice. | 100 |
| `meta` | `object` | No | Meta data to be recorded with the transaction |  |
| `isPartialPayment` | `boolean` | No | Indicates if the order is intended to be a partial payment. |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success status of the request | True |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/payments/orders/:<orderId>/record-payment' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "mode": "card",
    "notes": "This was a direct payment",
    "amount": 100
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST migration Endpoint for Order Payment Status

**Endpoint:** `POST https://services.leadconnectorhq.com/payments/orders/migrate-order-ps`

Process to migrate all the older orders and based on the statuses introduce the payment statuses as well


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | No | LocationId is the id of the sub-account. |  |
| `altId` | `string` | Yes | AltId is the unique identifier e.g: location id. |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/payments/orders/migrate-order-ps' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response Codes:** `201` | `400` | `401`


### POST Create order fulfillment

**Endpoint:** `POST https://services.leadconnectorhq.com/payments/orders/{orderId}/fulfillments`

The "Order Fulfillment" API facilitates the process of fulfilling an order.

**Required Scope(s):** `payments/orders.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `orderId` | `string` | Yes | ID of the order that needs to be returned | 653f5e0cde5a1314e62a837c |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `trackings` | `array[FulfillmentTracking]` | Yes | Fulfillment tracking information |  |
| `items` | `array[FulfillmentItems]` | Yes | Fulfilled items |  |
| `notifyCustomer` | `boolean` | Yes | Need to send a notification to customer | True |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `data` | `object` | Yes | fulfillment data |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/payments/orders/:<orderId>/fulfillments' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "trackings": [],
    "items": [],
    "notifyCustomer": true
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List fulfillment

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/orders/{orderId}/fulfillments`

List all fulfillment history of an order

**Required Scope(s):** `payments/orders.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `orderId` | `string` | Yes | ID of the order that needs to be returned | 653f5e0cde5a1314e62a837c |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `data` | `array[FulfillmentSchema]` | Yes | An array of fulfilled items |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/orders/:<orderId>/fulfillments' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List Order Notes

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/orders/{orderId}/notes`

List all notes of an order


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `orderId` | `string` | Yes | ID of the order that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/orders/:<orderId>/notes' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List Transactions

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/transactions`

The "List Transactions" API allows to retrieve a paginated list of transactions. Customize your results by filtering transactions based on name, alt type, transaction status, payment mode, date range, type of source, contact, subscription id, entity id or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve transaction information.

**Required Scope(s):** `payments/transactions.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | No | LocationId is the id of the sub-account. | 3SwdhCu3svxI8AKsPJt6 |
| `altId` | `string` | Yes | AltId is the unique identifier e.g: location id. | 3SwdhCu3svxI8AKsPJt6 |
| `altType` | `string` | Yes | AltType is the type of identifier. | location |
| `paymentMode` | `string` | No | Mode of payment. | live |
| `startAt` | `string` | No | Starting interval of transactions. | 2024-02-01 |
| `endAt` | `string` | No | Closing interval of transactions. | 2024-02-13 |
| `entitySourceType` | `string` | No | Source of the transactions. | funnel |
| `entitySourceSubType` | `string` | No | Source sub-type of the transactions. | two_step_order_form |
| `search` | `string` | No | The name of the transaction for searching. | Awesome transaction |
| `subscriptionId` | `string` | No | Subscription id for filtering of transactions. | sub_1KGcXDCScnf89tZoVkoEMCEL |
| `entityId` | `string` | No | Entity id for filtering of transactions. | 61dd0fe9c077f73e67f78803 |
| `contactId` | `string` | No | Contact id for filtering of transactions. | XPLSw2SVagl12LMDeTmQ |
| `limit` | `number` | No | The maximum number of items to be included in a single page of results | 20 |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. | 0 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[TxnResponseSchema]` | Yes | An array of transactions |  |
| `totalCount` | `number` | Yes | total transactions count |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/transactions' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Transaction by ID

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/transactions/{transactionId}`

The "Get Transaction by ID" API allows to retrieve information for a specific transaction using its unique identifier. Use this endpoint to fetch details for a single transaction based on the provided transaction ID.

**Required Scope(s):** `payments/transactions.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `transactionId` | `string` | Yes | ID of the transaction that needs to be returned | 61dd0feac077f72010f78804 |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | No | LocationId is the id of the sub-account. | 3SwdhCu3svxI8AKsPJt6 |
| `altId` | `string` | Yes | AltId is the unique identifier e.g: location id. | 3SwdhCu3svxI8AKsPJt6 |
| `altType` | `string` | Yes | AltType is the type of identifier. | location |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | The unique identifier for the transaction. | 61dd0feac077f72010f78804 |
| `altType` | `string` | Yes | AltType is the type of identifier. | location |
| `altId` | `string` | Yes | AltId is the unique identifier eg: location id. | 3SwdhCu3svxI8AKsPJt6 |
| `contactId` | `string` | No | Contact id corresponding to the transaction. | XPLSw2SVagl12LMDeTmQ |
| `contactSnapshot` | `object` | No | Contact details of the transaction. | { last_name: "Mcclain", type: "lead", first_name_lower_case: |
| `currency` | `string` | No | Currency in which transaction was made. | USD |
| `amount` | `number` | No | Transaction value. | 100 |
| `status` | `object` | No | Transaction status. | succeeded |
| `liveMode` | `boolean` | No | Transaction is in live / test mode. | false |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the transaction. | 2023-11-20T10:23:36.515Z |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the transaction. | 2024-01-23T09:57:04.846Z |
| `entityType` | `string` | No | Entity type of transaction (eg: order). | order |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/transactions/:<transactionId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List Subscriptions

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/subscriptions`

The "List Subscriptions" API allows to retrieve a paginated list of subscriptions. Customize your results by filtering subscriptions based on name, alt type, subscription status, payment mode, date range, type of source, contact, subscription id, entity id, contact or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve subscription information.

**Required Scope(s):** `payments/subscriptions.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | AltId is the unique identifier e.g: location id. | 3SwdhCu3svxI8AKsPJt6 |
| `altType` | `string` | Yes | AltType is the type of identifier. | location |
| `entityId` | `string` | No | Entity id for filtering of subscriptions. | 61dd0fe9c077f73e67f78803 |
| `paymentMode` | `string` | No | Mode of payment. | live |
| `startAt` | `string` | No | Starting interval of subscriptions. | 2024-02-01 |
| `endAt` | `string` | No | Closing interval of subscriptions. | 2024-02-13 |
| `entitySourceType` | `string` | No | Source of the subscriptions. | funnel |
| `search` | `string` | No | The name of the subscription for searching. | Awesome subscription |
| `contactId` | `string` | No | Contact ID for the subscription | AmuzcoPBpgKeccNsFlib |
| `id` | `string` | No | Subscription id for filtering of subscriptions. | 64bf78af39118e4011926cba |
| `limit` | `number` | No | The maximum number of items to be included in a single page of results | 20 |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. | 0 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[SubscriptionResponseSchema]` | Yes | An array of subscriptions |  |
| `totalCount` | `number` | Yes | total subscriptions count |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/subscriptions' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Subscription by ID

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/subscriptions/{subscriptionId}`

The "Get Subscription by ID" API allows to retrieve information for a specific subscription using its unique identifier. Use this endpoint to fetch details for a single subscription based on the provided subscription ID.

**Required Scope(s):** `payments/subscriptions.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `subscriptionId` | `string` | Yes | ID of the subscription that needs to be returned | 6322e9c9e39fc14ab3ed7042 |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | AltId is the unique identifier e.g: location id. | 3SwdhCu3svxI8AKsPJt6 |
| `altType` | `string` | Yes | AltType is the type of identifier. | location |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | The unique identifier for the subscription. | 64bf78af39118e4011926cba |
| `altType` | `object` | Yes | AltType is the type of identifier. | location |
| `altId` | `string` | Yes | AltId is the unique identifier eg: location id. | 3SwdhCu3svxI8AKsPJt6 |
| `contactId` | `string` | No | Contact id corresponding to the subscription. | XPLSw2SVagl12LMDeTmQ |
| `contactSnapshot` | `object` | No | Contact details of the subscriber. | { last_name: "Mcclain", type: "lead", first_name_lower_case: |
| `coupon` | `object` | No | Coupon details of the subscription. | { _id: "6374c6926d119a393fe1e556", usageCount: 5260, altId:  |
| `currency` | `string` | No | Currency in which subscription was made. | USD |
| `amount` | `number` | No | Subscription value. | 100 |
| `status` | `object` | No | Subscription status. | active |
| `liveMode` | `boolean` | No | Subscription is in live / test mode. | false |
| `entityType` | `string` | No | Entity type of subscription (eg: order). | order |
| `entityId` | `string` | No | Entity id for the subscription. e.g: order id | 62f4db0f3059ecee61379012 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/subscriptions/:<subscriptionId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List Coupons

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/coupon/list`

The "List Coupons" API allows you to retrieve a list of all coupons available in your location. Use this endpoint to view all promotional offers and special discounts for your customers.

**Required Scope(s):** `payments/coupons.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id |  |
| `altType` | `string` | Yes | Alt Type |  |
| `limit` | `number` | No | Maximum number of coupons to return |  |
| `offset` | `number` | No | Number of coupons to skip for pagination |  |
| `status` | `string` | No | Filter coupons by status |  |
| `search` | `string` | No | Search term to filter coupons by name or code |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[CouponDto]` | Yes | Array of coupon objects |  |
| `totalCount` | `number` | Yes | Total number of coupons matching the query criteria | 20 |
| `traceId` | `string` | Yes | Unique identifier for tracing this API request | c667b18d-8f5e-44cf-a914 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/coupon/list' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `422`


### POST Create Coupon

**Endpoint:** `POST https://services.leadconnectorhq.com/payments/coupon`

The "Create Coupon" API allows you to create a new promotional coupon with customizable parameters such as discount amount, validity period, usage limits, and applicable products. Use this endpoint to set up promotional offers and special discounts for your customers.

**Required Scope(s):** `payments/coupons.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id | BQdAwxa0ky1iK2sstLGJ |
| `altType` | `string` | Yes | Alt Type | location |
| `name` | `string` | Yes | Coupon Name | New Year Sale |
| `code` | `string` | Yes | Coupon Code | LEVELUPDAY2022 |
| `discountType` | `string` | Yes | Discount Type | amount |
| `discountValue` | `number` | Yes | Discount Value | 10 |
| `startDate` | `string` | Yes | Start date in YYYY-MM-DDTHH:mm:ssZ format | 2023-01-01T22:45:00.000Z |
| `endDate` | `string` | No | End date in YYYY-MM-DDTHH:mm:ssZ format | 2023-01-31T22:45:00.000Z |
| `usageLimit` | `number` | No | Max number of times coupon can be used | 10 |
| `productIds` | `array[string]` | No | Product Ids | ['6241712be68f7a98102ba272'] |
| `applyToFuturePayments` | `boolean` | No | Is Coupon applicable on upcoming subscription transactions | True |
| `applyToFuturePaymentsConfig` | `object` | No | If coupon is applicable on upcoming subscription transactions, how many months should it be applicab | [{'type': 'fixed', 'duration': 5, 'durationType': 'months'}, |
| `limitPerCustomer` | `boolean` | No | Limits whether a coupon can be redeemed only once per customer. | True |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Unique MongoDB identifier for the coupon | 67f6c132d9485f9dacd5f123 |
| `usageCount` | `number` | Yes | Number of times the coupon has been used | 12 |
| `limitPerCustomer` | `number` | Yes | Maximum number of times a customer can use this coupon (0 for unlimited) | 5 |
| `altId` | `string` | Yes | Location Id | 79t07PzK8Tvf73d12312 |
| `altType` | `string` | Yes | Type of entity | location |
| `name` | `string` | Yes | Display name of the coupon | NEWT6 |
| `code` | `string` | Yes | Redemption code for the coupon | NEWT6 |
| `discountType` | `string` | Yes | Type of discount (percentage or amount) | percentage |
| `discountValue` | `number` | Yes | Value of the discount (percentage or fixed amount) | 25 |
| `status` | `string` | Yes | Current status of the coupon | scheduled |
| `startDate` | `string` | Yes | Date when the coupon becomes active | 2025-04-30T18:30:00.000Z |
| `endDate` | `string` | No | End date when the coupon expires | 2025-05-30T18:30:00.000Z |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/payments/coupon' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "BQdAwxa0ky1iK2sstLGJ",
    "altType": "location",
    "name": "New Year Sale",
    "code": "LEVELUPDAY2022",
    "discountType": "amount",
    "discountValue": 10,
    "startDate": "2023-01-01T22:45:00.000Z",
    "endDate": "2023-01-31T22:45:00.000Z"
}'
```

**Response Codes:** `201` | `422`


### PUT Update Coupon

**Endpoint:** `PUT https://services.leadconnectorhq.com/payments/coupon`

The "Update Coupon" API enables you to modify existing coupon details such as discount values, validity periods, usage limits, and other promotional parameters. Use this endpoint to adjust or extend promotional offers for your customers.

**Required Scope(s):** `payments/coupons.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id | BQdAwxa0ky1iK2sstLGJ |
| `altType` | `string` | Yes | Alt Type | location |
| `name` | `string` | Yes | Coupon Name | New Year Sale |
| `code` | `string` | Yes | Coupon Code | LEVELUPDAY2022 |
| `discountType` | `string` | Yes | Discount Type | amount |
| `discountValue` | `number` | Yes | Discount Value | 10 |
| `startDate` | `string` | Yes | Start date in YYYY-MM-DDTHH:mm:ssZ format | 2023-01-01T22:45:00.000Z |
| `endDate` | `string` | No | End date in YYYY-MM-DDTHH:mm:ssZ format | 2023-01-31T22:45:00.000Z |
| `usageLimit` | `number` | No | Max number of times coupon can be used | 10 |
| `productIds` | `array[string]` | No | Product Ids | ['6241712be68f7a98102ba272'] |
| `applyToFuturePayments` | `boolean` | No | Is Coupon applicable on upcoming subscription transactions | True |
| `applyToFuturePaymentsConfig` | `object` | No | If coupon is applicable on upcoming subscription transactions, how many months should it be applicab | [{'type': 'fixed', 'duration': 5, 'durationType': 'months'}, |
| `limitPerCustomer` | `boolean` | No | Limits whether a coupon can be redeemed only once per customer. | True |
| `id` | `string` | Yes | Coupon Id | 6241712be68f7a98102ba272 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Unique MongoDB identifier for the coupon | 67f6c132d9485f9dacd5f123 |
| `usageCount` | `number` | Yes | Number of times the coupon has been used | 12 |
| `limitPerCustomer` | `number` | Yes | Maximum number of times a customer can use this coupon (0 for unlimited) | 5 |
| `altId` | `string` | Yes | Location Id | 79t07PzK8Tvf73d12312 |
| `altType` | `string` | Yes | Type of entity | location |
| `name` | `string` | Yes | Display name of the coupon | NEWT6 |
| `code` | `string` | Yes | Redemption code for the coupon | NEWT6 |
| `discountType` | `string` | Yes | Type of discount (percentage or amount) | percentage |
| `discountValue` | `number` | Yes | Value of the discount (percentage or fixed amount) | 25 |
| `status` | `string` | Yes | Current status of the coupon | scheduled |
| `startDate` | `string` | Yes | Date when the coupon becomes active | 2025-04-30T18:30:00.000Z |
| `endDate` | `string` | No | End date when the coupon expires | 2025-05-30T18:30:00.000Z |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/payments/coupon' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "BQdAwxa0ky1iK2sstLGJ",
    "altType": "location",
    "name": "New Year Sale",
    "code": "LEVELUPDAY2022",
    "discountType": "amount",
    "discountValue": 10,
    "startDate": "2023-01-01T22:45:00.000Z",
    "endDate": "2023-01-31T22:45:00.000Z"
}'
```

**Response Codes:** `200` | `422`


### DELETE Delete Coupon

**Endpoint:** `DELETE https://services.leadconnectorhq.com/payments/coupon`

The "Delete Coupon" API allows you to permanently remove a coupon from your system using its unique identifier. Use this endpoint to discontinue promotional offers or clean up unused coupons. Note that this action cannot be undone.

**Required Scope(s):** `payments/coupons.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id | BQdAwxa0ky1iK2sstLGJ |
| `altType` | `string` | Yes | Alt Type | location |
| `id` | `string` | Yes | Coupon Id | 6241712be68f7a98102ba272 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Indicates whether the delete was successful | True |
| `traceId` | `string` | Yes | Unique identifier for tracing this API request | c667b18d-8f5e-44cf-a914 |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/payments/coupon' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "BQdAwxa0ky1iK2sstLGJ",
    "altType": "location",
    "id": "6241712be68f7a98102ba272"
}'
```

**Response Codes:** `200` | `422`


### GET Fetch Coupon

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/coupon`

The "Get Coupon Details" API enables you to retrieve comprehensive information about a specific coupon using either its unique identifier or promotional code. Use this endpoint to view coupon parameters, usage statistics, validity periods, and other promotional details.

**Required Scope(s):** `payments/coupons.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id |  |
| `altType` | `string` | Yes | Alt Type |  |
| `id` | `string` | Yes | Coupon id |  |
| `code` | `string` | Yes | Coupon code |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | Unique MongoDB identifier for the coupon | 67f6c132d9485f9dacd5f123 |
| `usageCount` | `number` | Yes | Number of times the coupon has been used | 12 |
| `limitPerCustomer` | `number` | Yes | Maximum number of times a customer can use this coupon (0 for unlimited) | 5 |
| `altId` | `string` | Yes | Location Id | 79t07PzK8Tvf73d12312 |
| `altType` | `string` | Yes | Type of entity | location |
| `name` | `string` | Yes | Display name of the coupon | NEWT6 |
| `code` | `string` | Yes | Redemption code for the coupon | NEWT6 |
| `discountType` | `string` | Yes | Type of discount (percentage or amount) | percentage |
| `discountValue` | `number` | Yes | Value of the discount (percentage or fixed amount) | 25 |
| `status` | `string` | Yes | Current status of the coupon | scheduled |
| `startDate` | `string` | Yes | Date when the coupon becomes active | 2025-04-30T18:30:00.000Z |
| `endDate` | `string` | No | End date when the coupon expires | 2025-05-30T18:30:00.000Z |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/coupon' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `422`


### POST Create new integration

**Endpoint:** `POST https://services.leadconnectorhq.com/payments/custom-provider/provider`

API to create a new association for an app and location

**Required Scope(s):** `payments/custom-provider.write`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location id | Lk3nlfk4lxlelVEwcW |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | The name of the custom provider | Company Paypal Integration |
| `description` | `string` | Yes | Description of payment gateway. Shown on the payments integrations page as subtext | This payment gateway supports payments in India via UPI, Net |
| `paymentsUrl` | `string` | Yes | This url will be loaded in iFrame to start a payment session. | https://testpayment.paypal.com |
| `queryUrl` | `string` | Yes | The url used for querying payments related events. Ex. verify, refund, subscription etc. | https://testsubscription.paypal.com |
| `imageUrl` | `string` | Yes | Public image url for logo of the payment gateway displayed on the payments integrations page. | https://testsubscription.paypal.com |
| `supportsSubscriptionSchedule` | `boolean` | Yes | Whether the config supports subscription schedule or not. true represents config supports subscripti | True |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | The name of the custom provider | Company Paypal Integration |
| `description` | `string` | Yes | Description of payment gateway. Shown on the payments integrations page as subtext | This payment gateway supports payments in India via UPI, Net |
| `paymentsUrl` | `string` | Yes | This url will be loaded in iFrame to start a payment session. | https://testpayment.paypal.com |
| `queryUrl` | `string` | Yes | The url used for querying payments related events. Ex. verify, refund, subscription etc. | https://testsubscription.paypal.com |
| `imageUrl` | `string` | Yes | Public image url for logo of the payment gateway displayed on the payments integrations page. | https://testsubscription.paypal.com |
| `_id` | `string` | Yes | The unique identifier for the custom provider. | 662a44ad19a2a44d3cd9d749 |
| `locationId` | `string` | Yes | Location id | Lk3nlfk4lxlelVEwcW |
| `marketplaceAppId` | `string` | Yes | The application id of marketplace | 65f0b217a05c774da7f1efa5 |
| `paymentProvider` | `object` | No | Payment provider details. | { live: { liveMode: true }, test: { liveMode: false, apiKey: |
| `deleted` | `boolean` | Yes | Whether the config is deleted or not. true represents config is deleted | True |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the custom provider. | 2023-11-20T10:23:36.515Z |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the custom provider. | 2024-01-23T09:57:04.846Z |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/payments/custom-provider/provider' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Company Paypal Integration",
    "description": "This payment gateway supports payments in India via UPI, Net banking, cards and wallets.",
    "paymentsUrl": "https://testpayment.paypal.com",
    "queryUrl": "https://testsubscription.paypal.com",
    "imageUrl": "https://testsubscription.paypal.com",
    "supportsSubscriptionSchedule": true
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Deleting an existing integration

**Endpoint:** `DELETE https://services.leadconnectorhq.com/payments/custom-provider/provider`

API to delete an association for an app and location

**Required Scope(s):** `payments/custom-provider.write`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location id | Lk3nlfk4lxlelVEwcW |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Whether the custom provider config is disconnect or not. true represents config is disconnect | true |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/payments/custom-provider/provider' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Fetch given provider config

**Endpoint:** `GET https://services.leadconnectorhq.com/payments/custom-provider/connect`

API for fetching an existing payment config for given location

**Required Scope(s):** `payments/custom-provider.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location id | Lk3nlfk4lxlelVEwcW |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | The name of the custom provider | Company Paypal Integration |
| `description` | `string` | Yes | Description of payment gateway. Shown on the payments integrations page as subtext | This payment gateway supports payments in India via UPI, Net |
| `paymentsUrl` | `string` | Yes | This url will be loaded in iFrame to start a payment session. | https://testpayment.paypal.com |
| `queryUrl` | `string` | Yes | The url used for querying payments related events. Ex. verify, refund, subscription etc. | https://testsubscription.paypal.com |
| `imageUrl` | `string` | Yes | Public image url for logo of the payment gateway displayed on the payments integrations page. | https://testsubscription.paypal.com |
| `_id` | `string` | Yes | The unique identifier for the custom provider. | 662a44ad19a2a44d3cd9d749 |
| `locationId` | `string` | Yes | Location id | Lk3nlfk4lxlelVEwcW |
| `marketplaceAppId` | `string` | Yes | The application id of marketplace | 65f0b217a05c774da7f1efa5 |
| `paymentProvider` | `object` | No | Payment provider details. | { live: { liveMode: true }, test: { liveMode: false, apiKey: |
| `deleted` | `boolean` | Yes | Whether the config is deleted or not. true represents config is deleted | True |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the custom provider. | 2023-11-20T10:23:36.515Z |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the custom provider. | 2024-01-23T09:57:04.846Z |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/payments/custom-provider/connect' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create new provider config

**Endpoint:** `POST https://services.leadconnectorhq.com/payments/custom-provider/connect`

API to create a new payment config for given location

**Required Scope(s):** `payments/custom-provider.write`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location id | Lk3nlfk4lxlelVEwcW |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `live` | `object` | Yes | Live config containing api-key and publishable key for live payments |  |
| `test` | `object` | Yes | Test config containing api-key and publishable-key for test payments |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | The name of the custom provider | Company Paypal Integration |
| `description` | `string` | Yes | Description of payment gateway. Shown on the payments integrations page as subtext | This payment gateway supports payments in India via UPI, Net |
| `paymentsUrl` | `string` | Yes | This url will be loaded in iFrame to start a payment session. | https://testpayment.paypal.com |
| `queryUrl` | `string` | Yes | The url used for querying payments related events. Ex. verify, refund, subscription etc. | https://testsubscription.paypal.com |
| `imageUrl` | `string` | Yes | Public image url for logo of the payment gateway displayed on the payments integrations page. | https://testsubscription.paypal.com |
| `_id` | `string` | Yes | The unique identifier for the custom provider. | 662a44ad19a2a44d3cd9d749 |
| `locationId` | `string` | Yes | Location id | Lk3nlfk4lxlelVEwcW |
| `marketplaceAppId` | `string` | Yes | The application id of marketplace | 65f0b217a05c774da7f1efa5 |
| `paymentProvider` | `object` | No | Payment provider details. | { live: { liveMode: true }, test: { liveMode: false, apiKey: |
| `deleted` | `boolean` | Yes | Whether the config is deleted or not. true represents config is deleted | True |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the custom provider. | 2023-11-20T10:23:36.515Z |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the custom provider. | 2024-01-23T09:57:04.846Z |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/payments/custom-provider/connect' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Disconnect existing provider config

**Endpoint:** `POST https://services.leadconnectorhq.com/payments/custom-provider/disconnect`

API to disconnect an existing payment config for given location

**Required Scope(s):** `payments/custom-provider.write`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location id | Lk3nlfk4lxlelVEwcW |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `liveMode` | `boolean` | Yes | Whether the config is for test mode or live mode. true represents config is for live payments | true |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Whether the custom provider config is disconnect or not. true represents config is disconnect | true |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/payments/custom-provider/disconnect' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "liveMode": "true"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Custom-provider marketplace app update capabilities

**Endpoint:** `PUT https://services.leadconnectorhq.com/payments/custom-provider/capabilities`

Toggle capabilities for the marketplace app tied to the OAuth client

**Required Scope(s):** `payments/custom-provider.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `supportsSubscriptionSchedules` | `boolean` | Yes | Whether the marketplace app supports subscription schedules or not | True |
| `companyId` | `string` | No | Company id. Mandatory if locationId is not provided | Yjnwuduw83e8x30sm0 |
| `locationId` | `string` | No | Location / Sub-account id. Mandatory if companyId is not provided | Yjnwuduw83e8x30sm0 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Whether the custom provider capabilities are updated or not. true represents capabilities are update | true |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/payments/custom-provider/capabilities' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "supportsSubscriptionSchedules": true,
    "companyId": "Yjnwuduw83e8x30sm0",
    "locationId": "Yjnwuduw83e8x30sm0"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


---

## Products API

Documentation for products API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `POST` | `/products/bulk-update` | Bulk Update Products | `products.write` |
| `POST` | `/products/bulk-update/edit` | Bulk Edit Products and Prices | `—` |
| `POST` | `/products/{productId}/price` | Create Price for a Product | `products/prices.write, products/prices.write` |
| `GET` | `/products/{productId}/price` | List Prices for a Product | `products/prices.readonly, products/prices.readonly` |
| `GET` | `/products/inventory` | List Inventory | `products/prices.readonly, products/prices.readonly` |
| `POST` | `/products/inventory` | Update Inventory | `products/prices.write, products/prices.write` |
| `GET` | `/products/{productId}/price/{priceId}` | Get Price by ID for a Product | `products/prices.readonly, products/prices.readonly` |
| `PUT` | `/products/{productId}/price/{priceId}` | Update Price by ID for a Product | `products/prices.write, products/prices.write` |
| `DELETE` | `/products/{productId}/price/{priceId}` | Delete Price by ID for a Product | `products/prices.write, products/prices.write` |
| `GET` | `/products/store/{storeId}/stats` | Fetch Product Store Stats | `products.readonly` |
| `POST` | `/products/store/{storeId}` | Action to include/exclude the product in store | `products.write` |
| `POST` | `/products/store/{storeId}/priority` | Update product display priorities in store | `—` |
| `GET` | `/products/collections` | Fetch Product Collections | `products/collection.readonly` |
| `POST` | `/products/collections` | Create Product Collection | `products/collection.write` |
| `GET` | `/products/collections/{collectionId}` | Get Details about individual product collection | `products/collection.readonly` |
| `PUT` | `/products/collections/{collectionId}` | Update Product Collection | `products/collection.write` |
| `DELETE` | `/products/collections/{collectionId}` | Delete Product Collection | `products/collection.write` |
| `GET` | `/products/reviews` | Fetch Product Reviews | `products.readonly` |
| `GET` | `/products/reviews/count` | Fetch Review Count as per status | `products.readonly` |
| `PUT` | `/products/reviews/{reviewId}` | Update Product Reviews | `products.write` |
| `DELETE` | `/products/reviews/{reviewId}` | Delete Product Review | `products.write` |
| `POST` | `/products/reviews/bulk-update` | Update Product Reviews | `products.write` |
| `GET` | `/products/{productId}` | Get Product by ID | `products.readonly, products.readonly` |
| `DELETE` | `/products/{productId}` | Delete Product by ID | `products.write, products.write` |
| `PUT` | `/products/{productId}` | Update Product by ID | `products.write, products.write` |
| `POST` | `/products/` | Create Product | `products.write, products.write` |
| `GET` | `/products/` | List Products | `products.readonly, products.readonly` |

### POST Bulk Update Products

**Endpoint:** `POST https://services.leadconnectorhq.com/products/bulk-update`

API to bulk update products (price, availability, collections, delete)

**Required Scope(s):** `products.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `type` | `string` | Yes | Type of bulk update operation | bulk-update-price |
| `productIds` | `array[string]` | Yes | Array of product IDs | ['5f8d0d55b54764421b7156c1'] |
| `filters` | `object` | No | Filters to apply when selectAll is true |  |
| `price` | `object` | No | Price update configuration |  |
| `compareAtPrice` | `object` | No | Compare at price update configuration |  |
| `availability` | `boolean` | No | New availability status |  |
| `collectionIds` | `array[string]` | No | Array of collection IDs |  |
| `currency` | `string` | No | Currency code | USD |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/products/bulk-update' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "type": "bulk-update-price",
    "productIds": [
        "5f8d0d55b54764421b7156c1"
    ],
    "availability": false
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### POST Bulk Edit Products and Prices

**Endpoint:** `POST https://services.leadconnectorhq.com/products/bulk-update/edit`

API to bulk edit products and their associated prices (max 30 entities)


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `products` | `array[BulkEditProductDto]` | Yes | Array of products to update. Note: The total count includes all prices within each product. |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `message` | `string` | Yes | Success message | Products updated successfully |
| `status` | `boolean` | Yes | Operation status | True |
| `updatedCount` | `number` | Yes | Number of products updated | 5 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/products/bulk-update/edit' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "products": []
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### POST Create Price for a Product

**Endpoint:** `POST https://services.leadconnectorhq.com/products/{productId}/price`

The "Create Price for a Product" API allows adding a new price associated with a specific product to the system. Use this endpoint to create a price with the specified details for a particular product. Ensure that the required information is provided in the request payload.

**Required Scope(s):** `products/prices.write`, `products/prices.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `productId` | `string` | Yes | ID of the product that needs to be used |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | The name of the price. | Price Name |
| `type` | `string` | Yes | The type of the price. | one_time |
| `currency` | `string` | Yes | The currency of the price. | USD |
| `amount` | `number` | Yes | The amount of the price. ( min: 0 ) | 99.99 |
| `recurring` | `object` | No | The recurring details of the price (if type is recurring). |  |
| `description` | `string` | No | A brief description of the price. |  |
| `membershipOffers` | `array[MembershipOfferDto]` | No | An array of membership offers associated with the price. |  |
| `trialPeriod` | `number` | No | The trial period duration in days (if applicable). | 7 |
| `totalCycles` | `number` | No | The total number of billing cycles for the price. ( min: 1 ) | 12 |
| `setupFee` | `number` | No | The setup fee for the price. | 10.99 |
| `variantOptionIds` | `array[string]` | No | An array of variant option IDs associated with the price. | ['option_id_1', 'option_id_2'] |
| `compareAtPrice` | `number` | No | The compare at price for the price. | 19.99 |
| `locationId` | `string` | Yes | The unique identifier of the location associated with the price. | 6578278e879ad2646715ba9c |
| `userId` | `string` | No | The unique identifier of the user who created the price. | 6578278e879ad2646715ba9c |
| `meta` | `object` | No | Additional metadata associated with the price. |  |
| `trackInventory` | `boolean` | No | Need to track inventory stock quantity | True |
| `availableQuantity` | `number` | No | Available inventory stock quantity | 5 |
| `allowOutOfStockPurchases` | `boolean` | No | Continue selling when out of stock | True |
| `sku` | `string` | No | The unique identifier of the SKU associated with the price | sku_123 |
| `shippingOptions` | `object` | No | Shipping options of the Price |  |
| `isDigitalProduct` | `boolean` | No | Is the product a digital product | True |
| `digitalDelivery` | `array[string]` | No | Digital delivery options |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | The unique identifier for the price. | 655b33aa2209e60b6adb87a7 |
| `membershipOffers` | `array[MembershipOfferDto]` | No | An array of membership offers associated with the price. |  |
| `variantOptionIds` | `array[string]` | No | An array of variant option IDs associated with the price. | ['h4z7u0im2q8', 'h3nst2ltsnn'] |
| `locationId` | `string` | No | The unique identifier for the location. | 3SwdhCsvxI8Au3KsPJt6 |
| `product` | `string` | No | The unique identifier for the associated product. | 655b33a82209e60b6adb87a5 |
| `userId` | `string` | No | The unique identifier for the user. | 6YAtzfzpmHAdj0e8GkKp |
| `name` | `string` | Yes | The name of the price. | Red / S |
| `type` | `string` | Yes | The type of the price (e.g., one_time). | one_time |
| `currency` | `string` | Yes | The currency code for the price. | INR |
| `amount` | `number` | Yes | The amount of the price. | 199999 |
| `recurring` | `object` | No | The recurring details of the price (if type is recurring). |  |
| `createdAt` | `string (date-time)` | No | The creation timestamp of the price. | 2023-11-20T10:23:38.645Z |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/products/:<productId>/price' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Price Name",
    "type": "one_time",
    "currency": "USD",
    "amount": 99.99,
    "description": "<description>",
    "membershipOffers": [],
    "trialPeriod": 7
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET List Prices for a Product

**Endpoint:** `GET https://services.leadconnectorhq.com/products/{productId}/price`

The "List Prices for a Product" API allows retrieving a paginated list of prices associated with a specific product. Customize your results by filtering prices or paginate through the list using the provided query parameters.

**Required Scope(s):** `products/prices.readonly`, `products/prices.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `productId` | `string` | Yes | ID of the product that needs to be used |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `limit` | `number` | No | The maximum number of items to be included in a single page of results |  |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |  |
| `locationId` | `string` | Yes | The unique identifier for the location. |  |
| `ids` | `string` | No | To filter the response only with the given price ids, Please provide with comma separated |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `prices` | `array[DefaultPriceResponseDto]` | Yes | An array of prices |  |
| `total` | `number` | Yes |  | 10 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/products/:<productId>/price' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET List Inventory

**Endpoint:** `GET https://services.leadconnectorhq.com/products/inventory`

The "List Inventory API allows the user to retrieve a paginated list of inventory items. Use this endpoint to fetch details for multiple items in the inventory based on the provided query parameters.

**Required Scope(s):** `products/prices.readonly`, `products/prices.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `limit` | `number` | No | The maximum number of items to be included in a single page of results |  |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |  |
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `search` | `string` | No | Search string for Variant Search |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `inventory` | `array[InventoryItemDto]` | Yes | List of inventory items |  |
| `total` | `object` | Yes | Total count of inventory items | {'total': 100} |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/products/inventory' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Update Inventory

**Endpoint:** `POST https://services.leadconnectorhq.com/products/inventory`

The Update Inventory API allows the user to bulk update the inventory for multiple items. Use this endpoint to update the available quantity and out-of-stock purchase settings for multiple items in the inventory.

**Required Scope(s):** `products/prices.write`, `products/prices.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `items` | `array[UpdateInventoryItemDto]` | Yes | Array of items to update in the inventory. |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/products/inventory' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "items": []
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Get Price by ID for a Product

**Endpoint:** `GET https://services.leadconnectorhq.com/products/{productId}/price/{priceId}`

The "Get Price by ID for a Product" API allows retrieving information for a specific price associated with a particular product using its unique identifier. Use this endpoint to fetch details for a single price based on the provided price ID and product ID.

**Required Scope(s):** `products/prices.readonly`, `products/prices.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `productId` | `string` | Yes | ID of the product that needs to be used |  |
| `priceId` | `string` | Yes | ID of the price that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | location Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | The unique identifier for the price. | 655b33aa2209e60b6adb87a7 |
| `membershipOffers` | `array[MembershipOfferDto]` | No | An array of membership offers associated with the price. |  |
| `variantOptionIds` | `array[string]` | No | An array of variant option IDs associated with the price. | ['h4z7u0im2q8', 'h3nst2ltsnn'] |
| `locationId` | `string` | No | The unique identifier for the location. | 3SwdhCsvxI8Au3KsPJt6 |
| `product` | `string` | No | The unique identifier for the associated product. | 655b33a82209e60b6adb87a5 |
| `userId` | `string` | No | The unique identifier for the user. | 6YAtzfzpmHAdj0e8GkKp |
| `name` | `string` | Yes | The name of the price. | Red / S |
| `type` | `string` | Yes | The type of the price (e.g., one_time). | one_time |
| `currency` | `string` | Yes | The currency code for the price. | INR |
| `amount` | `number` | Yes | The amount of the price. | 199999 |
| `recurring` | `object` | No | The recurring details of the price (if type is recurring). |  |
| `createdAt` | `string (date-time)` | No | The creation timestamp of the price. | 2023-11-20T10:23:38.645Z |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/products/:<productId>/price/:<priceId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Price by ID for a Product

**Endpoint:** `PUT https://services.leadconnectorhq.com/products/{productId}/price/{priceId}`

The "Update Price by ID for a Product" API allows modifying information for a specific price associated with a particular product using its unique identifier. Use this endpoint to update details for a single price based on the provided price ID and product ID.

**Required Scope(s):** `products/prices.write`, `products/prices.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `productId` | `string` | Yes | ID of the product that needs to be used |  |
| `priceId` | `string` | Yes | ID of the price that needs to be returned |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | The name of the price. | Price Name |
| `type` | `string` | Yes | The type of the price. | one_time |
| `currency` | `string` | Yes | The currency of the price. | USD |
| `amount` | `number` | Yes | The amount of the price. ( min: 0 ) | 99.99 |
| `recurring` | `object` | No | The recurring details of the price (if type is recurring). |  |
| `description` | `string` | No | A brief description of the price. |  |
| `membershipOffers` | `array[MembershipOfferDto]` | No | An array of membership offers associated with the price. |  |
| `trialPeriod` | `number` | No | The trial period duration in days (if applicable). | 7 |
| `totalCycles` | `number` | No | The total number of billing cycles for the price. ( min: 1 ) | 12 |
| `setupFee` | `number` | No | The setup fee for the price. | 10.99 |
| `variantOptionIds` | `array[string]` | No | An array of variant option IDs associated with the price. | ['option_id_1', 'option_id_2'] |
| `compareAtPrice` | `number` | No | The compare at price for the price. | 19.99 |
| `locationId` | `string` | Yes | The unique identifier of the location associated with the price. | 6578278e879ad2646715ba9c |
| `userId` | `string` | No | The unique identifier of the user who created the price. | 6578278e879ad2646715ba9c |
| `meta` | `object` | No | Additional metadata associated with the price. |  |
| `trackInventory` | `boolean` | No | Need to track inventory stock quantity | True |
| `availableQuantity` | `number` | No | Available inventory stock quantity | 5 |
| `allowOutOfStockPurchases` | `boolean` | No | Continue selling when out of stock | True |
| `sku` | `string` | No | The unique identifier of the SKU associated with the price | sku_123 |
| `shippingOptions` | `object` | No | Shipping options of the Price |  |
| `isDigitalProduct` | `boolean` | No | Is the product a digital product | True |
| `digitalDelivery` | `array[string]` | No | Digital delivery options |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | The unique identifier for the price. | 655b33aa2209e60b6adb87a7 |
| `membershipOffers` | `array[MembershipOfferDto]` | No | An array of membership offers associated with the price. |  |
| `variantOptionIds` | `array[string]` | No | An array of variant option IDs associated with the price. | ['h4z7u0im2q8', 'h3nst2ltsnn'] |
| `locationId` | `string` | No | The unique identifier for the location. | 3SwdhCsvxI8Au3KsPJt6 |
| `product` | `string` | No | The unique identifier for the associated product. | 655b33a82209e60b6adb87a5 |
| `userId` | `string` | No | The unique identifier for the user. | 6YAtzfzpmHAdj0e8GkKp |
| `name` | `string` | Yes | The name of the price. | Red / S |
| `type` | `string` | Yes | The type of the price (e.g., one_time). | one_time |
| `currency` | `string` | Yes | The currency code for the price. | INR |
| `amount` | `number` | Yes | The amount of the price. | 199999 |
| `recurring` | `object` | No | The recurring details of the price (if type is recurring). |  |
| `createdAt` | `string (date-time)` | No | The creation timestamp of the price. | 2023-11-20T10:23:38.645Z |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/products/:<productId>/price/:<priceId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Price Name",
    "type": "one_time",
    "currency": "USD",
    "amount": 99.99,
    "description": "<description>",
    "membershipOffers": [],
    "trialPeriod": 7
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Price by ID for a Product

**Endpoint:** `DELETE https://services.leadconnectorhq.com/products/{productId}/price/{priceId}`

The "Delete Price by ID for a Product" API allows deleting a specific price associated with a particular product using its unique identifier. Use this endpoint to remove a price from the system.

**Required Scope(s):** `products/prices.write`, `products/prices.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `productId` | `string` | Yes | ID of the product that needs to be used |  |
| `priceId` | `string` | Yes | ID of the price that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | location Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | returns true if the price is successfully deleted | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/products/:<productId>/price/:<priceId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Fetch Product Store Stats

**Endpoint:** `GET https://services.leadconnectorhq.com/products/store/{storeId}/stats`

API to fetch the total number of products, included in the store, and excluded from the store and other stats

**Required Scope(s):** `products.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `storeId` | `string` | Yes | Products related to the store |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `search` | `string` | No | The name of the product for searching. |  |
| `collectionIds` | `string` | No | Filter by product collection Ids. Supports comma separated values |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `totalProducts` | `number` | Yes | Total number of products | 100 |
| `includedInStore` | `number` | Yes | Number of products included in the store | 80 |
| `excludedFromStore` | `number` | Yes | Number of products excluded from the store | 20 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/products/store/:<storeId>/stats' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Action to include/exclude the product in store

**Endpoint:** `POST https://services.leadconnectorhq.com/products/store/{storeId}`

API to update the status of products in a particular store

**Required Scope(s):** `products.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `storeId` | `string` | Yes | Products related to the store |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `action` | `string` | Yes | Action to include or exclude the product from the store | include |
| `productIds` | `array[string]` | Yes | Array of product IDs | ['productId1', 'productId2'] |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/products/store/:<storeId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "action": "include",
    "productIds": [
        "productId1",
        "productId2"
    ]
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### POST Update product display priorities in store

**Endpoint:** `POST https://services.leadconnectorhq.com/products/store/{storeId}/priority`

API to set the display priority of products in a store


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `storeId` | `string` | Yes | Products related to the store |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `products` | `array[array]` | Yes | Array of products with their display priorities |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/products/store/:<storeId>/priority' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "products": []
}'
```

**Response Codes:** `200` | `400` | `401`


### GET Fetch Product Collections

**Endpoint:** `GET https://services.leadconnectorhq.com/products/collections`

Internal API to fetch the Product Collections

**Required Scope(s):** `products/collection.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `limit` | `number` | No | The maximum number of items to be included in a single page of results |  |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |  |
| `altId` | `string` | Yes | Location Id |  |
| `altType` | `string` | Yes | The type of alt. For now it is only LOCATION |  |
| `collectionIds` | `string` | No | Ids of the collections separated by comma(,) for search purposes |  |
| `name` | `string` | No | Query to search collection based on names |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[array]` | Yes | Array of Collections |  |
| `total` | `number` | Yes | The total count of the collections present, which is useful to calculate the pagination |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/products/collections' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Product Collection

**Endpoint:** `POST https://services.leadconnectorhq.com/products/collections`

Create a new Product Collection for a specific location

**Required Scope(s):** `products/collection.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | The type of alt. For now it is only LOCATION | LOCATION |
| `collectionId` | `string` | No | Unique Identifier of the Product Collection, Mongo Id | 66057f9d28536eae584ec047 |
| `name` | `string` | Yes | Name of the Product Collection | Best Sellers |
| `slug` | `string` | Yes | Slug of the Product Collection which helps in navigation | best-sellers |
| `image` | `string` | No | The URL of the image that is going to be displayed as the collection Thumbnail | http://example.com/watermark.png |
| `seo` | `object` | No | The metadata information which will be displayed in SEO previews |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `object` | Yes | created Collection |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/products/collections' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "LOCATION",
    "collectionId": "66057f9d28536eae584ec047",
    "name": "Best Sellers",
    "slug": "best-sellers",
    "image": "http://example.com/watermark.png"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Get Details about individual product collection

**Endpoint:** `GET https://services.leadconnectorhq.com/products/collections/{collectionId}`

**Required Scope(s):** `products/collection.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `collectionId` | `string` | Yes | Collection Id |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `object` | Yes | Collection Data |  |
| `status` | `boolean` | Yes | Status of the operation | True |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/products/collections/:<collectionId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Product Collection

**Endpoint:** `PUT https://services.leadconnectorhq.com/products/collections/{collectionId}`

Update a specific product collection with Id :collectionId

**Required Scope(s):** `products/collection.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `collectionId` | `string` | Yes | MongoId of the collection |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes | The type of alt. For now it is only LOCATION | LOCATION |
| `name` | `string` | No | Name of the Product Collection | Best Sellers |
| `slug` | `string` | No | Slug of the Product Collection which helps in navigation | best-sellers |
| `image` | `string` | No | The URL of the image that is going to be displayed as the collection Thumbnail | http://example.com/watermark.png |
| `seo` | `object` | No | The metadata information which will be displayed in SEO previews |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/products/collections/:<collectionId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "LOCATION",
    "name": "Best Sellers",
    "slug": "best-sellers",
    "image": "http://example.com/watermark.png"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Product Collection

**Endpoint:** `DELETE https://services.leadconnectorhq.com/products/collections/{collectionId}`

Delete specific product collection with Id :collectionId

**Required Scope(s):** `products/collection.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `collectionId` | `string` | Yes | MongoId of the collection |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id |  |
| `altType` | `string` | Yes | The type of alt. For now it is only LOCATION |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/products/collections/:<collectionId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Fetch Product Reviews

**Endpoint:** `GET https://services.leadconnectorhq.com/products/reviews`

API to fetch the Product Reviews

**Required Scope(s):** `products.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `limit` | `number` | No | The maximum number of items to be included in a single page of results |  |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |  |
| `sortField` | `string` | No | The field upon which the sort should be applied |  |
| `sortOrder` | `string` | No | The order of sort which should be applied for the sortField |  |
| `rating` | `number` | No | Key to filter the ratings  |  |
| `startDate` | `string` | No | The start date for filtering reviews |  |
| `endDate` | `string` | No | The end date for filtering reviews |  |
| `productId` | `string` | No | Comma-separated list of product IDs |  |
| `storeId` | `string` | No | Comma-separated list of store IDs |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[array]` | Yes | Array of Collections |  |
| `total` | `number` | Yes | The total count of the collections present, which is useful to calculate the pagination |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/products/reviews' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Fetch Review Count as per status

**Endpoint:** `GET https://services.leadconnectorhq.com/products/reviews/count`

API to fetch the Review Count as per status

**Required Scope(s):** `products.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `rating` | `number` | No | Key to filter the ratings  |  |
| `startDate` | `string` | No | The start date for filtering reviews |  |
| `endDate` | `string` | No | The end date for filtering reviews |  |
| `productId` | `string` | No | Comma-separated list of product IDs |  |
| `storeId` | `string` | No | Comma-separated list of store IDs |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[array]` | Yes | Array of review status counts |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/products/reviews/count' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Product Reviews

**Endpoint:** `PUT https://services.leadconnectorhq.com/products/reviews/{reviewId}`

Update status, reply, etc of a particular review

**Required Scope(s):** `products.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `reviewId` | `string` | Yes | Review Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `productId` | `string` | Yes | Product Id | 6578278e879ad2646715ba9c |
| `status` | `string` | Yes | Status of the review | approved |
| `reply` | `array[ProductReviewDto]` | No | Reply of the review |  |
| `rating` | `number` | No | Rating of the product | 4.5 |
| `headline` | `string` | No | Headline of the Review | Amazing product with great quality |
| `detail` | `string` | No | Detailed Review of the product | The product is for sure a must and recommended buy |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/products/reviews/:<reviewId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "productId": "6578278e879ad2646715ba9c",
    "status": "approved",
    "reply": [],
    "rating": "4.5",
    "headline": "Amazing product with great quality",
    "detail": "The product is for sure a must and recommended buy"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Product Review

**Endpoint:** `DELETE https://services.leadconnectorhq.com/products/reviews/{reviewId}`

Delete specific product review

**Required Scope(s):** `products.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `reviewId` | `string` | Yes | Review Id |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `productId` | `string` | Yes | Product Id of the product |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/products/reviews/:<reviewId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Update Product Reviews

**Endpoint:** `POST https://services.leadconnectorhq.com/products/reviews/bulk-update`

Update one or multiple product reviews: status, reply, etc.

**Required Scope(s):** `products.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `reviews` | `array[UpdateProductReviewObjectDto]` | Yes | Array of Product Reviews |  |
| `status` | `object` | Yes | Status of the review | approved |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/products/reviews/bulk-update' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "reviews": [],
    "status": "approved"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Get Product by ID

**Endpoint:** `GET https://services.leadconnectorhq.com/products/{productId}`

The "Get Product by ID" API allows to retrieve information for a specific product using its unique identifier. Use this endpoint to fetch details for a single product based on the provided product ID.

**Required Scope(s):** `products.readonly`, `products.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `productId` | `string` | Yes | ID or the slug of the product that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | location Id |  |
| `sendWishlistStatus` | `boolean` | No | Parameter which will decide whether to show the wishlisting status of products |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | The unique identifier for the product. | 655b33a82209e60b6adb87a5 |
| `description` | `string` | No | product description | This is a really awesome product |
| `variants` | `array[ProductVariantDto]` | No | An array of variants for the product. |  |
| `locationId` | `string` | Yes | The unique identifier for the location. | 3SwdhCsvxI8Au3KsPJt6 |
| `name` | `string` | Yes | The name of the product. | Awesome Product |
| `productType` | `string` | Yes | The type of the product (e.g., PHYSICAL). | PHYSICAL |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. | True |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the product. | 2023-11-20T10:23:36.515Z |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the product. | 2024-01-23T09:57:04.846Z |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. | abcde |
| `image` | `string` | No | The URL for the product image. | https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6 |
| `collectionIds` | `array[string]` | No | An array of category Ids for the product | ['65d71377c326ea78e1c47df5', '65d71377c326ea78e1c47d34'] |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/products/:<productId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Product by ID

**Endpoint:** `DELETE https://services.leadconnectorhq.com/products/{productId}`

The "Delete Product by ID" API allows deleting a specific product using its unique identifier. Use this endpoint to remove a product from the system.

**Required Scope(s):** `products.write`, `products.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `productId` | `string` | Yes | ID or the slug of the product that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | location Id |  |
| `sendWishlistStatus` | `boolean` | No | Parameter which will decide whether to show the wishlisting status of products |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | returns true if the product is successfully deleted | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/products/:<productId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Product by ID

**Endpoint:** `PUT https://services.leadconnectorhq.com/products/{productId}`

The "Update Product by ID" API allows modifying information for a specific product using its unique identifier. Use this endpoint to update details for a single product based on the provided product ID.

**Required Scope(s):** `products.write`, `products.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `productId` | `string` | Yes | ID or the slug of the product that needs to be returned |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | The name of the product. | Awesome Product |
| `locationId` | `string` | Yes | The unique identifier for the location. | 3SwdhCsvxI8Au3KsPJt6 |
| `description` | `string` | No | A brief description of the product. | Product description goes here. |
| `productType` | `string` | Yes |  |  |
| `image` | `string` | No | The URL for the product image. | https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6 |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. | abcde |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. | True |
| `medias` | `array[ProductMediaDto]` | No | An array of medias for the product. |  |
| `variants` | `array[ProductVariantDto]` | No | An array of variants for the product. |  |
| `collectionIds` | `array[string]` | No | An array of category Ids for the product | ['65d71377c326ea78e1c47df5', '65d71377c326ea78e1c47d34'] |
| `isTaxesEnabled` | `boolean` | No | Are there any taxes attached to the product. If this is true, taxes array cannot be empty. | True |
| `taxes` | `array[string]` | No | List of ids of Taxes attached to the Product. If taxes are passed, isTaxesEnabled should be true. | ['654492a4e6bef380114de15a'] |
| `automaticTaxCategoryId` | `string` | No | Tax category ID for Automatic taxes calculation. | 65d71377c326ea78e1c47df5 |
| `isLabelEnabled` | `boolean` | No | Is the product label enabled. If this is true, label object cannot be empty. | True |
| `label` | `object` | No | Details for Product Label |  |
| `slug` | `string` | No | The slug using which the product navigation will be handled | awesome-product |
| `seo` | `object` | No | SEO data for the product that will be displayed in the preview |  |
| `taxInclusive` | `boolean` | No | Whether the taxes should be included in the purchase price | True |
| `prices` | `array[string]` | No | The prices of the product |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | The unique identifier for the product. | 655b33a82209e60b6adb87a5 |
| `description` | `string` | No | product description | This is a really awesome product |
| `variants` | `array[ProductVariantDto]` | No | An array of variants for the product. |  |
| `locationId` | `string` | Yes | The unique identifier for the location. | 3SwdhCsvxI8Au3KsPJt6 |
| `name` | `string` | Yes | The name of the product. | Awesome Product |
| `productType` | `string` | Yes | The type of the product (e.g., PHYSICAL). | PHYSICAL |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. | True |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the product. | 2023-11-20T10:23:36.515Z |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the product. | 2024-01-23T09:57:04.846Z |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. | abcde |
| `image` | `string` | No | The URL for the product image. | https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6 |
| `collectionIds` | `array[string]` | No | An array of category Ids for the product | ['65d71377c326ea78e1c47df5', '65d71377c326ea78e1c47d34'] |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/products/:<productId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Awesome Product",
    "locationId": "3SwdhCsvxI8Au3KsPJt6",
    "description": "Product description goes here.",
    "productType": "<productType>",
    "image": "https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png",
    "statementDescriptor": "abcde",
    "availableInStore": true,
    "medias": []
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Product

**Endpoint:** `POST https://services.leadconnectorhq.com/products/`

The "Create Product" API allows adding a new product to the system. Use this endpoint to create a product with the specified details. Ensure that the required information is provided in the request payload.

**Required Scope(s):** `products.write`, `products.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | The name of the product. | Awesome Product |
| `locationId` | `string` | Yes | The unique identifier for the location. | 3SwdhCsvxI8Au3KsPJt6 |
| `description` | `string` | No | A brief description of the product. | Product description goes here. |
| `productType` | `string` | Yes |  |  |
| `image` | `string` | No | The URL for the product image. | https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6 |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. | abcde |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. | True |
| `medias` | `array[ProductMediaDto]` | No | An array of medias for the product. |  |
| `variants` | `array[ProductVariantDto]` | No | An array of variants for the product. |  |
| `collectionIds` | `array[string]` | No | An array of category Ids for the product | ['65d71377c326ea78e1c47df5', '65d71377c326ea78e1c47d34'] |
| `isTaxesEnabled` | `boolean` | No | Are there any taxes attached to the product. If this is true, taxes array cannot be empty. | True |
| `taxes` | `array[string]` | No | List of ids of Taxes attached to the Product. If taxes are passed, isTaxesEnabled should be true. | ['654492a4e6bef380114de15a'] |
| `automaticTaxCategoryId` | `string` | No | Tax category ID for Automatic taxes calculation. | 65d71377c326ea78e1c47df5 |
| `isLabelEnabled` | `boolean` | No | Is the product label enabled. If this is true, label object cannot be empty. | True |
| `label` | `object` | No | Details for Product Label |  |
| `slug` | `string` | No | The slug using which the product navigation will be handled | awesome-product |
| `seo` | `object` | No | SEO data for the product that will be displayed in the preview |  |
| `taxInclusive` | `boolean` | No | Whether the taxes should be included in the purchase price | True |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes | The unique identifier for the product. | 655b33a82209e60b6adb87a5 |
| `description` | `string` | No | product description | This is a really awesome product |
| `variants` | `array[ProductVariantDto]` | No | An array of variants for the product. |  |
| `locationId` | `string` | Yes | The unique identifier for the location. | 3SwdhCsvxI8Au3KsPJt6 |
| `name` | `string` | Yes | The name of the product. | Awesome Product |
| `productType` | `string` | Yes | The type of the product (e.g., PHYSICAL). | PHYSICAL |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. | True |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the product. | 2023-11-20T10:23:36.515Z |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the product. | 2024-01-23T09:57:04.846Z |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. | abcde |
| `image` | `string` | No | The URL for the product image. | https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6 |
| `collectionIds` | `array[string]` | No | An array of category Ids for the product | ['65d71377c326ea78e1c47df5', '65d71377c326ea78e1c47d34'] |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/products/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Awesome Product",
    "locationId": "3SwdhCsvxI8Au3KsPJt6",
    "description": "Product description goes here.",
    "productType": "<productType>",
    "image": "https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png",
    "statementDescriptor": "abcde",
    "availableInStore": true,
    "medias": []
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET List Products

**Endpoint:** `GET https://services.leadconnectorhq.com/products/`

The "List Products" API allows to retrieve a paginated list of products. Customize your results by filtering products based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve product information.

**Required Scope(s):** `products.readonly`, `products.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `limit` | `number` | No | The maximum number of items to be included in a single page of results |  |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |  |
| `locationId` | `string` | Yes | LocationId is the id of the sub-account |  |
| `search` | `string` | No | The name of the product for searching. |  |
| `collectionIds` | `string` | No | Filter by product category Ids. Supports comma separated values |  |
| `collectionSlug` | `string` | No | The slug value of the collection by which the collection would be searched |  |
| `expand` | `array` | No | Name of an entity whose data has to be fetched along with product. Possible entities are tax, stripe |  |
| `productIds` | `array` | No | List of product ids to be fetched. |  |
| `storeId` | `string` | No | fetch and project products based on the storeId |  |
| `includedInStore` | `boolean` | No | Separate products by which are included in the store and which are not |  |
| `availableInStore` | `boolean` | No | If the product is included in the online store |  |
| `sortOrder` | `string` | No | The order of sort which should be applied for the date |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `products` | `array[DefaultProductResponseDto]` | Yes | An array of products |  |
| `total` | `array[ListProductsStats]` | Yes | list products status |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/products/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


---

## Documents and Contracts API

Documentation for Documents and Contracts API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/proposals/document` | List documents | `—` |
| `POST` | `/proposals/document/send` | Send document | `—` |
| `GET` | `/proposals/templates` | List templates | `—` |
| `POST` | `/proposals/templates/send` | Send template | `—` |

### GET List documents

**Endpoint:** `GET https://services.leadconnectorhq.com/proposals/document`

List documents for a location


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id |  |
| `status` | `string` | No | Document status, pass as comma separated values |  |
| `paymentStatus` | `string` | No | Payment status, pass as comma separated values |  |
| `limit` | `number` | No | Limit to fetch number of records |  |
| `skip` | `number` | No | Skip number of records |  |
| `query` | `string` | No | Search string |  |
| `dateFrom` | `string` | No | Date start from (ISO 8601), dateFrom & DateTo must be provided together |  |
| `dateTo` | `string` | No | Date to (ISO 8601), dateFrom & DateTo must be provided together |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `documents` | `array[DocumentDto]` | Yes | List of documents |  |
| `total` | `number` | Yes | Total records available | 10 |
| `whiteLabelBaseUrl` | `number` | No | WhiteLabel url for document | https://example.com |
| `whiteLabelBaseUrlForInvoice` | `number` | No | WhiteLabel url for invoice | https://example.com |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/proposals/document' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400`


### POST Send document

**Endpoint:** `POST https://services.leadconnectorhq.com/proposals/document/send`

Send document to a client


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | hTlkh7t8gujsahgg93 |
| `documentId` | `string` | Yes | Document Id | hTlkh7t8gujsahgg93 |
| `documentName` | `string` | No | Document Name | new Document |
| `medium` | `string` | No | Medium to be used for sending the document | email |
| `ccRecipients` | `array[CCRecipientItem]` | No | CC Recipient | [{'id': 'u240JcS0E5qE0ziHnwMm', 'email': 'jim@gmail.com', 'i |
| `notificationSettings` | `object` | No |  | {'sender': {'fromName': '', 'fromEmail': ''}, 'receive': {'s |
| `sentBy` | `string` | Yes | Sent ByUser Id | 1234567890 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success status | True |
| `links` | `array[ProposalEstimateLinksDto]` | Yes | Links for all recipients |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/proposals/document/send' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "hTlkh7t8gujsahgg93",
    "documentId": "hTlkh7t8gujsahgg93",
    "documentName": "new Document",
    "medium": "email",
    "ccRecipients": [
        {
            "id": "u240JcS0E5qE0ziHnwMm",
            "email": "jim@gmail.com",
            "imageUrl": "",
            "contactName": "Jim Anton",
            "firstName": "Jim",
            "lastName": "Anton"
        }
    ],
    "notificationSettings": {
        "sender": {
            "fromName": "",
            "fromEmail": ""
        },
        "receive": {
            "subject": "",
            "templateId": ""
        }
    },
    "sentBy": "1234567890"
}'
```

**Response Codes:** `200` | `400`


### GET List templates

**Endpoint:** `GET https://services.leadconnectorhq.com/proposals/templates`

List document contract templates for a location


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id |  |
| `dateFrom` | `string` | No | Date start from (ISO 8601) |  |
| `dateTo` | `string` | No | Date to (ISO 8601) |  |
| `type` | `string` | No | Comma-separated template types. Valid values: proposal, estimate, contentLibrary |  |
| `name` | `string` | No | Template Name |  |
| `isPublicDocument` | `boolean` | No | If the docForm is a DocForm |  |
| `userId` | `string` | No | User Id, required when isPublicDocument is true |  |
| `limit` | `string` | No | Limit |  |
| `skip` | `string` | No | Skip |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[TemplateListResponseDTO]` | Yes | Array of templates |  |
| `total` | `number` | Yes | Total number of templates | 2 |
| `traceId` | `string` | No | Trace ID for request tracking | d5656876-86a5-46fb-84df-788f1da7937a |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/proposals/templates' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400`


### POST Send template

**Endpoint:** `POST https://services.leadconnectorhq.com/proposals/templates/send`

Send template to a client


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `templateId` | `string` | Yes | Template Id | hTlkh7t8gujsahgg93 |
| `userId` | `string` | Yes | User Id | hTlkh7t8gujsahgg93 |
| `sendDocument` | `boolean` | No | Send Document | True |
| `locationId` | `string` | Yes | Location Id | hTlkh7t8gujsahgg93 |
| `contactId` | `string` | Yes | Contact Id | hTlkh7t8gujsahgg93 |
| `opportunityId` | `string` | No | Opportunity Id | hTlkh7t8gujsahgg93 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success status | True |
| `links` | `array[ProposalEstimateLinksDto]` | Yes | Links for all recipients |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/proposals/templates/send' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "templateId": "hTlkh7t8gujsahgg93",
    "userId": "hTlkh7t8gujsahgg93",
    "sendDocument": true,
    "locationId": "hTlkh7t8gujsahgg93",
    "contactId": "hTlkh7t8gujsahgg93",
    "opportunityId": "hTlkh7t8gujsahgg93"
}'
```

**Response Codes:** `200` | `400`


---

## Store API

Documentation for store API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `POST` | `/store/shipping-zone` | Create Shipping Zone | `—` |
| `GET` | `/store/shipping-zone` | List Shipping Zones | `—` |
| `GET` | `/store/shipping-zone/{shippingZoneId}` | Get Shipping Zone | `—` |
| `PUT` | `/store/shipping-zone/{shippingZoneId}` | Update Shipping Zone | `—` |
| `DELETE` | `/store/shipping-zone/{shippingZoneId}` | Delete shipping zone | `—` |
| `POST` | `/store/shipping-zone/shipping-rates` | Get available shipping rates | `—` |
| `POST` | `/store/shipping-zone/{shippingZoneId}/shipping-rate` | Create Shipping Rate | `—` |
| `GET` | `/store/shipping-zone/{shippingZoneId}/shipping-rate` | List Shipping Rates | `—` |
| `GET` | `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}` | Get Shipping Rate | `—` |
| `PUT` | `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}` | Update Shipping Rate | `—` |
| `DELETE` | `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}` | Delete shipping rate | `—` |
| `POST` | `/store/shipping-carrier` | Create Shipping Carrier | `—` |
| `GET` | `/store/shipping-carrier` | List Shipping Carriers | `—` |
| `GET` | `/store/shipping-carrier/{shippingCarrierId}` | Get Shipping Carrier | `—` |
| `PUT` | `/store/shipping-carrier/{shippingCarrierId}` | Update Shipping Carrier | `—` |
| `DELETE` | `/store/shipping-carrier/{shippingCarrierId}` | Delete shipping carrier | `—` |
| `POST` | `/store/store-setting` | Create/Update Store Settings | `—` |
| `GET` | `/store/store-setting` | Get Store Settings | `—` |

### POST Create Shipping Zone

**Endpoint:** `POST https://services.leadconnectorhq.com/store/shipping-zone`

The "Create Shipping Zone" API allows adding a new shipping zone.


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the shipping zone | North zone |
| `countries` | `array[ShippingZoneCountryDto]` | Yes | List of countries that are available |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping zone data |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/store/shipping-zone' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "name": "North zone",
    "countries": []
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET List Shipping Zones

**Endpoint:** `GET https://services.leadconnectorhq.com/store/shipping-zone`

The "List Shipping Zone" API allows to retrieve a list of shipping zone.


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `limit` | `number` | No | The maximum number of items to be included in a single page of results |  |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |  |
| `withShippingRate` | `boolean` | No | Include shipping rates array |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `total` | `number` | Yes | Total number of items | 20 |
| `data` | `array[ShippingZoneSchema]` | Yes | An array of items |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/store/shipping-zone' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Shipping Zone

**Endpoint:** `GET https://services.leadconnectorhq.com/store/shipping-zone/{shippingZoneId}`

The "List Shipping Zone" API allows to retrieve a paginated list of shipping zone.


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingZoneId` | `string` | Yes | ID of the item that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `withShippingRate` | `boolean` | No | Include shipping rates array |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping zone data |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/store/shipping-zone/:<shippingZoneId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Shipping Zone

**Endpoint:** `PUT https://services.leadconnectorhq.com/store/shipping-zone/{shippingZoneId}`

The "update Shipping Zone" API allows update a shipping zone to the system. 


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingZoneId` | `string` | Yes | ID of the item that needs to be returned |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | No | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | No |  |  |
| `name` | `string` | No | Name of the shipping zone | North zone |
| `countries` | `array[ShippingZoneCountryDto]` | No | List of countries that are available |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping zone data |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/store/shipping-zone/:<shippingZoneId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "name": "North zone",
    "countries": []
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete shipping zone

**Endpoint:** `DELETE https://services.leadconnectorhq.com/store/shipping-zone/{shippingZoneId}`

Delete specific shipping zone with Id :shippingZoneId


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingZoneId` | `string` | Yes | ID of the item that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/store/shipping-zone/:<shippingZoneId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Get available shipping rates

**Endpoint:** `POST https://services.leadconnectorhq.com/store/shipping-zone/shipping-rates`

This return available shipping rates for country based on order amount


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `country` | `string` | Yes | Country code of the customer | US |
| `address` | `object` | No | Address of the customer |  |
| `amountAvailable` | `string` | No | it will not calculate the order amount form backend if it is true | US |
| `totalOrderAmount` | `number` | Yes | The amount of the price. ( min: 0.01 ) | 99.99 |
| `weightAvailable` | `boolean` | No | Flag to pass when the weight is already calculated and should not calculate again | True |
| `totalOrderWeight` | `number` | Yes | Estimated weight of the order calculated from the order creation side in kg(s) | 10 |
| `source` | `object` | Yes | Source of the order | {'type': 'order', 'subType': 'store'} |
| `products` | `array[ProductItem]` | Yes | An array of price IDs and quantity |  |
| `couponCode` | `string` | No | Coupon code | TEST |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `array[AvailableShippingRate]` | Yes | Shipping rate data |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/store/shipping-zone/shipping-rates' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "country": "US",
    "amountAvailable": "US",
    "totalOrderAmount": 99.99,
    "weightAvailable": true,
    "totalOrderWeight": 10
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### POST Create Shipping Rate

**Endpoint:** `POST https://services.leadconnectorhq.com/store/shipping-zone/{shippingZoneId}/shipping-rate`

The "Create Shipping Rate" API allows adding a new shipping rate.


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingZoneId` | `string` | Yes | ID of the item that needs to be returned |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the shipping zone | North zone |
| `description` | `string` | No | Delivery description | Ships next day |
| `currency` | `string` | Yes | The currency of the amount of the rate / handling fee | USD |
| `amount` | `number` | Yes | The amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a  | 99.99 |
| `conditionType` | `string` | Yes | Type of condition to provide the conditional pricing | price |
| `minCondition` | `number` | Yes | Minimum condition for applying this price. set 0 or null if there is no minimum | 99.99 |
| `maxCondition` | `number` | Yes | Maximum condition for applying this price. set 0 or null if there is no maximum | 99.99 |
| `isCarrierRate` | `boolean` | No | is this a carrier rate | True |
| `shippingCarrierId` | `string` | Yes | Shipping carrier id | 655b33a82209e60b6adb87a5 |
| `percentageOfRateFee` | `number` | No | Percentage of rate fee if it is a carrier rate. | 10.99 |
| `shippingCarrierServices` | `array[ShippingCarrierServiceDto]` | No | An array of items |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping zone data |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/store/shipping-zone/:<shippingZoneId>/shipping-rate' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "name": "North zone",
    "description": "Ships next day",
    "currency": "USD",
    "amount": 99.99,
    "conditionType": "price",
    "minCondition": 99.99
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET List Shipping Rates

**Endpoint:** `GET https://services.leadconnectorhq.com/store/shipping-zone/{shippingZoneId}/shipping-rate`

The "List Shipping Rate" API allows to retrieve a list of shipping rate.


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingZoneId` | `string` | Yes | ID of the item that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |
| `limit` | `number` | No | The maximum number of items to be included in a single page of results |  |
| `offset` | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `total` | `number` | Yes | Total number of items | 20 |
| `data` | `array[ShippingRateSchema]` | Yes | An array of items |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/store/shipping-zone/:<shippingZoneId>/shipping-rate' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Shipping Rate

**Endpoint:** `GET https://services.leadconnectorhq.com/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}`

The "List Shipping Rate" API allows to retrieve a paginated list of shipping rate.


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingZoneId` | `string` | Yes | ID of the shipping zone |  |
| `shippingRateId` | `string` | Yes | ID of the shipping rate that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping zone data |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/store/shipping-zone/:<shippingZoneId>/shipping-rate/:<shippingRateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Shipping Rate

**Endpoint:** `PUT https://services.leadconnectorhq.com/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}`

The "update Shipping Rate" API allows update a shipping rate to the system. 


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingZoneId` | `string` | Yes | ID of the shipping zone |  |
| `shippingRateId` | `string` | Yes | ID of the shipping rate that needs to be returned |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | No | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | No |  |  |
| `name` | `string` | No | Name of the shipping zone | North zone |
| `description` | `string` | No | Delivery description | Ships next day |
| `currency` | `string` | No | The currency of the amount of the rate / handling fee | USD |
| `amount` | `number` | No | The amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a  | 99.99 |
| `conditionType` | `string` | No | Type of condition to provide the conditional pricing | price |
| `minCondition` | `number` | No | Minimum condition for applying this price. set 0 or null if there is no minimum | 99.99 |
| `maxCondition` | `number` | No | Maximum condition for applying this price. set 0 or null if there is no maximum | 99.99 |
| `isCarrierRate` | `boolean` | No | is this a carrier rate | True |
| `shippingCarrierId` | `string` | No | Shipping carrier id | 655b33a82209e60b6adb87a5 |
| `percentageOfRateFee` | `number` | No | Percentage of rate fee if it is a carrier rate. | 10.99 |
| `shippingCarrierServices` | `array[ShippingCarrierServiceDto]` | No | An array of items |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping zone data |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/store/shipping-zone/:<shippingZoneId>/shipping-rate/:<shippingRateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "name": "North zone",
    "description": "Ships next day",
    "currency": "USD",
    "amount": 99.99,
    "conditionType": "price",
    "minCondition": 99.99
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete shipping rate

**Endpoint:** `DELETE https://services.leadconnectorhq.com/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}`

Delete specific shipping rate with Id :shippingRateId


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingZoneId` | `string` | Yes | ID of the shipping zone |  |
| `shippingRateId` | `string` | Yes | ID of the shipping rate that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/store/shipping-zone/:<shippingZoneId>/shipping-rate/:<shippingRateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Shipping Carrier

**Endpoint:** `POST https://services.leadconnectorhq.com/store/shipping-carrier`

The "Create Shipping Carrier" API allows adding a new shipping carrier.


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `name` | `string` | Yes | Name of the shipping carrier | FedEx |
| `callbackUrl` | `string` | Yes | The URL endpoint that GHL needs to retrieve shipping rates. This must be a public URL. | https://example.com/get-shipping-rates |
| `services` | `array[ShippingCarrierServiceDto]` | No | An array of available shipping carrier services |  |
| `allowsMultipleServiceSelection` | `boolean` | No | The seller can choose multiple services while creating shipping rates if this is true. | True |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping carrier data |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/store/shipping-carrier' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "name": "FedEx",
    "callbackUrl": "https://example.com/get-shipping-rates",
    "services": [],
    "allowsMultipleServiceSelection": true
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET List Shipping Carriers

**Endpoint:** `GET https://services.leadconnectorhq.com/store/shipping-carrier`

The "List Shipping Carrier" API allows to retrieve a list of shipping carrier.


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `array[ShippingCarrierSchema]` | Yes | An array of items |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/store/shipping-carrier' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Shipping Carrier

**Endpoint:** `GET https://services.leadconnectorhq.com/store/shipping-carrier/{shippingCarrierId}`

The "List Shipping Carrier" API allows to retrieve a paginated list of shipping carrier.


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingCarrierId` | `string` | Yes | ID of the shipping carrier that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping carrier data |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/store/shipping-carrier/:<shippingCarrierId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Shipping Carrier

**Endpoint:** `PUT https://services.leadconnectorhq.com/store/shipping-carrier/{shippingCarrierId}`

The "update Shipping Carrier" API allows update a shipping carrier to the system. 


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingCarrierId` | `string` | Yes | ID of the shipping carrier that needs to be returned |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | No | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | No |  |  |
| `name` | `string` | No | Name of the shipping carrier | FedEx |
| `callbackUrl` | `string` | No | The URL endpoint that GHL needs to retrieve shipping rates. This must be a public URL. | https://example.com/get-shipping-rates |
| `services` | `array[ShippingCarrierServiceDto]` | No | An array of available shipping carrier services |  |
| `allowsMultipleServiceSelection` | `boolean` | No | The seller can choose multiple services while creating shipping rates if this is true. | True |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping carrier data |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/store/shipping-carrier/:<shippingCarrierId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>",
    "name": "FedEx",
    "callbackUrl": "https://example.com/get-shipping-rates",
    "services": [],
    "allowsMultipleServiceSelection": true
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete shipping carrier

**Endpoint:** `DELETE https://services.leadconnectorhq.com/store/shipping-carrier/{shippingCarrierId}`

Delete specific shipping carrier with Id :shippingCarrierId


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `shippingCarrierId` | `string` | Yes | ID of the shipping carrier that needs to be returned |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/store/shipping-carrier/:<shippingCarrierId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create/Update Store Settings

**Endpoint:** `POST https://services.leadconnectorhq.com/store/store-setting`

Create or update store settings by altId and altType.


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id | 6578278e879ad2646715ba9c |
| `altType` | `string` | Yes |  |  |
| `shippingOrigin` | `object` | Yes | Shipping origin address |  |
| `storeOrderNotification` | `object` | No | Store order notification email |  |
| `storeOrderFulfillmentNotification` | `object` | No | Store order fulfillment notification email |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping carrier data |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/store/store-setting' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "6578278e879ad2646715ba9c",
    "altType": "<altType>"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Get Store Settings

**Endpoint:** `GET https://services.leadconnectorhq.com/store/store-setting`

Get store settings by altId and altType.


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id or Agency Id |  |
| `altType` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `boolean` | Yes | Status of api action | True |
| `message` | `string` | No | Success message | Successfully created |
| `data` | `object` | Yes | Shipping carrier data |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/store/store-setting' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


---
## References

[1]: https://marketplace.gohighlevel.com/docs/ghl/ "GHL API Marketplace Documentation"
[2]: https://github.com/GoHighLevel/highlevel-api-docs "GHL API v2 GitHub Repository"
[3]: https://services.leadconnectorhq.com "GHL API Base URL"
[4]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/invoices.json "GHL Invoices API OpenAPI Schema"
[5]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/opportunities.json "GHL Opportunities API OpenAPI Schema"
[6]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/payments.json "GHL Payments API OpenAPI Schema"
[7]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/products.json "GHL Products API OpenAPI Schema"
[8]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/proposals.json "GHL Proposals API OpenAPI Schema"
[9]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/store.json "GHL Store API OpenAPI Schema"