> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/get-price-by-id-for-product). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Price by ID for a Product

**Endpoint:** `GET /products/:productId/price/:priceId`

The "Get Price by ID for a Product" API allows retrieving information for a specific price associated with a particular product using its unique identifier. Use this endpoint to fetch details for a single price based on the provided price ID and product ID.

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

**priceId**

string

required

ID of the price that needs to be returned

**locationId**

string

required

location Id

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
