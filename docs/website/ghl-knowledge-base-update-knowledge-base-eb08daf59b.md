> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/update-knowledge-base). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update a knowledge base

**Endpoint:** `PUT /knowledge-bases/:id`

Updates the name and/or description of an existing knowledge base. WHEN TO USE: use this when you need to rename or re-describe a knowledge base; use createKnowledgeBase to add one; use deleteKnowledgeBase to remove one. RETURNS: whether the update succeeded.

## Request

**Version**

string

required

API Version

Available options

`v3`

**id**

string

required

The unique identifier of the knowledge base to update

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringfield to update the name of the knowledge base**description**stringfield to update the description of the knowledge base

```json
{
  "name": "My Updated Knowledge Base",
  "description": "An updated description for this knowledge base"
}
```

application/json

Knowledge base updated successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates if the update operation was successful

```json
{
  "success": true
}
```
