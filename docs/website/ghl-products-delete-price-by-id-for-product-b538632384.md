> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/delete-price-by-id-for-product). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Price by ID for a Product

**Endpoint:** `DELETE /products/:productId/price/:priceId`

The "Delete Price by ID for a Product" API allows deleting a specific price associated with a particular product using its unique identifier. Use this endpoint to remove a price from the system.

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

**status**booleanrequiredreturns true if the price is successfully deleted

```json
{
  "status": true
}
```
