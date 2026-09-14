> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/products/list-invoices). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Products

**Endpoint:** `GET /products/`

The "List Products" API allows to retrieve a paginated list of products. Customize your results by filtering products based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve product information.

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

**locationId**

string

required

LocationId is the id of the sub-account

**search**

string

The name of the product for searching.

**collectionIds**

string

Filter by product category Ids. Supports comma separated values

**collectionSlug**

string

The slug value of the collection by which the collection would be searched

**expand**

string[]

Name of an entity whose data has to be fetched along with product. Possible entities are tax, stripe and paypal. If not mentioned, only ID will be returned in case of taxes

**productIds**

string[]

List of product ids to be fetched.

**storeId**

string

fetch and project products based on the storeId

**includedInStore**

boolean

Separate products by which are included in the store and which are not

**availableInStore**

boolean

If the product is included in the online store

**sortOrder**

string

The order of sort which should be applied for the date

Available options

`asc`

`desc`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**products**object[]requiredAn array of products**total**object[]requiredlist products status

```json
{
  "products": [
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
  ],
  "total": [
    {
      "total": 20
    }
  ]
}
```
