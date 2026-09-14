> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-create-integration). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Google integration

**Endpoint:** `POST /ad-publishing/google/integration`

Create a Google Ads integration for a location

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

**locationId**stringrequiredLocation identifier**adAccountId**stringrequiredAd account identifier**mccId**stringrequiredMCC identifier

```json
{
  "locationId": "loc_abc123",
  "adAccountId": "123-456-7890",
  "mccId": "987-654-3210"
}
```

application/json

The stored integration. Returns the raw document, so the id is `_id`.

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredIntegration identifier, as `_id` rather than `id`**__v**numberrequiredMongoose internal version key**locationId**stringrequiredLocation identifier**status**stringrequiredConnection stateAvailable options`connected``expired``disconnected`**adAccountId**stringrequiredConnected Google Ads customer id**mccId**stringrequiredManager (MCC) customer id above the account**userId**stringrequiredGoogle People API resource name of the connected user**connectionId**stringrequiredIdentifier of the OAuth connection backing this integration**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at

```json
{
  "_id": "677ebaed998e79ec25fc612b",
  "__v": 0,
  "locationId": "fRMewNQIxSyZ5R4nQyit",
  "status": "connected",
  "adAccountId": "6776452901",
  "mccId": "6776452901",
  "userId": "people/1154723318699",
  "connectionId": "gZddldBd8SWA7C",
  "createdAt": "2025-01-08T17:50:37.952Z",
  "updatedAt": "2026-08-19T08:12:05.304Z"
}
```
