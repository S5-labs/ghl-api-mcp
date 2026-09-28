> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-watermark). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete a watermark template by ID

**Endpoint:** `DELETE /social-media-posting/:locationId/watermarks/:templateId`

Soft-delete a watermark template. The template is marked as deleted and no longer applies at post-publish time, but the record is preserved in the database. Any accounts previously bound via `accountIds` are released and become eligible for other templates.

## Request

**Version**

string

required

API Version

Available options

`v3`

**templateId**

string

required

Watermark template ID

**locationId**

string

required

Location ID

application/json

Watermark template successfully marked as deleted.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectRequested Results

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Created Watermark Image",
  "results": {
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
}
```
