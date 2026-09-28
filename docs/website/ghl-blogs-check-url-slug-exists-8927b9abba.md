> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/check-url-slug-exists). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Check url slug

**Endpoint:** `GET /blogs/posts/url-slug-exists`

The "Check url slug" API checks whether a blog post url slug is already in use for the location. Call it before publishing a blog post.

## Request

**Version**

string

required

API Version

Available options

`v3`

**urlSlug**

string

required

URL slug to check for uniqueness

**locationId**

string

required

Sub-account (location) identifier the slug is being checked under

**postId**

string

Identifier of the existing post to exclude from the uniqueness check

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**exists**booleanrequiredIndicates whether the url slug exists or not

```json
{
  "exists": false
}
```
