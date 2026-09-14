> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/remove-attached-config). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Remove attached config

**Endpoint:** `POST /saas/remove-attached-config/:locationId`

Clears attached SaaS plan (attachPlanId/attachPriceId) and/or attached rebilling config from a sub-account in setup_pending, and sets suspendedInfo.payment_pending to false.

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

Location ID (Sub-account) to remove attached config from

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**companyId**stringrequiredCompany ID owning the location

```json
{
  "companyId": "5DP4iH6HLkQsiKESj6rh"
}
```

application/json

Attached config removed successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates if the remove attached config operation succeeded**locationId**stringrequiredLocation ID the attached config was removed from**removedAttachedPlan**booleanrequiredWhether an attached SaaS plan was cleared**removedAttachedRebilling**booleanrequiredWhether attached rebilling config was cleared

```json
{
  "success": true,
  "locationId": "AUKAtFVo0lWezBsBQ3FE",
  "removedAttachedPlan": true,
  "removedAttachedRebilling": false
}
```
