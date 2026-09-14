> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/list-watermark-templates). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List watermark templates

**Endpoint:** `GET /social-media-posting/:locationId/watermarks`

Retrieve a paginated list of watermark templates for a specific location. Each template exposes the connected accounts it applies to via `accountIds`. Use the [Get Accounts](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-account) endpoint to look up account IDs.

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

**limit**

string

Maximum number of records to return

**skip**

string

Number of records to skip for pagination

**name**

string

Search by template name

application/json

List of watermark templates

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectPaginated list of watermark templates

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Fetched Watermark Templates",
  "results": {
    "watermarks": [
      {
        "_id": "665f1bac78fda9b6c5f48012",
        "watermarkImageUrl": "http://example.com/watermark.png",
        "position": "top-left",
        "scale": 0.5,
        "opacity": 0.7,
        "padding": true,
        "templateName": "DefaultTemplate",
        "locationId": "ve9EPM428h8vShlRW1KT",
        "createdBy": "Lx1EI6YIgQYMQi0ytFXv",
        "accountIds": [
          "507f1f77bcf86cd799439011",
          "507f1f77bcf86cd799439012"
        ],
        "deleted": false,
        "createdAt": "2024-07-24T10:21:00.123Z",
        "updatedAt": "2024-07-24T10:21:00.123Z"
      }
    ],
    "meta": {
      "count": 1,
      "usingLegacy": false
    }
  }
}
```
