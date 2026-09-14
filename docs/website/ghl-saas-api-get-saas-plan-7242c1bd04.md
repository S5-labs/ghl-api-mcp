> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-plan). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get SaaS Plan

**Endpoint:** `GET /saas/saas-plan/:planId`

Fetch a specific SaaS plan by plan ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**planId**

string

required

**companyId**

string

required

application/json

The requested SaaS plan.

- application/json

- Schema
- Example (auto)

**Schema**

**planId**stringrequiredUnique identifier for the SaaS plan**companyId**stringrequiredCompany ID associated with the SaaS plan**title**stringrequiredTitle of the SaaS plan**description**stringrequiredDescription of the SaaS plan**saasProducts**string[]requiredArray of SaaS products included in the plan**features**string[]Array of v2 feature-permission feature IDs included in the plan. This is the v2-native representation of the plan entitlements (the successor to `saasProducts`); the two are kept in sync via the plan create/update dual-write.**addOns**string[]Array of add-ons included in the plan**planLevel**numberrequiredLevel of the plan (0-4)**trialPeriod**numberrequiredTrial period in days**setupFee**numberSetup fee for the plan**userLimit**numberUser limit for the plan**contactLimit**numberContact limit for the plan**prices**object[]requiredPrices for the plan**categoryId**stringCategory ID for the plan**snapshotId**stringSnapshot ID for the plan**providerLocationId**stringProvider location ID**productId**stringProduct ID for the plan**isSaaSV2**booleanrequiredIndicates if this is a SaaS V2 plan**createdAt**string<date-time>requiredCreation timestamp**updatedAt**string<date-time>requiredLast update timestamp

```json
{
  "planId": "66c4d36534f21f900dc2a265",
  "companyId": "66c4d36534f21f900dc2a265",
  "title": "AED 1.5 changed",
  "description": "AED 1.5",
  "saasProducts": [
    "2-way-text-messaging",
    "gmb-messaging",
    "web-chat"
  ],
  "features": [
    "contacts-conversations",
    "web-chat",
    "workflows"
  ],
  "addOns": [
    "YEXT_V2",
    "WHATSAPP_V1",
    "WORDPRESS_V1",
    "AI_EMPLOYEE",
    "Ad_Publishing_Connect_Your_BM"
  ],
  "planLevel": 0,
  "trialPeriod": 16,
  "setupFee": 100,
  "userLimit": 50,
  "contactLimit": 50,
  "prices": [
    {
      "id": "66a9edbfcc6c505a22db7976",
      "billingInterval": "month",
      "active": true,
      "amount": 150,
      "currency": "AED",
      "symbol": "$"
    }
  ],
  "categoryId": "66911cdc98508ec2731979b9",
  "snapshotId": "G8KmpIeLnZc7ZMoJoxDx",
  "providerLocationId": "r06mdj4OrrERzYDvsOdh",
  "productId": "66a9edbfcc6c5090bedb7974",
  "isSaaSV2": true,
  "createdAt": "2024-07-31T07:54:41.885Z",
  "updatedAt": "2025-04-01T12:27:29.167Z"
}
```
