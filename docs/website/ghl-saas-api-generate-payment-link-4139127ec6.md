> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/generate-payment-link). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update SaaS subscription

**Endpoint:** `PUT /saas/update-saas-subscription/:locationId`

Update SaaS subscription for given locationId and customerId

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**subscriptionId**stringrequiredSubscription ID**customerId**stringrequiredCustomer ID**companyId**stringrequiredCompany ID

```json
{
  "subscriptionId": "sub_1QDPY5FpU9DlKp7RQ8BXfywx",
  "customerId": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",
  "companyId": "companyId1"
}
```

application/json

Acknowledgement that the subscription update has been queued.

- application/json

- Schema
- Example (auto)

**Schema**

**string**string

```json
"subscription update for location: AUKAtFVo0lWezBsBQ3FE is in process"
```
