> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/comments). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Comments

Documentation for Social Media Posting API

## 📄️Create a comment or reply

Create a top-level comment on a post (`isParentThread: true`, `parentId` = postId) or a reply to an existing comment (`isParentThread: false`, `parentId` = commentId). Per-platform content max length: Facebook 8000, Instagram 2200, Linkedin 3000, Community 8000, Tiktok 150, Bluesky 300, Youtube 10000, Threads 500.

## 📄️Like a comment

Like a comment by its **Highlevel** comment ID (the `_id` returned by the list-comments endpoint — not the native platform ID).

## 📄️Unlike a comment

Remove a like from a comment by its **Highlevel** comment ID (the `_id` returned by the list-comments endpoint — not the native platform ID).

## 📄️List comments for a post or thread

Paginated list of comments scoped to a post (`parentId` = postId) or a comment thread (`parentId` = commentId). Use `skip`/`limit` for pagination, `sortBy` for ordering, `originIds` to filter by connected account, and `search` for keyword search.
