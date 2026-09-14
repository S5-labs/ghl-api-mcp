> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-knowledge-base). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete a knowledge base

**Endpoint:** `DELETE /knowledge-bases/:knowledgeBaseId`

Permanently deletes a knowledge base and its associated trained content. WHEN TO USE: use this when the whole knowledge source is no longer needed; use deleteTrainedUrlsForKnowledgeBase or delete (FAQ) to remove only some content. RETURNS: whether the delete succeeded.

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

The unique identifier of the knowledge base to delete

application/json

Knowledge base deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates if the delete operation was successful

```json
{
  "success": true
}
```
