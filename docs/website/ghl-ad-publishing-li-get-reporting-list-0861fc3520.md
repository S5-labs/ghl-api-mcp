> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-reporting-list). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get reporting list

**Endpoint:** `GET /ad-publishing/linkedin/reporting/list`

Retrieve a list of LinkedIn campaigns or campaign groups with reporting data

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

Location ID

**listType**

string

required

List type

Available options

`campaignGroups`

`campaigns`

`ads`

**campaignId**

string

required

Campaign ID

**campaignGroupId**

string

required

Campaign group ID

**startDate**

string

required

Start date in yyyy-mm-dd format

**endDate**

string

required

End date in yyyy-mm-dd format

**fields**

string[]

Reporting fields. Pass as comma-separated values on the wire (e.g. ?fields=impressions,clicks).

Available options

`clicks`

`oneClickLeads`

`costInLocalCurrency`

`impressions`

`costInUsd`

`ctr`

`cpc`

`cpm`

`cpl`

`externalWebsitePostClickConversions`

`conversionRate`

application/json

Metrics per entity for the period. Identity fields vary with `listType`.

- application/json

- Schema
- Example (auto)

**Schema**

- Array [
- ]

```json
[
  {
    "impressions": 15230,
    "clicks": 214,
    "oneClickLeads": 8,
    "externalWebsitePostClickConversions": 6,
    "ctr": 1.4,
    "cpc": 0.66,
    "cpm": 9.35,
    "cpl": 17.79,
    "conversionRate": 3.74,
    "pivotValues": [
      "urn:li:sponsoredAccount:509444880"
    ],
    "dateStart": "2026-07-01",
    "dateEnd": "2026-07-31",
    "costInUsd": "576.049999999999648674",
    "costInLocalCurrency": "576.05000000000014868",
    "_id": "693c9998ce9aa51d56fa2c7a",
    "name": "Q3 demand generation",
    "publishingStatus": "PAUSED",
    "adCampaignGroupId": "807183436",
    "adCampaignId": "693c99a8682f9414fbd27580",
    "adId": "994458886",
    "campaignName": "48 hours leads"
  }
]
```
