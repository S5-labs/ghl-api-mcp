> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/create-price-for-product). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Price for a Product

**Endpoint:** `POST /products/:productId/price`

The "Create Price for a Product" API allows adding a new price associated with a specific product to the system. Use this endpoint to create a price with the specified details for a particular product. Ensure that the required information is provided in the request payload.

## Request

**Version**

string

required

API Version

Available options

`v3`

**productId**

string

required

ID of the product that needs to be used

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringrequiredThe name of the price.**type**stringrequiredThe type of the price.Available options`one_time``recurring`**currency**stringrequiredThe currency of the price.**amount**numberrequiredThe amount of the price. ( min: 0 )**recurring**objectThe recurring details of the price (if type is recurring).**description**stringA brief description of the price.**membershipOffers**object[]An array of membership offers associated with the price.**trialPeriod**numberThe trial period duration in days (if applicable).**totalCycles**numberThe total number of billing cycles for the price. ( min: 1 )**setupFee**numberThe setup fee for the price.**variantOptionIds**string[]An array of variant option IDs associated with the price.**compareAtPrice**numberThe compare at price for the price.**locationId**stringrequiredThe unique identifier of the location associated with the price.**userId**stringThe unique identifier of the user who created the price.**meta**objectAdditional metadata associated with the price.**trackInventory**booleanNeed to track inventory stock quantity**availableQuantity**numberAvailable inventory stock quantity**allowOutOfStockPurchases**booleanContinue selling when out of stock**sku**stringThe unique identifier of the SKU associated with the price**shippingOptions**objectShipping options of the Price**isDigitalProduct**booleanIs the product a digital product**digitalDelivery**string[]Digital delivery options

```json
{
  "name": "Price Name",
  "type": "one_time",
  "currency": "USD",
  "amount": 99.99,
  "recurring": {
    "interval": "day",
    "intervalCount": 1
  },
  "description": "string",
  "membershipOffers": [
    {
      "label": "top_50",
      "value": "50",
      "_id": "655b33aa2209e60b6adb87a7"
    }
  ],
  "trialPeriod": 7,
  "totalCycles": 12,
  "setupFee": 10.99,
  "variantOptionIds": [
    "option_id_1",
    "option_id_2"
  ],
  "compareAtPrice": 19.99,
  "locationId": "6578278e879ad2646715ba9c",
  "userId": "6578278e879ad2646715ba9c",
  "meta": {
    "source": "stripe",
    "sourceId": "123",
    "stripePriceId": "price_123",
    "internalSource": "agency_plan"
  },
  "trackInventory": true,
  "availableQuantity": 5,
  "allowOutOfStockPurchases": true,
  "sku": "sku_123",
  "shippingOptions": {
    "weight": {
      "value": 10,
      "unit": "kg"
    },
    "dimensions": {
      "height": 10,
      "width": 10,
      "length": 10,
      "unit": "cm"
    }
  },
  "isDigitalProduct": true,
  "digitalDelivery": [
    "string"
  ]
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredThe unique identifier for the price.**membershipOffers**object[]An array of membership offers associated with the price.**variantOptionIds**string[]An array of variant option IDs associated with the price.**locationId**stringThe unique identifier for the location.**product**stringThe unique identifier for the associated product.**userId**stringThe unique identifier for the user.**name**stringrequiredThe name of the price.**type**stringrequiredThe type of the price (e.g., one_time).Available options`one_time``recurring`**currency**stringrequiredThe currency code for the price.**amount**numberrequiredThe amount of the price.**recurring**objectThe recurring details of the price (if type is recurring).**createdAt**string<date-time>The creation timestamp of the price.**updatedAt**string<date-time>The last update timestamp of the price.**compareAtPrice**numberThe compare-at price for comparison purposes.**trackInventory**booleanIndicates whether inventory tracking is enabled.**availableQuantity**numberAvailable inventory stock quantity**allowOutOfStockPurchases**booleanContinue selling when out of stock

```json
{
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
}
```
