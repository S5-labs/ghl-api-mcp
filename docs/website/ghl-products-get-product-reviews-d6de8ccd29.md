> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-reviews). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch Product Reviews

**Endpoint:** `GET /products/reviews`

API to fetch the Product Reviews

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

**limit**

number

The maximum number of items to be included in a single page of results

`0`

**offset**

number

The starting index of the page, indicating the position from which the results should be retrieved.

`0`

**sortField**

string

The field upon which the sort should be applied

Available options

`createdAt`

`rating`

**sortOrder**

string

The order of sort which should be applied for the sortField

Available options

`asc`

`desc`

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

**data**array[]requiredArray of Collections**total**numberrequiredThe total count of the collections present, which is useful to calculate the pagination

```json
{
  "data": [
    null
  ],
  "total": 0
}
```
