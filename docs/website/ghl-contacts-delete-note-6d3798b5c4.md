> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/delete-note). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Note

**Endpoint:** `DELETE /contacts/:contactId/notes/:id`

Delete Note

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

**succeeded**booleanWhether the note was successfully deleted**succeded**booleandeprecatedLegacy misspelling of `succeeded`. Deprecated; use `succeeded`.

```json
{
  "succeeded": true
}
```
