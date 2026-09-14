> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-integration). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Facebook integration

**Endpoint:** `POST /ad-publishing/facebook/integration`

Create a Facebook ad integration for a location with page and ad account

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

**locationId**stringrequiredLocation identifier**pageId**stringrequiredFacebook page ID**adAccountId**stringAd account identifier

```json
{
  "locationId": "loc_abc123",
  "pageId": "123456789",
  "adAccountId": "act_123456"
}
```

application/json

The stored integration. Broader than the read — also returns the top-level `userAccessToken`.

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredIntegration identifier**locationId**stringrequiredLocation identifier**status**stringrequiredConnection stateAvailable options`connected``expired``disconnected`**pricingModel**stringrequiredHow the location pays for adsAvailable options`done_for_you``connect_your_bm`**userAccessToken**stringrequiredLive user access token for the connected Facebook user. Treat as a credential.**fbAdAccountId**stringConnected ad account id**fbDefaultPageId**stringPage used by default when publishing**pages**object[]requiredPages linked to the integration, each with its access token**unSubscriptionReasons**string[]requiredReasons the location previously unsubscribed. Empty array when none.**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at

```json
{
  "id": "68b6e9577058423e35c3c358",
  "locationId": "g8EFf47NY6PxodNBEHzP",
  "status": "connected",
  "pricingModel": "connect_your_bm",
  "userAccessToken": "<user-access-token>",
  "fbAdAccountId": "act_357046700569338",
  "fbDefaultPageId": "1180808591782587",
  "pages": [
    {
      "id": "196684453527082",
      "name": "Acme Restaurant",
      "accessToken": "<page-access-token>",
      "createdOn": "2026-08-14T07:54:16.206Z",
      "_id": "6a82addf630fffe07b9bedd7"
    }
  ],
  "unSubscriptionReasons": [],
  "createdAt": "2025-09-02T12:55:51.522Z",
  "updatedAt": "2026-08-19T12:03:39.896Z"
}
```
