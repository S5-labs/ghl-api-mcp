> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-watermark-template). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create a watermark template

**Endpoint:** `POST /social-media-posting/:locationId/watermarks`

Create a new reusable watermark template for a location. The template stores the watermark image URL, position, scale, opacity, padding, and the connected accounts it applies to.

At post-publish time, the template is resolved for a given connected account via the `accountIds` binding — the `accountId` you provide here maps a connected social account to this template. To fetch account IDs, use the [Get Accounts](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-account) endpoint.

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**watermarkImageUrl**stringrequiredURL of the watermark image. Must be a PNG or JPG file, minimum 200x200 pixels, and no larger than 5 MB.**position**stringrequiredWatermark position on the target imageAvailable options`top-left``top-center``top-right``left-center``center``right-center``bottom-left``bottom-center``bottom-right`**scale**numberrequiredScale factor between 0 and 1**opacity**numberrequiredOpacity between 0 and 1**padding**booleanrequiredWhether padding is applied around the watermark**templateName**stringrequiredName of the watermark template**accountIds**string[]requiredConnected account IDs to bind this template to. These IDs map user accounts to this template at post-publish time. Use the [Get Accounts](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-account) endpoint to look up account IDs.

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
  ]
}
```

application/json

Watermark template successfully created.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectWatermark template

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Fetched Watermark Template",
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
