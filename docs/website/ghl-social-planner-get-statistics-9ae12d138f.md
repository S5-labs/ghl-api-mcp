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

Location ID (also known as Sub-Account ID) for the business location.

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**profileIds**string[]Array of connected social media account IDs to fetch analytics for. Limited to 100 accounts maximum.**Possible values:** `<= 100`**platforms**string[]Array of social media platforms to filter analytics by. If not provided, all platforms will be included.Available options`facebook``instagram``linkedin``google``pinterest``youtube``tiktok`**currentRange**objectCurrent date range for analytics. If not provided, defaults to the last 7 days (excluding today) with comparison to the previous 7 days.**prevRange**objectComparison date range. If not provided, no comparison will be made.

```json
{
  "profileIds": [
    "6673d4f770801753dcafd7b8_SovchenxzWl9R3OFPgsj_9285776684082983366"
  ],
  "platforms": [
    "facebook",
    "instagram",
    "linkedin",
    "google",
    "pinterest",
    "youtube",
    "tiktok"
  ],
  "currentRange": {
    "startDate": "2025-01-01T00:00:00.000Z",
    "endDate": "2025-01-07T23:59:59.999Z"
  },
  "prevRange": {
    "startDate": "2024-12-25T00:00:00.000Z",
    "endDate": "2024-12-31T23:59:59.999Z"
  }
}
```

application/json

Successfully retrieved analytics data

- application/json

- Schema
- Example (auto)

**Schema**

**results**objectrequiredAnalytics data grouped by metrics and platforms for the requested accounts and date range.**message**stringrequiredHuman-readable status message confirming the analytics were built successfully.**traceId**stringrequiredTrace ID for debugging

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
    "grouping": "daily",
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
