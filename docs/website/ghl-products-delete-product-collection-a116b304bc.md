> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-collection). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Product Collection

**Endpoint:** `DELETE /products/collections/:collectionId`

Delete specific product collection with Id :collectionId

## Request

**Version**

string

required

API Version

Available options

`v3`

**collectionId**

string

required

MongoId of the collection

**altId**

string

required

Location Id

**altType**

string

required

The type of alt. For now it is only LOCATION

Available options

`location`

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
