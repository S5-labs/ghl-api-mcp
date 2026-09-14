> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/upload-file). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Uploads a file to knowledge base (max file size: 10MB)

**Endpoint:** `POST /knowledge-bases/files`

Uploads a PDF, DOC, or DOCX file (max 10MB) into a knowledge base for training. WHEN TO USE: use this when you need to add a document source; use getFilesByKnowledgeBasePublic to list uploads; use deleteFile to remove a file. Do not use this for website pages — use discoverWebsite / trainDiscoveredUrls. RETURNS: success and the uploaded file url, fileId, and folder path.

## Request

**Version**

string

required

API Version

Available options

`v3`

multipart/form-data

- multipart/form-data

- Body
- Example (auto)

### Body**required**

File upload with metadata

```json
{
  "locationId": "ocQHyuzHvysMo5N5VsXc",
  "knowledgeBaseId": "ocQHyuzHvysMo5N5VsXc",
  "file": "string"
}
```

application/json

Uploads a file to knowledge base

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredsuccess**data**objectrequireddetails of the uploaded file

```json
{
  "success": true,
  "data": {
    "url": "https://storage.googleapis.com/bucket/locations/abc123/file.pdf",
    "fileId": "ocQHyuzHvysMo5N5VsXc",
    "folderPath": "locations/ocQHyuzHvysMo5N5VsXc"
  }
}
```
