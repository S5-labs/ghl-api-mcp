> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/list-bulk-progress). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Product Progress

**Endpoint:** `GET /courses/progress`

Return progress for the given contact across productIds. Requires a Location token with courses.readonly. Send Version: v3. productIds is a comma-separated list of at most 50 UUID v4 product ids.

## Request

**Version**

string

required

API Version

Available options

`v3`

**contactId**

string

required

CRM contact id of the learner

**Possible values:** `non-empty`

**productIds**

string

required

Comma-separated product ids

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

**products**object[]required

```json
{
  "products": [
    {
      "id": "a1b2c3d4-e5f6-4890-abcd-ef1234567890",
      "progress": 40,
      "totalLessons": 10,
      "completedLessons": 4
    }
  ]
}
```
