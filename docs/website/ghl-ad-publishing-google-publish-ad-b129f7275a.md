> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-publish-ad). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Publish ad

**Endpoint:** `POST /ad-publishing/google/ads/:adId/publish`

Publish a Google ad and push it live

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

The campaign moved to PUBLISHING. Returns the raw document, so the id is `_id` and `adGroups` are not populated.

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredCampaign identifier, as `_id` rather than `id`**__v**numberrequiredMongoose internal version key**name**stringrequiredCampaign name**locationId**stringrequiredLocation identifier**googleAdAccountId**stringrequiredGoogle Ads customer id**advertisingChannelType**stringrequiredAdvertising channelAvailable options`SEARCH``DEMAND_GEN`**publishingStatus**stringrequiredStatus after the publish request, normally `PUBLISHING`Available options`DRAFT``SCHEDULED``PUBLISHED``PUBLISHING``FAILED``IN_REVIEW``PAUSED``ARCHIVED``WITH_ISSUES``REJECTED`**source**stringrequiredWhere the campaign was created from**budget**objectrequiredBudget configuration**networkSettings**objectrequiredNetwork placement settings**biddingStrategy**objectrequiredBidding configuration. `value` is omitted for strategies that do not take a target.**assets**objectrequiredAttached assets by kind**audience**objectrequiredCampaign level targeting**adSchedule**object[]requiredAd scheduling windows**meta**objectAncillary campaign metadata**googleError**stringnullablePublish error from Google, null when the request was accepted**isEuPoliticalAds**booleanrequiredWhether the campaign is declared as EU political advertising**createdBy**stringrequiredUser who created the campaign**updatedBy**stringrequiredUser who last updated the campaign**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at

```json
{
  "_id": "6a8438b2b112242a53b1ea6a",
  "__v": 6,
  "name": "Spring promotion",
  "locationId": "fRMewNQIxSyZ5R4nQyit",
  "googleAdAccountId": "6776452901",
  "advertisingChannelType": "SEARCH",
  "publishingStatus": "PUBLISHING",
  "source": "AD_MANAGER",
  "budget": {
    "budgetType": "DAILY",
    "amount": 50,
    "scheduleStartDate": "2026-08-18T00:00:00.000Z",
    "scheduleEndDate": "2026-09-18T00:00:00.000Z"
  },
  "networkSettings": {
    "targetSearchNetwork": true,
    "targetContentNetwork": false
  },
  "biddingStrategy": {
    "type": "MAXIMIZE_CONVERSIONS",
    "value": 0
  },
  "assets": {
    "calls": [],
    "sitelinks": [],
    "leadForm": "",
    "images": []
  },
  "audience": {
    "locales": [
      {
        "name": "English",
        "key": "1000",
        "id": "1000",
        "resourceName": "languageConstants/1000"
      }
    ],
    "geoLocations": [
      {
        "key": "geoTargetConstants/2840",
        "id": "ChIJOwg_06VPwokRYv534QaPC8g",
        "name": "New York",
        "countryName": "United States",
        "type": "city",
        "radius": 25,
        "radiusUnit": "mi",
        "selectionType": "include",
        "resourceName": "customers/123/geoTargetConstants/2840",
        "placeId": "ChIJOwg_06VPwokRYv534QaPC8g",
        "formattedAddress": "New York, NY, USA",
        "geometry": {
          "location": {
            "lat": 40.7128,
            "lng": -74.006
          },
          "locationType": "APPROXIMATE"
        },
        "addressComponents": [
          {
            "longName": "New York",
            "shortName": "NY",
            "types": [
              "locality",
              "political"
            ]
          }
        ]
      }
    ],
    "gender": [
      {
        "enum": "MALE",
        "negative": false
      }
    ],
    "ageRange": [
      {
        "enum": "AGE_RANGE_25_34",
        "negative": false
      }
    ],
    "segments": [],
    "targetInterests": {
      "affinity": [],
      "inMarket": []
    }
  },
  "adSchedule": [
    {
      "dayOfWeek": "ALL_DAYS",
      "from": "09_00",
      "to": "17_30",
      "_id": "6a855ca9867e604d24f4b8fa"
    }
  ],
  "meta": {
    "evaluate": "{\"opportunityScore\":18,\"confidence\":\"High\",\"band\":\"Low\",\"categories\":[],\"fixItems\":[]}"
  },
  "googleError": null,
  "isEuPoliticalAds": false,
  "createdBy": "uPy3hdVIuuNlbWOpBYGw",
  "updatedBy": "hzN33mfYO5c1LHqsExRC",
  "createdAt": "2026-08-18T10:49:22.412Z",
  "updatedAt": "2026-08-19T08:10:33.333Z"
}
```
