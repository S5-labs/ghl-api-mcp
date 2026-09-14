> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/delete-note). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Note

**Endpoint:** `DELETE /notes/:id`

Delete Note

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

Note Id

**locationId**

string

required

Location Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**note**objectThe note object

```json
{
  "note": {
    "id": "HGPcayliwcdoUFzvbTok",
    "body": "lorem ipsum",
    "userId": "TUcmRxWrjqzJS8EjkxNK",
    "dateAdded": "2021-07-08T12:02:11.285Z",
    "title": "Follow-up summary",
    "color": "#FFAA00",
    "pinned": false
  }
}
```
