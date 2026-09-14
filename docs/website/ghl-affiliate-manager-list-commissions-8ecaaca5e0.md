> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-commissions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Commissions

**Endpoint:** `GET /affiliate-manager/:locationId/commissions`

Retrieve the list of commissions for a location.

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

**campaignId**

string

Campaign Id

**affiliateId**

string

Affiliate Id

**status**

CommissionStatus

Status

Available options

`pending`

`approved`

`paid`

`denied`

**query**

string

Query

**skip**

number

Number of records to skip for pagination

`0`

**limit**

number

Maximum number of records to return. Maximum allowed value is 100.

`10`

**fromDate**

string

Filter commissions created on or after this date (YYYY-MM-DD)

**toDate**

string

Filter commissions created on or before this date (YYYY-MM-DD)

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**commissions**object[]requiredCommission list**meta**objectPagination metadata

```json
{
  "commissions": [
    {
      "_id": "6385d230f6d19db03eef6fb2",
      "productId": "6385d230f6d19db03eef6fb2",
      "productName": "Basic Plan",
      "qty": 1,
      "productCommission": 25,
      "commissionAmount": 25,
      "amount": 100,
      "commission": 25,
      "commissionType": "percentage",
      "campaignName": "Summer Promo",
      "transactionAt": "2024-06-16T00:00:00.000Z",
      "transactionId": "txn_123",
      "affiliateId": "6385d230f6d19db03eef6fb2",
      "payoutId": "6385d230f6d19db03eef6fb2",
      "status": "pending"
    }
  ],
  "meta": {
    "count": 42
  }
}
```
