> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/update-note-attachments). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Note Attachments

**Endpoint:** `PATCH /notes/:id/attachments`

Update Note Attachments

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

- application/json

- Body
- Example (auto)

### Body**required**

**type**stringThe type of attachment update operation**attachments**object[]List of attachments to add or remove

```json
{
  "type": "add",
  "attachments": [
    {
      "id": "att_1",
      "objectKey": "custom_objects.pet",
      "recordId": "632c34b4c9b7da3358ac9891"
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
