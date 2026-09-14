# Store API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/store.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for store API

## Shipping Zone

### Create Shipping Zone

**Endpoint:** `POST /store/shipping-zone`
**Token Type:** Location-Access

The "Create Shipping Zone" API allows adding a new shipping zone.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateShippingZoneDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateShippingZoneResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Shipping Zones

**Endpoint:** `GET /store/shipping-zone`
**Token Type:** Location-Access

The "List Shipping Zone" API allows to retrieve a list of shipping zone.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `limit` | query | `number` | No | The maximum number of items to be included in a single page of results |
| `offset` | query | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |
| `withShippingRate` | query | `boolean` | No | Include shipping rates array |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListShippingZoneResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Shipping Zone

**Endpoint:** `GET /store/shipping-zone/{shippingZoneId}`
**Token Type:** Location-Access

The "List Shipping Zone" API allows to retrieve a paginated list of shipping zone.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingZoneId` | path | `string` | Yes | ID of the item that needs to be returned |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `withShippingRate` | query | `boolean` | No | Include shipping rates array |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetShippingZoneResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Shipping Zone

**Endpoint:** `PUT /store/shipping-zone/{shippingZoneId}`
**Token Type:** Location-Access

The "update Shipping Zone" API allows update a shipping zone to the system.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingZoneId` | path | `string` | Yes | ID of the item that needs to be returned |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateShippingZoneDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateShippingZoneResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete shipping zone

**Endpoint:** `DELETE /store/shipping-zone/{shippingZoneId}`
**Token Type:** Location-Access

Delete specific shipping zone with Id :shippingZoneId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingZoneId` | path | `string` | Yes | ID of the item that needs to be returned |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteShippingZoneResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get available shipping rates

**Endpoint:** `POST /store/shipping-zone/shipping-rates`

This return available shipping rates for country based on order amount

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `GetAvailableShippingRates` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `GetAvailableShippingRatesResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Shipping Zone Rates

### Create Shipping Rate

**Endpoint:** `POST /store/shipping-zone/{shippingZoneId}/shipping-rate`
**Token Type:** Location-Access

The "Create Shipping Rate" API allows adding a new shipping rate.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingZoneId` | path | `string` | Yes | ID of the item that needs to be returned |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateShippingRateDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateShippingRateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Shipping Rates

**Endpoint:** `GET /store/shipping-zone/{shippingZoneId}/shipping-rate`
**Token Type:** Location-Access

The "List Shipping Rate" API allows to retrieve a list of shipping rate.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingZoneId` | path | `string` | Yes | ID of the item that needs to be returned |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `limit` | query | `number` | No | The maximum number of items to be included in a single page of results |
| `offset` | query | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListShippingRateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Shipping Rate

**Endpoint:** `GET /store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}`
**Token Type:** Location-Access

The "List Shipping Rate" API allows to retrieve a paginated list of shipping rate.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingZoneId` | path | `string` | Yes | ID of the shipping zone |
| `shippingRateId` | path | `string` | Yes | ID of the shipping rate that needs to be returned |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetShippingRateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Shipping Rate

**Endpoint:** `PUT /store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}`
**Token Type:** Location-Access

The "update Shipping Rate" API allows update a shipping rate to the system.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingZoneId` | path | `string` | Yes | ID of the shipping zone |
| `shippingRateId` | path | `string` | Yes | ID of the shipping rate that needs to be returned |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateShippingRateDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateShippingRateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete shipping rate

**Endpoint:** `DELETE /store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}`
**Token Type:** Location-Access

Delete specific shipping rate with Id :shippingRateId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingZoneId` | path | `string` | Yes | ID of the shipping zone |
| `shippingRateId` | path | `string` | Yes | ID of the shipping rate that needs to be returned |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteShippingRateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Shipping Carrier

### Create Shipping Carrier

**Endpoint:** `POST /store/shipping-carrier`
**Token Type:** Location-Access

The "Create Shipping Carrier" API allows adding a new shipping carrier.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateShippingCarrierDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateShippingCarrierResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Shipping Carriers

**Endpoint:** `GET /store/shipping-carrier`
**Token Type:** Location-Access

The "List Shipping Carrier" API allows to retrieve a list of shipping carrier.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListShippingCarrierResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Shipping Carrier

**Endpoint:** `GET /store/shipping-carrier/{shippingCarrierId}`
**Token Type:** Location-Access

The "List Shipping Carrier" API allows to retrieve a paginated list of shipping carrier.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingCarrierId` | path | `string` | Yes | ID of the shipping carrier that needs to be returned |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetShippingCarrierResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Shipping Carrier

**Endpoint:** `PUT /store/shipping-carrier/{shippingCarrierId}`
**Token Type:** Location-Access

The "update Shipping Carrier" API allows update a shipping carrier to the system.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingCarrierId` | path | `string` | Yes | ID of the shipping carrier that needs to be returned |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateShippingCarrierDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateShippingCarrierResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete shipping carrier

**Endpoint:** `DELETE /store/shipping-carrier/{shippingCarrierId}`
**Token Type:** Location-Access

Delete specific shipping carrier with Id :shippingCarrierId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `shippingCarrierId` | path | `string` | Yes | ID of the shipping carrier that needs to be returned |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteShippingCarrierResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Store Setting

### Create/Update Store Settings

**Endpoint:** `POST /store/store-setting`
**Token Type:** Location-Access

Create or update store settings by altId and altType.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateStoreSettingDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateStoreSettingResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Store Settings

**Endpoint:** `GET /store/store-setting`
**Token Type:** Location-Access

Get store settings by altId and altType.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetStoreSettingResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### ShippingZoneCountryStateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes | State code |

### ShippingZoneCountryDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `number` | Yes | Country code |
| `states` | `array<ShippingZoneCountryStateDto>` | No | List of states that are available. If states is empty, then all states are available |

### CreateShippingZoneDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the shipping zone |
| `countries` | `array<ShippingZoneCountryDto>` | Yes | List of countries that are available |

### ShippingCarrierServiceDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Name of the shipping carrier service |
| `value` | `string` | Yes | Value of the shipping carrier service |

### ShippingRateSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the shipping zone |
| `description` | `string` | No | Delivery description |
| `currency` | `string` | Yes | The currency of the amount of the rate / handling fee |
| `amount` | `number` | Yes | The amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a carrier rate (it will add to the carrier rate). |
| `conditionType` | `string` | Yes | Type of condition to provide the conditional pricing |
| `minCondition` | `number` | Yes | Minimum condition for applying this price. set 0 or null if there is no minimum |
| `maxCondition` | `number` | Yes | Maximum condition for applying this price. set 0 or null if there is no maximum |
| `isCarrierRate` | `boolean` | No | is this a carrier rate |
| `shippingCarrierId` | `string` | Yes | Shipping carrier id |
| `percentageOfRateFee` | `number` | No | Percentage of rate fee if it is a carrier rate. |
| `shippingCarrierServices` | `array<ShippingCarrierServiceDto>` | No | An array of items |
| `_id` | `string` | Yes | The unique identifier for the product. |
| `shippingZoneId` | `string` | Yes | The unique identifier for the shipping zone. |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### ShippingZoneSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the shipping zone |
| `countries` | `array<ShippingZoneCountryDto>` | Yes | List of countries that are available |
| `_id` | `string` | Yes | The unique identifier for the product. |
| `shippingRates` | `array<ShippingRateSchema>` | No | Array of shipping rates under this shipping zone |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### CreateShippingZoneResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `ShippingZoneSchema` | Yes | Shipping zone data |

### ListShippingZoneResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total` | `number` | Yes | Total number of items |
| `data` | `array<ShippingZoneSchema>` | Yes | An array of items |

### GetShippingZoneResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `ShippingZoneSchema` | Yes | Shipping zone data |

### UpdateShippingZoneDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | No | Location Id or Agency Id |
| `altType` | `string` | No | — |
| `name` | `string` | No | Name of the shipping zone |
| `countries` | `array<ShippingZoneCountryDto>` | No | List of countries that are available |

### UpdateShippingZoneResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `ShippingZoneSchema` | Yes | Shipping zone data |

### DeleteShippingZoneResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |

### ContactAddress

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Name of the customer |
| `companyName` | `string` | No | Name of the Company |
| `addressLine1` | `string` | No | Address line 1 of the customer |
| `country` | `string` | Yes | Country code of the customer |
| `state` | `string` | No | State code of the customer |
| `city` | `string` | No | City of the customer |
| `zip` | `string` | No | Zip code of the customer |
| `phone` | `string` | No | Phone number of the customer |
| `email` | `string` | No | Email of the customer |

### OrderSource

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Source of order |
| `subType` | `string` | No | Source subtype of order |

### ProductItem

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | id of product |
| `qty` | `number` | Yes | No of quantities |

### GetAvailableShippingRates

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `country` | `string` | Yes | Country code of the customer |
| `address` | `ContactAddress` | No | Address of the customer |
| `amountAvailable` | `string` | No | it will not calculate the order amount form backend if it is true |
| `totalOrderAmount` | `number` | Yes | The amount of the price. ( min: 0.01 ) |
| `weightAvailable` | `boolean` | No | Flag to pass when the weight is already calculated and should not calculate again |
| `totalOrderWeight` | `number` | Yes | Estimated weight of the order calculated from the order creation side in kg(s) |
| `source` | `OrderSource` | Yes | Source of the order |
| `products` | `array<ProductItem>` | Yes | An array of price IDs and quantity |
| `couponCode` | `string` | No | Coupon code |

### AvailableShippingRate

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Name of the shipping zone |
| `description` | `string` | No | Delivery description |
| `currency` | `string` | Yes | The currency of the amount of the rate / handling fee |
| `amount` | `number` | Yes | The amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a carrier rate (it will add to the carrier rate). |
| `isCarrierRate` | `boolean` | No | is this a carrier rate |
| `shippingCarrierId` | `string` | Yes | Shipping carrier id |
| `percentageOfRateFee` | `number` | No | Percentage of rate fee if it is a carrier rate. |
| `shippingCarrierServices` | `array<ShippingCarrierServiceDto>` | No | An array of items |
| `_id` | `string` | Yes | The unique identifier for the product. |
| `shippingZoneId` | `string` | Yes | The unique identifier for the shipping zone. |

### GetAvailableShippingRatesResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `array<AvailableShippingRate>` | Yes | Shipping rate data |

### CreateShippingRateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the shipping zone |
| `description` | `string` | No | Delivery description |
| `currency` | `string` | Yes | The currency of the amount of the rate / handling fee |
| `amount` | `number` | Yes | The amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a carrier rate (it will add to the carrier rate). |
| `conditionType` | `string` | Yes | Type of condition to provide the conditional pricing |
| `minCondition` | `number` | Yes | Minimum condition for applying this price. set 0 or null if there is no minimum |
| `maxCondition` | `number` | Yes | Maximum condition for applying this price. set 0 or null if there is no maximum |
| `isCarrierRate` | `boolean` | No | is this a carrier rate |
| `shippingCarrierId` | `string` | Yes | Shipping carrier id |
| `percentageOfRateFee` | `number` | No | Percentage of rate fee if it is a carrier rate. |
| `shippingCarrierServices` | `array<ShippingCarrierServiceDto>` | No | An array of items |

### CreateShippingRateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `ShippingRateSchema` | Yes | Shipping zone data |

### ListShippingRateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total` | `number` | Yes | Total number of items |
| `data` | `array<ShippingRateSchema>` | Yes | An array of items |

### GetShippingRateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `ShippingRateSchema` | Yes | Shipping zone data |

### UpdateShippingRateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | No | Location Id or Agency Id |
| `altType` | `string` | No | — |
| `name` | `string` | No | Name of the shipping zone |
| `description` | `string` | No | Delivery description |
| `currency` | `string` | No | The currency of the amount of the rate / handling fee |
| `amount` | `number` | No | The amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a carrier rate (it will add to the carrier rate). |
| `conditionType` | `string` | No | Type of condition to provide the conditional pricing |
| `minCondition` | `number` | No | Minimum condition for applying this price. set 0 or null if there is no minimum |
| `maxCondition` | `number` | No | Maximum condition for applying this price. set 0 or null if there is no maximum |
| `isCarrierRate` | `boolean` | No | is this a carrier rate |
| `shippingCarrierId` | `string` | No | Shipping carrier id |
| `percentageOfRateFee` | `number` | No | Percentage of rate fee if it is a carrier rate. |
| `shippingCarrierServices` | `array<ShippingCarrierServiceDto>` | No | An array of items |

### UpdateShippingRateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `ShippingRateSchema` | Yes | Shipping zone data |

### DeleteShippingRateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |

### CreateShippingCarrierDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the shipping carrier |
| `callbackUrl` | `string` | Yes | The URL endpoint that GHL needs to retrieve shipping rates. This must be a public URL. |
| `services` | `array<ShippingCarrierServiceDto>` | No | An array of available shipping carrier services |
| `allowsMultipleServiceSelection` | `boolean` | No | The seller can choose multiple services while creating shipping rates if this is true. |

### ShippingCarrierSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `name` | `string` | Yes | Name of the shipping carrier |
| `callbackUrl` | `string` | Yes | The URL endpoint that GHL needs to retrieve shipping rates. This must be a public URL. |
| `services` | `array<ShippingCarrierServiceDto>` | No | An array of available shipping carrier services |
| `allowsMultipleServiceSelection` | `boolean` | No | The seller can choose multiple services while creating shipping rates if this is true. |
| `_id` | `string` | Yes | The unique identifier for the product. |
| `marketplaceAppId` | `string` | Yes | The unique identifier for the marketplace app. |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### CreateShippingCarrierResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `ShippingCarrierSchema` | Yes | Shipping carrier data |

### ListShippingCarrierResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `array<ShippingCarrierSchema>` | Yes | An array of items |

### GetShippingCarrierResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `ShippingCarrierSchema` | Yes | Shipping carrier data |

### UpdateShippingCarrierDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | No | Location Id or Agency Id |
| `altType` | `string` | No | — |
| `name` | `string` | No | Name of the shipping carrier |
| `callbackUrl` | `string` | No | The URL endpoint that GHL needs to retrieve shipping rates. This must be a public URL. |
| `services` | `array<ShippingCarrierServiceDto>` | No | An array of available shipping carrier services |
| `allowsMultipleServiceSelection` | `boolean` | No | The seller can choose multiple services while creating shipping rates if this is true. |

### UpdateShippingCarrierResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `ShippingCarrierSchema` | Yes | Shipping carrier data |

### DeleteShippingCarrierResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |

### StoreShippingOriginDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Name of the store / company |
| `country` | `number` | Yes | Country code |
| `state` | `string` | No | State code |
| `city` | `string` | Yes | City name |
| `street1` | `string` | Yes | Street address line 1 |
| `street2` | `string` | No | Street address line 2 |
| `zip` | `string` | Yes | Zip code |
| `phone` | `string` | No | Business Phone Number |
| `email` | `string` | No | Email |

### StoreOrderNotificationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Store order notification enabled |
| `subject` | `string` | Yes | Store order email subject |
| `emailTemplateId` | `string` | Yes | Email Template Id |
| `defaultEmailTemplateId` | `string` | Yes | Default Email Template Id |

### StoreOrderFulfillmentNotificationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Store order fulfillment notification enabled |
| `subject` | `string` | Yes | Store order fulfillment email subject |
| `emailTemplateId` | `string` | Yes | Email Template Id |
| `defaultEmailTemplateId` | `string` | Yes | Default Email Template Id |

### CreateStoreSettingDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `shippingOrigin` | `StoreShippingOriginDto` | Yes | Shipping origin address |
| `storeOrderNotification` | `StoreOrderNotificationDto` | No | Store order notification email |
| `storeOrderFulfillmentNotification` | `StoreOrderFulfillmentNotificationDto` | No | Store order fulfillment notification email |

### StoreSettingSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `shippingOrigin` | `StoreShippingOriginDto` | Yes | Shipping origin address |
| `storeOrderNotification` | `StoreOrderNotificationDto` | No | Store order notification email |
| `storeOrderFulfillmentNotification` | `StoreOrderFulfillmentNotificationDto` | No | Store order fulfillment notification email |
| `_id` | `string` | Yes | The unique identifier for the settings. |
| `createdAt` | `string` | Yes | created at |
| `updatedAt` | `string` | Yes | updated at |

### CreateStoreSettingResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `StoreSettingSchema` | Yes | Shipping carrier data |

### GetStoreSettingResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |
| `data` | `StoreSettingSchema` | Yes | Shipping carrier data |
