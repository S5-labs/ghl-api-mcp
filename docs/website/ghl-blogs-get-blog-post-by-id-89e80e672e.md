> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blog-post-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Blog Post by ID

**Endpoint:** `GET /blogs/posts/post/:postId`

The "Get Blog Post by ID" API returns a single published blog post, including its content/body, for the given location.

## Request

**Version**

string

required

API Version

Available options

`v3`

**postId**

string

required

Identifier of the blog post to fetch

**locationId**

string

required

Sub-account (location) identifier

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**blogPost**objectrequiredObject containing the requested published blog post with its content

```json
{
  "blogPost": {
    "_id": "66c381b38be80858b9af62b6",
    "title": "How to grow your agency",
    "rawHTML": "<p>...</p>"
  }
}
```
