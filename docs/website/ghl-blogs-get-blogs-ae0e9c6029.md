> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blogs). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Blogs by Location ID

**Endpoint:** `GET /blogs/site/all`

The "Get Blogs by Location ID" API allows you get blogs using Location ID.Please use blogs/list.readonly

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

**skip**

number

required

**limit**

number

required

**searchTerm**

string

search for any post by name

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**object[]requiredObject containing response data of blog

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
