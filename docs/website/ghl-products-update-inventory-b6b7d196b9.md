> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/update-inventory). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Inventory

**Endpoint:** `POST /products/inventory`

The Update Inventory API allows the user to bulk update the inventory for multiple items. Use this endpoint to update the available quantity and out-of-stock purchase settings for multiple items in the inventory.

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

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**items**object[]requiredArray of items to update in the inventory.

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "items": [
    {
      "priceId": "5e9f8f8f8f8f8f8f8f8f8f8",
      "availableQuantity": 10,
      "allowOutOfStockPurchases": false
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

**status**booleanrequiredStatus of api action**message**stringSuccess message

```json
{
  "status": true,
  "message": "Successfully created"
}
```
