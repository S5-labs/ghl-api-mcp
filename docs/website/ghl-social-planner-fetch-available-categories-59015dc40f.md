> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-available-categories). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all categories with their queue status

**Endpoint:** `GET /social-media-posting/category/queues/available-categories`

Returns categories with status: "available" (no queue), "in_queue" (active/paused queue), or "draft" (queue in draft).

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

Location ID

**skip**

string

Number of items to skip

**limit**

string

Maximum number of items to return

**q**

string

Search query

application/json

Available categories fetched successfully.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequired**statusCode**numberrequired**results**objectrequired**traceId**string

```json
{
  "success": true,
  "statusCode": 200,
  "results": {
    "message": "Available categories fetched successfully",
    "categories": [
      {
        "deleted": false,
        "_id": "65cb3d2f68baa617aa0c286e",
        "name": "Facebook Reel",
        "locationId": "fvg1TXIiVxGcdOaL0riG",
        "primaryColor": "#004EEB",
        "secondaryColor": "#EFF4FF",
        "createdBy": "SQ6d63Va2PUbWEZ9k0TD",
        "createdAt": "2024-02-13T09:58:07.129Z",
        "updatedAt": "2024-02-13T09:58:07.129Z",
        "publishedPostsCount": 80,
        "status": "in_queue",
        "queueDetails": {
          "queueId": "67fc07c6d7657c9aee764762",
          "prioritizeNewContent": false,
          "enableFuturePosts": true
        }
      }
    ],
    "meta": {
      "count": "100"
    }
  },
  "traceId": "string"
}
```
