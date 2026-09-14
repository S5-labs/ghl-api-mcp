> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-campaign-group-reporting). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get campaign group reporting

**Endpoint:** `GET /ad-publishing/linkedin/reporting/campaign-group/:campaignGroupId`

Retrieve reporting metrics for a specific LinkedIn campaign group

## Request

**Version**

string

required

API Version

Available options

`v3`

**campaignGroupId**

string

required

Campaign group identifier

**locationId**

string

required

Location ID

**startDate**

string

required

Start date in yyyy-mm-dd format

**endDate**

string

required

End date in yyyy-mm-dd format

**fields**

string[]

Reporting fields. Pass as comma-separated values on the wire (e.g. ?fields=impressions,clicks).

Available options

`clicks`

`oneClickLeads`

`costInLocalCurrency`

`impressions`

`costInUsd`

`ctr`

`cpc`

`cpm`

`cpl`

`externalWebsitePostClickConversions`

`conversionRate`

**campaignGroupId**

string

Campaign group ID

application/json

Metrics for the campaign group over the period, merged with the stored campaign group

- application/json

- Schema
- Example (auto)

**Schema**

**impressions**numberImpressions**clicks**numberClicks**oneClickLeads**numberLeads captured through a one-click lead form**externalWebsitePostClickConversions**numberConversions recorded on an external site after a click**ctr**numbernullableClick-through rate as a percentage, e.g. 1.40 means 1.40%. Null when it cannot be computed.**cpc**numbernullableCost per click in the account currency. Null when it cannot be computed.**cpm**numbernullableCost per thousand impressions. Null when it cannot be computed.**cpl**numbernullableCost per lead. Null when it cannot be computed.**conversionRate**numbernullableConversion rate as a percentage. Null when it cannot be computed.**pivotValues**string[]requiredURNs of the entity this row is pivoted on — a sponsored account, campaign group or creative depending on the request. This is not the time bucket; that is carried by `dateStart`/`dateEnd`.**dateStart**stringrequiredFirst day covered by the row**dateEnd**stringrequiredLast day covered by the row**costInUsd**stringSpend in USD. Returned as a **string** on grouped rows, unlike in `totals`, and at full source precision — e.g. `899.99999999999988713`. Parse as a decimal rather than a float.**costInLocalCurrency**stringSpend in the account currency. Returned as a **string** on grouped rows, unlike in `totals`, and at full source precision. Parse as a decimal rather than a float.**_id**stringrequiredCampaign group record id, as `_id` rather than `id`**__v**numberrequiredMongoose internal version key**name**stringrequiredCampaign group name**locationId**stringrequiredLocation identifier**linkedInAdAccountId**stringrequiredLinkedIn ad account id**publishingStatus**stringrequiredPublishing status**objectiveType**stringrequiredCampaign objectiveAvailable options`LEAD_GENERATION``WEBSITE_VISIT`**adBudgetOptimization**stringBudget optimisation modeAvailable options`MAXIMUM_DELIVERY``COST_CAP`**budget**objectrequiredBudget configuration**adCampaignGroupId**stringLinkedIn campaign group id, set once published**linkedInError**stringrequiredPublish or review error. Empty string when there is none.**createdAt**stringrequiredCreated at**updatedAt**stringrequiredUpdated at

```json
{
  "impressions": 15230,
  "clicks": 214,
  "oneClickLeads": 8,
  "externalWebsitePostClickConversions": 6,
  "ctr": 1.4,
  "cpc": 0.66,
  "cpm": 9.35,
  "cpl": 17.79,
  "conversionRate": 3.74,
  "pivotValues": [
    "urn:li:sponsoredAccount:509444880"
  ],
  "dateStart": "2026-07-01",
  "dateEnd": "2026-07-31",
  "costInUsd": "576.049999999999648674",
  "costInLocalCurrency": "576.05000000000014868",
  "_id": "693c9998ce9aa51d56fa2c7a",
  "__v": 0,
  "name": "Q3 demand generation",
  "locationId": "ASYI07d4Xt8ifUCwVZyT",
  "linkedInAdAccountId": "509444880",
  "publishingStatus": "PAUSED",
  "objectiveType": "LEAD_GENERATION",
  "adBudgetOptimization": "MAXIMUM_DELIVERY",
  "budget": {
    "budgetType": "DAILY",
    "amount": 30,
    "scheduleStartDate": "2026-08-18T07:40:10.110Z",
    "scheduleEndDate": "2026-09-17T07:40:10.110Z"
  },
  "adCampaignGroupId": "807183436",
  "linkedInError": "",
  "createdAt": "2025-12-12T22:39:20.263Z",
  "updatedAt": "2026-01-12T15:13:52.592Z"
}
```
