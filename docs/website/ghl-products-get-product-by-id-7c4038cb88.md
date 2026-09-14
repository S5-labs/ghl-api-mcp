> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Product by ID

**Endpoint:** `GET /products/:productId`

The "Get Product by ID" API allows to retrieve information for a specific product using its unique identifier. Use this endpoint to fetch details for a single product based on the provided product ID.

## Request

**Version**

string

required

API Version

Available options

`v3`

**productId**

string

required

ID or the slug of the product that needs to be returned

**locationId**

string

required

location Id

**sendWishlistStatus**

boolean

Parameter which will decide whether to show the wishlisting status of products

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredThe unique identifier for the product.**description**stringproduct description**variants**object[]An array of variants for the product.**locationId**stringrequiredThe unique identifier for the location.**name**stringrequiredThe name of the product.**productType**stringrequiredThe type of the product (e.g., PHYSICAL).**availableInStore**booleanIndicates whether the product is available in-store.**createdAt**string<date-time>requiredThe creation timestamp of the product.**updatedAt**string<date-time>requiredThe last update timestamp of the product.**statementDescriptor**stringThe statement descriptor for the product.**image**stringThe URL for the product image.**collectionIds**string[]An array of category Ids for the product**isTaxesEnabled**booleanThe field indicates whether taxes are enabled for the product or not.**Default value:**`false`**taxes**string[]An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details.**automaticTaxCategoryId**stringTax category ID for Automatic taxes calculation.**label**objectThe Product label details**slug**stringThe slug of the product by which the product will be navigated

```json
{
  "_id": "655b33a82209e60b6adb87a5",
  "description": "This is a really awesome product",
  "variants": [
    {
      "id": "38s63qmxfr4",
      "name": "Size",
      "options": [
        {
          "id": "h4z7u0im2q8",
          "name": "XL"
        }
      ]
    }
  ],
  "locationId": "3SwdhCsvxI8Au3KsPJt6",
  "name": "Awesome Product",
  "productType": "PHYSICAL",
  "availableInStore": true,
  "createdAt": "2023-11-20T10:23:36.515Z",
  "updatedAt": "2024-01-23T09:57:04.846Z",
  "statementDescriptor": "abcde",
  "image": "https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png",
  "collectionIds": [
    "65d71377c326ea78e1c47df5",
    "65d71377c326ea78e1c47d34"
  ],
  "isTaxesEnabled": true,
  "taxes": [
    "654492a4e6bef380114de15a"
  ],
  "automaticTaxCategoryId": "65d71377c326ea78e1c47df5",
  "label": {
    "title": "Featured",
    "startDate": "2024-06-26T05:43:35.000Z",
    "endDate": "2024-06-30T05:43:39.000Z"
  },
  "slug": "washing-machine"
}
```
