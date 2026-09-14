> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/mark-payout-method-primary). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Mark Payout Method As Primary

**Endpoint:** `PATCH /affiliate-manager/:locationId/affiliate/:affiliateId/payout-method/:payoutMethodId/primary`

Make this payout method the one payouts default to. Any other method stops being primary.

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

Location Id

**affiliateId**

string

required

Affiliate Id

**payoutMethodId**

string

required

Payout Method Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredPayout method id**locationId**stringrequiredLocation the payout method belongs to**affiliateId**stringrequiredAffiliate the payout method belongs to**method**stringrequiredPayout method typeAvailable options`PAYPAL``BANK`**paypalEmail**stringPayPal email, when the method is PAYPAL**bankDetails**objectBank details, when the method is BANK**isPrimary**booleanrequiredWhether payouts default to this method**createdAt**stringrequiredCreated at timestamp**updatedAt**stringrequiredUpdated at timestamp

```json
{
  "_id": "63e35ac8b4dac93dfc2757c7",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "affiliateId": "6385d230f6d19db03eef6fb2",
  "method": "PAYPAL",
  "paypalEmail": "john@doe.com",
  "bankDetails": {
    "bankCountry": "United States",
    "accountHolderName": "John Doe",
    "recipientAddress": {
      "country": "United States",
      "state": "California",
      "city": "San Francisco",
      "postalCode": "94105"
    },
    "fields": [
      {
        "key": "accountNumber",
        "value": "********5678"
      }
    ]
  },
  "isPrimary": true,
  "createdAt": "2024-06-16T00:00:00.000Z",
  "updatedAt": "2024-06-16T00:00:00.000Z"
}
```
