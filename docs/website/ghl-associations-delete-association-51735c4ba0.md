> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/associations/delete-association). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Association

**Endpoint:** `DELETE /associations/:associationId`

Delete USER_DEFINED Association By Id, deleting an association will also all the relations for that association

## Request

**Version**

string

required

API Version

Available options

`v3`

**associationId**

string

required

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**deleted**booleanrequiredDeletion status**id**stringrequiredAssociation Id**message**stringrequired

```json
{
  "deleted": true,
  "id": "6d6f6e676f5f6576656e7473",
  "message": "Association deleted successfully"
}
```
