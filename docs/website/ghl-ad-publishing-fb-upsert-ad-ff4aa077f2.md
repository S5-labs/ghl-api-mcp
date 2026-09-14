> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-ad). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upsert ad

**Endpoint:** `PUT /ad-publishing/facebook/ads`

Create or update a Facebook ad

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**id**stringAd identifier**locationId**stringrequiredLocation identifier**name**stringAd name**primaryText**stringSingle primary text. Normalised into `primaryTexts` when that array is empty, so send `primaryTexts` instead unless you have exactly one variant.**headline**stringAd-level headline for CAROUSEL ads — used for any card that does not set its own `media[].headline`. SINGLE (image and video) ads take their headline from the `headlines` array instead.**description**stringSingle ad description. SINGLE (image and video) ads take their description from the `descriptions` array, and carousel cards from `media[].description`.**imageUrl**stringAd image URL**mediaType**stringAd media typeAvailable options`SINGLE``CAROUSEL`**media**object[]Media items (images or videos) attached to the ad creative**multiAdvertiserAds**booleanEnable multi-advertiser ads**campaignId**stringrequiredParent campaign ID**adsetId**stringrequiredParent ad set ID**cta**stringCall-to-action button. Valid values depend on the parent campaign objective (and, for sales, the ad set `conversionLocation`) — OUTCOME_LEADS: `APPLY_NOW`, `DOWNLOAD`, `GET_OFFER`, `GET_QUOTE`, `LEARN_MORE`, `SIGN_UP`, `SUBSCRIBE`; OUTCOME_TRAFFIC: `APPLY_NOW`, `BOOK_TRAVEL`, `BUY_NOW`, `CONTACT_US`, `GET_OFFER`, `GET_PROMOTIONS`, `GET_QUOTE`, `LEARN_MORE`, `NO_BUTTON`, `ORDER_NOW`, `SHOP_NOW`, `SIGN_UP`, `SUBSCRIBE`; OUTCOME_ENGAGEMENT: `APPLY_NOW`, `BOOK_TRAVEL`, `CONTACT_US`, `GET_PROMOTIONS`, `GET_QUOTE`, `INQUIRE_NOW`, `LEARN_MORE`, `MESSAGE_PAGE`, `ORDER_NOW`, `SEND_UPDATES`, `SHOP_NOW`, `SIGN_UP`, `SUBSCRIBE`; OUTCOME_SALES with `conversionLocation: messaging`: `APPLY_NOW`, `BOOK_TRAVEL`, `CONTACT_US`, `GET_QUOTE`, `LEARN_MORE`, `MESSAGE_PAGE`, `ORDER_NOW`, `PLAY_GAME`, `SHOP_NOW`, `SIGN_UP`, `SUBSCRIBE`; OUTCOME_SALES with `conversionLocation: website`: `APPLY_NOW`, `BOOK_TRAVEL`, `BUY_TICKETS`, `CONTACT_US`, `GET_OFFER`, `GET_QUOTE`, `GET_SHOWTIMES`, `LEARN_MORE`, `LISTEN_NOW`, `ORDER_NOW`, `PLAY_GAME`, `SHOP_NOW`, `SIGN_UP`, `SUBSCRIBE`, `WATCH_MORE`. Note `BOOK_TRAVEL` is the "Book now" button. Not validated server-side, so values outside this set are forwarded to Facebook and may be rejected there.**conversationFormId**stringConversation form ID**destinationLink**stringDestination link URL**destinationFormId**stringDestination form ID**primaryTexts**object[]Primary text variants. Used by every media type. Supply more than one to run Facebook text variations; with a single entry it becomes the ad message. Prefer this over the singular `primaryText`.**headlines**object[]Headline variants. Applies to SINGLE (image and video) ads only — carousel ads take their per-card headline from `media[].headline`, falling back to the singular `headline`. Supply more than one to run Facebook text variations.**descriptions**object[]Description variants. Applies to SINGLE (image and video) ads only — carousel ads take their per-card description from `media[].description`. Supply more than one to run Facebook text variations.

```json
{
  "id": "ad_123",
  "locationId": "loc_abc123",
  "name": "My Ad Creative",
  "primaryText": "Check out our offer!",
  "headline": "Great Deal",
  "description": "Limited time offer",
  "imageUrl": "https://example.com/img.jpg",
  "mediaType": "SINGLE",
  "media": [
    {
      "src": "https://example.com/image.jpg",
      "thumbnailUrl": "https://example.com/thumb.jpg",
      "selectedPoster": 0,
      "type": "IMAGE",
      "name": "ad_image.jpg"
    }
  ],
  "multiAdvertiserAds": false,
  "campaignId": "camp_123",
  "adsetId": "adset_123",
  "cta": "LEARN_MORE",
  "conversationFormId": "conv_123",
  "destinationLink": "https://example.com",
  "destinationFormId": "form_123",
  "primaryTexts": [
    {
      "text": "Automation Test Primary Text"
    }
  ],
  "headlines": [
    {
      "text": "Automation Test Headline"
    },
    {
      "text": "Automation Test Headline1"
    }
  ],
  "descriptions": [
    {
      "text": "Automation Test Description"
    }
  ]
}
```

application/json

The saved ad

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
