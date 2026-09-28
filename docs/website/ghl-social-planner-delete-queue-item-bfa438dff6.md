> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-queue-item). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete an item from a queue

**Endpoint:** `DELETE /social-media-posting/category/queues/:queueId/items/:itemId`

Deletes an item from a specific category queue.

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

**locationId**

string

required

Location ID

**sessionId**

string

Edit session ID

application/json

The queue item has been successfully deleted.

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
    "message": "The queue item has been successfully deleted.",
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
