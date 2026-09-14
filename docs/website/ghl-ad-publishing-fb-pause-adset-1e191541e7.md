> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-pause-adset). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Pause ad set

**Endpoint:** `POST /ad-publishing/facebook/adsets/:adSetId/pause`

Pause a running Facebook ad set

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

The campaign with its ad sets and their ads

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredCampaign identifier**name**stringrequiredCampaign name**locationId**stringrequiredLocation identifier**fbAdAccountId**stringrequiredAd account the campaign belongs to**fbCampaignId**stringFacebook campaign id, set once published**objective**stringrequiredCampaign objective**specialAdCategories**string[]requiredSpecial ad categories declared for the campaign**publishingStatus**stringrequiredPublishing status of the campaign itself. Independent of its children — pausing one ad set leaves the campaign `PUBLISHED`.Available options`DRAFT``SCHEDULED``PUBLISHING``PUBLISHED``PAUSED``IN_REVIEW``WITH_ISSUES``REJECTED``ARCHIVED``FAILED`**fbError**stringnullableDespite the name this is not always an error. Reads return `null` when there is nothing to report and the upsert returns `""`, but pausing an ad set or an ad overwrites it with an informational notice — `One or more adsets are paused` or `One or more ads are paused` — which the matching resume clears back to `null`. Treat it as a status line, not a failure signal.**source**stringrequiredWhere the campaign was created from**meta**objectAncillary campaign metadata**unpublishedChanges**booleanWhether the campaign has edits not yet published**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at**adsets**object[]requiredAd sets with their ads

```json
{
  "id": "6a323f3e4454921db1498ccf",
  "name": "Spring promotion",
  "locationId": "fRMewNQIxSyZ5R4nQyit",
  "fbAdAccountId": "act_357046700569338",
  "fbCampaignId": "120250378905720122",
  "objective": "OUTCOME_LEADS",
  "specialAdCategories": [
    "NONE"
  ],
  "publishingStatus": "DRAFT",
  "fbError": null,
  "source": "AD_MANAGER",
  "meta": {
    "evaluate": "{\"opportunityScore\":25,\"band\":\"Low\",\"categories\":[],\"fixItems\":[],\"sacCompliance\":{\"applicable\":false}}"
  },
  "unpublishedChanges": false,
  "createdAt": "2026-06-17T06:31:26.599Z",
  "updatedAt": "2026-08-19T11:45:39.340Z",
  "adsets": [
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
  ]
}
```
