> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/list-categories). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Categories

**Endpoint:** `GET /courses/products/:productId/categories`

List categories for a course. Requires a Location token with courses.readonly. Each item is the full category object.

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
      "id": "b2c3d4e5-f678-4901-bcde-f12345678901",
      "title": "Module 1",
      "description": "First module",
      "parentCategory": null,
      "visibility": "published",
      "posterImage": "https://cdn.example.com/module.png",
      "sequenceNo": 1,
      "dripDays": 0,
      "metadata": {
        "dripUnit": "days",
        "dripDate": null
      },
      "commentPermission": "hidden",
      "lockedBy": null,
      "lockedByCategory": null,
      "createdAt": "2026-04-20T10:00:00.000Z",
      "updatedAt": "2026-04-20T10:00:00.000Z"
    }
  ]
}
```
