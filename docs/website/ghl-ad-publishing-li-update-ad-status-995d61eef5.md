> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-update-ad-status). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update ad status

**Endpoint:** `PATCH /ad-publishing/linkedin/:adId/status`

Pause or resume a LinkedIn ad, campaign, or ad group

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

- application/json

- Body
- Example (auto)

### Body**required**

**operationType**stringrequiredUpdate operationAvailable options`PAUSED``ARCHIVED``RESUME`**type**stringrequiredAd object typeAvailable options`adGroup``adCampaign``ad`

```json
{
  "operationType": "PAUSED",
  "type": "adCampaign"
}
```

application/json

Acknowledgement that the status change was applied

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredTrue when the operation succeeded

```json
{
  "success": true
}
```
