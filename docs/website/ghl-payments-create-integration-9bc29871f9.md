> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create new integration

**Endpoint:** `POST /payments/custom-provider/provider`

API to create a new association for an app and location

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

Location id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringrequiredThe name of the custom provider**description**stringrequiredDescription of payment gateway. Shown on the payments integrations page as subtext**paymentsUrl**stringrequiredThis url will be loaded in iFrame to start a payment session.**queryUrl**stringrequiredThe url used for querying payments related events. Ex. verify, refund, subscription etc.**imageUrl**stringrequiredPublic image url for logo of the payment gateway displayed on the payments integrations page.**supportsSubscriptionSchedule**booleanrequiredWhether the config supports subscription schedule or not. true represents config supports subscription schedule

```json
{
  "name": "Company Paypal Integration",
  "description": "This payment gateway supports payments in India via UPI, Net banking, cards and wallets.",
  "paymentsUrl": "https://testpayment.paypal.com",
  "queryUrl": "https://testsubscription.paypal.com",
  "imageUrl": "https://testsubscription.paypal.com",
  "supportsSubscriptionSchedule": true
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**name**stringrequiredThe name of the custom provider**description**stringrequiredDescription of payment gateway. Shown on the payments integrations page as subtext**paymentsUrl**stringrequiredThis url will be loaded in iFrame to start a payment session.**queryUrl**stringrequiredThe url used for querying payments related events. Ex. verify, refund, subscription etc.**imageUrl**stringrequiredPublic image url for logo of the payment gateway displayed on the payments integrations page.**_id**stringrequiredThe unique identifier for the custom provider.**locationId**stringrequiredLocation id**marketplaceAppId**stringrequiredThe application id of marketplace**paymentProvider**objectPayment provider details.**deleted**booleanrequiredWhether the config is deleted or not. true represents config is deleted**createdAt**string<date-time>requiredThe creation timestamp of the custom provider.**updatedAt**string<date-time>requiredThe last update timestamp of the custom provider.**traceId**stringTrace id of the custom provider.

```json
{
  "name": "Company Paypal Integration",
  "description": "This payment gateway supports payments in India via UPI, Net banking, cards and wallets.",
  "paymentsUrl": "https://testpayment.paypal.com",
  "queryUrl": "https://testsubscription.paypal.com",
  "imageUrl": "https://testsubscription.paypal.com",
  "_id": "662a44ad19a2a44d3cd9d749",
  "locationId": "Lk3nlfk4lxlelVEwcW",
  "marketplaceAppId": "65f0b217a05c774da7f1efa5",
  "paymentProvider": "{ live: { liveMode: true }, test: { liveMode: false, apiKey: \"y5ZQxryRFXZHvUJZdLXXXXXX\", publishableKey: \"rzp_test_zPRoVMLOa0A9wo\" }}",
  "deleted": true,
  "createdAt": "2023-11-20T10:23:36.515Z",
  "updatedAt": "2024-01-23T09:57:04.846Z",
  "traceId": "302d2cf4-1ba0-4bf5-bc3b-f8fa76fda58a"
}
```
