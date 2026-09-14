> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-locations). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get SaaS Locations

**Endpoint:** `GET /saas/saas-locations/:companyId`

Fetch all SaaS-activated locations for a company with pagination

## Request

**Version**

string

required

API Version

Available options

`v3`

**companyId**

string

required

**page**

number

required

application/json

Paginated SaaS-enabled sub-accounts for the company.

- application/json

- Schema
- Example (auto)

**Schema**

**locations**object[]requiredArray of SaaS locations**pagination**objectrequired

```json
{
  "locations": [
    {
      "locationId": "locationId1",
      "companyId": "companyId1",
      "saasMode": "saasV2",
      "subscriptionId": "subscriptionId1",
      "customerId": "customerId1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "providerLocationId": "r06mdj4OrrERzYDvsOdh",
      "isSaaSV2": true,
      "subscriptionInfo": {
        "priceId": "price_1QDPY5FpU9DlKp7RQ8BXfywx",
        "saasPlanId": "66c4d36534f21f900dc2a265",
        "stripeProductId": "prod_1QDPY5FpU9DlKp7RQ8BXfywx",
        "subscriptionStatus": "active"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10,
    "hasNext": true,
    "hasPrev": true
  }
}
```
