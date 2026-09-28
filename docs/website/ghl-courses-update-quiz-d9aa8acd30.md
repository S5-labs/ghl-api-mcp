> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/update-quiz). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Quiz

**Endpoint:** `PUT /courses/products/:productId/quizzes/:quizId`

Update a quiz. Requires a Location token with courses.write. Send Version: v3.

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

**title**stringQuiz title**requiredPassingGrade**booleanRequire a passing grade**passingGrade**numberPassing grade percent 0-100**passMessage**stringMessage shown on pass**failMessage**stringMessage shown on fail

```json
{
  "title": "Lesson quiz",
  "requiredPassingGrade": true,
  "passingGrade": 0,
  "passMessage": "string",
  "failMessage": "string"
}
```

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequired**title**stringrequired**lessonId**stringrequired**requiredPassingGrade**booleanrequired**passingGrade**numberrequired**passMessage**stringrequired**failMessage**stringrequired

```json
{
  "id": "d4e5f6a7-8901-4234-def0-234567890123",
  "title": "Lesson quiz",
  "lessonId": "c3d4e5f6-7890-4123-cdef-123456789012",
  "requiredPassingGrade": true,
  "passingGrade": 0,
  "passMessage": "string",
  "failMessage": "string"
}
```
