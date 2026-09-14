> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-assets). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get assets

**Endpoint:** `GET /ad-publishing/google/assets`

Retrieve Google Ads creative assets for a location. Without `limit` the response is a plain array of assets. When `limit` is provided (max 100, default 100) the response is a paginated `{ assets, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

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

Location identifier

**type**

string

required

Asset type to retrieve

Available options

`CALL`

`SITELINK`

**id**

string

Asset identifier

**advertiserOnly**

string

Advertiser only flag

**limit**

string

Page size for a paginated fetch (max 100, defaults to 100). When set, the response is a { assets, paging } envelope instead of a plain array.

**pageToken**

string

Opaque cursor for the next batch, taken from the previous response paging.next

application/json

A plain array of assets (default), or a { assets, paging } envelope when `limit` is provided

- application/json

- Schema
- Example (auto)

**Schema**

oneOfobject[]PaginatedGoogleAssetsDTOArray [**property name***any]

```json
[
  {
    "resourceName": "customers/6776452901/assets/183948277",
    "type": "SITELINK",
    "linkText": "Book a demo",
    "description1": "Free 30-minute session",
    "description2": "No card required",
    "finalUrls": "https://example.com/demo",
    "source": "ADVERTISER",
    "reviewStatus": "REVIEWED",
    "approvalStatus": "APPROVED",
    "policyTopics": []
  },
  {
    "resourceName": "customers/6776452901/assets/183948299",
    "type": "CALL",
    "phoneNumber": "+14155550132",
    "countryCode": "US",
    "callConversionAction": "customers/6776452901/conversionActions/874396901",
    "source": "ADVERTISER",
    "reviewStatus": "REVIEWED",
    "approvalStatus": "APPROVED",
    "policyTopics": []
  }
]
```
