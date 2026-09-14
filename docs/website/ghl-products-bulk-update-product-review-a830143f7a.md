> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/bulk-update-product-review). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Product Reviews

**Endpoint:** `POST /products/reviews/bulk-update`

Update one or multiple product reviews: status, reply, etc.

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

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**reviews**object[]requiredArray of Product Reviews**status**objectrequiredStatus of the review

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "reviews": [
    {
      "reviewId": "6578278e879ad2646715ba9c",
      "productId": "6578278e879ad2646715ba9d",
      "storeId": "a1b2c3d4e5f6g7h8i9j0k1l2"
    }
  ],
  "status": "approved"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**status**booleanrequiredStatus of api action**message**stringSuccess message

```json
{
  "status": true,
  "message": "Successfully created"
}
```
