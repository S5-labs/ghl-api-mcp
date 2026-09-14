> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/list-prices-for-product). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Prices for a Product

**Endpoint:** `GET /products/:productId/price`

The "List Prices for a Product" API allows retrieving a paginated list of prices associated with a specific product. Customize your results by filtering prices or paginate through the list using the provided query parameters.

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

**limit**

number

The maximum number of items to be included in a single page of results

`0`

**offset**

number

The starting index of the page, indicating the position from which the results should be retrieved.

`0`

**locationId**

string

required

The unique identifier for the location.

**ids**

string

To filter the response only with the given price ids, Please provide with comma separated

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**prices**object[]requiredAn array of prices**total**numberrequired**Default value:**`Total number of prices available`

```json
{
  "prices": [
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
  ],
  "total": 10
}
```
