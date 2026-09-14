> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-reporting). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get reporting data

**Endpoint:** `GET /ad-publishing/google/reporting`

Retrieve aggregated Google Ads reporting metrics for a location

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

**fields**

string[]

required

Reporting fields. Pass as comma-separated values on the wire (e.g. ?fields=impressions,clicks).

Available options

`impressions`

`clicks`

`cost_micros`

`average_cpc`

`conversions`

`average_cpm`

`cost_per_conversion`

`ctr`

**groupBy**

string

Group by period

Available options

`date`

`week`

`month`

**startDate**

string

required

Report start date

**endDate**

string

required

Report end date

**type**

string

required

Integration type

Available options

`AD_MANAGER`

`INTEGRATION`

application/json

Metrics grouped by the requested interval, plus totals. Only the requested `fields` appear.

- application/json

- Schema
- Example (auto)

**Schema**

**grouped**object[]requiredOne entry per time bucket**totals**objectrequiredMetrics summed across every bucket

```json
{
  "grouped": [
    {
      "segments": {
        "week": "2026-08-03"
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
      }
    }
  ],
  "totals": {
    "impressions": 6041,
    "clicks": 180,
    "costMicros": 5421341,
    "averageCpc": 864547.05,
    "conversions": 0,
    "averageCpm": 25877259.57,
    "costPerConversion": 0,
    "ctr": 0.115
  }
}
```
