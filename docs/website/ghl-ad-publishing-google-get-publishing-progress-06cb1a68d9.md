> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-publishing-progress). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get ad publishing progress

**Endpoint:** `GET /ad-publishing/google/ads/:adId/publishing-progress`

Returns Redis-backed publish progress for a Google campaign while it is publishing. Used by the publish progress UI to poll step counts and completion state.

## Request

**Version**

string

required

API Version

Available options

`v3`

**adId**

string

required

Ad identifier

**locationId**

string

required

Location identifier

application/json

Publish progress counters for the campaign

- application/json

- Schema
- Example (auto)

**Schema**

**campaignId**stringrequiredCampaign being published**publishingStatus**stringrequiredCurrent publishing statusAvailable options`DRAFT``SCHEDULED``PUBLISHED``PUBLISHING``FAILED``IN_REVIEW``PAUSED``ARCHIVED``WITH_ISSUES``REJECTED`**total**numberrequiredTotal steps to process — the campaign plus its ad groups and ads**processed**numberrequiredSteps completed so far**isComplete**booleanrequiredWhether every step has finished**hasFailed**booleanrequiredWhether any step failed

```json
{
  "campaignId": "6a8438b2b112242a53b1ea6a",
  "publishingStatus": "PUBLISHING",
  "total": 3,
  "processed": 0,
  "isComplete": false,
  "hasFailed": false
}
```
