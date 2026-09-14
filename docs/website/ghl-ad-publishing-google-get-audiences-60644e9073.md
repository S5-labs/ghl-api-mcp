> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-audiences). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get audiences

**Endpoint:** `GET /ad-publishing/google/audiences`

Retrieve Google Ads combined audiences for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100, default 100) the response is a paginated `{ audiences, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

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

Page size for a paginated fetch (max 100, defaults to 100). When set, the response is a { audiences, paging } envelope instead of a plain array.

**pageToken**

string

Opaque cursor for the next batch, taken from the previous response paging.next

application/json

A plain array of audiences (default), or a { audiences, paging } envelope when `limit` is provided

- application/json

- Schema
- Example (auto)

**Schema**

oneOfobject[]PaginatedGoogleAudiencesDTOArray [**resourceName**stringrequiredGoogle Ads resource name**id**stringrequiredAudience id**status**stringrequiredAudience status**name**stringrequiredAudience name**scope**stringrequiredScope the audience is defined at**dimensions**objectrequiredInclusion targeting**exclusionDimension**objectrequiredExclusion targeting]

```json
[
  {
    "resourceName": "customers/6776452901/audiences/330214962",
    "id": "330214962",
    "status": "ENABLED",
    "name": "Returning customers",
    "scope": "CUSTOMER",
    "dimensions": {
      "ageRanges": [
        {
          "minAge": 18,
          "maxAge": 64
        }
      ],
      "genders": [
        "MALE"
      ],
      "incomeRanges": [
        "INCOME_RANGE_0_50"
      ],
      "parentalStatuses": [
        "PARENT"
      ],
      "audienceSegments": {
        "customAudiences": [
          "customers/6776452901/customAudiences/901256299"
        ],
        "userLists": [
          "customers/6776452901/userLists/9144367872"
        ],
        "userInterests": [
          "customers/6776452901/userInterests/80276"
        ]
      },
      "isAgeUnknown": true,
      "isHouseHoldIncomeUnknown": true
    },
    "exclusionDimension": {
      "userLists": [
        "customers/6776452901/userLists/8999046675"
      ]
    }
  }
]
```
