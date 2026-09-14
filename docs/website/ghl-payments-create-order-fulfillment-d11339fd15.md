> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/create-order-fulfillment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create order fulfillment

**Endpoint:** `POST /payments/orders/:orderId/fulfillments`

The "Order Fulfillment" API facilitates the process of fulfilling an order.

## Request

**Version**

string

required

API Version

Available options

`v3`

**orderId**

string

required

ID of the order that needs to be returned

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**trackings**object[]requiredFulfillment tracking information**items**object[]requiredFulfilled items**notifyCustomer**booleanrequiredNeed to send a notification to customer

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "trackings": [
    {
      "trackingNumber": "40012345678",
      "shippingCarrier": "FedEx",
      "trackingUrl": "https://www.fedex.com/wtrk/track/?trknbr=40012345678"
    }
  ],
  "items": [
    {
      "priceId": "6578278e879ad2646715ba9c",
      "qty": 1
    }
  ],
  "notifyCustomer": true
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**status**booleanrequiredStatus of api action**data**objectrequiredfulfillment data

```json
{
  "status": true,
  "data": {
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "trackings": [
      {
        "trackingNumber": "40012345678",
        "shippingCarrier": "FedEx",
        "trackingUrl": "https://www.fedex.com/wtrk/track/?trknbr=40012345678"
      }
    ],
    "_id": "655b33a82209e60b6adb87a5",
    "items": [
      {
        "_id": "6578278e879ad2646715ba9c",
        "name": "Iphone 15 pro",
        "product": {
          "_id": "655b33a82209e60b6adb87a5",
          "description": "This is a really awesome product",
          "variants": [
            {
              "id": "38s63qmxfr4",
              "name": "Size",
              "options": [
                {
                  "id": "h4z7u0im2q8",
                  "name": "XL"
                }
              ]
            }
          ],
          "locationId": "3SwdhCsvxI8Au3KsPJt6",
          "name": "Awesome Product",
          "productType": "PHYSICAL",
          "availableInStore": true,
          "createdAt": "2023-11-20T10:23:36.515Z",
          "updatedAt": "2024-01-23T09:57:04.846Z",
          "statementDescriptor": "abcde",
          "image": "https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png",
          "collectionIds": [
            "65d71377c326ea78e1c47df5",
            "65d71377c326ea78e1c47d34"
          ],
          "isTaxesEnabled": true,
          "taxes": [
            "654492a4e6bef380114de15a"
          ],
          "automaticTaxCategoryId": "65d71377c326ea78e1c47df5",
          "label": {
            "title": "Featured",
            "startDate": "2024-06-26T05:43:35.000Z",
            "endDate": "2024-06-30T05:43:39.000Z"
          },
          "slug": "washing-machine"
        },
        "price": {
          "_id": "655b33aa2209e60b6adb87a7",
          "membershipOffers": [
            {
              "label": "top_50",
              "value": "50",
              "_id": "655b33aa2209e60b6adb87a7"
            }
          ],
          "variantOptionIds": [
            "h4z7u0im2q8",
            "h3nst2ltsnn"
          ],
          "locationId": "3SwdhCsvxI8Au3KsPJt6",
          "product": "655b33a82209e60b6adb87a5",
          "userId": "6YAtzfzpmHAdj0e8GkKp",
          "name": "Red / S",
          "type": "one_time",
          "currency": "INR",
          "amount": 199999,
          "recurring": {
            "interval": "day",
            "intervalCount": 1
          },
          "createdAt": "2023-11-20T10:23:38.645Z",
          "updatedAt": "2024-01-23T09:57:04.852Z",
          "compareAtPrice": 2000000,
          "trackInventory": null,
          "availableQuantity": 5,
          "allowOutOfStockPurchases": true
        },
        "qty": 1
      }
    ],
    "createdAt": "2023-12-12T09:27:42.355Z",
    "updatedAt": "2023-12-12T09:27:42.355Z"
  }
}
```
