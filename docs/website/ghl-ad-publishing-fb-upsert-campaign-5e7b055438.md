> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upsert campaign

**Endpoint:** `PUT /ad-publishing/facebook/campaigns`

Create or update a Facebook campaign

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

**id**stringCampaign identifier**locationId**stringrequiredLocation identifier**name**stringCampaign name**objective**stringCampaign objectiveAvailable options`OUTCOME_LEADS``OUTCOME_TRAFFIC``OUTCOME_ENGAGEMENT``OUTCOME_SALES`**specialAdCategories**string[]Special ad categoriesAvailable options`EMPLOYMENT``CREDIT``FINANCIAL_PRODUCTS_SERVICES``HOUSING``ISSUES_ELECTIONS_POLITICS``ONLINE_GAMBLING_AND_GAMING``NONE`**source**stringCampaign data source**customValueMappings**objectUser-provided overrides for custom_values merge tags used in ad copy

```json
{
  "id": "camp_123",
  "locationId": "loc_abc123",
  "name": "Summer Campaign",
  "objective": "OUTCOME_LEADS",
  "specialAdCategories": [
    "NONE"
  ],
  "source": "facebook",
  "customValueMappings": {
    "{{ custom_values.pet_name }}": "Fluffy"
  }
}
```

application/json

The saved campaign, without its ad sets

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredCampaign identifier**name**stringrequiredCampaign name**locationId**stringrequiredLocation identifier**fbAdAccountId**stringrequiredAd account the campaign belongs to**fbCampaignId**stringFacebook campaign id, set once published**objective**stringrequiredCampaign objective**specialAdCategories**string[]requiredSpecial ad categories declared for the campaign**publishingStatus**stringrequiredPublishing status of the campaign itself. Independent of its children — pausing one ad set leaves the campaign `PUBLISHED`.Available options`DRAFT``SCHEDULED``PUBLISHING``PUBLISHED``PAUSED``IN_REVIEW``WITH_ISSUES``REJECTED``ARCHIVED``FAILED`**fbError**stringnullableDespite the name this is not always an error. Reads return `null` when there is nothing to report and the upsert returns `""`, but pausing an ad set or an ad overwrites it with an informational notice — `One or more adsets are paused` or `One or more ads are paused` — which the matching resume clears back to `null`. Treat it as a status line, not a failure signal.**source**stringrequiredWhere the campaign was created from**meta**objectAncillary campaign metadata**unpublishedChanges**booleanWhether the campaign has edits not yet published**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at

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
  "updatedAt": "2026-08-19T11:45:39.340Z"
}
```
