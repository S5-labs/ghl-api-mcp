> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/store/get-shipping-zones). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Shipping Zone

**Endpoint:** `GET /store/shipping-zone/:shippingZoneId`

The "List Shipping Zone" API allows to retrieve a paginated list of shipping zone.

## Request

**shippingZoneId**

string

required

ID of the item that needs to be returned

**altId**

string

required

Location Id or Agency Id

**altType**

string

required

Available options

`location`

**withShippingRate**

boolean

Include shipping rates array

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**status**booleanrequiredStatus of api action**message**stringSuccess message**data**objectrequiredShipping zone data

```json
{
  "status": true,
  "message": "Successfully created",
  "data": {
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "name": "North zone",
    "countries": [
      {
        "code": "US",
        "states": [
          {
            "code": "VA"
          }
        ]
      }
    ],
    "_id": "655b33a82209e60b6adb87a5",
    "shippingRates": [
      {
        "altId": "6578278e879ad2646715ba9c",
        "altType": "location",
        "name": "North zone",
        "description": "Ships next day",
        "currency": "USD",
        "amount": 99.99,
        "conditionType": "price",
        "minCondition": 99.99,
        "maxCondition": 99.99,
        "isCarrierRate": true,
        "shippingCarrierId": "655b33a82209e60b6adb87a5",
        "percentageOfRateFee": 10.99,
        "shippingCarrierServices": [
          {
            "name": "Priority Mail Express International",
            "value": "PriorityMailExpressInternational"
          }
        ],
        "_id": "655b33a82209e60b6adb87a5",
        "shippingZoneId": "655b33a82209e60b6adb87a5",
        "createdAt": "2023-12-12T09:27:42.355Z",
        "updatedAt": "2023-12-12T09:27:42.355Z"
      }
    ],
    "createdAt": "2023-12-12T09:27:42.355Z",
    "updatedAt": "2023-12-12T09:27:42.355Z"
  }
}
```
