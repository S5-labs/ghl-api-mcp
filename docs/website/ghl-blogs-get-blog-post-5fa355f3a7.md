> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blog-post). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Blog posts by Blog ID

**Endpoint:** `GET /blogs/posts/all`

The "Get Blog posts by Blog ID" API returns the blog posts for a given blog site. Use searchTerm to search across post title, description, url slug and category name.

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

Sub-account (location) identifier whose posts are being listed

**limit**

number

required

Maximum number of records to return (0-50)

**offset**

number

required

Number of records to skip for pagination

**searchTerm**

string

Free-text search across post title, description, url slug and category name

**status**

string

Filter by publication status

Available options

`ALL`

`DRAFT`

`PUBLISHED`

`SCHEDULED`

`SCHEDULE_FAILED`

`ARCHIVED`

`DELETED`

**blogId**

string

required

Identifier of the blog site whose posts are being listed

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**blogs**object[]requiredBlog posts matching the query**count**numberrequiredTotal number of blog posts matching the query, ignoring limit/offset

```json
{
  "blogs": [
    {
      "_id": "66c381b38be80858b9af62b6",
      "title": "How to grow your agency",
      "status": "PUBLISHED"
    }
  ],
  "count": 42
}
```
