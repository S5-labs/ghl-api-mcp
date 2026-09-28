> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-metadata). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Agent Metadata

**Endpoint:** `PATCH /agent-studio/agent/:agentId`

Updates agent metadata such as name, description, and status.

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

Agent ID whose metadata is being updated

**source**

string

Origin channel attributed to this write for auditing (e.g. public_api, internal)

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID for authorization (cannot be updated)**name**stringName of the agent**description**stringDescription of the agent**status**stringStatus of the agentAvailable options`active``inactive``archived`

```json
{
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "name": "Updated Customer Support Agent",
  "description": "Updated AI agent with enhanced customer support capabilities",
  "status": "active"
}
```

application/json

Agent metadata updated successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status**message**stringrequiredResponse message**data**objectrequiredUpdated agent or version data

```json
{
  "success": true,
  "message": "Agent updated successfully",
  "data": {
    "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
    "versionId": "v1a2b3c4d5e6f7g8h9i0",
    "name": "Updated Customer Support Agent",
    "description": "Updated AI agent with enhanced customer support capabilities",
    "status": "active",
    "updatedAt": "2024-02-27T11:45:00.000Z"
  }
}
```
