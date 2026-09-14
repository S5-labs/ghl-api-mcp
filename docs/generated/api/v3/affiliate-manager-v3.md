# Affiliate Manager API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/affiliate-manager-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Affiliate Manager API

## Affiliates

### List Affiliates

**Endpoint:** `GET /affiliate-manager/{locationId}/affiliates`
**Scope:** `affiliate-manager.readonly`
**Token Type:** bearer

Retrieve the list of affiliates for a location.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `query` | query | `string` | No | — |
| `active` | query | `string` | No | — |
| `campaignId` | query | `string` | No | — |
| `skip` | query | `number` | No | — |
| `limit` | query | `number` | No | Maximum number of records to return. Maximum allowed value is 100. |
| `fromDate` | query | `string` | No | — |
| `toDate` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListAffiliatesResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Affiliate

**Endpoint:** `GET /affiliate-manager/{locationId}/affiliates/{affiliateId}`
**Scope:** `affiliate-manager.readonly`
**Token Type:** bearer

Retrieve a single affiliate by id for a location.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `affiliateId` | path | `string` | Yes | Affiliate Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetAffiliateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Payouts

### List Payouts

**Endpoint:** `GET /affiliate-manager/{locationId}/payouts`
**Scope:** `affiliate-manager.readonly`
**Token Type:** bearer

Retrieve the list of payouts for a location.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `status` | query | `string` | No | Payout status |
| `query` | query | `string` | No | query |
| `affiliateId` | query | `string` | No | Affiliate Id |
| `campaignId` | query | `string` | No | Campaign Id |
| `skip` | query | `number` | No | — |
| `limit` | query | `number` | No | — |
| `start` | query | `string` | No | — |
| `end` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPayoutListResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Commissions

### List Commissions

**Endpoint:** `GET /affiliate-manager/{locationId}/commissions`
**Scope:** `affiliate-manager.readonly`
**Token Type:** bearer

Retrieve the list of commissions for a location.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `campaignId` | query | `string` | No | Campaign Id |
| `affiliateId` | query | `string` | No | Affiliate Id |
| `status` | query | `string` | No | Status |
| `query` | query | `string` | No | Query |
| `skip` | query | `number` | No | — |
| `limit` | query | `number` | No | Maximum number of records to return. Maximum allowed value is 100. |
| `fromDate` | query | `string` | No | — |
| `toDate` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetCommissionListResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### OAuthAffiliateListItemResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Affiliate id |
| `firstName` | `string` | No | Affiliate first name |
| `lastName` | `string` | No | Affiliate last name |
| `phone` | `string` | No | Affiliate phone number |
| `deleted` | `boolean` | No | Whether the affiliate is deleted |
| `locationId` | `string` | Yes | Location id |
| `active` | `boolean` | No | Whether the affiliate is active |
| `address` | `string` | No | Affiliate address |
| `avatar` | `string` | No | Affiliate avatar URL |
| `createdAt` | `string` | No | Created at timestamp |
| `createdBy` | `object` | No | Created by audit info |
| `facebookUrl` | `string` | No | Facebook URL |
| `instagramUrl` | `string` | No | Instagram URL |
| `linkedInUrl` | `string` | No | LinkedIn URL |
| `twitterUrl` | `string` | No | Twitter URL |
| `youtubeUrl` | `string` | No | YouTube URL |
| `websiteUrl` | `string` | No | Website URL |
| `contactId` | `string` | No | Contact id associated with the affiliate |
| `campaignIds` | `array<string>` | No | Campaign ids |
| `vatId` | `string` | No | VAT ID |
| `updatedAt` | `string` | No | Updated at timestamp |
| `w8Form` | `string` | No | W8 form URL |
| `w9Form` | `string` | No | W9 form URL |
| `lastUpdatedBy` | `object` | No | Last updated by audit info |
| `email` | `string` | Yes | Affiliate email |
| `revenue` | `number` | No | Affiliate revenue |
| `customer` | `number` | No | Customer count |
| `lead` | `number` | No | Lead count |
| `droppedCustomer` | `number` | No | Dropped customer count |
| `clickCount` | `number` | No | Click count |
| `paid` | `number` | No | Paid amount |
| `currency` | `string` | No | Currency code |
| `owned` | `number` | No | Owned amount |

### AffiliateListMetaResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | Total affiliates matching the applied filters |

### ListAffiliatesResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affiliates` | `array<OAuthAffiliateListItemResponseDto>` | Yes | Affiliate list |
| `meta` | `AffiliateListMetaResponseDto` | Yes | Pagination metadata |

### GetAffiliateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Affiliate id |
| `firstName` | `string` | No | Affiliate first name |
| `lastName` | `string` | No | Affiliate last name |
| `phone` | `string` | No | Affiliate phone number |
| `deleted` | `boolean` | No | Whether the affiliate is deleted |
| `locationId` | `string` | Yes | Location id |
| `active` | `boolean` | No | Whether the affiliate is active |
| `address` | `string` | No | Affiliate address |
| `avatar` | `string` | No | Affiliate avatar URL |
| `createdAt` | `string` | No | Created at timestamp |
| `createdBy` | `object` | No | Created by audit info |
| `facebookUrl` | `string` | No | Facebook URL |
| `instagramUrl` | `string` | No | Instagram URL |
| `linkedInUrl` | `string` | No | LinkedIn URL |
| `twitterUrl` | `string` | No | Twitter URL |
| `youtubeUrl` | `string` | No | YouTube URL |
| `websiteUrl` | `string` | No | Website URL |
| `contactId` | `string` | No | Contact id associated with the affiliate |
| `campaignIds` | `array<string>` | No | Campaign ids |
| `vatId` | `string` | No | VAT ID |
| `updatedAt` | `string` | No | Updated at timestamp |
| `w8Form` | `string` | No | W8 form URL |
| `w9Form` | `string` | No | W9 form URL |
| `lastUpdatedBy` | `object` | No | Last updated by audit info |
| `email` | `string` | Yes | Affiliate email |
| `revenue` | `number` | No | Affiliate revenue |
| `customer` | `number` | No | Customer count |
| `lead` | `number` | No | Lead count |
| `droppedCustomer` | `number` | No | Dropped customer count |
| `clickCount` | `number` | No | Click count |
| `paid` | `number` | No | Paid amount |
| `currency` | `string` | No | Currency code |
| `owned` | `number` | No | Owned amount |

### PayoutListItemResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Payout id |
| `locationId` | `string` | Yes | Location id |
| `affiliateId` | `string` | Yes | Affiliate id |
| `campaignId` | `string` | No | Campaign id |
| `currency` | `string` | Yes | Payout currency |
| `amount` | `number` | Yes | Payout amount |
| `status` | `string` | No | Payout status |
| `payoutMonth` | `string` | No | Payout month |
| `dueAt` | `string` | No | Payout due date |
| `paidAt` | `string` | No | Payout paid date |
| `paidMeta` | `object` | No | Payout metadata |
| `paidMethod` | `string` | No | Payout paid method |
| `altId` | `string` | No | Alternate id |
| `deleted` | `boolean` | No | Whether the payout is deleted |
| `isMigrated` | `boolean` | No | Whether the payout is migrated |
| `createdAt` | `string` | No | Created at timestamp |
| `updatedAt` | `string` | No | Updated at timestamp |
| `campaign` | `string` | No | Campaign name |
| `affiliateName` | `string` | No | Affiliate display name |
| `affiliateEmail` | `string` | No | Affiliate email |
| `payoutMethod` | `string` | No | Primary payout method |
| `affiliate` | `OAuthAffiliateListItemResponseDto` | No | Affiliate details |

### PayoutListMetaResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | Total payouts matching the filters |

### GetPayoutListResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `payouts` | `array<PayoutListItemResponseDto>` | Yes | Payout list |
| `meta` | `PayoutListMetaResponseDto` | No | Pagination metadata |

### CommissionCustomerResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | Customer id |
| `firstName` | `string` | No | Customer first name |
| `lastName` | `string` | No | Customer last name |
| `email` | `string` | No | Customer email |
| `type` | `string` | No | Customer type |

### CommissionCampaignResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Campaign id |
| `name` | `string` | No | Campaign name |
| `liveMode` | `boolean` | No | Whether the campaign is in live mode |

### CommissionAffiliateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | Affiliate id |
| `name` | `string` | No | Affiliate display name |
| `email` | `string` | No | Affiliate email |

### CommissionListItemResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Commission id |
| `productId` | `string` | No | Product id |
| `productName` | `string` | No | Product name |
| `qty` | `number` | No | Quantity |
| `productCommission` | `number` | No | Product commission amount |
| `commissionAmount` | `number` | No | Commission amount |
| `amount` | `number` | No | Base amount |
| `unitDiscount` | `number` | No | Unit discount |
| `campaignName` | `string` | No | Campaign name |
| `commission` | `number` | No | Commission percentage or value |
| `commissionType` | `string` | No | Commission type |
| `transactionAt` | `string` | No | Transaction time |
| `transactionId` | `string` | No | Transaction id |
| `affiliateId` | `string` | No | Affiliate id |
| `payoutId` | `string` | No | Payout id |
| `status` | `string` | No | Commission status |
| `currency` | `string` | No | Currency |
| `isTrial` | `boolean` | No | Whether the item is a trial commission |
| `customer` | `CommissionCustomerResponseDto` | No | Customer details |
| `createdAt` | `string` | No | Created at |
| `eventId` | `string` | No | Event id |
| `campaign` | `CommissionCampaignResponseDto` | No | Campaign details |
| `affiliate` | `CommissionAffiliateResponseDto` | No | Affiliate details |
| `dueAt` | `string` | No | Due date |
| `liveMode` | `boolean` | No | Whether the commission is in live mode |
| `tier` | `number` | No | Commission tier |

### CommissionListMetaResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | Total commissions matching the filters |

### GetCommissionListResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commissions` | `array<CommissionListItemResponseDto>` | Yes | Commission list |
| `meta` | `CommissionListMetaResponseDto` | No | Pagination metadata |
