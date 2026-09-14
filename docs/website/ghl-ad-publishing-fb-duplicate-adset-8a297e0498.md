> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-duplicate-adset). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Duplicate ad set

**Endpoint:** `POST /ad-publishing/facebook/adsets/:adSetId/duplicate`

Duplicate an existing Facebook ad set

## Request

**Version**

string

required

API Version

Available options

`v3`

**adSetId**

string

required

Ad set identifier

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

The duplicated ad set as a new draft, with copies of its ads

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredAd set identifier**name**stringrequiredAd set name**campaignId**stringrequiredParent campaign id**fbAdSetId**stringFacebook ad set id, set once published**publishingStatus**stringrequiredPublishing status. On a published entity this is not the state you asked for but the `effective_status` Meta reports, mapped back — a pause or resume re-reads it live, so an ad awaiting review comes back `IN_REVIEW` rather than `PAUSED` or `PUBLISHED`. Any effective status this service does not recognise also maps to `IN_REVIEW`.Available options`DRAFT``SCHEDULED``PUBLISHING``PUBLISHED``PAUSED``IN_REVIEW``WITH_ISSUES``REJECTED``ARCHIVED``FAILED`**fbError**stringnullablePublish error from Facebook. `null` on reads when there is none.**pageId**stringrequiredPage the ads run under**instagramActorId**stringnullableInstagram account the ads run under. `null` when not linked.**messagingPlatforms**string[]requiredMessaging destinations for click-to-message ads. Empty for other conversion locations.**conversionLocation**stringWhere the conversion happens**budget**objectrequiredBudget configuration**audience**objectrequiredTargeting**unpublishedChanges**booleanWhether the ad set has edits not yet published**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at**ads**object[]requiredAds in this ad set

```json
{
  "id": "6a323f3f4454921db1498cd8",
  "name": "Ad set 1",
  "campaignId": "6a323f3e4454921db1498ccf",
  "fbAdSetId": "120250378906150122",
  "publishingStatus": "PUBLISHED",
  "fbError": null,
  "pageId": "196684453527082",
  "instagramActorId": null,
  "messagingPlatforms": [],
  "conversionLocation": "on_ad",
  "budget": {
    "budgetType": "DAILY",
    "amount": 1,
    "actualAmount": 1
  },
  "audience": {
    "genders": [
      0
    ],
    "geoLocations": [
      {
        "key": "IN",
        "name": "India",
        "type": "country",
        "selectionType": "include",
        "radius": 17,
        "radiusUnit": "km",
        "geometry": {
          "location": {
            "lat": 20.593684,
            "lng": 78.96288
          },
          "locationType": "APPROXIMATE"
        }
      }
    ],
    "ageMin": 18,
    "ageMax": 65,
    "interests": [
      {
        "id": "6016286626383",
        "name": "Facebook access (mobile): tablets",
        "type": "behaviors"
      }
    ],
    "placements": {
      "facebook": [
        "feed",
        "story"
      ],
      "instagram": [
        "reels"
      ],
      "messenger": [
        "messenger_home"
      ]
    },
    "placementType": "manual"
  },
  "unpublishedChanges": false,
  "createdAt": "2026-06-17T06:31:27.129Z",
  "updatedAt": "2026-08-19T11:42:35.835Z",
  "ads": [
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
  ]
}
```
