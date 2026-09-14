> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/store/create-shipping-rate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Shipping Rate

**Endpoint:** `POST /store/shipping-zone/:shippingZoneId/shipping-rate`

The "Create Shipping Rate" API allows adding a new shipping rate.

## Request

**shippingZoneId**

string

required

ID of the item that needs to be returned

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**name**stringrequiredName of the shipping zone**description**stringDelivery description**currency**stringrequiredThe currency of the amount of the rate / handling fee**amount**numberrequiredThe amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a carrier rate (it will add to the carrier rate).**conditionType**stringrequiredType of condition to provide the conditional pricingAvailable options`none``price``weight`**minCondition**numberrequiredMinimum condition for applying this price. set 0 or null if there is no minimum**maxCondition**numberrequiredMaximum condition for applying this price. set 0 or null if there is no maximum**isCarrierRate**booleanis this a carrier rate**shippingCarrierId**stringrequiredShipping carrier id**percentageOfRateFee**numberPercentage of rate fee if it is a carrier rate.**shippingCarrierServices**object[]An array of items

```json
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
  ]
}
```

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
}
```
