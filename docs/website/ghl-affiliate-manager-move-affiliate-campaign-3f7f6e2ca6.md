> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/move-affiliate-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Move Affiliate To Campaign

**Endpoint:** `POST /affiliate-manager/affiliate-campaign/:locationId/affiliate/:affiliateId/move-campaign`

Move an affiliate from one campaign to another. The target campaign must be live and belong to the same location, and the affiliate must not already be enrolled in it.

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

Location Id

**affiliateId**

string

required

Affiliate Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**sourceCampaignId**stringrequiredSource Campaign Id**targetCampaignId**stringrequiredTarget Campaign Id**moveMode**numberrequiredMove mode — 1 keeps recurrent commissions in the old campaign, 2 moves all data with the original AM idAvailable options`1``2`**sendWelcomeEmail**booleanWhether to send a welcome email to this affiliate after moving. If the target campaign has welcome emails disabled, no email will be sent even if this is turned on. If the campaign has it enabled, you can disable it here to skip sending for this affiliate.**Default value:**`true`

```json
{
  "sourceCampaignId": "6385d230f6d19db03eef6fb2",
  "targetCampaignId": "6512c3a1f6d19db03eef7a04",
  "moveMode": 1,
  "sendWelcomeEmail": true
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredWhether the action completed**message**stringrequiredHuman readable outcome

```json
{
  "success": true,
  "message": "Affiliate suspended successfully"
}
```
