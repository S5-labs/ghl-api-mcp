> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/create-lesson-assignment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Lesson Assignment

**Endpoint:** `POST /courses/products/:productId/lessons/:lessonId/assignment`

Create an assignment on a lesson. Requires a Location token with courses.write. Send Version: v3. Path lessonId is sent to membership as postId. locationId, userId, and productId are not accepted in the body.

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

**lessonId**

string<uuid>

required

Lesson id

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

**title**stringrequiredAssignment title**introduction**stringIntroduction shown to the learner**confirmMessage**stringMessage shown after submit**ungradedAssignment**booleanSkip grading when true

```json
{
  "title": "Submit homework",
  "introduction": "string",
  "confirmMessage": "string",
  "ungradedAssignment": true
}
```

application/json

Created

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequired**title**stringrequired**lessonId**stringrequired**introduction**stringrequired**confirmMessage**stringrequired**ungradedAssignment**booleanrequired

```json
{
  "id": "e5f6a7b8-9012-4345-ef01-345678901234",
  "title": "Submit homework",
  "lessonId": "c3d4e5f6-7890-4123-cdef-123456789012",
  "introduction": "string",
  "confirmMessage": "string",
  "ungradedAssignment": true
}
```
