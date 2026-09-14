> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Product by ID

**Endpoint:** `DELETE /products/:productId`

The "Delete Product by ID" API allows deleting a specific product using its unique identifier. Use this endpoint to remove a product from the system.

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

ID or the slug of the product that needs to be returned

**locationId**

string

required

location Id

**sendWishlistStatus**

boolean

Parameter which will decide whether to show the wishlisting status of products

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**status**booleanrequiredreturns true if the product is successfully deleted

```json
{
  "status": true
}
```
