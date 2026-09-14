> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-categories-by-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all categories

**Endpoint:** `GET /blogs/categories`

The "Get all categories" Api return the blog categoies for a given location ID. Please use "blogs/category.readonly"

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

**limit**

number

required

Number of categories to show in the listing

**offset**

number

required

Number of categories to skip in listing

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**categories**object[]requiredArray of categories

```json
{
  "categories": [
    {
      "_id": "lMOzIQZne5m6zQ528sT6",
      "label": "HighLevel",
      "locationId": "lMOzIQZne5m6zQ528sT6",
      "updatedAt": "2025-01-03T11:06:35.822Z",
      "canonicalLink": "https://tryghl.blog/doc/category/agency-growth",
      "urlSlug": "agency-growth"
    }
  ]
}
```
