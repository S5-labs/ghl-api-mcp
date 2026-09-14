> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/get-reviews-count). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch Review Count as per status

**Endpoint:** `GET /products/reviews/count`

API to fetch the Review Count as per status

## Request

**Version**

string

required

API Version

Available options

`v3`

**altId**

string

required

Location Id or Agency Id

**altType**

string

required

Available options

`location`

**rating**

number

Key to filter the ratings

**startDate**

string

The start date for filtering reviews

**endDate**

string

The end date for filtering reviews

**productId**

string

Comma-separated list of product IDs

**storeId**

string

Comma-separated list of store IDs

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**array[]requiredArray of review status counts

```json
{
  "data": [
    null
  ]
}
```
