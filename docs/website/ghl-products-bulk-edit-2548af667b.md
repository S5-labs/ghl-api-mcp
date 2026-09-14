> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/bulk-edit). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Bulk Edit Products and Prices

**Endpoint:** `POST /products/bulk-update/edit`

API to bulk edit products and their associated prices (max 30 entities)

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

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**products**object[]requiredArray of products to update. Note: The total count includes all prices within each product.

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "products": [
    {
      "_id": "64a1b2c3d4e5f67890123456",
      "name": "Premium Product",
      "description": "A high-quality premium product with excellent features and durability",
      "image": "https://example.com/product-image.jpg",
      "availableInStore": true,
      "prices": [
        {
          "_id": "64a1b2c3d4e5f67890123456",
          "name": "Standard Plan",
          "amount": 99.99,
          "currency": "USD",
          "compareAtPrice": 129.99,
          "availableQuantity": 100,
          "trackInventory": true,
          "allowOutOfStockPurchases": false,
          "sku": "SKU-001",
          "trialPeriod": 7,
          "totalCycles": 12,
          "setupFee": 25,
          "shippingOptions": {
            "weight": {
              "value": 10,
              "unit": "kg"
            },
            "dimensions": {
              "height": 10,
              "width": 10,
              "length": 10,
              "unit": "cm"
            }
          },
          "recurring": {
            "interval": "day",
            "intervalCount": 1
          }
        }
      ],
      "collectionIds": [
        "64a1b2c3d4e5f67890123458",
        "64a1b2c3d4e5f67890123459"
      ],
      "isLabelEnabled": true,
      "isTaxesEnabled": true,
      "seo": {
        "title": "Best Product - Buy Now",
        "description": "This is the best product you can buy online with amazing features and great value"
      },
      "slug": "premium-product",
      "automaticTaxCategoryId": "64a1b2c3d4e5f67890123460",
      "taxInclusive": false,
      "taxes": [
        {}
      ],
      "medias": [
        {}
      ],
      "label": {}
    }
  ]
}
```

application/json

Products and prices updated successfully

- application/json

- Schema
- Example (auto)

**Schema**

**message**stringrequiredSuccess message**status**booleanrequiredOperation status**updatedCount**numberrequiredNumber of products updated

```json
{
  "message": "Products updated successfully",
  "status": true,
  "updatedCount": 5
}
```
