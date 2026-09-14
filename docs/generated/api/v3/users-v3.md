# Users API v3

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/users-v3.json). Do not edit this generated file directly.

**API Version:** v3
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for users API

## API Version v3

All APIs available via `/v3` route prefix with AIP-compliant responses.

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
| `enabled2waySync` | query | `boolean` | No | Filter users by whether 2-way sync is enabled |

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
| `userId` | path | `string` | Yes | User Id |
| `Version` | header | `string` | Yes | API Version |

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
| `200` | Successful response | `DeleteUserSuccessfulResponseV3Dto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

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
| `campaignsEnabled` | `boolean` | No | Whether campaigns are enabled for this user |
| `campaignsReadOnly` | `boolean` | No | Whether campaigns are in read-only mode for this user |
| `contactsEnabled` | `boolean` | No | Whether contacts are enabled for this user |
| `workflowsEnabled` | `boolean` | No | Whether workflows are enabled for this user |
| `workflowsReadOnly` | `boolean` | No | Whether workflows are in read-only mode for this user |
| `triggersEnabled` | `boolean` | No | Whether triggers are enabled for this user |
| `funnelsEnabled` | `boolean` | No | Whether funnels are enabled for this user |
| `websitesEnabled` | `boolean` | No | Whether websites are enabled for this user |
| `opportunitiesEnabled` | `boolean` | No | Whether opportunities are enabled for this user |
| `dashboardStatsEnabled` | `boolean` | No | Whether dashboard statistics are enabled for this user |
| `bulkRequestsEnabled` | `boolean` | No | Whether bulk requests are enabled for this user |
| `appointmentsEnabled` | `boolean` | No | Whether appointments are enabled for this user |
| `reviewsEnabled` | `boolean` | No | Whether reviews are enabled for this user |
| `onlineListingsEnabled` | `boolean` | No | Whether online listings are enabled for this user |
| `phoneCallEnabled` | `boolean` | No | Whether phone calls are enabled for this user |
| `conversationsEnabled` | `boolean` | No | Whether conversations are enabled for this user |
| `assignedDataOnly` | `boolean` | No | Whether the user can only access data assigned to them |
| `adwordsReportingEnabled` | `boolean` | No | Whether AdWords reporting is enabled for this user |
| `membershipEnabled` | `boolean` | No | Whether membership features are enabled for this user |
| `facebookAdsReportingEnabled` | `boolean` | No | Whether Facebook Ads reporting is enabled for this user |
| `attributionsReportingEnabled` | `boolean` | No | Whether attributions reporting is enabled for this user |
| `settingsEnabled` | `boolean` | No | Whether settings are enabled for this user |
| `tagsEnabled` | `boolean` | No | Whether tags are enabled for this user |
| `leadValueEnabled` | `boolean` | No | Whether lead value features are enabled for this user |
| `marketingEnabled` | `boolean` | No | Whether marketing features are enabled for this user |
| `agentReportingEnabled` | `boolean` | No | Whether agent reporting is enabled for this user |
| `botService` | `boolean` | No | Whether the bot service is enabled for this user |
| `socialPlanner` | `boolean` | No | Whether the social planner is enabled for this user |
| `bloggingEnabled` | `boolean` | No | Whether blogging is enabled for this user |
| `invoiceEnabled` | `boolean` | No | Whether invoices are enabled for this user |
| `affiliateManagerEnabled` | `boolean` | No | Whether the affiliate manager is enabled for this user |
| `contentAiEnabled` | `boolean` | No | Whether Content AI is enabled for this user |
| `refundsEnabled` | `boolean` | No | Whether refunds are enabled for this user |
| `recordPaymentEnabled` | `boolean` | No | Whether recording payments is enabled for this user |
| `cancelSubscriptionEnabled` | `boolean` | No | Whether cancelling subscriptions is enabled for this user |
| `paymentsEnabled` | `boolean` | No | Whether payments are enabled for this user |
| `communitiesEnabled` | `boolean` | No | Whether communities are enabled for this user |
| `exportPaymentsEnabled` | `boolean` | No | Whether exporting payments is enabled for this user |

### RoleSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | No | User account type (account for sub-account users, agency for agency-level users) |
| `role` | `string` | No | User role within the account (admin or user) |
| `locationIds` | `array<string>` | No | List of location IDs the user has access to |
| `restrictSubAccount` | `boolean` | No | Whether the user is restricted to specific sub-accounts only |

### UserSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the user |
| `name` | `string` | No | Full name of the user |
| `firstName` | `string` | No | First name of the user |
| `lastName` | `string` | No | Last name of the user |
| `email` | `string` | No | Email address of the user |
| `phone` | `string` | No | Phone number of the user |
| `extension` | `string` | No | Phone extension of the user |
| `permissions` | `PermissionsDto` | No | User permissions controlling access to various features |
| `scopes` | `string` | No | List of OAuth scopes granted to this user |
| `roles` | `RoleSchema` | No | Role and access configuration for the user |
| `deleted` | `boolean` | No | Whether the user has been deleted |
| `lcPhone` | `object` | No | LC Phone Inbound Phone Numbers |
| `platformLanguage` | `string` | No | Platform language preference for the user |

### SearchUserSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `users` | `array<UserSchema>` | No | List of users matching the search criteria |
| `count` | `number` | No | Total number of users matching the search criteria |

### FilterByEmailDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `string` | Yes | Company ID to filter users |
| `emails` | `string` | Yes | Comma-separated list of email addresses to filter users |
| `deleted` | `boolean` | No | Filter deleted users |
| `skip` | `string` | No | No of results to be skipped before returning the result |
| `limit` | `string` | No | No of results to be limited before returning the result |
| `projection` | `string` | No | Projection fields to return. Use "all" for all fields, or specify comma-separated field names. Default returns only id and email |

### UserSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the user |
| `name` | `string` | No | Full name of the user |
| `firstName` | `string` | No | First name of the user |
| `lastName` | `string` | No | Last name of the user |
| `email` | `string` | No | Email address of the user |
| `phone` | `string` | No | Phone number of the user |
| `extension` | `string` | No | Phone extension of the user |
| `permissions` | `PermissionsDto` | No | User permissions controlling access to various features |
| `scopes` | `string` | No | List of OAuth scopes granted to this user |
| `roles` | `RoleSchema` | No | Role and access configuration for the user |
| `lcPhone` | `object` | No | LC Phone Inbound Phone Numbers |
| `platformLanguage` | `string` | No | Platform language preference for the user |

### CreateUserDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `string` | Yes | Company/Agency ID to associate the user with |
| `email` | `string` | Yes | Email address of the user (used for login) |
| `password` | `string` | Yes | Password for the user account. All passwords will be required to meet the following criteria:<br><br>- Minimum 12 characters<br>- At least one uppercase letter (A–Z)<br>- At least one lowercase letter (a–z)<br>- At least one number (0–9)<br>- At least one special character (e.g., !, @, #, $) |
| `phone` | `string` | No | Phone number of the user in E.164 format |
| `type` | `string` | Yes | User account type (account for sub-account users, agency for agency-level users) |
| `role` | `string` | Yes | User role within the account (admin or user) |
| `locationIds` | `array<string>` | Yes | List of location IDs to assign to the user |
| `permissions` | `PermissionsDto` | No | User permissions controlling access to various features |
| `scopes` | `array<string>` | No | Scopes allowed for users. Only scopes that have been passed will be enabled. Note:- If passed empty all the scopes will be get disabled |
| `scopesAssignedToOnly` | `array<string>` | No | Assigned Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the assigned scopes will be get disabled |
| `profilePhoto` | `string` | No | URL of the user profile photo |
| `twilioPhone` | `object` | No | Per-location inbound Twilio number in E.164 format, keyed by location id (Call and Voicemail Inbound Number for direct Twilio, not LC Phone). Replacement semantics: if you send twilioPhone in the request body, the stored map is replaced entirely with this object (not merged). Any location id omitted from the object is removed from the saved map. Omit the twilioPhone property entirely to leave existing numbers unchanged. Send an empty object {} to clear all per-location numbers. To clear a single location only, set that location id to an empty string "". |
| `platformLanguage` | `string` | No | Platform language preference for the user |
| `firstName` | `string` | Yes | First name of the user |
| `lastName` | `string` | Yes | Last name of the user |

### UpdateUserDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | `string` | No | First name of the user |
| `lastName` | `string` | No | Last name of the user |
| `email` | `string` | No | Email update is no longer supported due to security reasons. |
| `password` | `string` | No | New password for the user account. All passwords will be required to meet the following criteria:<br><br>- Minimum 12 characters<br>- At least one uppercase letter (A–Z)<br>- At least one lowercase letter (a–z)<br>- At least one number (0–9)<br>- At least one special character (e.g., !, @, #, $) |
| `phone` | `string` | No | Phone number of the user in E.164 format |
| `type` | `string` | No | User account type (account for sub-account users, agency for agency-level users) |
| `role` | `string` | No | User role within the account (admin or user) |
| `companyId` | `string` | No | Company/Agency Id. Required for Agency Level access |
| `locationIds` | `array<string>` | No | List of sub-account location IDs the user should have access to |
| `permissions` | `PermissionsDto` | No | User permissions controlling access to various features |
| `scopes` | `array<string>` | No | Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the scopes will be get disabled |
| `scopesAssignedToOnly` | `array<string>` | No | Assigned Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the assigned scopes will be get disabled |
| `profilePhoto` | `string` | No | URL of the user profile photo |
| `twilioPhone` | `object` | No | Per-location inbound Twilio number in E.164 format, keyed by location id (Call and Voicemail Inbound Number for direct Twilio, not LC Phone). Replacement semantics: if you send twilioPhone in the request body, the stored map is replaced entirely with this object (not merged). Any location id omitted from the object is removed from the saved map. Omit the twilioPhone property entirely to leave existing numbers unchanged. Send an empty object {} to clear all per-location numbers. To clear a single location only, set that location id to an empty string "". |
| `platformLanguage` | `string` | No | Platform language preference for the user |

### DeleteUserSuccessfulResponseV3Dto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeeded` | `boolean` | No | Indicates whether the user deletion was queued successfully |
| `message` | `string` | No | Message describing the result of the deletion request |
