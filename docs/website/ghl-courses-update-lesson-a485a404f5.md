> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/update-lesson). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Lesson

**Endpoint:** `PUT /courses/products/:productId/lessons/:lessonId`

Update a lesson. Requires a Location token with courses.write. Accepts the same lesson columns as create. All fields optional. Omit categoryId to keep the current category.

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

**description**stringnullable**visibility**stringAvailable options`draft``published``locked`**posterImage**stringnullable**sequenceNo**number**commentStatus**stringAvailable options`visible``hidden``locked`**contentId**stringnullable**contentType**stringAvailable options`video``assignment``quiz``audio``funnel`**commentPermission**stringAvailable options`hidden``enabled``locked`**lockedByPost**stringnullable**lockedByCategory**stringnullable**certificateTemplateId**stringnullable**metaData**objectnullable**title**stringLesson title**categoryId**stringCategory id

```json
{
  "description": "string",
  "visibility": "draft",
  "posterImage": "string",
  "sequenceNo": 1,
  "commentStatus": "visible",
  "contentId": "string",
  "contentType": "video",
  "commentPermission": "hidden",
  "lockedByPost": "string",
  "lockedByCategory": "string",
  "certificateTemplateId": "string",
  "metaData": {},
  "title": "Lesson 1",
  "categoryId": "b2c3d4e5-f678-4901-bcde-f12345678901"
}
```

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredLesson id**title**stringrequired**description**stringnullablerequired**categoryId**stringrequired**visibility**stringrequiredAvailable options`draft``published``locked`**posterImage**stringnullablerequired**sequenceNo**numberrequired**commentStatus**stringrequiredAvailable options`visible``hidden``locked`**contentId**stringnullablerequired**contentType**stringrequiredAvailable options`video``assignment``quiz``audio``funnel`**commentPermission**stringrequiredAvailable options`hidden``enabled``locked`**lockedByPost**stringnullablerequired**lockedByCategory**stringnullablerequired**certificateTemplateId**stringnullablerequired**metaData**objectnullablerequired**createdAt**stringrequired**updatedAt**stringrequired

```json
{
  "id": "c3d4e5f6-7890-4123-cdef-123456789012",
  "title": "Lesson 1",
  "description": "string",
  "categoryId": "string",
  "visibility": "draft",
  "posterImage": "string",
  "sequenceNo": 0,
  "commentStatus": "visible",
  "contentId": "string",
  "contentType": "video",
  "commentPermission": "hidden",
  "lockedByPost": "string",
  "lockedByCategory": "string",
  "certificateTemplateId": "string",
  "metaData": {},
  "createdAt": "string",
  "updatedAt": "string"
}
```
