> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-action). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Remove Action from Agent

**Endpoint:** `DELETE /conversation-ai/agents/:agentId/actions/:actionId`

Permanently deletes an action. This will remove the action from all associated agents and cannot be undone. Applies to both classic and `customApi` ("API Call") actions.

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

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequiredDeleted action information**success**booleanrequiredSuccess status of the request

```json
{
  "data": {
    "id": "actionId123"
  },
  "success": true
}
```
