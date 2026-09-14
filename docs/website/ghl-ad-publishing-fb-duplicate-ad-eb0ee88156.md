> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-duplicate-ad). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Duplicate ad

**Endpoint:** `POST /ad-publishing/facebook/ads/:adId/duplicate`

Duplicate an existing Facebook ad

## Request

**Version**

string

required

API Version

Available options

`v3`

**adId**

string

required

Ad identifier

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation identifier

```json
{
  "locationId": "HChooFuiyPpVYzeJ4HMe"
}
```

application/json

The duplicated ad, as a new draft

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredAd identifier**name**stringrequiredAd name**campaignId**stringrequiredParent campaign id**adsetId**stringrequiredParent ad set id**fbAdId**stringFacebook ad id, set once published**publishingStatus**stringrequiredPublishing status. On a published entity this is not the state you asked for but the `effective_status` Meta reports, mapped back — a pause or resume re-reads it live, so an ad awaiting review comes back `IN_REVIEW` rather than `PAUSED` or `PUBLISHED`. Any effective status this service does not recognise also maps to `IN_REVIEW`.Available options`DRAFT``SCHEDULED``PUBLISHING``PUBLISHED``PAUSED``IN_REVIEW``WITH_ISSUES``REJECTED``ARCHIVED``FAILED`**fbError**stringnullablePublish error from Facebook. `null` on reads when there is none.**mediaType**stringrequiredCreative format**cta**stringCall-to-action button**multiAdvertiserAds**booleanrequiredWhether multi-advertiser ads are enabled**primaryTexts**object[]requiredPrimary text variants. Used by SINGLE image and video ads.**headlines**object[]requiredHeadline variants**descriptions**object[]requiredDescription variants**primaryText**stringSingle primary text. Carried alongside `primaryTexts`, mirroring its first entry.**headline**stringSingle headline. Used by carousel ads; mirrors the first `headlines` entry otherwise.**description**stringSingle description**media**object[]requiredCreative media**destinationFormId**stringInstant form the ad routes to, when the conversion location is on-ad**destinationLink**stringnullableClick destination. `null` when the ad routes to an instant form instead.**unpublishedChanges**booleanWhether the ad has edits not yet published**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at

```json
{
  "id": "6a323f3f4454921db1498ce1",
  "name": "Ad 1",
  "campaignId": "6a323f3e4454921db1498ccf",
  "adsetId": "6a323f3f4454921db1498cd8",
  "fbAdId": "120250378908850122",
  "publishingStatus": "PUBLISHED",
  "fbError": null,
  "mediaType": "SINGLE",
  "cta": "GET_OFFER",
  "multiAdvertiserAds": true,
  "primaryTexts": [
    {
      "text": "Book a free demo",
      "_id": "6a3245204454921db1499735"
    }
  ],
  "headlines": [
    {
      "text": "Book a free demo",
      "_id": "6a3245204454921db1499735"
    }
  ],
  "descriptions": [
    {
      "text": "Book a free demo",
      "_id": "6a3245204454921db1499735"
    }
  ],
  "primaryText": "Get an instant estimate",
  "headline": "Free home valuation",
  "description": "Fast and hassle-free",
  "media": [
    {
      "type": "image",
      "src": "https://staging.files.leadconnectorhq.com/file/abc/def.jpeg",
      "name": "creative.jpeg",
      "_id": "6a859661867e604d24f4d73d"
    }
  ],
  "destinationFormId": "36267736432839880",
  "destinationLink": null,
  "unpublishedChanges": false,
  "createdAt": "2026-06-17T06:31:27.661Z",
  "updatedAt": "2026-08-19T11:45:39.340Z"
}
```
