> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-edit-session-calendar). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch calendar view for an edit session

**Endpoint:** `POST /social-media-posting/category/queues/:queueId/edit/calendar`

Retrieves a calendar preview of scheduled posts based on draft items within an edit session. This shows how posts would be scheduled if changes were saved.

## Request

**Version**

string

required

API Version

Available options

`v3`

**queueId**

string

required

Category queue ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**sessionId**stringrequiredEdit session ID**startDate**stringrequiredStart Date in ISO format**endDate**stringrequiredEnd Date in ISO format**accountIds**string[]Filter by Account IDs. If not provided or empty, returns all posts.

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "sessionId": "60af88475f1b2c001f5d5f4b",
  "startDate": "2023-10-01T00:00:00.000Z",
  "endDate": "2023-10-31T23:59:59.999Z",
  "accountIds": [
    "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
  ]
}
```

application/json

Edit session calendar fetched successfully.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**results**objectrequiredResponse payload**traceId**stringTrace ID for debugging

```json
{
  "success": true,
  "statusCode": 201,
  "results": {
    "message": "Edit session calendar fetched successfully",
    "scheduledPosts": [
      {
        "_id": "60af88475f1b2c001f5d5f4b",
        "order": 1000,
        "variations": [
          {
            "_id": "60af88475f1b2c001f5d5f4c",
            "content": "Check out our latest blog post! #marketing #socialmedia",
            "mentions": [
              {
                "platform": "instagram",
                "username": "example_user",
                "offset": 10,
                "length": 12
              }
            ],
            "ogTags": {
              "metaLink": "https://example.com",
              "metaImage": "https://example.com/image.png",
              "ogTitle": "Example Title"
            }
          }
        ],
        "primaryImage": "https://example.com/images/post-image.png",
        "postId": "60af88475f1b2c001f5d5f4d",
        "post": {
          "_id": "60af88475f1b2c001f5d5f4d",
          "summary": "Scheduled queue post",
          "media": [],
          "type": "post"
        },
        "errors": [],
        "scheduledDateTime": "2023-10-15T10:00:00.000Z",
        "scheduledVariationIndex": 0,
        "isSkipped": false,
        "category": {
          "_id": "6756f381be2553245b08d30c",
          "name": "Category Name",
          "primaryColor": "#FFFFFF",
          "secondaryColor": "#000000",
          "deleted": false,
          "locationId": "fvg1TXIiVxGcdOaL0riG",
          "createdBy": "SQ6d63Va2PUbWEZ9k0TD",
          "createdAt": "2024-12-09T13:41:21.385Z",
          "updatedAt": "2024-12-09T13:41:21.385Z"
        },
        "timezone": "America/New_York",
        "isDraft": true,
        "originalItemId": "60af88475f1b2c001f5d5f4b"
      }
    ],
    "total": 25,
    "timezone": "America/New_York"
  },
  "traceId": "TRACE-abc123-def456"
}
```
