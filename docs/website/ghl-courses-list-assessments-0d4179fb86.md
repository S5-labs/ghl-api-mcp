> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/list-assessments). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Assessments

**Endpoint:** `GET /courses/products/:productId/assessments`

List assessment submissions for a course. Requires a Location token with courses.readonly. Send Version: v3.

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

**status**

string

Assessment status filter

Available options

`processing`

`passed`

`failed`

**pageSize**

string

Page size (1-50)

**Possible values:** `non-empty`

**pageNumber**

string

Page number (1-based)

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

**assessments**object[]required**totalCount**numberrequired

```json
{
  "assessments": [
    {
      "id": "f6a7b8c9-0123-4567-8901-234567890abc",
      "lessonId": "c3d4e5f6-7890-4123-cdef-123456789012",
      "quizId": "d4e5f6a7-8901-4234-def0-234567890123",
      "assignmentId": null,
      "contactId": "abc123ContactId",
      "status": "passed",
      "score": 90,
      "feedback": "Great work",
      "submissionType": "quiz",
      "attempt": 1,
      "submission": {
        "answers": [
          {
            "questionId": "aa11bb22-cc33-4455-8677-8899aabbccdd",
            "value": "opt-1"
          }
        ]
      }
    }
  ],
  "totalCount": 1
}
```
