> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-ad-accounts). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Google ad accounts

**Endpoint:** `GET /ad-publishing/google/ad-accounts`

Retrieve Google Ads accounts available for the connected user

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

Location identifier

**type**

string

Account type

Available options

`INTEGRATION`

`AD_MANAGER`

application/json

Ad accounts, shaped by `type`. `INTEGRATION` resolves each account from Google and returns its billing status, name, and connection flag; `AD_MANAGER` reads the location's stored integrations and returns only `accId` and `mccId`.

- application/json

- Schema
- Example (auto)

**Schema**

- Array [
- ]

```json
[
  {
    "accId": "6776452901",
    "mccId": "6776452901",
    "paymentStatus": "APPROVED",
    "name": "Acme Test Account",
    "email": "ads-owner@example.com",
    "status": "ENABLED",
    "integrationConnected": true
  },
  {
    "accId": "6776452901",
    "mccId": "6776452901"
  }
]
```
