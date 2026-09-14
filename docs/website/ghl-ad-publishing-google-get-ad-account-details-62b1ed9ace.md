> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-ad-account-details). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get ad account details

**Endpoint:** `GET /ad-publishing/google/ad-accounts/:adAccountId`

Retrieve details of a specific Google Ads account

## Request

**Version**

string

required

API Version

Available options

`v3`

**adAccountId**

string

required

Ad account identifier

**locationId**

string

required

Location identifier

application/json

Details for a single Google Ads account

- application/json

- Schema
- Example (auto)

**Schema**

**resourceName**stringGoogle Ads resource name**id**stringGoogle Ads customer id**descriptiveName**stringAccount display name**currencyCode**stringAccount billing currency, ISO 4217**status**stringGoogle Ads account status**paymentStatus**stringrequiredBilling setup status, resolved by preferring APPROVED over APPROVED_HELD, PENDING then CANCELLED. `NO_PAYMENT_METHOD` means no billing setup was found.Available options`APPROVED``APPROVED_HELD``PENDING``CANCELLED``NO_PAYMENT_METHOD`**email**stringEmail of a user with access to the account. Absent when Google returns no customer_user_access row, which is common for MCC-managed child accounts.

```json
{
  "resourceName": "customers/6776452901",
  "id": "6776452901",
  "descriptiveName": "Acme Test Account",
  "currencyCode": "USD",
  "status": "ENABLED",
  "paymentStatus": "APPROVED",
  "email": "ads-owner@example.com"
}
```
