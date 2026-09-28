> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-blog-authors-by-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all blog authors

**Endpoint:** `GET /blogs/authors`

The "Get all blog authors" API returns the blog authors for a given location ID.

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

Sub-account (location) identifier the author belongs to

**limit**

number

required

Maximum number of authors to return (0-50)

**offset**

number

required

Number of authors to skip before returning results

**searchTerm**

string

Free-text search across author name and description

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**authors**object[]requiredArray of authors**count**numberrequiredTotal number of authors matching the query, ignoring limit/offset

```json
{
  "authors": [
    {
      "_id": "66c381b38be80858b9af62b6",
      "locationId": "ve9EPM428h8vShlRW1KT",
      "name": "Jane Doe",
      "description": "Content strategist",
      "imageUrl": "https://storage.googleapis.com/blog-assets/authors/jane.png"
    }
  ],
  "count": 42
}
```
