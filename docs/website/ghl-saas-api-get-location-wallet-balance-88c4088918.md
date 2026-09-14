> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-wallet-balance). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Location Wallet Balance

**Endpoint:** `GET /saas/companies/:companyId/locations/:locationId/wallet-balance`

Fetch the wallet balance for a specific location. Returns a resource object with balance details.

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

Company ID that owns the location

**locationId**

string

required

Location ID to get wallet balance for

application/json

Location wallet balance retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**walletId**stringrequiredWallet Id**balance**numberrequiredCurrent wallet balance**complimentaryCredits**numberrequiredComplimentary credits amount

```json
{
  "walletId": "xyz789",
  "balance": 1500.5,
  "complimentaryCredits": 100
}
```
