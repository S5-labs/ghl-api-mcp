> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/list-enrollments). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Product Enrollments

**Endpoint:** `GET /courses/products/:productId/enrollments`

List contacts enrolled in a product. Requires a Location token with courses.readonly. Send Version: v3. Reads user_purchases in the bound location. Does not return email or lesson progress. Cursor encodes createdAt and id.

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

**limit**

string

Page size (1-50)

**Possible values:** `non-empty`

**cursor**

string

Opaque cursor from the previous page

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

**enrollments**object[]required**nextCursor**stringnullablerequired

```json
{
  "enrollments": [
    {
      "contactId": "abc123ContactId",
      "userId": "user-1",
      "productId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "createdAt": "2026-04-20T10:00:00.000Z"
    }
  ],
  "nextCursor": "string"
}
```
