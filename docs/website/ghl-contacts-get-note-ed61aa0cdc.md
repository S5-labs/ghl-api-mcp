> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-note). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Note

**Endpoint:** `GET /contacts/:contactId/notes/:id`

Get Note

## Request

**Version**

string

required

API Version

Available options

`v3`

**contactId**

string

required

Contact Id

**id**

string

required

Note Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**note**objectNote details

```json
{
  "note": {
    "id": "HGPcayliwcdoUFzvbTok",
    "body": "lorem ipsum",
    "userId": "TUcmRxWrjqzJS8EjkxNK",
    "dateAdded": "2021-07-08T12:02:11.285Z",
    "contactId": "TUcmRxWrjqzJS8EjkxNK"
  }
}
```
