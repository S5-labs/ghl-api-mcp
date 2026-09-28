> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/get-course). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Course

**Endpoint:** `GET /courses/products/:productId`

Get a course by id. Requires a Location token with courses.readonly. Returns product columns and nested customizations.

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

**id**stringrequiredProduct id**title**stringrequiredCourse title**description**stringnullablerequired**posterImage**stringnullablerequiredCourse poster image URL**customJs**stringnullablerequired**customCss**stringnullablerequired**customHeader**stringnullablerequired**customFooter**stringnullablerequired**commentPrivacy**stringrequiredAvailable options`public``instructorOnly``publicAndInstructor`**libraryOrder**numberrequired**createdAt**stringrequired**updatedAt**stringrequired**customizations**objectnullablerequired

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "title": "My Course",
  "description": "string",
  "posterImage": "https://cdn.example.com/course.png",
  "customJs": "string",
  "customCss": "string",
  "customHeader": "string",
  "customFooter": "string",
  "commentPrivacy": "public",
  "libraryOrder": 0,
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
```
