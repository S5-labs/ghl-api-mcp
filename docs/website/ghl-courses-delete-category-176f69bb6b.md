> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/delete-category). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Category

**Endpoint:** `DELETE /courses/products/:productId/categories/:categoryId`

Delete a category. Requires a Location token with courses.write.

## Request

**Version**

string

required

API Version

Available options

`v3`

**productId**

string<uuid>

required

Product id

**Possible values:** `non-empty`

**categoryId**

string<uuid>

required

Category id

**Possible values:** `non-empty`

**locationId**

string

required

Location id or sub-account id is required.

**Possible values:** `non-empty`

Category deleted
