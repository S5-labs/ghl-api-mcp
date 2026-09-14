> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-audience-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get audience by ID

**Endpoint:** `GET /ad-publishing/google/audiences/:audienceId`

Retrieve a specific Google Ads combined audience by ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**audienceId**

string

required

Audience identifier

**locationId**

string

required

Location identifier

application/json

The combined audience

- application/json

- Schema
- Example (auto)

**Schema**

**resourceName**stringrequiredGoogle Ads resource name**id**stringrequiredAudience id**status**stringrequiredAudience status**name**stringrequiredAudience name**scope**stringrequiredScope the audience is defined at**dimensions**objectrequiredInclusion targeting**exclusionDimension**objectrequiredExclusion targeting

```json
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
```
