> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-location-wallet-balance). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Location Wallet Balance

**Endpoint:** `POST /saas/companies/:companyId/locations/:locationId/wallet-balance/complimentary-credits`

Update the wallet balance or complimentary credit settings for a specific location. Supports partial updates via updateMask field (AIP-134 compliant).

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

Location ID to update wallet balance for

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**complimentaryCreditsAmount**numberCredit amount to be added

```json
{
  "complimentaryCreditsAmount": 100
}
```

application/json

Location wallet balance updated successfully

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
