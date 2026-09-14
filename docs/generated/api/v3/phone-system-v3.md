# LC Phone API v3

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/phone-system-v3.json). Do not edit this generated file directly.

**API Version:** v3
**Base URL:** `https://services.leadconnectorhq.com`

API Service for LC Phone - version v3

## lc-phone

### List number pools

**Endpoint:** `GET /phone-system/number-pools`
**Scope:** `numberpools.read`
**Token Type:** Location-Access

Returns number pools for the location. Requires locationId as a query parameter.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | query | `string` | Yes | Location ID to scope the number pool list |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | List of number pools for the location. | `—` |

### List available phone numbers

**Endpoint:** `GET /phone-system/numbers/location/{locationId}/available`
**Scope:** `phonenumbers.read`
**Token Type:** Location-Access

Search Twilio inventory for purchasable phone numbers in a country for the given location.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `firstPart` | query | `string` | Yes | firstPart is the beginning of the phone number |
| `lastPart` | query | `string` | Yes | lastPart is the ending of the phone number |
| `anywhere` | query | `string` | Yes | anywhere are the numbers required anywhere in phone number |
| `numberTypes` | query | `array<string>` | Yes | comma separated types of phone number required |
| `smsEnabled` | query | `boolean` | Yes | requested phone numbers should have sms functionality |
| `mmsEnabled` | query | `boolean` | Yes | requested phone numbers should have mms functionality |
| `voiceEnabled` | query | `boolean` | Yes | requested phone numbers should have voice functionality |
| `countryCode` | query | `string` | Yes | country for which the phone numbers are being requested |
| `locationId` | path | `string` | Yes | Location ID as string |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Available phone numbers matching the search criteria. | `—` |

### Purchase number for location

**Endpoint:** `POST /phone-system/numbers/location/{locationId}/purchase`
**Scope:** `phonenumbers.write`
**Token Type:** Location-Access

Purchase number for location. With `version: v3`, the HTTP 201 body is the standard success envelope (`status`, `data`, `message`, `statusCode`). The v3 purchase fields live under `data`: `number`, `locationId`, `id`, and `underLcAccount` (renamed from under_ghl_account).

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID as string |
| `version` | header | `string` | Yes | Send `v3` to use the v3 response contract (AIP). This is the supported version value for these endpoints. |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `PurchasePhoneNumberBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Success envelope; v3 purchase details are in `data` (slim shape: number, locationId, id, underLcAccount). | `PurchaseNumberForLocationV3Http201ResponseDto` |

### List active numbers

**Endpoint:** `GET /phone-system/numbers/location/{locationId}`
**Scope:** `phonenumbers.read`
**Token Type:** Location-Access

List active numbers. With `version: v3`, the HTTP 200 body is the standard success envelope (`status`, `data`, `message`, `statusCode`). The v3 list payload is under `data`; `isUnderGhl` is renamed to `isUnderLc` per AIP naming convention.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | Location ID as string |
| `pageSize` | query | `number` | No | How many resources to return in each list page. The default is 50, and the maximum is 1000. |
| `page` | query | `number` | No | The page index. The default is 0. |
| `searchFilter` | query | `string` | No | Number search Filter |
| `skipNumberPool` | query | `boolean` | No | When true, exclude numbers assigned to number pools from the list. |
| `includeRcsSenderIds` | query | `boolean` | No | Include RCS Sender IDs |
| `version` | header | `string` | Yes | Send `v3` to use the v3 response contract (AIP). This is the supported version value for these endpoints. |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success envelope; v3 list details are in `data` (including `isUnderLc` instead of legacy `isUnderGhl`). | `ListNumbersV3Http200ResponseDto` |

## Schemas

### PurchasePhoneNumberBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `phoneNumber` | `string` | Yes | phoneNumber to purchase |
| `addressSid` | `string` | Yes | addressSid twilio address id |
| `bundleSid` | `string` | Yes | bundleSid twilio bundle id |
| `countryCode` | `string` | Yes | country for which the phone numbers are being requested |
| `numberType` | `object` | Yes | type of phone number to be purchased |
| `paymentIntentId` | `string` | Yes | stripe payment intent id |
| `stripeAccountId` | `string` | Yes | stripe account id |
| `paymentMethodId` | `string` | Yes | stripe registered payment method id |
| `locality` | `string` | Yes | locality of the user in which number is being purchased |
| `region` | `string` | Yes | region of the user in which number is being purchased |
| `fingerprintId` | `string` | Yes | fingerprintId is request id which is unique for every purchase number request |
| `skipLocationKYC` | `boolean` | Yes | Skip location-level KYC verification if agency-level compliance has already been verified |

### PurchaseNumberForLocationV3ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `number` | `string` | Yes | E.164 phone number that was purchased (from the request body) |
| `locationId` | `string` | Yes | Location that owns the Twilio / numbers account |
| `id` | `string` | Yes | Twilio account document identifier |
| `underLcAccount` | `boolean` | Yes | Whether the account is managed under LC. Renamed from under_ghl_account in the legacy document. |

### PurchaseNumberForLocationV3Http201ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | Yes | Outcome indicator from the shared success helper. |
| `data` | `PurchaseNumberForLocationV3ResponseDto` | Yes | V3 purchase payload: purchased number, location, Twilio account id, and underLcAccount. |
| `message` | `string` | Yes | Human-readable success message. |
| `statusCode` | `number` | Yes | HTTP status echoed in the response body. |

### NumberCapabilitiesDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `voice` | `boolean` | No | Whether the number supports voice calls |
| `sms` | `boolean` | No | Whether the number supports SMS |
| `mms` | `boolean` | No | Whether the number supports MMS |
| `fax` | `boolean` | No | Whether the number supports fax |

### ListNumberItemResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `phoneNumber` | `string` | Yes | Phone number in E.164 format |
| `friendlyName` | `string` | No | Human-friendly label for the number |
| `sid` | `string` | No | Provider number identifier |
| `countryCode` | `string` | No | ISO country code for the number |
| `capabilities` | `NumberCapabilitiesDto` | No | Phone number capabilities |
| `type` | `string` | No | Phone number type |
| `isDefaultNumber` | `boolean` | No | Whether this is the default outbound number |
| `linkedUser` | `string` | No | Linked user ID if the number is assigned |
| `linkedRingAllUsers` | `array<string>` | No | Ring-all user IDs linked to the number |
| `inboundCallService` | `object` | No | Inbound call service metadata |
| `forwardingNumber` | `string` | No | Forwarding number in E.164 format |
| `isGroupConversationEnabled` | `boolean` | No | Whether group conversations are enabled |
| `addressSid` | `string` | No | Address SID used for regulated number purchases |
| `bundleSid` | `string` | No | Bundle SID used for regulated number purchases |
| `dateAdded` | `object` | No | Date the number was added |
| `dateUpdated` | `object` | No | Date the number was last updated |
| `dateCreated` | `object` | No | Legacy created-at field returned by some providers |
| `origin` | `string` | No | Provider origin for the number |

### RcsSenderIdResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `number` | `string` | Yes | RCS sender ID |
| `numberType` | `string` | Yes | Entry type |
| `friendlyName` | `string` | No | Human-friendly label for the sender ID |
| `rcsMeta` | `object` | No | RCS sender metadata |

### ListNumbersV3ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `numbers` | `array<ListNumberItemResponseDto>` | Yes | Active numbers available for the location |
| `isUnderLc` | `boolean` | No | Whether the account is managed under LC. Renamed from isUnderGhl. |
| `pageSize` | `number` | No | The page size requested |
| `page` | `number` | No | The zero-based page index requested |
| `accountStatus` | `string` | No | Twilio account status for the location |
| `rcsSenderIds` | `array<RcsSenderIdResponseDto>` | No | Optional RCS sender IDs returned with the number list |
| `total` | `number` | No | Total number of active numbers when available |

### ListNumbersV3Http200ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | Yes | Outcome indicator from the shared success helper. |
| `data` | `ListNumbersV3ResponseDto` | Yes | V3 list payload: numbers, pagination fields, isUnderLc (renamed from isUnderGhl), etc. |
| `message` | `string` | Yes | Human-readable success message. |
| `statusCode` | `number` | Yes | HTTP status echoed in the response body. |
