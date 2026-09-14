> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/create-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Agent

**Endpoint:** `POST /agent-studio/agent`

Creates a new agent with staging version. The agent will be created with an initial staging version that can later be promoted to production.

## Request

**Version**

string

required

API Version

Available options

`v3`

**source**

string

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**name**stringName of the agent**description**stringDescription of the agent**agencyId**stringAgency ID**authorId**stringAuthor ID**authorName**stringAuthor name**authorEmail**stringAuthor email**status**stringrequiredStatus of the agentAvailable options`active``inactive``archived`**version**objectrequiredVersion data for the agent including nodes, edges, and configuration**nodes**string[]Nodes array (deprecated, prefer using version.nodes)**edges**string[]Edges array (deprecated, prefer using version.edges)

```json
{
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "name": "Customer Support Agent",
  "description": "AI agent specialized in handling customer inquiries and support tickets",
  "agencyId": "gjL2sFNXJfJYa3d2OYSN",
  "authorId": "usr_abc123def456",
  "authorName": "John Doe",
  "authorEmail": "john@example.com",
  "status": "active",
  "version": {
    "versionName": "Version 1",
    "description": "Initial version",
    "nodes": [],
    "edges": [],
    "uiNodes": [],
    "uiEdges": [],
    "globalVariables": [],
    "inputVariables": [],
    "runtimeVariables": [],
    "scopes": []
  },
  "nodes": [],
  "edges": []
}
```

application/json

Agent created successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status**message**stringrequiredResponse message**agent**objectrequiredCreated agent data with metadata**versions**arrayrequiredCreated versions array (initial staging version)

```json
{
  "success": true,
  "message": "Agent created successfully with staging version.",
  "agent": {
    "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
    "name": "Customer Support Agent",
    "description": "AI agent specialized in handling customer inquiries and support tickets",
    "locationId": "C2QujeCh8ZnC7al2InWR",
    "agencyId": "gjL2sFNXJfJYa3d2OYSN",
    "status": "active",
    "authorId": "usr_abc123def456",
    "folderId": "C2QujeCh8ZnC7al2InWR",
    "folderName": null,
    "createdAt": "2024-02-27T10:30:00.000Z",
    "updatedAt": "2024-02-27T10:30:00.000Z"
  },
  "versions": [
    {
      "versionId": "v1a2b3c4d5e6f7g8h9i0",
      "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
      "versionName": "Customer Support Agent v1",
      "state": "staging",
      "isPublished": false,
      "version": 1,
      "createdAt": "2024-02-27T10:30:00.000Z"
    }
  ]
}
```
