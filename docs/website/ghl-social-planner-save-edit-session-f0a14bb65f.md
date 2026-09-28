> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/save-edit-session). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Save edit session changes

**Endpoint:** `POST /social-media-posting/category/queues/:queueId/edit/save`

Applies all staged changes to the live queue and closes the edit session.

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

**locationId**stringrequiredLocation ID**sessionId**stringrequiredEdit session ID**keepInDraft**booleanIf true, keeps the queue in DRAFT state after saving instead of automatically activating it. Only applicable when the queue is currently in DRAFT status.**Default value:**`false`

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "sessionId": "60af88475f1b2c001f5d5f4b",
  "keepInDraft": false
}
```

application/json

Edit session saved successfully.

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
    "message": "Edit session saved successfully",
    "updatedSlots": [
      {
        "itemId": "60af88475f1b2c001f5d5f4b",
        "scheduledDateTime": "2023-10-15T10:00:00.000Z",
        "isSkipped": false,
        "order": 18000
      }
    ],
    "totalPostsChanged": 10
  },
  "traceId": "TRACE-abc123-def456"
}
```
