> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-delete-ad-account). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete ad account

**Endpoint:** `DELETE /ad-publishing/linkedin/ad-account`

Remove a LinkedIn ad account connection from a location

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

**adAccountId**

string

required

Ad account identifier

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
