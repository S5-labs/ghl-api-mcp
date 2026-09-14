> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-payout-methods). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Payout Methods

**Endpoint:** `GET /affiliate-manager/:locationId/affiliate/:affiliateId/payout-method`

List the payout methods stored for an affiliate. Bank account values are returned as their last four characters only.

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

**skip**

number

**Possible values:** `>= 0` and `<= 10000`

`0`

**limit**

number

**Possible values:** `>= 1` and `<= 100`

`10`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**payoutMethods**object[]requiredPayout methods for the affiliate**meta**objectrequiredPagination metadata

```json
{
  "payoutMethods": [
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
  ],
  "meta": {
    "count": 2
  }
}
```
