> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-blog-authors-by-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all authors

**Endpoint:** `GET /blogs/authors`

The "Get all authors" Api return the blog authors for a given location ID. Please use "blogs/author.readonly"

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

Location Id

**limit**

number

required

Number of authors to show in the listing

**offset**

number

required

Number of authors to skip in listing

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**authors**object[]requiredArray of authors

```json
{
  "authors": [
    {
      "_id": "lMOzIQZne5m6zQ528sT6",
      "name": "HighLevel",
      "locationId": "lMOzIQZne5m6zQ528sT6",
      "updatedAt": "2025-01-03T11:06:35.822Z",
      "canonicalLink": "https://tryghl.blog/post/technology"
    }
  ]
}
```
