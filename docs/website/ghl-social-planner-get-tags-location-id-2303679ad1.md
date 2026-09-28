> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-tags-location-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get tags by location ID

**Endpoint:** `GET /social-media-posting/:locationId/tags`

Retrieve all tags for a specific location with optional search and pagination

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

**searchText**

string

Search text string

**limit**

string

Limit

**skip**

string

Skip

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
  "message": "Fetched Tags by Location ID",
  "results": {
    "tags": [
      {
        "tag": "Primary Tag",
        "locationId": "Lx1EI6YIgQYMQi0ytFXv",
        "_id": "Lx1EI6YIgQYMQi0ytFXv",
        "createdBy": "Lx1EI6YIgQYMQi0ytFXv",
        "deleted": false,
        "createdAt": "2023-08-02T00:00:00.000Z",
        "updatedAt": "2023-08-02T00:00:00.000Z"
      }
    ],
    "count": 3
  }
}
```
