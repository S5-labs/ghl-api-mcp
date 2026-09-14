> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-csv-post). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get CSV Post

**Endpoint:** `GET /social-media-posting/:locationId/csv/:id`

Get details of a specific CSV import including its posts

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

Location Id

**id**

string

required

CSV Id

**skip**

string

Number of records to skip

**limit**

string

Maximum number of records to return

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectRequested Results

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Fetched CSV Post",
  "results": {
    "csv": {
      "id": "ve9EPM428h8vShlRW1KT",
      "locationId": "iVrVJ2uoXNF0wzcBzgl5",
      "fileName": "sample.csv",
      "status": "completed",
      "count": 5
    },
    "count": 6,
    "posts": [
      {
        "accountIds": [
          "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
        ],
        "summary": "First post",
        "type": "post"
      }
    ]
  }
}
```
