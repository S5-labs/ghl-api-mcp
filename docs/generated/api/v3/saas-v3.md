# SaaS API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/saas-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

API Service for SaaS

## Saas

### Get locations by stripeId with companyId

**Endpoint:** `GET /saas-api/public-api/locations`
**Token Type:** Agency-Access
**Deprecated:** Yes

Get locations by stripeCustomerId or stripeSubscriptionId with companyId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `customerId` | query | `string` | No | Stripe customer ID to find locations for |
| `subscriptionId` | query | `string` | No | Stripe subscription ID to find locations for |
| `companyId` | query | `string` | Yes | Company ID to filter locations |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Locations retrieved successfully | `array<string>` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Update SaaS subscription

**Endpoint:** `PUT /saas-api/public-api/update-saas-subscription/{locationId}`
**Token Type:** Agency-Access
**Deprecated:** Yes

Update SaaS subscription for given locationId and customerId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location ID to update subscription for |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateSubscriptionDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | SaaS subscription updated successfully | `string` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Disable SaaS for locations

**Endpoint:** `POST /saas-api/public-api/bulk-disable-saas/{companyId}`
**Token Type:** Agency-Access
**Deprecated:** Yes

Disable SaaS for locations for given locationIds

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | Company ID to disable SaaS for |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `BulkDisableSaasDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | SaaS disabled successfully for locations | `BulkDisableSaasResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Enable SaaS for Sub-Account (Formerly Location)

**Endpoint:** `POST /saas-api/public-api/enable-saas/{locationId}`
**Token Type:** Agency-Access
**Deprecated:** Yes

<div>
                  <p>Enable SaaS for Sub-Account (Formerly Location) based on the data provided</p> 
                  <div>
<span>
                     :::info
 This feature is only available on Agency Pro ($497) plan.
 :::  
 </span>
                  </div>
                </div>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location ID to enable SaaS for |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `EnableSaasDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | SaaS enabled successfully for location | `EnableSaasResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Pause location

**Endpoint:** `POST /saas-api/public-api/pause/{locationId}`
**Token Type:** Agency-Access
**Deprecated:** Yes

Pause Sub account for given locationId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location ID to pause/unpause |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `PauseLocationDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Location paused/unpaused successfully | `boolean` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Update Rebilling

**Endpoint:** `POST /saas-api/public-api/update-rebilling/{companyId}`
**Token Type:** Agency-Access
**Deprecated:** Yes

Bulk update rebilling for given locationIds

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | Company ID to update rebilling for |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateRebillingDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Rebilling updated successfully | `UpdateRebillingResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Get Agency Plans

**Endpoint:** `GET /saas-api/public-api/agency-plans/{companyId}`
**Token Type:** Agency-Access
**Deprecated:** Yes

Fetch all agency subscription plans for a given company ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | Company ID to get agency plans for |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agency plans retrieved successfully | `array<AgencyPlanResponseDto>` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Get Location Subscription Details

**Endpoint:** `GET /saas-api/public-api/get-saas-subscription/{locationId}`
**Token Type:** Agency-Access
**Deprecated:** Yes

Fetch subscription details for a specific location from location metadata

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location ID to get subscription details for |
| `companyId` | query | `string` | Yes | Company ID to filter subscription details |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Location subscription details retrieved successfully | `LocationSubscriptionResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Bulk Enable SaaS

**Endpoint:** `POST /saas-api/public-api/bulk-enable-saas/{companyId}`
**Token Type:** Agency-Access
**Deprecated:** Yes

Enable SaaS mode for multiple locations with support for both SaaS v1 and v2

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | Company ID to enable SaaS for |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `BulkEnableSaasRequestDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Bulk SaaS enable operation completed successfully | `BulkEnableSaasResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Get SaaS Locations

**Endpoint:** `GET /saas-api/public-api/saas-locations/{companyId}`
**Token Type:** Agency-Access
**Deprecated:** Yes

Fetch all SaaS-activated locations for a company with pagination

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | Company ID to get SaaS locations for |
| `page` | query | `number` | No | Page number for pagination |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | SaaS locations retrieved successfully | `GetSaasLocationsResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Get SaaS Plan

**Endpoint:** `GET /saas-api/public-api/saas-plan/{planId}`
**Token Type:** Agency-Access
**Deprecated:** Yes

Fetch a specific SaaS plan by plan ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `planId` | path | `string` | Yes | Plan ID to get SaaS plan details for |
| `companyId` | query | `string` | Yes | Company ID to filter SaaS plan |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | SaaS plan retrieved successfully | `SaasPlanResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Get locations by stripeId with companyId

**Endpoint:** `GET /saas/locations`
**Token Type:** Agency-Access

Get locations by stripeCustomerId or stripeSubscriptionId with companyId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `customerId` | query | `string` | Yes | — |
| `subscriptionId` | query | `string` | Yes | — |
| `companyId` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |

### Update SaaS subscription

**Endpoint:** `PUT /saas/update-saas-subscription/{locationId}`
**Token Type:** Agency-Access

Update SaaS subscription for given locationId and customerId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateSubscriptionDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |

### Disable SaaS for locations

**Endpoint:** `POST /saas/bulk-disable-saas/{companyId}`
**Token Type:** Agency-Access

Disable SaaS for locations for given locationIds

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `BulkDisableSaasDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |

### Enable SaaS for Sub-Account (Formerly Location)

**Endpoint:** `POST /saas/enable-saas/{locationId}`
**Token Type:** Agency-Access

<div>
                  <p>Enable SaaS for Sub-Account (Formerly Location) based on the data provided</p> 
                  <div>
<span>
                     :::info
 This feature is only available on Agency Pro ($497) plan.
 :::  
 </span>
                  </div>
                </div>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `EnableSaasDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |

### Pause location

**Endpoint:** `POST /saas/pause/{locationId}`
**Token Type:** Agency-Access

Pause Sub account for given locationId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `PauseLocationDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |

### Update Rebilling

**Endpoint:** `POST /saas/update-rebilling/{companyId}`
**Token Type:** Agency-Access

Bulk update rebilling for given locationIds

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateRebillingDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |

### Get Agency Plans

**Endpoint:** `GET /saas/agency-plans/{companyId}`
**Token Type:** Agency-Access

Fetch all agency subscription plans for a given company ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |

### Get Location Subscription Details

**Endpoint:** `GET /saas/get-saas-subscription/{locationId}`
**Token Type:** Agency-Access

Fetch subscription details for a specific location from location metadata

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | — |
| `companyId` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |

### Bulk Enable SaaS

**Endpoint:** `POST /saas/bulk-enable-saas/{companyId}`
**Token Type:** Agency-Access

Enable SaaS mode for multiple locations with support for both SaaS v1 and v2

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `BulkEnableSaasRequestDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | — | `—` |

### Get SaaS Locations

**Endpoint:** `GET /saas/saas-locations/{companyId}`
**Token Type:** Agency-Access

Fetch all SaaS-activated locations for a company with pagination

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | — |
| `page` | query | `number` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |

### Get SaaS Plan

**Endpoint:** `GET /saas/saas-plan/{planId}`
**Token Type:** Agency-Access

Fetch a specific SaaS plan by plan ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `planId` | path | `string` | Yes | — |
| `companyId` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |

### Allow Attach Rebilling

**Endpoint:** `POST /saas/allow-attach-rebilling/{locationId}`
**Scope:** `saas/company.read`
**Token Type:** Agency-Access

Marks a SaaS sub-account as awaiting rebilling attach and optionally stores the rebilling configuration that should be applied when the rebilling config is created. Sets payment_pending on the sub-account. Only allowed when the sub-account is in setup_pending state.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location ID (Sub-account) to allow attach rebilling for |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AllowAttachRebillingDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Allow attach rebilling completed successfully | `AllowAttachRebillingResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `422` | Unprocessable entity (e.g. sub-account already in saas mode activated, or not in setup_pending state) | `BadRequestDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Get Location Wallet Balance

**Endpoint:** `GET /saas-api/public-api/companies/{companyId}/locations/{locationId}/wallet-balance`
**Scope:** `saas/company.read`
**Token Type:** Agency-Access

Fetch the wallet balance for a specific location. Returns a resource object with balance details.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | Company ID that owns the location |
| `locationId` | path | `string` | Yes | Location ID to get wallet balance for |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Location wallet balance retrieved successfully | `LocationWalletBalanceDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

### Update Location Wallet Balance

**Endpoint:** `POST /saas-api/public-api/companies/{companyId}/locations/{locationId}/wallet-balance/complimentary-credits`
**Scope:** `saas/company.write`
**Token Type:** Agency-Access

Update the wallet balance or complimentary credit settings for a specific location. Supports partial updates via updateMask field (AIP-134 compliant).

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | Company ID that owns the location |
| `locationId` | path | `string` | Yes | Location ID to update wallet balance for |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ComplimentaryCreditDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Location wallet balance updated successfully | `LocationWalletBalanceDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Resource not found | `ResourceNotFoundDTO` |
| `500` | Internal server error | `InternalServerErrorDTO` |

## Schemas

### BadRequestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | Status code |
| `message` | `string` | No | Error message |

### UnauthorizedDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | Status code |
| `message` | `string` | No | Error message |
| `error` | `string` | No | Error message |

### ResourceNotFoundDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | Status code |
| `message` | `string` | No | Error message |

### InternalServerErrorDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | Status code |
| `message` | `string` | No | Error message |

### UpdateSubscriptionDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscriptionId` | `string` | Yes | Subscription ID |
| `customerId` | `string` | Yes | Customer ID |
| `companyId` | `string` | Yes | Company ID |

### BulkDisableSaasDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationIds` | `array<string>` | Yes | Location IDs |

### BulkDisableSaasResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `object` | Yes | Response data from the bulk disable SaaS operation |

### EnableSaasDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `stripeAccountId` | `string` | No | Stripe account id(Required only for SaaS V1) |
| `name` | `string` | No | Name of the stripe customer(Required only for SaaS V1) |
| `email` | `string` | No | Email of the stripe customer(Required only for SaaS V1) |
| `stripeCustomerId` | `string` | No | Stripe customer id if exists(Required only for SaaS V1) |
| `companyId` | `string` | Yes | — |
| `isSaaSV2` | `boolean` | Yes | Denotes if it is a saas v2 or v1 sub-account |
| `contactId` | `string` | No | Agency subaccount used for payment provider integration(Required Only for SaaS V2) |
| `providerLocationId` | `string` | No | Agency Subaccount ID |
| `description` | `string` | No | Description |
| `saasPlanId` | `string` | No | Required only while pre-configuring saas subscription |
| `priceId` | `string` | No | Required only while pre-configuring saas subscription |

### EnableSaasResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `object` | Yes | Response data from the enable SaaS operation |

### PauseLocationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paused` | `boolean` | Yes | Paused |
| `companyId` | `string` | Yes | Company ID |

### UpdateRebillingDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `product` | `string` | Yes | The product to update rebilling for |
| `locationIds` | `array<string>` | Yes | Array of location IDs to update rebilling for |
| `config` | `object` | Yes | Configuration for rebilling settings |

### UpdateRebillingResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Indicates if the rebilling update was successful |

### AgencyPlanResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `planId` | `string` | Yes | Unique identifier for the plan |
| `title` | `string` | Yes | Title of the plan |
| `description` | `string` | Yes | Description of the plan |
| `saasProducts` | `array<string>` | Yes | Array of SaaS products included in the plan |
| `addOns` | `array<string>` | No | Array of add-ons included in the plan |
| `planLevel` | `number` | Yes | Level of the plan (0-4) |
| `trialPeriod` | `number` | Yes | Trial period in days |
| `userLimit` | `number` | No | User limit for the plan |
| `contactLimit` | `number` | No | Contact limit for the plan |
| `prices` | `array<object>` | Yes | Pricing information for the plan |
| `categoryId` | `string` | No | Category ID for the plan |
| `snapshotId` | `string` | No | Snapshot ID for the plan |
| `productId` | `string` | No | Product ID for the plan |
| `isSaaSV2` | `boolean` | Yes | Indicates if this is a SaaS V2 plan |
| `providerLocationId` | `string` | No | Provider location ID |
| `createdAt` | `string` | Yes | Creation timestamp |
| `updatedAt` | `string` | Yes | Last update timestamp |

### LocationSubscriptionResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `isSaaSV2` | `boolean` | Yes | Indicates if the SaaS is V2 |
| `companyId` | `string` | Yes | Company ID |
| `saasMode` | `string` | No | SaaS mode |
| `subscriptionId` | `string` | No | Subscription ID |
| `customerId` | `string` | No | Customer ID |
| `productId` | `string` | No | Product ID |
| `priceId` | `string` | No | Price ID |
| `saasPlanId` | `string` | No | SaaS plan ID |
| `subscriptionStatus` | `string` | No | Subscription status |

### BulkEnableSaasActionPayloadDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `priceId` | `string` | No | Price ID for the SaaS plan |
| `stripeAccountId` | `string` | No | Stripe account ID |
| `saasPlanId` | `string` | Yes | SaaS plan ID |
| `providerLocationId` | `string` | No | Provider location ID |

### BulkEnableSaasRequestDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationIds` | `array<string>` | Yes | Array of location IDs to enable SaaS for |
| `isSaaSV2` | `boolean` | Yes | Indicates if the SaaS is V2 |
| `actionPayload` | `BulkEnableSaasActionPayloadDto` | Yes | Action payload for the bulk enable SaaS operation |

### BulkEnableSaasResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Indicates if the bulk enable SaaS operation was successful |
| `message` | `string` | Yes | Message indicating the bulk enable SaaS operation |
| `bulkActionUrl` | `string` | No | URL for the bulk enable SaaS operation |

### SaasLocationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `companyId` | `string` | Yes | Company ID |
| `saasMode` | `string` | Yes | SaaS mode |
| `subscriptionId` | `string` | Yes | Subscription ID |
| `customerId` | `string` | No | Customer ID |
| `name` | `string` | No | Name |
| `email` | `string` | No | Email |
| `providerLocationId` | `string` | No | Provider location ID |
| `isSaaSV2` | `boolean` | No | Indicates if the SaaS is V2 |
| `subscriptionInfo` | `object` | No | Subscription information |

### GetSaasLocationsResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locations` | `array<SaasLocationDto>` | Yes | Array of SaaS locations |
| `pagination` | `object` | Yes | — |

### SaasPlanResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `planId` | `string` | Yes | Unique identifier for the SaaS plan |
| `companyId` | `string` | Yes | Company ID associated with the SaaS plan |
| `title` | `string` | Yes | Title of the SaaS plan |
| `description` | `string` | Yes | Description of the SaaS plan |
| `saasProducts` | `array<string>` | Yes | Array of SaaS products included in the plan |
| `addOns` | `array<string>` | No | Array of add-ons included in the plan |
| `planLevel` | `number` | Yes | Level of the plan (0-4) |
| `trialPeriod` | `number` | Yes | Trial period in days |
| `setupFee` | `number` | No | Setup fee for the plan |
| `userLimit` | `number` | No | User limit for the plan |
| `contactLimit` | `number` | No | Contact limit for the plan |
| `prices` | `array<object>` | Yes | Prices for the plan |
| `categoryId` | `string` | No | Category ID for the plan |
| `snapshotId` | `string` | No | Snapshot ID for the plan |
| `providerLocationId` | `string` | No | Provider location ID |
| `productId` | `string` | No | Product ID for the plan |
| `isSaaSV2` | `boolean` | Yes | Indicates if this is a SaaS V2 plan |
| `createdAt` | `string (date-time)` | Yes | Creation timestamp |
| `updatedAt` | `string (date-time)` | Yes | Last update timestamp |

### LocationWalletBalanceDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `walletId` | `string` | Yes | Wallet Id |
| `balance` | `number` | Yes | Current wallet balance |
| `complimentaryCredits` | `number` | Yes | Complimentary credits amount |

### ComplimentaryCreditDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `complimentaryCreditsAmount` | `number` | No | Credit amount to be added |

### AttachedRebillingProductConfigDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Enable rebilling for the product |
| `markup` | `number` | Yes | Additional value to be added in terms of percentage |
| `price` | `number` | No | Product price override |

### AllowAttachRebillingDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `string` | Yes | Company ID owning the location |
| `attachedRebillingConfig` | `object` | No | Map of rebilling product code to its config. When provided, this gets stored on the sub-account so it can be applied when the rebilling config is created. Omit to only mark the sub-account as awaiting rebilling attach without any pre-configured products. Possible product keys: `contentAI`, `workflow_premium_actions`, `workflow_ai`, `conversationAI`, `whatsApp`, `reviewsAI`, `EmailVerification`, `funnelAI`, `domainPurchase`, `Phone`, `Email`, `agentStudio`, `askai`, `aiStudio`. |

### AllowAttachRebillingResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Indicates if the allow attach rebilling operation succeeded |
| `locationId` | `string` | Yes | Location ID the rebilling config was attached to |
| `attachedRebillingConfig` | `object` | Yes | Stored rebilling configuration on the location. Markup is the internal percentage value converted from the request multiplier (e.g. 4 -> 300%, 3 -> 200%). |
