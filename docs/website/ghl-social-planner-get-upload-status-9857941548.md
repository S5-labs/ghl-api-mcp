> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-upload-status). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Upload Status

**Endpoint:** `GET /social-media-posting/:locationId/csv`

Get the status of all CSV imports for a location

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

**skip**

string

Number of records to skip

`0`

**limit**

string

Maximum number of records to return

`10`

**includeUsers**

string

Include user data in response

**isFromTemplate**

string

Filter CSVs imported from template library

**userId**

string

required

User ID

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
  "message": "Fetched CSV Upload Status",
  "results": {
    "csvs": [
      {
        "id": "ve9EPM428h8vShlRW1KT",
        "locationId": "iVrVJ2uoXNF0wzcBzgl5",
        "fileName": "sample.csv",
        "status": "completed",
        "count": 5
      }
    ],
    "count": 6
  }
}
```
