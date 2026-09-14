# Users API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/users.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for users API

## Search

### Search Users

**Endpoint:** `GET /users/search`
**Scope:** `users.readonly`
**Token Type:** Agency-Access, Location-Access

Search Users

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | query | `string` | Yes | Company ID in which the search needs to be performed |
| `query` | query | `string` | No | The search term for the user is matched based on the user full name, email or phone |
| `skip` | query | `string` | No | No of results to be skipped before returning the result |
| `limit` | query | `string` | No | No of results to be limited before returning the result |
| `locationId` | query | `string` | No | Location ID in which the search needs to be performed |
| `type` | query | `string` | No | Type of the users to be filtered in the search |
| `role` | query | `string` | No | Role of the users to be filtered in the search |
| `ids` | query | `string` | No | List of User IDs to be filtered in the search |
| `sort` | query | `string` | No | The field on which sort is applied in which the results need to be sorted. Default is based on the first and last name |
| `sortDirection` | query | `string` | No | The direction in which the results need to be sorted |
| `enabled2waySync` | query | `boolean` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `SearchUserSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Filter Users by Email

**Endpoint:** `POST /users/search/filter-by-email`
**Scope:** `users.readonly`
**Token Type:** Agency-Access

Filter users by company ID, deleted status, and email array

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `FilterByEmailDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `SearchUserSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Users

### Get User

**Endpoint:** `GET /users/{userId}`
**Scope:** `users.readonly`
**Token Type:** Agency-Access, Location-Access

Get User

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `userId` | path | `string` | Yes | User Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UserSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update User

**Endpoint:** `PUT /users/{userId}`
**Scope:** `users.write`
**Token Type:** Agency-Access, Location-Access

Update User

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateUserDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UserSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete User

**Endpoint:** `DELETE /users/{userId}`
**Scope:** `users.write`
**Token Type:** Agency-Access, Location-Access

Delete User

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteUserSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get User by Location

**Endpoint:** `GET /users/`
**Scope:** `users.readonly`
**Token Type:** Location-Access
**Deprecated:** Yes

Deprecated. Use `GET /users/search` instead. Pass `locationId` as a query parameter to filter results by location, along with the required `companyId` and other search filters as needed.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `LocationSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create User

**Endpoint:** `POST /users/`
**Scope:** `users.write`
**Token Type:** Agency-Access, Location-Access

Create User

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateUserDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `UserSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### PermissionsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaignsEnabled` | `boolean` | No | — |
| `campaignsReadOnly` | `boolean` | No | — |
| `contactsEnabled` | `boolean` | No | — |
| `workflowsEnabled` | `boolean` | No | — |
| `workflowsReadOnly` | `boolean` | No | — |
| `triggersEnabled` | `boolean` | No | — |
| `funnelsEnabled` | `boolean` | No | — |
| `websitesEnabled` | `boolean` | No | — |
| `opportunitiesEnabled` | `boolean` | No | — |
| `dashboardStatsEnabled` | `boolean` | No | — |
| `bulkRequestsEnabled` | `boolean` | No | — |
| `appointmentsEnabled` | `boolean` | No | — |
| `reviewsEnabled` | `boolean` | No | — |
| `onlineListingsEnabled` | `boolean` | No | — |
| `phoneCallEnabled` | `boolean` | No | — |
| `conversationsEnabled` | `boolean` | No | — |
| `assignedDataOnly` | `boolean` | No | — |
| `adwordsReportingEnabled` | `boolean` | No | — |
| `membershipEnabled` | `boolean` | No | — |
| `facebookAdsReportingEnabled` | `boolean` | No | — |
| `attributionsReportingEnabled` | `boolean` | No | — |
| `settingsEnabled` | `boolean` | No | — |
| `tagsEnabled` | `boolean` | No | — |
| `leadValueEnabled` | `boolean` | No | — |
| `marketingEnabled` | `boolean` | No | — |
| `agentReportingEnabled` | `boolean` | No | — |
| `botService` | `boolean` | No | — |
| `socialPlanner` | `boolean` | No | — |
| `bloggingEnabled` | `boolean` | No | — |
| `invoiceEnabled` | `boolean` | No | — |
| `affiliateManagerEnabled` | `boolean` | No | — |
| `contentAiEnabled` | `boolean` | No | — |
| `refundsEnabled` | `boolean` | No | — |
| `recordPaymentEnabled` | `boolean` | No | — |
| `cancelSubscriptionEnabled` | `boolean` | No | — |
| `paymentsEnabled` | `boolean` | No | — |
| `communitiesEnabled` | `boolean` | No | — |
| `exportPaymentsEnabled` | `boolean` | No | — |

### RoleSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | No | — |
| `role` | `string` | No | — |
| `locationIds` | `array<string>` | No | — |
| `restrictSubAccount` | `boolean` | No | — |

### UserSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `firstName` | `string` | No | — |
| `lastName` | `string` | No | — |
| `email` | `string` | No | — |
| `phone` | `string` | No | — |
| `extension` | `string` | No | — |
| `permissions` | `PermissionsDto` | No | — |
| `scopes` | `string` | No | — |
| `roles` | `RoleSchema` | No | — |
| `deleted` | `boolean` | No | — |
| `lcPhone` | `object` | No | LC Phone Inbound Phone Numbers |
| `platformLanguage` | `string` | No | Platform language preference for the user |

### SearchUserSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `users` | `array<UserSchema>` | No | — |
| `count` | `number` | No | — |

### FilterByEmailDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `string` | Yes | Company ID to filter users |
| `emails` | `string` | Yes | Comma-separated list of email addresses to filter users |
| `deleted` | `boolean` | No | Filter deleted users |
| `skip` | `string` | No | No of results to be skipped before returning the result |
| `limit` | `string` | No | No of results to be limited before returning the result |
| `projection` | `string` | No | Projection fields to return. Use "all" for all fields, or specify comma-separated field names. Default returns only id and email |

### LocationSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `users` | `array<UserSchema>` | No | — |

### UserSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `firstName` | `string` | No | — |
| `lastName` | `string` | No | — |
| `email` | `string` | No | — |
| `phone` | `string` | No | — |
| `extension` | `string` | No | — |
| `permissions` | `PermissionsDto` | No | — |
| `scopes` | `string` | No | — |
| `roles` | `RoleSchema` | No | — |
| `lcPhone` | `object` | No | LC Phone Inbound Phone Numbers |
| `platformLanguage` | `string` | No | Platform language preference for the user |

### CreateUserDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `string` | Yes | — |
| `firstName` | `string` | Yes | — |
| `lastName` | `string` | Yes | — |
| `email` | `string` | Yes | — |
| `password` | `string` | Yes | — |
| `phone` | `string` | No | — |
| `type` | `string` | Yes | — |
| `role` | `string` | Yes | — |
| `locationIds` | `array<string>` | Yes | — |
| `permissions` | `PermissionsDto` | No | — |
| `scopes` | `array<string>` | No | Scopes allowed for users. Only scopes that have been passed will be enabled. Note:- If passed empty all the scopes will be get disabled |
| `scopesAssignedToOnly` | `array<string>` | No | Assigned Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the assigned scopes will be get disabled |
| `profilePhoto` | `string` | No | — |
| `twilioPhone` | `object` | No | Per-location inbound Twilio number in E.164 format, keyed by location id (Call and Voicemail Inbound Number for direct Twilio, not LC Phone). Replacement semantics: if you send twilioPhone in the request body, the stored map is replaced entirely with this object (not merged). Any location id omitted from the object is removed from the saved map. Omit the twilioPhone property entirely to leave existing numbers unchanged. Send an empty object {} to clear all per-location numbers. To clear a single location only, set that location id to an empty string "". |
| `platformLanguage` | `string` | No | Platform language preference for the user |

### UpdateUserDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | `string` | No | — |
| `lastName` | `string` | No | — |
| `email` | `string` | No | Email update is no longer supported due to security reasons. |
| `password` | `string` | No | — |
| `phone` | `string` | No | — |
| `type` | `string` | No | — |
| `role` | `string` | No | — |
| `companyId` | `string` | No | Company/Agency Id. Required for Agency Level access |
| `locationIds` | `array<string>` | No | — |
| `permissions` | `PermissionsDto` | No | — |
| `scopes` | `array<string>` | No | Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the scopes will be get disabled |
| `scopesAssignedToOnly` | `array<string>` | No | Assigned Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the assigned scopes will be get disabled |
| `profilePhoto` | `string` | No | — |
| `twilioPhone` | `object` | No | Per-location inbound Twilio number in E.164 format, keyed by location id (Call and Voicemail Inbound Number for direct Twilio, not LC Phone). Replacement semantics: if you send twilioPhone in the request body, the stored map is replaced entirely with this object (not merged). Any location id omitted from the object is removed from the saved map. Omit the twilioPhone property entirely to leave existing numbers unchanged. Send an empty object {} to clear all per-location numbers. To clear a single location only, set that location id to an empty string "". |
| `platformLanguage` | `string` | No | Platform language preference for the user |

### DeleteUserSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |
| `message` | `string` | No | — |
