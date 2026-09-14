> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/update-store-status). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Action to include/exclude the product in store

**Endpoint:** `POST /products/store/:storeId`

API to update the status of products in a particular store

## Request

**Version**

string

required

API Version

Available options

`v3`

**storeId**

string

required

Products related to the store

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**action**stringrequiredAction to include or exclude the product from the storeAvailable options`include``exclude`**productIds**string[]requiredArray of product IDs

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "action": "include",
  "productIds": [
    "productId1",
    "productId2"
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
