> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/validate-customer-lead). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Validate customer lead

**Endpoint:** `GET /affiliate-manager/:locationId/affiliates/:affiliateId/lead/validate`

Check whether a lead already exists for an affiliate customer.

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

**campaignId**

string

required

Campaign Id

**email**

string<email>

required

Lead email address

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**exist**booleanrequiredWhether a matching customer already exists

```json
{
  "exist": false
}
```
