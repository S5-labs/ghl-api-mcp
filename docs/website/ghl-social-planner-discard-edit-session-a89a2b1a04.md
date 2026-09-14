> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/discard-edit-session). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Discard edit session changes

**Endpoint:** `POST /social-media-posting/category/queues/:queueId/edit/discard`

Cancels the edit session and deletes all staged changes without affecting the live queue.

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

**locationId**stringrequiredLocation ID**sessionId**stringrequiredEdit session ID**keepInDraft**booleanIf true, keeps the queue in DRAFT state after saving instead of automatically activating it. Only applicable when the queue is currently in DRAFT status.**Default value:**`false`

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "sessionId": "60af88475f1b2c001f5d5f4b",
  "keepInDraft": false
}
```

application/json

Edit session discarded successfully.

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
    "message": "Edit session discarded successfully"
  },
  "traceId": "string"
}
```
