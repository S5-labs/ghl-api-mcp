> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/update-category). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Category

**Endpoint:** `PUT /courses/products/:productId/categories/:categoryId`

Update a category. Requires a Location token with courses.write. Accepts the same category columns as create. All fields optional.

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**description**stringnullable**parentCategory**stringnullable**visibility**stringAvailable options`published``draft``locked``drip`**posterImage**stringnullable**sequenceNo**number**dripDays**number**metadata**objectnullable**commentPermission**stringnullableOptional. Null is treated as omitted (membership defaults to enabled on create).Available options`hidden``enabled``locked`**lockedBy**stringnullablePublished lesson id in this product that unlocks this category. Must not be a draft lesson, a lesson in a draft module, or a lesson inside this category. When visibility is locked, provide lockedBy, lockedByCategory, or both.**lockedByCategory**stringnullablePublished category id in this product that unlocks this category. Must not be this category or a draft module. When visibility is locked, provide lockedBy, lockedByCategory, or both.**title**stringCategory title

```json
{
  "description": "string",
  "parentCategory": "string",
  "visibility": "published",
  "posterImage": "string",
  "sequenceNo": 1,
  "dripDays": 0,
  "metadata": {
    "dripUnit": "days",
    "dripDate": "string"
  },
  "commentPermission": "hidden",
  "lockedBy": "string",
  "lockedByCategory": "string",
  "title": "Module 1"
}
```

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredCategory id**title**stringrequired**description**stringnullablerequired**parentCategory**stringnullablerequired**visibility**stringrequiredAvailable options`published``draft``locked``drip`**posterImage**stringnullablerequired**sequenceNo**numberrequired**dripDays**numberrequired**metadata**objectnullablerequired**commentPermission**stringrequiredAvailable options`hidden``enabled``locked`**lockedBy**stringnullablerequired**lockedByCategory**stringnullablerequired**createdAt**stringrequired**updatedAt**stringrequired

```json
{
  "id": "b2c3d4e5-f678-4901-bcde-f12345678901",
  "title": "Module 1",
  "description": "First module",
  "parentCategory": "string",
  "visibility": "published",
  "posterImage": "string",
  "sequenceNo": 0,
  "dripDays": 0,
  "metadata": {
    "dripUnit": "days",
    "dripDate": "string"
  },
  "commentPermission": "hidden",
  "lockedBy": "string",
  "lockedByCategory": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```
