> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/edit-post). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Edit post

**Endpoint:** `PUT /social-media-posting/:locationId/posts/:id`

Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.

The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:

Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations)

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

Location ID (also known as Sub-Account ID) for the business location.

**id**

string

required

Post ID of the post to retrieve, update, or delete.

**Get Post IDs from:** [List Posts API](https://marketplace.gohighlevel.com/social-media-posting/%7BlocationId%7D/posts/list) — use the `_id` field from each post.

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**accountIds**string[]Account IDs for the post. Each account ID identifies a connected social media account. **Get IDs from:** [Get Accounts API](https://marketplace.gohighlevel.com/social-media-posting/oauth/%7BlocationId%7D/accounts) — use the `id` field from each account. **One request = one post, shared across every account in this list.** All accounts share the same `summary` and the same `media` array. `summary` is trimmed to the **strictest** character limit among the selected platforms. Adding a Bluesky account (300 chars) therefore trims the caption to 300 for Facebook, Instagram and LinkedIn in that same request. `media` is capped to each platform's own maximum at publish time (e.g. Bluesky publishes the first 4 items, Instagram the first 10). **To keep full-length, platform-specific captions, send one request per platform** - one post per platform, each with only that platform's account IDs. **Validations:** Required for non-draft posts Must be a non-empty array All account IDs must be valid connected accounts for the location **summary**stringPost content/caption text. Character limits vary by platform. **Custom Values & Hashtags:** You can include custom values/variables in the content (e.g., `{{contact.name}}`) Hashtags: Use `#hashtag` format. Instagram allows max 30 hashtags. Mentions: Use platform-specific mention format (see `mentions` field for structured mentions) **Validations:** Instagram/Facebook Story: Caption NOT supported for direct publishing Facebook, LinkedIn, GMB: Content OR media is required (at least one) **Trimming across multiple platforms:** One post carries ONE caption for every account in `accountIds`, so the caption is silently trimmed to the **strictest** limit among the selected platforms — not to each platform's own limit. Facebook 63,206 · LinkedIn 3,000 · Instagram / TikTok 2,200 · Google 1,500 · Pinterest 800 · Threads 500 · **Bluesky 300** Example: `accountIds` covering Facebook + Instagram + Bluesky trims the caption to **300 characters on all three**. Instagram/Facebook Stories without push-notification publishing force the limit to 0, dropping the caption entirely. **To keep the full caption on each platform, send one request per platform** instead of one request mixing platforms. **Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations)**media**array[]Post Media Data. Per-platform media limits are listed in the reference link in the API description. **Across multiple platforms:** the same media array is sent to every account in `accountIds` and capped to each platform's own maximum at publish time — the array is NOT reduced to the strictest limit the way `summary` is. An 8-item array publishes 8 items to Facebook and the first 4 to Bluesky. Send one request per platform if a platform needs a different set of media.**status**stringPost status indicating the current state of the post. **Available Status Values:** `draft` - Post saved as draft, not yet ready for publishing `scheduled` - Post scheduled for future publishing (requires `scheduleDate`) `in_review` - Post pending approval (requires `scheduleDate` and `postApprovalDetails`) `published` - Post has been published `in_progress` - Post is currently being processed `pending` - Post is awaiting platform processing for Instagram media container creation `failed` - Post publishing failed `notification_sent` - Story notification sent (for manual story posting) `deleted` - Post has been deleted **Validations:** `scheduled` or `in_review` status requires `scheduleDate` to be set Submitting for review (`in_review`) requires `postApprovalDetails.approver`; approve/reject actions reuse the stored approver Draft posts skip most validations (accountIds, media requirements) Available options`draft``scheduled``in_review``published``in_progress``pending``failed``notification_sent``deleted`**scheduleDate**stringSchedule Date. Required when `status` is `scheduled` or `in_review`.**selectedBestTime**stringSelected Best Time slot for scheduling**createdBy**stringUser ID of the creator who is creating/managing the post. Must be a valid 24-character hex ID. **Get User IDs from:** [Get User API](https://marketplace.gohighlevel.com/users/%7BuserId%7D) — use the `id` field from the user object. **Validation:** Must be a valid 24-character hex ID.**followUpComment**stringFollow-up comment to be posted immediately after the main post is published. **Supported Platforms:** Facebook, Instagram, LinkedIn, Community, Threads, Bluesky, YouTube, TikTok **NOT Supported:** GBP (Google Business Profile), Pinterest TikTok: posted once the video becomes publicly viewable (~1-3 min), not instantly TikTok: only public videos support a follow-up comment. Set `privacyLevel` to `PUBLIC_TO_EVERYONE` — friends-only and private videos are not supported **Use Case:** Great for adding hashtags, additional context, or engagement prompts without cluttering the main post. Like `summary`, the follow-up comment is trimmed to the **strictest** limit among the post's platforms, not to each platform's own limit — a post that includes Bluesky (300) trims the comment to 300 everywhere. Send one request per platform to keep the full comment on each. **Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations)**ogTagsDetails**objectOg Tags Meta Data**type**stringrequiredType of post to create. Determines the format and platform requirements. **Available Types:** `post` - Standard feed post (all platforms) `story` - Temporary 24-hour story (Instagram, Facebook) `reel` - Short-form video content (Instagram, Facebook, TikTok, YouTube) **Customize Per Platform:** You can specify different content/types per platform using `facebookPostDetails.type`, `instagramPostDetails.type`, etc. **Validations:** Reels require exactly 1 video Stories: Caption not supported for Instagram/Facebook Facebook Groups do not support Reels Available options`post``story``reel`**postApprovalDetails**objectPost Approval Details**scheduleTimeUpdated**booleanFlag indicating if the schedule datetime was manually updated. Used for tracking rescheduled posts.**tags**string[]Array of Tag IDs to associate with the post for organization and filtering. **Get Tag IDs from:** [Get Tags API](https://marketplace.gohighlevel.com/social-media-posting/%7BlocationId%7D/tags) — use the `_id` field from each tag. **Validation:** All IDs must be valid 24-character hex IDs.**categoryId**stringCategory ID to organize the post. Categories help group related posts. **Get Category IDs from:** [Get Categories API](https://marketplace.gohighlevel.com/social-media-posting/%7BlocationId%7D/categories) — use the `_id` field. **Validation:** Must be a valid 24-character hex ID.**applyWatermark**booleanApply watermark to media in this post. **Note:** Watermarks are applied to images only. Videos are not watermarked.**tiktokPostDetails**objectTiktok Post Details**gmbPostDetails**objectGMB Post Details**userId**stringUser ID of the user creating/managing the post. Required for OAuth channel posts (non-draft).**linkedinPostDetails**objectLinkedIn-specific post configuration. **Key Fields:** `postAsPdf`: Set to `true` to post images as a PDF carousel document `pdfTitle`: Title for the PDF document (max 100 characters) **Limits:** Max 9 images/videos for regular posts Max 300 pages for PDF carousel Max PDF size: 100 MB **Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations)**pinterestPostDetails**objectPinterest-specific post configuration. Required when posting to Pinterest accounts. **Required Fields:** `boardIds`: Object mapping account OAuth IDs to Pinterest board IDs **Optional Fields:** `title`: Pin title (max 100 characters) `link`: Destination URL for the pin (max 2048 characters) **Get Board IDs:** Use the Pinterest boards API or retrieve from connected account details. **Limits:** Max 1 image/video per pin Caption max 800 characters **Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations)**facebookPostDetails**objectFacebook-specific post configuration. **Key Fields:** `type`: Post type (`post`, `story`, `reel`) **Restrictions:** Facebook Groups do NOT support Reels Reels require exactly 1 video Stories do not support captions **Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations)**instagramPostDetails**objectInstagram-specific post configuration. **Key Fields:** `type`: Post type (`post`, `story`, `reel`) `collaborators`: Map of account IDs to Instagram usernames for collaboration invites (max 5 per account) `showOnFeed`: Show reel on profile feed (for reels) **Collaborators Structure:** `{ "accountId": ["username1", "username2"] }` Where `accountId` is from [Get Accounts API](https://marketplace.gohighlevel.com/social-media-posting/oauth/%7BlocationId%7D/accounts) and usernames are Instagram handles without @. **Restrictions:** Media is REQUIRED for all Instagram posts Max 30 hashtags allowed in caption Stories do not support captions Collaborators: Posts/Reels only (NOT Stories) Reels require exactly 1 video **Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations)**youtubePostDetails**objectYouTube-specific post configuration. **Key Fields:** `title`: Video title (max 100 characters) `type`: Video type (`video` for regular videos, `short` for YouTube Shorts) `privacyLevel`: Video visibility (`private`, `public`, `unlisted`) **Limits:** Max 1 video per post Caption (description) max 5,000 characters **Requirements:** Video is REQUIRED for YouTube posts `type` field is required **communityPostDetails**objectCommunity-specific post configuration for platform Communities. **Required Fields:** `title`: Post title (max 1,000 characters) `postAsUser`: Map of account IDs to user objects (id, name, avatar) **Optional Fields:** `notifyAllGroupMembers`: Send notification to all group members **Limits:** Max 4 media items Caption max 100,000 characters

```json
{
  "accountIds": [
    "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
  ],
  "summary": "Hello World! Check out our latest updates. #social #marketing",
  "media": [
    {
      "url": "https://example.com/image.jpg",
      "type": "image/jpeg",
      "caption": "Sample caption"
    }
  ],
  "status": "draft",
  "scheduleDate": "2024-01-15T10:00:00Z",
  "selectedBestTime": "2024-01-15T10:00:00Z",
  "createdBy": "65f151c99bc2bf3aaf970d72",
  "followUpComment": "What do you think? Let us know in the comments!",
  "ogTagsDetails": {
    "metaImage": "https://example.com/image.jpg",
    "metaLink": "https://www.yahoo.com/",
    "ogTitle": "Page Title",
    "ogDescription": "Page Description"
  },
  "type": "post",
  "postApprovalDetails": {
    "approver": "iVrVJ2uoXNF0wzcBzgl5",
    "approvalStatus": "pending"
  },
  "scheduleTimeUpdated": true,
  "tags": [
    "65f151c99bc2bf3aaf970d72",
    "65f151c99bc2bf3aaf970d73"
  ],
  "categoryId": "65f151c99bc2bf3aaf970d72",
  "applyWatermark": true,
  "tiktokPostDetails": {
    "privacyLevel": "PUBLIC_TO_EVERYONE",
    "enableComment": true,
    "enableDuet": false
  },
  "gmbPostDetails": {
    "gmbEventType": "STANDARD",
    "actionType": "BOOK",
    "url": "https://example.com"
  },
  "userId": "sdfdsfdsfEWEsdfsdsW32dd",
  "linkedinPostDetails": {
    "visibility": "PUBLIC"
  },
  "pinterestPostDetails": {
    "boardId": "123456789",
    "title": "Pin Title"
  },
  "facebookPostDetails": {
    "type": "feed"
  },
  "instagramPostDetails": {
    "type": "feed",
    "share_to_feed": true
  },
  "youtubePostDetails": {
    "title": "Video Title",
    "privacyStatus": "public"
  },
  "communityPostDetails": {
    "type": "text"
  }
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Updated Post"
}
```
