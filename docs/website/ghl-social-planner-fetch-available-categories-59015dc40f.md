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

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**results**objectrequiredResponse payload**traceId**stringTrace ID for debugging

```json
{
  "success": true,
  "statusCode": 200,
  "results": {
    "message": "Available categories fetched successfully",
    "categories": [
      {
        "_id": "6756f381be2553245b08d30c",
        "name": "Category Name",
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#000000",
        "deleted": false,
        "locationId": "fvg1TXIiVxGcdOaL0riG",
        "createdBy": "SQ6d63Va2PUbWEZ9k0TD",
        "createdAt": "2024-12-09T13:41:21.385Z",
        "updatedAt": "2024-12-09T13:41:21.385Z",
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
  "traceId": "TRACE-abc123-def456"
}
```
