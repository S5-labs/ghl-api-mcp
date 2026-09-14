> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-enable-saas). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Bulk Enable SaaS

**Endpoint:** `POST /saas/bulk-enable-saas/:companyId`

Enable SaaS mode for multiple locations with support for both SaaS v1 and v2

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationIds**string[]requiredArray of location IDs to enable SaaS for**isSaaSV2**booleanrequiredIndicates if the SaaS is V2**actionPayload**objectrequiredAction payload for the bulk enable SaaS operation

```json
{
  "locationIds": [
    "locationId1",
    "locationId2"
  ],
  "isSaaSV2": true,
  "actionPayload": {
    "priceId": "price_1QDPY5FpU9DlKp7RQ8BXfywx",
    "stripeAccountId": "acct_1QDPY5FpU9DlKp7RQ8BXfywx",
    "saasPlanId": "66c4d36534f21f900dc2a265",
    "providerLocationId": "r06mdj4OrrERzYDvsOdh"
  }
}
```

application/json

Result of the bulk SaaS enable operation.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates if the bulk enable SaaS operation was successful**message**stringrequiredMessage indicating the bulk enable SaaS operation**bulkActionUrl**stringURL for the bulk enable SaaS operation

```json
{
  "success": true,
  "message": "Bulk enable SaaS operation completed successfully",
  "bulkActionUrl": "https://example.com/bulk-enable-saas"
}
```
