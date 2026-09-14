> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-publishing-progress). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get campaign publishing progress

**Endpoint:** `GET /ad-publishing/facebook/campaigns/:campaignId/publishing-progress`

Returns Redis-backed publish progress for a campaign while it is publishing to Meta. Used by the validation funnel UI to poll step counts and completion state.

## Request

**Version**

string

required

API Version

Available options

`v3`

**campaignId**

string

required

Campaign identifier

**locationId**

string

required

Location identifier

application/json

Publishing progress for the campaign

- application/json

- Schema
- Example (auto)

**Schema**

**campaignId**stringrequiredCampaign identifier**publishingStatus**stringrequiredCurrent campaign publishing status in ad-publishingAvailable options`DRAFT``SCHEDULED``PUBLISHED``PUBLISHING``FAILED``IN_REVIEW``PAUSED``ARCHIVED``WITH_ISSUES``REJECTED`**total**numberrequiredTotal publish steps tracked in Redis (campaign + ad sets + ads)**processed**numberrequiredNumber of publish steps completed so far**isComplete**booleanrequiredWhether publishing is finished (Redis complete/failed, processed >= total, or status is no longer PUBLISHING)**hasFailed**booleanrequiredWhether publishing failed (Redis failed status or campaign FAILED)

```json
{
  "campaignId": "507f1f77bcf86cd799439011",
  "publishingStatus": "PUBLISHING",
  "total": 5,
  "processed": 2,
  "isComplete": false,
  "hasFailed": false
}
```
