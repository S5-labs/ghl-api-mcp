> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/medias/update-media-object). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update File/Folder

**Endpoint:** `POST /medias/:id`

Updates a single file or folder by ID

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

Unique identifier of the file or folder to update

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringrequiredNew name for the file or folder**altType**stringrequiredType of entity that owns the file or folderAvailable options`location`**altId**stringrequiredLocation identifier that owns the file or folder

```json
{
  "name": "Updated File Name.pdf",
  "altType": "location",
  "altId": "sx6wyHhbFdRXh302LLNR"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

```json
{
  "updated": true,
  "traceId": "33a641a2-c4a6-4123-aa82-c5b84f1a14ee"
}
```
