> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/update-queue-item). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update an item in a queue

**Endpoint:** `PUT /social-media-posting/category/queues/:queueId/items/:itemId`

Updates the content or variations of a specific item within a category queue.

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

**locationId**stringrequiredLocation ID**sessionId**stringEdit session ID**modifiedPostPayload**objectModifications to the original post**newOrder**objectNew order value or position keyword (cyclic-aware). Accepts: A number: explicit order value calculated by FE as midpoint between adjacent items "top": place at cyclic top (first to be scheduled next) "bottom": place at cyclic bottom (last to be scheduled) For positions between items, FE calculates: Math.floor((prevItem.order + nextItem.order) / 2)**variations**object[]Variations**primaryImage**stringPrimary media URL (image)

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "sessionId": "60af88475f1b2c001f5d5f4b",
  "modifiedPostPayload": {
    "summary": "Updated queued post content",
    "media": []
  },
  "newOrder": "top",
  "variations": [
    {
      "content": "Try this variation",
      "mentions": [],
      "ogTags": {
        "metaLink": "https://example.com"
      }
    }
  ],
  "primaryImage": "http://example.com/media.png"
}
```

application/json

The queue item has been successfully updated.

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
    "message": "Queue item updated successfully",
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
    },
    "updatedSlots": [
      {
        "itemId": "60af88475f1b2c001f5d5f4b",
        "scheduledDateTime": "2023-10-15T10:00:00.000Z",
        "isSkipped": false,
        "order": 18000
      }
    ],
    "totalPostsChanged": 5
  },
  "traceId": "TRACE-abc123-def456"
}
```
