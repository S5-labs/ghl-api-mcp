# Custom menus API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/custom-menus-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Custom menus API

## Custom Menu Links

### Get Custom Menu Link

**Endpoint:** `GET /custom-menus/{customMenuId}`
**Scope:** `custom-menu-link.readonly`
**Token Type:** Agency-Access

Fetches a single custom menus based on id. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `customMenuId` | path | `string` | Yes | Unique identifier of the custom menu |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved custom menu. Returns a single custom menu object, potentially including its structure, items, and relevant metadata. | `GetSingleCustomMenusSuccessfulResponseDTO` |
| `400` | Bad Request. Invalid query parameters provided. | `—` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | Forbidden. The client does not have necessary permissions to access custom menu. | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Custom Menu Link

**Endpoint:** `DELETE /custom-menus/{customMenuId}`
**Scope:** `custom-menu-link.write`
**Token Type:** Agency-Access

Removes a specific custom menu from the system. This operation requires authentication and proper permissions. The custom menu is identified by its unique ID, and the operation is performed within the context of a specific company.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `customMenuId` | path | `string` | Yes | ID of the custom menu to delete |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Custom menu successfully deleted | `DeleteCustomMenuSuccessfulResponseDTO` |
| `400` | Bad Request. Invalid parameters provided. | `—` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | Forbidden. The client does not have necessary permissions to delete this custom menu. | `—` |
| `404` | Not Found. The specified custom menu does not exist or has already been deleted. | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Custom Menu Link

**Endpoint:** `PUT /custom-menus/{customMenuId}`
**Scope:** `custom-menu-link.write`
**Token Type:** Agency-Access

Updates an existing custom menu for a given company. Requires authentication and proper permissions.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `customMenuId` | path | `string` | Yes | ID of the custom menu to update |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCustomMenuDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Custom menu successfully updated | `UpdateCustomMenuLinkResponseDTO` |
| `400` | Bad Request - Invalid input | `—` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | Forbidden - Insufficient permissions | `—` |
| `404` | Not Found - Custom menu or company not found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Custom Menu Links

**Endpoint:** `GET /custom-menus/`
**Scope:** `custom-menu-link.readonly`
**Token Type:** Agency-Access

Fetches a collection of custom menus based on specified criteria. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata. The response can be tailored using query parameters for filtering, sorting, and pagination.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | No | Unique identifier of the location |
| `skip` | query | `number` | No | Number of items to skip for pagination |
| `limit` | query | `number` | No | Maximum number of items to return |
| `query` | query | `string` | No | Search query to filter custom menus by name, supports partial \|\| full names |
| `showOnCompany` | query | `boolean` | No | Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved custom menus. Returns an array of custom menu objects, potentially including their structure, items, and relevant metadata. | `GetCustomMenusResponseDTO` |
| `400` | Bad Request. Invalid query parameters provided. | `—` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | Forbidden. The client does not have necessary permissions to access custom menus. | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Custom Menu Link

**Endpoint:** `POST /custom-menus/`
**Scope:** `custom-menu-link.write`
**Token Type:** Agency-Access

Creates a new custom menu for a company. Requires authentication and proper permissions. For Icon Usage Details please refer to  https://doc.clickup.com/8631005/d/h/87cpx-243696/d60fa70db6b92b2

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateCustomMenuDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Custom menu successfully created | `GetSingleCustomMenusSuccessfulResponseDTO` |
| `400` | Bad Request - Invalid input | `—` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | Forbidden - Insufficient permissions | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### IconSchemaOptional

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Name of the icon |
| `fontFamily` | `string` | No | Font family of the icon |

### CustomMenuSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier for the custom menu |
| `icon` | `IconSchemaOptional` | No | Icon information for the menu item |
| `title` | `string` | No | Title of the custom menu |
| `url` | `string` | No | URL of the custom menu |
| `order` | `number` | No | Order of the custom menu |
| `showOnCompany` | `boolean` | No | Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided |
| `showOnLocation` | `boolean` | No | Whether the menu must be displayed for sub-accounts level |
| `showToAllLocations` | `boolean` | No | Whether the menu must be displayed to all sub-accounts |
| `locations` | `array<string>` | No | List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false |
| `openMode` | `string` | No | Mode for opening the menu link |
| `userRole` | `string` | No | Which user-roles should the menu be accessible to? |
| `allowCamera` | `boolean` | No | Indicates if camera access is allowed for this menu |
| `allowMicrophone` | `boolean` | No | Indicates if microphone access is allowed for this menu |

### GetCustomMenusResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customMenus` | `array<CustomMenuSchema>` | No | Array of custom menu links |
| `totalLinks` | `number` | No | Total number of custom menu records |

### GetSingleCustomMenusSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customMenu` | `CustomMenuSchema` | No | Single Custom menu link object |

### DeleteCustomMenuSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | No | Indicates whether the custom menu was successfully deleted |
| `message` | `string` | No | A message providing additional information about the deletion operation |
| `deletedMenuId` | `string` | No | The ID of the deleted custom menu |
| `deletedAt` | `string (date-time)` | No | Timestamp of when the deletion was performed |

### IconSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Name of the icon |
| `fontFamily` | `string` | Yes | Font family of the icon |

### CreateCustomMenuDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Title of the custom menu |
| `url` | `string` | Yes | URL of the custom menu |
| `icon` | `IconSchema` | Yes | Icon information for the custom menu |
| `showOnCompany` | `boolean` | Yes | Whether the menu must be displayed on the agency's level |
| `showOnLocation` | `boolean` | Yes | Whether the menu must be displayed for sub-accounts level |
| `showToAllLocations` | `boolean` | Yes | Whether the menu must be displayed to all sub-accounts |
| `openMode` | `string` | Yes | Mode for opening the menu link |
| `locations` | `array<string>` | Yes | List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false |
| `userRole` | `string` | Yes | Which user-roles should the menu be accessible to? |
| `allowCamera` | `boolean` | No | Whether to allow camera access (only for iframe mode) |
| `allowMicrophone` | `boolean` | No | Whether to allow microphone access (only for iframe mode) |

### UpdateCustomMenuDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | Title of the custom menu |
| `url` | `string` | No | URL of the custom menu |
| `icon` | `IconSchemaOptional` | No | Icon information for the custom menu |
| `showOnCompany` | `boolean` | No | Whether the menu must be displayed on the agency's level |
| `showOnLocation` | `boolean` | No | Whether the menu must be displayed for sub-accounts level |
| `showToAllLocations` | `boolean` | No | Whether the menu must be displayed to all sub-accounts |
| `openMode` | `string` | No | Mode for opening the menu link |
| `locations` | `array<string>` | No | List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false |
| `userRole` | `string` | No | Which user-roles should the menu be accessible to? |
| `allowCamera` | `boolean` | No | Whether to allow camera access (only for iframe mode) |
| `allowMicrophone` | `boolean` | No | Whether to allow microphone access (only for iframe mode) |

### UpdateCustomMenuLinkResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | No | Status of update |
| `customMenu` | `CustomMenuSchema` | No | Updated custom menu link |
