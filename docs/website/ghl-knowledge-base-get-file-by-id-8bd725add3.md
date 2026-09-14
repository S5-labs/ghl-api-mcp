> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/get-file-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get file by id

**Endpoint:** `GET /knowledge-bases/files/:fileId`

Retrieves one uploaded file by id for the authenticated location. WHEN TO USE: use this when you need to inspect a single file; use getFilesByKnowledgeBasePublic to list files; use deleteFile to remove it. RETURNS: uploaded file details for that file id.

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

File ID to retrieve

application/json

Returns uploaded file details by file id

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredsuccess**data**objectrequireddata

```json
{
  "success": true,
  "data": {
    "id": "iX0Ybt39yeZ7oEphewiM",
    "name": "test.docx",
    "locationId": "qIyivCmsuEOSnyoFYEej",
    "knowledgeBaseId": "byP7JUyYiHC2EdbpSpdB",
    "size": 6471,
    "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "encoding": "7bit",
    "status": "PROCESSED",
    "deleted": false,
    "createdAt": "2025-08-25T11:44:29.904Z",
    "updatedAt": "2025-08-25T11:46:36.238Z"
  }
}
```
