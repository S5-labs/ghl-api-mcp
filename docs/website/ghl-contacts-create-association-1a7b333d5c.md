> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-association). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Contacts Tags

**Endpoint:** `POST /contacts/bulk/tags/update/:type`

Allows you to update tags to multiple contacts at once, you can add or remove tags from the contacts

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

**contacts**string[]requiredlist of contact ids to be processed**tags**string[]requiredlist of tags to be added or removed**locationId**stringrequiredlocation id from where the bulk request is executed**removeAllTags**booleanOption to implement remove all tags. if true, all tags will be removed from the contacts. Can only be used with remove type.

```json
{
  "contacts": [
    "qFSqySFkVvNzOSqgGqFi",
    "abcdef",
    "qFSqySFkVvNzOSqgGqFi",
    "3ualbhnV7j3n3a9r2moD"
  ],
  "tags": [
    "tag-1",
    "tag-2"
  ],
  "locationId": "asdrwHvLUxlfw5SqKVCN",
  "removeAllTags": "false"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeeded**booleanrequiredIndicates if the operation was successful**succeded**booleanrequireddeprecatedLegacy misspelling of `succeeded`. Deprecated; use `succeeded`.**errorCount**numberrequiredNumber of errors encountered during the operation**responses**string[]requiredResponses for each contact processed

```json
{
  "succeeded": true,
  "errorCount": 0,
  "responses": [
    {
      "contactId": "qFSqySFkVvNzOSqgGqFi",
      "message": "Tags updated",
      "type": "success",
      "oldTags": [
        "tag-1",
        "tag-2"
      ],
      "tagsAdded": [],
      "tagsRemoved": []
    },
    {
      "contactId": "abcdef",
      "message": "contact id is not a valid firebase id",
      "type": "error"
    },
    {
      "contactId": "qFSqySFkVvNzOSqgGqFi",
      "message": "contact is deleted",
      "type": "error"
    },
    {
      "contactId": "3ualbhnV7j3n3a9r2moD",
      "message": "contact does not belong to location",
      "type": "error"
    }
  ]
}
```
