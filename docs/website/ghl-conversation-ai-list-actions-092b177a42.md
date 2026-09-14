> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/list-actions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Actions for an Agent

**Endpoint:** `GET /conversation-ai/agents/:agentId/actions/list`

List for actions for an agent

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

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**data**object[]requiredGrouped actions by type**success**booleanrequiredSuccess status of the request

```json
{
  "data": [
    {
      "id": "actionId123",
      "name": "Trigger Workflow",
      "type": "triggerWorkflow",
      "agentId": "agentId123",
      "details": {
        "workflowIds": [
          "workflow123",
          "workflow456"
        ],
        "triggerCondition": "When user requests appointment",
        "triggerMessage": "Workflow triggered successfully"
      }
    }
  ],
  "success": true
}
```
