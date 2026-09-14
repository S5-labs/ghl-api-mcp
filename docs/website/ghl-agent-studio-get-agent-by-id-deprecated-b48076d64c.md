> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agent-by-id-deprecated). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Agent (Deprecated)

**Endpoint:** `GET /agent-studio/public-api/agents/:agentId`

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

**Deprecated endpoint - use GET /agent/:agentId instead.**

Gets a specific agent by its ID for the specified location with all its versions. locationId is required parameter. The agent must have active status.

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

Agent retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status**message**stringrequiredResponse message**agent**objectrequiredAgent metadata with all active versions**traceId**stringRequest trace ID for debugging

```json
{
  "success": true,
  "message": "Agent retrieved successfully",
  "agent": {
    "id": "d6a6792d-0d50-4e8f-9c3b-ecd8096d0bdd",
    "agentId": "AgfS2JXWsSN8aXb5c4d2",
    "name": "Customer Support Agent",
    "description": "AI agent for customer support",
    "agencyId": "5DP4iH6HLkQsiKESj6rh",
    "locationId": "C2QujeCh8ZnC7al2InWR",
    "productSlug": "agent_studio",
    "productId": "agent_studio",
    "authorId": "usr_123",
    "status": "active",
    "folderId": "vEoIigWSAw1BQA9DEchD",
    "folderName": "Default Agents",
    "createdAt": "2026-03-06T10:37:01.013Z",
    "updatedAt": "2026-03-06T10:37:01.014Z",
    "deleted": false,
    "productionVersion": {
      "versionId": "Ver1K8sSF2nC7al5InWz",
      "versionName": "Content Creation Agent v1",
      "isPublished": true,
      "inputVariables": [],
      "updatedAt": "2026-03-02T06:53:40.570Z"
    },
    "versions": [
      {
        "id": "3f9d9ab7-5ca4-4e64-8472-eab9e77a0fe3",
        "versionId": "Ver1K8sSF2nC7al5InWz",
        "agentId": "AgfS2JXWsSN8aXb5c4d2",
        "agencyId": "5DP4iH6HLkQsiKESj6rh",
        "locationId": "C2QujeCh8ZnC7al2InWR",
        "versionName": "v1",
        "description": "AI agent for customer support",
        "state": "staging",
        "isPublished": false,
        "scopes": [],
        "nodes": [],
        "edges": [],
        "uiNodes": [],
        "uiEdges": [],
        "globalVariables": [],
        "inputVariables": [],
        "runtimeVariables": [],
        "viewport": {
          "x": 0,
          "y": 0,
          "zoom": 1
        },
        "globalConfig": {},
        "createdAt": "2026-03-06T10:37:01.079Z",
        "updatedAt": "2026-03-06T10:37:01.079Z",
        "deleted": false,
        "storedInBucket": true,
        "bucketFilePath": "agent-definitions/5DP4iH6HLkQsiKESj6rh/vEoIigWSAw1BQA9DEchD/d6a6792d-0d50-4e8f-9c3b-ecd8096d0bdd/3f9d9ab7-5ca4-4e64-8472-eab9e77a0fe3.json"
      }
    ]
  },
  "traceId": "22dbda99-13d3-4b4d-a30e-c468334e2178"
}
```
