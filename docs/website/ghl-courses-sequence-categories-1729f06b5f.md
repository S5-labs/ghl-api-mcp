> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/sequence-categories). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Sequence Categories

**Endpoint:** `PUT /courses/products/:productId/categories/sequence`

Reorder categories in a course. Requires a Location token with courses.write.

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

**ids**string[]requiredCategory ids in display order

```json
{
  "ids": [
    "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
  ]
}
```

application/json

Categories reordered

- application/json

- Schema
- Example (auto)

**Schema**

**ok**booleanrequiredWhether the reorder succeeded

```json
{
  "ok": true
}
```
