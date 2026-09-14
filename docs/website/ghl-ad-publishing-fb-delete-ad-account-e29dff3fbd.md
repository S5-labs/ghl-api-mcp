> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-ad-account). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete ad account

**Endpoint:** `DELETE /ad-publishing/facebook/ad-accounts/:adAccountId`

Remove a Facebook ad account connection from a location

## Request

**Version**

string

required

API Version

Available options

`v3`

**adAccountId**

string

required

Ad account identifier

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

Acknowledgement that the ad account was disconnected

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
