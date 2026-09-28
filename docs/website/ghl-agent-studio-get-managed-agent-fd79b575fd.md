> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-managed-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get a published Managed Agent

**Endpoint:** `GET /agent-studio/managed-agents/:managedAgentId`

Returns public metadata for a published production Managed Agent. Unknown, unpublished, and cross-location identifiers return 404.

## Request

**Version**

string

required

API version.

Available options

`v3`

**managedAgentId**

string

required

Managed Agent ID.

**locationId**

string

required

Authorized sub-account ID.

**Possible values:** `<= 256 characters`

application/json

Published Managed Agent retrieved.

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredManaged Agent ID.**name**stringrequiredDisplay name of the Managed Agent.**description**stringrequiredPublic description of the Managed Agent.**locationId**stringrequiredLocation (sub-account) that owns the agent.**publishedVersionId**stringrequiredPublished production version ID.**publishedAt**string<date-time>Time the production version was published.**model**stringModel configured for the published version.**tools**string[]Tool identifiers enabled on the published version.**plugins**object[]Plugins enabled on the published version.**knowledgeBaseIds**string[]Knowledge base IDs configured on the published version.

```json
{
  "id": "027ee957-ae94-40ad-89a3-b25c985f729b",
  "name": "Lead Qualifier",
  "description": "Qualifies inbound leads and books appointments.",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "publishedVersionId": "Ver1K8sSF2nC7al5InWz",
  "publishedAt": "2026-09-01T12:00:00.000Z",
  "model": "anthropic/claude-sonnet-4-6",
  "tools": [
    "web_search",
    "kb_search"
  ],
  "plugins": [
    {
      "slug": "social-planner",
      "name": "Social Planner"
    }
  ],
  "knowledgeBaseIds": [
    "kb_abc123"
  ]
}
```
