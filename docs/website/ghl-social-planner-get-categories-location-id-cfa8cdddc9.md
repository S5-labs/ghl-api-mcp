> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-categories-location-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get categories by location id

**Endpoint:** `GET /social-media-posting/:locationId/categories`

Retrieve all categories for a specific location with optional search and pagination

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
  "message": "Fetched Categories by Location ID",
  "results": {
    "count": 3,
    "categories": [
      {
        "name": "Primary",
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#FFFFFF",
        "locationId": "Lx1EI6YIgQYMQi0ytFXv",
        "_id": "Lx1EI6YIgQYMQi0ytFXv",
        "createdBy": "Lx1EI6YIgQYMQi0ytFXv",
        "deleted": false,
        "createdAt": "2023-08-02T00:00:00.000Z",
        "updatedAt": "2023-08-02T00:00:00.000Z"
      }
    ]
  }
}
```
