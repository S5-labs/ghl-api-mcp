> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/create-course). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Course

**Endpoint:** `POST /courses/products`

Create a course in the location. Requires a Location token with courses.write. Accepts product columns and nested customizations. locationId, userId, id, originId, source, and processing are not accepted.

## Request

**Version**

string

required

API Version

Available options

`v3`

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

**description**stringnullableCourse description**posterImage**stringnullableCourse poster image URL**customJs**stringnullable**customCss**stringnullable**customHeader**stringnullable**customFooter**stringnullable**commentPrivacy**stringAvailable options`public``instructorOnly``publicAndInstructor`**libraryOrder**numberSingle-product library position. Membership create always assigns the next order; this value is applied on the follow-up product update. Bulk reordering stays on membership PUT /products/library-order.**customizations**object**title**stringrequiredCourse title

```json
{
  "description": "Intro to the course",
  "posterImage": "https://cdn.example.com/course.png",
  "customJs": "string",
  "customCss": "string",
  "customHeader": "string",
  "customFooter": "string",
  "commentPrivacy": "public",
  "libraryOrder": 1,
  "customizations": {
    "logoImage": "string",
    "heroImage": "string",
    "heroOverlayColor": "string",
    "heroTextAlignment": "left",
    "heroSpacing": "xs",
    "favicon": "string",
    "instructorHeading": "string",
    "instructorHeadshot": "string",
    "instructorName": "string",
    "instructorTitle": "string",
    "instructorBio": "string",
    "templateId": "string",
    "settings": {},
    "lessonSettings": {}
  },
  "title": "My Course"
}
```

application/json

Created

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
