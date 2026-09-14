> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/generate-invoice-number). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Generate Invoice Number

**Endpoint:** `GET /invoices/generate-invoice-number`

Get the next invoice number for the given location

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

Location Id

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

**invoiceNumber**numberInvoice Number

```json
{
  "invoiceNumber": "19"
}
```
