> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/create-payout-method). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Payout Method

**Endpoint:** `POST /affiliate-manager/:locationId/affiliate/:affiliateId/payout-method`

Store a payout method for an affiliate. An affiliate can hold one PayPal and one bank method; the first method stored becomes the primary one. Bank fields are validated against the requirements of the account country.

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**paypalEmail**stringPayPal Email (required if method is PAYPAL)**payoutMethod**stringrequiredPayout method to store the details underAvailable options`PAYPAL``BANK`**bankDetails**objectBank Details (required if method is BANK)

```json
{
  "paypalEmail": "john@deo.com",
  "payoutMethod": "PAYPAL",
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
        "value": "12345678"
      }
    ]
  }
}
```

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
