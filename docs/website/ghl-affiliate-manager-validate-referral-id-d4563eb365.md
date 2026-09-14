> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/validate-referral-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Validate Referral Id

**Endpoint:** `GET /affiliate-manager/affiliate-campaign/:locationId/referral-id/validate`

Check whether a referral id is free to use. Referral ids are unique across a location, so a taken id reports as unavailable even when it belongs to a different campaign.

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

**referralId**

string

required

Referral id to check, as it would appear in a referral link

**Possible values:** `>= 3 characters` and `<= 64 characters`, Value must match regular expression `^[A-Za-z0-9_]{3,64}$`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**available**booleanrequiredWhether the referral id is free to use in this location

```json
{
  "available": true
}
```
