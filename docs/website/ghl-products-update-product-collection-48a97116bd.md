> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/update-product-collection). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Product Collection

**Endpoint:** `PUT /products/collections/:collectionId`

Update a specific product collection with Id :collectionId

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id**altType**stringrequiredThe type of alt. For now it is only LOCATIONAvailable options`location`**name**stringName of the Product Collection**slug**stringSlug of the Product Collection which helps in navigation**image**stringThe URL of the image that is going to be displayed as the collection Thumbnail**seo**objectThe metadata information which will be displayed in SEO previews

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "LOCATION",
  "name": "Best Sellers",
  "slug": "best-sellers",
  "image": "http://example.com/watermark.png",
  "seo": {
    "title": "Best Sellers",
    "description": "Collections where all the best products are available"
  }
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
