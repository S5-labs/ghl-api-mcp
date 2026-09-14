> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/create-product-collection). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Product Collection

**Endpoint:** `POST /products/collections`

Create a new Product Collection for a specific location

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

**altId**stringrequiredLocation Id**altType**stringrequiredThe type of alt. For now it is only LOCATIONAvailable options`location`**collectionId**stringUnique Identifier of the Product Collection, Mongo Id**name**stringrequiredName of the Product Collection**slug**stringrequiredSlug of the Product Collection which helps in navigation**image**stringThe URL of the image that is going to be displayed as the collection Thumbnail**seo**objectThe metadata information which will be displayed in SEO previews

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "LOCATION",
  "collectionId": "66057f9d28536eae584ec047",
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

**data**objectrequiredcreated Collection

```json
{
  "data": {
    "_id": "655b33a82209e60b6adb87a5",
    "altId": "Z4Bxl8J4SaPEPLq9IQ8g",
    "name": "Best Sellers",
    "slug": "best-sellers",
    "image": "http://example.com/watermark.png",
    "seo": {
      "title": "Best Sellers",
      "description": "Collections where all the best products are available"
    },
    "createdAt": "2024-02-22T09:27:19.728Z"
  }
}
```
