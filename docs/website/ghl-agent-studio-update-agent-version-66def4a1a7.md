> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-version). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Agent

**Endpoint:** `PATCH /agent-studio/agent/versions/:versionId`

Updates a specific agent version by versionId. Supports updating nodes, edges, variables, and configuration.

## Request

**Version**

string

required

API Version

Available options

`v3`

**versionId**

string

required

Agent version ID to update

**source**

string

Origin channel attributed to this write for auditing (e.g. public_api, internal)

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID for authorization**versionName**stringVersion name**description**stringDescription of the version**nodes**object[]Complete array of nodes for the agent workflow. Provide all nodes including unchanged ones.**edges**object[]Complete array of edges connecting the nodes. Provide all edges including unchanged ones.**globalVariables**object[]Global variables accessible throughout the agent workflow**inputVariables**object[]Input variables required from user at execution time**runtimeVariables**object[]Runtime variables generated during agent execution**globalConfig**objectGlobal configuration including prompts and settings**userId**stringUser ID performing the update**userName**stringUser name performing the update

```json
{
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "versionName": "Customer Support Agent v2",
  "description": "Updated version with improved customer handling logic",
  "nodes": [
    {
      "nodeId": "node_1",
      "nodeName": "Start",
      "type": "start",
      "isStartNode": true
    },
    {
      "nodeId": "node_2",
      "nodeName": "LLM Node",
      "type": "llm",
      "nodeConfig": {
        "prompt": "How can I help you?",
        "llmProvider": "openai",
        "llmModel": "gpt-4"
      }
    }
  ],
  "edges": [
    {
      "startNode": "node_1",
      "endNode": "node_2"
    }
  ],
  "globalVariables": [
    {
      "key": "apiKey",
      "type": "string",
      "value": "your-api-key"
    }
  ],
  "inputVariables": [
    {
      "key": "customerName",
      "type": "string",
      "description": "Customer name for personalization"
    }
  ],
  "runtimeVariables": [
    {
      "key": "sessionId",
      "type": "string",
      "description": "Current session identifier"
    }
  ],
  "globalConfig": {
    "globalPrompt": {
      "currentPrompt": "You are a helpful customer support assistant.",
      "history": []
    }
  },
  "userId": "usr_abc123def456",
  "userName": "John Doe"
}
```

application/json

Version updated successfully

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
