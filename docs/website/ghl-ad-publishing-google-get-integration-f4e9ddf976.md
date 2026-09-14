> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-integration). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Google integration

**Endpoint:** `GET /ad-publishing/google/integration`

Retrieve the Google Ads integration details for a location

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

Google Ads integration metadata for the location

- application/json

- Schema
- Example (auto)

**Schema**

**locationId**stringrequiredLocation identifier**status**stringrequiredConnection state. Set to `disconnected` automatically if the selected account is no longer active.Available options`connected``expired``disconnected`**adAccountId**stringrequiredConnected Google Ads customer id, empty string when disconnected**createdAt**stringrequiredWhen the integration was created**updatedAt**stringrequiredWhen the integration was last updated

```json
{
  "locationId": "fRMewNQIxSyZ5R4nQyit",
  "status": "connected",
  "adAccountId": "6776452901",
  "createdAt": "2025-01-08T17:50:37.952Z",
  "updatedAt": "2026-08-11T11:57:25.917Z"
}
```
