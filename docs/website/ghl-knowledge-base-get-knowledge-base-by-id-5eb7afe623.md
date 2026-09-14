> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/get-knowledge-base-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get knowledge base by ID

**Endpoint:** `GET /knowledge-bases/:knowledgeBaseId`

Retrieves one knowledge base by id, including name, metadata, and timestamps. WHEN TO USE: use this when you need to inspect a single knowledge base; use listAllKnowledgeBasesPaginated to browse; use updateKnowledgeBase to rename it. RETURNS: success and the knowledge base record.

## Request

**Version**

string

required

API Version

Available options

`v3`

**knowledgeBaseId**

string

required

The unique identifier of the knowledge base

application/json

Knowledge base by ID retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status of the operation**data**objectrequiredKnowledge base details

```json
{
  "success": true,
  "data": {}
}
```
