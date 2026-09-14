> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/delete-payout-method). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Payout Method

**Endpoint:** `DELETE /affiliate-manager/:locationId/affiliate/:affiliateId/payout-method/:payoutMethodId`

Delete a payout method. The primary method cannot be deleted while the affiliate holds more than one.

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

Location Id

**affiliateId**

string

required

Affiliate Id

**payoutMethodId**

string

required

Payout Method Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredWhether the action completed**message**stringrequiredHuman readable outcome

```json
{
  "success": true,
  "message": "Payout method deleted successfully"
}
```
