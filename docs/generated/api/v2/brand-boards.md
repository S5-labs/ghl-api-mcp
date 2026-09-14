# Brand Boards API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/brand-boards.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Brand Boards API

## Brand Boards

### Get Brand Boards

**Endpoint:** `GET /brand-boards/{locationId}`
**Scope:** `brand-boards/design-kit.readonly`
**Token Type:** Location-Access

Retrieves all Brand Boards for a specific location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | — |
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

### Logo

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the logo |
| `url` | `string` | Yes | Public URL of the logo image. Used for uploading to the brand board folder in media library |
| `label` | `string` | Yes | Display label for the logo (e.g., Primary, Secondary) |
| `path` | `string` | Yes | Storage path of the logo in the media library |

### Color

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the color |
| `hexa` | `string` | Yes | Color in HEXA format (with alpha) |
| `rgba` | `string` | Yes | Color in RGBA format |
| `hex` | `string` | Yes | Color in HEX format |
| `rgb` | `string` | Yes | Color in RGB format |
| `label` | `string` | Yes | Display label for the color |

### Font

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the font |
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

### MetaData

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `updatedBy` | `string` | No | User ID who last updated the brand board |
| `lastAction` | `string` | No | Last action performed on the brand board |
| `sourceId` | `string` | No | Source brand board ID if created from a template |
| `sourceType` | `string` | No | How the brand board was created |

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
| `createdAt` | `string` | No | Creation timestamp |
| `updatedAt` | `string` | No | Last update timestamp |

### InvalidLocationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `string` | No | — |

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

### NotFoundDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `string` | No | — |
| `error` | `string` | No | — |

### UpdateBrandBoardBody

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Name of the brand board |
| `logos` | `array<Logo>` | No | Array of logos for the brand board |
| `colors` | `array<Color>` | No | Array of colors for the brand board |
| `fonts` | `array<Font>` | No | Array of fonts for the brand board |
| `default` | `boolean` | No | Set as the default brand board for this location |
| `parentId` | `string` | No | Parent folder ID in media library (reserved for future use) |
