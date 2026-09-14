# OAuth 2.0 v3

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/oauth-v3.json). Do not edit this generated file directly.

**API Version:** v3
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for OAuth 2.0 API

## API Version v3

All APIs available via `/v3` route prefix with AIP-compliant responses.

## OAuth 2.0

### Get Access Token

**Endpoint:** `POST /oauth/token`

Use Access Tokens to access CRM resources on behalf of an authenticated location/company.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/x-www-form-urlencoded | `GetAccessTokenBodyDto` |
| application/json | `GetAccessTokenBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetAccessTokenSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Location Access Token from Agency Token

**Endpoint:** `POST /oauth/location-token`
**Scope:** `oauth.write`
**Token Type:** Agency-Access-Only

This API allows you to generate locationAccessToken from AgencyAccessToken

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/x-www-form-urlencoded | `GetLocationAccessCodeBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetLocationAccessTokenV3SuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Location where app is installed

**Endpoint:** `GET /oauth/installed-locations`
**Scope:** `oauth.readonly`
**Token Type:** Agency-Access-Only

This API allows you fetch location where app is installed upon

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pageSize` | query | `number` | No | Max items per page (1-100). Replaces legacy `limit` parameter per AIP-158. |
| `pageToken` | query | `string` | No | Opaque token returned in a previous response to fetch the next page. Replaces legacy `skip` parameter per AIP-158. |
| `query` | query | `string` | No | Parameter to search for the installed location by name |
| `isInstalled` | query | `boolean` | No | Filters out location which are installed for specified app under the specified company |
| `restrictToUserLocations` | query | `boolean` | No | When true, restricts the list to locations the current user has access to (for restricted agency admins and account admins). When false or omitted, no user-based filter is applied for installed list; for backward compatibility, install list (isInstalled=false) is still filtered by user when this param is omitted. |
| `companyId` | query | `string` | Yes | Parameter to search by the companyId |
| `appId` | query | `string` | Yes | Parameter to search by the appId |
| `versionId` | query | `string` | No | VersionId of the app |
| `onTrial` | query | `boolean` | No | Filters out locations which are installed for specified app in trial mode |
| `planId` | query | `string` | No | Filters out location which are installed for specified app under the specified planId |
| `locationId` | query | `string` | No | locationId |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetInstalledLocationsV3SuccessfulResponseDto` |
| `400` | Invalid argument (AIP error envelope) | `AipErrorResponseDto` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | App not found (AIP error envelope) | `AipErrorResponseDto` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### GetAccessTokenBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `string` | Yes | The ID provided by CRM for your integration |
| `clientSecret` | `string` | Yes | The client secret provided by CRM for your integration |
| `grantType` | `string` | Yes | The OAuth2 grant type — authorization_code, refresh_token, or client_credentials |
| `code` | `string` | No | The authorization code received from the authorization endpoint (required for authorization_code grant) |
| `refreshToken` | `string` | No | The refresh token used to obtain a new access token (required for refresh_token grant) |
| `userType` | `string` | No | The type of token to be requested |
| `redirectUri` | `string` | No | The redirect URI for your application |

### GetAccessTokenSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `string` | No | The OAuth2 access token |
| `tokenType` | `string` | No | The token type (always Bearer) |
| `expiresIn` | `number` | No | Time in seconds until the access token expires |
| `refreshToken` | `string` | No | The OAuth2 refresh token used to obtain a new access token |
| `scope` | `string` | No | Space-separated list of scopes the access token has access to |
| `userType` | `string` | No | The user type associated with the token (Location or Company) |
| `locationId` | `string` | No | Location ID - Present only for Sub-Account Access Token |
| `companyId` | `string` | No | Company ID |
| `approvedLocations` | `array<string>` | No | Approved locations to generate location access token |
| `userId` | `string` | Yes | USER ID - Represent user id of person who performed installation |
| `planId` | `string` | No | Plan Id of the subscribed plan in paid apps. |
| `isBulkInstallation` | `boolean` | No | Indicates whether the installation was performed as a bulk installation |
| `installToFutureLocations` | `boolean` | No | Boolean to control if user wants app to be automatically installed to future locations (only for company tokens) |
| `approveAllLocations` | `boolean` | No | Boolean indicating if user approved all locations during bulk installation (only for company tokens) |

### GetLocationAccessCodeBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `string` | Yes | Company Id of location you want to request token for |
| `locationId` | `string` | Yes | The location ID for which you want to obtain accessToken |

### GetLocationAccessTokenSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | No | Location access token which can be used to authenticate & authorize API under following scope |
| `token_type` | `string` | No | The token type (always Bearer) |
| `expires_in` | `number` | No | Time in seconds remaining for token to expire |
| `scope` | `string` | No | Scopes the following accessToken have access to |
| `locationId` | `string` | No | Location ID - Present only for Sub-Account Access Token |
| `planId` | `string` | No | Plan Id of the subscribed plan in paid apps. |
| `userId` | `string` | Yes | USER ID - Represent user id of person who performed installation |
| `appId` | `string` | No | App ID of the installed application |
| `versionId` | `string` | No | Version ID of the installed app version |
| `refresh_token` | `string` | No | The OAuth2 refresh token used to obtain a new access token for this specific location |

### GetLocationAccessTokenV3SuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `string` | No | Location access token which can be used to authenticate & authorize API under following scope |
| `tokenType` | `string` | No | The token type (always Bearer) |
| `expiresIn` | `number` | No | Time in seconds remaining for token to expire |
| `scope` | `string` | No | Scopes the following accessToken have access to |
| `locationId` | `string` | No | Location ID - Present only for Sub-Account Access Token |
| `planId` | `string` | No | Plan Id of the subscribed plan in paid apps. |
| `userId` | `string` | Yes | USER ID - Represent user id of person who performed installation |
| `appId` | `string` | No | App ID of the installed application |
| `versionId` | `string` | No | Version ID of the installed app version |
| `refreshToken` | `string` | No | The OAuth2 refresh token used to obtain a new access token for this specific location. |

### InstalledLocationSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Location ID |
| `name` | `string` | Yes | Name of the location |
| `address` | `string` | Yes | Address linked to location |
| `isInstalled` | `boolean` | No | Check if the requested app is installed for following location |
| `versionId` | `string` | No | Version ID of the installed app version for this location |
| `installedAt` | `string (date-time)` | No | Timestamp when the app was installed on this location |

### GetInstalledLocationsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locations` | `array<InstalledLocationSchema>` | No | List of locations with their installation status for the requested app |
| `count` | `number` | No | Total location count under the company |
| `installToFutureLocations` | `boolean` | No | Boolean to control if user wants app to be automatically installed to future locations |

### V3PaginationMetaDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `totalRecords` | `number` | No | Total number of records matching the query across all pages |
| `hasNextPage` | `boolean` | Yes | True when a next page is available |
| `hasPrevPage` | `boolean` | Yes | True when a previous page is available |
| `nextPageToken` | `string` | No | Opaque token to fetch the next page |
| `prevPageToken` | `string` | No | Opaque token to fetch the previous page |
| `currentPageSize` | `number` | Yes | Number of items returned in the current page |
| `estimatedTotalRecords` | `number` | No | Estimated total records; present when exact total is unknown |

### V3InstalledLocationsListMetadataDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filterApplied` | `object` | No | Filters that were applied to the query |
| `sortApplied` | `object` | No | Sort order that was applied to the query |

### GetInstalledLocationsV3SuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `array<InstalledLocationSchema>` | Yes | List of locations with their installation status for the requested app |
| `pagination` | `V3PaginationMetaDto` | Yes | Pagination metadata (AIP-158) |
| `metadata` | `V3InstalledLocationsListMetadataDto` | No | Query metadata (filters and sort applied) |
| `installToFutureLocations` | `boolean` | No | Boolean to control if user wants app to be automatically installed to future locations |

### AipErrorBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes | Machine-readable error code (see AipErrorCode enum in @platform-core/aip-framework) |
| `message` | `string` | Yes | Human-readable error message |
| `details` | `object` | No | Additional error context (field name, identifier, etc.) |
| `resolution` | `string` | No | Suggested resolution for the caller |

### AipErrorResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `AipErrorBodyDto` | Yes | AIP-compliant error envelope |
