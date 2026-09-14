> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-csv-post). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete CSV Post

**Endpoint:** `DELETE /social-media-posting/:locationId/csv/:csvId/post/:postId`

Delete a specific post from a CSV import

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

**postId**

string

required

CSV Post Id

**csvId**

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
  "message": "Deleted CSV Post",
  "results": {
    "postId": "65f92e55cc884f0d0845e447",
    "csv": {
      "_id": "65f92e55cc884f0d0845e447",
      "status": "completed"
    }
  }
}
```
