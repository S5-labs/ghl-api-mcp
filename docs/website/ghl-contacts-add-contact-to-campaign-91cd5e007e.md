> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Add Contact to Campaign

**Endpoint:** `POST /contacts/:contactId/campaigns/:campaignId`

Add contact to Campaign

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

**campaignId**

string

required

Campaign Id

- application/json

- Body
- Example (auto)

### Body**required**

****object

```json
{}
```

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
