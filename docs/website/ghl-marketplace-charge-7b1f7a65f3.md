> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/marketplace/charge). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create a new wallet charge

**Endpoint:** `POST /marketplace/billing/charges`

Create a new wallet charge

## Request

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**appId**stringrequiredApp ID of the App**meterId**stringrequiredBilling Meter ID (you can find this on your app's pricing page)**eventId**stringrequiredEvent ID / Transaction ID on your server's side. This will help you maintain the reference of the event/transaction on your end that you charged the customer for.**userId**stringUser ID**locationId**stringrequiredID of the Sub-Account to be charged**companyId**stringrequiredID of the Agency the Sub-account belongs to**description**stringrequiredDescription of the charge**price**numberPrice per unit to charge**units**numberrequiredNumber of units to charge**eventTime**stringThe timestamp when the event/transaction was performed. If blank, the billing timestamp will be set as the event time. ISO8601 Format.

```json
{
  "appId": "6578278e879ad2646715ba9c",
  "meterId": "680b97022b4a34420f5f9b93",
  "eventId": "evt_abc123",
  "userId": "user_abc123",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "companyId": "company_abc123",
  "description": "Charge for sending 10 SMS messages",
  "price": 0.01,
  "units": 10,
  "eventTime": "2025-03-26T00:00:000Z"
}
```

application/json

Charge created successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanIndicates whether the charge was created successfully**chargeId**stringUnique identifier of the created charge

```json
{
  "success": true,
  "chargeId": "charge_123"
}
```
