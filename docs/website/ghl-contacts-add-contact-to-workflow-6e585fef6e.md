> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-workflow). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Add Contact to Workflow

**Endpoint:** `POST /contacts/:contactId/workflow/:workflowId`

Add Contact to Workflow

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

**workflowId**

string

required

Workflow Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**eventStartTime**stringStart time of the workflow event (ISO 8601 format)

```json
{
  "eventStartTime": "2021-06-23T03:30:00+01:00"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeeded**booleanWhether the workflow operation was successful**succeded**booleandeprecatedLegacy misspelling of `succeeded`. Deprecated; use `succeeded`.

```json
{
  "succeeded": true
}
```
