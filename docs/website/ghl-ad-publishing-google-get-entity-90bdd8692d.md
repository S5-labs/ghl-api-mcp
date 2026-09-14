> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-entity). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get entities

**Endpoint:** `GET /ad-publishing/google/entity`

Retrieve Google campaigns, ad groups, or ads based on entity type

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

Integration type

Available options

`AD_MANAGER`

`INTEGRATION`

**campaignId**

string

Campaign identifier

**adGroupId**

string

Ad group identifier

**entityType**

string

required

Entity type

Available options

`CAMPAIGN`

`ADGROUP`

`AD`

**searchId**

string

Comma-separated Google Ads IDs to filter by

**startDate**

string

Filter start date

**endDate**

string

Filter end date

**selectedAdAccountId**

string

Selected ad account ID

application/json

A { data } envelope whose items follow entityType — campaigns, ad groups, or ads

- application/json

- Schema
- Example (auto)

**Schema**

**data**object[]

```json
{
  "data": [
    {
      "resourceName": "customers/6776452901/campaigns/22173400513",
      "id": "22173400513",
      "name": "Spring promotion",
      "status": "PAUSED"
    },
    {
      "resourceName": "customers/6776452901/adGroups/175603784313",
      "id": "175603784313",
      "name": "Ad Group 1",
      "status": "ENABLED"
    },
    {
      "resourceName": "customers/6776452901/ads/730847006298",
      "id": "730847006298",
      "name": "Ad - 730847006298",
      "type": "RESPONSIVE_SEARCH_AD"
    }
  ]
}
```
