> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-post). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Post

**Endpoint:** `DELETE /social-media-posting/:locationId/posts/:id`

Delete Post

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

Location ID (also known as Sub-Account ID) for the business location.

**id**

string

required

Post ID of the post to retrieve, update, or delete.

**Get Post IDs from:** [List Posts API](https://marketplace.gohighlevel.com/social-media-posting/%7BlocationId%7D/posts/list) — use the `_id` field from each post.

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectRequested Results

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Deleted Post",
  "results": {
    "postId": "323534534435"
  }
}
```
