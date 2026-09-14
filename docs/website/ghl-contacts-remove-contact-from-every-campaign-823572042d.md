> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/remove-contact-from-every-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Remove Contact From Every Campaign

**Endpoint:** `DELETE /contacts/:contactId/campaigns/remove-all`

Removes the contact from every campaign it is enrolled in.

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

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeeded**booleanWhether the campaign operation was successful**succeded**booleandeprecatedLegacy misspelling of `succeeded`. Deprecated; use `succeeded`.

```json
{
  "succeeded": true
}
```
