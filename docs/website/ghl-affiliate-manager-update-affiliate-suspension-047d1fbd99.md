> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/update-affiliate-suspension). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Affiliate Suspension

**Endpoint:** `PUT /affiliate-manager/affiliate-campaign/:locationId/campaign/:campaignId/affiliate/:affiliateId/suspension`

Suspend or reinstate an affiliate on a campaign. Suspending cancels their pending and denied payouts, commissions and transactions; reinstating returns cancelled ones to pending.

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

**campaignId**

string

required

Campaign Id

**affiliateId**

string

required

Affiliate Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**isSuspended**booleanrequiredWhether the affiliate is suspended on this campaign. Suspending cancels their pending and denied payouts, commissions and transactions; unsuspending returns cancelled ones to pending.

```json
{
  "isSuspended": true
}
```

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
  "message": "Affiliate suspended successfully"
}
```
