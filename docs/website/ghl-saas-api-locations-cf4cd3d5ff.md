> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/locations). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get locations by stripeId with companyId

**Endpoint:** `GET /saas/locations`

Get locations by stripeCustomerId or stripeSubscriptionId with companyId

## Request

**Version**

string

required

API Version

Available options

`v3`

**customerId**

string

required

**subscriptionId**

string

required

application/json

Sub-account (location) IDs matched by the given Stripe identifier.

- application/json

- Schema
- Example (auto)

**Schema**

Array [****string]

```json
[
  "AUKAtFVo0lWezBsBQ3FE"
]
```
