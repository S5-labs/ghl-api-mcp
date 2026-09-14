> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-campaign-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Google campaign by ID

**Endpoint:** `GET /ad-publishing/google/ads/:adId`

Retrieve a specific Google Ads campaign by ID

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

**locationId**

string

required

Location identifier

application/json

The full campaign document, including its ad groups and their ad content

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredCampaign identifier**name**stringrequiredCampaign name**locationId**stringrequiredLocation identifier**googleAdAccountId**stringrequiredGoogle Ads customer id the campaign belongs to**advertisingChannelType**stringrequiredAdvertising channelAvailable options`SEARCH``DEMAND_GEN`**publishingStatus**stringrequiredPublishing statusAvailable options`DRAFT``SCHEDULED``PUBLISHED``PUBLISHING``FAILED``IN_REVIEW``PAUSED``ARCHIVED``WITH_ISSUES``REJECTED`**source**stringrequiredWhere the campaign was created from**budget**objectrequiredBudget configuration**networkSettings**objectrequiredNetwork placement settings**biddingStrategy**objectrequiredBidding configuration**campaignGoal**objectrequiredCampaign goal**assets**objectrequiredAttached assets by kind**audience**objectrequiredCampaign level targeting**adSchedule**object[]requiredAd scheduling windows, empty when the campaign runs continuously**adGroups**object[]requiredAd groups with their ads**unpublishedChanges**booleanrequiredWhether the campaign has edits not yet published**isEuPoliticalAds**booleanrequiredWhether the campaign is declared as EU political advertising**meta**objectAncillary campaign metadata**createdBy**stringrequiredUser who created the campaign**updatedBy**stringrequiredUser who last updated the campaign**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at

```json
{
  "id": "6a846b1eb112242a53b21cb0",
  "name": "Spring promotion",
  "locationId": "fRMewNQIxSyZ5R4nQyit",
  "googleAdAccountId": "6776452901",
  "advertisingChannelType": "DEMAND_GEN",
  "publishingStatus": "DRAFT",
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
  "campaignGoal": {
    "type": "CONVERSIONS",
    "value": "ADD_TO_CART",
    "isCustomConversionGoal": false
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
  "adGroups": [
    {
      "id": "6a846b2db112242a53b21d01",
      "name": "Ad Group 1",
      "adCampaignId": "6a846b1eb112242a53b21cb0",
      "googleAdGroupId": "",
      "publishingStatus": "DRAFT",
      "adGroupError": "",
      "keywords": {
        "positives": [],
        "negatives": []
      },
      "customChannels": false,
      "selectedChannels": [
        "GMAIL",
        "YOUTUBE_IN_STREAM"
      ],
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
      "googleAudienceId": "",
      "adContent": [
        {
          "id": "ad_abc123",
          "name": "Summer Sale Ad",
          "mediaType": "IMAGE",
          "headlines": [
            "Buy Now",
            "Best Deals"
          ],
          "longHeadlines": [
            "Discover Great Deals Today"
          ],
          "descriptions": [
            "Great products"
          ],
          "finalUrl": "https://example.com",
          "path1": "products",
          "path2": "deals",
          "isDeleted": false,
          "adError": "Landing page URL is invalid",
          "publishingStatus": "PUBLISHED",
          "adId": "ad_internal_abc",
          "adCampaignId": "camp_abc123",
          "adGroupId": "ag_abc123",
          "googleAdId": "customers/123/ads/456",
          "media": [
            {
              "type": "IMAGE",
              "src": "https://example.com/ad.jpg"
            }
          ],
          "callToActionLabel": "LEARN_MORE",
          "businessName": "Acme Corp",
          "youtubeVideoLinks": [
            {
              "youtubeVideoId": "dQw4w9WgXcQ"
            }
          ],
          "carouselCards": [
            {
              "headline": "Shop Now",
              "finalUrl": "https://example.com",
              "callToActionLabel": "LEARN_MORE"
            }
          ],
          "placements": [
            "YOUTUBE_IN_STREAM"
          ],
          "customChannels": false
        }
      ],
      "createdAt": "2026-08-18T14:24:45.722Z",
      "updatedAt": "2026-08-18T14:36:29.400Z"
    }
  ],
  "unpublishedChanges": false,
  "isEuPoliticalAds": false,
  "meta": {
    "evaluate": "{\"opportunityScore\":18,\"confidence\":\"High\",\"band\":\"Low\",\"categories\":[],\"fixItems\":[]}"
  },
  "createdBy": "hzN33mfYO5c1LHqsExRC",
  "updatedBy": "hzN33mfYO5c1LHqsExRC",
  "createdAt": "2026-08-18T14:24:30.868Z",
  "updatedAt": "2026-08-18T14:36:29.195Z"
}
```
