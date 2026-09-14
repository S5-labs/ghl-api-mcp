# Phone System API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/phone-system.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Phone System API

## Number Pools

### List Number Pools

**Endpoint:** `GET /phone-system/number-pools`
**Scope:** `numberpools.read`
**Token Type:** Location-Access

Get list of number pools

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | query | `string` | No | Location ID to filter pools |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved number pools list | `object` |
| `400` | Bad request - Invalid location ID or parameters | `object` |
| `401` | Unauthorized - Invalid or missing authentication token | `—` |
| `403` | Forbidden - Insufficient permissions for this location | `—` |

## Phone Numbers

### List available phone numbers

**Endpoint:** `GET /phone-system/numbers/location/{locationId}/available`
**Scope:** `phonenumbers.read`
**Token Type:** Location-Access

Search for available phone numbers to purchase for a specific location. Supports filtering by number pattern, type, and capabilities.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | The unique identifier of the location |
| `countryCode` | query | `string` | Yes | ISO 3166-1 alpha-2 country code for which to search available numbers |
| `numberTypes` | query | `string` | No | Comma-separated list of phone number types to search for (e.g. local, tollFree, mobile) |
| `firstPart` | query | `string` | No | Filter numbers that begin with this digit pattern |
| `lastPart` | query | `string` | No | Filter numbers that end with this digit pattern |
| `anywhere` | query | `string` | No | Filter numbers that contain this digit pattern anywhere |
| `smsEnabled` | query | `boolean` | No | Filter for numbers with SMS capability |
| `mmsEnabled` | query | `boolean` | No | Filter for numbers with MMS capability |
| `voiceEnabled` | query | `boolean` | No | Filter for numbers with voice capability |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved list of available phone numbers | `AvailableNumbersResponseDto` |
| `400` | Bad request - Invalid parameters | `object` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `500` | Internal server error | `—` |

### Purchase a phone number

**Endpoint:** `POST /phone-system/numbers/location/{locationId}/purchase`
**Scope:** `phonenumbers.write`
**Token Type:** Location-Access

Purchase a phone number for a specific location.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | The unique identifier of the location |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `PurchasePhoneNumberBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Phone number successfully purchased. Returns the updated Twilio account state for the location. | `TwilioAccountResponseDto` |
| `400` | Bad request - Invalid parameters or number unavailable | `object` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `500` | Internal server error - An unexpected error occurred while purchasing the phone number | `—` |

### List active numbers

**Endpoint:** `GET /phone-system/numbers/location/{locationId}`
**Scope:** `phonenumbers.read`
**Token Type:** Location-Access

Retrieve a paginated list of active phone numbers for a specific location. Supports filtering, pagination, and optional exclusion of number pool assignments.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | path | `string` | Yes | The unique identifier of the location |
| `pageSize` | query | `number` | No | How many resources to return in each list page. The default is 50, and the maximum is 1000. |
| `page` | query | `number` | No | The page index for pagination. The default is 0. |
| `searchFilter` | query | `string` | No | Filter numbers by phone number pattern. Supports partial matching (e.g., "+91" to find all Indian numbers). |
| `skipNumberPool` | query | `boolean` | No | Whether to exclude numbers that are assigned to number pools. Default is true. |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved list of active numbers | `object` |
| `400` | Bad request - Invalid parameters | `object` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Phone system not connected | `object` |
| `500` | Internal server error | `object` |

## Schemas

### AvailableNumbersResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fingerprintId` | `string` | Yes | Unique fingerprint ID for this search result, required when purchasing one of the returned numbers |
| `numbers` | `array<AvailablePhoneNumberDto>` | Yes | List of available phone numbers matching the search criteria |

### AvailablePhoneNumberDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `phoneNumber` | `string` | Yes | E.164 formatted phone number |
| `friendlyName` | `string` | Yes | Human-readable formatted phone number |
| `isoCountry` | `string` | Yes | ISO 3166-1 alpha-2 country code |
| `lata` | `string` | No | Local Access and Transport Area code |
| `locality` | `string` | No | City or locality of the number |
| `rateCenter` | `string` | No | Rate center of the number |
| `latitude` | `string` | No | Latitude coordinate of the number's location |
| `longitude` | `string` | No | Longitude coordinate of the number's location |
| `region` | `string` | No | State or region abbreviation |
| `postalCode` | `string` | No | Postal code of the number |
| `addressRequirements` | `string` | Yes | Address requirements for purchasing this number |
| `beta` | `boolean` | Yes | Whether this is a beta number |
| `capabilities` | `object` | Yes | Communication capabilities supported by this number |
| `price` | `object` | No | Pricing information for this number |

### TwilioAccountResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of the Twilio account record |
| `account_sid` | `string` | Yes | Twilio Account SID |
| `under_ghl_account` | `boolean` | Yes | Whether this location is under a GHL-managed Twilio account |
| `validate_sms` | `boolean` | Yes | Whether SMS validation is enabled |
| `location_id` | `string` | Yes | The location ID this Twilio account belongs to |
| `migration_status` | `string` | No | Current migration status of the account |
| `migration_numbers` | `array<string>` | No | List of numbers being migrated |
| `assigned_to_numbers` | `object` | No | Map of phone numbers to assigned user IDs |
| `numbers` | `object` | Yes | Map of phone numbers to their service type (e.g. 'conversation') |
| `number_name` | `object` | No | Map of phone numbers to their friendly names |
| `new_account_sid` | `string` | No | New account SID if the account has been migrated to new credentials |

### PurchasePhoneNumberBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `phoneNumber` | `string` | Yes | The phone number to purchase |
| `countryCode` | `string` | No | ISO 3166-1 alpha-2 country code of the number |
| `numberType` | `string` | No | Type of phone number |
| `addressSid` | `string` | No | Twilio address SID for compliance |
| `bundleSid` | `string` | No | Twilio bundle SID for regulatory compliance |
| `locality` | `string` | No | Locality where the number is being purchased |
| `region` | `string` | No | Region where the number is being purchased |
| `fingerprintId` | `string` | No | Unique request ID for idempotency (fingerprint of the purchase request) |
| `skipLocationKYC` | `boolean` | No | Skip location-level KYC verification if agency-level compliance has already been verified |

### DetailedPhoneNumberDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `phoneNumber` | `string` | Yes | E.164 formatted phone number |
| `friendlyName` | `string` | No | Human-readable name assigned to the number |
| `sid` | `string` | Yes | Phone number SID (unique identifier) |
| `countryCode` | `string` | Yes | ISO 3166-1 alpha-2 country code |
| `capabilities` | `object` | Yes | Communication capabilities supported by this number |
| `type` | `string` | Yes | Type of phone number (local, toll-free, mobile, etc.) |
| `isDefaultNumber` | `boolean` | Yes | Whether this is the default outbound number for the location |
| `linkedUser` | `string` | No | User ID of the user assigned to this number |
| `linkedRingAllUsers` | `array<string>` | Yes | Array of user IDs that should ring when this number is called |
| `inboundCallService` | `object` | No | Configuration for inbound call handling service |
| `forwardingNumber` | `string` | No | Phone number to forward calls to |
| `isGroupConversationEnabled` | `boolean` | Yes | Whether group conversations are enabled for this number (US/CA numbers with SMS/MMS only) |
| `addressSid` | `string` | No | Address SID for compliance purposes |
| `bundleSid` | `string` | No | Bundle SID for regulatory compliance |
| `dateAdded` | `string (date-time)` | No | When the number was originally purchased/added |
| `dateUpdated` | `string (date-time)` | No | When the number configuration was last updated |
| `origin` | `string` | No | Source or origin of the phone number |

### NumberPoolDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier for the number pool |
| `name` | `string` | No | Human-readable name of the number pool |
| `locationId` | `string` | No | Location ID this pool belongs to |
| `numbers` | `array<object>` | No | Phone numbers in this pool |
| `forwardingNumber` | `string` | No | Number to forward calls to |
| `whisper` | `boolean` | No | Whether whisper is enabled |
| `whisperMessage` | `string` | No | Message played during whisper |
| `callRecording` | `boolean` | No | Whether call recording is enabled |
| `isActive` | `boolean` | No | Whether the number pool is active |
| `inboundCallService` | `object` | No | Inbound call service configuration |
