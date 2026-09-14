> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/generate-estimate-number). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Generate Estimate Number

**Endpoint:** `GET /invoices/estimate/number/generate`

Get the next estimate number for the given location

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

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**estimateNumber**numberrequired**traceId**stringrequired

```json
{
  "estimateNumber": 0,
  "traceId": "string"
}
```
