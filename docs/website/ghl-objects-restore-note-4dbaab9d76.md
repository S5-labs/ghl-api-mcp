> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/restore-note). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Restore Note

**Endpoint:** `POST /notes/:id/restore`

Restore Note

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

**forceRestore**booleanWhether to force restore the note even if conflicts exist**model**stringThe model type of the record to restore the note to**recordId**stringThe record ID to restore the note to

```json
{
  "forceRestore": true,
  "model": "VWTbKSJtS4ueEPV3inr1",
  "recordId": "VWTbKSJtS4ueEPV3inr1"
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
