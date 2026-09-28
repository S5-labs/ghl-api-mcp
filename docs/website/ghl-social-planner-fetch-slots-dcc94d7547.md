> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-slots). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch slot information for queue items

**Endpoint:** `POST /social-media-posting/category/queues/:queueId/slots`

Returns paginated slot information (scheduledDateTime, isSkipped) for queue items. Pass sessionId to get slots for draft items, or omit for live items. Call this after mutations to refresh slot data.

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

**locationId**stringrequiredThe location ID**sessionId**stringSession ID for edit mode. If not provided, calculates slots for live items.**skip**numberNumber of items to skip**Default value:**`0`**limit**numberNumber of items to return**Default value:**`20`

```json
{
  "locationId": "abc123",
  "sessionId": "507f1f77bcf86cd799439011",
  "skip": 0,
  "limit": 20
}
```

application/json

Slots fetched successfully.

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
    "message": "Slots fetched successfully",
    "slots": [
      {
        "itemId": "60af88475f1b2c001f5d5f4b",
        "scheduledDateTime": "2023-10-15T10:00:00.000Z",
        "isSkipped": false,
        "order": 18000
      }
    ],
    "total": 100,
    "skip": 0,
    "limit": 20,
    "timezone": "America/New_York"
  },
  "traceId": "TRACE-abc123-def456"
}
```
