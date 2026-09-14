> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/store/list-shipping-rates). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Shipping Rates

**Endpoint:** `GET /store/shipping-zone/:shippingZoneId/shipping-rate`

The "List Shipping Rate" API allows to retrieve a list of shipping rate.

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

**limit**

number

The maximum number of items to be included in a single page of results

`0`

**offset**

number

The starting index of the page, indicating the position from which the results should be retrieved.

`0`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**total**numberrequiredTotal number of items**data**object[]requiredAn array of items

```json
{
  "total": 20,
  "data": [
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
  ]
}
```
