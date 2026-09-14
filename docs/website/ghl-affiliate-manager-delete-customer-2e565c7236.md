> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/delete-customer). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete customer

**Endpoint:** `DELETE /affiliate-manager/:locationId/affiliates/:affiliateId/customer/:customerId`

Delete a lead or customer for an affiliate.

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

**customerId**

string

required

Customer Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeeded**booleanrequiredWhether the lead/customer was deleted

```json
{
  "succeeded": true
}
```
