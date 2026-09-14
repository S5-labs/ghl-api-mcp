> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/create-note). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Note

**Endpoint:** `POST /notes/`

Create Note

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**body**stringrequiredThe body content of the note**relations**object[]requiredRecords this note is attached to — e.g. a custom object record, a contact, or a business. At least one relation is required.**Possible values:** `>= 1`**userId**stringrequiredThe ID of the user creating the note

```json
{
  "body": "lorem ipsum",
  "relations": [
    {
      "objectKey": "custom_objects.pet",
      "recordId": "632c34b4c9b7da3358ac9891"
    }
  ],
  "userId": "TUcmRxWrjqzJS8EjkxNK"
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
