> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-subscription). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Location Subscription Details

**Endpoint:** `GET /saas/get-saas-subscription/:locationId`

Fetch subscription details for a specific location from location metadata

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

**companyId**

string

required

application/json

Subscription details for the sub-account.

- application/json

- Schema
- Example (auto)

**Schema**

**locationId**stringrequiredLocation ID**isSaaSV2**booleanrequiredIndicates if the SaaS is V2**companyId**stringrequiredCompany ID**saasMode**stringSaaS mode**subscriptionId**stringSubscription ID**customerId**stringCustomer ID**productId**stringProduct ID**priceId**stringPrice ID**saasPlanId**stringSaaS plan ID**subscriptionStatus**stringSubscription status

```json
{
  "locationId": "locationId1",
  "isSaaSV2": true,
  "companyId": "companyId1",
  "saasMode": "saasV2",
  "subscriptionId": "subscriptionId1",
  "customerId": "customerId1",
  "productId": "productId1",
  "priceId": "priceId1",
  "saasPlanId": "saasPlanId1",
  "subscriptionStatus": "active"
}
```
