# GHL Marketing & Content APIs — Comprehensive Review

*Generated: March 2026 | Source: GHL API v2 Official Documentation*


---

## Overview

This document covers the GoHighLevel Marketing and Content API sections: Blogs, Campaigns, Courses, Forms, Funnels, Links (Trigger Links), Media Library, Social Media Posting, and Surveys. These APIs enable programmatic management of marketing assets, content delivery, lead capture, and social media automation within the GHL platform.

Source: [GHL API GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs) and [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)


This document covers **9 API sections** with a total of **74 endpoints**.


## Quick Reference

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Blogs API** | 7 | `blogs/author.readonly`, `blogs/category.readonly`, `blogs/check-slug.readonly`, `blogs/list.readonly` _(+3 more)_ |
| **Campaigns API** | 1 | `campaigns.readonly` |
| **MEMBERSHIPS API** | 1 |  |
| **Forms API** | 3 | `forms.readonly`, `forms.write` |
| **Funnels API** | 7 | `funnels/redirect.readonly`, `funnels/redirect.write` |
| **Trigger Links API** | 6 | `links.readonly`, `links.write` |
| **Media Library API** | 7 | `medias.readonly`, `medias.write` |
| **Social Media Posting API** | 40 | `socialplanner/account.readonly`, `socialplanner/category.readonly`, `socialplanner/csv.write`, `socialplanner/oauth.readonly` _(+2 more)_ |
| **Surveys API** | 2 | `surveys.readonly` |

## Detailed API Reference


---

## Blogs API

Documentation for Blog public API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/blogs/posts/url-slug-exists` | Check url slug | `blogs/check-slug.readonly` |
| `PUT` | `/blogs/posts/{postId}` | Update Blog Post | `blogs/post-update.write` |
| `POST` | `/blogs/posts` | Create Blog Post | `blogs/post.write` |
| `GET` | `/blogs/authors` | Get all authors | `blogs/author.readonly` |
| `GET` | `/blogs/categories` | Get all categories | `blogs/category.readonly` |
| `GET` | `/blogs/posts/all` | Get Blog posts by Blog ID | `blogs/posts.readonly` |
| `GET` | `/blogs/site/all` | Get Blogs by Location ID | `blogs/list.readonly` |

### GET Check url slug

**Endpoint:** `GET https://services.leadconnectorhq.com/blogs/posts/url-slug-exists`

The "Check url slug" API allows check the blog slug validation which is needed before publishing any blog post. Please use blogs/check-slug.readonly. you can find the POST ID from the post edit url.

**Required Scope(s):** `blogs/check-slug.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `urlSlug` | `string` | Yes |  |  |
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `postId` | `string` | No |  | 66f429b8afdce84227a4610d |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `exists` | `boolean` | Yes | Indicates whether the url slug exists or not |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/blogs/posts/url-slug-exists' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Update Blog Post

**Endpoint:** `PUT https://services.leadconnectorhq.com/blogs/posts/{postId}`

The "Update Blog Post" API allows you update blog post for any given blog site. Please use blogs/post-update.write

**Required Scope(s):** `blogs/post-update.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | `string` | Yes |  | Your blog title |
| `locationId` | `string` | Yes |  | Location ID |
| `blogId` | `string` | Yes | You can find the blog id from blog site dashboard link | Blog ID |
| `imageUrl` | `string` | Yes |  | Image URl |
| `description` | `string` | Yes |  | A short description |
| `rawHTML` | `string` | Yes |  | <h1>Your blog content</h1> |
| `status` | `string` | Yes |  | PUBLISHED |
| `imageAltText` | `string` | Yes |  | Alt text for your blog image |
| `categories` | `array[string]` | Yes | This needs to be array of category ids, which you can get from the category get api call. | ['9c48df2694a849b6089f9d0d3513efe', '6683abde331c041f32c07ae |
| `tags` | `array[string]` | No |  | ['blog', 'seo'] |
| `author` | `string` | Yes | This needs to be author id, which you can get from the author get api call. | 6683abde331c041f32c07aea |
| `urlSlug` | `string` | Yes |  | any-blog-post-url |
| `canonicalLink` | `string` | No |  | https://tryghl.blog/post/testing-unsplash |
| `publishedAt` | `string` | Yes | Provide ISO timestamp | 2025-02-05T18:30:47.000Z |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `updatedBlogPost` | `BlogPostResponseDTO` | Yes | Object containing response data of blog post update |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/blogs/posts/:<postId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Your blog title",
    "locationId": "Location ID",
    "blogId": "Blog ID",
    "imageUrl": "Image URl",
    "description": "A short description",
    "rawHTML": "<h1>Your blog content</h1>",
    "status": "PUBLISHED",
    "imageAltText": "Alt text for your blog image"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Create Blog Post

**Endpoint:** `POST https://services.leadconnectorhq.com/blogs/posts`

The "Create Blog Post" API allows you create blog post for any given blog site. Please use blogs/post.write

**Required Scope(s):** `blogs/post.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | `string` | Yes |  | Your blog title |
| `locationId` | `string` | Yes |  | Location ID |
| `blogId` | `string` | Yes | You can find the blog id from blog site dashboard link | Blog ID |
| `imageUrl` | `string` | Yes |  | Image URl |
| `description` | `string` | Yes |  | A short description |
| `rawHTML` | `string` | Yes |  | <h1>Your blog content</h1> |
| `status` | `string` | Yes |  | This can be PUBLISHED OR SCHEDULED OR ARCHIVED OR DRAFT |
| `imageAltText` | `string` | Yes |  | Alt text for your blog image |
| `categories` | `array[string]` | Yes | This needs to be array of category ids, which you can get from the category get api call. | ['9c48df2694a849b6089f9d0d3513efe', '6683abde331c041f32c07ae |
| `tags` | `array[string]` | No |  | ['blog', 'seo'] |
| `author` | `string` | Yes | This needs to be author id, which you can get from the author get api call. | 6683abde331c041f32c07aea |
| `urlSlug` | `string` | Yes |  | any-blog-post-url |
| `canonicalLink` | `string` | No |  | https://tryghl.blog/post/testing-unsplash |
| `publishedAt` | `string` | Yes | Provide ISO timestamp | 2025-02-05T18:30:47.000Z |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `BlogPostResponseDTO` | Yes | Object containing response data of blog post create. |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/blogs/posts' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Your blog title",
    "locationId": "Location ID",
    "blogId": "Blog ID",
    "imageUrl": "Image URl",
    "description": "A short description",
    "rawHTML": "<h1>Your blog content</h1>",
    "status": "This can be PUBLISHED OR SCHEDULED OR ARCHIVED OR DRAFT",
    "imageAltText": "Alt text for your blog image"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get all authors

**Endpoint:** `GET https://services.leadconnectorhq.com/blogs/authors`

The "Get all authors" Api return the blog authors for a given location ID. Please use "blogs/author.readonly" 

**Required Scope(s):** `blogs/author.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `limit` | `number` | Yes | Number of authors to show in the listing | 5 |
| `offset` | `number` | Yes | Number of authors to skip in listing | 0 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `authors` | `array[AuthorResponseDTO]` | Yes | Array of authors |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/blogs/authors' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get all categories

**Endpoint:** `GET https://services.leadconnectorhq.com/blogs/categories`

The "Get all categories" Api return the blog categoies for a given location ID. Please use "blogs/category.readonly" 

**Required Scope(s):** `blogs/category.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `limit` | `number` | Yes | Number of categories to show in the listing |  |
| `offset` | `number` | Yes | Number of categories to skip in listing |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `categories` | `array[CategoryResponseDTO]` | Yes | Array of categories |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/blogs/categories' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Blog posts by Blog ID

**Endpoint:** `GET https://services.leadconnectorhq.com/blogs/posts/all`

The "Get Blog posts by Blog ID" API allows you get blog posts for any given blog site using blog ID.Please use blogs/posts.readonly

**Required Scope(s):** `blogs/posts.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `blogId` | `string` | Yes |  | 66f429b8afdce84227a4610d |
| `limit` | `number` | Yes |  | 4 |
| `offset` | `number` | Yes |  | 0 |
| `searchTerm` | `string` | No | search for any post by name | ai news |
| `status` | `string` | No |  | PUBLISHED |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `blogs` | `array[BlogPostResponseDTO]` | Yes | Object containing response data of blog posts |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/blogs/posts/all' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Blogs by Location ID

**Endpoint:** `GET https://services.leadconnectorhq.com/blogs/site/all`

The "Get Blogs by Location ID" API allows you get blogs using Location ID.Please use blogs/list.readonly

**Required Scope(s):** `blogs/list.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `skip` | `number` | Yes |  | 0 |
| `limit` | `number` | Yes |  | 4 |
| `searchTerm` | `string` | No | search for any post by name | ai news |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[BlogResponseDTO]` | Yes | Object containing response data of blog |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/blogs/site/all' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


---

## Campaigns API

Documentation for campaigns API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/campaigns/` | Get Campaigns | `campaigns.readonly` |

### GET Get Campaigns

**Endpoint:** `GET https://services.leadconnectorhq.com/campaigns/`

**Required Scope(s):** `campaigns.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `status` | `string` | No |  | draft |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `campaigns` | `array[campaignsSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/campaigns/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


---

## MEMBERSHIPS API

API Service for Courses and Memberships


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `POST` | `/courses/courses-exporter/public/import` | Import Courses | `—` |

### POST Import Courses

**Endpoint:** `POST https://services.leadconnectorhq.com/courses/courses-exporter/public/import`

Import Courses through public channels


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |
| `userId` | `string` | No |  |  |
| `products` | `array[ProductInterface]` | Yes |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/courses/courses-exporter/public/import' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "<locationId>",
    "userId": "<userId>",
    "products": []
}'
```

**Response Codes:** `201`


---

## Forms API

Documentation for forms API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/forms/submissions` | Get Forms Submissions | `forms.readonly` |
| `POST` | `/forms/upload-custom-files` | Upload files to custom fields | `forms.write, forms.write` |
| `GET` | `/forms/` | Get Forms | `forms.readonly` |

### GET Get Forms Submissions

**Endpoint:** `GET https://services.leadconnectorhq.com/forms/submissions`

**Required Scope(s):** `forms.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `page` | `number` | No | Page No. By default it will be 1 | 1 |
| `limit` | `number` | No | Limit Per Page records count. will allow maximum up to 100 and default will be 20 | 20 |
| `formId` | `string` | No | Filter submission by form id | jjusM6EOngDExnbo2DbU |
| `q` | `string` | No | Filter by contactId, name, email or phone no. | john@deo.com |
| `startAt` | `string` | No | Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD). | 2020-11-14 |
| `endAt` | `string` | No | Get submission by ending of this date. By default it will be current date(YYYY-MM-DD). | 2020-12-14 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `submissions` | `array[FormsSubmissionsSubmissionsSchema]` | No |  |  |
| `meta` | `metaSchema` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/forms/submissions' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Upload files to custom fields

**Endpoint:** `POST https://services.leadconnectorhq.com/forms/upload-custom-files`

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "< custom_field_id >_< file_id >". <br /> Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) <br /> There is support for multiple file uploads as well. Have multiple fields in the format mentioned.<br />File size is limited to 50 MB.<br /><br /> The allowed file types are: <br/> <ul><li>PDF</li><li>DOCX</li><li>DOC</li><li>JPG</li><li>JPEG</li><li>PNG</li><li>GIF</li><li>CSV</li><li>XLSX</li><li>XLS</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>TXT</li><li>SVG</li></ul> <br /><br /> The API will return the updated contact object.

**Required Scope(s):** `forms.write`, `forms.write`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `contactId` | `string` | Yes | Contact ID to upload the file to. | dtEv6KtI27yF92YPm3Zz |
| `locationId` | `string` | Yes | Location ID of the contact. | quXmPY59n1zgGBabY1bZ |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/forms/upload-custom-files' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Forms

**Endpoint:** `GET https://services.leadconnectorhq.com/forms/`

**Required Scope(s):** `forms.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `skip` | `number` | No |  | 0 |
| `limit` | `number` | No | Limit Per Page records count. will allow maximum up to 50 and default will be 10 | 20 |
| `type` | `string` | No |  | folder |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `forms` | `array[FormsParams]` | No |  |  |
| `total` | `number` | No | Total number of forms | 20 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/forms/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


---

## Funnels API

Documentation for funnels API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `POST` | `/funnels/lookup/redirect` | Create Redirect | `funnels/redirect.write` |
| `PATCH` | `/funnels/lookup/redirect/{id}` | Update Redirect By Id | `funnels/redirect.write` |
| `DELETE` | `/funnels/lookup/redirect/{id}` | Delete Redirect By Id | `funnels/redirect.write` |
| `GET` | `/funnels/lookup/redirect/list` | Fetch List of Redirects | `funnels/redirect.readonly` |
| `GET` | `/funnels/funnel/list` | Fetch List of Funnels | `—` |
| `GET` | `/funnels/page` | Fetch list of funnel pages | `—` |
| `GET` | `/funnels/page/count` | Fetch count of funnel pages | `—` |

### POST Create Redirect

**Endpoint:** `POST https://services.leadconnectorhq.com/funnels/lookup/redirect`

The "Create Redirect" API Allows adding a new url redirect to the system. Use this endpoint to create a url redirect with the specified details. Ensure that the required information is provided in the request payload.

**Required Scope(s):** `funnels/redirect.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | 6p2RxpgtMKQwO3E6IUaT |
| `domain` | `string` | Yes |  | example.com |
| `path` | `string` | Yes |  | /Hello |
| `target` | `string` | Yes |  | https://www.google.com |
| `action` | `string` | Yes |  | URL |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `object` | Yes | Data containing details of the created redirect |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/funnels/lookup/redirect' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "6p2RxpgtMKQwO3E6IUaT",
    "domain": "example.com",
    "path": "/Hello",
    "target": "https://www.google.com",
    "action": "URL"
}'
```

**Response Codes:** `200` | `422`


### PATCH Update Redirect By Id

**Endpoint:** `PATCH https://services.leadconnectorhq.com/funnels/lookup/redirect/{id}`

The "Update Redirect By Id" API Allows updating an existing URL redirect in the system. Use this endpoint to modify a URL redirect with the specified ID using details provided in the request payload.

**Required Scope(s):** `funnels/redirect.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `target` | `string` | Yes |  | https://www.google.com |
| `action` | `string` | Yes |  | URL |
| `locationId` | `string` | Yes |  | 6p2RxpgtMKQwO3E6IUaT |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `object` | Yes | Data containing details of the updated redirect |  |

**Sample Request**

```bash
curl -X PATCH \
  'https://services.leadconnectorhq.com/funnels/lookup/redirect/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "target": "https://www.google.com",
    "action": "URL",
    "locationId": "6p2RxpgtMKQwO3E6IUaT"
}'
```

**Response Codes:** `200` | `422`


### DELETE Delete Redirect By Id

**Endpoint:** `DELETE https://services.leadconnectorhq.com/funnels/lookup/redirect/{id}`

The "Delete Redirect By Id" API Allows deletion of a URL redirect from the system using its unique identifier. Use this endpoint to delete a URL redirect with the specified ID using details provided in the request payload.

**Required Scope(s):** `funnels/redirect.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes |  |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | 6p2RxpgtMKQwO3E6IUaT |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `object` | Yes | Status of the delete operation | {'status': 'ok'} |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/funnels/lookup/redirect/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `422`


### GET Fetch List of Redirects

**Endpoint:** `GET https://services.leadconnectorhq.com/funnels/lookup/redirect/list`

Retrieves a list of all URL redirects based on the given query parameters.

**Required Scope(s):** `funnels/redirect.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | 6p2RxpgtMKQwO3E6IUaT |
| `limit` | `number` | Yes |  | 20 |
| `offset` | `number` | Yes |  | 10 |
| `search` | `string` | No |  | example.com/test |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `object` | Yes | Object containing the count of redirects and an array of redirect data | {'count': 42, 'data': []} |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/funnels/lookup/redirect/list' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `422`


### GET Fetch List of Funnels

**Endpoint:** `GET https://services.leadconnectorhq.com/funnels/funnel/list`

Retrieves a list of all funnels based on the given query parameters.


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |
| `type` | `string` | No |  |  |
| `category` | `string` | No |  |  |
| `offset` | `string` | No |  |  |
| `limit` | `string` | No |  |  |
| `parentId` | `string` | No |  |  |
| `name` | `string` | No |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `funnels` | `object` | Yes |  | {'_id': 'SkIDfu0S4m3NYQyvWHC6', 'dateAdded': '2024-04-29T15: |
| `count` | `number` | Yes |  | 24 |
| `traceId` | `string` | Yes |  | 03774d31-a57e-4b4f-95c7-315ce61969f1 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/funnels/funnel/list' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


### GET Fetch list of funnel pages

**Endpoint:** `GET https://services.leadconnectorhq.com/funnels/page`

Retrieves a list of all funnel pages based on the given query parameters.


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |
| `funnelId` | `string` | Yes |  |  |
| `name` | `string` | No |  |  |
| `limit` | `number` | Yes |  |  |
| `offset` | `number` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | Yes |  | 0yJbP3q7t7pLmeTWRAE2 |
| `locationId` | `string` | Yes |  | ojQjykmwNIU88vfsfzvH |
| `funnelId` | `string` | Yes |  | iucJ6TdFZiddhq9f6znh |
| `name` | `string` | Yes |  | Home |
| `stepId` | `string` | Yes |  | 343bf634-3aa6-4ade-b963-2d3cd0bf2ede |
| `deleted` | `string` | Yes |  | False |
| `updatedAt` | `string` | Yes |  | 2024-04-18T12:25:23.029Z |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/funnels/page' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


### GET Fetch count of funnel pages

**Endpoint:** `GET https://services.leadconnectorhq.com/funnels/page/count`

Retrieves count of all funnel pages based on the given query parameters.


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |
| `funnelId` | `string` | Yes |  |  |
| `name` | `string` | No |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `count` | `number` | Yes |  | 20 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/funnels/page/count' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


---

## Trigger Links API

Documentation for links API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/links/id/{linkId}` | Get Link by ID | `—` |
| `PUT` | `/links/{linkId}` | Update Link | `links.write` |
| `DELETE` | `/links/{linkId}` | Delete Link | `links.write` |
| `GET` | `/links/search` | Search Trigger Links | `—` |
| `GET` | `/links/` | Get Links | `links.readonly` |
| `POST` | `/links/` | Create Link | `links.write` |

### GET Get Link by ID

**Endpoint:** `GET https://services.leadconnectorhq.com/links/id/{linkId}`

Get a single link by its ID


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `linkId` | `string` | Yes | Link Id |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `link` | `LinkSchema` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/links/id/:<linkId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### PUT Update Link

**Endpoint:** `PUT https://services.leadconnectorhq.com/links/{linkId}`

**Required Scope(s):** `links.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `linkId` | `string` | Yes | Link Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes |  | first tag |
| `redirectTo` | `string` | Yes |  | https://www.google.com/ |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `link` | `LinkSchema` | No |  |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/links/:<linkId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "first tag",
    "redirectTo": "https://www.google.com/"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### DELETE Delete Link

**Endpoint:** `DELETE https://services.leadconnectorhq.com/links/{linkId}`

**Required Scope(s):** `links.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `linkId` | `string` | Yes | Link Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `succeded` | `boolean` | No |  | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/links/:<linkId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Search Trigger Links

**Endpoint:** `GET https://services.leadconnectorhq.com/links/search`

Get list of links by searching


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id |  |
| `query` | `string` | No | Search query as a string |  |
| `skip` | `number` | No | Numbers of query results to skip |  |
| `limit` | `number` | No | Limit on number of search results |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `links` | `array[LinkSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/links/search' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Links

**Endpoint:** `GET https://services.leadconnectorhq.com/links/`

**Required Scope(s):** `links.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `links` | `array[LinkSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/links/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Link

**Endpoint:** `POST https://services.leadconnectorhq.com/links/`

**Required Scope(s):** `links.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `name` | `string` | Yes |  | first tag |
| `redirectTo` | `string` | Yes |  | https://www.google.com/ |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `link` | `LinkSchema` | No |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/links/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "ve9EPM428h8vShlRW1KT",
    "name": "first tag",
    "redirectTo": "https://www.google.com/"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


---

## Media Library API

Documentation for Files API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/medias/files` | Get List of Files/ Folders | `medias.readonly` |
| `POST` | `/medias/upload-file` | Upload File into Media Library | `medias.write` |
| `DELETE` | `/medias/{id}` | Delete File or Folder | `medias.write` |
| `POST` | `/medias/{id}` | Update File/ Folder | `—` |
| `POST` | `/medias/folder` | Create Folder | `—` |
| `PUT` | `/medias/update-files` | Bulk Update Files/ Folders | `—` |
| `PUT` | `/medias/delete-files` | Bulk Delete / Trash Files or Folders | `—` |

### GET Get List of Files/ Folders

**Endpoint:** `GET https://services.leadconnectorhq.com/medias/files`

Fetches list of files and folders from the media library

**Required Scope(s):** `medias.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `offset` | `string` | No | Number of files to skip in listing | 5 |
| `limit` | `string` | No | Number of files to show in the listing | 10 |
| `sortBy` | `string` | Yes | Field to sorting the file listing by | createdAt |
| `sortOrder` | `string` | Yes | Direction in which file needs to be sorted | asc |
| `type` | `string` | Yes | Type | file |
| `query` | `string` | No | Query text | Test file |
| `altType` | `string` | Yes | AltType | location |
| `altId` | `string` | Yes | location Id |  |
| `parentId` | `string` | No | parent id or folder id |  |
| `fetchAll` | `string` | No | Fetch all files or folders | false |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `files` | `array[string]` | Yes | Array of File Objects | {'altId': 'locationId', 'altType': 'location', 'name': 'file |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/medias/files' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


### POST Upload File into Media Library

**Endpoint:** `POST https://services.leadconnectorhq.com/medias/upload-file`

If hosted is set to true then fileUrl is required. Else file is required. If adding a file, maximum allowed is 25 MB

**Required Scope(s):** `medias.write`


**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `fileId` | `string` | Yes | ID of the uploaded file | file.pdf |
| `url` | `string` | Yes | Google Cloud Storage URL of the uploaded file | https://storage.googleapis.com/bucket-name/path/to/file.pdf |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/medias/upload-file' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response Codes:** `200`


### DELETE Delete File or Folder

**Endpoint:** `DELETE https://services.leadconnectorhq.com/medias/{id}`

Deletes specific file or folder from the media library

**Required Scope(s):** `medias.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes |  |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `altType` | `string` | Yes | AltType | location |
| `altId` | `string` | Yes | location Id |  |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/medias/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


### POST Update File/ Folder

**Endpoint:** `POST https://services.leadconnectorhq.com/medias/{id}`

Updates a single file or folder by ID


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Unique identifier of the file or folder to update | 686f9817f0d3165be9fbcef6 |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes | New name for the file or folder | Updated File Name.pdf |
| `altType` | `string` | Yes | Type of entity that owns the file or folder | location |
| `altId` | `string` | Yes | Location identifier that owns the file or folder | sx6wyHhbFdRXh302LLNR |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/medias/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Updated File Name.pdf",
    "altType": "location",
    "altId": "sx6wyHhbFdRXh302LLNR"
}'
```

**Response Codes:** `200`


### POST Create Folder

**Endpoint:** `POST https://services.leadconnectorhq.com/medias/folder`

Creates a new folder in the media library


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location Id | sx6wyHhbFdRXh302LLNR |
| `altType` | `string` | Yes | Type of entity (location only) | location |
| `name` | `string` | Yes | Name of the folder to be created | New Folder |
| `parentId` | `string` | No | ID of the parent folder (optional) | 64af50c42d567a3b4f5989e0 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location identifier that owns this folder | sx6wyHhbFdRXh302LLNR |
| `altType` | `string` | Yes | Type of entity that owns the folder | location |
| `name` | `string` | Yes | Name of the folder | New Folder |
| `parentId` | `string` | No | ID of the parent folder (null for root folders) | 64af50c42d567a3b4f5989e0 |
| `type` | `string` | Yes | Type of the object (always 'folder' for folders) | folder |
| `deleted` | `boolean` | No | Whether the folder has been deleted | False |
| `pendingUpload` | `boolean` | No | Whether there are pending uploads to this folder | False |
| `category` | `string` | No | Primary category of content stored in the folder | image |
| `subCategory` | `string` | No | Sub-category of content stored in the folder | logo |
| `isPrivate` | `boolean` | No | Whether the folder is private and not publicly accessible | False |
| `relocatedFolder` | `boolean` | No | Whether the folder has been moved from its original location | False |
| `migrationCompleted` | `boolean` | No | Whether the data migration process has been completed for this folder | True |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/medias/folder' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "sx6wyHhbFdRXh302LLNR",
    "altType": "location",
    "name": "New Folder",
    "parentId": "64af50c42d567a3b4f5989e0"
}'
```

**Response Codes:** `200`


### PUT Bulk Update Files/ Folders

**Endpoint:** `PUT https://services.leadconnectorhq.com/medias/update-files`

Updates metadata or status of multiple files and folders


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `altId` | `string` | Yes | Location identifier | sx6wyHhbFdRXh302LLNR |
| `altType` | `string` | Yes | Type of entity that owns the files | location |
| `filesToBeUpdated` | `array[UpdateMediaObject]` | Yes | Array of file objects to be updated | [{'id': '686f9817f0d3165be9fbcef6', 'name': 'Updated File Na |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/medias/update-files' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "altId": "sx6wyHhbFdRXh302LLNR",
    "altType": "location",
    "filesToBeUpdated": [
        {
            "id": "686f9817f0d3165be9fbcef6",
            "name": "Updated File Name.pdf"
        }
    ]
}'
```

**Response Codes:** `200`


### PUT Bulk Delete / Trash Files or Folders

**Endpoint:** `PUT https://services.leadconnectorhq.com/medias/delete-files`

Soft-deletes or trashes multiple files and folders in a single request


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `filesToBeDeleted` | `array[DeleteMediaObjectItem]` | Yes | Array of file objects to be deleted or trashed | [{'_id': '686f630df0d3166d68fbcec2'}] |
| `altType` | `string` | Yes | Type of entity that owns the files | location |
| `altId` | `string` | Yes | Location identifier | sx6wyHhbFdRXh302LLNR |
| `status` | `string` | Yes | Status to set for the files (deleted or trashed) | deleted |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/medias/delete-files' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "filesToBeDeleted": [
        {
            "_id": "686f630df0d3166d68fbcec2"
        }
    ],
    "altType": "location",
    "altId": "sx6wyHhbFdRXh302LLNR",
    "status": "deleted"
}'
```

**Response Codes:** `200`


---

## Social Media Posting API

Documentation for Social Media Posting API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/social-media-posting/oauth/google/start` | Starts OAuth For Google Account | `socialplanner/oauth.readonly` |
| `GET` | `/social-media-posting/oauth/{locationId}/google/locations/{accountId}` | Get google business locations | `—` |
| `POST` | `/social-media-posting/oauth/{locationId}/google/locations/{accountId}` | Set google business locations | `—` |
| `POST` | `/social-media-posting/{locationId}/posts/list` | Get posts | `socialplanner/post.readonly` |
| `POST` | `/social-media-posting/{locationId}/posts` | Create post | `socialplanner/post.write` |
| `GET` | `/social-media-posting/{locationId}/posts/{id}` | Get post | `—` |
| `PUT` | `/social-media-posting/{locationId}/posts/{id}` | Edit post | `—` |
| `DELETE` | `/social-media-posting/{locationId}/posts/{id}` | Delete Post | `—` |
| `POST` | `/social-media-posting/{locationId}/posts/bulk-delete` | Bulk Delete Social Planner Posts | `—` |
| `GET` | `/social-media-posting/{locationId}/accounts` | Get Accounts | `socialplanner/account.readonly` |
| `DELETE` | `/social-media-posting/{locationId}/accounts/{id}` | Delete Account | `—` |
| `GET` | `/social-media-posting/oauth/facebook/start` | Starts OAuth For Facebook Account | `—` |
| `GET` | `/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}` | Get facebook pages | `—` |
| `POST` | `/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}` | Attach facebook pages | `—` |
| `GET` | `/social-media-posting/oauth/instagram/start` | Starts OAuth For Instagram Account | `socialplanner/oauth.readonly` |
| `GET` | `/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}` | Get Instagram Professional Accounts | `—` |
| `POST` | `/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}` | Attach Instagram Professional Accounts | `—` |
| `GET` | `/social-media-posting/oauth/linkedin/start` | Starts OAuth For LinkedIn Account | `—` |
| `GET` | `/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}` | Get Linkedin pages and profile | `—` |
| `POST` | `/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}` | Attach linkedin pages and profile | `—` |
| `GET` | `/social-media-posting/oauth/twitter/start` | Starts OAuth For Twitter Account | `socialplanner/oauth.readonly` |
| `GET` | `/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}` | Get Twitter profile | `—` |
| `POST` | `/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}` | Attach Twitter profile | `—` |
| `POST` | `/social-media-posting/{locationId}/csv` | Upload CSV | `socialplanner/csv.write` |
| `GET` | `/social-media-posting/{locationId}/csv` | Get Upload Status | `—` |
| `POST` | `/social-media-posting/{locationId}/set-accounts` | Set Accounts | `socialplanner/csv.write` |
| `GET` | `/social-media-posting/{locationId}/csv/{id}` | Get CSV Post | `—` |
| `PATCH` | `/social-media-posting/{locationId}/csv/{id}` | Start CSV Finalize | `—` |
| `DELETE` | `/social-media-posting/{locationId}/csv/{id}` | Delete CSV | `—` |
| `DELETE` | `/social-media-posting/{locationId}/csv/{csvId}/post/{postId}` | Delete CSV Post | `—` |
| `GET` | `/social-media-posting/oauth/tiktok/start` | Starts OAuth For Tiktok Account | `socialplanner/oauth.readonly` |
| `GET` | `/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}` | Get Tiktok profile | `—` |
| `POST` | `/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}` | Attach Tiktok profile | `—` |
| `GET` | `/social-media-posting/oauth/tiktok-business/start` | Starts OAuth For Tiktok Business Account | `socialplanner/oauth.readonly` |
| `GET` | `/social-media-posting/oauth/{locationId}/tiktok-business/accounts/{accountId}` | Get Tiktok Business profile | `—` |
| `GET` | `/social-media-posting/{locationId}/categories` | Get categories by location id | `socialplanner/category.readonly` |
| `GET` | `/social-media-posting/{locationId}/categories/{id}` | Get categories by id | `—` |
| `GET` | `/social-media-posting/{locationId}/tags` | Get tags by location id | `—` |
| `POST` | `/social-media-posting/{locationId}/tags/details` | Get tags by ids | `—` |
| `POST` | `/social-media-posting/statistics` | Get Social Media Statistics | `—` |

### GET Starts OAuth For Google Account

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/google/start`

Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Google login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "google" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch Google account details using below API -
  API: '/social-media-posting/oauth/google/accounts/:accountId' 

  Method: GET

**Required Scope(s):** `socialplanner/oauth.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | w37swmmLbA02zgqKPpxITe2 |
| `userId` | `string` | Yes | User Id | u37swmmLbA02zgqKPpxITe2 |
| `page` | `string` | No | Page | integration |
| `reconnect` | `string` | No | Reconnect | true |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/google/start' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get google business locations

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/google/locations/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched Google Business Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/google/locations/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Set google business locations

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/google/locations/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `location` | `object` | No |  |  |
| `account` | `object` | No |  |  |
| `companyId` | `string` | No | Company ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Added Google Business Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/google/locations/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "companyId": "sdfdsfdsfEWEsdfsdsW32dd"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### POST Get posts

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/{locationId}/posts/list`

Get Posts

**Required Scope(s):** `socialplanner/post.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `type` | `string` | No | type must be one of the following values: recent, all, scheduled, draft, failed, in_review, publishe | Filter type |
| `accounts` | `string` | No | List of account Ids seperated by comma as a string | 660a83fc29deacac50033e2b_omaDY3RbWtTP511e808O_17841465964543 |
| `skip` | `string` | Yes |  | 1 |
| `limit` | `string` | Yes |  | 10 |
| `fromDate` | `string` | Yes | From Date | 2024-01-22T05:32:49.463Z |
| `toDate` | `string` | Yes | To Date | 2024-03-20T05:32:49.463Z |
| `includeUsers` | `string` | Yes | Include User Data | true |
| `postType` | `object` | No | Post Type must be one of the following values: - post, story, reel | post |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Fetched Posts |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/posts/list' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "Filter type",
    "accounts": "660a83fc29deacac50033e2b_omaDY3RbWtTP511e808O_17841465964543589, 38bF83fc29deacac50033e2b_omaDY3RbWtr3P11e808O_17841465964543998",
    "skip": "1",
    "limit": "10",
    "fromDate": "2024-01-22T05:32:49.463Z",
    "toDate": "2024-03-20T05:32:49.463Z",
    "includeUsers": "true",
    "postType": "post"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### POST Create post

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/{locationId}/posts`

Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.

The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:

  Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations "Social Planner Help")

**Required Scope(s):** `socialplanner/post.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `accountIds` | `array[string]` | Yes | Account Ids | ['aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_1255461656452598 |
| `summary` | `string` | No | Post Content   The limitations of content as per the platforms is provided through the reference lin | Hello World |
| `media` | `array[PostMediaSchema]` | No | Post Media Data   The limitations of media as per the platforms is provided through the reference li |  |
| `status` | `object` | No | Status must be one of the following values: null, in_progress, draft, failed, published, scheduled,  | draft |
| `scheduleDate` | `string` | No | Schedule Date |  |
| `createdBy` | `string` | No | Created By |  |
| `followUpComment` | `string` | No | Follow Up Comment on platform. It is not allowed on Tiktok and GMB accounts and there is a limit of  | First comment |
| `ogTagsDetails` | `object` | No | Og Tags Meta Data |  |
| `type` | `object` | Yes | Post Type must be one of the following values: - post, story, reel | post |
| `postApprovalDetails` | `object` | No | Post Approval Details |  |
| `scheduleTimeUpdated` | `boolean` | No | if schedule datetime is updated | True |
| `tags` | `array[string]` | No | Array of Tag Value | ['65f151c99bc2bf3aaf970d72'] |
| `categoryId` | `string` | No | Category Id | 65f151c99bc2bf3aaf970d72 |
| `tiktokPostDetails` | `object` | No | Tiktok Post Details |  |
| `gmbPostDetails` | `object` | No | GMB Post Details |  |
| `userId` | `string` | Yes | User ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Created Post |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/posts' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "accountIds": [
        "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
    ],
    "summary": "Hello World",
    "media": [],
    "status": "draft",
    "scheduleDate": "<scheduleDate>",
    "createdBy": "<createdBy>",
    "followUpComment": "First comment"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Get post

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/{locationId}/posts/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `id` | `string` | Yes | Post Id | 65fac446d599990d1313c1dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched Post |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/posts/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PUT Edit post

**Endpoint:** `PUT https://services.leadconnectorhq.com/social-media-posting/{locationId}/posts/{id}`

Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.

The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:

  Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations "Social Planner Help")


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `id` | `string` | Yes | Post Id | 65fac446d599990d1313c1dd |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `accountIds` | `array[string]` | No | Account Ids | ['aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_1255461656452598 |
| `summary` | `string` | No | Post Content   The limitations of content as per the platforms is provided through the reference lin | Hello World |
| `media` | `array[PostMediaSchema]` | No | Post Media Data   The limitations of media as per the platforms is provided through the reference li |  |
| `status` | `object` | No | Status must be one of the following values: in_progress, draft, failed, published, scheduled, in_rev | draft |
| `scheduleDate` | `string` | No | Schedule Date |  |
| `createdBy` | `string` | No | Created By |  |
| `followUpComment` | `string` | No | Follow Up Comment on platform. It is not allowed on Tiktok and GMB accounts and there is a limit of  | First comment |
| `ogTagsDetails` | `object` | No | Og Tags Meta Data |  |
| `type` | `object` | Yes | Post Type must be one of the following values: - post, story, reel | post |
| `postApprovalDetails` | `object` | No | Post Approval Details |  |
| `scheduleTimeUpdated` | `boolean` | No | if schedule datetime is updated | True |
| `tags` | `array[string]` | No | Array of Tag Value | ['Tag1'] |
| `categoryId` | `string` | No | Category Id |  |
| `tiktokPostDetails` | `object` | No | Tiktok Post Details |  |
| `gmbPostDetails` | `object` | No | GMB Post Details |  |
| `userId` | `string` | No | User ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Updated Post |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/posts/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "accountIds": [
        "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
    ],
    "summary": "Hello World",
    "media": [],
    "status": "draft",
    "scheduleDate": "<scheduleDate>",
    "createdBy": "<createdBy>",
    "followUpComment": "First comment"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Post

**Endpoint:** `DELETE https://services.leadconnectorhq.com/social-media-posting/{locationId}/posts/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `id` | `string` | Yes | Post Id | 65fac446d599990d1313c1dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Deleted Post |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/posts/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Bulk Delete Social Planner Posts

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/{locationId}/posts/bulk-delete`

Deletes multiple posts based on the provided list of post IDs. 
                  This operation is useful for clearing up large numbers of posts efficiently. 
                  
Note: 
                  
1.The maximum number of posts that can be deleted in a single request is '50'.
                  
2.However, It will only get deleted in Highlevel database but still
                   it is recommended to be cautious of this operation.


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `postIds` | `array[string]` | No | Requested Results | ['662791ee3f216822d7da0c8c'] |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Posts Deleted Successfully |
| `results` | `object` | Yes | Message and deleted count | {'message': 'Posts deleted successfully', 'deletedCount': 10 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/posts/bulk-delete' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "postIds": [
        "662791ee3f216822d7da0c8c"
    ]
}'
```

**Response Codes:** `201` | `400` | `401` | `404` | `422` | `500`


### GET Get Accounts

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/{locationId}/accounts`

Get list of accounts and groups

**Required Scope(s):** `socialplanner/account.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched Accounts |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/accounts' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Account

**Endpoint:** `DELETE https://services.leadconnectorhq.com/social-media-posting/{locationId}/accounts/{id}`

Delete account and account from group


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `id` | `string` | Yes | Id | 65fac446d599990d1313c1dd |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | No | Company ID | sdfdsfdsfEWEsdfsdsW32dd |
| `userId` | `string` | No | User ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Deleted Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/accounts/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Starts OAuth For Facebook Account

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/facebook/start`

Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Facebook login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "facebook" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch Facebook account details using below API -
  API: '/social-media-posting/oauth/facebook/accounts/:accountId' 

  Method: GET


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `userId` | `string` | Yes | User ID | u37swmmLbA02zgqKPpxITe2 |
| `page` | `string` | No | Facebook Page | integration |
| `reconnect` | `string` | No | Reconnect boolean as string | true |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/facebook/start' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get facebook pages

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched Facebook Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/facebook/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Attach facebook pages

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `type` | `object` | No |  | page |
| `originId` | `string` | No |  | 244405****11687 |
| `name` | `string` | No |  | JOHN_DEO |
| `avatar` | `string` | No |  | https://storage.googleapis.com/2ad21ebc23/test |
| `companyId` | `string` | No | Company ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Added Facebook Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/facebook/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "page",
    "originId": "244405****11687",
    "name": "JOHN_DEO",
    "avatar": "https://storage.googleapis.com/2ad21ebc23/test",
    "companyId": "sdfdsfdsfEWEsdfsdsW32dd"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Starts OAuth For Instagram Account

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/instagram/start`

Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Instagram login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "instagram" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch Instagram account details using below API -
  API: '/social-media-posting/oauth/instagram/accounts/:accountId' 

  Method: GET

**Required Scope(s):** `socialplanner/oauth.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | w37swmmLbA02zgqKPpxITe2 |
| `userId` | `string` | Yes | User Id | u37swmmLbA02zgqKPpxITe2 |
| `page` | `string` | No | Page | integration |
| `reconnect` | `string` | No | Reconnect | true |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/instagram/start' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Instagram Professional Accounts

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched Instagram Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/instagram/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Attach Instagram Professional Accounts

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `originId` | `string` | No |  | 244405****11687 |
| `name` | `string` | No |  | JOHN_DEO |
| `avatar` | `string` | No |  |  |
| `pageId` | `string` | Yes |  | 234234234242sd |
| `companyId` | `string` | No | Company ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Added Instagram Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/instagram/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "originId": "244405****11687",
    "name": "JOHN_DEO",
    "avatar": "<avatar>",
    "pageId": "234234234242sd",
    "companyId": "sdfdsfdsfEWEsdfsdsW32dd"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Starts OAuth For LinkedIn Account

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/linkedin/start`

Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to LinkedIn login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "linkedin" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch LinkedIn account details using below API -
  API: '/social-media-posting/oauth/linkedin/accounts/:accountId' 

  Method: GET


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | w37swmmLbA02zgqKPpxITe2 |
| `userId` | `string` | Yes | User Id | u37swmmLbA02zgqKPpxITe2 |
| `page` | `string` | No | Page | integration |
| `reconnect` | `string` | No | Reconnect | integration |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/linkedin/start' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Linkedin pages and profile

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched LinkedIn Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/linkedin/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Attach linkedin pages and profile

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `type` | `string` | No |  |  |
| `originId` | `string` | No |  | 244405****11687 |
| `name` | `string` | No |  | JOHN_DEO |
| `avatar` | `string` | No |  |  |
| `urn` | `string` | No |  |  |
| `companyId` | `string` | No | Company ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Added LinkedIn Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/linkedin/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "<type>",
    "originId": "244405****11687",
    "name": "JOHN_DEO",
    "avatar": "<avatar>",
    "urn": "<urn>",
    "companyId": "sdfdsfdsfEWEsdfsdsW32dd"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Starts OAuth For Twitter Account

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/twitter/start`

<div><div>
  <span style= "display: inline-block;
    width: 25px; height: 25px;
    background-color: red;
    color: black;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    line-height: 20px;
    border: 2px solid black;
    border-radius: 20%;
    margin-right: 10px;">
    !
  </span>
  <span><strong>As of December 4, 2024, X (formerly Twitter) is no longer supported. We apologise for any inconvenience.</strong></span>
</div></div>

**Required Scope(s):** `socialplanner/oauth.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | w37swmmLbA02zgqKPpxITe2 |
| `userId` | `string` | Yes | User Id | u37swmmLbA02zgqKPpxITe2 |
| `page` | `string` | No | Page | integration |
| `reconnect` | `string` | No | Reconnect | true |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/twitter/start' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Twitter profile

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}`

<div><div>
  <span style= "display: inline-block;
    width: 25px; height: 25px;
    background-color: red;
    color: black;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    line-height: 20px;
    border: 2px solid black;
    border-radius: 20%;
    margin-right: 10px;">
    !
  </span>
  <span><strong>As of December 4, 2024, X (formerly Twitter) is no longer supported. We apologise for any inconvenience.</strong></span>
</div></div>


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched Twitter Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/twitter/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Attach Twitter profile

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}`

<div><div>
  <span style= "display: inline-block;
    width: 25px; height: 25px;
    background-color: red;
    color: black;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    line-height: 20px;
    border: 2px solid black;
    border-radius: 20%;
    margin-right: 10px;">
    !
  </span>
  <span><strong>As of December 4, 2024, X (formerly Twitter) is no longer supported. We apologise for any inconvenience.</strong></span>
</div></div>


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `originId` | `string` | No |  | 244405****11687 |
| `name` | `string` | No |  | JOHN_DEO |
| `username` | `string` | No |  | user_name |
| `avatar` | `string` | No |  |  |
| `protected` | `boolean` | No |  | True |
| `verified` | `boolean` | No |  | True |
| `companyId` | `string` | No | Company ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Added Twitter Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/twitter/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "originId": "244405****11687",
    "name": "JOHN_DEO",
    "username": "user_name",
    "avatar": "<avatar>",
    "protected": true,
    "verified": true,
    "companyId": "sdfdsfdsfEWEsdfsdsW32dd"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### POST Upload CSV

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/{locationId}/csv`

**Required Scope(s):** `socialplanner/csv.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `file` | `string (binary)` | No |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Uploaded CSV |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/csv' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Get Upload Status

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/{locationId}/csv`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `skip` | `string` | No |  | 1 |
| `limit` | `string` | No |  | 10 |
| `includeUsers` | `string` | No |  | true |
| `userId` | `string` | No | User ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched CSV Upload Status |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/csv' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Set Accounts

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/{locationId}/set-accounts`

**Required Scope(s):** `socialplanner/csv.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `accountIds` | `array[string]` | Yes | Account Ids | ['aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_1255461656452598 |
| `filePath` | `string` | Yes | File path | o6241QsiRwUIJHyjuhos/social-planner-import/a6d04a26-0401-4e5 |
| `rowsCount` | `number` | Yes | Entires Count. rowcCount must be between 1 and number of posts in CSV | 1 |
| `fileName` | `string` | Yes | Name of file | test.csv |
| `approver` | `string` | No |  | o6241QsiRwUIJHyjuhos |
| `userId` | `string` | No | User ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Accounts Set Successfully |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/set-accounts' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "accountIds": [
        "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
    ],
    "filePath": "o6241QsiRwUIJHyjuhos/social-planner-import/a6d04a26-0401-4e52-8f48-dbb274050fab.csv",
    "rowsCount": 1,
    "fileName": "test.csv",
    "approver": "o6241QsiRwUIJHyjuhos",
    "userId": "sdfdsfdsfEWEsdfsdsW32dd"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Get CSV Post

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/{locationId}/csv/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | sdfdsfdsfEWEsdfsdsW32dd |
| `id` | `string` | Yes | CSV Id | 65f92e55cc884f0d0845e447 |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `skip` | `string` | No |  | 0 |
| `limit` | `string` | No |  | 10 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched CSV Post |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/csv/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PATCH Start CSV Finalize

**Endpoint:** `PATCH https://services.leadconnectorhq.com/social-media-posting/{locationId}/csv/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | sdfdsfdsfEWEsdfsdsW32dd |
| `id` | `string` | Yes | CSV Id | 65f92e55cc884f0d0845e447 |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `userId` | `string` | No | User ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Updated Successfully |

**Sample Request**

```bash
curl -X PATCH \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/csv/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": "sdfdsfdsfEWEsdfsdsW32dd"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete CSV

**Endpoint:** `DELETE https://services.leadconnectorhq.com/social-media-posting/{locationId}/csv/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | sdfdsfdsfEWEsdfsdsW32dd |
| `id` | `string` | Yes | CSV Id | 65f92e55cc884f0d0845e447 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Deleted Post |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/csv/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete CSV Post

**Endpoint:** `DELETE https://services.leadconnectorhq.com/social-media-posting/{locationId}/csv/{csvId}/post/{postId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | sdfdsfdsfEWEsdfsdsW32dd |
| `postId` | `string` | Yes | CSV Post Id | 65f92e55cc884f0d0845e447 |
| `csvId` | `string` | Yes | CSV Id | 65f92e55cc884f0d0845e447 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Deleted Post |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/csv/:<csvId>/post/:<postId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Starts OAuth For Tiktok Account

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/tiktok/start`

Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Tiktok login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "tiktok" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch Tiktok account details using below API -
  API: '/social-media-posting/oauth/tiktok/accounts/:accountId' 

  Method: GET

**Required Scope(s):** `socialplanner/oauth.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | w37swmmLbA02zgqKPpxITe2 |
| `userId` | `string` | Yes | User Id | u37swmmLbA02zgqKPpxITe2 |
| `page` | `string` | No | Page | integration |
| `reconnect` | `string` | No | Reconnect | true |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/tiktok/start' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Tiktok profile

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched Tiktok Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/tiktok/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Attach Tiktok profile

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `type` | `string` | No |  |  |
| `originId` | `string` | No |  | 244405****11687 |
| `name` | `string` | No |  | JOHN_DEO |
| `avatar` | `string` | No |  |  |
| `verified` | `boolean` | No |  | True |
| `username` | `string` | No |  | JOHN_DEO |
| `companyId` | `string` | No | Company ID | sdfdsfdsfEWEsdfsdsW32dd |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Added Tiktok Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/tiktok/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "<type>",
    "originId": "244405****11687",
    "name": "JOHN_DEO",
    "avatar": "<avatar>",
    "verified": true,
    "username": "JOHN_DEO",
    "companyId": "sdfdsfdsfEWEsdfsdsW32dd"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET Starts OAuth For Tiktok Business Account

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/tiktok-business/start`

Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Tiktok-Business login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "tiktok-business" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch Tiktok-Business account details using below API -
  API: '/social-media-posting/oauth/tiktok-business/accounts/:accountId' 

  Method: GET

**Required Scope(s):** `socialplanner/oauth.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | w37swmmLbA02zgqKPpxITe2 |
| `userId` | `string` | Yes | User Id | u37swmmLbA02zgqKPpxITe2 |
| `page` | `string` | No | Page | integration |
| `reconnect` | `string` | No | Reconnect | true |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/tiktok-business/start' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Tiktok Business profile

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/oauth/{locationId}/tiktok-business/accounts/{accountId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Account Location Id | w37swmmLbA02zgqKPpxITe2 |
| `accountId` | `string` | Yes | Account Id | w37swmmLbA02zgqKPpxITe |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Fetched Tiktok Business Account |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/oauth/:<locationId>/tiktok-business/accounts/:<accountId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get categories by location id

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/{locationId}/categories`

**Required Scope(s):** `socialplanner/category.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `searchText` | `string` | No | Search text string | test |
| `limit` | `string` | No | Limit | 10 |
| `skip` | `string` | No | Skip | 0 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched Categories by Location ID |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/categories' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get categories by id

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/{locationId}/categories/{id}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | `string` | Yes | Category Id | 6284c43d519161e96cc09c13 |
| `locationId` | `string` | Yes | Location Id | 6284c43d519161e96cc09c13 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched Category |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/categories/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get tags by location id

**Endpoint:** `GET https://services.leadconnectorhq.com/social-media-posting/{locationId}/tags`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `searchText` | `string` | No | Search text string | test |
| `limit` | `string` | No | Limit | 10 |
| `skip` | `string` | No | Skip | 0 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 200 |
| `message` | `string` | Yes | Message | Fetched Tags by Location ID |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/tags' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### POST Get tags by ids

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/{locationId}/tags/details`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `tagIds` | `array[string]` | Yes | Array of Tag Ids | ['65fbdcfecc884f07e645ea8b'] |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success or Failure | True |
| `statusCode` | `number` | Yes | Status Code | 201 |
| `message` | `string` | Yes | Message | Fetched Tags by Tag IDs |
| `results` | `object` | No | Requested Results |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/:<locationId>/tags/details' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "tagIds": [
        "65fbdcfecc884f07e645ea8b"
    ]
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### POST Get Social Media Statistics

**Endpoint:** `POST https://services.leadconnectorhq.com/social-media-posting/statistics`

Retrieve analytics data for multiple social media accounts. Provides metrics for the last 7 days with comparison to the previous 7 days. Supports filtering by platforms and specific connected accounts.


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID | w37swmmLbA02zgqKPpxITe2 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/social-media-posting/statistics' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response Codes:** `201` | `400` | `401` | `422`


---

## Surveys API

Documentation for surveys API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/surveys/submissions` | Get Surveys Submissions | `surveys.readonly` |
| `GET` | `/surveys/` | Get Surveys | `surveys.readonly` |

### GET Get Surveys Submissions

**Endpoint:** `GET https://services.leadconnectorhq.com/surveys/submissions`

**Required Scope(s):** `surveys.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `page` | `number` | No | Page No. By default it will be 1 | 1 |
| `limit` | `number` | No | Limit Per Page records count. will allow maximum up to 100 and default will be 20 | 20 |
| `surveyId` | `string` | No | Filter submission by survey id | jjusM6EOngDExnbo2DbU |
| `q` | `string` | No | Filter by contactId, name, email or phone no. | john@deo.com |
| `startAt` | `string` | No | Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD). | 2020-11-14 |
| `endAt` | `string` | No | Get submission by ending of this date. By default it will be current date(YYYY-MM-DD). | 2020-12-14 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `submissions` | `array[SubmissionSchema]` | No |  |  |
| `meta` | `metaSchema` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/surveys/submissions' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Surveys

**Endpoint:** `GET https://services.leadconnectorhq.com/surveys/`

**Required Scope(s):** `surveys.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `skip` | `number` | No |  | 0 |
| `limit` | `number` | No | Limit Per Page records count. will allow maximum up to 50 and default will be 10 | 20 |
| `type` | `string` | No |  | folder |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `surveys` | `array[GetSurveysSchema]` | No |  |  |
| `total` | `number` | No | Number of surveys | 20 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/surveys/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


---
## References

[1]: https://marketplace.gohighlevel.com/docs/ghl/ "GHL API Marketplace Documentation"
[2]: https://github.com/GoHighLevel/highlevel-api-docs "GHL API v2 GitHub Repository"
[3]: https://services.leadconnectorhq.com "GHL API Base URL"
[4]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/blogs.json "GHL Blogs API OpenAPI Schema"
[5]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/campaigns.json "GHL Campaigns API OpenAPI Schema"
[6]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/courses.json "GHL Courses API OpenAPI Schema"
[7]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/forms.json "GHL Forms API OpenAPI Schema"
[8]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/funnels.json "GHL Funnels API OpenAPI Schema"
[9]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/links.json "GHL Links API OpenAPI Schema"
[10]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/medias.json "GHL Medias API OpenAPI Schema"
[11]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/social-media-posting.json "GHL Social-Media-Posting API OpenAPI Schema"
[12]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/surveys.json "GHL Surveys API OpenAPI Schema"