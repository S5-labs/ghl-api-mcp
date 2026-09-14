> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/medias/bulk-delete-media-objects). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Bulk Delete / Trash Files/Folders

**Endpoint:** `PUT /medias/delete-files`

Soft-deletes or trashes multiple files and folders in a single request

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**filesToBeDeleted**object[]requiredArray of file objects to be deleted or trashed**altType**stringrequiredType of entity that owns the filesAvailable options`location`**altId**stringrequiredLocation identifier**status**stringrequiredStatus to set for the files (deleted or trashed)Available options`deleted``trashed`

```json
{
  "filesToBeDeleted": [
    {
      "_id": "686f630df0d3166d68fbcec2"
    }
  ],
  "altType": "location",
  "altId": "sx6wyHhbFdRXh302LLNR",
  "status": "deleted"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

```json
[
  {
    "deleted": true,
    "id": "686f630df0d3166d68fbcec2"
  }
]
```
