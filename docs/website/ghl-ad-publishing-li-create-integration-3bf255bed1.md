> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-create-integration). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create LinkedIn integration

**Endpoint:** `POST /ad-publishing/linkedin/integration`

Create a LinkedIn Ads integration for a location with ad account details

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

**locationId**stringrequiredLocation identifier**adAccountId**stringrequiredAd account identifier**adAccountName**stringrequiredAd account name**currencyCode**stringrequiredCurrency code**organizationId**stringrequiredOrganization identifier

```json
{
  "locationId": "loc_123",
  "adAccountId": "12345678",
  "adAccountName": "My Ad Account",
  "currencyCode": "USD",
  "organizationId": "12345678"
}
```

application/json

The stored integration, same sanitised projection as GET /linkedin/integration

- application/json

- Schema
- Example (auto)

**Schema**

**locationId**stringrequiredLocation identifier**status**stringrequiredConnection stateAvailable options`connected``expired``disconnected`**adAccountId**stringConnected LinkedIn ad account id**currencyCode**stringAccount billing currency, ISO 4217**organizationId**stringOrganization URN the ad account belongs to**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at

```json
{
  "locationId": "fRMewNQIxSyZ5R4nQyit",
  "status": "connected",
  "adAccountId": "556129919",
  "currencyCode": "USD",
  "organizationId": "urn:li:organization:2414183",
  "createdAt": "2025-01-08T17:50:37.952Z",
  "updatedAt": "2026-08-19T08:12:05.304Z"
}
```
