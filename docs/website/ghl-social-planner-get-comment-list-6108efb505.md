> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-comment-list). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List comments for a post or thread

**Endpoint:** `POST /social-media-posting/comments/:platform/list`

Paginated list of comments scoped to a post (`parentId` = postId) or a comment thread (`parentId` = commentId). Use `skip`/`limit` for pagination, `sortBy` for ordering, `originIds` to filter by connected account, and `search` for keyword search.

## Request

**Version**

string

required

API Version

Available options

`v3`

**platform**

string

required

Supported Comments Platforms

Available options

`facebook`

`instagram`

`linkedin`

`community`

`tiktok`

`bluesky`

`youtube`

`threads`

**locationId**

string

required

Location ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**fromDate**stringStart of the published-date window (ISO 8601). If provided, `toDate` is also required, and `fromDate` must be ≤ `toDate`. Omit both to disable date filtering.**toDate**stringEnd of the published-date window (ISO 8601). If provided, `fromDate` is also required.**originIds**string[]requiredOrigin IDs of connected accounts to filter by**sortBy**stringSort by top comments or latest commentsAvailable options`top``latest`**search**stringSearch**skip**numberPagination offset — number of comments to skip (zero-based). Must be ≥ 0.**Possible values:** `>= 0`**Default value:**`0`**limit**numberPagination page size — number of comments to return. Must be between 1 and 100.**Possible values:** `>= 1` and `<= 100`**Default value:**`10`**parentId**stringParent ID — pass the Highlevel post ID (for replies under a specific post) or the Highlevel comment ID (for replies under a specific comment). Omit to list all top-level comments for the location filtered by `originIds`. Must be a valid 24-character Highlevel ID, not the native platform ID.

```json
{
  "fromDate": "2026-05-22T05:32:49.463Z",
  "toDate": "2026-05-29T05:32:49.463Z",
  "originIds": [
    "1234",
    "5678",
    "9101"
  ],
  "sortBy": "top",
  "search": "1234",
  "skip": 0,
  "limit": 10,
  "parentId": "6975b186f3442844ec07665b"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectrequiredComments and pagination metadata

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Fetched Comments",
  "results": {
    "comments": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "platform": "facebook",
        "platformCommentId": "122129390871181019_974705035458625",
        "platformParentId": "956033194258752_122129390871181019",
        "platformPostId": "122129390871181019",
        "postId": "6a169db95c78177a5c24ef7c",
        "originId": "956033194258752",
        "isParentThread": true,
        "isPost": false,
        "content": "Nice post!",
        "attachments": [
          {
            "type": "image/jpeg",
            "url": "https://example.com/image.jpg",
            "thumbnail": "https://example.com/thumb.jpg",
            "videoUrl": "https://example.com/video.mp4"
          }
        ],
        "author": {
          "id": "123456789",
          "name": "John Doe",
          "profilePic": "https://example.com/avatar.jpg"
        },
        "level": 1,
        "likeCount": 0,
        "reactionCount": 0,
        "replyCount": 0,
        "shareCount": 0,
        "repostCount": 0,
        "quoteCount": 0,
        "previewLink": "https://www.facebook.com/.../posts/...",
        "isRead": false,
        "isDeleted": false,
        "isEdited": false,
        "publishedAt": "2026-04-01T10:00:00.000Z",
        "createdAt": "2026-04-01T10:00:00.000Z",
        "updatedAt": "2026-04-01T10:00:00.000Z"
      }
    ],
    "meta": {
      "total": 42,
      "totalUnread": 7,
      "skip": 0,
      "limit": 10,
      "hasMore": true
    }
  }
}
```
