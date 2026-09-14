> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-ad-account). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get ad account details

**Endpoint:** `GET /ad-publishing/facebook/ad-accounts/:adAccountId`

Retrieve details of a specific Facebook ad account

## Request

**Version**

string

required

API Version

Available options

`v3`

**adAccountId**

string

required

Ad account identifier

**locationId**

string

required

Location identifier

application/json

Details for a single ad account

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredAd account id, prefixed with `act_`**name**stringrequiredAd account name**accountStatus**stringrequiredAccount status**currency**stringrequiredAccount billing currency, ISO 4217**fundingType**stringrequiredHow the account is funded**timezoneName**stringrequiredIANA timezone the account reports in**business**objectOwning Business Manager

```json
{
  "id": "act_357046700569338",
  "name": "Acme - Production",
  "accountStatus": "ACTIVE",
  "currency": "USD",
  "fundingType": "FACEBOOK_EXTENDED_CREDIT",
  "timezoneName": "America/Los_Angeles",
  "business": {
    "id": "153049965367635",
    "name": "Acme Marketing"
  }
}
```
