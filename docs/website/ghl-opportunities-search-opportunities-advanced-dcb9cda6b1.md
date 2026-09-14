> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/search-opportunities-advanced). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Search Opportunities

**Endpoint:** `POST /opportunities/search`

Search Opportunities based on combinations of advanced filters. Documentation Link - [https://doc.clickup.com/8631005/d/h/87cpx-424216/7bf11bc9b94f80f](https://doc.clickup.com/8631005/d/h/87cpx-424216/7bf11bc9b94f80f)

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation Id**query**stringrequiredFull-text search query string (max 75 characters)**limit**numberrequiredMaximum number of results to return per page**page**numberrequiredPage number (0-indexed)**searchAfter**string[]requiredSearch-after cursor values for deep pagination**additionalDetails**objectrequiredFlags to include additional related entities in the response

```json
{
  "locationId": "i2SpAtBVHSVea1sL6oah",
  "query": "john@deo.com",
  "limit": 20,
  "page": 0,
  "searchAfter": [
    1625203104328,
    "yWQobCRIhRguQtD2llvk"
  ],
  "additionalDetails": {
    "notes": false,
    "tasks": false,
    "calendarEvents": false
  }
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**opportunities**object[]List of opportunities matching the search criteria**total**numberrequiredTotal number of opportunities matching the query**stageAggregations**object[]Per-stage totals when pipeline filter is present**aggregations**objectAggregation results keyed by aggregation name

```json
{
  "opportunities": [],
  "total": 100,
  "stageAggregations": [],
  "aggregations": {}
}
```
