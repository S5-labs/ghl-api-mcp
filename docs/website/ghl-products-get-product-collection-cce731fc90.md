> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch Product Collections

**Endpoint:** `GET /products/collections`

Internal API to fetch the Product Collections

## Request

**Version**

string

required

API Version

Available options

`v3`

**limit**

number

The maximum number of items to be included in a single page of results

`10`

**offset**

number

The starting index of the page, indicating the position from which the results should be retrieved.

`0`

**altId**

string

required

Location Id

**altType**

string

required

The type of alt. For now it is only LOCATION

Available options

`location`

**collectionIds**

string

Ids of the collections separated by comma(,) for search purposes

**name**

string

Query to search collection based on names

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
