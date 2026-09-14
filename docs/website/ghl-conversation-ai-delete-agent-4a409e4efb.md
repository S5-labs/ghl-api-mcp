> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Agent

**Endpoint:** `DELETE /conversation-ai/agents/:agentId`

Deletes an AI agent permanently. This action cannot be undone. All associated configurations and conversation history will be removed.

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

**success**booleanrequiredIndicates if the agent was deleted successfully.**id**stringrequiredUnique identifier of the deleted agent.

```json
{
  "success": true,
  "id": "emp_123"
}
```
