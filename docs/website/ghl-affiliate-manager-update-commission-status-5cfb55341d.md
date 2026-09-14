> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/update-commission-status). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update commission status

**Endpoint:** `PUT /affiliate-manager/:locationId/commission/:commissionId/status`

Update the status of a commission and its associated payout.

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

- application/json

- Body
- Example (auto)

### Body**required**

**action**stringrequiredActionAvailable options`pending``approved``paid``denied``canceled`

```json
{
  "action": "pending"
}
```

application/json

Commission status updated

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
