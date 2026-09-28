> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/update-blog-post). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Blog Post

**Endpoint:** `PUT /blogs/posts/:postId`

The "Update Blog Post" API updates an existing blog post for any given blog site.

## Request

**Version**

string

required

API Version

Available options

`v3`

**postId**

string

required

Identifier of the blog post to fetch

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**title**stringTitle of the blog post**locationId**stringrequiredSub-account (location) identifier the blog post belongs to**blogId**stringrequiredIdentifier of the blog site the post belongs to**imageUrl**stringCover image URL for the blog post**description**stringShort description or excerpt for the blog post**rawHTML**stringrequiredFull HTML body of the blog post**status**stringrequiredPublication status of the blog postAvailable options`DRAFT``PUBLISHED``SCHEDULED``ARCHIVED``DELETED`**wordCount**numberTotal word count of the blog post body**readTimeInMinutes**numberEstimated read time of the blog post, in minutes**archived**booleanWhether the blog post is archived**imageAltText**stringAlt text for the cover image**currentVersion**stringIdentifier of the current version of the blog post**metaData**objectMetadata about actors that performed lifecycle actions on the post**categories**string[]Identifiers of categories the blog post belongs to**tags**string[]Tags applied to the blog post**author**stringIdentifier of the author of the blog post**urlSlug**stringURL-safe slug used in the blog post path**canonicalLink**stringCanonical link override for SEO**importId**stringIdentifier of the import record this post was created from**type**stringPost type marker (e.g., "preview")**publishedAt**stringTimestamp when the post was (or will be) published**scheduledAt**string<date-time>Timestamp when the post is scheduled to publish**externalFonts**string[]External fonts referenced by the blog post body**originId**stringExternal identifier when the post was imported from another system**tocStyle**stringTable-of-contents style preference for the post**isAutoSave**booleanWhether this update is an automatic save from the editor**conversationHistoryPath**stringStorage path of the conversation history for AI-assisted edits**assistModeData**objectAssist-mode configuration captured at the time of generation**isAiGenerated**booleanWhether the blog post was generated using AI assistance**isAIGenerated**booleandeprecatedDeprecated. Use `isAiGenerated` instead. Kept for backwards compatibility.

```json
{
  "title": "My Blog Post",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "blogId": "lMOzIQZne5m6zQ528sT6",
  "imageUrl": "https://storage.googleapis.com/blog-assets/posts/cover.png",
  "description": "A practical guide to inbound marketing in 2026.",
  "rawHTML": "<h1>Hello</h1><p>This is my post.</p>",
  "status": "DRAFT",
  "wordCount": 1200,
  "readTimeInMinutes": 6,
  "archived": false,
  "imageAltText": "A laptop on a desk",
  "currentVersion": "66c381b38be80858b9af62b7",
  "metaData": {
    "updatedBy": "user_abc123",
    "publishedBy": "user_abc123"
  },
  "categories": [
    "659ecabc4a37969a2b7cc370"
  ],
  "tags": [
    "marketing",
    "seo"
  ],
  "author": "659ec9634a3796e4e47cc360",
  "urlSlug": "my-blog-post",
  "canonicalLink": "https://example.com/blog/my-blog-post",
  "importId": "64a1b2c3d4e5f6a7b8c9d0e1",
  "type": "preview",
  "publishedAt": "2026-05-13T17:14:57.000Z",
  "scheduledAt": "2026-06-01T09:00:00.000Z",
  "externalFonts": [
    "Inter",
    "Merriweather"
  ],
  "originId": "wp-post-42",
  "tocStyle": "sidebar",
  "isAutoSave": false,
  "conversationHistoryPath": "conversations/blog/64a1b2c3d4e5f6a7b8c9d0e1.json",
  "assistModeData": {
    "topic": "How to improve customer engagement using AI",
    "wordLimit": "1000-1500",
    "tone": "professional"
  },
  "isAiGenerated": false
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**updatedBlogPost**objectrequiredObject containing response data of blog post update

```json
{
  "updatedBlogPost": {
    "_id": "66c381b38be80858b9af62b6",
    "title": "How to grow your agency",
    "status": "PUBLISHED"
  }
}
```
