> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/apply-watermark-to-image). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Apply watermark to an image

**Endpoint:** `POST /social-media-posting/:locationId/watermarks/add-image-watermark`

Apply a watermark to an image using either a specific template ID or by resolving the template bound to a specific connected account.

If the same watermark + image combination has been processed before, the response returns immediately with `status: completed` and the output URL in `message`. Otherwise, processing is queued and the response returns `status: pending` with a `progressId`.

**Rate limits:** This endpoint may be rate-limited to prevent abuse. To resolve a template dynamically at publish time, pass `accountId` — the endpoint will resolve the template bound to that connected account. Use the [Get Accounts](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-account) endpoint to look up account IDs.

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

**templateId**stringTemplate ID to apply. Required if `accountId` is not provided.**accountId**stringConnected account ID — the endpoint will resolve the template bound to this account. Required if `templateId` is not provided. Use the [Get Accounts](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-account) endpoint to look up account IDs.**inputMediaUrl**stringrequiredInput image URL to watermark**mimeType**stringMIME type of the input media**postId**stringOptional post ID to associate the watermark output with**watermarkId**stringOptional cache key to fetch a previously-generated watermark result**updatePost**booleanWhether to update or create the linked post after watermarking

```json
{
  "templateId": "665f1bac78fda9b6c5f48012",
  "accountId": "665f1bac78fda9b6c5f48099",
  "inputMediaUrl": "http://example.com/media.png",
  "mimeType": "image/png",
  "postId": "ve9EPM428h8vShlRW1KT",
  "watermarkId": "ve9EPM428h8vShlRW1KT",
  "updatePost": false
}
```

application/json

Watermark processing initiated or cached result returned

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectAsync processing state

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Watermark preview processing initiated.",
  "results": {
    "progressId": "abc123def456",
    "status": "pending",
    "message": "Watermark preview processing initiated.",
    "outputMediaUrl": "https://storage.googleapis.com/bucket/watermarked.png"
  }
}
```
