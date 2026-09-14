> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-reporting-list). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get reporting list

**Endpoint:** `GET /ad-publishing/facebook/reporting/list`

Retrieve campaigns, ad sets, or ads with their reporting metrics. `listType` selects the entity and changes the item shape; `adsets` and `ads` additionally require `campaignId`. Entities Meta has no insights for are still returned, padded with a fixed zero row that carries fewer fields than a real one. Note `none` is accepted by validation but has no handler and fails with a 409.

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

**listType**

string

required

Reporting list type

Available options

`ads`

`adsets`

`campaigns`

`none`

**startDate**

string

required

Report start date (YYYY-MM-DD)

**endDate**

string

required

Report end date (YYYY-MM-DD)

**campaignId**

string

Campaign identifier (required when listType is adsets or ads)

**type**

string

required

Integration source type

Available options

`AD_MANAGER`

`INTEGRATION`

application/json

The entities and their metrics. The item shape follows `listType`: campaigns are keyed by `_id` and carry `publishingStatus`, ad sets by `adSetId` with a nested `campaign`, and ads by `adId` with `adsetId` and `adsetName`. Only the campaigns branch includes locally stored fields; all three append CDP revenue and contact figures.

- application/json

- Schema
- Example (auto)

**Schema**

- Array [
- ]

```json
[
  {
    "_id": "6888ebcd08b53700119d3c18",
    "name": "Spring Promo",
    "objective": "OUTCOME_LEADS",
    "publishingStatus": "PAUSED",
    "fbCampaignId": "120209705920280122",
    "clicks": "16",
    "cpc": "0.03125",
    "ctr": "2.413273",
    "impressions": "663",
    "spend": "0.5",
    "results": {
      "linkClick": "10",
      "postEngagement": "12"
    },
    "revenue": "0.00",
    "sales": "0",
    "leads": "0",
    "averageRevenue": "0.00",
    "campaignId": "120216900088000122",
    "campaignName": "sales-messaging",
    "reach": "650",
    "frequency": "1.02",
    "dateStart": "2025-09-01",
    "dateStop": "2026-08-19"
  },
  {
    "adSetId": "120229485770350122",
    "name": "Do not touch - Lead form Adset",
    "campaign": {
      "id": "120229485769880122",
      "objective": "OUTCOME_LEADS"
    },
    "campaignId": "120229485769880122",
    "objective": "OUTCOME_LEADS",
    "adAccountId": "act_357046700569338",
    "locationId": "fRMewNQIxSyZ5R4nQyit",
    "promotedObject": {
      "pageId": "196684453527082",
      "smartPseEnabled": false
    },
    "clicks": "32",
    "cpc": "0.03625",
    "ctr": "1.440792",
    "impressions": "2221",
    "spend": "1.16",
    "reach": "2214",
    "frequency": "1.003162",
    "dateStart": "2025-08-01",
    "dateStop": "2026-08-19",
    "results": {
      "lead": "5",
      "linkClick": "22"
    },
    "revenue": "0.00",
    "sales": "0",
    "leads": "0",
    "averageRevenue": "0.00"
  },
  {
    "adId": "120229486180110122",
    "name": "Do not touch - Lead form Ad",
    "adsetId": "120229485770350122",
    "adsetName": "Do not touch - Lead form Adset",
    "campaignId": "120229485769880122",
    "objective": "OUTCOME_LEADS",
    "adAccountId": "act_357046700569338",
    "locationId": "fRMewNQIxSyZ5R4nQyit",
    "promotedObject": {
      "pageId": "196684453527082",
      "smartPseEnabled": false
    },
    "clicks": "32",
    "cpc": "0.03625",
    "ctr": "1.440792",
    "impressions": "2221",
    "spend": "1.16",
    "reach": "2214",
    "frequency": "1.003162",
    "dateStart": "2025-08-01",
    "dateStop": "2026-08-19",
    "results": {
      "lead": "5",
      "linkClick": "22"
    },
    "revenue": "0.00",
    "sales": "0",
    "leads": "4",
    "averageRevenue": "0.00"
  }
]
```
