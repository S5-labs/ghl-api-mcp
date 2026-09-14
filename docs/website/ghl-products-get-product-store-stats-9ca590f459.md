> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-store-stats). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch Product Store Stats

**Endpoint:** `GET /products/store/:storeId/stats`

API to fetch the total number of products, included in the store, and excluded from the store and other stats

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

**altId**

string

required

Location Id or Agency Id

**altType**

string

required

Available options

`location`

**search**

string

The name of the product for searching.

**collectionIds**

string

Filter by product collection Ids. Supports comma separated values

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**totalProducts**numberrequiredTotal number of products**includedInStore**numberrequiredNumber of products included in the store**excludedFromStore**numberrequiredNumber of products excluded from the store

```json
{
  "totalProducts": 100,
  "includedInStore": 80,
  "excludedFromStore": 20
}
```
