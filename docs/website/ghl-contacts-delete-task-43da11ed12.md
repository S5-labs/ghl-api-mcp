> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/delete-task). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Task

**Endpoint:** `DELETE /contacts/:contactId/tasks/:taskId`

Delete Task

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

**taskId**

string

required

Task Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeeded**booleanWhether the task was successfully deleted**succeded**booleandeprecatedLegacy misspelling of `succeeded`. Deprecated; use `succeeded`.

```json
{
  "succeeded": true
}
```
