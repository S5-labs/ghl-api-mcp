> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-note). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Note

**Endpoint:** `POST /contacts/:contactId/notes`

Create Note

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**userId**stringUser Id of the note author**body**stringrequiredBody content of the note**title**stringTitle of the note**color**stringHex color code for the note**pinned**booleanWhether the note is pinned

```json
{
  "userId": "GCs5KuzPqTls7vWclkEV",
  "body": "lorem ipsum",
  "title": "Follow-up summary",
  "color": "#FFAA00",
  "pinned": false
}
```

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
