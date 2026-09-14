> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/deny-commission). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Deny commission

**Endpoint:** `PUT /affiliate-manager/:locationId/commission/:commissionId/deny`

Deny a commission and move its payout to denied status.

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

**commissionId**

string

required

Commission Id

application/json

Commission denied

- application/json

- Schema
- Example (auto)

**Schema**

**succeeded**booleanrequiredWhether the operation completed successfully

```json
{
  "succeeded": true
}
```
