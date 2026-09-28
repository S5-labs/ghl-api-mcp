> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/get-assessment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Assessment

**Endpoint:** `GET /courses/products/:productId/assessments/:assessmentId`

Get one assessment submission. Requires a Location token with courses.readonly. Send Version: v3.

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

**assessmentId**

string<uuid>

required

Assessment id

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

**id**stringrequired**lessonId**stringrequired**quizId**stringrequired**assignmentId**stringrequired**contactId**stringrequired**status**stringrequired**score**numberrequired**feedback**stringrequired**submissionType**stringrequired**attempt**numberrequired**submission**objectrequired

```json
{
  "id": "string",
  "lessonId": "string",
  "quizId": "string",
  "assignmentId": "string",
  "contactId": "string",
  "status": "string",
  "score": 0,
  "feedback": "string",
  "submissionType": "string",
  "attempt": 0,
  "submission": {}
}
```
