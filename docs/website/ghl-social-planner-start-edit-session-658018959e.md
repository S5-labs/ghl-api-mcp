> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-edit-session). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Start or resume an edit session

**Endpoint:** `POST /social-media-posting/category/queues/:queueId/edit/start`

Creates a draft copy of queue items for editing. Changes are staged until saved or discarded.

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

**locationId**stringrequiredLocation ID

```json
{
  "locationId": "609e126a1c4ae1001291e1b5"
}
```

application/json

Edit session started successfully.

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
    "message": "Edit session started successfully",
    "sessionId": "60af88475f1b2c001f5d5f4b",
    "itemCount": 25
  },
  "traceId": "TRACE-abc123-def456"
}
```
