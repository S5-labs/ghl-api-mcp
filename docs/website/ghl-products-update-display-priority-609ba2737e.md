> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/update-display-priority). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update product display priorities in store

**Endpoint:** `POST /products/store/:storeId/priority`

API to set the display priority of products in a store

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

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**products**array[]requiredArray of products with their display priorities

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "products": [
    null
  ]
}
```

Successfully updated display priorities
