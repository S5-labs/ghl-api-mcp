> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/update-product-review). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Product Reviews

**Endpoint:** `PUT /products/reviews/:reviewId`

Update status, reply, etc of a particular review

## Request

**Version**

string

required

API Version

Available options

`v3`

**reviewId**

string

required

Review Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**productId**stringrequiredProduct Id**status**stringrequiredStatus of the review**reply**object[]Reply of the review**rating**numberRating of the product**headline**stringHeadline of the Review**detail**stringDetailed Review of the product

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "productId": "6578278e879ad2646715ba9c",
  "status": "approved",
  "reply": [
    {
      "headline": "Amazing product with great quality",
      "comment": "This product exceeded my expectations in terms of quality and performance. Highly recommended!",
      "user": {
        "name": "John Doe",
        "email": "example@example.com",
        "phone": "+1-555-555-5555",
        "isCustomer": true
      }
    }
  ],
  "rating": "4.5",
  "headline": "Amazing product with great quality",
  "detail": "The product is for sure a must and recommended buy"
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
