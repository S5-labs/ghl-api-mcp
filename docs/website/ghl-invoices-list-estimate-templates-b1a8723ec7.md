> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-estimate-templates). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Estimate Templates

**Endpoint:** `GET /invoices/estimate/template`

Get a list of estimate templates or a specific template by ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**altId**

string

required

Location Id or Agency Id

**altType**

string

required

Available options

`location`

**search**

string

To search for an estimate template by id / name

**limit**

string

required

Limit the number of items to return

**offset**

string

required

Number of items to skip

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**string[]requiredList of estimate templates**totalCount**numberrequiredTotal number of estimate templates available**traceId**stringrequiredUnique identifier for tracing the request

```json
{
  "data": [
    "string"
  ],
  "totalCount": 0,
  "traceId": "string"
}
```
