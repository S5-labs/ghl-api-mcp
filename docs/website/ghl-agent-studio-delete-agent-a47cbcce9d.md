> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/delete-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Agent

**Endpoint:** `DELETE /agent-studio/agent/:agentId`

Deletes an agent and all its versions.

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

**locationId**

string

required

**source**

string

application/json

Agent deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status**message**stringrequiredResponse message**agentId**stringDeleted agent ID

```json
{
  "success": true,
  "message": "Agent deleted successfully",
  "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2"
}
```
