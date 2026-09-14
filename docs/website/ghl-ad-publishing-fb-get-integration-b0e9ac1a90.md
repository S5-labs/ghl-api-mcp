> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-integration). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Facebook integration

**Endpoint:** `GET /ad-publishing/facebook/integration`

Retrieve the Facebook ad integration details for a location

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

Facebook integration for the location. Includes a live access token per linked page.

- application/json

- Schema
- Example (auto)

**Schema**

**locationId**stringrequiredLocation identifier**status**stringrequiredConnection stateAvailable options`connected``expired``disconnected`**pricingModel**stringrequiredHow the location pays for adsAvailable options`done_for_you``connect_your_bm`**fbAdAccountId**stringConnected ad account id, prefixed with `act_`**fbBusinessId**stringBusiness Manager id. Absent on connect-your-BM integrations that have no business linked.**fbDefaultPageId**stringPage used by default when publishing**pages**object[]requiredPages linked to the integration, each with its access token

```json
{
  "locationId": "g8EFf47NY6PxodNBEHzP",
  "status": "connected",
  "pricingModel": "connect_your_bm",
  "fbAdAccountId": "act_357046700569338",
  "fbBusinessId": "153049965367635",
  "fbDefaultPageId": "1180808591782587",
  "pages": [
    {
      "id": "196684453527082",
      "name": "Acme Restaurant",
      "accessToken": "<page-access-token>",
      "createdOn": "2026-08-14T07:54:16.206Z",
      "_id": "6a82addf630fffe07b9bedd7"
    }
  ]
}
```
