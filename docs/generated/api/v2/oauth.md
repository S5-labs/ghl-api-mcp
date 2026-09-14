# OAuth 2.0

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/oauth.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for OAuth 2.0 API

## OAuth 2.0

### Get Access Token

**Endpoint:** `POST /oauth/token`

Use Access Tokens to access GoHighLevel resources on behalf of an authenticated location/company.

**Request Body**

| Content type | Schema |
| --- | --- |
| application/x-www-form-urlencoded | `GetAccessCodebodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetAccessCodeSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Location Access Token from Agency Token

**Endpoint:** `POST /oauth/locationToken`
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
| `200` | Successful response | `GetLocationAccessTokenSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Location where app is installed

**Endpoint:** `GET /oauth/installedLocations`
**Scope:** `oauth.readonly`
**Token Type:** Agency-Access-Only

This API allows you fetch location where app is installed upon

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `skip` | query | `string` | No | Parameter to skip the number installed locations |
| `limit` | query | `string` | No | Parameter to limit the number installed locations |
| `query` | query | `string` | No | Parameter to search for the installed location by name |
| `isInstalled` | query | `boolean` | No | Filters out location which are installed for specified app under the specified company |
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
| `200` | Successful response | `GetInstalledLocationsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### GetAccessCodebodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | Yes | The ID provided by GHL for your integration |
| `client_secret` | `string` | Yes | — |
| `grant_type` | `string` | Yes | — |
| `code` | `string` | No | — |
| `refresh_token` | `string` | No | — |
| `user_type` | `string` | No | The type of token to be requested |
| `redirect_uri` | `string` | No | The redirect URI for your application |

### GetAccessCodeSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | No | — |
| `token_type` | `string` | No | — |
| `expires_in` | `number` | No | — |
| `refresh_token` | `string` | No | — |
| `scope` | `string` | No | — |
| `userType` | `string` | No | — |
| `locationId` | `string` | No | Location ID - Present only for Sub-Account Access Token |
| `companyId` | `string` | No | Company ID |
| `approvedLocations` | `array<string>` | No | Approved locations to generate location access token |
| `userId` | `string` | Yes | USER ID - Represent user id of person who performed installation |
| `planId` | `string` | No | Plan Id of the subscribed plan in paid apps. |
| `isBulkInstallation` | `boolean` | No | — |
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
| `token_type` | `string` | No | — |
| `expires_in` | `number` | No | Time in seconds remaining for token to expire |
| `scope` | `string` | No | Scopes the following accessToken have access to |
| `locationId` | `string` | No | Location ID - Present only for Sub-Account Access Token |
| `planId` | `string` | No | Plan Id of the subscribed plan in paid apps. |
| `userId` | `string` | Yes | USER ID - Represent user id of person who performed installation |
| `appId` | `string` | No | App ID of the installed application |
| `versionId` | `string` | No | Version ID of the installed app version |

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
| `locations` | `array<InstalledLocationSchema>` | No | — |
| `count` | `number` | No | Total location count under the company |
| `installToFutureLocations` | `boolean` | No | Boolean to control if user wants app to be automatically installed to future locations |
