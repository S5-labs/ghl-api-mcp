> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-queues). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch category queues for a location

**Endpoint:** `POST /social-media-posting/category/queues/list`

Retrieves a paginated list of all category queues for a given location, excluding any that have been marked as deleted.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**skip**numberNumber of items to skip**limit**numberMaximum number of items to return

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "skip": 0,
  "limit": 10
}
```

application/json

Successfully retrieved category queues.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequired**statusCode**numberrequired**results**objectrequired**traceId**string

```json
{
  "success": true,
  "statusCode": 201,
  "results": {
    "message": "Queues fetched successfully",
    "queues": [
      {
        "_id": "60af88475f1b2c001f5d5f4b",
        "locationId": "location-123",
        "categoryId": "60af88475f1b2c001f5d5f4b",
        "timeSlots": [
          {
            "dayOfWeek": 0,
            "time": "09:00"
          }
        ],
        "enableFuturePosts": false,
        "prioritizeNewContent": false,
        "currentOrder": 1000,
        "status": "active",
        "startDate": "2023-01-01T12:00:00Z",
        "skipDateTime": [
          "2023-01-02T12:00:00Z"
        ],
        "currentPostId": "60af88475f1b2c001f5d5f4b",
        "totalPosts": 10,
        "lastScheduledTime": "2023-01-01T12:00:00Z",
        "createdBy": "user-123",
        "createdAt": "2023-01-01T00:00:00Z",
        "updatedAt": "2023-01-01T00:00:00Z",
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
        }
      }
    ],
    "meta": {
      "count": "100"
    }
  },
  "traceId": "string"
}
```
