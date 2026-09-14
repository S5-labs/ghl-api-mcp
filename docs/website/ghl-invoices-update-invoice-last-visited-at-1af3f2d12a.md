> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/update-invoice-last-visited-at). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update invoice last visited at

**Endpoint:** `PATCH /invoices/stats/last-visited-at`

API to update invoice last visited at by invoice id

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

**invoiceId**stringrequiredInvoice Id

```json
{
  "invoiceId": "6578278e879ad2646715ba9c"
}
```
