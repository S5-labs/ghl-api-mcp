> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-categories-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get categories by id

**Endpoint:** `GET /social-media-posting/:locationId/categories/:id`

Retrieve a specific category by its ID

## Request

**Authorization**

string

required

Access Token

**Version**

string

required

API Version

Available options

`v3`

**id**

string

required

Category Id

**locationId**

string

required

Location Id

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
  "message": "Fetched Category",
  "results": {
    "category": {
      "name": "Primary",
      "primaryColor": "#32a852",
      "secondaryColor": "#32a852",
      "locationId": "Lx1EI6YIgQYMQi0ytFXv",
      "_id": "Lx1EI6YIgQYMQi0ytFXv",
      "createdBy": "Lx1EI6YIgQYMQi0ytFXv",
      "deleted": false,
      "message": "Category not found",
      "createdAt": "2023-08-02T00:00:00.000Z",
      "updatedAt": "2023-08-02T00:00:00.000Z"
    }
  }
}
```
