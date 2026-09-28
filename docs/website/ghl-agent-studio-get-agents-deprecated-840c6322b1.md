> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agents-deprecated). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Agents (Deprecated)

**Endpoint:** `GET /agent-studio/public-api/agents`

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

**Deprecated endpoint - use GET /agent instead.**

Lists all active agents that have a published production version for the specified location. locationId is required parameter. Supports pagination using limit and offset.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location ID

**limit**

string

required

Page size (default 20, max 100)

**offset**

string

required

Number of agents to skip before collecting results (pagination offset)

**source**

string

Origin channel attributed to this read for auditing (e.g. public_api, internal)

application/json

Agents retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status**message**stringrequiredResponse message**agents**object[]requiredList of agents with metadata**pagination**objectrequiredPagination metadata

```json
{
  "success": true,
  "message": "Agents retrieved successfully",
  "agents": [
    {
      "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
      "name": "Marketing Assistant",
      "description": "AI agent specialized in marketing strategy and content creation",
      "locationId": "C2QujeCh8ZnC7al2InWR",
      "status": "active",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-02-20T14:45:00.000Z"
    },
    {
      "agentId": "b3c4d5e6f7g8h9i0j1k2l3m4",
      "name": "Customer Support Bot",
      "description": "AI agent for handling customer inquiries and support tickets",
      "locationId": "C2QujeCh8ZnC7al2InWR",
      "status": "active",
      "createdAt": "2024-01-10T09:15:00.000Z",
      "updatedAt": "2024-02-18T16:20:00.000Z"
    }
  ],
  "pagination": {
    "total": 25,
    "limit": 20,
    "offset": 0,
    "hasMore": true
  }
}
```
