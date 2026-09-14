> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/search-notes). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Search Notes

**Endpoint:** `POST /notes/search`

Search Notes

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

**locationId**stringrequiredLocation Id**query**stringSearch query string to filter notes**sources**string[]Filter notes by source type**createdByUserId**stringFilter notes by the user who created them**limit**numberMaximum number of notes to return**skip**numberNumber of notes to skip for pagination**sortBy**stringField to sort the results by**sortOrder**stringSort order directionAvailable options`asc``desc`**count**booleanWhether to include total count in the response**relations**string[]Filter notes by relation record IDs**includeRelationRecords**booleanWhether to include related records in the response

```json
{
  "locationId": "a1b2c3d4e5f6g7h8i9j0",
  "query": "lorem ipsum",
  "sources": [
    "WEB_USER",
    "WORKFLOW"
  ],
  "createdByUserId": "VWTbKSJtS4ueEPV3inr1",
  "limit": 10,
  "skip": 10,
  "sortBy": "dateAdded",
  "sortOrder": "desc",
  "count": true,
  "relations": [
    "VWTbKSJtS4ueEPV3inr1",
    "VWTbKSJtS4ueEPV3inr1"
  ],
  "includeRelationRecords": true
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
