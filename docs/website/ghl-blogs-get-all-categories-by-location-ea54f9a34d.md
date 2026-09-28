> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-categories-by-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all blog categories

**Endpoint:** `GET /blogs/categories`

The "Get all blog categories" API returns the blog categories for a given location ID.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Sub-account (location) identifier the category belongs to

**limit**

number

required

Maximum number of categories to return (0-50)

**offset**

number

required

Number of categories to skip before returning results

**searchTerm**

string

Free-text search across category label and description

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**categories**object[]requiredArray of categories**count**numberrequiredTotal number of categories matching the query, ignoring limit/offset

```json
{
  "categories": [
    {
      "_id": "66c381b38be80858b9af62b6",
      "locationId": "ve9EPM428h8vShlRW1KT",
      "label": "Marketing Tips",
      "urlSlug": "marketing-tips"
    }
  ],
  "count": 42
}
```
