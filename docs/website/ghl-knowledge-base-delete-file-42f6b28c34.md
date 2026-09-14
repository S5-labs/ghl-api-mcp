> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-file). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete a file from knowledge base

**Endpoint:** `DELETE /knowledge-bases/files/:fileId`

Deletes one uploaded file from the authenticated location so the AI no longer uses it. WHEN TO USE: use this when you need to remove a document; use getFilesByKnowledgeBasePublic to find the file id; use deleteTrainedUrlsForKnowledgeBase for crawled pages instead. RETURNS: whether the delete succeeded.

## Request

**Version**

string

required

API Version

Available options

`v3`

**fileId**

string

required

File ID to delete

application/json

Deletes a file from knowledge base

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredsuccess

```json
{
  "success": true
}
```
