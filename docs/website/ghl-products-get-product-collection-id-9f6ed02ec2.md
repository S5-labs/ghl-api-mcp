> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Details about individual product collection

**Endpoint:** `GET /products/collections/:collectionId`

Get Details about individual product collection

## Request

**Version**

string

required

API Version

Available options

`v3`

**collectionId**

string

required

Collection Id

**altId**

string

required

Location Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequiredCollection Data**status**booleanrequiredStatus of the operation

```json
{
  "data": {},
  "status": true
}
```
