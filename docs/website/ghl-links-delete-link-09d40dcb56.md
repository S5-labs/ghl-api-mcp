> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/links/delete-link). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Link

**Endpoint:** `DELETE /links/:linkId`

Delete Link

## Request

**Version**

string

required

API Version

Available options

`v3`

**linkId**

string

required

Link Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeded**booleandeprecatedIndicates whether the link was successfully deleted (legacy field, misspelled). Use `succeeded` with x-api-version: v3.**succeeded**booleanIndicates whether the link was successfully deleted.

```json
{
  "succeeded": true
}
```
