# Brand Boards API v3

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/brand-boards-v3.json). Do not edit this generated file directly.

**API Version:** v3
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Brand Boards API

## API Version v3

All APIs available via `/v3` route prefix with AIP-compliant responses.

## Brand Voices

### List Brand Voices

**Endpoint:** `GET /brand-boards/locations/{locationId}/brand-voices`
**Token Type:** Location-Access

Get list of brand voices for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `limit` | query | `number` | No | Number of brand voices to return. Defaults to 10, minimum is 1, maximum is 20 |
| `offset` | query | `number` | No | Number of brand voices to skip for pagination. Defaults to 0, minimum is 0 |
| `search` | query | `string` | No | Search text for brand voice name |
| `deleted` | query | `boolean` | No | Whether to return deleted brand voices. Defaults to false |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `ListBrandVoicesPublicV1ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Brand Voice

**Endpoint:** `POST /brand-boards/locations/{locationId}/brand-voices`
**Token Type:** Location-Access

Create a brand voice for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateBrandVoicePublicV1BodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Created | `CreateBrandVoicePublicV1ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Brand Voice

**Endpoint:** `GET /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}`
**Token Type:** Location-Access

Get a brand voice by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `brandVoiceId` | path | `string` | Yes | Brand voice ID |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `GetBrandVoicePublicV1ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Brand Voice

**Endpoint:** `PATCH /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}`
**Token Type:** Location-Access

Update a brand voice by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `brandVoiceId` | path | `string` | Yes | Brand voice ID |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateBrandVoicePublicV1BodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `UpdateBrandVoicePublicV1ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Brand Voice

**Endpoint:** `DELETE /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}`
**Token Type:** Location-Access

Delete a brand voice by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `brandVoiceId` | path | `string` | Yes | Brand voice ID |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `DeleteBrandVoicePublicV1ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Set Default Brand Voice

**Endpoint:** `POST /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}/default`
**Token Type:** Location-Access

Set a brand voice as the default for a location. The previous default will be unset.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID |
| `brandVoiceId` | path | `string` | Yes | Brand voice ID |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `SetDefaultBrandVoicePublicV1ResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |

## Brand Boards

### Get Brand Boards

**Endpoint:** `GET /brand-boards/{locationId}`
**Scope:** `brand-boards/design-kit.readonly`
**Token Type:** Location-Access

Retrieves all Brand Boards for a specific location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID where the brand boards exist |
| `limit` | query | `number` | No | Maximum number of brand boards to return |
| `offset` | query | `number` | No | Number of brand boards to skip for pagination |
| `search` | query | `string` | No | Search term to filter brand boards by name |
| `deleted` | query | `boolean` | No | Include deleted brand boards in results |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `GetBrandBoardsByLocationSuccessDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Brand Board

**Endpoint:** `GET /brand-boards/{locationId}/{id}`
**Scope:** `brand-boards/design-kit.readonly`
**Token Type:** Location-Access

Retrieves a specific Brand Board by its ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID where the brand board exists |
| `id` | path | `string` | Yes | Brand board ID to update, retrieve, or delete |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `GetBrandBoardSuccessDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update a Brand Board

**Endpoint:** `PATCH /brand-boards/{locationId}/{id}`
**Scope:** `brand-boards/design-kit.write`
**Token Type:** Location-Access

Updates an existing Brand Board

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID where the brand board exists |
| `id` | path | `string` | Yes | Brand board ID to update, retrieve, or delete |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateBrandBoardBody` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `GetBrandBoardSuccessDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete a Brand Board

**Endpoint:** `DELETE /brand-boards/{locationId}/{id}`
**Scope:** `brand-boards/design-kit.write`
**Token Type:** Location-Access

Deletes a Brand Board

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID where the brand board exists |
| `id` | path | `string` | Yes | Brand board ID to update, retrieve, or delete |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `GetBrandBoardSuccessDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create a new brand board

**Endpoint:** `POST /brand-boards/`
**Scope:** `brand-boards/design-kit.write`
**Token Type:** Location-Access

Creates a new brand board with logos, colors, and fonts

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateBrandBoardParam` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Created | `GetBrandBoardSuccessDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `InvalidLocationDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### BrandVoicePublicV1Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Brand voice ID |
| `name` | `string` | Yes | Brand voice name |
| `isDefault` | `boolean` | Yes | Whether this is the default brand voice |
| `createdAt` | `string` | Yes | Creation timestamp |
| `updatedAt` | `string` | Yes | Last update timestamp |

### ListBrandVoicesPublicV1ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `array<BrandVoicePublicV1Dto>` | Yes | List of brand voices |
| `total` | `number` | Yes | Total count of brand voices |
| `traceId` | `string` | No | Trace ID of request |

### InvalidLocationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | HTTP status code for invalid location access |
| `message` | `string` | No | Error message describing the location access failure |

### NotFoundDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | HTTP status code for not found |
| `message` | `string` | No | Error message describing the not found failure |
| `error` | `string` | No | Error type identifier |

### BrandVoiceAnswersDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brandName` | `string` | Yes | Brand Name |
| `toneOfVoice` | `string` | Yes | Tone of Voice |
| `targetAudience` | `string` | Yes | Target Audience |
| `customerPainPoints` | `string` | Yes | Customer Pain Points |
| `businessType` | `string` | No | Business Type |
| `companyWebsite` | `string` | No | Company Website |
| `companyEmail` | `string` | No | Company Email |
| `companyAddress` | `string` | No | Company Address |
| `phone` | `object` | No | Phone Information |
| `businessHours` | `string` | No | Business Hours |
| `brandPromise` | `string` | No | Brand Promise |
| `brandValues` | `string` | No | Brand Values |
| `brandPurpose` | `string` | No | Brand Purpose |
| `competitiveAdvantage` | `string` | No | Competitive Advantage |
| `risksOfInaction` | `string` | No | Risks of Inaction |
| `uniqueSellingProposition` | `string` | No | Unique Selling Proposition |
| `callToAction` | `string` | No | Call to Action |

### CreateBrandVoicePublicV1BodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Name |
| `type` | `string` | Yes | Creation type. "manual" creates with provided custom answers, "url" generates answers from a website, "description" generates answers from a text description |
| `url` | `string` | No | Website URL to generate brand voice from. Required when type is "url" |
| `description` | `string` | No | Company description to generate brand voice from. Required when type is "description", optional when type is "url" |
| `answers` | `BrandVoiceAnswersDto` | No | Brand voice answers. Required when type is "manual" |

### BrandVoiceAnswersPublicV1Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brandName` | `string` | No | Brand Name |
| `toneOfVoice` | `string` | No | Tone of Voice |
| `targetAudience` | `string` | No | Target Audience |
| `customerPainPoints` | `string` | No | Customer Pain Points |
| `businessType` | `string` | No | Business Type |
| `companyWebsite` | `string` | No | Company Website |
| `companyEmail` | `string` | No | Company Email |
| `companyAddress` | `string` | No | Company Address |
| `phone` | `object` | No | Phone Information |
| `businessHours` | `string` | No | Business Hours |
| `brandPromise` | `string` | No | Brand Promise |
| `brandValues` | `string` | No | Brand Values |
| `brandPurpose` | `string` | No | Brand Purpose |
| `competitiveAdvantage` | `string` | No | Competitive Advantage |
| `risksOfInaction` | `string` | No | Risks of Inaction |
| `uniqueSellingProposition` | `string` | No | Unique Selling Proposition |
| `callToAction` | `string` | No | Call to Action |

### CreateBrandVoicePublicV1ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Brand voice ID |
| `name` | `string` | Yes | Brand voice name |
| `isDefault` | `boolean` | Yes | Whether this is the default brand voice |
| `createdAt` | `string` | Yes | Creation timestamp |
| `updatedAt` | `string` | Yes | Last update timestamp |
| `locationId` | `string` | Yes | Location ID |
| `deleted` | `boolean` | Yes | Whether the brand voice has been soft deleted |
| `answers` | `BrandVoiceAnswersPublicV1Dto` | No | Brand voice answers |
| `traceId` | `string` | No | Trace ID of request |

### GetBrandVoicePublicV1ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Brand voice ID |
| `name` | `string` | Yes | Brand voice name |
| `isDefault` | `boolean` | Yes | Whether this is the default brand voice |
| `createdAt` | `string` | Yes | Creation timestamp |
| `updatedAt` | `string` | Yes | Last update timestamp |
| `locationId` | `string` | Yes | Location ID |
| `deleted` | `boolean` | Yes | Whether the brand voice has been soft deleted |
| `answers` | `BrandVoiceAnswersPublicV1Dto` | No | Brand voice answers |
| `traceId` | `string` | No | Trace ID of request |

### UpdateBrandVoiceAnswersDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brandName` | `string` | No | Brand Name |
| `toneOfVoice` | `string` | No | Tone of Voice |
| `targetAudience` | `string` | No | Target Audience |
| `customerPainPoints` | `string` | No | Customer Pain Points |
| `businessType` | `string` | No | Business Type |
| `companyWebsite` | `string` | No | Company Website |
| `companyEmail` | `string` | No | Company Email |
| `companyAddress` | `string` | No | Company Address |
| `phone` | `object` | No | Phone Information |
| `businessHours` | `string` | No | Business Hours |
| `brandPromise` | `string` | No | Brand Promise |
| `brandValues` | `string` | No | Brand Values |
| `brandPurpose` | `string` | No | Brand Purpose |
| `competitiveAdvantage` | `string` | No | Competitive Advantage |
| `risksOfInaction` | `string` | No | Risks of Inaction |
| `uniqueSellingProposition` | `string` | No | Unique Selling Proposition |
| `callToAction` | `string` | No | Call to Action |

### UpdateBrandVoicePublicV1BodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Name |
| `answers` | `UpdateBrandVoiceAnswersDto` | No | Updated answers |

### UpdateBrandVoicePublicV1ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Brand voice ID |
| `name` | `string` | Yes | Brand voice name |
| `isDefault` | `boolean` | Yes | Whether this is the default brand voice |
| `createdAt` | `string` | Yes | Creation timestamp |
| `updatedAt` | `string` | Yes | Last update timestamp |
| `locationId` | `string` | Yes | Location ID |
| `deleted` | `boolean` | Yes | Whether the brand voice has been soft deleted |
| `answers` | `BrandVoiceAnswersPublicV1Dto` | No | Brand voice answers |
| `traceId` | `string` | No | Trace ID of request |

### DeleteBrandVoicePublicV1ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deleted` | `boolean` | Yes | Whether the brand voice is deleted |
| `traceId` | `string` | No | Trace ID of request |

### SetDefaultBrandVoicePublicV1ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Whether the operation was successful |
| `brandVoiceId` | `string` | Yes | Brand voice ID that was set as default |
| `traceId` | `string` | No | Trace ID of request |

### Logo

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier for the logo |
| `url` | `string` | Yes | Public URL of the logo image. Used for uploading to the brand board folder in media library |
| `label` | `string` | Yes | Display label for the logo (e.g., Primary, Secondary) |
| `path` | `string` | Yes | Storage path of the logo in the media library |

### Color

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier for the color |
| `hexa` | `string` | Yes | Color in 8-digit hexadecimal notation with alpha channel |
| `rgba` | `string` | Yes | Color with red, green, blue, and alpha channel values |
| `hex` | `string` | Yes | Color in HEX format |
| `rgb` | `string` | Yes | Color in RGB format |
| `label` | `string` | Yes | Display label for the color |

### Font

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier for the font |
| `font` | `string` | Yes | Font family name |
| `fallback` | `string` | Yes | Fallback font family |
| `label` | `string` | Yes | Display label for the font |

### CreateBrandBoardParam

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID where the brand board will be created |
| `name` | `string` | Yes | Name of the brand board |
| `logos` | `array<Logo>` | No | Array of logos for the brand board |
| `colors` | `array<Color>` | No | Array of colors for the brand board |
| `fonts` | `array<Font>` | No | Array of fonts for the brand board |
| `default` | `boolean` | No | Set as the default brand board for this location |
| `brandBoardId` | `string` | No | Source brand board ID to copy from (creates a new brand board based on this template) |
| `parentId` | `string` | No | Parent folder ID in media library for organizing brand boards |
| `type` | `string` | No | Source type indicating how the brand board was created |
| `url` | `string` | No | Website URL to extract design kit from (colors, fonts, logos) |

### MetaData

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `updatedBy` | `string` | No | User ID who last updated the brand board |
| `lastAction` | `string` | No | Last action performed on the brand board |
| `sourceId` | `string` | No | Source brand board ID if created from a template |
| `sourceType` | `string` | No | How the brand board was created |

### MissingAssets

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `logos` | `array<string>` | Yes | Logo labels that used fallbacks |
| `fonts` | `array<string>` | Yes | Font labels that used defaults |
| `colors` | `array<string>` | Yes | Color labels that used defaults |

### GetBrandBoardSuccessDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Brand board ID |
| `locationId` | `string` | Yes | Location ID |
| `name` | `string` | Yes | Brand board name |
| `logos` | `array<Logo>` | No | Array of logos |
| `colors` | `array<Color>` | No | Array of brand colors |
| `fonts` | `array<Font>` | No | Array of brand fonts |
| `default` | `boolean` | Yes | Whether this is the default brand board for the location |
| `deleted` | `boolean` | Yes | Whether the brand board has been soft deleted |
| `parentId` | `string` | No | Parent folder ID in media library |
| `folderId` | `string` | No | Media library folder ID for this brand board |
| `originId` | `string` | No | Original brand board ID if cloned from snapshot |
| `meta` | `MetaData` | No | Metadata about the brand board |
| `missingAssets` | `MissingAssets` | No | Assets that used fallbacks/defaults (only returned when creating from URL) |
| `createdAt` | `string` | No | Creation timestamp |
| `updatedAt` | `string` | No | Last update timestamp |

### BrandBoardListItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Brand board ID |
| `name` | `string` | Yes | Brand board name |
| `updatedAt` | `string` | Yes | Last update timestamp |
| `default` | `boolean` | No | Whether this is the default brand board for the location |
| `meta` | `MetaData` | No | Metadata about the brand board |

### GetBrandBoardsByLocationSuccessDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brandBoards` | `array<BrandBoardListItemDTO>` | Yes | Array of brand boards for the location |
| `totalCount` | `number` | Yes | Total number of brand boards matching the query |

### UpdateBrandBoardBody

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Name of the brand board |
| `logos` | `array<Logo>` | No | Array of logos for the brand board |
| `colors` | `array<Color>` | No | Array of colors for the brand board |
| `fonts` | `array<Font>` | No | Array of fonts for the brand board |
| `default` | `boolean` | No | Set as the default brand board for this location |
| `parentId` | `string` | No | Parent folder ID in media library (reserved for future use) |
