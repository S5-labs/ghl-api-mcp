> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice-schedule). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete schedule

**Endpoint:** `DELETE /invoices/schedule/:scheduleId`

API to delete an schedule by schedule id

## Request

**Version**

string

required

API Version

Available options

`v3`

**scheduleId**

string

required

Schedule Id

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
