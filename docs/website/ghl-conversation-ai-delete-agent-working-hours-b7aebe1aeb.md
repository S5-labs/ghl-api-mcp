> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-agent-working-hours). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Agent Working Hours

**Endpoint:** `DELETE /conversation-ai/agents/:agentId/working-hours`

Deletes the working-hours configuration for an AI agent. The agent then replies at any time. Succeeds with deleted=false when there was nothing to delete.

## Request

**Version**

string

required

API Version

Available options

`v3`

**agentId**

string

required

Conversations AI agent id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequired**success**booleanrequired

```json
{
  "data": {
    "deleted": true,
    "employeeId": "wK36brxPYCOikC85FkbA"
  },
  "success": true
}
```
