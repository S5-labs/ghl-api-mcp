# Blogs API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/blogs-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Blog public API

## Blogs

### Check url slug

**Endpoint:** `GET /blogs/posts/url-slug-exists`
**Scope:** `blogs/check-slug.readonly`
**Token Type:** Location-Access

The "Check url slug" API allows check the blog slug validation which is needed before publishing any blog post. Please use blogs/check-slug.readonly. you can find the POST ID from the post edit url.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `urlSlug` | query | `string` | Yes | — |
| `locationId` | query | `string` | Yes | — |
| `postId` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UrlSlugCheckResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Blog Post

**Endpoint:** `PUT /blogs/posts/{postId}`
**Scope:** `blogs/post-update.write`
**Token Type:** Location-Access

The "Update Blog Post" API allows you update blog post for any given blog site. Please use blogs/post-update.write

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateBlogPostParams` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `BlogPostUpdateResponseWrapperDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Blog Post

**Endpoint:** `POST /blogs/posts`
**Scope:** `blogs/post.write`
**Token Type:** Location-Access

The "Create Blog Post" API allows you create blog post for any given blog site. Please use blogs/post.write

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateBlogPostParams` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `BlogPostCreateResponseWrapperDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get all authors

**Endpoint:** `GET /blogs/authors`
**Scope:** `blogs/author.readonly`
**Token Type:** Location-Access

The "Get all authors" Api return the blog authors for a given location ID. Please use "blogs/author.readonly"

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |
| `limit` | query | `number` | Yes | Number of authors to show in the listing |
| `offset` | query | `number` | Yes | Number of authors to skip in listing |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `AuthorsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get all categories

**Endpoint:** `GET /blogs/categories`
**Scope:** `blogs/category.readonly`
**Token Type:** Location-Access

The "Get all categories" Api return the blog categoies for a given location ID. Please use "blogs/category.readonly"

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `limit` | query | `number` | Yes | Number of categories to show in the listing |
| `offset` | query | `number` | Yes | Number of categories to skip in listing |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CategoriesResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Blog posts by Blog ID

**Endpoint:** `GET /blogs/posts/all`
**Scope:** `blogs/posts.readonly`
**Token Type:** Location-Access

The "Get Blog posts by Blog ID" API allows you get blog posts for any given blog site using blog ID.Please use blogs/posts.readonly

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `blogId` | query | `string` | Yes | — |
| `limit` | query | `number` | Yes | — |
| `offset` | query | `number` | Yes | — |
| `searchTerm` | query | `string` | No | search for any post by name |
| `status` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `BlogPostGetResponseWrapperDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Blogs by Location ID

**Endpoint:** `GET /blogs/site/all`
**Scope:** `blogs/list.readonly`
**Token Type:** Location-Access

The "Get Blogs by Location ID" API allows you get blogs using Location ID.Please use blogs/list.readonly

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `skip` | query | `number` | Yes | — |
| `limit` | query | `number` | Yes | — |
| `searchTerm` | query | `string` | No | search for any post by name |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `BlogGetResponseWrapperDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### UrlSlugCheckResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `exists` | `boolean` | Yes | Indicates whether the url slug exists or not |

### UpdateBlogPostParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `locationId` | `string` | Yes | — |
| `blogId` | `string` | Yes | You can find the blog id from blog site dashboard link |
| `imageUrl` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `rawHTML` | `string` | Yes | — |
| `status` | `string` | Yes | — |
| `imageAltText` | `string` | Yes | — |
| `categories` | `array<string>` | Yes | This needs to be array of category ids, which you can get from the category get api call. |
| `tags` | `array<string>` | No | — |
| `author` | `string` | Yes | This needs to be author id, which you can get from the author get api call. |
| `urlSlug` | `string` | Yes | — |
| `wordCount` | `number` | Yes | — |
| `canonicalLink` | `string` | No | — |
| `publishedAt` | `string` | Yes | Provide ISO timestamp |

### BlogPostUpdateResponseWrapperDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `updatedBlogPost` | `BlogPostResponseDTO` | Yes | Object containing response data of blog post update |

### CreateBlogPostParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `locationId` | `string` | Yes | — |
| `blogId` | `string` | Yes | You can find the blog id from blog site dashboard link |
| `imageUrl` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `rawHTML` | `string` | Yes | — |
| `status` | `string` | Yes | — |
| `imageAltText` | `string` | Yes | — |
| `categories` | `array<string>` | Yes | This needs to be array of category ids, which you can get from the category get api call. |
| `tags` | `array<string>` | No | — |
| `author` | `string` | Yes | This needs to be author id, which you can get from the author get api call. |
| `urlSlug` | `string` | Yes | — |
| `canonicalLink` | `string` | No | — |
| `publishedAt` | `string` | Yes | Provide ISO timestamp |

### BlogPostCreateResponseWrapperDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `BlogPostResponseDTO` | Yes | Object containing response data of blog post create. |

### AuthorsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authors` | `array<AuthorResponseDTO>` | Yes | Array of authors |

### AuthorResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `locationId` | `string` | Yes | — |
| `updatedAt` | `string` | Yes | — |
| `canonicalLink` | `string` | Yes | — |

### CategoriesResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `array<CategoryResponseDTO>` | Yes | Array of categories |

### CategoryResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | — |
| `label` | `string` | No | — |
| `locationId` | `string` | Yes | — |
| `updatedAt` | `string` | Yes | — |
| `canonicalLink` | `string` | Yes | — |
| `urlSlug` | `string` | Yes | — |

### BlogGetResponseWrapperDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array<BlogResponseDTO>` | Yes | Object containing response data of blog |

### BlogResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Unique identifier of the blog |
| `name` | `string` | Yes | Name of the blog |

### BlogPostGetResponseWrapperDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blogs` | `array<BlogPostResponseDTO>` | Yes | Object containing response data of blog posts |

### BlogPostResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `array<string>` | Yes | Array of category IDs associated with the blog post |
| `tags` | `array<string>` | No | Array of tags associated with the blog post |
| `archived` | `boolean` | Yes | Indicates whether the blog post is archived |
| `_id` | `string` | Yes | Unique identifier of the blog post |
| `title` | `string` | Yes | Title of the blog post |
| `description` | `string` | Yes | Description of the blog post |
| `imageUrl` | `string` | Yes | URL of the image associated with the blog post |
| `status` | `string` | Yes | Publication status of the blog post |
| `imageAltText` | `string` | Yes | Alternative text for the blog post image |
| `urlSlug` | `string` | Yes | URL slug for the blog post |
| `canonicalLink` | `string` | No | Canonical link of the blog post |
| `author` | `string` | No | Identifier of the author of the blog post |
| `publishedAt` | `string` | Yes | Timestamp when the blog post was published |
| `updatedAt` | `string` | Yes | Timestamp when the blog post was last updated |
