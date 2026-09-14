# Knowledge Base API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/knowledge-base.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Knowledge Base API

## Faqs

### Get all FAQs by knowledge base with pagination support

**Endpoint:** `GET /knowledge-bases/faqs`
**Token Type:** Location-Access

Retrieves FAQs for a knowledge base. Supports pagination using limit and lastFaqId parameters.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `knowledgeBaseId` | query | `string` | Yes | knowledge base ID as string |
| `locationId` | query | `string` | Yes | location ID as string |
| `limit` | query | `number` | No | Limit the number of FAQs returned |
| `lastFaqId` | query | `string` | No | Last FAQ ID for pagination (cursor-based) |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | FAQs retrieved successfully | `ListFaqsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Create a new FAQ inside knowledge base

**Endpoint:** `POST /knowledge-bases/faqs`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AddFaqDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | FAQ created successfully | `CreateFaqResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Update an existing knowledge base FAQ

**Endpoint:** `PUT /knowledge-bases/faqs/{id}`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | faq ID as string |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateFaqBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | FAQ updated successfully | `UpdateFaqResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Delete an existing knowledge base FAQ

**Endpoint:** `DELETE /knowledge-bases/faqs/{id}`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | faq ID as string |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | FAQ deleted successfully | `DeleteFaqResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

## Web Crawler

### Get all trained page links by knowledge base

**Endpoint:** `GET /knowledge-bases/crawler`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `knowledgeBaseId` | query | `string` | Yes | knowledge base ID as string |
| `locationId` | query | `string` | Yes | location ID as string |
| `page` | query | `number` | No | Page number |
| `pageLength` | query | `number` | No | Records per page |
| `query` | query | `string` | No | query to filter on url links |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Trained page links retrieved successfully | `GetAllUrlsByKnowledgeBaseResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Start crawling and discover pages for training

**Endpoint:** `POST /knowledge-bases/crawler`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `DiscoverWebsiteRequestDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Crawling and discovery started successfully | `DiscoverWebsiteResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Delete trained pages

**Endpoint:** `DELETE /knowledge-bases/crawler`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `DeleteWebsiteUrlRequestDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Selected pages deleted successfully | `DeleteWebsiteUrlResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Get crawling status for the latest operation

**Endpoint:** `GET /knowledge-bases/crawler/status`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location ID as string |
| `operationId` | query | `string` | Yes | operation id as string |
| `knowledgeBaseId` | query | `string` | Yes | knowledge base id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Operation status fetched successfully | `CrawlingStatusResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Train discovered website pages and ingest into the knowledge base

**Endpoint:** `POST /knowledge-bases/crawler/train`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `TrainDiscoveredUrlsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Pages trained successfully | `TrainDiscoveredUrlsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

## Knowledge Base

### Get knowledge base by ID

**Endpoint:** `GET /knowledge-bases/{knowledgeBaseId}`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `knowledgeBaseId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Knowledge base by ID retrieved successfully | `GetKnowledgeBaseByIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete a knowledge base

**Endpoint:** `DELETE /knowledge-bases/{knowledgeBaseId}`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `knowledgeBaseId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Knowledge base deleted successfully | `DeleteKnowledgeBaseResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update a knowledge base

**Endpoint:** `PUT /knowledge-bases/{id}`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateKnowledgeBaseDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Knowledge base updated successfully | `UpdateKnowledgeBaseResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get all knowledge bases for a location by location Id (paginated)

**Endpoint:** `GET /knowledge-bases/`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `query` | query | `string` | No | search query for knowledge base name |
| `limit` | query | `number` | No | Maximum number of knowledge bases to return |
| `lastKnowledgeBaseId` | query | `string` | No | ID of the last knowledge base from the previous page (for pagination) |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Paginated knowledge bases retrieved successfully | `GetAllKnowledgeBasesPaginatedResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create a new knowledge base (max 15 knowledge bases per location)

**Endpoint:** `POST /knowledge-bases/`
**Token Type:** Location-Access

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateKnowledgeBaseDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Knowledge base created successfully | `CreateKnowledgeBaseResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Schemas

### BadRequestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `string` | No | — |

### UnauthorizedDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `string` | No | — |
| `error` | `string` | No | — |

### UnprocessableDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `array<string>` | No | — |
| `error` | `string` | No | — |

### InternalServerErrorDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `string` | No | — |

### FaqResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | FAQ ID as string |
| `question` | `string` | Yes | FAQ question |
| `questionLowerCase` | `string` | Yes | FAQ question in lowercase |
| `answer` | `string` | Yes | FAQ answer |
| `knowledgeBaseId` | `string` | Yes | Knowledge base ID |
| `locationId` | `string` | Yes | Location ID |
| `trainedUrlId` | `string` | Yes | Trained URL ID |
| `deleted` | `boolean` | Yes | Whether the FAQ is deleted |
| `createdAt` | `string` | Yes | Date when FAQ was created |
| `updatedAt` | `string` | Yes | Date when FAQ was last updated |

### ListFaqsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | Total count of all FAQs in the knowledge base |
| `faqs` | `array<FaqResponseDTO>` | Yes | Array of FAQ objects |
| `lastFaqId` | `string` | No | Last FAQ ID for pagination (use as lastFaqId in next request) |
| `hasMore` | `boolean` | No | Whether there are more FAQs available |

### AddFaqDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | location ID as string |
| `question` | `string` | Yes | faq question as a string |
| `answer` | `string` | Yes | faq answer as a string |
| `knowledgeBaseId` | `string` | Yes | knowledge base ID as string |

### CreateFaqResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status of the operation |
| `faq` | `FaqResponseDTO` | Yes | Created FAQ details |

### UpdateFaqBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `question` | `string` | Yes | faq question as a string |
| `answer` | `string` | Yes | faq answer as a string |

### UpdateFaqResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status of the update operation |

### DeleteFaqResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status of the delete operation |

### CrawledUrlDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the URL |
| `url` | `string` | Yes | The actual URL that was crawled |
| `title` | `string` | Yes | Title of the webpage |
| `status` | `string` | Yes | Current processing status of the URL |
| `locationId` | `string` | Yes | Location ID associated with this URL |
| `knowledgeBaseId` | `string` | Yes | Knowledge base ID this URL belongs to |
| `content` | `string` | Yes | URL to the stored content file |
| `contentEditedByUser` | `boolean` | Yes | Whether the content was edited by user |
| `updatedAt` | `string` | Yes | Last updated timestamp |

### GetAllUrlsByKnowledgeBaseResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | Total count of URLs in the knowledge base |
| `urls` | `array<CrawledUrlDTO>` | Yes | Array of crawled URLs with their details |

### ErrorDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `stack` | `string` | Yes | Error stack trace |
| `response` | `string` | Yes | Error response message |
| `status` | `number` | Yes | HTTP status code |
| `options` | `object` | No | Additional options (nullable) |
| `message` | `string` | Yes | Error message |
| `name` | `string` | Yes | Error name/type |

### CrawlingRecordDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | Yes | URL being crawled |
| `id` | `string` | Yes | Unique record identifier |
| `title` | `string` | No | Page title (for successful/pending records) |
| `error` | `ErrorDetailsDTO` | No | Error details (for failed records) |

### CrawlingAggregateDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Status grouping identifier |
| `records` | `array<CrawlingRecordDTO>` | Yes | Array of records for this status |

### OperationDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `discoveredUrlsCount` | `number` | Yes | Number of URLs discovered |
| `trainedUrlsCount` | `number` | Yes | Number of URLs successfully trained |
| `_id` | `string` | Yes | Operation unique identifier |
| `locationId` | `string` | Yes | Associated location ID |
| `status` | `string` | Yes | Current operation status |
| `url` | `string` | Yes | Base URL being crawled |
| `mode` | `string` | Yes | Crawling mode used |
| `knowledgeBaseId` | `string` | Yes | Knowledge base ID |
| `createdAt` | `string` | Yes | Operation creation timestamp |
| `updatedAt` | `string` | Yes | Last update timestamp |
| `__v` | `number` | Yes | Version field |
| `robotsFileData` | `string` | No | Robots.txt file content |

### CrawlingStatusDataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregate` | `array<CrawlingAggregateDTO>` | Yes | Aggregated crawling results by status |
| `operationDetails` | `OperationDetailsDTO` | Yes | Detailed operation information |

### CrawlingStatusResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Indicates if the operation was successful |
| `data` | `CrawlingStatusDataDTO` | Yes | Detailed crawling status data |

### DiscoverWebsiteRequestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID as string |
| `url` | `string` | Yes | Website URL as string |
| `option` | `string` | Yes | Mode as string |
| `knowledgeBaseId` | `string` | Yes | knowledge base ID as string |

### DiscoverWebsiteDataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `operationId` | `string` | Yes | Operation ID for tracking the discovery process |
| `status` | `string` | Yes | Current status of the website discovery operation |
| `url` | `string` | Yes | The URL being discovered/crawled |

### DiscoverWebsiteResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Indicates if the operation was successful |
| `data` | `DiscoverWebsiteDataDTO` | Yes | Data containing operation details |

### TrainDiscoveredUrlsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID as string |
| `urlIds` | `array<string>` | Yes | List of Object ids of the discovered urls |
| `knowledgeBaseId` | `string` | Yes | knowledge base id |
| `operationId` | `string` | Yes | operation id as string |

### TrainDiscoveredUrlsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Indicates if the operation was successful |

### DeleteWebsiteUrlRequestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `knowledgeBaseId` | `string` | Yes | knowledge base ID as string |
| `locationId` | `string` | Yes | location ID as string |
| `urlIds` | `array<string>` | Yes | List of trained urls ids ( fetched from the Get all trained page links by knowledge base endpoint) |

### DeleteWebsiteUrlResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Indicates if the operation was successful |

### KnowledgeBaseListItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Knowledge base ID |
| `name` | `string` | Yes | Knowledge base name |
| `createdAt` | `string` | Yes | Date when knowledge base was created |

### GetAllKnowledgeBasesPaginatedDataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `knowledgeBases` | `array<KnowledgeBaseListItemDTO>` | Yes | Array of knowledge bases |
| `activeCount` | `number` | Yes | Total count of all active knowledge bases |
| `hasMore` | `boolean` | Yes | Whether there are more knowledge bases available |
| `lastKnowledgeBaseId` | `string` | No | ID of the last knowledge base in this page (use for next page request) |

### GetAllKnowledgeBasesPaginatedResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status of the operation |
| `data` | `GetAllKnowledgeBasesPaginatedDataDTO` | Yes | Paginated knowledge bases data |

### KnowledgeBaseMetadataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `faqs` | `number` | Yes | Number of FAQs in the knowledge base |
| `urls` | `number` | Yes | Number of URLs in the knowledge base |
| `richText` | `number` | Yes | Number of rich text documents in the knowledge base |
| `files` | `number` | Yes | Number of files in the knowledge base |
| `webSearches` | `number` | Yes | Number of web searche configs in the knowledge base |
| `tables` | `number` | Yes | Number of tables in the knowledge base |

### GetKnowledgeBaseByIdDataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Knowledge base ID |
| `name` | `string` | Yes | Knowledge base name |
| `nameLowerCase` | `string` | Yes | Knowledge base name in lowercase |
| `locationId` | `string` | Yes | Location ID |
| `deleted` | `boolean` | Yes | Whether the knowledge base is deleted |
| `createdAt` | `string` | Yes | Date when knowledge base was created |
| `updatedAt` | `string` | Yes | Date when knowledge base was last updated |
| `kbMetadata` | `KnowledgeBaseMetadataDTO` | Yes | Knowledge base metadata with content counts |
| `isDefault` | `boolean` | No | Whether the knowledge base is default or not |

### GetKnowledgeBaseByIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status of the operation |
| `data` | `GetKnowledgeBaseByIdDataDTO` | Yes | Knowledge base details |

### CreateKnowledgeBaseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | — |
| `description` | `string` | No | — |
| `locationId` | `string` | Yes | — |

### KnowledgeBaseDataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Knowledge base ID |
| `name` | `string` | Yes | Knowledge base name |
| `nameLowerCase` | `string` | Yes | Knowledge base name in lowercase |
| `locationId` | `string` | Yes | Location ID |
| `kbMetadata` | `object` | Yes | Knowledge base metadata |
| `deleted` | `boolean` | Yes | Whether the knowledge base is deleted |
| `createdAt` | `string` | Yes | Date when knowledge base was created |
| `updatedAt` | `string` | Yes | Date when knowledge base was last updated |

### CreateKnowledgeBaseResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status of the operation |
| `data` | `KnowledgeBaseDataDTO` | Yes | Created knowledge base details |

### UpdateKnowledgeBaseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | field to update the name of the knowledge base |
| `description` | `string` | No | field to update the description of the knowledge base |

### UpdateKnowledgeBaseResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |

### DeleteKnowledgeBaseResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
