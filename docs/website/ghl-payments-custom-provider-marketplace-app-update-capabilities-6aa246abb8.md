> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/custom-provider-marketplace-app-update-capabilities). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Custom-provider marketplace app update capabilities

**Endpoint:** `PUT /payments/custom-provider/capabilities`

Toggle capabilities for the marketplace app tied to the OAuth client

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**supportsSubscriptionSchedules**booleanrequiredWhether the marketplace app supports subscription schedules or not**companyId**stringCompany id. Mandatory if locationId is not provided**locationId**stringLocation / Sub-account id. Mandatory if companyId is not provided

```json
{
  "supportsSubscriptionSchedules": true,
  "companyId": "Yjnwuduw83e8x30sm0",
  "locationId": "Yjnwuduw83e8x30sm0"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredWhether the custom provider capabilities are updated or not. true represents capabilities are updated

```json
{
  "success": "true"
}
```
