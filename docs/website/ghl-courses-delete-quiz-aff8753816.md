> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/delete-quiz). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Quiz

**Endpoint:** `DELETE /courses/products/:productId/quizzes/:quizId`

Delete a quiz. Requires a Location token with courses.write. Send Version: v3.

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

Quiz deleted
