> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/list-agency-wallet-transactions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List agency wallet transactions

**Endpoint:** `POST /saas/companies/:companyId/wallet-transactions`

Fetch paginated wallet transactions for an agency (company). Supports skip/limit pagination, date-range and charge-type filters, timezone normalization, and additional non-indexed filters in the request body.

## Request

**Version**

string

required

API Version

Available options

`v3`

**companyId**

string

required

Company ID to list transactions for

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**skip**numberNumber of records to skip for pagination. Defaults to 0 when omitted.**Possible values:** `>= 0`**limit**numberMaximum number of records to return. Capped at 1000 per request.**Possible values:** `>= 0` and `<= 1000`**filters**objectTransaction filters**timezone**stringTimezone for date normalization**users**array[]User identifiers to scope transaction results**additionalFilter**objectAdditional non-indexed filters

```json
{
  "skip": 0,
  "limit": 100,
  "filters": {
    "locationId": "AUKAtFVo0lWezBsBQ3FE",
    "settlementTime": {
      "from": "2024-01-01T00:00:00.000Z",
      "to": "2024-03-31T23:59:59.999Z"
    },
    "chargeType": "Email"
  },
  "timezone": "UTC",
  "users": [
    null
  ],
  "additionalFilter": {
    "messageId": "msg_123"
  }
}
```

application/json

Wallet transactions retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**transactions**array[]requiredFlat list of normalized wallet transaction records returned from blade-platform

```json
{
  "transactions": [
    null
  ]
}
```
