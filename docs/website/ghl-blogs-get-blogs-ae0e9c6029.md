> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blogs). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Blogs by Location ID

**Endpoint:** `GET /blogs/site/all`

The "Get Blogs by Location ID" API allows you get blogs using Location ID.

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

Sub-account (location) identifier whose blog sites are being listed

**skip**

number

Number of records to skip for pagination

**limit**

number

Maximum number of records to return

**searchTerm**

string

Free-text search across blog site name and description

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**object[]requiredBlog sites matching the query

```json
{
  "data": [
    {
      "_id": "lMOzIQZne5m6zQ528sT6",
      "name": "My blog"
    }
  ]
}
```
