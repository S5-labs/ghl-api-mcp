> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/get-files-by-knowledge-base-public). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all files by knowledge base

**Endpoint:** `GET /knowledge-bases/files`

Lists files uploaded to a knowledge base, with optional pagination and name search. WHEN TO USE: use this when you need to see uploaded documents; use uploadFile to add a file; use getFileById for one file; use deleteFile to remove one. RETURNS: the file list for the knowledge base.

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

knowledge base id

**limit**

number

Maximum number of files to return

`10`

**lastFileId**

string

Last file id, used for pagination

**offset**

number

Zero-based offset for search-mode pagination. Ignored when lastFileId is provided.

`0`

**search**

string

Case-insensitive substring to match against the file name.

application/json

List of files by knowledge base

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredsuccess**data**objectrequireddata

```json
{
  "success": true,
  "data": {
    "files": [],
    "count": 0
  }
}
```
