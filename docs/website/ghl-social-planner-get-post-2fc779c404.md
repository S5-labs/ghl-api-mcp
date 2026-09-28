> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-post). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get post

**Endpoint:** `GET /social-media-posting/:locationId/posts/:id`

Get post

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

Post Id. Accepts either a 24-character post id or a native platform post id (24-hex).

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
  "message": "Fetched Post",
  "results": {
    "post": {
      "_id": "61bb16833b3f2791f9715be2",
      "locationId": "ve9EPM428h8vShlRW1KT",
      "status": "published",
      "insights": {
        "like": 0,
        "share": 0,
        "comment": 0
      }
    }
  }
}
```
