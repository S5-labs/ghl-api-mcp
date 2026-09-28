> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-comment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create a comment or reply

**Endpoint:** `POST /social-media-posting/comments/:platform`

Create a top-level comment on a post (`isParentThread: true`, `parentId` = postId) or a reply to an existing comment (`isParentThread: false`, `parentId` = commentId). Per-platform content max length: Facebook 8000, Instagram 2200, Linkedin 3000, Community 8000, Tiktok 150, Bluesky 300, Youtube 10000, Threads 500.

**Optional-field platform support:**

- `attachments` — supported on **Facebook only**. Ignored on Instagram, LinkedIn, TikTok, Bluesky, Community (Community processes the field but external URLs are not rendered due to its bucket restriction).
- `mentions` — supported on **Facebook**, **LinkedIn**, and **Community** only. Ignored on Instagram, TikTok, Bluesky.
- `notifyAllGroupMembers` — supported on **Community** only. When `true`, all group members get a push/in-app notification (equivalent to an `@everyone` broadcast). Independent of the `mentions` array and of `@everyone` text in `content`. Default `false`.

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

**parentId**stringrequiredFor top-level comments (`isParentThread: true`): pass the post ID returned by the posts API. For replies (`isParentThread: false`): pass the parent comment ID returned by the list-comments API. In both cases this must be a valid 24-character internal ID — not the native platform ID.**isParentThread**booleanrequiredSet `true` to create a top-level comment on a post (parentId = post ID). Set `false` to create a reply to an existing comment (parentId = comment ID).**content**stringrequiredContent of the comment. Per-platform max length: Facebook 8000, Instagram 2200, Linkedin 3000, Community 8000, Tiktok 150, Bluesky 300, Youtube 10000, Threads 500.**attachments**object[]Attachments for the comment (max 1 image). **Supported on:** Facebook only. **Not supported on:** Instagram, LinkedIn, TikTok, Bluesky, Community — the field is accepted by the API but the attachment will not appear on the comment. (Community processes the field server-side, but external URLs are not rendered due to its bucket restriction.)**mentions**object[]Mentions for the comment. **Supported on:** Facebook, LinkedIn, Community. **Ignored on:** Instagram, TikTok, Bluesky — the field is accepted but mentions are not rendered on these platforms. `offset`/`length` must locate `name` inside `content` exactly — `content.substring(offset, offset + length) === name` — otherwise the request is rejected with 400. The example below aligns with the `content` example above.**notifyAllGroupMembers**booleanWhen `true`, all members of the Community group receive a push/in-app notification about this comment — equivalent to an `@everyone` broadcast. **Supported on:** Community only. Ignored on all other platforms (the field is accepted but no notification is sent). **Independent of the `mentions` array** — you do not need to add an `@everyone` entry to `mentions` for this to take effect. Conversely, putting the literal text `@everyone` in `content` does **not** by itself trigger notifications; only this flag does. Defaults to `false` (no broadcast notification). Use `true` only when the comment is genuinely intended for every member of the group — overuse may cause members to mute the group.**pollOptions**objectPoll options for Threads reply (2-4 options)**textAttachment**objectText attachment for Threads reply with optional styling info**threadLocationId**stringLocation ID for Threads reply location tagging

```json
{
  "parentId": "6975b186f3442844ec07665b",
  "isParentThread": true,
  "content": "Great post, Alex Morgan!",
  "attachments": [
    {
      "url": "https://example.com/image.jpg",
      "type": "image"
    }
  ],
  "mentions": [
    {
      "name": "Alex Morgan",
      "id": "102694781978972",
      "offset": 12,
      "length": 11
    }
  ],
  "notifyAllGroupMembers": false,
  "pollOptions": {
    "option_a": "Yes",
    "option_b": "No",
    "option_c": "Maybe"
  },
  "textAttachment": {
    "plaintext": "Styled text content",
    "textWithStylingInfo": [
      {
        "offset": 0,
        "length": 5,
        "styling_info": [
          "bold"
        ]
      }
    ]
  },
  "threadLocationId": "123456"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectrequiredThe created comment

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Created Comment",
  "results": {
    "_id": "507f1f77bcf86cd799439011",
    "platform": "facebook",
    "platformCommentId": "122129390871181019_974705035458625",
    "postId": "6a169db95c78177a5c24ef7c",
    "originId": "956033194258752",
    "isParentThread": true,
    "isPost": false,
    "message": "Nice post!",
    "attachments": [
      {
        "type": "image/jpeg",
        "url": "https://example.com/image.jpg"
      }
    ],
    "author": {
      "id": "123456789",
      "name": "John Doe",
      "profilePic": "https://example.com/avatar.jpg"
    }
  }
}
```
