> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/list-completions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Completions

**Endpoint:** `GET /courses/products/:productId/completions`

With contactId, return that learner's completed lessons. Without contactId, return a paginated creator rollup by contact. Requires a Location token with courses.readonly. Send Version: v3.

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

CRM contact id. Required for per-learner completions. Omit for the creator rollup.

**Possible values:** `non-empty`

**pageSize**

string

Creator page size (1-50). Ignored when contactId is set.

**Possible values:** `non-empty`

**pageNumber**

string

Creator page number (1-based). Ignored when contactId is set.

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

**completions**object[]required

```json
{
  "completions": [
    {
      "lessonId": "c3d4e5f6-7890-4123-cdef-123456789012",
      "completedAt": "2026-09-01T12:00:00.000Z"
    }
  ]
}
```
