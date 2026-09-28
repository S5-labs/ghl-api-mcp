> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/list-courses). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Courses

**Endpoint:** `GET /courses/products`

List courses in the location. Requires a Location token with courses.readonly. Send Version: v3. Each item is the full course object including customizations.

## Request

**Version**

string

required

API Version

Available options

`v3`

**limit**

string

Page size (1-50)

**Possible values:** `non-empty`

**cursor**

string

Opaque cursor from the previous page

**Possible values:** `non-empty`

**search**

string

Case-insensitive title search

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

**products**object[]required**nextCursor**stringnullablerequiredCursor for the next page, or null when there is no next page

```json
{
  "products": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "title": "My Course",
      "description": "Intro to the course",
      "posterImage": "https://cdn.example.com/course.png",
      "customJs": null,
      "customCss": null,
      "customHeader": null,
      "customFooter": null,
      "commentPrivacy": "public",
      "libraryOrder": 1,
      "createdAt": "2026-04-20T10:00:00.000Z",
      "updatedAt": "2026-04-20T10:00:00.000Z",
      "customizations": {
        "id": "d1e2f3a4-b5c6-4789-abcd-ef1234567890",
        "logoImage": "https://cdn.example.com/logo.png",
        "heroImage": "https://cdn.example.com/hero.png",
        "heroOverlayColor": "#000000",
        "heroTextAlignment": "centered",
        "heroSpacing": "medium",
        "favicon": "https://cdn.example.com/favicon.ico",
        "instructorHeading": "Your instructor",
        "instructorHeadshot": "https://cdn.example.com/instructor.png",
        "instructorName": "Jane Doe",
        "instructorTitle": "Lead instructor",
        "instructorBio": "Teaches this course",
        "templateId": null,
        "settings": null,
        "lessonSettings": null
      }
    }
  ],
  "nextCursor": null
}
```
