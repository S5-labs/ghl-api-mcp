> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/marketplace/has-funds). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Check if account has sufficient funds

**Endpoint:** `GET /marketplace/billing/charges/has-funds`

Check if account has sufficient funds

## Request

application/json

Returns fund availability status

- application/json

- Schema
- Example (auto)

**Schema**

**hasFunds**booleanIndicates whether the sub-account has sufficient funds to be charged

```json
{
  "hasFunds": true
}
```
