> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-campaign-group). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get ad campaign group

**Endpoint:** `GET /ad-publishing/linkedin/ads/:adId`

Retrieve a LinkedIn ad campaign group by ID

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

The campaign group with its ad campaigns and their ads

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredCampaign group identifier**name**stringrequiredCampaign group name**locationId**stringrequiredLocation identifier**linkedInAdAccountId**stringrequiredLinkedIn ad account id the group belongs to**adCampaignGroupId**stringLinkedIn campaign group id, set once published**publishingStatus**stringrequiredPublishing status**linkedInError**stringrequiredPublish or review error from LinkedIn. Empty string when there is none.**objectiveType**stringrequiredCampaign objectiveAvailable options`LEAD_GENERATION``WEBSITE_VISIT`**adBudgetOptimization**stringBudget optimisation modeAvailable options`MAXIMUM_DELIVERY``COST_CAP`**budget**objectrequiredBudget configuration**adCampaigns**object[]requiredAd campaigns with their ads**meta**objectAncillary metadata**unpublishedChanges**booleanWhether the group has edits not yet published. Absent on reads that have never been edited; set by the upsert.**createdBy**stringrequiredUser who created the group**updatedBy**stringrequiredUser who last updated the group**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at

```json
{
  "id": "6a840c5a1c2e6acf77b1d258",
  "name": "Q3 demand generation",
  "locationId": "fRMewNQIxSyZ5R4nQyit",
  "linkedInAdAccountId": "556129919",
  "adCampaignGroupId": "1192521246",
  "publishingStatus": "PAUSED",
  "linkedInError": "",
  "objectiveType": "WEBSITE_VISIT",
  "adBudgetOptimization": "MAXIMUM_DELIVERY",
  "budget": {
    "budgetType": "DAILY",
    "amount": 30,
    "scheduleStartDate": "2026-08-18T07:40:10.110Z",
    "scheduleEndDate": "2026-09-17T07:40:10.110Z"
  },
  "adCampaigns": [
    {
      "id": "6a840c7b1c2e6acf77b1d2a5",
      "name": "Ad set 1",
      "adCampaignGroupId": "6a840c5a1c2e6acf77b1d258",
      "adCampaignId": "869320926",
      "publishingStatus": "PAUSED",
      "linkedInError": "",
      "campaignType": "SPONSORED_UPDATES",
      "mediaType": "STANDARD_UPDATE",
      "locale": {
        "country": "US",
        "language": "en"
      },
      "unitCost": {
        "amount": 1
      },
      "audience": {
        "geoLocations": [
          {
            "name": "Mumbai, Maharashtra, India",
            "urn": "urn:li:geo:106164952",
            "facetUrn": "urn:li:adTargetingFacet:locations",
            "selectionType": "include"
          }
        ],
        "targetAudience": {
          "include": [],
          "exclude": []
        }
      },
      "ads": [
        {
          "id": "6a840c7b1c2e6acf77b1d2a8",
          "name": "Ad 1",
          "adCampaignId": "6a840c7b1c2e6acf77b1d2a5",
          "adCampaignGroupId": "6a840c5a1c2e6acf77b1d258",
          "adId": "1554451156",
          "publishingStatus": "FAILED",
          "linkedInError": "",
          "introductoryText": "Grow your pipeline this quarter",
          "description": "",
          "destinationUrl": "https://example.com",
          "destinationFormId": "",
          "callToActionLabel": "APPLY",
          "contentReferenceString": "urn:li:share:7495384246371512320",
          "media": [
            {
              "type": "image",
              "src": "https://staging.files.leadconnectorhq.com/file/abc/def.png",
              "name": "creative.png",
              "headline": "Try it free",
              "destinationUrl": "example.com",
              "fileSizeBytes": 1066210,
              "urn": "urn:li:image:D5610AQEjSUtmzK0rjw",
              "_id": "6a840c881c2e6acf77b1d3c9"
            }
          ],
          "createdAt": "2026-08-18T07:40:43.385Z",
          "updatedAt": "2026-08-18T07:45:04.624Z"
        }
      ],
      "createdAt": "2026-08-18T07:40:43.369Z",
      "updatedAt": "2026-08-18T07:45:04.746Z"
    }
  ],
  "meta": {
    "evaluate": "{\"opportunityScore\":60,\"confidence\":\"High\",\"band\":\"Medium\",\"categories\":[],\"fixItems\":[]}"
  },
  "unpublishedChanges": true,
  "createdBy": "uPy3hdVIuuNlbWOpBYGw",
  "updatedBy": "uPy3hdVIuuNlbWOpBYGw",
  "createdAt": "2026-08-18T07:40:10.354Z",
  "updatedAt": "2026-08-18T07:45:04.812Z"
}
```
