> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/delete-commission). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete commission

**Endpoint:** `DELETE /affiliate-manager/:locationId/commission/:commissionId`

Delete a commission and update its associated payout.

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

Commission deleted

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
