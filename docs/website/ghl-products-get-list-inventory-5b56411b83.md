> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/get-list-inventory). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Inventory

**Endpoint:** `GET /products/inventory`

The "List Inventory API allows the user to retrieve a paginated list of inventory items. Use this endpoint to fetch details for multiple items in the inventory based on the provided query parameters.

## Request

**Version**

string

required

API Version

Available options

`v3`

**limit**

number

The maximum number of items to be included in a single page of results

`0`

**offset**

number

The starting index of the page, indicating the position from which the results should be retrieved.

`0`

**altId**

string

required

Location Id or Agency Id

**altType**

string

required

Available options

`location`

**search**

string

Search string for Variant Search

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**inventory**object[]requiredList of inventory items**total**objectrequiredTotal count of inventory items

```json
{
  "inventory": [
    {
      "_id": "6241712be68f7a98102ba272",
      "name": "Medium T-shirt",
      "availableQuantity": 50,
      "sku": "TSHIRT-MED-001",
      "allowOutOfStockPurchases": false,
      "product": "6241712be68f7a98102ba270",
      "updatedAt": "2023-12-12T09:27:42.355Z",
      "image": "https://example.com/images/product.jpg",
      "productName": "T-shirt"
    }
  ],
  "total": {
    "total": 100
  }
}
```
