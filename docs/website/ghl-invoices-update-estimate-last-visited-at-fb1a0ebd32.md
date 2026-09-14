> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/update-estimate-last-visited-at). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update estimate last visited at

**Endpoint:** `PATCH /invoices/estimate/stats/last-visited-at`

API to update estimate last visited at by estimate id

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**estimateId**stringrequiredEstimate Id

```json
{
  "estimateId": "5f9d6d8b1b2d2c001f2d9e4b"
}
```
