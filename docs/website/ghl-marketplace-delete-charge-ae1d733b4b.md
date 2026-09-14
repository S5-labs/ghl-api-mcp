> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/marketplace/delete-charge). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete a wallet charge

**Endpoint:** `DELETE /marketplace/billing/charges/:chargeId`

Delete a wallet charge

## Request

**chargeId**

string

required

ID of the charge to delete

application/json

Charge deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanIndicates whether the charge was deleted successfully

```json
{
  "success": true
}
```
