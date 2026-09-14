> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/update-affiliate-referral-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Affiliate Referral Id

**Endpoint:** `PUT /affiliate-manager/affiliate-campaign/:locationId/affiliate/:affiliateId/referral-id`

Set the referral id an affiliate is tracked by on a campaign. The referral link is rebuilt around the new id, and the id must be unused across the location.

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

**campaignId**stringrequiredCampaign the affiliate is enrolled in**referralId**stringrequiredNew referral id. Must be unused across the location.**Possible values:** `>= 3 characters` and `<= 64 characters`, Value must match regular expression `^[A-Za-z0-9_]{3,64}$`

```json
{
  "campaignId": "6385d230f6d19db03eef6fb2",
  "referralId": "john122"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**referralId**stringrequiredThe referral id now stored for this affiliate**referralLink**stringrequiredReferral link carrying the new referral id**campaignId**stringrequiredCampaign the referral id belongs to

```json
{
  "referralId": "john122",
  "referralLink": "https://link.example.com/campaign?am_id=john122",
  "campaignId": "6385d230f6d19db03eef6fb2"
}
```
