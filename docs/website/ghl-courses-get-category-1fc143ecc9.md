> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/get-category). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Category

**Endpoint:** `GET /courses/products/:productId/categories/:categoryId`

Get a category by id. Requires a Location token with courses.readonly. Returns the full category object.

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
