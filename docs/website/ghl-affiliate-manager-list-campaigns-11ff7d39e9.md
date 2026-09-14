> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-campaigns). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Campaigns

**Endpoint:** `GET /affiliate-manager/:locationId/campaigns`

Retrieve the list of affiliate campaigns for a location.

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

**query**

string

Filter campaigns whose name contains this text

**skip**

number

Number of campaigns to skip

**Possible values:** `>= 0`

`0`

**limit**

number

Number of campaigns to return, maximum 100

**Possible values:** `>= 1` and `<= 100`

`10`

**onlyActiveLiveMode**

boolean

Return only campaigns in live mode

`false`

**trackTypes**

string[]

Comma separated track types

Available options

`forms`

`surveys`

`calenders`

`funnels`

`websites`

`store`

`external_source`

`community`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**campaigns**object[]requiredCampaigns for the location**meta**objectrequiredPagination metadata

```json
{
  "campaigns": [
    {
      "_id": "6385d230f6d19db03eef6fb2",
      "locationId": "ve9EPM428h8vShlRW1KT",
      "name": "Summer launch",
      "trackType": "funnels",
      "liveMode": true,
      "currency": "USD",
      "cookieLife": 30,
      "commissionType": "percentage",
      "commission": 10,
      "customer": 12,
      "leads": 34,
      "revenue": 1500,
      "commissionAmount": 150
    }
  ],
  "meta": {
    "count": 42
  }
}
```
