> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-payouts). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Payouts

**Endpoint:** `GET /affiliate-manager/:locationId/payouts`

Retrieve the list of payouts for a location.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location Id

**status**

Payout Status

Payout Status

Available options

`pending`

`approved`

`paid`

`denied`

**query**

string

query

**affiliateId**

string

Affiliate Id

**campaignId**

string

Campaign Id

**skip**

number

Number of records to skip for pagination

`0`

**limit**

number

Maximum number of records to return

`10`

**start**

string

Filter payouts on or after this date (ISO 8601)

**end**

string

Filter payouts on or before this date (ISO 8601)

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**payouts**object[]requiredPayout list**meta**objectPagination metadata

```json
{
  "payouts": [
    {
      "_id": "69c0ee71c501d6b731110028",
      "locationId": "Lx1EI6YIgQYMQi0ytFXv",
      "affiliateId": "6792254b535e27b9ab02be63",
      "campaignId": "695e70357e5c8d108c41d160",
      "currency": "USD",
      "amount": 700,
      "status": "pending",
      "payoutMonth": "2026-06-01T00:00:00.000Z",
      "dueAt": "2026-06-29T00:00:00.000Z",
      "paidMethod": "manual",
      "deleted": false,
      "createdAt": "2026-03-23T07:40:33.034Z",
      "updatedAt": "2026-03-23T09:18:03.320Z",
      "affiliate": {
        "_id": "6792254b535e27b9ab02be63",
        "firstName": "John",
        "lastName": "Deo",
        "phone": "+915979490952",
        "deleted": false,
        "locationId": "Lx1EI6YIgQYMQi0ytFXv",
        "active": true,
        "createdAt": "2025-01-23T11:17:31.157Z",
        "contactId": "3gLOpQH8ESSPpHW3JUAn"
      },
      "campaign": "New Invite Flow",
      "affiliateName": "John Deo",
      "affiliateEmail": "johndeo@gmail.com",
      "payoutMethod": "PAYPAL"
    }
  ],
  "meta": {
    "count": 42
  }
}
```
