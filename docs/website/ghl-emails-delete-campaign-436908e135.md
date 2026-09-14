> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/delete-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Campaign

**Endpoint:** `DELETE /emails/locations/:locationId/campaigns/emails/:campaignId`

Delete a campaign

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

Location ID

**campaignId**

string

required

Campaign ID

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**deleted**booleanrequiredWhether the campaign was deleted successfully**traceId**stringTrace ID of the request

```json
{
  "deleted": true,
  "traceId": "0c52e980-41f6-4be7-8c4b-32332ss"
}
```
