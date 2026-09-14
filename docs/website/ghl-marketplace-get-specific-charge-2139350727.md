> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-specific-charge). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get specific wallet charge details

**Endpoint:** `GET /marketplace/billing/charges/:chargeId`

Get specific wallet charge details

## Request

**chargeId**

string

required

ID of the charge to retrieve

application/json

Returns charge details

- application/json

- Schema
- Example (auto)

**Schema**

**refunded**booleanValue is 'true' if the charge has subsequently been refunded.**currency**stringCurrency of the transaction. We currently support USD only.**appId**stringApp ID**meterId**stringBilling Meter ID (you can find this on your app's pricing page)**chargeId**stringCharge ID**entityType**stringIndicates who was charged? Currently, we support charges for 'location' only**entityId**stringIf the entityType is Location, entityld would be locationld.**amountCharged**numberTotal amount charged**pricePerUnit**numberPrice per unit for the charge**transactionType**stringThis can be one of two values - 'charge' or 'refund'**units**numberNumber of units that the sub-account was charged for**meta**objectmeta object contains details that were sent while creating the charge via the API - eventID, description, eventTime, userld**createdAt**string<date-time>Timestamp when the charge was created in our system**updatedAt**string<date-time>Timestamp when the charge was last updated in our system

```json
{
  "refunded": false,
  "currency": "USD",
  "appId": "6578278e879ad2646715ba9c",
  "meterId": "680b97022b4a34420f5f9b93",
  "chargeId": "charge_123",
  "entityType": "location",
  "entityId": "ve9EPM428h8vShlRW1KT",
  "amountCharged": 0.1,
  "pricePerUnit": 0.01,
  "transactionType": "charge",
  "units": 10,
  "meta": {
    "eventId": "evt_abc123",
    "description": "Charge for 10 SMS messages"
  },
  "createdAt": "2025-03-26T00:00:00.000Z",
  "updatedAt": "2025-03-26T00:00:00.000Z"
}
```
