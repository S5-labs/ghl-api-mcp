> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/enable-saas-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Enable SaaS for Sub-Account (Formerly Location)

**Endpoint:** `POST /saas/enable-saas/:locationId`

Enable SaaS for Sub-Account (Formerly Location) based on the data provided

info

This feature is only available on Agency Pro ($497) plan.

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

**stripeAccountId**stringStripe account id(Required only for SaaS V1)**name**stringName of the stripe customer(Required only for SaaS V1)**email**stringEmail of the stripe customer(Required only for SaaS V1)**stripeCustomerId**stringStripe customer id if exists(Required only for SaaS V1)**companyId**stringrequired**isSaaSV2**booleanrequiredDenotes if it is a saas v2 or v1 sub-account**contactId**stringAgency subaccount used for payment provider integration(Required Only for SaaS V2)**providerLocationId**stringAgency Subaccount ID**description**stringDescription**saasPlanId**stringRequired only while pre-configuring saas subscription**priceId**stringRequired only while pre-configuring saas subscription

```json
{
  "stripeAccountId": "acct_1QDPY5FpU9DlKp7RQ8BXfywx",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "stripeCustomerId": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",
  "companyId": "string",
  "isSaaSV2": true,
  "contactId": "1QDPY5FpU9DlKp7RQ8BXfywx",
  "providerLocationId": "r06mdj4OrrERzYDvsOdh",
  "description": "Description",
  "saasPlanId": "1QDPY5FpU9DlKp7RQ8BXfywx",
  "priceId": "price_1QDPY5FpU9DlKp7RQ8BXfywx"
}
```

application/json

Result of enabling SaaS for the sub-account.

- application/json

- Schema
- Example (auto)

**Schema**

oneOfEnableSaasResponseDtoEnableSaasV2ResponseDtoSaaS v1 enable response (proxied from the internal enable-saas API).**customer_id**stringrequired**ok**booleanrequired**paymentMethodAdded**booleanrequired

```json
{
  "customer_id": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",
  "ok": true,
  "paymentMethodAdded": true
}
```
