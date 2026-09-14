> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-adset). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete ad set

**Endpoint:** `DELETE /ad-publishing/facebook/adsets/:adSetId`

Delete a Facebook ad set by ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**adSetId**

string

required

Ad set identifier

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

Acknowledgement that the ad set was deleted

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
