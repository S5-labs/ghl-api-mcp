> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-review). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Product Review

**Endpoint:** `DELETE /products/reviews/:reviewId`

Delete specific product review

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

**altId**

string

required

Location Id or Agency Id

**altType**

string

required

Available options

`location`

**productId**

string

required

Product Id of the product

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
