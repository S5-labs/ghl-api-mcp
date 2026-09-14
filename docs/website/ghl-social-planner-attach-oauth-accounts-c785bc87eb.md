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

### Request Body by Platform

The request body structure varies depending on the platform:

#### Facebook / Instagram

```json
{
  "type": "page",
  "originId": "244405XXXXX11687",
  "name": "My Facebook Page",
  "avatar": "https://..." // optional
}
```

#### Google Business Profile

```json
{
  "location": {
    "name": "locations/12345",
    "title": "My Business Location",
    "storeCode": "STORE123",
    "isVerified": "ChIJsZQpj1qbXjkRQNDUG4UUx6k"
  },
  "account": {
    "name": "accounts/12345",
    "accountName": "My Business Account",
    "type": "LOCATION_GROUP",
    "verificationState": "VERIFIED",
    "vettedState": "VETTED"
  }
}
```

#### LinkedIn

```json
{
  "type": "page",
  "originId": "urn:li:organization:12345",
  "name": "My LinkedIn Page",
  "avatar": "https://..." // optional
}
```

#### TikTok

```json
{
  "originId": "7234567890123456789",
  "name": "My TikTok Account",
  "avatar": "https://..." // optional
}
```

#### YouTube

```json
{
  "originId": "UCxxxxxxxxxxxxxxxx",
  "name": "My YouTube Channel",
  "avatar": "https://..." // optional
}
```

#### Pinterest

```json
{
  "originId": "123456789",
  "name": "My Pinterest Account",
  "avatar": "https://..." // optional
}
```

### After Connection

Once connected, the account will appear in your location's connected accounts and can be used for social media posting.

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

**locationId**

string

required

The Location ID where you want to connect this social account

**platform**

string

required

Social media platform (must match the platform used in Steps 1 and 2)

Available options

`google`

`facebook`

`instagram`

`linkedin`

`tiktok`

`youtube`

`pinterest`

`threads`

`bluesky`

**accountId**

string

required

The OAuth Account ID received from Step 1 (same as used in Step 2)

application/json

- application/json

- Body
- facebook
- instagram
- google
- linkedin
- tiktok

### Body**required**

Account details to connect. The structure varies by platform - see description above for examples.

Facebook Page

```json
{
  "type": "page",
  "originId": "244405123411687",
  "name": "My Facebook Page",
  "avatar": "https://graph.facebook.com/244405123411687/picture"
}
```

Instagram Professional Account

```json
{
  "type": "page",
  "originId": "17841405123456789",
  "name": "My Instagram Business",
  "avatar": "https://..."
}
```

Google Business Profile

```json
{
  "location": {
    "name": "locations/12345678901234567890",
    "title": "My Business Location",
    "storeCode": "STORE001"
  },
  "account": {
    "name": "accounts/123456789012345678",
    "accountName": "My Business Account",
    "type": "LOCATION_GROUP",
    "verificationState": "VERIFIED",
    "vettedState": "VETTED"
  }
}
```

LinkedIn Page

```json
{
  "type": "page",
  "originId": "urn:li:organization:12345678",
  "name": "My Company Page"
}
```

TikTok Account

```json
{
  "originId": "7234567890123456789",
  "name": "My TikTok",
  "avatar": "https://..."
}
```

application/json

Successful response - Account attached. Response structure varies by platform.

- application/json

- Schema
- Example (auto)

**Schema**

oneOfFacebookInstagramGoogle Business AccountLinkedinTiktokYouTubePinterest**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectRequested Results

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Added Facebook Account",
  "results": {
    "_id": "65f2d989a4f2f1e5322c3856",
    "oAuthId": "u37swmmLbA02zgqKPpxITe2",
    "oldId": "u37swmmLbA02zgqKPpxITe2",
    "locationId": "u37swmmLbA02zgqKPpxITe2",
    "originId": "u37swmmLbA02zgqKPpxITe2",
    "platform": "facebook",
    "type": "page",
    "name": "Account Name",
    "avatar": "u37swmmLbA02zgqKPpxITe2",
    "meta": {
      "pageId": "u37swmmLbA02zgqKPpxITe2",
      "page": {
        "id": "u37swmmLbA02zgqKPpxITe2",
        "name": "Account Name",
        "avatar": "u37swmmLbA02zgqKPpxITe2"
      },
      "storeCode": "122",
      "isVerified": "true",
      "verified": true,
      "protected": true,
      "locationId": "u37swmmLbA02zgqKPpxITe2",
      "accountId": "u37swmmLbA02zgqKPpxITe2",
      "openId": "u37swmmLbA02zgqKPpxITe2",
      "urn": "u37swmmLbA02zgqKPpxITe2",
      "username": "testUser",
      "storefrontAddress": {
        "regionCode": "30021",
        "languageCode": "E001",
        "postalCode": "1221",
        "administrativeArea": "Down Town",
        "locality": "Louis Street",
        "addressLines": [
          "207",
          "county"
        ]
      }
    },
    "active": true,
    "deleted": true,
    "createdAt": "2024-03-14T11:03:37.015Z",
    "updatedAt": "2024-03-14T11:03:37.015Z"
  }
}
```
