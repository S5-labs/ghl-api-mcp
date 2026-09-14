> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/medias/bulk-update-media-objects). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Bulk Update Files/Folders

**Endpoint:** `PUT /medias/update-files`

Updates metadata or status of multiple files and folders

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

**altId**stringrequiredLocation identifier**altType**stringrequiredType of entity that owns the filesAvailable options`location`**filesToBeUpdated**object[]requiredArray of file objects to be updated

```json
{
  "altId": "sx6wyHhbFdRXh302LLNR",
  "altType": "location",
  "filesToBeUpdated": [
    {
      "id": "686f9817f0d3165be9fbcef6",
      "name": "Updated File Name.pdf"
    }
  ]
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
    "updated": true,
    "id": "686f9817f0d3165be9fbcef6"
  }
]
```
