> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/attach-oauth-accounts). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Connect Account (Step 3 of 3)

**Endpoint:** `POST /social-media-posting/oauth/:locationId/:platform/accounts/:accountId`

## OAuth Connection Flow - Step 3: Connect the Account

This is the final step in the OAuth flow. After retrieving available accounts (Step 2), use this endpoint to connect the selected account to your location.

### OAuth Flow Summary

1. **Start OAuth** → User authenticates with platform
1. **Get Accounts** → Retrieved available pages/channels
1. **Attach Account** (this endpoint) → Connect the selected account

### Request Body

The accepted fields depend on the `platform` path parameter — pick the matching schema in the request body below. Most platforms take the `originId`, `name` and optional `avatar` of the account you selected in Step 2; Google Business Profile takes the full `location` and `account` objects.

> tiktok-business accounts are connected through the TikTok Business flow, not this endpoint.

### After Connection

Once connected, the account will appear in your location's connected accounts and can be used for social media posting.

## Request

**Version**

string

required

API Version

Available options

`v3`

**platform**

string

required

Social media platform. Must match the platform used in the preceding steps of the OAuth flow.

Available options

`google`

`facebook`

`instagram`

`threads`

`bluesky`

`linkedin`

`tiktok`

`tiktok-business`

`youtube`

`pinterest`

**locationId**

string

required

The Location ID where you want to connect this social account

**accountId**

string

required

The OAuth Account ID received from Step 1 (Start OAuth) via the window message event

application/json

- application/json

- Body
- Example (auto)

### Body**required**

The account to connect. The accepted fields depend on the `platform` path parameter.

```json
{
  "type": "page",
  "originId": "244405****11687",
  "name": "JOHN_DEO",
  "avatar": "https://storage.googleapis.com/2ad21ebc23/test"
}
```

application/json

Successful response - Account attached. Response structure varies by platform.

- application/json

- Schema
- Example (auto)

**Schema**

oneOfFacebookTiktok BusinessGoogle Business AccountLinkedinInstagramThreadsYouTubeTiktokBlueskyPinterest**success**booleanrequiredWhether the Facebook page was successfully attached to the requesting location**statusCode**numberrequiredStatus Code**message**stringrequiredHuman-readable message confirming the account was attached**results**objectThe connected account record created (or updated) for the page that was just attached.

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Added Facebook Account",
  "results": {
    "_id": "65f2d989a4f2f1e5322c3856",
    "oAuthId": "u37swmmLbA02zgqKPpxITe2",
    "locationId": "u37swmmLbA02zgqKPpxITe2",
    "platform": "facebook",
    "type": "page",
    "name": "Account Name",
    "active": true
  }
}
```
