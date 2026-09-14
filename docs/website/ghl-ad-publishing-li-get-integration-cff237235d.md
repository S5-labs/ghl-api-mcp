> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-integration). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get LinkedIn integration

**Endpoint:** `GET /ad-publishing/linkedin/integration`

Retrieve the LinkedIn Ads integration details for a location

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

application/json

LinkedIn integration metadata for the location

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
