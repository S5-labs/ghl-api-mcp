> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/update-blog-post). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Blog Post

**Endpoint:** `PUT /blogs/posts/:postId`

The "Update Blog Post" API allows you update blog post for any given blog site. Please use blogs/post-update.write

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

**title**stringrequired**locationId**stringrequired**blogId**stringrequiredYou can find the blog id from blog site dashboard link**imageUrl**stringrequired**description**stringrequired**rawHTML**stringrequired**status**stringrequiredAvailable options`DRAFT``PUBLISHED``SCHEDULED``ARCHIVED`**imageAltText**stringrequired**categories**string[]requiredThis needs to be array of category ids, which you can get from the category get api call.**tags**string[]**author**stringrequiredThis needs to be author id, which you can get from the author get api call.**urlSlug**stringrequired**wordCount**numberrequired**canonicalLink**string**publishedAt**stringrequiredProvide ISO timestamp

```json
{
  "title": "Your blog title",
  "locationId": "Location ID",
  "blogId": "Blog ID",
  "imageUrl": "Image URl",
  "description": "A short description",
  "rawHTML": "<h1>Your blog content</h1>",
  "status": "PUBLISHED",
  "imageAltText": "Alt text for your blog image",
  "categories": [
    "9c48df2694a849b6089f9d0d3513efe",
    "6683abde331c041f32c07aee"
  ],
  "tags": [
    "blog",
    "seo"
  ],
  "author": "6683abde331c041f32c07aea",
  "urlSlug": "any-blog-post-url",
  "wordCount": 100,
  "canonicalLink": "https://tryghl.blog/post/testing-unsplash",
  "publishedAt": "2025-02-05T18:30:47.000Z"
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
    "categories": [
      "659ecabc4a37969a2b7cc370",
      "6683abde331c041f32c07aee"
    ],
    "tags": [
      "Apple",
      "Banana"
    ],
    "archived": false,
    "_id": "66c381b38be80858b9af62b6",
    "title": "Banana is good source of energy",
    "description": "Description",
    "imageUrl": "https://storage.googleapis.com/ghl-test/fACm0Ojm5oC70G3DcFmE/media/66b5aa3b1745b2713a8d033f.jpeg",
    "status": "PUBLISHED",
    "imageAltText": "alt",
    "urlSlug": "banana-good-energy",
    "canonicalLink": "https://blog.chatgpts.agency/post/test-8384",
    "author": "659ec9634a3796e4e47cc360",
    "publishedAt": "2024-08-19T17:14:57.000Z",
    "updatedAt": "2024-08-19T17:32:36.182Z"
  }
}
```
