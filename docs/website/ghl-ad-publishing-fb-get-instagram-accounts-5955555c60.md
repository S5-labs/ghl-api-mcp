> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-instagram-accounts). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Instagram accounts for page

**Endpoint:** `GET /ad-publishing/facebook/page/:pageId/instagram`

Retrieve Instagram accounts linked to a specific Facebook page

## Request

**Version**

string

required

API Version

Available options

`v3`

**pageId**

string

required

Facebook page identifier

**locationId**

string

required

Location identifier

**type**

string

Integration type

Available options

`INTEGRATION`

`AD_MANAGER`

application/json

Instagram accounts available as the ad identity for this page, merged from the Business Manager, the page-connected account, and the page-backed fallback. Check `typeOfAccount` before reading `name` or `picture` — they are not present on every entry.

- application/json

- Schema
- Example (auto)

**Schema**

- Array [
- ]

```json
[
  {
    "id": "17841471697713882",
    "name": "ad_manager_primary_insta",
    "picture": "https://scontent.xx.fbcdn.net/v/t51.2885-15/...",
    "typeOfAccount": "Page Connected Instagram Account"
  }
]
```
