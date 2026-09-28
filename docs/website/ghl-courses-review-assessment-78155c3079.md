> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/review-assessment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Review Assessment

**Endpoint:** `PUT /courses/products/:productId/assessments/:assessmentId/review`

Review an assessment submission. Requires a Location token with courses.write. Send Version: v3. Location tokens are not a staff reviewer.

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

- application/json

- Body
- Example (auto)

### Body**required**

**status**stringrequiredReview statusAvailable options`processing``passed``failed`**score**numberScore**feedback**stringFeedback for the learner

```json
{
  "status": "passed",
  "score": 90,
  "feedback": "string"
}
```

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequired**updated**booleanrequired

```json
{
  "id": "f6a7b8c9-0123-4567-8901-234567890abc",
  "updated": true
}
```
