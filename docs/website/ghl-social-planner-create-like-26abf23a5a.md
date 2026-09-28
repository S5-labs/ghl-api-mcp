> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-like). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Like a comment

**Endpoint:** `POST /social-media-posting/comments/:platform/:id/like`

Like a comment by its internal comment ID (the `_id` returned by the list-comments endpoint — not the native platform ID).

Works for any comment level — top-level comments, replies, and replies-to-replies. **Supported platforms:** Facebook, LinkedIn, Community, TikTok, Bluesky. Instagram is not supported (passing `instagram` returns 400).

## Request

**Version**

string

required

API Version

Available options

`v3`

**platform**

string

required

Platform that supports liking / unliking comments (Instagram is not supported)

Available options

`facebook`

`linkedin`

`community`

`tiktok`

`bluesky`

**id**

string

required

Internal comment ID — the `_id` returned by the list-comments endpoint (`POST /comments/{platform}/list`). Not the native platform comment ID. Works for any comment level: top-level comments, replies, and replies-to-replies.

**locationId**

string

required

Location ID

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Created Like"
}
```
