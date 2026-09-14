> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-conversion-goals). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get conversion goals

**Endpoint:** `GET /ad-publishing/google/conversion-goals`

Retrieve Google Ads conversion goals for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100, default 100) the response is a paginated `{ conversionGoals, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

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

**limit**

string

Page size for a paginated fetch (max 100, defaults to 100). When set, the response is a { conversionGoals, paging } envelope instead of a plain array.

**pageToken**

string

Opaque cursor for the next batch, taken from the previous response paging.next

application/json

A plain array of conversion goals (default), or a { conversionGoals, paging } envelope when `limit` is provided

- application/json

- Schema
- Example (auto)

**Schema**

oneOfobject[]PaginatedGoogleConversionGoalsDTOArray [**property name***any]

```json
[
  {
    "category": "PURCHASE",
    "isCustomConversionGoal": false,
    "verificationStatus": "VERIFIED",
    "issueCount": 0
  },
  {
    "category": "SUBMIT_LEAD_FORM",
    "isCustomConversionGoal": false,
    "verificationStatus": "UNVERIFIED",
    "issueCount": 2
  },
  {
    "category": "Demo booked",
    "isCustomConversionGoal": true,
    "verificationStatus": "PENDING",
    "issueCount": 0
  }
]
```
