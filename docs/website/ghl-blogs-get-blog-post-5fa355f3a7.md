> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blog-post). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Blog posts by Blog ID

**Endpoint:** `GET /blogs/posts/all`

The "Get Blog posts by Blog ID" API allows you get blog posts for any given blog site using blog ID.Please use blogs/posts.readonly

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

**blogId**

string

required

**limit**

number

required

**offset**

number

required

**searchTerm**

string

search for any post by name

**status**

string

Available options

`ALL`

`PUBLISHED`

`SCHEDULED`

`ARCHIVED`

`DRAFT`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**blogs**object[]requiredObject containing response data of blog posts

```json
{
  "blogs": [
    {
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
  ]
}
```
