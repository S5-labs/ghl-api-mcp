> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-resume-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Resume campaign

**Endpoint:** `POST /ad-publishing/facebook/campaigns/:campaignId/resume`

Resume a paused Facebook campaign

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

Acknowledgement that the campaign was resumed

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredTrue when the operation succeeded

```json
{
  "success": true
}
```
