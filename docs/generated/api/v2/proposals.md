# Documents and Contracts API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/proposals.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Documents and Contracts API

## Documents

### List documents

**Endpoint:** `GET /proposals/document`
**Token Type:** Location-Access, Agency-Access

List documents for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `locationId` | query | `string` | Yes | Location Id |
| `status` | query | `string` | No | Document status, pass as comma separated values |
| `paymentStatus` | query | `string` | No | Payment status, pass as comma separated values |
| `limit` | query | `number` | No | Limit to fetch number of records |
| `skip` | query | `number` | No | Skip number of records |
| `query` | query | `string` | No | Search string |
| `dateFrom` | query | `string` | No | Date start from (ISO 8601), dateFrom & DateTo must be provided together |
| `dateTo` | query | `string` | No | Date to (ISO 8601), dateFrom & DateTo must be provided together |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Document fetched successfully | `DocumentListResponseDto` |
| `400` | Unprocessable Entity | `BadRequestDTO` |

### Send document

**Endpoint:** `POST /proposals/document/send`
**Token Type:** Location-Access, Agency-Access

Send document to a client

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SendDocumentDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Document sent successfully | `SendDocumentResponseDto` |
| `400` | Unprocessable Entity | `BadRequestDTO` |

## Templates

### List templates

**Endpoint:** `GET /proposals/templates`
**Token Type:** Location-Access, Agency-Access

List document contract templates for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `locationId` | query | `string` | Yes | Location Id |
| `dateFrom` | query | `string` | No | Date start from (ISO 8601) |
| `dateTo` | query | `string` | No | Date to (ISO 8601) |
| `type` | query | `string` | No | Comma-separated template types. Valid values: proposal, estimate, contentLibrary |
| `name` | query | `string` | No | Template Name |
| `isPublicDocument` | query | `boolean` | No | If the docForm is a DocForm |
| `userId` | query | `string` | No | User Id, required when isPublicDocument is true |
| `limit` | query | `string` | No | Limit |
| `skip` | query | `string` | No | Skip |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Templates fetched successfully | `TemplateListPaginationResponseDTO` |
| `400` | Unprocessable Entity | `BadRequestDTO` |

### Send template

**Endpoint:** `POST /proposals/templates/send`
**Token Type:** Location-Access, Agency-Access

Send template to a client

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SendDocumentFromPublicApiBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Document sent successfully | `SendTemplateResponseDto` |
| `400` | Unprocessable Entity | `BadRequestDTO` |

## Schemas

### EntityReference

Entity type

Type: `string`

### ELEMENTS_LOOKUP

Element type

Type: `string`

### FillableFieldsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fieldId` | `string` | Yes | Field Id |
| `isRequired` | `boolean` | Yes | Is the field required |
| `hasCompleted` | `boolean` | Yes | Has the field been completed |
| `recipient` | `string` | Yes | Recipient |
| `entityType` | `EntityReference` | Yes | — |
| `id` | `string` | Yes | Id |
| `type` | `ELEMENTS_LOOKUP` | Yes | — |
| `value` | `string` | Yes | Value of the field |

### DiscountDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the discount |
| `value` | `number` | Yes | Discount value (either a percentage or custom amount) |
| `type` | `string` | Yes | Type of discount |

### GrandTotalDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Total amount before discounts |
| `currency` | `string` | Yes | Currency of the total amount |
| `discountPercentage` | `number` | Yes | Total discount percentage applied |
| `discounts` | `array<DiscountDto>` | Yes | List of applied discounts |

### RecipientItem

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Recipient Id |
| `firstName` | `string` | No | Recipient First Name |
| `lastName` | `string` | No | Recipient Last Name |
| `email` | `string` | Yes | Recipient Email |
| `phoneNumber` | `string` | No | Recipient Phone Number |
| `phone` | `string` | No | Recipient Phone |
| `hasCompleted` | `boolean` | Yes | Recipient has completed the document |
| `role` | `string` | Yes | Recipient role |
| `isPrimary` | `boolean` | Yes | Recipient is primary |
| `signingOrder` | `number` | Yes | Recipient signing order |
| `imgUrl` | `string` | No | Recipient image url |
| `ip` | `string` | No | Recipient ip |
| `userAgent` | `string` | No | Recipient user agent |
| `signedDate` | `string` | No | Recipient signed date |
| `contactName` | `string` | No | Recipient contact name |
| `country` | `string` | No | Recipient country |
| `entityName` | `string` | No | Recipient entity name |
| `initialsImgUrl` | `string` | No | Recipient initials image url |
| `lastViewedAt` | `string` | No | Recipient last viewed date |
| `shareLink` | `string` | No | Share link |

### ProposalEstimateLinksDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `referenceId` | `string` | Yes | Reference ID |
| `documentId` | `string` | Yes | Document ID |
| `recipientId` | `string` | Yes | Recipient ID |
| `entityName` | `string` | Yes | Entity name that the recipient belongs to |
| `recipientCategory` | `string` | Yes | Recipient category (recipient, cc, or bcc) |
| `documentRevision` | `number` | Yes | Document revision number |
| `createdBy` | `string` | Yes | Created by user ID |
| `deleted` | `boolean` | Yes | Whether the document is deleted |

### DocumentDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `documentId` | `string` | Yes | Document Id |
| `_id` | `string` | Yes | Unique identifier |
| `name` | `string` | Yes | Name of the document |
| `type` | `string` | Yes | Type of the document |
| `deleted` | `boolean` | Yes | Whether the document is deleted |
| `isExpired` | `boolean` | Yes | Whether the document is expired |
| `documentRevision` | `number` | Yes | Number of times document is moved to draft state |
| `fillableFields` | `array<FillableFieldsDTO>` | Yes | Fillable fields |
| `grandTotal` | `GrandTotalDto` | Yes | Grand total object of the document |
| `locale` | `string` | Yes | Locale of the location |
| `status` | `array<string>` | Yes | Document status |
| `paymentStatus` | `array<string>` | Yes | Payment status |
| `recipients` | `array<RecipientItem>` | Yes | Recipients |
| `links` | `array<ProposalEstimateLinksDto>` | Yes | Links for the document if its sent |
| `updatedAt` | `string` | Yes | Date start from (ISO 8601) |
| `createdAt` | `string` | Yes | Date to (ISO 8601) |

### DocumentListResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `documents` | `array<DocumentDto>` | Yes | List of documents |
| `total` | `number` | Yes | Total records available |
| `whiteLabelBaseUrl` | `number` | No | WhiteLabel url for document |
| `whiteLabelBaseUrlForInvoice` | `number` | No | WhiteLabel url for invoice |

### BadRequestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `string` | No | — |

### CCRecipientItem

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | Email |
| `id` | `string` | Yes | Contact ID |
| `imageUrl` | `string` | Yes | Contact Image URL |
| `contactName` | `string` | Yes | Contact Name |
| `firstName` | `string` | Yes | First Name |
| `lastName` | `string` | Yes | Last Name |

### NotificationSendSettingDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `templateId` | `string` | Yes | — |
| `subject` | `string` | Yes | — |

### NotificationSenderSettingDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fromEmail` | `string` | Yes | — |
| `fromName` | `string` | Yes | — |

### NotificationSettingsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `receive` | `NotificationSendSettingDto` | Yes | — |
| `sender` | `NotificationSenderSettingDto` | Yes | — |

### SendDocumentDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `documentId` | `string` | Yes | Document Id |
| `documentName` | `string` | No | Document Name |
| `medium` | `string` | No | Medium to be used for sending the document |
| `ccRecipients` | `array<CCRecipientItem>` | No | CC Recipient |
| `notificationSettings` | `NotificationSettingsDto` | No | — |
| `sentBy` | `string` | Yes | Sent ByUser Id |

### SendDocumentResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status |
| `links` | `array<ProposalEstimateLinksDto>` | Yes | Links for all recipients |

### TemplateListResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Template ID |
| `deleted` | `boolean` | Yes | Whether the template is deleted |
| `version` | `number` | Yes | Template version |
| `name` | `string` | Yes | Template name |
| `locationId` | `string` | Yes | Location ID |
| `type` | `string` | Yes | Template type |
| `updatedBy` | `string` | Yes | User ID who last updated the template |
| `isPublicDocument` | `boolean` | Yes | Whether the template is a public document |
| `createdAt` | `string` | Yes | Template creation date |
| `updatedAt` | `string` | Yes | Template last update date |
| `id` | `string` | Yes | Template ID (alias for _id) |
| `documentCount` | `number` | No | Document count (only present when isPublicDocument is true) |
| `docFormUrl` | `string` | No | Document form URL (only present when isPublicDocument is true) |

### TemplateListPaginationResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array<TemplateListResponseDTO>` | Yes | Array of templates |
| `total` | `number` | Yes | Total number of templates |
| `traceId` | `string` | No | Trace ID for request tracking |

### SendDocumentFromPublicApiBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `templateId` | `string` | Yes | Template Id |
| `userId` | `string` | Yes | User Id |
| `sendDocument` | `boolean` | No | Send Document |
| `locationId` | `string` | Yes | Location Id |
| `contactId` | `string` | Yes | Contact Id |
| `opportunityId` | `string` | No | Opportunity Id |

### SendTemplateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status |
| `links` | `array<ProposalEstimateLinksDto>` | Yes | Links for all recipients |

### UnauthorizedDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `string` | No | — |
| `error` | `string` | No | — |
