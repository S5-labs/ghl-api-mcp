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

Category queue ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**skipLegacyWatermark**booleanSkip legacy watermark cleanup when rescheduling posts**status**stringStatus of the QueueAvailable options`active``paused``deleted`**skipDateTime**stringSkip Date Time in ISO format**timeSlots**object[]Time slots defining when posts should be published**enableFuturePosts**booleanEnable posting future content. Automatically Queue any New Posts Created in this Category.**prioritizeNewContent**booleanPrioritize new content over older content. When true, new items added via directToQueue will be placed at the top of the queue.

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "skipLegacyWatermark": false,
  "status": "paused",
  "skipDateTime": "2023-10-05T14:48:00.000Z",
  "timeSlots": [
    {
      "dayOfWeek": 1,
      "time": "09:00"
    },
    {
      "dayOfWeek": 3,
      "time": "14:30"
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

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**results**objectrequiredResponse payload**traceId**stringTrace ID for debugging

```json
{
  "success": true,
  "statusCode": 200,
  "results": {
    "message": "Queue paused successfully.",
    "queue": {
      "_id": "60af88475f1b2c001f5d5f4b",
      "locationId": "location-123",
      "categoryId": "6756f381be2553245b08d30c",
      "timeSlots": [
        {
          "_id": "65f1a4e1b1d7f0b8d5a7d6a5",
          "dayOfWeek": 1,
          "time": "10:00"
        }
      ],
      "enableFuturePosts": false,
      "prioritizeNewContent": false,
      "status": "active",
      "startDate": "2023-01-01T12:00:00Z",
      "totalPosts": 10,
      "lastScheduledTime": "2023-01-01T12:00:00Z",
      "createdBy": "user-123",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z",
      "category": {
        "_id": "6756f381be2553245b08d30c",
        "name": "Category Name",
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#000000",
        "deleted": false,
        "locationId": "fvg1TXIiVxGcdOaL0riG",
        "createdBy": "SQ6d63Va2PUbWEZ9k0TD",
        "createdAt": "2024-12-09T13:41:21.385Z",
        "updatedAt": "2024-12-09T13:41:21.385Z"
      }
    }
  },
  "traceId": "TRACE-abc123-def456"
}
```
