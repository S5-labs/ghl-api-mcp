> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/delete-coupon). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Coupon

**Endpoint:** `DELETE /payments/coupon`

The "Delete Coupon" API allows you to permanently remove a coupon from your system using its unique identifier. Use this endpoint to discontinue promotional offers or clean up unused coupons. Note that this action cannot be undone.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id**altType**stringrequiredAlt TypeAvailable options`location`**id**stringrequiredCoupon Id

```json
{
  "altId": "BQdAwxa0ky1iK2sstLGJ",
  "altType": "location",
  "id": "6241712be68f7a98102ba272"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates whether the delete was successful**traceId**stringrequiredUnique identifier for tracing this API request

```json
{
  "success": true,
  "traceId": "c667b18d-8f5e-44cf-a914"
}
```
