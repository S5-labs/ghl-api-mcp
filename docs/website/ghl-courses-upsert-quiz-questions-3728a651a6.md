> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/upsert-quiz-questions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Replace Quiz Questions

**Endpoint:** `PUT /courses/products/:productId/quizzes/:quizId/questions`

Batch upsert quiz questions. Requires a Location token with courses.write. Send Version: v3. quizId is taken from the path, not the body.

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

**quizId**

string<uuid>

required

Quiz id

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

**questions**object[]required

```json
{
  "questions": [
    {
      "title": "What is a course?",
      "questionType": "single",
      "sequenceNumber": 1,
      "options": [
        {
          "title": "A product",
          "isCorrect": true
        },
        {
          "title": "A contact",
          "isCorrect": false
        }
      ],
      "explanation": "Courses are products."
    }
  ]
}
```

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**questions**object[]required

```json
{
  "questions": [
    {
      "id": "aa11bb22-cc33-4455-8677-8899aabbccdd",
      "quizId": "d4e5f6a7-8901-4234-def0-234567890123",
      "title": "What is a course?",
      "questionType": "single",
      "sequenceNumber": 1,
      "options": [
        {
          "id": "opt-1",
          "title": "A product",
          "isCorrect": true
        },
        {
          "id": "opt-2",
          "title": "A contact",
          "isCorrect": false
        }
      ],
      "explanation": "Courses are products."
    }
  ]
}
```
