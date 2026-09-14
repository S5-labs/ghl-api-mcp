> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-reporting). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get campaign reporting

**Endpoint:** `GET /ad-publishing/facebook/reporting/campaign/:campaignId`

Retrieve reporting for one campaign as a flat object, not the `{ grouped, totals }` envelope the account-level report uses. Merges the locally stored campaign, Meta insights for the window, and CDP-attributed contacts. The campaign must be published — one without an `fbCampaignId` is rejected. Note `results.lead` (Meta lead actions) and `leads` (CDP attributed contacts) measure different things and routinely disagree.

## Request

**Version**

string

required

API Version

Available options

`v3`

**campaignId**

string

required

Campaign identifier

**locationId**

string

required

Location identifier

**startDate**

string

required

Report start date (YYYY-MM-DD)

**endDate**

string

required

Report end date (YYYY-MM-DD)

application/json

Campaign metadata, Meta insights, and attributed contacts for the window

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredCampaign id in this service. Note `_id`, not `id`.**name**stringrequiredCampaign name**objective**stringrequiredCampaign objective**publishingStatus**stringrequiredLocal publishing status**fbCampaignId**stringrequiredMeta campaign id. Required — an unpublished campaign is rejected.**campaignId**stringMeta campaign id, repeated from the insights row**startTime**stringWhen the campaign started, in Meta timestamp format with a numeric offset rather than UTC**stopTime**stringWhen the campaign is scheduled to stop. Absent on open-ended campaigns.**dateStart**stringFirst day of the reported window**dateStop**stringLast day of the reported window**clicks**stringClicks**cpc**stringCost per click**ctr**stringClick-through rate as a percentage**cpm**stringCost per thousand impressions**impressions**stringImpressions**spend**stringSpend**reach**stringUnique people reached**frequency**stringAverage impressions per person reached**conversions**stringLead actions Meta recorded. A string here, unlike the account-level report where the same figure is a number.**costPerConversion**stringSpend divided by lead actions**results**objectCounts per Meta action type. Values are strings, and the types overlap so summing them double-counts.**costPerResult**stringSpend divided by the double-counted `results` total, so usually far smaller than the real cost per lead**costPerResultBreakdown**objectCost per action, per action type, at four decimals**leads**stringContacts the CDP attributed to this campaign. A different measurement from `results.lead`, which counts Meta lead actions — expect the two to differ.

```json
{
  "_id": "6890a65597bae1febe1581d1",
  "name": "Do not touch - Lead Form Campaign",
  "objective": "OUTCOME_LEADS",
  "publishingStatus": "PAUSED",
  "fbCampaignId": "120229485769880122",
  "campaignId": "120229485769880122",
  "startTime": "2025-08-04T05:24:01-0700",
  "stopTime": "2026-09-01T00:00:00-0700",
  "dateStart": "2025-08-01",
  "dateStop": "2026-08-19",
  "clicks": "32",
  "cpc": "0.03625",
  "ctr": "1.440792",
  "cpm": "0.522287",
  "impressions": "2221",
  "spend": "1.16",
  "reach": "2214",
  "frequency": "1.003162",
  "conversions": "5",
  "costPerConversion": "0.232",
  "results": {
    "lead": "5",
    "linkClick": "22"
  },
  "costPerResult": "0.01",
  "costPerResultBreakdown": {
    "lead": "0.2320",
    "linkClick": "0.0527"
  },
  "leads": "4"
}
```
