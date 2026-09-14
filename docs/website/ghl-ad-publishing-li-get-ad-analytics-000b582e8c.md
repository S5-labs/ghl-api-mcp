> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-analytics). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get ad analytics

**Endpoint:** `GET /ad-publishing/linkedin/reporting`

Retrieve LinkedIn Ads analytics data with configurable pivot and time grouping

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

**pivot**

string

Analytics pivot type

Available options

`ACCOUNT`

`CAMPAIGN`

`CAMPAIGN_GROUP`

`CREATIVE`

**groupBy**

string

Time granularity for analytics

Available options

`day`

`month`

`year`

**startDate**

string

required

Start date in yyyy-mm-dd format

**endDate**

string

required

End date in yyyy-mm-dd format

**entityUrns**

string

Comma-separated list of entity URNs

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

Metrics grouped by the requested pivot, plus totals. Only the requested `fields` appear.

- application/json

- Schema
- Example (auto)

**Schema**

**grouped**object[]requiredOne entry per pivot bucket**totals**objectrequiredMetrics summed across every bucket

```json
{
  "grouped": [
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
      "costInLocalCurrency": "576.05000000000014868"
    }
  ],
  "totals": {
    "impressions": 15230,
    "clicks": 214,
    "oneClickLeads": 8,
    "externalWebsitePostClickConversions": 6,
    "ctr": 1.4,
    "cpc": 0.66,
    "cpm": 9.35,
    "cpl": 17.79,
    "conversionRate": 3.74,
    "costInUsd": 240.45,
    "costInLocalCurrency": 240.45
  }
}
```
