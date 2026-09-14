> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-statistics). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Social Media Statistics

**Endpoint:** `POST /social-media-posting/statistics`

Retrieve analytics data for multiple social media accounts. Supports custom date ranges for both the current period and a comparison period. If no date ranges are provided, defaults to the last 7 days (excluding today) with comparison to the previous 7 days.

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

application/json

- application/json

- Body
- default-behavior
- custom-range-with-comparison
- custom-range-without-comparison

### Body**required**

**profileIds**string[]requiredArray of connected social media account IDs to fetch analytics for. This can be found as 'profileId' in /accounts api.**Possible values:** `>= 1`, `<= 100`**platforms**string[]Array of social media platforms to filter analytics by. If not provided, all platforms will be included. NOTE: Linkedin (PAGE only) and Tiktok (BUSINESS only) are supported.Available options`facebook``instagram``linkedin``google``pinterest``youtube``tiktok`**currentRange**objectCustom date range for the current analytics period. If omitted, defaults to the last 7 days (excluding today) with automatic comparison to the previous 7 days.**prevRange**objectComparison date range. Can only be provided when currentRange is also present. If omitted while currentRange is present, no comparison data is returned.

Default behavior (backward compatible, no date ranges)

```json
{
  "profileIds": [
    "67a5a9aa776c837de4aa5b12"
  ],
  "platforms": [
    "facebook",
    "instagram"
  ]
}
```

Custom date range with comparison

```json
{
  "profileIds": [
    "67a5a9aa776c837de4aa5b12"
  ],
  "platforms": [
    "facebook",
    "instagram"
  ],
  "currentRange": {
    "startDate": "2025-03-01T00:00:00.000Z",
    "endDate": "2025-03-31T23:59:59.999Z"
  },
  "prevRange": {
    "startDate": "2025-02-01T00:00:00.000Z",
    "endDate": "2025-02-28T23:59:59.999Z"
  }
}
```

Custom date range without comparison

```json
{
  "profileIds": [
    "67a5a9aa776c837de4aa5b12"
  ],
  "platforms": [
    "facebook",
    "instagram"
  ],
  "currentRange": {
    "startDate": "2025-03-01T00:00:00.000Z",
    "endDate": "2025-03-31T23:59:59.999Z"
  }
}
```

application/json

Successfully retrieved analytics data

- application/json

- Schema
- Example (auto)

**Schema**

**results**objectAnalytics data grouped by metrics and platforms**message**stringSuccess message indicating the analytics were built successfully**traceId**stringUnique identifier for tracking this request

```json
{
  "results": {
    "dayRange": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "totals": {
      "posts": 0,
      "likes": 0,
      "followers": 0,
      "impressions": 0,
      "comments": 0
    },
    "postPerformance": {
      "posts": {
        "google": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "impressions": [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "likes": [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "comments": [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "breakdowns": {
      "posts": {
        "total": 0,
        "totalChange": 0,
        "platforms": {
          "google": {
            "value": 0,
            "change": 0
          }
        }
      },
      "impressions": {
        "total": 0,
        "totalChange": 0,
        "platforms": {
          "google": {
            "value": 0,
            "change": 0
          }
        }
      },
      "reach": {
        "total": 0,
        "totalChange": 0,
        "platforms": {
          "google": {
            "value": 0,
            "change": 0
          }
        }
      },
      "engagement": {
        "google": {
          "likes": 0,
          "comments": 0,
          "shares": 0,
          "change": 0
        }
      }
    },
    "platformTotals": {
      "impressions": {
        "google": {
          "total": 0,
          "series": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      },
      "followers": {
        "google": {
          "total": 0,
          "series": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      },
      "likes": {
        "google": {
          "total": 0,
          "series": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      }
    },
    "demographics": {
      "gender": {
        "totals": {
          "male": {
            "total": 0,
            "percentage": 0
          },
          "female": {
            "total": 0,
            "percentage": 0
          },
          "unknown": {
            "total": 0,
            "percentage": 0
          }
        }
      },
      "age": {
        "totals": {
          "13-17": 0,
          "18-24": 0,
          "25-34": 0,
          "35-44": 0,
          "45-54": 0,
          "55-64": 0,
          "65+": 0
        }
      }
    }
  },
  "message": "Analytics Built Successfully",
  "traceId": "42fc8dd8-d55b-475f-944f-9efb90d77564"
}
```
