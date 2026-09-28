> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/bulk-delete-social-planner-posts). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Bulk Delete Social Planner Posts

**Endpoint:** `POST /social-media-posting/:locationId/posts/bulk-delete`

Deletes multiple posts based on the provided list of post IDs. This operation is useful for clearing up large numbers of posts efficiently.

Note:

1.The maximum number of posts that can be deleted in a single request is '50'.

2.However, It will only get deleted in the platform database but still it is recommended to be cautious of this operation.

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**postIds**string[]Post identifiers to delete. Each is either a 24-char post id or a 40-char native post id.

```json
{
  "postIds": [
    "662791ee3f216822d7da0c8c"
  ]
}
```

application/json

Posts deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectrequiredMessage and deleted count

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Posts Deleted Successfully",
  "results": {
    "message": "Posts deleted successfully",
    "deletedCount": 10
  }
}
```
