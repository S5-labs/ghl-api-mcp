> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-oauth-accounts). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Available Accounts (Step 2 of 3)

**Endpoint:** `GET /social-media-posting/oauth/:locationId/:platform/accounts/:accountId`

## OAuth Connection Flow - Step 2: Get Available Accounts

After completing OAuth authentication (Step 1), use this endpoint to retrieve the list of available pages, channels, or locations that can be connected.

### OAuth Flow Position

1. **Start OAuth** → User authenticates, returns `accountId`
1. **Get Accounts** (this endpoint) → Lists available pages/channels to connect
1. **Attach Account** → Connect the selected account

### What This Returns

The response varies by platform:

| Platform | Returns |
| --- | --- |
| **facebook** | List of Facebook Pages the user manages |
| **instagram** | List of Instagram Professional Accounts (linked to Facebook Pages) |
| **google** | Google Business Profile locations |
| **linkedin** | LinkedIn Pages and Profile |
| **tiktok** | TikTok Creator account info |
| **tiktok-business** | TikTok Business Center accounts |
| **youtube** | YouTube Channels |
| **pinterest** | Pinterest Business accounts and boards |
| **threads** | Threads profiles |

### Next Step

From the response, select the account/page you want to connect and use its details in Step 3:

```text
POST /social-media-posting/oauth/{locationId}/{platform}/accounts/{accountId}
```

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

**search**

string

Search term to filter accounts/pages by name. Useful when the user has many pages to choose from.

application/json

Returns available accounts/pages/channels that can be connected. Response structure varies by platform - see examples below.

- application/json

- Schema
- Example (auto)

**Schema**

oneOfFacebookTiktok BusinessGoogle Business AccountLinkedinInstagramThreadsYouTubeBlueskyTiktokPinterest**success**booleanrequiredWhether the page lookup completed without an upstream API error**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectThe Facebook Pages available to connect. See `GetFacebookAccountsSchema` for the full field breakdown.

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Fetched Facebook Account",
  "results": {
    "pages": [
      {
        "id": "u37swmmLbA02zgqKPpxITe2",
        "name": "FB Page",
        "isOwned": true,
        "isConnected": false
      }
    ]
  }
}
```
