> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/store/get-available-shipping-zones). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get available shipping rates

**Endpoint:** `POST /store/shipping-zone/shipping-rates`

This return available shipping rates for country based on order amount

## Request

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**country**stringrequiredCountry code of the customerAvailable options`US``CA``AF``AX``AL``DZ``AS``AD``AO``AI``AQ``AG`**address**objectAddress of the customer**amountAvailable**stringit will not calculate the order amount form backend if it is trueAvailable options`AF``AX``AL``DZ``AS``AD``AO``AI``AQ``AG``AR``AM`**totalOrderAmount**numberrequiredThe amount of the price. ( min: 0.01 )**weightAvailable**booleanFlag to pass when the weight is already calculated and should not calculate again**totalOrderWeight**numberrequiredEstimated weight of the order calculated from the order creation side in kg(s)**source**objectrequiredSource of the order**products**object[]requiredAn array of price IDs and quantity**couponCode**stringCoupon code

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "country": "US",
  "address": {
    "name": "John Doe",
    "companyName": "ABC Company",
    "addressLine1": "123 Main St.",
    "country": "US",
    "state": "US",
    "city": "New York",
    "zip": "12345",
    "phone": "1234567890",
    "email": "abu@example.com"
  },
  "amountAvailable": "US",
  "totalOrderAmount": 99.99,
  "weightAvailable": true,
  "totalOrderWeight": 10,
  "source": {
    "type": "order",
    "subType": "store"
  },
  "products": [
    {
      "id": "string",
      "qty": 0
    }
  ],
  "couponCode": "TEST"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**status**booleanrequiredStatus of api action**message**stringSuccess message**data**object[]requiredShipping rate data

```json
{
  "status": true,
  "message": "Successfully created",
  "data": [
    {
      "name": "North zone",
      "description": "Ships next day",
      "currency": "USD",
      "amount": 99.99,
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
      "shippingZoneId": "655b33a82209e60b6adb87a5"
    }
  ]
}
```
