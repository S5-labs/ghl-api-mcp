> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/clone-queue-item). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Clone a queue item

**Endpoint:** `POST /social-media-posting/category/queues/:queueId/items/:itemId/clone`

Duplicates an existing queue item at a specified order position. Requires an active edit session.

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

**itemId**

string

required

Queue item ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**sessionId**stringrequiredEdit session ID**order**numberrequiredOrder for the cloned item (typically between source and next item)

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "sessionId": "60af88475f1b2c001f5d5f4b",
  "order": 1.5
}
```

application/json

Queue item cloned successfully.

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
    "message": "Queue item cloned successfully",
    "queueItem": {
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
      "isSkipped": false,
      "currentVariation": 0
    }
  },
  "traceId": "TRACE-abc123-def456"
}
```
