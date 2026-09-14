> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-customers). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List customers

**Endpoint:** `GET /affiliate-manager/:locationId/affiliates/:affiliateId/customers`

Retrieve the list of customers for an affiliate.

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

**query**

string

query

**status**

string

Customer Type

**campaignId**

string

Campaign Id

**skip**

integer

Number of customers to skip

**Possible values:** `>= 0`

`0`

**limit**

integer

Number of customers to return, maximum 100

**Possible values:** `>= 1` and `<= 100`

`10`

**commissionStatus**

string

Commission Status

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**customers**object[]requiredCustomers associated with the affiliate**meta**objectrequiredPagination metadata

```json
{
  "customers": [
    {
      "_id": "ve9EPM428h8vShlRW1KT",
      "locationId": "ve9EPM428h8vShlRW1KT",
      "affiliateId": "ve9EPM428h8vShlRW1KT",
      "campaignId": "ve9EPM428h8vShlRW1KT",
      "contactId": "ve9EPM428h8vShlRW1KT",
      "firstName": "John",
      "lastName": "Doe",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+15551234567",
      "type": "customer",
      "deleted": false,
      "isDisabled": false,
      "revenue": 100,
      "commissionAmount": 25,
      "planName": "Basic Plan",
      "currency": "USD",
      "locationCurrency": "USD",
      "createdAt": "2026-01-01T00:00:00.000Z",
      "updatedAt": "2026-01-01T00:00:00.000Z"
    }
  ],
  "meta": {
    "count": 1
  }
}
```
