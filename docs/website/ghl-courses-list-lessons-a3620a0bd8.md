> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/list-lessons). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Lessons

**Endpoint:** `GET /courses/products/:productId/lessons`

List lessons for a course. Pass categoryId to list one category; omit it to list every category (N+1 membership reads). Requires a Location token with courses.readonly. Each item is the full lesson object.

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

**categoryId**

string

Limit lessons to this category

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

**lessons**object[]required

```json
{
  "lessons": [
    {
      "id": "c3d4e5f6-7890-4123-cdef-123456789012",
      "title": "Lesson 1",
      "description": "Intro lesson",
      "categoryId": "b2c3d4e5-f678-4901-bcde-f12345678901",
      "visibility": "published",
      "posterImage": "https://cdn.example.com/lesson.png",
      "sequenceNo": 1,
      "commentStatus": "visible",
      "contentId": null,
      "contentType": "video",
      "commentPermission": "hidden",
      "lockedByPost": null,
      "lockedByCategory": null,
      "certificateTemplateId": null,
      "metaData": null,
      "createdAt": "2026-04-20T10:00:00.000Z",
      "updatedAt": "2026-04-20T10:00:00.000Z"
    }
  ]
}
```
