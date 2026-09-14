> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-publish-campaign-group). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Publish ad campaign group

**Endpoint:** `POST /ad-publishing/linkedin/ads/:adId/publish`

Publish a LinkedIn ad campaign group and push it live

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

Acknowledgement that publishing was queued. Unlike Google, this does not return the campaign document.

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
