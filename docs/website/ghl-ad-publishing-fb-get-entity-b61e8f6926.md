> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-entity). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get entities

**Endpoint:** `GET /ad-publishing/facebook/entity`

Retrieve campaigns, ad sets, or ads for a location. `entityType` selects which, and each returns a `{ data }` envelope whose item shape differs — the id key is `campaignId`, `adSetId`, or `adId` respectively, and the status fields differ too: campaigns carry both `status` and `effectiveStatus`, ad sets only `effectiveStatus`, and ads only `status`. `next` is returned only when the branch pages through Meta, so treat its absence as the end of the results rather than assuming a cursor. For `CAMPAIGN`, `type=INTEGRATION` queries Meta while `type=AD_MANAGER` reads campaigns this service published, filtered to `PAUSED` and `PUBLISHED`. `ADSET` requires `campaignId`; `AD` accepts `adSetId` for a single ad set or `campaignId` to page across the campaign.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location identifier

**type**

string

required

Integration source type

Available options

`AD_MANAGER`

`INTEGRATION`

**next**

string

Pagination cursor

**fetchAll**

string

Fetch all entities

**campaignId**

string

Campaign identifier

**adSetId**

string

Ad set identifier

**entityType**

string

required

Entity type to fetch

Available options

`CAMPAIGN`

`ADSET`

`AD`

**searchId**

string

Search identifier

**selectedAdAccountId**

string

Selected ad account ID

application/json

Campaigns, ad sets, or ads, matching the requested `entityType`

- application/json

- Schema
- Example (auto)

**Schema**

oneOfFacebookEntityCampaignsResponseDTOFacebookEntityAdsetsResponseDTOFacebookEntityAdsResponseDTO**data**object[]requiredCampaigns, shaped by the requested `type`**next**stringCursor for the next page, to be passed back as `next`. Present only on the `INTEGRATION` branch, and absent once the last page is reached.

```json
{
  "data": [
    {
      "campaignId": "120250392416560122",
      "name": "AutomationTest718084",
      "status": "ACTIVE",
      "effectiveStatus": "ACTIVE",
      "adAccountId": "act_357046700569338",
      "locationId": "fRMewNQIxSyZ5R4nQyit"
    },
    {
      "campaignId": "120250392416560122",
      "name": "Spring Promo",
      "status": "PUBLISHED",
      "adAccountId": "act_357046700569338",
      "locationId": "fRMewNQIxSyZ5R4nQyit"
    }
  ],
  "next": "QVFIVFdHQTJVV1Vod3hVZAlRDLUpSM19HVjVScGNDMXozTU5RVkk1NWt6MnNISmZAtMVpMcVU5dVYwRU00R0xfVTh5c3AZD"
}
```
