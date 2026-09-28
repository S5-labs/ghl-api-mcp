> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/update-watermark). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update a watermark template by ID

**Endpoint:** `PUT /social-media-posting/:locationId/watermarks/:templateId`

Update the config on an existing watermark template — image URL, position, scale, opacity, padding, template name, or the connected accounts it applies to. Updating `accountIds` re-binds the template to a different set of accounts; use the [Get Accounts](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-account) endpoint to look up account IDs.

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

- application/json

- Body
- Example (auto)

### Body**required**

**watermarkImageUrl**stringURL of the watermark image. Must be a PNG or JPG file, minimum 200x200 pixels, and no larger than 5 MB.**position**stringWatermark position. Position can be one of the following values: top-left, top-center, top-right, left-center, center, right-center, bottom-left, bottom-center, bottom-rightAvailable options`top-left``top-right``bottom-left``bottom-right``center``top-center``bottom-center``left-center``right-center`**scale**numberScale factor for watermark. scale value must be between 0 - 1**opacity**numberWatermark opacity. opacity value must be between 0 - 1**padding**booleanWhether padding is applied around the watermark**templateName**stringName of the watermark template**accountIds**string[]Connected account IDs to re-bind this template to. Sending this replaces the current binding entirely. Use the [Get Accounts](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-account) endpoint to look up account IDs.**deleted**booleanSet true to soft-delete this template

```json
{
  "watermarkImageUrl": "http://example.com/watermark.png",
  "position": "top-left",
  "scale": 0.5,
  "opacity": 0.7,
  "padding": true,
  "templateName": "DefaultTemplate",
  "accountIds": [
    "507f1f77bcf86cd799439011",
    "507f1f77bcf86cd799439012"
  ],
  "deleted": false
}
```

application/json

Watermark template successfully updated.

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
