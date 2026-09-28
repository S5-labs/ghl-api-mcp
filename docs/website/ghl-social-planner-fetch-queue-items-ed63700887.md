> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-queue-items). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch items from a queue

**Endpoint:** `POST /social-media-posting/category/queues/:queueId/items`

Returns paginated queue items. Pass sessionId to get draft items from an edit session instead of live items.

## Request

**Version**

string

required

API Version

Available options

`v3`

**queueId**

string

required

Category queue ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**sessionId**stringEdit session ID**skip**numberNumber of items to skip**limit**numberMaximum number of items to return**errorFilter**booleanTo return only queue items with errors**itemId**stringItem ID to center the response around. When provided, the response will position this item in the center with items above and below based on limit. The skip parameter is ignored when itemId is provided.

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "sessionId": "60af88475f1b2c001f5d5f4b",
  "skip": 0,
  "limit": 10,
  "errorFilter": true,
  "itemId": "60af88475f1b2c001f5d5f4b"
}
```

application/json

Queue items fetched successfully.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**results**objectrequiredResponse payload**traceId**stringTrace ID for debugging

```json
{
  "success": true,
  "statusCode": 201,
  "results": {
    "message": "Queue items fetched successfully",
    "items": [
      {
        "_id": "60af88475f1b2c001f5d5f4b",
        "order": 1000,
        "variations": [
          {
            "_id": "60af88475f1b2c001f5d5f4c",
            "content": "Check out our latest blog post! #marketing #socialmedia",
            "mentions": [
              {
                "platform": "instagram",
                "username": "example_user",
                "offset": 10,
                "length": 12
              }
            ],
            "ogTags": {
              "metaLink": "https://example.com",
              "metaImage": "https://example.com/image.png",
              "ogTitle": "Example Title"
            }
          }
        ],
        "primaryImage": "https://example.com/images/post-image.png",
        "postId": "60af88475f1b2c001f5d5f4d",
        "post": {
          "_id": "60af88475f1b2c001f5d5f4d",
          "summary": "Scheduled queue post",
          "media": [],
          "type": "post"
        },
        "errors": [],
        "scheduledDateTime": "2023-10-15T10:00:00.000Z",
        "scheduledVariationIndex": 0,
        "isSkipped": false
      }
    ],
    "meta": {
      "count": "100",
      "skip": 0,
      "limit": 10
    }
  },
  "traceId": "TRACE-abc123-def456"
}
```
