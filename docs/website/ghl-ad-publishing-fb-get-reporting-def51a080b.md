> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-reporting). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get reporting data

**Endpoint:** `GET /ad-publishing/facebook/reporting`

Retrieve aggregated Facebook ad reporting metrics for a location. `grouped` holds one row per `groupBy` period, or a single row covering the whole range when `groupBy` is omitted, and `totals` aggregates across them. Both objects only carry the metrics named in `fields`. Be aware that ratio metrics (`cpm`, `ctr`, `frequency`) are summed rather than weighted in `totals`, and that `cost_per_conversion` and `cost_per_result` are placeholders that always read `0` — their real values live under `costPerConversion` and `costPerResult`.

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

`spend`

`cpc`

`cost_per_conversion`

`conversions`

`results`

`cost_per_result`

`cpm`

`reach`

`frequency`

`ctr`

**groupBy**

string

Time grouping interval

Available options

`day`

`week`

`month`

**startDate**

string

required

Report start date (YYYY-MM-DD)

**endDate**

string

required

Report end date (YYYY-MM-DD)

**type**

string

required

Integration source type

Available options

`AD_MANAGER`

`INTEGRATION`

application/json

Per-period rows and their aggregate totals

- application/json

- Schema
- Example (auto)

**Schema**

**grouped**object[]requiredOne row per period when `groupBy` is given, otherwise a single row covering the whole range.**totals**objectrequiredAggregates across every row in `grouped`

```json
{
  "grouped": [
    {
      "dateStart": "2026-03-01",
      "dateStop": "2026-03-31",
      "locationId": "fRMewNQIxSyZ5R4nQyit",
      "accountId": "act_357046700569338",
      "impressions": "99873",
      "clicks": "2304",
      "spend": "41.47",
      "cpc": "0.017999",
      "cpm": "0.415227",
      "ctr": "2.413273",
      "reach": "650",
      "frequency": "1.02",
      "conversions": 61,
      "results": {
        "lead": 61,
        "linkClick": 1940,
        "onsiteConversion.leadGrouped": 61
      },
      "costPerConversion": 0.679836,
      "costPerResultBreakdown": {
        "lead": 0.679836,
        "linkClick": 0.021376
      }
    }
  ],
  "totals": {
    "impressions": "298574.00",
    "clicks": "5150.00",
    "spend": "115.94",
    "cpc": "0.02",
    "cpm": "96.04",
    "ctr": "4.21",
    "reach": "650.00",
    "frequency": "1.02",
    "conversions": "255.00",
    "cost_per_conversion": 0,
    "costPerConversion": "0.45",
    "results": "34315.00",
    "resultsBreakdown": {
      "lead": "255",
      "linkClick": "4236"
    },
    "cost_per_result": 0,
    "costPerResult": "0.00",
    "costPerResultBreakdown": {
      "lead": "0.4391",
      "linkClick": "0.0273"
    }
  }
}
```
