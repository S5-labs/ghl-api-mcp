> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/medias/upload-media-content). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upload File into Media Storage

**Endpoint:** `POST /medias/upload-file`

If hosted is set to true then fileUrl is required. Else file is required. If adding a file, maximum allowed is 25 MB. For video files, the maximum allowed size is 500 MB.

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

**file**string<binary>**hosted**boolean**fileUrl**string**name**string**parentId**string

```json
{
  "file": "string",
  "hosted": true,
  "fileUrl": "string",
  "name": "string",
  "parentId": "string"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**fileId**stringrequiredID of the uploaded file**url**stringrequiredGoogle Cloud Storage URL of the uploaded file

```json
{
  "fileId": "file.pdf",
  "url": "https://storage.googleapis.com/bucket-name/path/to/file.pdf"
}
```
