> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-queue-item). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create a new item in the queue

**Endpoint:** `POST /social-media-posting/category/queues/:queueId/create/item`

Adds a new post item to a queue. Use sessionId for edit session or directToQueue for immediate addition.

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

**locationId**stringrequiredLocation ID**sessionId**stringEdit session ID**modifiedPostPayload**objectNew post details**order**objectOrder for the new item in the queue (cyclic-aware). Accepts: A number: explicit order value calculated by FE as midpoint between adjacent items "top": place at cyclic top (first to be scheduled next) "bottom": place at cyclic bottom (last to be scheduled) For positions between items, FE calculates: Math.floor((prevItem.order + nextItem.order) / 2) Defaults to end if not provided. Note: This field is ignored when directToQueue is true - the order will be automatically calculated based on the queue's prioritizeNewContent setting.**variations**object[]Variations**primaryImage**stringPrimary media URL (image) for the post. Falls back to modifiedPostPayload.primaryImage if not set.**directToQueue**booleanWhen true, creates the queue item directly without requiring an edit session, even for active/paused queues. The order field is ignored and the item position is determined by the queue's prioritizeNewContent setting: if true, the item is added to the top of the queue; if false, it is added to the bottom.

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "sessionId": "60af88475f1b2c001f5d5f4b",
  "modifiedPostPayload": {
    "summary": "New queued post content",
    "media": []
  },
  "order": "top",
  "variations": [
    {
      "content": "Try this variation",
      "mentions": [],
      "ogTags": {
        "metaLink": "https://example.com"
      }
    }
  ],
  "primaryImage": "http://example.com/media.png",
  "directToQueue": false
}
```

application/json

Queue item created successfully.

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
    "message": "Queue item created successfully",
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
