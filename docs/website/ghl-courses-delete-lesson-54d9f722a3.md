> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/delete-lesson). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Lesson

**Endpoint:** `DELETE /courses/products/:productId/lessons/:lessonId`

Delete a lesson. Requires a Location token with courses.write.

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

Lesson deleted
