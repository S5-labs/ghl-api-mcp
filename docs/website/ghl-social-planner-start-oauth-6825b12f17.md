> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-oauth). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Start OAuth Flow (Step 1 of 3)

**Endpoint:** `GET /social-media-posting/oauth/:platform/start`

## OAuth Connection Flow - Step 1: Initiate OAuth

This is the first step in the 3-step OAuth flow to connect a social media account:

1. **Start OAuth** (this endpoint) → User authenticates with the platform
1. **Get Accounts** → Retrieve available pages/channels to connect
1. **Attach Account** → Connect the selected account to your location

### How to Use

Open this API in a browser window (not via cURL) with the required query parameters. The user will be redirected to the platform's OAuth login screen.

### Receiving the OAuth Response

After successful authentication, the OAuth window will post a message back to your application. Listen for this message to get the `accountId` needed for the next step.

```javascript
window.addEventListener('message', function(e) {
  if (e.data && e.data.page === 'social_media_posting') {
    const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data;
    // Use accountId for Step 2: GET /oauth/{locationId}/{platform}/accounts/{accountId}
  }
}, false);
```

### Event Data Response

| Field | Type | Example | Description |
| --- | --- | --- | --- |
| actionType | string | "close" | The action type |
| page | string | "social-media-posting" | Source page identifier |
| platform | string | "facebook" | The OAuth platform |
| placement | string | "placement" | Placement context |
| accountId | string | "658a9b6833b91e0ecb8f3958" | **Use this for Step 2** |
| reconnectAccounts | string[] | ["658a9b...", "efd2da..."] | Accounts that need reconnection |

### Next Step

Use the `accountId` from the response to call:

```text
GET /social-media-posting/oauth/{locationId}/{platform}/accounts/{accountId}
```

### Platform Notes

- **bluesky**: Currently not supported, will return an error
- **tiktok-business**: Uses a separate business OAuth flow

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

Social media platform to connect. Each platform has specific account types:

- **google**: Google Business Profile locations
- **facebook**: Facebook Pages
- **instagram**: Instagram Professional Accounts (Business/Creator)
- **linkedin**: LinkedIn Pages and Profiles
- **tiktok**: TikTok Creator Accounts
- **tiktok-business**: TikTok Business Center Accounts
- **youtube**: YouTube Channels
- **pinterest**: Pinterest Business Accounts
- **threads**: Threads Profiles
- **bluesky**: Bluesky Accounts (currently not supported)

**locationId**

string

required

Location Id

**userId**

string

required

User Id

**page**

string

Page

**reconnect**

string

Reconnect

Redirect to the platform OAuth consent screen
