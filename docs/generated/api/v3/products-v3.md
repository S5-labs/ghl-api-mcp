# Products API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/products-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for products API

## Products

### Bulk Update Products

**Endpoint:** `POST /products/bulk-update`
**Scope:** `products.write`
**Token Type:** Location-Access

API to bulk update products (price, availability, collections, delete)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `BulkUpdateDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Products updated successfully | `BulkUpdateResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Bulk Edit Products and Prices

**Endpoint:** `POST /products/bulk-update/edit`

API to bulk edit products and their associated prices (max 30 entities)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `BulkEditRequestDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Products and prices updated successfully | `BulkEditResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Product by ID

**Endpoint:** `GET /products/{productId}`
**Scope:** `products.readonly`
**Token Type:** Location-Access, Agency-Access

The "Get Product by ID" API allows to retrieve information for a specific product using its unique identifier. Use this endpoint to fetch details for a single product based on the provided product ID.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `productId` | path | `string` | Yes | ID or the slug of the product that needs to be returned |
| `locationId` | query | `string` | Yes | location Id |
| `sendWishlistStatus` | query | `boolean` | No | Parameter which will decide whether to show the wishlisting status of products |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetProductResponseDto` |
| `400` | Product not found | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Product by ID

**Endpoint:** `DELETE /products/{productId}`
**Scope:** `products.write`
**Token Type:** Location-Access, Agency-Access

The "Delete Product by ID" API allows deleting a specific product using its unique identifier. Use this endpoint to remove a product from the system.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `productId` | path | `string` | Yes | ID or the slug of the product that needs to be returned |
| `locationId` | query | `string` | Yes | location Id |
| `sendWishlistStatus` | query | `boolean` | No | Parameter which will decide whether to show the wishlisting status of products |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteProductResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Product by ID

**Endpoint:** `PUT /products/{productId}`
**Scope:** `products.write`
**Token Type:** Location-Access, Agency-Access

The "Update Product by ID" API allows modifying information for a specific product using its unique identifier. Use this endpoint to update details for a single product based on the provided product ID.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `productId` | path | `string` | Yes | ID or the slug of the product that needs to be returned |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateProductDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateProductResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Product

**Endpoint:** `POST /products/`
**Scope:** `products.write`
**Token Type:** Location-Access, Agency-Access

The "Create Product" API allows adding a new product to the system. Use this endpoint to create a product with the specified details. Ensure that the required information is provided in the request payload.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateProductDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateProductResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Products

**Endpoint:** `GET /products/`
**Scope:** `products.readonly`
**Token Type:** Location-Access, Agency-Access

The "List Products" API allows to retrieve a paginated list of products. Customize your results by filtering products based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve product information.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `limit` | query | `number` | No | The maximum number of items to be included in a single page of results |
| `offset` | query | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |
| `locationId` | query | `string` | Yes | LocationId is the id of the sub-account |
| `search` | query | `string` | No | The name of the product for searching. |
| `collectionIds` | query | `string` | No | Filter by product category Ids. Supports comma separated values |
| `collectionSlug` | query | `string` | No | The slug value of the collection by which the collection would be searched |
| `expand` | query | `array<string>` | No | Name of an entity whose data has to be fetched along with product. Possible entities are tax, stripe and paypal. If not mentioned, only ID will be returned in case of taxes |
| `productIds` | query | `array<string>` | No | List of product ids to be fetched. |
| `storeId` | query | `string` | No | fetch and project products based on the storeId |
| `includedInStore` | query | `boolean` | No | Separate products by which are included in the store and which are not |
| `availableInStore` | query | `boolean` | No | If the product is included in the online store |
| `sortOrder` | query | `string` | No | The order of sort which should be applied for the date |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListProductsResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Prices

### Create Price for a Product

**Endpoint:** `POST /products/{productId}/price`
**Scope:** `products/prices.write`
**Token Type:** Location-Access, Agency-Access

The "Create Price for a Product" API allows adding a new price associated with a specific product to the system. Use this endpoint to create a price with the specified details for a particular product. Ensure that the required information is provided in the request payload.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `productId` | path | `string` | Yes | ID of the product that needs to be used |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreatePriceDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreatePriceResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Prices for a Product

**Endpoint:** `GET /products/{productId}/price`
**Scope:** `products/prices.readonly`
**Token Type:** Location-Access, Agency-Access

The "List Prices for a Product" API allows retrieving a paginated list of prices associated with a specific product. Customize your results by filtering prices or paginate through the list using the provided query parameters.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `productId` | path | `string` | Yes | ID of the product that needs to be used |
| `limit` | query | `number` | No | The maximum number of items to be included in a single page of results |
| `offset` | query | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |
| `locationId` | query | `string` | Yes | The unique identifier for the location. |
| `ids` | query | `string` | No | To filter the response only with the given price ids, Please provide with comma separated |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListPricesResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Inventory

**Endpoint:** `GET /products/inventory`
**Scope:** `products/prices.readonly`
**Token Type:** Location-Access, Agency-Access

The "List Inventory API allows the user to retrieve a paginated list of inventory items. Use this endpoint to fetch details for multiple items in the inventory based on the provided query parameters.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `limit` | query | `number` | No | The maximum number of items to be included in a single page of results |
| `offset` | query | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `search` | query | `string` | No | Search string for Variant Search |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetInventoryResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Inventory

**Endpoint:** `POST /products/inventory`
**Scope:** `products/prices.write`
**Token Type:** Location-Access, Agency-Access

The Update Inventory API allows the user to bulk update the inventory for multiple items. Use this endpoint to update the available quantity and out-of-stock purchase settings for multiple items in the inventory.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateInventoryDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `UpdateInventoryResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Price by ID for a Product

**Endpoint:** `GET /products/{productId}/price/{priceId}`
**Scope:** `products/prices.readonly`
**Token Type:** Location-Access, Agency-Access

The "Get Price by ID for a Product" API allows retrieving information for a specific price associated with a particular product using its unique identifier. Use this endpoint to fetch details for a single price based on the provided price ID and product ID.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `productId` | path | `string` | Yes | ID of the product that needs to be used |
| `priceId` | path | `string` | Yes | ID of the price that needs to be returned |
| `locationId` | query | `string` | Yes | location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPriceResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Price by ID for a Product

**Endpoint:** `PUT /products/{productId}/price/{priceId}`
**Scope:** `products/prices.write`
**Token Type:** Location-Access, Agency-Access

The "Update Price by ID for a Product" API allows modifying information for a specific price associated with a particular product using its unique identifier. Use this endpoint to update details for a single price based on the provided price ID and product ID.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `productId` | path | `string` | Yes | ID of the product that needs to be used |
| `priceId` | path | `string` | Yes | ID of the price that needs to be returned |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdatePriceDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdatePriceResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Price by ID for a Product

**Endpoint:** `DELETE /products/{productId}/price/{priceId}`
**Scope:** `products/prices.write`
**Token Type:** Location-Access, Agency-Access

The "Delete Price by ID for a Product" API allows deleting a specific price associated with a particular product using its unique identifier. Use this endpoint to remove a price from the system.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `productId` | path | `string` | Yes | ID of the product that needs to be used |
| `priceId` | path | `string` | Yes | ID of the price that needs to be returned |
| `locationId` | query | `string` | Yes | location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeletePriceResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Store

### Fetch Product Store Stats

**Endpoint:** `GET /products/store/{storeId}/stats`
**Scope:** `products.readonly`
**Token Type:** Location-Access

API to fetch the total number of products, included in the store, and excluded from the store and other stats

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `storeId` | path | `string` | Yes | Products related to the store |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `search` | query | `string` | No | The name of the product for searching. |
| `collectionIds` | query | `string` | No | Filter by product collection Ids. Supports comma separated values |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetProductStatsResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Action to include/exclude the product in store

**Endpoint:** `POST /products/store/{storeId}`
**Scope:** `products.write`
**Token Type:** Location-Access

API to update the status of products in a particular store

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `storeId` | path | `string` | Yes | Products related to the store |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateProductStoreDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `UpdateProductStoreResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update product display priorities in store

**Endpoint:** `POST /products/store/{storeId}/priority`
**Token Type:** Location-Access

API to set the display priority of products in a store

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `storeId` | path | `string` | Yes | Products related to the store |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateDisplayPriorityBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully updated display priorities | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Collections

### Fetch Product Collections

**Endpoint:** `GET /products/collections`
**Scope:** `products/collection.readonly`
**Token Type:** Location-Access

Internal API to fetch the Product Collections

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `limit` | query | `number` | No | The maximum number of items to be included in a single page of results |
| `offset` | query | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |
| `altId` | query | `string` | Yes | Location Id |
| `altType` | query | `string` | Yes | The type of alt. For now it is only LOCATION |
| `collectionIds` | query | `string` | No | Ids of the collections separated by comma(,) for search purposes |
| `name` | query | `string` | No | Query to search collection based on names |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListCollectionResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Product Collection

**Endpoint:** `POST /products/collections`
**Scope:** `products/collection.write`
**Token Type:** Location-Access

Create a new Product Collection for a specific location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateProductCollectionsDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateCollectionResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Details about individual product collection

**Endpoint:** `GET /products/collections/{collectionId}`
**Scope:** `products/collection.readonly`
**Token Type:** Location-Access

Get Details about individual product collection

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `collectionId` | path | `string` | Yes | Collection Id |
| `altId` | query | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DefaultCollectionResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Product Collection

**Endpoint:** `PUT /products/collections/{collectionId}`
**Scope:** `products/collection.write`
**Token Type:** Location-Access

Update a specific product collection with Id :collectionId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `collectionId` | path | `string` | Yes | MongoId of the collection |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateProductCollectionsDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateProductCollectionResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Product Collection

**Endpoint:** `DELETE /products/collections/{collectionId}`
**Scope:** `products/collection.write`
**Token Type:** Location-Access

Delete specific product collection with Id :collectionId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `collectionId` | path | `string` | Yes | MongoId of the collection |
| `altId` | query | `string` | Yes | Location Id |
| `altType` | query | `string` | Yes | The type of alt. For now it is only LOCATION |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteProductCollectionResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Reviews

### Fetch Product Reviews

**Endpoint:** `GET /products/reviews`
**Scope:** `products.readonly`
**Token Type:** Location-Access

API to fetch the Product Reviews

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `limit` | query | `number` | No | The maximum number of items to be included in a single page of results |
| `offset` | query | `number` | No | The starting index of the page, indicating the position from which the results should be retrieved. |
| `sortField` | query | `string` | No | The field upon which the sort should be applied |
| `sortOrder` | query | `string` | No | The order of sort which should be applied for the sortField |
| `rating` | query | `number` | No | Key to filter the ratings |
| `startDate` | query | `string` | No | The start date for filtering reviews |
| `endDate` | query | `string` | No | The end date for filtering reviews |
| `productId` | query | `string` | No | Comma-separated list of product IDs |
| `storeId` | query | `string` | No | Comma-separated list of store IDs |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ListProductReviewsResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Fetch Review Count as per status

**Endpoint:** `GET /products/reviews/count`
**Scope:** `products.readonly`
**Token Type:** Location-Access

API to fetch the Review Count as per status

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `rating` | query | `number` | No | Key to filter the ratings |
| `startDate` | query | `string` | No | The start date for filtering reviews |
| `endDate` | query | `string` | No | The end date for filtering reviews |
| `productId` | query | `string` | No | Comma-separated list of product IDs |
| `storeId` | query | `string` | No | Comma-separated list of store IDs |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CountReviewsByStatusResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Product Reviews

**Endpoint:** `PUT /products/reviews/{reviewId}`
**Scope:** `products.write`
**Token Type:** Location-Access

Update status, reply, etc of a particular review

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `reviewId` | path | `string` | Yes | Review Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateProductReviewDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateProductReviewsResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Product Review

**Endpoint:** `DELETE /products/reviews/{reviewId}`
**Scope:** `products.write`
**Token Type:** Location-Access

Delete specific product review

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `reviewId` | path | `string` | Yes | Review Id |
| `altId` | query | `string` | Yes | Location Id or Agency Id |
| `altType` | query | `string` | Yes | — |
| `productId` | query | `string` | Yes | Product Id of the product |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteProductReviewResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Product Reviews

**Endpoint:** `POST /products/reviews/bulk-update`
**Scope:** `products.write`
**Token Type:** Location-Access

Update one or multiple product reviews: status, reply, etc.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateProductReviewsDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `UpdateProductReviewsResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### BulkUpdateFilters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `collectionIds` | `array<string>` | No | Filter by collection IDs |
| `productType` | `string` | No | Filter by product type |
| `availableInStore` | `boolean` | No | Filter by availability status |
| `search` | `string` | No | Filter by search term |

### PriceUpdateField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Type of price update |
| `value` | `number` | Yes | Value to update (amount or percentage based on type) |
| `roundToWhole` | `boolean` | No | Round to nearest whole number |

### BulkUpdateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `type` | `string` | Yes | Type of bulk update operation |
| `productIds` | `array<string>` | Yes | Array of product IDs |
| `filters` | `BulkUpdateFilters` | No | Filters to apply when selectAll is true |
| `price` | `PriceUpdateField` | No | Price update configuration |
| `compareAtPrice` | `PriceUpdateField` | No | Compare at price update configuration |
| `availability` | `boolean` | No | New availability status |
| `collectionIds` | `array<string>` | No | Array of collection IDs |
| `currency` | `string` | No | Currency code |

### BulkUpdateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |

### WeightOptionsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | `number` | Yes | Actual weight of the product |
| `unit` | `string` | Yes | Weight unit of the product |

### PriceDimensionsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `height` | `number` | Yes | Height of the price |
| `width` | `number` | Yes | Width of the price |
| `length` | `number` | Yes | Length of the price |
| `unit` | `string` | Yes | Unit of the price dimensions |

### ShippingOptionsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `weight` | `WeightOptionsDto` | No | Weight options of the product |
| `dimensions` | `PriceDimensionsDto` | No | Dimensions of the product |

### RecurringDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `interval` | `string` | Yes | The interval at which the recurring event occurs. |
| `intervalCount` | `number` | Yes | The number of intervals between each occurrence of the event. |

### BulkEditPriceDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Price ID |
| `name` | `string` | No | Price name |
| `amount` | `number` | No | Price amount |
| `currency` | `string` | No | Price currency |
| `compareAtPrice` | `number` | No | Compare at price |
| `availableQuantity` | `number` | No | Available quantity |
| `trackInventory` | `boolean` | No | Track inventory |
| `allowOutOfStockPurchases` | `boolean` | No | Allow out of stock purchases |
| `sku` | `string` | No | SKU |
| `trialPeriod` | `number` | No | Trial period in days |
| `totalCycles` | `number` | No | Total billing cycles |
| `setupFee` | `number` | No | Setup fee |
| `shippingOptions` | `ShippingOptionsDto` | No | Shipping options |
| `recurring` | `RecurringDto` | No | Recurring details |

### ProductSEODto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | SEO title |
| `description` | `string` | No | SEO description |

### BulkEditProductDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Product ID |
| `name` | `string` | No | Product name |
| `description` | `string` | No | Product description |
| `image` | `string` | No | Product image |
| `availableInStore` | `boolean` | No | Product availability in store |
| `prices` | `array<BulkEditPriceDto>` | No | Array of price variants for the product |
| `collectionIds` | `array<string>` | No | Collection IDs |
| `isLabelEnabled` | `boolean` | No | Enable product label |
| `isTaxesEnabled` | `boolean` | No | Enable taxes |
| `seo` | `ProductSEODto` | No | SEO metadata for the product |
| `slug` | `string` | No | Product URL slug |
| `automaticTaxCategoryId` | `string` | No | Automatic tax category ID |
| `taxInclusive` | `boolean` | No | Tax inclusive pricing |
| `taxes` | `array<object>` | No | Product taxes |
| `medias` | `array<object>` | No | Product media |
| `label` | `object` | No | Product label |

### BulkEditRequestDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `products` | `array<BulkEditProductDto>` | Yes | Array of products to update. Note: The total count includes all prices within each product. |

### BulkEditResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes | Success message |
| `status` | `boolean` | Yes | Operation status |
| `updatedCount` | `number` | Yes | Number of products updated |

### MembershipOfferDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes | Membership offer label |
| `value` | `string` | Yes | Membership offer label |
| `_id` | `string` | Yes | The unique identifier for the membership offer. |

### PriceMetaDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `source` | `string` | Yes | The source of the price. |
| `sourceId` | `string` | No | The id of the source of the price from where it is imported |
| `stripePriceId` | `string` | Yes | The Stripe price ID associated with the price. |
| `internalSource` | `string` | Yes | The internal source of the price. |

### CreatePriceDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the price. |
| `type` | `string` | Yes | The type of the price. |
| `currency` | `string` | Yes | The currency of the price. |
| `amount` | `number` | Yes | The amount of the price. ( min: 0 ) |
| `recurring` | `RecurringDto` | No | The recurring details of the price (if type is recurring). |
| `description` | `string` | No | A brief description of the price. |
| `membershipOffers` | `array<MembershipOfferDto>` | No | An array of membership offers associated with the price. |
| `trialPeriod` | `number` | No | The trial period duration in days (if applicable). |
| `totalCycles` | `number` | No | The total number of billing cycles for the price. ( min: 1 ) |
| `setupFee` | `number` | No | The setup fee for the price. |
| `variantOptionIds` | `array<string>` | No | An array of variant option IDs associated with the price. |
| `compareAtPrice` | `number` | No | The compare at price for the price. |
| `locationId` | `string` | Yes | The unique identifier of the location associated with the price. |
| `userId` | `string` | No | The unique identifier of the user who created the price. |
| `meta` | `PriceMetaDto` | No | Additional metadata associated with the price. |
| `trackInventory` | `boolean` | No | Need to track inventory stock quantity |
| `availableQuantity` | `number` | No | Available inventory stock quantity |
| `allowOutOfStockPurchases` | `boolean` | No | Continue selling when out of stock |
| `sku` | `string` | No | The unique identifier of the SKU associated with the price |
| `shippingOptions` | `ShippingOptionsDto` | No | Shipping options of the Price |
| `isDigitalProduct` | `boolean` | No | Is the product a digital product |
| `digitalDelivery` | `array<string>` | No | Digital delivery options |

### CreatePriceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | The unique identifier for the price. |
| `membershipOffers` | `array<MembershipOfferDto>` | No | An array of membership offers associated with the price. |
| `variantOptionIds` | `array<string>` | No | An array of variant option IDs associated with the price. |
| `locationId` | `string` | No | The unique identifier for the location. |
| `product` | `string` | No | The unique identifier for the associated product. |
| `userId` | `string` | No | The unique identifier for the user. |
| `name` | `string` | Yes | The name of the price. |
| `type` | `string` | Yes | The type of the price (e.g., one_time). |
| `currency` | `string` | Yes | The currency code for the price. |
| `amount` | `number` | Yes | The amount of the price. |
| `recurring` | `RecurringDto` | No | The recurring details of the price (if type is recurring). |
| `createdAt` | `string (date-time)` | No | The creation timestamp of the price. |
| `updatedAt` | `string (date-time)` | No | The last update timestamp of the price. |
| `compareAtPrice` | `number` | No | The compare-at price for comparison purposes. |
| `trackInventory` | `boolean` | No | Indicates whether inventory tracking is enabled. |
| `availableQuantity` | `number` | No | Available inventory stock quantity |
| `allowOutOfStockPurchases` | `boolean` | No | Continue selling when out of stock |

### DefaultPriceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | The unique identifier for the price. |
| `membershipOffers` | `array<MembershipOfferDto>` | No | An array of membership offers associated with the price. |
| `variantOptionIds` | `array<string>` | No | An array of variant option IDs associated with the price. |
| `locationId` | `string` | No | The unique identifier for the location. |
| `product` | `string` | No | The unique identifier for the associated product. |
| `userId` | `string` | No | The unique identifier for the user. |
| `name` | `string` | Yes | The name of the price. |
| `type` | `string` | Yes | The type of the price (e.g., one_time). |
| `currency` | `string` | Yes | The currency code for the price. |
| `amount` | `number` | Yes | The amount of the price. |
| `recurring` | `RecurringDto` | No | The recurring details of the price (if type is recurring). |
| `createdAt` | `string (date-time)` | No | The creation timestamp of the price. |
| `updatedAt` | `string (date-time)` | No | The last update timestamp of the price. |
| `compareAtPrice` | `number` | No | The compare-at price for comparison purposes. |
| `trackInventory` | `boolean` | No | Indicates whether inventory tracking is enabled. |
| `availableQuantity` | `number` | No | Available inventory stock quantity |
| `allowOutOfStockPurchases` | `boolean` | No | Continue selling when out of stock |

### ListPricesResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `prices` | `array<DefaultPriceResponseDto>` | Yes | An array of prices |
| `total` | `number` | Yes | — |

### InventoryItemDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | The unique identifier for the price |
| `name` | `string` | Yes | Name of the price/variant |
| `availableQuantity` | `number` | Yes | Available quantity in inventory |
| `sku` | `string` | Yes | SKU for the product variant |
| `allowOutOfStockPurchases` | `boolean` | Yes | Whether out of stock purchases are allowed |
| `product` | `string` | Yes | Product ID this price belongs to |
| `updatedAt` | `string` | Yes | Last update timestamp |
| `image` | `string` | No | Product image URL |
| `productName` | `string` | No | Product name |

### GetInventoryResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `inventory` | `array<InventoryItemDto>` | Yes | List of inventory items |
| `total` | `object` | Yes | Total count of inventory items |

### UpdateInventoryItemDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `priceId` | `string` | Yes | The unique identifier for the price, in MongoDB ID format. |
| `availableQuantity` | `number` | No | The available quantity of the item. |
| `allowOutOfStockPurchases` | `boolean` | No | Whether to continue selling the item when out of stock. |

### UpdateInventoryDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `items` | `array<UpdateInventoryItemDto>` | Yes | Array of items to update in the inventory. |

### UpdateInventoryResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |

### GetPriceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | The unique identifier for the price. |
| `membershipOffers` | `array<MembershipOfferDto>` | No | An array of membership offers associated with the price. |
| `variantOptionIds` | `array<string>` | No | An array of variant option IDs associated with the price. |
| `locationId` | `string` | No | The unique identifier for the location. |
| `product` | `string` | No | The unique identifier for the associated product. |
| `userId` | `string` | No | The unique identifier for the user. |
| `name` | `string` | Yes | The name of the price. |
| `type` | `string` | Yes | The type of the price (e.g., one_time). |
| `currency` | `string` | Yes | The currency code for the price. |
| `amount` | `number` | Yes | The amount of the price. |
| `recurring` | `RecurringDto` | No | The recurring details of the price (if type is recurring). |
| `createdAt` | `string (date-time)` | No | The creation timestamp of the price. |
| `updatedAt` | `string (date-time)` | No | The last update timestamp of the price. |
| `compareAtPrice` | `number` | No | The compare-at price for comparison purposes. |
| `trackInventory` | `boolean` | No | Indicates whether inventory tracking is enabled. |
| `availableQuantity` | `number` | No | Available inventory stock quantity |
| `allowOutOfStockPurchases` | `boolean` | No | Continue selling when out of stock |

### UpdatePriceDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the price. |
| `type` | `string` | Yes | The type of the price. |
| `currency` | `string` | Yes | The currency of the price. |
| `amount` | `number` | Yes | The amount of the price. ( min: 0 ) |
| `recurring` | `RecurringDto` | No | The recurring details of the price (if type is recurring). |
| `description` | `string` | No | A brief description of the price. |
| `membershipOffers` | `array<MembershipOfferDto>` | No | An array of membership offers associated with the price. |
| `trialPeriod` | `number` | No | The trial period duration in days (if applicable). |
| `totalCycles` | `number` | No | The total number of billing cycles for the price. ( min: 1 ) |
| `setupFee` | `number` | No | The setup fee for the price. |
| `variantOptionIds` | `array<string>` | No | An array of variant option IDs associated with the price. |
| `compareAtPrice` | `number` | No | The compare at price for the price. |
| `locationId` | `string` | Yes | The unique identifier of the location associated with the price. |
| `userId` | `string` | No | The unique identifier of the user who created the price. |
| `meta` | `PriceMetaDto` | No | Additional metadata associated with the price. |
| `trackInventory` | `boolean` | No | Need to track inventory stock quantity |
| `availableQuantity` | `number` | No | Available inventory stock quantity |
| `allowOutOfStockPurchases` | `boolean` | No | Continue selling when out of stock |
| `sku` | `string` | No | The unique identifier of the SKU associated with the price |
| `shippingOptions` | `ShippingOptionsDto` | No | Shipping options of the Price |
| `isDigitalProduct` | `boolean` | No | Is the product a digital product |
| `digitalDelivery` | `array<string>` | No | Digital delivery options |

### UpdatePriceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | The unique identifier for the price. |
| `membershipOffers` | `array<MembershipOfferDto>` | No | An array of membership offers associated with the price. |
| `variantOptionIds` | `array<string>` | No | An array of variant option IDs associated with the price. |
| `locationId` | `string` | No | The unique identifier for the location. |
| `product` | `string` | No | The unique identifier for the associated product. |
| `userId` | `string` | No | The unique identifier for the user. |
| `name` | `string` | Yes | The name of the price. |
| `type` | `string` | Yes | The type of the price (e.g., one_time). |
| `currency` | `string` | Yes | The currency code for the price. |
| `amount` | `number` | Yes | The amount of the price. |
| `recurring` | `RecurringDto` | No | The recurring details of the price (if type is recurring). |
| `createdAt` | `string (date-time)` | No | The creation timestamp of the price. |
| `updatedAt` | `string (date-time)` | No | The last update timestamp of the price. |
| `compareAtPrice` | `number` | No | The compare-at price for comparison purposes. |
| `trackInventory` | `boolean` | No | Indicates whether inventory tracking is enabled. |
| `availableQuantity` | `number` | No | Available inventory stock quantity |
| `allowOutOfStockPurchases` | `boolean` | No | Continue selling when out of stock |

### DeletePriceResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | returns true if the price is successfully deleted |

### GetProductStatsResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `totalProducts` | `number` | Yes | Total number of products |
| `includedInStore` | `number` | Yes | Number of products included in the store |
| `excludedFromStore` | `number` | Yes | Number of products excluded from the store |

### UpdateProductStoreDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `action` | `string` | Yes | Action to include or exclude the product from the store |
| `productIds` | `array<string>` | Yes | Array of product IDs |

### UpdateProductStoreResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |

### UpdateDisplayPriorityBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `products` | `array<array<object>>` | Yes | Array of products with their display priorities |

### ListCollectionResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array<array<object>>` | Yes | Array of Collections |
| `total` | `number` | Yes | The total count of the collections present, which is useful to calculate the pagination |

### ProductCategories

Type: `object`

### DefaultCollectionResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `ProductCategories` | Yes | Collection Data |
| `status` | `boolean` | Yes | Status of the operation |

### CollectionSEODto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | The title which will be displayed as an SEO format |
| `description` | `string` | No | The description which would be displayed in preview purposes |

### CreateProductCollectionsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id |
| `altType` | `string` | Yes | The type of alt. For now it is only LOCATION |
| `collectionId` | `string` | No | Unique Identifier of the Product Collection, Mongo Id |
| `name` | `string` | Yes | Name of the Product Collection |
| `slug` | `string` | Yes | Slug of the Product Collection which helps in navigation |
| `image` | `string` | No | The URL of the image that is going to be displayed as the collection Thumbnail |
| `seo` | `CollectionSEODto` | No | The metadata information which will be displayed in SEO previews |

### CollectionSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | The unique identifier for the collection |
| `altId` | `string` | Yes | Location Id to which the collection is associated |
| `name` | `string` | Yes | Name of the collection |
| `slug` | `string` | Yes | Slug of the collection with which navigation is established. Special Characters and spacing is not allowed and should be unique |
| `image` | `string` | Yes | The URL of the image that is going to be displayed as the collection Thumbnail |
| `seo` | `CollectionSEODto` | Yes | The information which will be displayed in SEO previews |
| `createdAt` | `string` | Yes | Date at which the collection was created |

### CreateCollectionResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `CollectionSchema` | Yes | created Collection |

### UpdateProductCollectionsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id |
| `altType` | `string` | Yes | The type of alt. For now it is only LOCATION |
| `name` | `string` | No | Name of the Product Collection |
| `slug` | `string` | No | Slug of the Product Collection which helps in navigation |
| `image` | `string` | No | The URL of the image that is going to be displayed as the collection Thumbnail |
| `seo` | `CollectionSEODto` | No | The metadata information which will be displayed in SEO previews |

### UpdateProductCollectionResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |

### DeleteProductCollectionResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |

### ListProductReviewsResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array<array<object>>` | Yes | Array of Collections |
| `total` | `number` | Yes | The total count of the collections present, which is useful to calculate the pagination |

### CountReviewsByStatusResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array<array<object>>` | Yes | Array of review status counts |

### UserDetailsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Name of the customer |
| `email` | `string` | Yes | Email of the customer |
| `phone` | `string` | No | Phone no of the customer |
| `isCustomer` | `boolean` | No | Is the person an admin or customer |

### ProductReviewDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `headline` | `string` | Yes | Headline of the Review |
| `comment` | `string` | Yes | Detailed Review of the product |
| `user` | `UserDetailsDto` | Yes | User who is giving the review/reply |

### UpdateProductReviewDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `productId` | `string` | Yes | Product Id |
| `status` | `string` | Yes | Status of the review |
| `reply` | `array<ProductReviewDto>` | No | Reply of the review |
| `rating` | `number` | No | Rating of the product |
| `headline` | `string` | No | Headline of the Review |
| `detail` | `string` | No | Detailed Review of the product |

### UpdateProductReviewsResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |

### UpdateProductReviewObjectDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reviewId` | `string` | Yes | Review Id |
| `productId` | `string` | Yes | Product Id |
| `storeId` | `string` | Yes | Store Id |

### UpdateProductReviewsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id or Agency Id |
| `altType` | `string` | Yes | — |
| `reviews` | `array<UpdateProductReviewObjectDto>` | Yes | Array of Product Reviews |
| `status` | `object` | Yes | Status of the review |

### DeleteProductReviewResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | Status of api action |
| `message` | `string` | No | Success message |

### ProductVariantOptionDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the option. |
| `name` | `string` | Yes | The name of the option. |

### ProductVariantDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | A unique identifier for the variant. |
| `name` | `string` | Yes | The name of the variant. |
| `options` | `array<ProductVariantOptionDto>` | Yes | An array of options for the variant. |

### ProductLabelDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | The content for the product label. |
| `startDate` | `string` | No | Start date in YYYY-MM-DDTHH:mm:ssZ format |
| `endDate` | `string` | No | Start date in YYYY-MM-DDTHH:mm:ssZ format |

### GetProductResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | The unique identifier for the product. |
| `description` | `string` | No | product description |
| `variants` | `array<ProductVariantDto>` | No | An array of variants for the product. |
| `locationId` | `string` | Yes | The unique identifier for the location. |
| `name` | `string` | Yes | The name of the product. |
| `productType` | `string` | Yes | The type of the product (e.g., PHYSICAL). |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the product. |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the product. |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. |
| `image` | `string` | No | The URL for the product image. |
| `collectionIds` | `array<string>` | No | An array of category Ids for the product |
| `isTaxesEnabled` | `boolean` | No | The field indicates whether taxes are enabled for the product or not. |
| `taxes` | `array<string>` | No | An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details. |
| `automaticTaxCategoryId` | `string` | No | Tax category ID for Automatic taxes calculation. |
| `label` | `ProductLabelDto` | No | The Product label details |
| `slug` | `string` | No | The slug of the product by which the product will be navigated |

### DeleteProductResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `boolean` | Yes | returns true if the product is successfully deleted |

### ProductMediaDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the media. |
| `title` | `string` | No | The title of the media file. |
| `url` | `string` | Yes | The URL where the media file is stored. |
| `type` | `string` | Yes | The type of the media file (e.g., image, video will be supporting soon). |
| `isFeatured` | `boolean` | No | Indicates whether the media is featured. |
| `priceIds` | `array<array<object>>` | No | Mongo ObjectIds of the prices for which the media is assigned |

### CreateProductDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the product. |
| `locationId` | `string` | Yes | The unique identifier for the location. |
| `description` | `string` | No | A brief description of the product. |
| `productType` | `string` | Yes | — |
| `image` | `string` | No | The URL for the product image. |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. |
| `medias` | `array<ProductMediaDto>` | No | An array of medias for the product. |
| `variants` | `array<ProductVariantDto>` | No | An array of variants for the product. |
| `collectionIds` | `array<string>` | No | An array of category Ids for the product |
| `isTaxesEnabled` | `boolean` | No | Are there any taxes attached to the product. If this is true, taxes array cannot be empty. |
| `taxes` | `array<string>` | No | List of ids of Taxes attached to the Product. If taxes are passed, isTaxesEnabled should be true. |
| `automaticTaxCategoryId` | `string` | No | Tax category ID for Automatic taxes calculation. |
| `isLabelEnabled` | `boolean` | No | Is the product label enabled. If this is true, label object cannot be empty. |
| `label` | `ProductLabelDto` | No | Details for Product Label |
| `slug` | `string` | No | The slug using which the product navigation will be handled |
| `seo` | `ProductSEODto` | No | SEO data for the product that will be displayed in the preview |
| `taxInclusive` | `boolean` | No | Whether the taxes should be included in the purchase price |

### CreateProductResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | The unique identifier for the product. |
| `description` | `string` | No | product description |
| `variants` | `array<ProductVariantDto>` | No | An array of variants for the product. |
| `locationId` | `string` | Yes | The unique identifier for the location. |
| `name` | `string` | Yes | The name of the product. |
| `productType` | `string` | Yes | The type of the product (e.g., PHYSICAL). |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the product. |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the product. |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. |
| `image` | `string` | No | The URL for the product image. |
| `collectionIds` | `array<string>` | No | An array of category Ids for the product |
| `isTaxesEnabled` | `boolean` | No | The field indicates whether taxes are enabled for the product or not. |
| `taxes` | `array<string>` | No | An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details. |
| `automaticTaxCategoryId` | `string` | No | Tax category ID for Automatic taxes calculation. |
| `label` | `ProductLabelDto` | No | The Product label details |
| `slug` | `string` | No | The slug of the product by which the product will be navigated |

### UpdateProductDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the product. |
| `locationId` | `string` | Yes | The unique identifier for the location. |
| `description` | `string` | No | A brief description of the product. |
| `productType` | `string` | Yes | — |
| `image` | `string` | No | The URL for the product image. |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. |
| `medias` | `array<ProductMediaDto>` | No | An array of medias for the product. |
| `variants` | `array<ProductVariantDto>` | No | An array of variants for the product. |
| `collectionIds` | `array<string>` | No | An array of category Ids for the product |
| `isTaxesEnabled` | `boolean` | No | Are there any taxes attached to the product. If this is true, taxes array cannot be empty. |
| `taxes` | `array<string>` | No | List of ids of Taxes attached to the Product. If taxes are passed, isTaxesEnabled should be true. |
| `automaticTaxCategoryId` | `string` | No | Tax category ID for Automatic taxes calculation. |
| `isLabelEnabled` | `boolean` | No | Is the product label enabled. If this is true, label object cannot be empty. |
| `label` | `ProductLabelDto` | No | Details for Product Label |
| `slug` | `string` | No | The slug using which the product navigation will be handled |
| `seo` | `ProductSEODto` | No | SEO data for the product that will be displayed in the preview |
| `taxInclusive` | `boolean` | No | Whether the taxes should be included in the purchase price |
| `prices` | `array<string>` | No | The prices of the product |

### UpdateProductResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | The unique identifier for the product. |
| `description` | `string` | No | product description |
| `variants` | `array<ProductVariantDto>` | No | An array of variants for the product. |
| `locationId` | `string` | Yes | The unique identifier for the location. |
| `name` | `string` | Yes | The name of the product. |
| `productType` | `string` | Yes | The type of the product (e.g., PHYSICAL). |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the product. |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the product. |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. |
| `image` | `string` | No | The URL for the product image. |
| `collectionIds` | `array<string>` | No | An array of category Ids for the product |
| `isTaxesEnabled` | `boolean` | No | The field indicates whether taxes are enabled for the product or not. |
| `taxes` | `array<string>` | No | An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details. |
| `automaticTaxCategoryId` | `string` | No | Tax category ID for Automatic taxes calculation. |
| `label` | `ProductLabelDto` | No | The Product label details |
| `slug` | `string` | No | The slug of the product by which the product will be navigated |

### DefaultProductResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | The unique identifier for the product. |
| `description` | `string` | No | product description |
| `variants` | `array<ProductVariantDto>` | No | An array of variants for the product. |
| `locationId` | `string` | Yes | The unique identifier for the location. |
| `name` | `string` | Yes | The name of the product. |
| `productType` | `string` | Yes | The type of the product (e.g., PHYSICAL). |
| `availableInStore` | `boolean` | No | Indicates whether the product is available in-store. |
| `createdAt` | `string (date-time)` | Yes | The creation timestamp of the product. |
| `updatedAt` | `string (date-time)` | Yes | The last update timestamp of the product. |
| `statementDescriptor` | `string` | No | The statement descriptor for the product. |
| `image` | `string` | No | The URL for the product image. |
| `collectionIds` | `array<string>` | No | An array of category Ids for the product |
| `isTaxesEnabled` | `boolean` | No | The field indicates whether taxes are enabled for the product or not. |
| `taxes` | `array<string>` | No | An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details. |
| `automaticTaxCategoryId` | `string` | No | Tax category ID for Automatic taxes calculation. |
| `label` | `ProductLabelDto` | No | The Product label details |
| `slug` | `string` | No | The slug of the product by which the product will be navigated |

### ListProductsStats

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total` | `number` | Yes | Total number of products |

### ListProductsResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `products` | `array<DefaultProductResponseDto>` | Yes | An array of products |
| `total` | `array<ListProductsStats>` | Yes | list products status |
