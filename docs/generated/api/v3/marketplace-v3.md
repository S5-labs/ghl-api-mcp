# Developer marketplace API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/marketplace-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Marketplace API

## Wallet Charges

### Create a new wallet charge

**Endpoint:** `POST /marketplace/billing/charges`
**Scope:** `charges.write`
**Token Type:** Location-Access-Only

Create a new wallet charge

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `RaiseChargeBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Charge created successfully | `object` |
| `400` | Bad request | `object` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get all wallet charges

**Endpoint:** `GET /marketplace/billing/charges`
**Scope:** `charges.readonly`
**Token Type:** Location-Access-Only

Get all wallet charges

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `meterId` | query | `string` | No | Billing Meter ID (you can find this on your app's pricing page on the developer portal) |
| `eventId` | query | `string` | No | Event ID / Transaction ID |
| `userId` | query | `string` | No | Filter results by User ID that your server passed via API when the charge was created |
| `startDate` | query | `string` | No | Filter results AFTER a specific date. Use this in combination with endDate to filter results in a specific time window. |
| `endDate` | query | `string` | No | Filter results BEFORE a specific date. Use this in combination with startDate to filter results in a specific time window. |
| `skip` | query | `number` | No | Number of records to skip |
| `limit` | query | `number` | No | Maximum number of records to return |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Returns list of wallet charges | `object` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete a wallet charge

**Endpoint:** `DELETE /marketplace/billing/charges/{chargeId}`
**Scope:** `charges.write`
**Token Type:** Location-Access-Only

Delete a wallet charge

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `chargeId` | path | `string` | Yes | ID of the charge to delete |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Charge deleted successfully | `object` |
| `404` | Charge not found | `object` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get specific wallet charge details

**Endpoint:** `GET /marketplace/billing/charges/{chargeId}`
**Scope:** `charges.readonly`
**Token Type:** Location-Access-Only

Get specific wallet charge details

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `chargeId` | path | `string` | Yes | ID of the charge to retrieve |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Returns charge details | `object` |
| `404` | Charge not found | `object` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Check if account has sufficient funds

**Endpoint:** `GET /marketplace/billing/charges/has-funds`
**Scope:** `charges.readonly`
**Token Type:** Location-Access-Only

Check if account has sufficient funds

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Returns fund availability status | `object` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## App Management

### Uninstall an application

**Endpoint:** `DELETE /marketplace/app/{appId}/installations`
**Scope:** `oauth.write`
**Token Type:** Location-Access-Only, Agency-Access

Uninstalls an application from your company or a specific location. This will remove the application`s access and stop all its functionalities

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `appId` | path | `string` | Yes | The application id which is to be uninstalled. |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `DeleteIntegrationBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully uninstalled the application | `DeleteIntegrationResponse` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Installer Details

**Endpoint:** `GET /marketplace/app/{appId}/installations`
**Scope:** `marketplace-installer-details.readonly`
**Token Type:** Location-Access-Only, Agency-Access-Only

Fetches installer details for the authenticated user. This endpoint returns information about the company, location, user, and installation details associated with the current OAuth token.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `appId` | path | `string` | Yes | ID of the app to get installer details |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved installer details. Returns company, location, user, and installation information. | `GetInstallerDetailsResponseDTO` |
| `400` | Bad Request. Invalid request parameters or missing required data. | `—` |
| `403` | Forbidden. The client does not have necessary permissions to access installer details. | `—` |

## App Billing Management

### Get rebilling config for an app subscription and usage plans

**Endpoint:** `GET /marketplace/app/{appId}/rebilling-config/location/{locationId}`
**Scope:** `oauth.readonly`
**Token Type:** Location-Access-Only

Get rebilling config for an app subscription and usage plans for the authenticated sub-account. This endpoint returns the subscription and usage plans for an app.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `appId` | path | `string` | Yes | ID of the app to get rebilling config |
| `locationId` | path | `string` | Yes | ID of the Sub-Account location to get rebilling config for |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved rebilling config for the app | `GetRebillingConfigResponseDTO` |
| `400` | Bad Request. Invalid request parameters or missing required data. | `—` |
| `403` | Forbidden. The client does not have necessary permissions to access installer details. | `—` |

## External Auth Migration

### Migrate external authentication connection

**Endpoint:** `POST /marketplace/external-auth/migration`
**Scope:** `marketplace-external-auth-migration.write`
**Token Type:** Location-Access, Location-Access-Only

Migrates an external authentication connection credentials (basic or oauth2) for a specific app and location. This endpoint validates the app configuration, stores credentials safely in CRM's native encrypted storage. With this the lifecycle of the token is managed by CRM.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `MigrateConnectionDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Connection migrated successfully | `MigrateConnectionResponseDto` |
| `400` | Bad request - invalid input or auth type mismatch | `BadRequestDTO` |
| `401` | Unauthorized - invalid or missing token | `UnauthorizedDTO` |
| `404` | App not found | `—` |
| `500` | Internal server error | `InternalServerErrorDTO` |

## Schemas

### RaiseChargeBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appId` | `string` | Yes | App ID of the App |
| `meterId` | `string` | Yes | Billing Meter ID (you can find this on your app's pricing page) |
| `eventId` | `string` | Yes | Event ID / Transaction ID on your server's side. This will help you maintain the reference of the event/transaction on your end that you charged the customer for. |
| `userId` | `string` | No | User ID |
| `locationId` | `string` | Yes | ID of the Sub-Account to be charged |
| `companyId` | `string` | Yes | ID of the Agency the Sub-account belongs to |
| `description` | `string` | Yes | Description of the charge |
| `price` | `number` | No | Price per unit to charge |
| `units` | `number` | Yes | Number of units to charge |
| `eventTime` | `string` | No | The timestamp when the event/transaction was performed. If blank, the billing timestamp will be set as the event time. ISO8601 Format. |

### DeleteIntegrationBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `string` | No | The company id from which the application is to be uninstalled. If you pass agency token, then companyId is required. It will uninstall application from agency as well as all sub-accounts. |
| `locationId` | `string` | No | The location id from which the application is to be uninstalled. If you pass location token, then locationId is required. It will uninstall application from that location only. |
| `reason` | `string` | No | The reason for uninstalling the application. Reason is required if you are uninstalling the application as a developer. |

### DeleteIntegrationResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | The status of the uninstallation of the application |

### WhitelabelDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes | Domain of the whitelabel company |
| `logoUrl` | `string` | Yes | Logo URL of the whitelabel company |

### InstallerDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `string` | Yes | Company ID |
| `locationId` | `string` | No | Location ID (if applicable) |
| `companyName` | `string` | Yes | Company name |
| `relationshipNumber` | `string` | Yes | Company relationship number |
| `companyEmail` | `string` | No | Company email. Will be null for sub-account installations due to PII concerns. |
| `companyOwnerFullName` | `string` | No | Company owner full name. Will be null for sub-account installations due to PII concerns. |
| `userId` | `string` | Yes | User ID who installed the app |
| `isWhitelabelCompany` | `boolean` | Yes | Whether the company is a whitelabel company |
| `companyPlan` | `string` | No | Company plan. Will be null for sub-account installations due to business sensitivity. |
| `companyHighLevelPlan` | `string` | No | Company plan. Will be null for sub-account installations due to business sensitivity. |
| `marketplaceAppPlanId` | `string` | No | Marketplace app plan ID for paid apps |
| `whitelabelDetails` | `WhitelabelDetailsDTO` | No | Whitelabel details (only present if isWhitelabelCompany is true) |

### GetInstallerDetailsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `installationDetails` | `InstallerDetailsDTO` | Yes | Installation details |

### SubscriptionPlanDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resellingAmount` | `number` | Yes | The reselling amount |
| `baseAmount` | `number` | Yes | The base amount |
| `planId` | `string` | Yes | The plan id |
| `features` | `array<string>` | Yes | The features |
| `paymentType` | `string` | Yes | The payment time |
| `name` | `string` | Yes | The plan name |
| `paymentTime` | `string` | Yes | The payment time |

### UsagePlanDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productType` | `string` | Yes | The product type |
| `productName` | `string` | Yes | The product name |
| `usageUnit` | `string` | Yes | The usage unit for the meter |
| `meterId` | `string` | Yes | The meter id |
| `meterName` | `string` | Yes | The meter name |
| `fixedPricePerUnit` | `number` | Yes | The fixed price per unit, applicable for fixed price type |
| `priceType` | `string` | Yes | The price type |
| `minPricePerUnit` | `string` | Yes | The min price per unit, applicable for dynamic price type |
| `maxPricePerUnit` | `string` | Yes | The max price per unit, applicable for dynamic price type |
| `executionLimitPerCycle` | `number` | Yes | The execution limit per cycle |

### PlansDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscription` | `array<SubscriptionPlanDTO>` | Yes | Subscription plans |
| `usage` | `array<UsagePlanDTO>` | Yes | Usage-based plans |

### GetRebillingConfigResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `plans` | `PlansDTO` | Yes | The rebilling plans configuration |

### MigrateConnectionDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Type of authentication - basic or oauth2 |
| `locationId` | `string` | Yes | Location ID |
| `appId` | `string` | Yes | App ID |
| `appVersionId` | `string` | Yes | App Version ID |
| `accountId` | `string` | Yes | Connection identifier |
| `apiKey` | `string` | No | API Key (supported when type is basic) |
| `basicCredentials` | `object` | No | Basic auth credentials as key/value pairs (supported when type is basic). Keys are validated against the app version externalAuthConfig.fields. |
| `accessToken` | `string` | No | Access token (required when type is oauth2) |
| `refreshToken` | `string` | No | Refresh token (required when type is oauth2) |
| `expiryIn` | `number` | No | Access token expiry time in milliseconds (optional for oauth2) |
| `expiryAt` | `number` | No | Timestamp for access token expiry (optional for oauth2) |
| `scopes` | `array<string>` | No | OAuth2 scopes (optional for oauth2) |
| `displayName` | `string` | No | Display name for the connection (optional, defaults to accountId) |
| `isDefault` | `boolean` | No | Whether this is the default connection for the location (optional, defaults to false) |

### MigrateConnectionResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Indicates if the migration was successful |
| `identifier` | `string` | Yes | Unique identifier for the migrated connection |
| `message` | `string` | No | Message describing the result |

### InternalServerErrorDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | HTTP status code |
| `message` | `string` | No | Error message describing the internal server error |
