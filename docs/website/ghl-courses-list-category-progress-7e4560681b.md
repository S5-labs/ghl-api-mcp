> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/list-category-progress). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Category Progress

**Endpoint:** `GET /courses/products/:productId/categories/progress`

Return per-category progress for a contact in a product. Requires a Location token with courses.readonly. Send Version: v3.

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

**contactId**

string

required

CRM contact id of the learner

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

**categories**object[]required

```json
{
  "categories": [
    {
      "categoryId": "b2c3d4e5-f678-4901-bcde-f12345678901",
      "progress": 50
    }
  ]
}
```
