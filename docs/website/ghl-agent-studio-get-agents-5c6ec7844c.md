> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agents). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Agents

**Endpoint:** `GET /agent-studio/agent`

Lists all active agents for the specified location. locationId is required parameter to ensure optimal performance. Supports pagination using limit and offset. Optionally filter by isPublished=true to return only agents with a published production version.

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

**isPublished**

string

Optional filter to return only agents with a published production version

**limit**

string

required

**offset**

string

required

**source**

string

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
