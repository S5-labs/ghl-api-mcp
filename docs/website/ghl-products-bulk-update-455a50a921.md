> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/bulk-update). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Bulk Update Products

**Endpoint:** `POST /products/bulk-update`

API to bulk update products (price, availability, collections, delete)

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**type**stringrequiredType of bulk update operationAvailable options`bulk-update-price``bulk-update-availability``bulk-update-product-collection``bulk-delete-products``bulk-update-currency`**productIds**string[]requiredArray of product IDs**filters**objectFilters to apply when selectAll is true**price**objectPrice update configuration**compareAtPrice**objectCompare at price update configuration**availability**booleanNew availability status**collectionIds**string[]Array of collection IDs**currency**stringCurrency code

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "type": "bulk-update-price",
  "productIds": [
    "5f8d0d55b54764421b7156c1"
  ],
  "filters": {
    "collectionIds": [
      "5f8d0d55b54764421b7156c1",
      "5f8d0d55b54764421b7156c2"
    ],
    "productType": "one-time",
    "availableInStore": true,
    "search": "blue t-shirt"
  },
  "price": {
    "type": "INCREASE_BY_AMOUNT",
    "value": 100,
    "roundToWhole": true
  },
  "compareAtPrice": {
    "type": "INCREASE_BY_AMOUNT",
    "value": 100,
    "roundToWhole": true
  },
  "availability": true,
  "collectionIds": [
    "string"
  ],
  "currency": "USD"
}
```

application/json

Products updated successfully

- application/json

- Schema
- Example (auto)

**Schema**

**status**booleanrequiredStatus of api action**message**stringSuccess message

```json
{
  "status": true,
  "message": "Successfully created"
}
```
