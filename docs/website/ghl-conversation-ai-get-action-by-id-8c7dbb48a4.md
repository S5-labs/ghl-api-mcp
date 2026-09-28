> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/get-action-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Action by ID

**Endpoint:** `GET /conversation-ai/agents/:agentId/actions/:actionId`

Retrieves detailed information about a specific action using its unique identifier. Returns the action configuration, associated agents, and performance metrics. Supports both classic actions and the `customApi` ("API Call") type.

## Request

**Version**

string

required

API Version

Available options

`v3`

**actionId**

string

required

The unique identifier of the action ID Attached to the agent

**agentId**

string

required

The unique identifier of the AI agent

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequiredAction details (classic action or customApi API Call action)**success**booleanrequiredSuccess status of the request

```json
{
  "data": {
    "id": "actionId123",
    "name": "Trigger Workflow",
    "type": "triggerWorkflow"
  },
  "success": true
}
```
