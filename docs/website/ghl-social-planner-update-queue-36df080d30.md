> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/update-queue). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update queue settings or status

**Endpoint:** `PUT /social-media-posting/category/queues/:queueId`

Updates queue status (active/paused/deleted), time slots, or skip dates.

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**skipLegacyWatermark**booleanSkip legacy watermark cleanup when rescheduling posts**status**objectStatus of the Queue**skipDateTime**stringSkip Date Time in ISO format**timeSlots**object[]**enableFuturePosts**booleanEnable posting future content. Automatically Queue any New Posts Created in this Category.**prioritizeNewContent**booleanPrioritize new content over older content. When true, new items added via directToQueue will be placed at the top of the queue.

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "skipLegacyWatermark": false,
  "status": "paused",
  "skipDateTime": "2023-10-05T14:48:00.000Z",
  "timeSlots": [
    {
      "dayOfWeek": 0,
      "time": "09:00"
    }
  ],
  "enableFuturePosts": true,
  "prioritizeNewContent": false
}
```

application/json

Queue updated successfully.

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
    "message": "Queue paused successfully.",
    "queue": {
      "_id": "60af88475f1b2c001f5d5f4b",
      "locationId": "location-123",
      "categoryId": "60af88475f1b2c001f5d5f4b",
      "timeSlots": [
        {
          "dayOfWeek": 0,
          "time": "09:00"
        }
      ],
      "enableFuturePosts": false,
      "prioritizeNewContent": false,
      "currentOrder": 1000,
      "status": "active",
      "startDate": "2023-01-01T12:00:00Z",
      "skipDateTime": [
        "2023-01-02T12:00:00Z"
      ],
      "currentPostId": "60af88475f1b2c001f5d5f4b",
      "totalPosts": 10,
      "lastScheduledTime": "2023-01-01T12:00:00Z",
      "createdBy": "user-123",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    }
  },
  "traceId": "string"
}
```
