> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-queue). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create a new category queue

**Endpoint:** `POST /social-media-posting/category/queues`

Creates a queue in draft status for a category. Published posts are auto-added. Use update endpoint to activate.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**categoryId**stringrequiredCategory ID**timeSlots**object[]required**enableFuturePosts**booleanEnable Future Posts. Defaults to false.**prioritizeNewContent**booleanPrioritize New Content. Defaults to false.**userId**stringrequiredUser id

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "categoryId": "60af88475f1b2c001f5d5f4b",
  "timeSlots": [
    {
      "dayOfWeek": 0,
      "time": "09:00"
    }
  ],
  "enableFuturePosts": true,
  "prioritizeNewContent": false,
  "userId": "w37swmmLbA02zgqKPpxITe"
}
```

application/json

Queue created successfully.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequired**statusCode**numberrequired**results**objectrequired**traceId**string

```json
{
  "success": true,
  "statusCode": 201,
  "results": {
    "message": "Queue created successfully",
    "queue": {
      "_id": "686ebf10c78c233e45c28d66",
      "locationId": "Qp26qppJgfrTZis7jsBy",
      "categoryId": "683702938b19583ce320e5eb",
      "timeSlots": [
        {
          "_id": "686ebf10c78c23d665c28d67",
          "dayOfWeek": 0,
          "time": "00:00"
        }
      ],
      "enableFuturePosts": true,
      "prioritizeNewContent": true,
      "status": "draft",
      "startDate": "2025-07-09T19:12:16.363Z",
      "skipDateTime": [],
      "totalPosts": 0,
      "lastScheduledTime": null,
      "createdBy": "uefV3MmLHs2sjJr2KfmL",
      "createdAt": "2025-07-09T19:12:16.366Z",
      "updatedAt": "2025-07-09T19:12:16.366Z"
    }
  },
  "traceId": "string"
}
```
