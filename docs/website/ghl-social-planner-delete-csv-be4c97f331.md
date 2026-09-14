> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-csv). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete CSV

**Endpoint:** `DELETE /social-media-posting/:locationId/csv/:id`

Delete a CSV import and all its associated posts

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
  "message": "Deleted CSV",
  "results": {
    "csv": {
      "locationId": "ve9EPM428h8vShlRW1KT",
      "fileName": "sample.csv",
      "status": "deleted",
      "count": 5
    }
  }
}
```
