> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-upsert-campaign-group). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upsert ad campaign group

**Endpoint:** `PUT /ad-publishing/linkedin/ads`

Create or update a LinkedIn ad campaign group with campaigns and ads

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

**id**stringInternal ID**locationId**stringrequiredLocation ID**budget**objectCampaign group budget**adCampaigns**object[]Child ad campaigns**adBudgetOptimization**stringAd budget optimization modeAvailable options`MAXIMUM_DELIVERY``COST_CAP`**objectiveType**stringCampaign group objectiveAvailable options`LEAD_GENERATION``WEBSITE_VISIT`**name**stringCampaign group name**adCampaignGroupId**stringLinkedIn campaign group resource ID**publishingStatus**stringPublishing statusAvailable options`DRAFT``SCHEDULED``PUBLISHED``PUBLISHING``FAILED``IN_REVIEW``PAUSED``ARCHIVED``WITH_ISSUES``REJECTED`**linkedInAdAccountId**stringLinkedIn ad account identifier**unpublishedChanges**booleanWhether the campaign group has unpublished changes**meta**objectAdditional metadata**linkedInError**stringLinkedIn API error message**customValueMappings**objectUser-provided overrides for custom_values merge tags used in ad copy

```json
{
  "id": "cg_abc123",
  "locationId": "loc_abc123",
  "budget": {
    "budgetType": "DAILY",
    "amount": 10000
  },
  "adCampaigns": [
    {
      "name": "Campaign 1",
      "publishingStatus": "PUBLISHED"
    }
  ],
  "adBudgetOptimization": "MAXIMUM_DELIVERY",
  "objectiveType": "LEAD_GENERATION",
  "name": "Q1 Lead Gen",
  "adCampaignGroupId": "123456789",
  "publishingStatus": "PUBLISHED",
  "linkedInAdAccountId": "12345678",
  "unpublishedChanges": false,
  "meta": {},
  "linkedInError": "Budget below minimum",
  "customValueMappings": {
    "{{ custom_values.pet_name }}": "Fluffy"
  }
}
```

application/json

The saved campaign group, same shape as GET /linkedin/ads/{adId}

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
