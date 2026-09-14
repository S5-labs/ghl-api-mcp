> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice-template). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete template

**Endpoint:** `DELETE /invoices/template/:templateId`

API to update an template by template id

## Request

**Version**

string

required

API Version

Available options

`v3`

**templateId**

string

required

Template Id

**altId**

string

required

location Id / company Id based on altType

**altType**

string

required

Alt Type

Available options

`location`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredsuccess

```json
{
  "success": true
}
```
