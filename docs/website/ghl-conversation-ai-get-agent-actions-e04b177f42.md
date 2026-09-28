> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/get-agent-actions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Actions for an Agent

**Endpoint:** `GET /conversation-ai/agents/:agentId/actions`

List for actions for an agent, including any `customApi` ("API Call") actions.

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

The unique identifier of the AI agent

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**data**object[]requiredActions for the agent — classic actions and customApi (API Call) actions**success**booleanrequiredSuccess status of the request

```json
{
  "data": [
    {
      "id": "actionId123",
      "name": "Trigger Workflow",
      "type": "triggerWorkflow"
    }
  ],
  "success": true
}
```
