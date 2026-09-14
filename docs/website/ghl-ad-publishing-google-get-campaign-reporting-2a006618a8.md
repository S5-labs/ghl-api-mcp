> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-campaign-reporting). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get campaign reporting

**Endpoint:** `GET /ad-publishing/google/reporting/campaign/:campaignId`

Retrieve reporting metrics for a specific Google campaign

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

**startDate**

string

required

Report start date

**endDate**

string

required

Report end date

application/json

Per-day metric rows for the campaign, plus its identity and serving window

- application/json

- Schema
- Example (auto)

**Schema**

**grouped**object[]requiredPer-day metric rows**campaignId**stringrequiredGoogle Ads campaign id**name**stringrequiredCampaign name**publishingStatus**stringrequiredPublishing status held by this product**objective**stringrequiredAdvertising channel the campaign runs on**startTime**stringrequiredWhen the campaign started serving**stopTime**stringrequiredWhen the campaign stopped serving**leads**stringrequiredAttributed leads count, as a string

```json
{
  "grouped": [
    {
      "campaign": {
        "resourceName": "customers/6776452901/campaigns/22209847663",
        "startDate": "2025-02-06",
        "endDate": "2037-12-30"
      },
      "metrics": {
        "impressions": 6041,
        "clicks": 180,
        "costMicros": 5421341,
        "averageCpc": 864547.05,
        "conversions": 0,
        "averageCpm": 25877259.57,
        "costPerConversion": 0,
        "ctr": 0.115
      },
      "segments": {
        "date": "2025-02-07"
      }
    }
  ],
  "campaignId": "22209847663",
  "name": "Spring promotion",
  "publishingStatus": "PAUSED",
  "objective": "SEARCH",
  "startTime": "2025-02-07T07:05:03.891Z",
  "stopTime": "2025-02-10T07:05:03.000Z",
  "leads": "0"
}
```
