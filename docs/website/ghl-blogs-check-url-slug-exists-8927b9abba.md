> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/check-url-slug-exists). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Check url slug

**Endpoint:** `GET /blogs/posts/url-slug-exists`

The "Check url slug" API allows check the blog slug validation which is needed before publishing any blog post. Please use blogs/check-slug.readonly. you can find the POST ID from the post edit url.

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

**locationId**

string

required

**postId**

string

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**exists**booleanrequiredIndicates whether the url slug exists or not

```json
{
  "exists": true
}
```
