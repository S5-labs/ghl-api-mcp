# Social Media Posting API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/social-planner-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Social Media Posting API

## Post

### Get posts

**Endpoint:** `POST /social-media-posting/{locationId}/posts/list`
**Scope:** `socialplanner/post.readonly`
**Token Type:** bearer

Get Posts

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SearchPostDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `PostSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create post

**Endpoint:** `POST /social-media-posting/{locationId}/posts`
**Scope:** `socialplanner/post.write`
**Token Type:** bearer

Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.

The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:

  Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations "Social Planner Help")

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreatePostDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreatePostSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get post

**Endpoint:** `GET /social-media-posting/{locationId}/posts/{id}`
**Token Type:** bearer

Get post

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Post Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPostSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Edit post

**Endpoint:** `PUT /social-media-posting/{locationId}/posts/{id}`
**Token Type:** bearer

Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.

The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:

  Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations "Social Planner Help")

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Post Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreatePostDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdatePostSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Post

**Endpoint:** `DELETE /social-media-posting/{locationId}/posts/{id}`
**Token Type:** bearer

Delete Post

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Post Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeletePostSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Bulk Delete Social Planner Posts

**Endpoint:** `POST /social-media-posting/{locationId}/posts/bulk-delete`
**Token Type:** bearer

Deletes multiple posts based on the provided list of post IDs. 
                  This operation is useful for clearing up large numbers of posts efficiently. 
                  
Note: 
                  
1.The maximum number of posts that can be deleted in a single request is '50'.
                  
2.However, It will only get deleted in CRM database but still
                   it is recommended to be cautious of this operation.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `DeletePostsDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Posts deleted successfully | `BulkDeleteResponseDto` |
| `400` | Cannot delete more than 50 posts at a time. | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | No posts found with the given IDs. | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | An error occurred while trying to delete the posts. Please try again later. | `—` |

## Account

### Get Accounts

**Endpoint:** `GET /social-media-posting/{locationId}/accounts`
**Scope:** `socialplanner/account.readonly`
**Token Type:** bearer

Get list of accounts and groups

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `AccountsListResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Account

**Endpoint:** `DELETE /social-media-posting/{locationId}/accounts/{id}`
**Token Type:** bearer

Delete account and account from group

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Id |
| `companyId` | query | `string` | No | Company ID |
| `userId` | query | `string` | No | User ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `LocationAndAccountDeleteResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## CSV

### Upload CSV

**Endpoint:** `POST /social-media-posting/{locationId}/csv`
**Scope:** `socialplanner/csv.write`
**Token Type:** bearer

Upload a CSV file containing social media posts for bulk scheduling

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| multipart/form-data | `object` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `UploadFileResponseDTO` |
| `400` | Bad Request - File is required or CSV validation error | `CSVFileRequiredBadRequestDTO or CSVErrorResponseDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Upload Status

**Endpoint:** `GET /social-media-posting/{locationId}/csv`
**Token Type:** bearer

Get the status of all CSV imports for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `skip` | query | `string` | No | Number of records to skip |
| `limit` | query | `string` | No | Maximum number of records to return |
| `includeUsers` | query | `string` | No | Include user data in response |
| `isFromTemplate` | query | `string` | No | Filter CSVs imported from template library |
| `userId` | query | `string` | Yes | User ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetUploadStatusResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Set Accounts

**Endpoint:** `POST /social-media-posting/{locationId}/set-accounts`
**Scope:** `socialplanner/csv.write`
**Token Type:** bearer

Set social media accounts for a CSV import to publish posts to

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SetAccountsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `SetAccountsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Validation error | `SetAccountsUnprocessableDTO` |

### Get CSV Post

**Endpoint:** `GET /social-media-posting/{locationId}/csv/{id}`
**Token Type:** bearer

Get details of a specific CSV import including its posts

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | CSV Id |
| `skip` | query | `string` | No | Number of records to skip |
| `limit` | query | `string` | No | Maximum number of records to return |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetCsvPostResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Start CSV Finalize

**Endpoint:** `PATCH /social-media-posting/{locationId}/csv/{id}`
**Token Type:** bearer

Finalize a CSV import and schedule all posts for publishing

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | CSV Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CSVDefaultDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CsvPostStatusResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete CSV

**Endpoint:** `DELETE /social-media-posting/{locationId}/csv/{id}`
**Token Type:** bearer

Delete a CSV import and all its associated posts

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | CSV Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteCsvResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete CSV Post

**Endpoint:** `DELETE /social-media-posting/{locationId}/csv/{csvId}/post/{postId}`
**Token Type:** bearer

Delete a specific post from a CSV import

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `postId` | path | `string` | Yes | CSV Post Id |
| `csvId` | path | `string` | Yes | CSV Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeletePostResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## OAuth | Generic

### Start OAuth Flow (Step 1 of 3)

**Endpoint:** `GET /social-media-posting/oauth/{platform}/start`

## OAuth Connection Flow - Step 1: Initiate OAuth

This is the first step in the 3-step OAuth flow to connect a social media account:

1. **Start OAuth** (this endpoint) → User authenticates with the platform
2. **Get Accounts** → Retrieve available pages/channels to connect
3. **Attach Account** → Connect the selected account to your location

### How to Use

Open this API in a browser window (not via cURL) with the required query parameters. The user will be redirected to the platform's OAuth login screen.

### Receiving the OAuth Response

After successful authentication, the OAuth window will post a message back to your application. Listen for this message to get the `accountId` needed for the next step.

```javascript
window.addEventListener('message', function(e) {
  if (e.data && e.data.page === 'social_media_posting') {
    const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data;
    // Use accountId for Step 2: GET /oauth/{locationId}/{platform}/accounts/{accountId}
  }
}, false);
```

### Event Data Response

| Field | Type | Example | Description |
|-------|------|---------|-------------|
| actionType | string | "close" | The action type |
| page | string | "social-media-posting" | Source page identifier |
| platform | string | "facebook" | The OAuth platform |
| placement | string | "placement" | Placement context |
| accountId | string | "658a9b6833b91e0ecb8f3958" | **Use this for Step 2** |
| reconnectAccounts | string[] | ["658a9b...", "efd2da..."] | Accounts that need reconnection |

### Next Step

Use the `accountId` from the response to call:
```
GET /social-media-posting/oauth/{locationId}/{platform}/accounts/{accountId}
```

### Platform Notes

- **bluesky**: Currently not supported, will return an error
- **tiktok-business**: Uses a separate business OAuth flow

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `platform` | path | `string` | Yes | Social media platform to connect. Each platform has specific account types:<br>- **google**: Google Business Profile locations<br>- **facebook**: Facebook Pages<br>- **instagram**: Instagram Professional Accounts (Business/Creator)<br>- **linkedin**: LinkedIn Pages and Profiles<br>- **tiktok**: TikTok Creator Accounts<br>- **tiktok-business**: TikTok Business Center Accounts<br>- **youtube**: YouTube Channels<br>- **pinterest**: Pinterest Business Accounts<br>- **threads**: Threads Profiles<br>- **bluesky**: Bluesky Accounts (currently not supported) |
| `locationId` | query | `string` | Yes | Location Id |
| `userId` | query | `string` | Yes | User Id |
| `page` | query | `string` | No | Page |
| `reconnect` | query | `string` | No | Reconnect |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful Response | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Available Accounts (Step 2 of 3)

**Endpoint:** `GET /social-media-posting/oauth/{locationId}/{platform}/accounts/{accountId}`

## OAuth Connection Flow - Step 2: Get Available Accounts

After completing OAuth authentication (Step 1), use this endpoint to retrieve the list of available pages, channels, or locations that can be connected.

### OAuth Flow Position

1. **Start OAuth** → User authenticates, returns `accountId`
2. **Get Accounts** (this endpoint) → Lists available pages/channels to connect
3. **Attach Account** → Connect the selected account

### What This Returns

The response varies by platform:

| Platform | Returns |
|----------|--------|
| **facebook** | List of Facebook Pages the user manages |
| **instagram** | List of Instagram Professional Accounts (linked to Facebook Pages) |
| **google** | Google Business Profile locations |
| **linkedin** | LinkedIn Pages and Profile |
| **tiktok** | TikTok Creator account info |
| **tiktok-business** | TikTok Business Center accounts |
| **youtube** | YouTube Channels |
| **pinterest** | Pinterest Business accounts and boards |
| **threads** | Threads profiles |

### Next Step

From the response, select the account/page you want to connect and use its details in Step 3:
```
POST /social-media-posting/oauth/{locationId}/{platform}/accounts/{accountId}
```

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `platform` | path | `string` | Yes | Social media platform |
| `accountId` | path | `string` | Yes | The OAuth Account ID received from Step 1 (Start OAuth) via the window message event |
| `search` | query | `string` | No | Search term to filter accounts/pages by name. Useful when the user has many pages to choose from. |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Returns available accounts/pages/channels that can be connected. Response structure varies by platform - see examples below. | `GetFacebookAccountsResponseDTO or GetInstagramAccountsResponseDTO or GetGoogleLocationResponseDTO or GetLinkedInAccountsResponseDTO or GetTiktokAccountResponseDTO or GetTiktokBusinessAccountResponseDTO or GetYouTubeAccountsResponseDTO or GetPinterestAccountsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Connect Account (Step 3 of 3)

**Endpoint:** `POST /social-media-posting/oauth/{locationId}/{platform}/accounts/{accountId}`

## OAuth Connection Flow - Step 3: Connect the Account

This is the final step in the OAuth flow. After retrieving available accounts (Step 2), use this endpoint to connect the selected account to your location.

### OAuth Flow Summary

1. **Start OAuth** → User authenticates with platform
2. **Get Accounts** → Retrieved available pages/channels
3. **Attach Account** (this endpoint) → Connect the selected account

### Request Body by Platform

The request body structure varies depending on the platform:

#### Facebook / Instagram
```json
{
  "type": "page",
  "originId": "244405XXXXX11687",
  "name": "My Facebook Page",
  "avatar": "https://..." // optional
}
```

#### Google Business Profile
```json
{
  "location": {
    "name": "locations/12345",
    "title": "My Business Location",
    "storeCode": "STORE123",
    "isVerified": "ChIJsZQpj1qbXjkRQNDUG4UUx6k"
  },
  "account": {
    "name": "accounts/12345",
    "accountName": "My Business Account",
    "type": "LOCATION_GROUP",
    "verificationState": "VERIFIED",
    "vettedState": "VETTED"
  }
}
```

#### LinkedIn
```json
{
  "type": "page",
  "originId": "urn:li:organization:12345",
  "name": "My LinkedIn Page",
  "avatar": "https://..." // optional
}
```

#### TikTok
```json
{
  "originId": "7234567890123456789",
  "name": "My TikTok Account",
  "avatar": "https://..." // optional
}
```

#### YouTube
```json
{
  "originId": "UCxxxxxxxxxxxxxxxx",
  "name": "My YouTube Channel",
  "avatar": "https://..." // optional
}
```

#### Pinterest
```json
{
  "originId": "123456789",
  "name": "My Pinterest Account",
  "avatar": "https://..." // optional
}
```

### After Connection

Once connected, the account will appear in your location's connected accounts and can be used for social media posting.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | The Location ID where you want to connect this social account |
| `platform` | path | `string` | Yes | Social media platform (must match the platform used in Steps 1 and 2) |
| `accountId` | path | `string` | Yes | The OAuth Account ID received from Step 1 (same as used in Step 2) |

**Request Body**

Account details to connect. The structure varies by platform - see description above for examples.

| Content type | Schema |
| --- | --- |
| application/json | `AttachFBAccountDTO or AttachIGAccountDTO or AttachGMBLocationDTO or AttachPinterestAccountDTO or AttachTiktokAccountDTO or AttachYoutubeAccountResponseDTO or AttachLinkedinAccountDTO or AttachThreadsAccountDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response - Account attached. Response structure varies by platform. | `SocialMediaFBAccountResponseDTO or SocialMediaInstagramAccountResponseDTO or SocialMediaGmbAccountResponseDTO or SocialMediaLinkedInAccountResponseDTO or SocialMediaTiktokAccountResponseDTO or SocialMediaYouTubeAccountResponseDTO or SocialMediaPinterestAccountResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Category

### Get categories by location id

**Endpoint:** `GET /social-media-posting/{locationId}/categories`
**Scope:** `socialplanner/category.readonly`
**Token Type:** bearer

Retrieve all categories for a specific location with optional search and pagination

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `searchText` | query | `string` | No | Search text string |
| `limit` | query | `string` | No | Limit |
| `skip` | query | `string` | No | Skip |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetByLocationIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get categories by id

**Endpoint:** `GET /social-media-posting/{locationId}/categories/{id}`
**Token Type:** bearer

Retrieve a specific category by its ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Authorization` | header | `string` | Yes | Access Token |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Category Id |
| `locationId` | path | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetByIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Tag

### Get tags by location id

**Endpoint:** `GET /social-media-posting/{locationId}/tags`
**Token Type:** bearer

Retrieve all tags for a specific location with optional search and pagination

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `searchText` | query | `string` | No | Search text string |
| `limit` | query | `string` | No | Limit |
| `skip` | query | `string` | No | Skip |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetTagsByLocationIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get tags by ids

**Endpoint:** `POST /social-media-posting/{locationId}/tags/details`
**Token Type:** bearer

Retrieve specific tags by their IDs

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateTagDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `GetTagsByIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Statistics

### Get Social Media Statistics

**Endpoint:** `POST /social-media-posting/statistics`
**Scope:** `socialplanner/statistics.readonly`
**Token Type:** bearer

Retrieve analytics data for multiple social media accounts. Supports custom date ranges for both the current period and a comparison period. If no date ranges are provided, defaults to the last 7 days (excluding today) with comparison to the previous 7 days.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location ID |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `object` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved analytics data | `object` |
| `400` | Bad Request - Occurs when: more than 100 accounts are requested, invalid date formats are provided, startDate is after endDate, prevRange is provided without currentRange, or invalid platform values are specified. | `BadRequestDTO` |
| `401` | Unauthorized - Invalid or missing authentication credentials | `UnauthorizedDTO` |
| `422` | Unprocessable Entity - Invalid request body format | `UnprocessableDTO` |

## Category Queue

### Get all categories with their queue status

**Endpoint:** `GET /social-media-posting/category/queues/available-categories`
**Scope:** `socialplanner/category.readonly`
**Token Type:** bearer

Returns categories with status: "available" (no queue), "in_queue" (active/paused queue), or "draft" (queue in draft).

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location ID |
| `skip` | query | `string` | No | Number of items to skip |
| `limit` | query | `string` | No | Maximum number of items to return |
| `q` | query | `string` | No | Search query |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Available categories fetched successfully. | `WrappedFetchAvailableCategoriesResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create a new category queue

**Endpoint:** `POST /social-media-posting/category/queues`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Creates a queue in draft status for a category. Published posts are auto-added. Use update endpoint to activate.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateCategoryQueueDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Queue created successfully. | `WrappedCreateCategoryQueueResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Fetch category queues for a location

**Endpoint:** `POST /social-media-posting/category/queues/list`
**Scope:** `socialplanner/category.readonly`
**Token Type:** bearer

Retrieves a paginated list of all category queues for a given location, excluding any that have been marked as deleted.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `FetchCategoryQueuesDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successfully retrieved category queues. | `WrappedFetchCategoryQueuesResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Fetch a category queue by ID

**Endpoint:** `GET /social-media-posting/category/queues/{queueId}`
**Scope:** `socialplanner/category.readonly`
**Token Type:** bearer

Retrieves the details of a single category queue by its unique ID. The response includes a count of posts within the queue that have errors.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | Location ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved the category queue. | `WrappedFetchQueueByIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update queue settings or status

**Endpoint:** `PUT /social-media-posting/category/queues/{queueId}`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Updates queue status (active/paused/deleted), time slots, or skip dates.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCategoryQueueDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Queue updated successfully. | `WrappedUpdateCategoryQueueResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Fetch items from a queue

**Endpoint:** `POST /social-media-posting/category/queues/{queueId}/items`
**Scope:** `socialplanner/category.readonly`
**Token Type:** bearer

Returns paginated queue items. Pass sessionId to get draft items from an edit session instead of live items.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `FetchQueueItemsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Queue items fetched successfully. | `WrappedFetchQueueItemsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Start or resume an edit session

**Endpoint:** `POST /social-media-posting/category/queues/{queueId}/edit/start`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Creates a draft copy of queue items for editing. Changes are staged until saved or discarded.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `StartEditSessionDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Edit session started successfully. | `WrappedStartEditSessionResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Save edit session changes

**Endpoint:** `POST /social-media-posting/category/queues/{queueId}/edit/save`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Applies all staged changes to the live queue and closes the edit session.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SaveEditSessionDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Edit session saved successfully. | `WrappedSaveEditSessionResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Discard edit session changes

**Endpoint:** `POST /social-media-posting/category/queues/{queueId}/edit/discard`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Cancels the edit session and deletes all staged changes without affecting the live queue.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `DiscardEditSessionDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Edit session discarded successfully. | `WrappedDiscardEditSessionResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Fetch calendar view for an edit session

**Endpoint:** `POST /social-media-posting/category/queues/{queueId}/edit/calendar`
**Scope:** `socialplanner/category.readonly`
**Token Type:** bearer

Retrieves a calendar preview of scheduled posts based on draft items within an edit session. This shows how posts would be scheduled if changes were saved.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `EditSessionCalendarDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Edit session calendar fetched successfully. | `WrappedEditSessionCalendarResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Fetch slot information for queue items

**Endpoint:** `POST /social-media-posting/category/queues/{queueId}/slots`
**Scope:** `socialplanner/category.readonly`
**Token Type:** bearer

Returns paginated slot information (scheduledDateTime, isSkipped) for queue items. Pass sessionId to get slots for draft items, or omit for live items. Call this after mutations to refresh slot data.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `FetchSlotsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Slots fetched successfully. | `WrappedFetchSlotsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete an item from a queue

**Endpoint:** `DELETE /social-media-posting/category/queues/{queueId}/items/{itemId}`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Deletes an item from a specific category queue.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |
| `itemId` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | Location ID |
| `sessionId` | query | `string` | No | Edit session ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | The queue item has been successfully deleted. | `WrappedGeneralSuccessResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update an item in a queue

**Endpoint:** `PUT /social-media-posting/category/queues/{queueId}/items/{itemId}`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Updates the content or variations of a specific item within a category queue.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |
| `itemId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateQueueItemDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | The queue item has been successfully updated. | `WrappedUpdateQueueItemResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get scheduled posts calendar view

**Endpoint:** `POST /social-media-posting/category/queues/list/calendar`
**Scope:** `socialplanner/category.readonly`
**Token Type:** bearer

Returns scheduled posts from active queues within a date range. Supports filtering by categories and accounts.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CalendarListDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Calendar list fetched successfully. | `WrappedFetchCalendarListResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete an active post and schedule the next one

**Endpoint:** `DELETE /social-media-posting/category/queues/{postId}/active-post`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Deletes a post that is currently scheduled and automatically triggers the scheduling of the next available post in the queue.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `postId` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | Location ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully deleted the active post and scheduled the next one. | `WrappedDeleteActivePostResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Reset an item in a queue

**Endpoint:** `PUT /social-media-posting/category/queues/{queueId}/items/{itemId}/reset`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Resets a specific queue item to its original state, discarding any modifications made.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |
| `itemId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ResetQueueItemDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | The queue item has been successfully reset. | `WrappedResetQueueItemResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Clone a queue item

**Endpoint:** `POST /social-media-posting/category/queues/{queueId}/items/{itemId}/clone`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Duplicates an existing queue item at a specified order position. Requires an active edit session.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |
| `itemId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CloneQueueItemDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Queue item cloned successfully. | `WrappedCloneQueueItemResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create a new item in the queue

**Endpoint:** `POST /social-media-posting/category/queues/{queueId}/create/item`
**Scope:** `socialplanner/category.write`
**Token Type:** bearer

Adds a new post item to a queue. Use sessionId for edit session or directToQueue for immediate addition.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `queueId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateQueueItemDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Queue item created successfully. | `WrappedCreateQueueItemResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Comments

### Create a comment or reply

**Endpoint:** `POST /social-media-posting/comments/{platform}`

Create a top-level comment on a post (`isParentThread: true`, `parentId` = postId) or a reply to an existing comment (`isParentThread: false`, `parentId` = commentId). Per-platform content max length: Facebook 8000, Instagram 2200, Linkedin 3000, Community 8000, Tiktok 150, Bluesky 300, Youtube 10000, Threads 500.

**Optional-field platform support:**
- `attachments` — supported on **Facebook only**. Ignored on Instagram, LinkedIn, TikTok, Bluesky, Community (Community processes the field but external URLs are not rendered due to its bucket restriction).
- `mentions` — supported on **Facebook**, **LinkedIn**, and **Community** only. Ignored on Instagram, TikTok, Bluesky.
- `notifyAllGroupMembers` — supported on **Community** only. When `true`, all group members get a push/in-app notification (equivalent to an `@everyone` broadcast). Independent of the `mentions` array and of `@everyone` text in `content`. Default `false`.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `platform` | path | `string` | Yes | Supported Comments Platforms |
| `locationId` | query | `string` | Yes | Location ID |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CommentsCreateBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CommentsCreateResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Like a comment

**Endpoint:** `POST /social-media-posting/comments/{platform}/{id}/like`

Like a comment by its **Highlevel** comment ID (the `_id` returned by the list-comments endpoint — not the native platform ID).

Works for any comment level — top-level comments, replies, and replies-to-replies. **Supported platforms:** Facebook, LinkedIn, Community, TikTok, Bluesky. Instagram is not supported (passing `instagram` returns 400).

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `platform` | path | `string` | Yes | Platform that supports liking / unliking comments (Instagram is not supported) |
| `id` | path | `string` | Yes | Highlevel comment ID — the `_id` returned by the list-comments endpoint (`POST /comments/{platform}/list`). Not the native platform comment ID. Works for any comment level: top-level comments, replies, and replies-to-replies. |
| `locationId` | query | `string` | Yes | Location ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CommentsLikeResponseDTO` |
| `400` | State conflict (already liked) or unsupported platform (Instagram) | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Unlike a comment

**Endpoint:** `DELETE /social-media-posting/comments/{platform}/{id}/like`

Remove a like from a comment by its **Highlevel** comment ID (the `_id` returned by the list-comments endpoint — not the native platform ID).

Works for any comment level — top-level comments, replies, and replies-to-replies. **Supported platforms:** Facebook, LinkedIn, Community, TikTok, Bluesky. Instagram is not supported (passing `instagram` returns 400).

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `platform` | path | `string` | Yes | Platform that supports liking / unliking comments (Instagram is not supported) |
| `id` | path | `string` | Yes | Highlevel comment ID — the `_id` returned by the list-comments endpoint (`POST /comments/{platform}/list`). Not the native platform comment ID. Works for any comment level: top-level comments, replies, and replies-to-replies. |
| `locationId` | query | `string` | Yes | Location ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteLikeResponseDTO` |
| `400` | State conflict (not currently liked) or unsupported platform (Instagram) | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List comments for a post or thread

**Endpoint:** `POST /social-media-posting/comments/{platform}/list`

Paginated list of comments scoped to a post (`parentId` = postId) or a comment thread (`parentId` = commentId). Use `skip`/`limit` for pagination, `sortBy` for ordering, `originIds` to filter by connected account, and `search` for keyword search.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `platform` | path | `string` | Yes | Supported Comments Platforms |
| `locationId` | query | `string` | Yes | Location ID |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CommentsGetListBodyDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CommentsGetListResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### BaseOAuthAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Account Name |
| `originId` | `string` | Yes | Origin ID |
| `avatar` | `string` | No | Account Avatar URL |

### GoogleLocationSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Google Business account identifier |
| `storeCode` | `string` | No | Store code or location identifier |
| `title` | `string` | No | Business location title or name |
| `metadata` | `object` | No | Meta data not related to User |
| `storefrontAddress` | `object` | No | Store front address |
| `relationshipData` | `object` | No | All locations and chain related to this one |
| `maxLocation` | `boolean` | No | Indicates if location limit has been reached |
| `isVerified` | `boolean` | No | Indicates if the location is verified by Google |
| `isConnected` | `boolean` | No | Indicates if the location is currently connected |

### GoogleAccountsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Google Business account identifier |
| `accountName` | `string` | No | Display name of the Google Business account |
| `type` | `string` | No | Type of Google Business account |
| `verificationState` | `string` | No | Verification state of the account |
| `vettedState` | `string` | No | Vetted state of the account by Google |

### GetGoogleLocationSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `GoogleLocationSchema` | No | Google Location Details |
| `account` | `GoogleAccountsSchema` | No | Google Account Details |

### GetGoogleLocationAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locations` | `GetGoogleLocationSchema` | No | Locations |

### GetGoogleLocationResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetGoogleLocationAccountSchema` | No | Requested Results |

### AttachGMBLocationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `AttachGMBLocationLocationDTO` | Yes | — |
| `account` | `AttachGMBLocationAccountDTO` | Yes | — |

### AttachGMBLocationLocationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Location name |
| `storeCode` | `string` | No | Store code |
| `title` | `string` | Yes | Location title |
| `storefrontAddress` | `object` | No | Storefront address details |
| `metadata` | `object` | No | Additional metadata |
| `maxLocation` | `boolean` | No | Whether this is a max location |
| `isVerified` | `boolean` | No | Whether the location is verified |
| `isConnected` | `boolean` | No | Whether the location is connected |

### AttachGMBLocationAccountDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Account name identifier |
| `accountName` | `string` | Yes | Display name of the account |
| `type` | `string` | Yes | Type of the account |
| `verificationState` | `string` | Yes | State of account verification |
| `vettedState` | `string` | Yes | Vetting state of the account |

### SocialGoogleMediaAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | MongoDB document ID of the social media account |
| `oAuthId` | `string` | No | OAuth provider account identifier |
| `oldId` | `string` | No | Legacy account identifier for backward compatibility |
| `locationId` | `string` | No | Location ID associated with this account |
| `originId` | `string` | No | Original platform-specific account identifier |
| `platform` | `object` | No | Social media platform name |
| `type` | `object` | No | Type of account (e.g., location, page, profile) |
| `name` | `string` | No | Display name of the account |
| `avatar` | `string` | No | Avatar or profile picture URL |
| `meta` | `object` | No | Additional metadata for the account |
| `active` | `boolean` | No | Indicates if the account is currently active |
| `deleted` | `boolean` | No | Indicates if the account has been deleted |
| `createdAt` | `string (date-time)` | No | created date |
| `updatedAt` | `string (date-time)` | No | updated date |

### SocialMediaGmbAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `SocialGoogleMediaAccountSchema` | No | Requested Results |

### SearchPostDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | No | type must be one of the following values: recent, all, scheduled, draft, failed, in_review, published, in_progress, pending and deleted |
| `accounts` | `string` | No | List of account Ids separated by comma as a string |
| `skip` | `string` | Yes | Number of records to skip for pagination |
| `limit` | `string` | Yes | Maximum number of records to return |
| `fromDate` | `string` | Yes | From Date |
| `toDate` | `string` | Yes | To Date |
| `includeUsers` | `string` | Yes | Include User Data |
| `postType` | `object` | No | Post Type must be one of the following values: - post, story, reel |

### PostMediaSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | Yes | Public URL of the media file. Must be a valid, accessible HTTPS URL. |
| `caption` | `string` | No | Alt text or caption for the media. Used for accessibility and SEO. |
| `originalUrl` | `string` | No | Original media URL before any processing (watermarking/optimization). Set automatically by the system. |
| `watermarkedUrl` | `string` | No | URL of the media after watermarking. Set automatically when watermark is applied. |
| `type` | `string` | Yes | MIME type of the media file. See Platform Limitations Guide for platform-specific format support. |
| `thumbnail` | `string` | No | Cover image URL for a video media item.<br><br>**Scope**<br>- Applies to the **first video** in `media[]`. Values supplied on subsequent video items are ignored.<br>- Has no effect on image-only media items.<br><br>**Response behavior**<br>- After the post is published, the resolved cover image is surfaced on the post-level `thumbnail` field of the response and is no longer echoed back inside `media[]`. This represents the post's primary cover image and the cover used for the first video.<br><br>**Limitations**<br>- Per-item thumbnails for multi-video posts are not supported. Each destination network exposes a single cover image per post for the leading video; this matches the behavior of the underlying social platform APIs.<br><br>**Format**<br>- Provide a publicly accessible JPEG or PNG URL. Animated formats and video URLs are not accepted.<br>- Recommended: an image matching the orientation of your video and ≤ 2 MB. |
| `id` | `string` | No | Unique identifier for the media item. Used for tracking and referencing. |
| `optimizedUrl` | `string` | No | URL of the optimized/compressed media. Set automatically when media optimization is enabled.<br><br>**Enable Optimization:** Set `mediaOptimization: true` in the post request. |
| `optimizedType` | `string` | No | MIME type of the optimized media. May differ from original if format conversion occurred. |
| `isModified` | `boolean` | No | Flag indicating if the media was modified (watermarked, optimized, or processed). |
| `altText` | `string` | No | Alt text for accessibility. Supported on Instagram, Threads, Pinterest, Bluesky, and LinkedIn image posts (ignored for video and other platforms). Auto-truncated per platform: Pinterest 500, Instagram/Threads 1000, Bluesky 2000, LinkedIn 4086 chars. |

### OgTagsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `metaImage` | `string` | No | Preview image URL for the shared link.<br><br>**Best Practices:**<br>- Use high-quality images (1200x630px recommended)<br>- Ensure the image is publicly accessible<br><br>**Auto-fetch:** Use the Get Metatags API to fetch OG data from a URL. |
| `metaLink` | `string` | No | URL of the webpage being shared. This is the destination when users click the link preview. |
| `ogTitle` | `string` | No | Custom title for the link preview. Overrides the page's og:title meta tag.<br><br>**Tip:** Keep titles concise (50-60 characters) for best display across platforms. |
| `ogDescription` | `string` | No | Custom description for the link preview. Overrides the page's og:description meta tag.<br><br>**Tip:** Keep descriptions under 155 characters for optimal display. |

### PostUserSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | User Id |
| `title` | `string` | Yes | Title |
| `firstName` | `string` | Yes | First name |
| `lastName` | `string` | Yes | Last name |
| `profilePhoto` | `string` | Yes | Profile photo |
| `phone` | `string` | Yes | Phone number |
| `email` | `string` | Yes | Email Id |

### FormatedApprovalDetails

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approver` | `string` | No | User ID of the designated approver.<br><br>**Note:** The approver will receive a notification when a post is submitted for review. |
| `requesterNote` | `string` | No | Note from the post creator to the approver explaining the post or requesting specific feedback. |
| `approverNote` | `string` | No | Note from the approver to the post creator with feedback or approval comments. |
| `approvalStatus` | `string` | No | Current approval status of the post.<br><br>**Available Values:**<br>- `pending` - Awaiting approver review<br>- `approved` - Approved and ready for publishing<br>- `rejected` - Rejected by approver (needs revision)<br>- `not_required` - No approval workflow needed |
| `approverUser` | `PostUserSchema` | No | Approver User Details |

### TiktokPostSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `privacyLevel` | `string` | Yes | Privacy level controlling who can view the video.<br><br>**Available Values:**<br>- `PUBLIC_TO_EVERYONE` - Anyone can view (default)<br>- `MUTUAL_FOLLOW_FRIENDS` - Only mutual followers can view<br>- `SELF_ONLY` - Only you can view (private)<br><br>**Note:** If set to `SELF_ONLY`, `videoDisclosure` must be `false`. |
| `promoteOtherBrand` | `boolean` | No | Indicates if the video promotes a third-party brand or product.<br><br>**Required:** Must be `true` if `videoDisclosure` is enabled and you're promoting another brand. |
| `enableComment` | `boolean` | No | Allow users to comment on the video. Default is determined by account settings. |
| `enableDuet` | `boolean` | No | Allow users to create Duet videos with your content.<br><br>**Duet:** Side-by-side video featuring your content and the creator's reaction/addition. |
| `enableStitch` | `boolean` | No | Allow users to create Stitch videos with your content.<br><br>**Stitch:** Clips up to 5 seconds of your video that creators can use in their own videos. |
| `videoDisclosure` | `boolean` | No | Enable branded content disclosure. Required when video is promotional content.<br><br>**Validations:**<br>- Cannot be `true` if `privacyLevel` is `SELF_ONLY`<br>- If enabled, at least one of `promoteYourBrand` or `promoteOtherBrand` must be `true` |
| `promoteYourBrand` | `boolean` | No | Indicates if the video promotes your own brand or product.<br><br>**Required:** Must be `true` if `videoDisclosure` is enabled and you're promoting your own brand. |

### DateSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `year` | `number` | Yes | Year component of the date |
| `month` | `number` | Yes | Month component of the date (1-12) |
| `day` | `number` | Yes | Day component of the date (1-31) |

### TimeSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hours` | `number` | Yes | Hour component of the time (0-23) |
| `minutes` | `number` | Yes | Minute component of the time (0-59) |
| `seconds` | `number` | Yes | Second component of the time (0-59) |

### StartDateSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `startDate` | `DateSchema` | No | Start Date |
| `startTime` | `TimeSchema` | No | Start Time |

### EndDateSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endDate` | `DateSchema` | No | End Date |
| `endTime` | `TimeSchema` | No | End Time |

### GMBPostSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `gmbEventType` | `string` | Yes | Google My Business post type.<br><br>**Available Types:**<br>- `STANDARD` - Regular update post (What's New)<br>- `EVENT` - Event announcement with dates and title<br>- `OFFER` - Promotional offer with coupon and redemption details<br><br>**Required fields by type:**<br>- STANDARD: None additional<br>- EVENT: `title`, `startDate`, `endDate`<br>- OFFER: `offerTitle`, `startDate`, `endDate`, `termsConditions`, `couponCode`, `redeemOnlineUrl` |
| `title` | `string` | No | Event title. Required when `gmbEventType` is `EVENT`.<br><br>**Max length:** 58 characters |
| `offerTitle` | `string` | No | Offer title. Required when `gmbEventType` is `OFFER`. |
| `startDate` | `StartDateSchema` | No | Start date and time for EVENT or OFFER posts.<br><br>**Required:** When `gmbEventType` is `EVENT` or `OFFER`.<br><br>**Structure:**<br>- `startDate`: { year, month, day }<br>- `startTime`: { hours, minutes, seconds } |
| `endDate` | `EndDateSchema` | No | End date and time for EVENT or OFFER posts.<br><br>**Required:** When `gmbEventType` is `EVENT` or `OFFER`.<br>**Validation:** Must be after `startDate`.<br><br>**Structure:**<br>- `endDate`: { year, month, day }<br>- `endTime`: { hours, minutes, seconds } |
| `termsConditions` | `string` | No | URL to terms and conditions page. Required for OFFER posts. |
| `url` | `string` | No | Call-to-action URL. Required when `actionType` is set (except `none` and `call`).<br><br>**Required for:** STANDARD and EVENT posts with actionType other than `none` or `call`. |
| `couponCode` | `string` | No | Promotional coupon code. Required for OFFER posts. |
| `redeemOnlineUrl` | `string` | No | URL where customers can redeem the offer online. Required for OFFER posts. |
| `actionType` | `string` | No | Call-to-action button type for the post.<br><br>**Available Actions:**<br>- `none` - No action button<br>- `order` - Order online<br>- `book` - Book appointment<br>- `shop` - Shop now<br>- `learn_more` - Learn more<br>- `call` - Call now (no URL required)<br>- `sign_up` - Sign up<br><br>**Note:** All actions except `none` and `call` require a `url`. |

### BlueskyPostSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `shortenedLinks` | `array<string>` | No | Shortened links for the post (auto-generated). |
| `replyTo` | `string` | No | Bluesky AT Protocol URI of a post to reply to.<br><br>**Format:** `at://did:plc:{user-id}/app.bsky.feed.post/{post-id}`<br><br>**Use Case:** Create a reply thread to an existing Bluesky post. |
| `quotePost` | `string` | No | Bluesky AT Protocol URI of a post to quote.<br><br>**Format:** `at://did:plc:{user-id}/app.bsky.feed.post/{post-id}`<br><br>**Use Case:** Quote-post another user's post with your commentary. |
| `language` | `string` | No | ISO 639-1 language code for the post content.<br><br>**Examples:** `en` (English), `es` (Spanish), `fr` (French), `de` (German) |
| `externalLink` | `string` | No | External URL to embed as a link card in the post. |
| `externalLinkTitle` | `string` | No | Title for the external link card. Displayed prominently in the embed. |
| `externalLinkDescription` | `string` | No | Description for the external link card. Brief summary displayed below the title. |

### LinkedinPollOptionDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | `string` | Yes | Text describing the option. Max length: 30 characters. |

### LinkedinPollSettingsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `duration` | `string` | Yes | Duration the poll stays open for votes. |

### LinkedinPollDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `question` | `string` | Yes | Question for the poll. Max length: 140 characters. |
| `options` | `array<LinkedinPollOptionDto>` | Yes | Poll options. Minimum 2, maximum 4. Each option text max 30 characters. Option texts must be unique. |
| `settings` | `LinkedinPollSettingsDto` | Yes | Poll settings (duration). |

### LinkedinPostSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pdfTitle` | `string` | Yes | Title for the PDF document carousel. Displayed as the document name on LinkedIn.<br><br>**Max length:** 100 characters<br><br>**Tip:** Use a descriptive title that explains the document content. |
| `postAsPdf` | `boolean` | Yes | Post images as a PDF document carousel.<br><br>**Limits:**<br>- Max 300 pages/images<br>- Max PDF size: 100 MB |
| `poll` | `LinkedinPollDto` | No | Publish a LinkedIn poll post.<br><br>**Required fields when `poll` is supplied:**<br>- `question` (max 140 characters)<br>- `options`: 2 to 4 entries, each `text` ≤ 30 characters; option texts must be unique<br>- `settings.duration`: one of `ONE_DAY`, `THREE_DAYS`, `SEVEN_DAYS`, `FOURTEEN_DAYS`<br><br>**LinkedIn restrictions:**<br>- Polls cannot be edited after publishing.<br>- A poll post cannot include `media` or a meta-link preview. |

### PinterestBoardSelection

Per-account Pinterest board selection. Each entry binds one connected Pinterest account to a list of board IDs the pin should publish to. Each selected board produces an independent child post tracked separately for success/failure.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountId` | `string` | Yes | Connected Pinterest account ID. Must match one of the accounts referenced in the post's `userIds`. |
| `boards` | `array<string>` | Yes | Pinterest board IDs to publish to on this account. Each board produces an independent child post. Capped at 25 boards per account. |

### PinterestPostSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | Pin title displayed on Pinterest.<br><br>**Max length:** 100 characters<br><br>**Best Practices:**<br>- Include relevant keywords<br>- Be descriptive and engaging |
| `link` | `string` | No | Destination URL for the pin. Users clicking the pin will be directed to this URL.<br><br>**Max length:** 2048 characters<br><br>**Best Practices:**<br>- Use direct links to relevant content<br>- Track with UTM parameters for analytics |
| `boardIds` | `object` | No | **DEPRECATED — use `pinterestBoards` instead.** Will be removed on July 31, 2026.<br><br>Legacy mapping of Pinterest account OAuth IDs to a single board ID:<br>`{ accountOAuthId: "boardId" }`<br><br>For multi-board posting, use `pinterestBoards`. |
| `pinterestBoards` | `array<PinterestBoardSelection>` | No | Per-account Pinterest board selection. Each entry binds one connected Pinterest account to a list of boards on that account. Each board produces an independent child post tracked separately for success/failure. Capped at 25 boards per account.<br><br>When supplied, this field takes precedence over the deprecated `boardIds` field. |
| `shortenedLinks` | `array<string>` | No | Shortened links for the post (auto-generated). |

### FacebookPostSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Facebook post format type.<br><br>**Available Types:**<br>- `post` - Standard feed post (images, videos, text)<br>- `story` - 24-hour temporary story<br>- `reel` - Short-form vertical video<br><br>**Restrictions:**<br>- Reels: Require exactly 1 video, not supported on Groups<br>- Stories: Captions not supported |
| `textFormatPresetId` | `string` | No | Facebook background preset ID for text-only feed posts. **Facebook `post` only** — not `story` or `reel`. Ignored when media is attached; `metaLink` is omitted on publish.<br><br>**Validations** — request returns `400` if violated:<br>- Must be a valid preset ID from the [Facebook text background preset reference](https://help.leadconnectorhq.com/support/solutions/articles/155000008005-facebook-text-background-posts-preset-reference). Empty strings, whitespace-only values, and `null` are rejected.<br>- When set, `summary` must be 130 characters or fewer. |

### InstagramPostSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Instagram post format type.<br><br>**Available Types:**<br>- `post` - Standard feed post (images, videos, carousels)<br>- `story` - 24-hour temporary story<br>- `reel` - Short-form vertical video (up to 90 seconds)<br><br>**Restrictions:**<br>- Media is REQUIRED for all Instagram posts<br>- Reels: Require exactly 1 video<br>- Stories: Captions not supported, JPEG only for images |
| `collaborators` | `object` | No | Object mapping account IDs to arrays of associated usernames for collaboration. Only allowed for type "post" and "reels" |
| `showOnFeed` | `boolean` | No | Show Reel on profile grid/feed.<br><br>**✅ Applies to:** Reels only<br><br>- `true` - Reel appears on your profile grid<br>- `false` - Reel only appears in Reels tab |
| `publishViaPushNotification` | `boolean` | No | Send Instagram Story via Push  Notification instead of direct posting. Only applicable for Story type. |
| `publisherNote` | `string` | No | Note to the publisher for manual posting guidance. Only used when publishViaPushNotification is true. |

### YoutubePostSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | Video title displayed on YouTube.<br><br>**Max length:** 100 characters<br><br>**Best Practices:**<br>- Include relevant keywords<br>- Be descriptive but concise<br>- Avoid clickbait |
| `privacyLevel` | `string` | No | Video visibility/privacy setting.<br><br>**Available Values:**<br>- `public` - Anyone can search and view<br>- `unlisted` - Only people with the link can view<br>- `private` - Only you can view |
| `type` | `string` | Yes | YouTube video format type.<br><br>**Available Types:**<br>- `video` - Standard YouTube video (landscape, any duration)<br>- `short` - YouTube Shorts (vertical, up to 60 seconds)<br><br>**Required field.** |

### GetPostFormattedSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | MongoDB document ID of the post |
| `source` | `string` | No | source must be one of the following values: composer, recurring, csv |
| `locationId` | `string` | Yes | Location Id |
| `platform` | `string` | No | platform must be one of the following values: google, facebook, instagram, linkedin, twitter, tiktok |
| `thumbnail` | `string` | No | Post-level cover image (thumbnail) URL.<br><br>For posts that contain a video, this is the resolved cover image used for the first video in `media[]`. It is set automatically from the `thumbnail` provided on the first video media item at create/edit time, or auto-generated from the video when one is not supplied. Per-item thumbnails inside `media[]` are not retained on the response — the primary cover image lives on this field. |
| `displayDate` | `string (date-time)` | No | Display date for the post |
| `createdAt` | `string (date-time)` | No | Date when the post was created |
| `updatedAt` | `string (date-time)` | No | Date when the post was last updated |
| `accountId` | `string` | No | Account Id |
| `error` | `string` | Yes | Error |
| `postId` | `string` | No | Platform-specific post identifier |
| `publishedAt` | `string` | No | Date when the post was published |
| `accountIds` | `array<string>` | No | Account Ids |
| `summary` | `string` | No | Content text of the post |
| `media` | `array<PostMediaSchema>` | No | Post Media Data <br> The limitations of media as per the platforms is provided through the reference link in API description |
| `status` | `object` | No | Status must be one of the following values: in_progress, draft, failed, published, scheduled, in_review, notification_sent, deleted |
| `createdBy` | `string` | No | User ID who created the post |
| `type` | `object` | Yes | Post Type must be one of the following values: - post, story, reel |
| `tags` | `array<string>` | No | Tag Ids |
| `ogTagsDetails` | `OgTagsSchema` | No | Og Tags Meta Data |
| `postApprovalDetails` | `FormatedApprovalDetails` | No | Post Approval Details |
| `tiktokPostDetails` | `TiktokPostSchema` | No | Tiktok Post Details |
| `gmbPostDetails` | `GMBPostSchema` | No | GMB Post Details |
| `blueskyPostDetails` | `BlueskyPostSchema` | No | Bluesky Post Details |
| `user` | `PostUserSchema` | No | User |
| `linkedinPostDetails` | `LinkedinPostSchema` | No | Linkedin Post Details |
| `pinterestPostDetails` | `PinterestPostSchema` | No | Pinterest Post Details |
| `facebookPostDetails` | `FacebookPostSchema` | No | Facebook Post Details |
| `instagramPostDetails` | `InstagramPostSchema` | No | Instagram Post Details |
| `youtubePostDetails` | `YoutubePostSchema` | No | Youtube Post Details |
| `mediaOptimization` | `boolean` | No | Pass this parameter to optimize the image media |
| `insights` | `PostInsightsSchema` | No | Aggregated engagement metrics for the published post. Populated asynchronously by the insights sync workers for supported platforms (Facebook, Instagram, LinkedIn, YouTube). Absent on posts that have not been synced yet or on platforms where insights are not supported. |

### PostInsightsSchema

Aggregated engagement metrics for a published post.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `like` | `number` | No | Total number of likes (or platform-equivalent reactions) on the post. |
| `share` | `number` | No | Total number of shares/reposts of the post. |
| `comment` | `number` | No | Total number of comments on the post. |

### PostSuccessfulResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `array<GetPostFormattedSchema>` | No | Post Data |
| `count` | `number` | No | Total count of posts |

### PostSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `PostSuccessfulResponseSchema` | No | Requested Results |

### PostApprovalSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approver` | `string` | No | User ID of the designated approver.<br><br>**Note:** The approver will receive a notification when a post is submitted for review. |
| `requesterNote` | `string` | No | Note from the post creator to the approver explaining the post or requesting specific feedback. |
| `approverNote` | `string` | No | Note from the approver to the post creator with feedback or approval comments. |
| `approvalStatus` | `string` | No | Current approval status of the post.<br><br>**Available Values:**<br>- `pending` - Awaiting approver review<br>- `approved` - Approved and ready for publishing<br>- `rejected` - Rejected by approver (needs revision)<br>- `not_required` - No approval workflow needed |

### CreatePostDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIds` | `array<string>` | Yes | Account IDs for the post. Each account ID identifies a connected social media account.<br><br>**Get IDs from:** [Get Accounts API](./get-account) — use the `id` field from each account.<br><br>**Validations:**<br>- Required for non-draft posts<br>- Must be a non-empty array<br>- All account IDs must be valid connected accounts for the location |
| `summary` | `string` | No | Post content/caption text. Character limits vary by platform.<br><br>**Custom Values & Hashtags:**<br>- You can include custom values/variables in the content (e.g., `{{contact.name}}`)<br>- Hashtags: Use `#hashtag` format. Instagram allows max 30 hashtags.<br>- Mentions: Use platform-specific mention format (see `mentions` field for structured mentions)<br><br>**Validations:**<br>- Instagram/Facebook Story: Caption NOT supported for direct publishing<br>- Facebook, LinkedIn, GMB: Content OR media is required (at least one)<br>- Content is automatically trimmed to platform limits<br><br>**Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations) |
| `media` | `array<PostMediaSchema>` | No | Post Media Data <br> The limitations of media as per the platforms is provided through the reference link in API description |
| `status` | `string` | No | Post status indicating the current state of the post.<br><br>**Available Status Values:**<br>- `draft` - Post saved as draft, not yet ready for publishing<br>- `scheduled` - Post scheduled for future publishing (requires `scheduleDate`)<br>- `in_review` - Post pending approval (requires `scheduleDate` and `postApprovalDetails`)<br>- `published` - Post has been published<br>- `in_progress` - Post is currently being processed<br>- `pending` - Post is awaiting platform processing for Instagram media container creation<br>- `failed` - Post publishing failed<br>- `notification_sent` - Story notification sent (for manual story posting)<br>- `deleted` - Post has been deleted<br><br>**Validations:**<br>- `scheduled` or `in_review` status requires `scheduleDate` to be set<br>- Draft posts skip most validations (accountIds, media requirements) |
| `scheduleDate` | `string` | No | Schedule Date |
| `selectedBestTime` | `string` | No | Selected Best Time slot for scheduling |
| `createdBy` | `string` | No | User ID of the creator who is creating/managing the post. Must be a valid MongoDB ObjectId.<br><br>**Get User IDs from:** [Get User API](../users/get-user) — use the `id` field from the user object.<br><br>**Validation:** Must be a valid MongoDB ObjectId. |
| `followUpComment` | `string` | No | Follow-up comment to be posted immediately after the main post is published.<br><br>**Supported Platforms:** Facebook, Instagram, LinkedIn, YouTube<br><br>**NOT Supported:** TikTok, Google My Business (GMB), Pinterest<br><br>**Use Case:** Great for adding hashtags, additional context, or engagement prompts without cluttering the main post.<br><br>- Follow-up comment is automatically trimmed to platform limits<br><br>**Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations) |
| `ogTagsDetails` | `OgTagsSchema` | No | Og Tags Meta Data |
| `type` | `string` | Yes | Type of post to create. Determines the format and platform requirements.<br><br>**Available Types:**<br>- `post` - Standard feed post (all platforms)<br>- `story` - Temporary 24-hour story (Instagram, Facebook)<br>- `reel` - Short-form video content (Instagram, Facebook, TikTok, YouTube)<br><br>**Customize Per Platform:**<br>You can specify different content/types per platform using `facebookPostDetails.type`, `instagramPostDetails.type`, etc.<br><br>**Validations:**<br>- Reels require exactly 1 video<br>- Stories: Caption not supported for Instagram/Facebook<br>- Facebook Groups do not support Reels |
| `postApprovalDetails` | `PostApprovalSchema` | No | Post Approval Details |
| `scheduleTimeUpdated` | `boolean` | No | Flag indicating if the schedule datetime was manually updated. Used for tracking rescheduled posts. |
| `tags` | `array<string>` | No | Array of Tag IDs to associate with the post for organization and filtering.<br><br>**Get Tag IDs from:** [Get Tags API](./social-planner/get-tags-location-id) — use the `_id` field from each tag.<br><br>**Validation:** All IDs must be valid MongoDB ObjectIds. |
| `categoryId` | `string` | No | Category ID to organize the post. Categories help group related posts.<br><br>**Get Category IDs from:** [Get Categories API](./social-planner/get-categories-location-id) — use the `_id` field.<br><br>**Validation:** Must be a valid MongoDB ObjectId. |
| `applyWatermark` | `boolean` | No | Apply watermark to media in this post.<br><br>**Note:** Watermarks are applied to images only. Videos are not watermarked. |
| `tiktokPostDetails` | `TiktokPostSchema` | No | Tiktok Post Details |
| `gmbPostDetails` | `GMBPostSchema` | No | GMB Post Details |
| `userId` | `string` | Yes | User ID of the user creating/managing the post. Required for OAuth channel posts (non-draft). |
| `linkedinPostDetails` | `LinkedinPostSchema` | No | LinkedIn-specific post configuration.<br><br>**Key Fields:**<br>- `postAsPdf`: Set to `true` to post images as a PDF carousel document<br>- `pdfTitle`: Title for the PDF document (max 100 characters)<br><br>**Limits:**<br>- Max 9 images/videos for regular posts<br>- Max 300 pages for PDF carousel<br>- Max PDF size: 100 MB<br><br>**Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations) |
| `pinterestPostDetails` | `PinterestPostSchema` | No | Pinterest-specific post configuration. Required when posting to Pinterest accounts.<br><br>**Required Fields:**<br>- `boardIds`: Object mapping account OAuth IDs to Pinterest board IDs<br><br>**Optional Fields:**<br>- `title`: Pin title (max 100 characters)<br>- `link`: Destination URL for the pin (max 2048 characters)<br><br>**Get Board IDs:** Use the Pinterest boards API or retrieve from connected account details.<br><br>**Limits:**<br>- Max 1 image/video per pin<br>- Caption max 800 characters<br><br>**Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations) |
| `facebookPostDetails` | `FacebookPostSchema` | No | Facebook-specific post configuration.<br><br>**Key Fields:**<br>- `type`: Post type (`post`, `story`, `reel`)<br><br>**Restrictions:**<br>- Facebook Groups do NOT support Reels<br>- Reels require exactly 1 video<br>- Stories do not support captions<br><br>**Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations) |
| `instagramPostDetails` | `InstagramPostSchema` | No | Instagram-specific post configuration.<br><br>**Key Fields:**<br>- `type`: Post type (`post`, `story`, `reel`)<br>- `collaborators`: Map of account IDs to Instagram usernames for collaboration invites (max 3 per account)<br>- `showOnFeed`: Show reel on profile feed (for reels)<br><br>**Collaborators Structure:**<br>```json<br>{ "accountId": ["username1", "username2"] }<br>```<br>Where `accountId` is from [Get Accounts API](./get-account) and usernames are Instagram handles without @.<br><br>**Restrictions:**<br>- Media is REQUIRED for all Instagram posts<br>- Max 30 hashtags allowed in caption<br>- Stories do not support captions<br>- Collaborators: Posts/Reels only (NOT Stories)<br>- Reels require exactly 1 video<br><br>**Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations) |
| `youtubePostDetails` | `YoutubePostSchema` | No | YouTube-specific post configuration.<br><br>**Key Fields:**<br>- `title`: Video title (max 100 characters)<br>- `type`: Video type (`video` for regular videos, `short` for YouTube Shorts)<br>- `privacyLevel`: Video visibility (`private`, `public`, `unlisted`)<br><br>**Limits:**<br>- Max 1 video per post<br>- Caption (description) max 5,000 characters<br><br>**Requirements:**<br>- Video is REQUIRED for YouTube posts<br>- `type` field is required |

### CreatePostSuccessfulResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `post` | `GetPostFormattedSchema` | No | Post Data |

### CreatePostSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `CreatePostSuccessfulResponseSchema` | No | Requested Results |

### GetPostSuccessfulResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `post` | `GetPostFormattedSchema` | No | Post Data |

### GetPostSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetPostSuccessfulResponseSchema` | No | Requested Results |

### PostCreateRequest

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIds` | `array<string>` | No | Account Ids |
| `summary` | `string` | No | Post Content <br> The limitations of content as per the platforms is provided through the reference link in API description |
| `media` | `array<PostMediaSchema>` | No | Post Media Data <br> The limitations of media as per the platforms is provided through the reference link in API description |
| `status` | `object` | No | Status must be one of the following values: in_progress, draft, failed, published, scheduled, in_review, notification_sent, deleted |
| `scheduleDate` | `string` | No | Schedule Date |
| `createdBy` | `string` | No | User ID of the creator who is creating/managing the post. Must be a valid MongoDB ObjectId.<br><br>**Get User IDs from:** [Get User API](../users/get-user) — use the `id` field from the user object.<br><br>**Validation:** Must be a valid MongoDB ObjectId. |
| `followUpComment` | `string` | No | Follow-up comment to be posted immediately after the main post is published.<br><br>**Supported Platforms:** Facebook, Instagram, LinkedIn, YouTube<br><br>**NOT Supported:** TikTok, Google My Business (GMB), Pinterest<br><br>**Use Case:** Great for adding hashtags, additional context, or engagement prompts without cluttering the main post.<br><br>- Follow-up comment is automatically trimmed to platform limits<br><br>**Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations) |
| `ogTagsDetails` | `OgTagsSchema` | No | Og Tags Meta Data |
| `type` | `object` | Yes | Post Type must be one of the following values: - post, story, reel |
| `postApprovalDetails` | `PostApprovalSchema` | No | Post Approval Details |
| `scheduleTimeUpdated` | `boolean` | No | if schedule datetime is updated |
| `tags` | `array<string>` | No | Array of Tag Value |
| `categoryId` | `string` | No | Category Id |
| `tiktokPostDetails` | `TiktokPostSchema` | No | Tiktok Post Details |
| `gmbPostDetails` | `GMBPostSchema` | No | GMB Post Details |
| `userId` | `string` | No | User ID |

### UpdatePostSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |

### DeletePostSuccessfulResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `postId` | `string` | No | Platform-specific post identifier |

### DeletePostSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `DeletePostSuccessfulResponseSchema` | No | Requested Results |

### GetAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier for the connected account |
| `oauthId` | `string` | No | OAuth provider account identifier |
| `profileId` | `string` | No | Profile identifier from the social media platform |
| `name` | `string` | No | Display name of the account |
| `platform` | `string` | No | platform must be one of the following values: google, facebook, instagram, linkedin, tiktok |
| `type` | `string` | No | Type of account (e.g., location, page, profile) |
| `expire` | `string` | No | Token expiration date and time |
| `isExpired` | `boolean` | No | Indicates if the account token has expired |
| `meta` | `object` | No | Additional metadata for the account |

### GetGroupSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Group Id |
| `name` | `string` | Yes | name of group |
| `accountIds` | `array<string>` | Yes | Array of account IDs belonging to this group |

### AccountsListResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts` | `array<GetAccountSchema>` | No | Array of connected social media accounts |
| `groups` | `array<GetGroupSchema>` | No | Array of account groups |

### AccountsListResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `AccountsListResponseSchema` | No | Requested Results |

### DeleteAccountResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | No | Location Id |
| `id` | `string` | No | Id |

### LocationAndAccountDeleteResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `DeleteAccountResponseSchema` | No | Requested Results |

### FacebookPageSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Facebook page identifier |
| `name` | `string` | No | Name of the Facebook page |
| `avatar` | `string` | No | Avatar or profile picture URL of the page |
| `isOwned` | `boolean` | No | Indicates if the user owns this page |
| `isConnected` | `boolean` | No | Indicates if the page is currently connected |

### GetFacebookAccountsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pages` | `array<FacebookPageSchema>` | No | Facebook Pages Details |

### GetFacebookAccountsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetFacebookAccountsSchema` | No | Requested Results |

### AttachFBAccountDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Type of Facebook account (must be page) |
| `originId` | `string` | Yes | Original Facebook platform identifier |
| `name` | `string` | Yes | Name of the Facebook page or account |
| `avatar` | `string` | Yes | Avatar or profile picture URL |

### SocialMediaFacebookAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | MongoDB document ID of the social media account |
| `oAuthId` | `string` | No | OAuth provider account identifier |
| `oldId` | `string` | No | Legacy account identifier for backward compatibility |
| `locationId` | `string` | No | Location ID associated with this account |
| `originId` | `string` | No | Original platform-specific account identifier |
| `platform` | `object` | No | Social media platform name |
| `type` | `object` | No | type value must be page |
| `name` | `string` | No | Display name of the account |
| `avatar` | `string` | No | Avatar or profile picture URL |
| `meta` | `object` | No | Additional metadata for the account |
| `active` | `boolean` | No | Indicates if the account is currently active |
| `deleted` | `boolean` | No | Indicates if the account has been deleted |
| `createdAt` | `string (date-time)` | No | created date |
| `updatedAt` | `string (date-time)` | No | updated date |

### SocialMediaFBAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `SocialMediaFacebookAccountSchema` | No | Requested Results |

### InstagramAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Instagram account identifier |
| `name` | `string` | No | Display name of the Instagram account |
| `avatar` | `string` | No | Avatar or profile picture URL |
| `pageId` | `string` | No | Facebook page ID associated with the Instagram account |
| `isConnected` | `boolean` | No | Indicates if the account is currently connected |

### GetInstagramAccountsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts` | `array<InstagramAccountSchema>` | No | Instagram Account Details |

### GetInstagramAccountsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetInstagramAccountsSchema` | No | Requested Results |

### AttachIGAccountDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `originId` | `string` | No | Original platform-specific account identifier |
| `name` | `string` | No | Display name of the account |
| `avatar` | `string` | No | Avatar or profile picture URL |
| `pageId` | `string` | Yes | Facebook page ID associated with the Instagram account |

### SocialMediaInstagramAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | MongoDB document ID of the social media account |
| `oAuthId` | `string` | No | OAuth provider account identifier |
| `oldId` | `string` | No | Legacy account identifier for backward compatibility |
| `locationId` | `string` | No | Location ID associated with this account |
| `originId` | `string` | No | Original platform-specific account identifier |
| `platform` | `object` | No | Social media platform name |
| `type` | `object` | No | Type of account (e.g., location, page, profile) |
| `name` | `string` | No | Display name of the account |
| `avatar` | `string` | No | Avatar or profile picture URL |
| `meta` | `object` | No | Additional metadata for the account |
| `active` | `boolean` | No | Indicates if the account is currently active |
| `deleted` | `boolean` | No | Indicates if the account has been deleted |
| `createdAt` | `string (date-time)` | No | created date |
| `updatedAt` | `string (date-time)` | No | updated date |

### SocialMediaInstagramAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `SocialMediaInstagramAccountSchema` | No | Requested Results |

### LinkedInPageSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Page ID |
| `name` | `string` | No | LinkedIn Page Name |
| `avatar` | `string` | No | Profile Avatar url |
| `urn` | `string` | No | URN |
| `isConnected` | `boolean` | No | is connected to app |

### LinkedInProfileSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Id |
| `name` | `string` | No | Name of profile |
| `avatar` | `string` | No | Profile avatar |
| `urn` | `string` | No | URN |
| `isConnected` | `boolean` | No | is connected to app |

### GetLinkedInAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pages` | `array<LinkedInPageSchema>` | No | LinkedIn Pages |
| `profile` | `array<LinkedInProfileSchema>` | No | LinkedIn Profile Details |

### GetLinkedInAccountsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetLinkedInAccountSchema` | No | Requested Results |

### AttachLinkedinAccountDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Type of LinkedIn account (must be one of: page, profile) |
| `originId` | `string` | Yes | Original LinkedIn platform identifier |
| `name` | `string` | Yes | Name of the LinkedIn page or profile |
| `avatar` | `string` | Yes | Avatar or profile picture URL |
| `urn` | `string` | Yes | LinkedIn URN (Uniform Resource Name) identifier |

### SocialMediaLinkedInAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | MongoDB document ID of the social media account |
| `oAuthId` | `string` | No | OAuth provider account identifier |
| `oldId` | `string` | No | Legacy account identifier for backward compatibility |
| `locationId` | `string` | No | Location ID associated with this account |
| `originId` | `string` | No | Original platform-specific account identifier |
| `platform` | `object` | No | Social media platform name |
| `type` | `object` | No | type must be one of the following values: page, profile |
| `name` | `string` | No | Display name of the account |
| `avatar` | `string` | No | Avatar or profile picture URL |
| `meta` | `object` | No | Additional metadata for the account |
| `active` | `boolean` | No | Indicates if the account is currently active |
| `deleted` | `boolean` | No | Indicates if the account has been deleted |
| `createdAt` | `string (date-time)` | No | created date |
| `updatedAt` | `string (date-time)` | No | updated date |

### SocialMediaLinkedInAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `SocialMediaLinkedInAccountSchema` | No | Requested Results |

### TwitterProfileSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | ID of profile |
| `name` | `string` | No | Name of profile |
| `username` | `string` | No | Username of profile |
| `avatar` | `string` | No | Avatar of profile |
| `protected` | `boolean` | No | Is protected |
| `verified` | `boolean` | No | Is verified |
| `isConnected` | `boolean` | No | Is connected |

### GetTwitterAccountsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `profile` | `array<TwitterProfileSchema>` | No | Twitter Profile Details |

### GetTwitterAccountsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetTwitterAccountsSchema` | No | Requested Results |

### AttachTwitterAccountDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `originId` | `string` | No | Original Twitter platform identifier |
| `name` | `string` | No | Name of the Twitter account |
| `username` | `string` | No | Username or handle of the Twitter account |
| `avatar` | `string` | No | Avatar or profile picture URL |
| `protected` | `boolean` | No | Indicates if the Twitter account is protected (private) |
| `verified` | `boolean` | No | Indicates if the Twitter account is verified |
| `companyId` | `string` | No | Company ID |

### SocialMediaTwitterAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | MongoDB document ID of the social media account |
| `oAuthId` | `string` | No | OAuth provider account identifier |
| `oldId` | `string` | No | Legacy account identifier for backward compatibility |
| `locationId` | `string` | No | Location ID associated with this account |
| `originId` | `string` | No | Original platform-specific account identifier |
| `platform` | `object` | No | Social media platform name |
| `type` | `object` | No | Type of account (e.g., location, page, profile) |
| `name` | `string` | No | Display name of the account |
| `avatar` | `string` | No | Avatar or profile picture URL |
| `meta` | `object` | No | Additional metadata for the account |
| `active` | `boolean` | No | Indicates if the account is currently active |
| `deleted` | `boolean` | No | Indicates if the account has been deleted |
| `createdAt` | `string (date-time)` | No | created date |
| `updatedAt` | `string (date-time)` | No | updated date |

### SocialMediaTwitterAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `SocialMediaTwitterAccountSchema` | No | Requested Results |

### UploadCSVDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string (binary)` | No | — |

### UploadFileResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filePath` | `string` | No | File path of uploaded CSV |
| `rowsCount` | `number` | No | Number of rows in the CSV |
| `fileName` | `string` | No | Name of the uploaded file |
| `fileSize` | `number` | No | Size of the file in bytes |
| `csvFileType` | `string` | No | CSV file type |

### UploadFileResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `UploadFileResponseSchema` | No | Requested Results |

### SetAccountsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIds` | `array<string>` | Yes | Account Ids |
| `filePath` | `string` | Yes | File path |
| `rowsCount` | `number` | Yes | Entries Count. rowsCount must be between 1 and number of posts in CSV |
| `fileName` | `string` | Yes | Name of file |
| `approver` | `string` | No | Approver User Id |
| `userId` | `string` | Yes | User ID |
| `csvFileType` | `string` | No | CSV file type - determines the format of the CSV file being imported |

### SetAccountsResultSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csvId` | `string` | Yes | CSV Id |

### SetAccountsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `SetAccountsResultSchema` | No | Requested Results |

### SetAccountsUnprocessableDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `number` | Yes | HTTP Status |
| `options` | `object` | No | Options |
| `message` | `array<string>` | Yes | Validation error messages |
| `name` | `string` | Yes | Exception name |
| `error` | `string` | Yes | Error type |
| `statusCode` | `number` | Yes | HTTP Status Code |
| `traceId` | `string` | No | Trace ID for debugging |

### CSVFileRequiredBadRequestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `number` | Yes | HTTP Status |
| `options` | `object` | No | Options |
| `message` | `string` | Yes | Error message |
| `name` | `string` | Yes | Exception name |
| `error` | `string` | Yes | Error type |
| `statusCode` | `number` | Yes | HTTP Status Code |
| `traceId` | `string` | No | Trace ID for debugging |

### CSVErrorResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes | Error code for CSV processing errors |
| `message` | `string` | Yes | Error message describing the CSV validation error |
| `fileType` | `string` | No | File type detected |
| `csvFileType` | `string` | No | CSV file type |
| `missingHeaders` | `string` | No | Comma-separated list of missing headers from the file |

### CSVImportSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | CSV Id |
| `locationId` | `string` | No | Location Id |
| `fileName` | `string` | No | File Name |
| `accountIds` | `array<string>` | No | Account Ids |
| `file` | `string` | No | File path |
| `status` | `string` | No | CSV import status |
| `count` | `number` | No | Posts count |
| `createdBy` | `string` | No | Created By Id |
| `traceId` | `string` | No | Trace Id |
| `originId` | `string` | No | Origin Id |
| `approver` | `string` | No | Approver Id |
| `createdAt` | `string (date-time)` | No | Date Created |
| `csvFileType` | `string` | No | CSV file type |
| `mediaOptimization` | `boolean` | No | Media optimization flag |
| `applyWatermark` | `boolean` | No | Apply watermark flag |
| `channel` | `string` | No | Channel |
| `updatedAt` | `string (date-time)` | No | Date Updated |

### GetUploadStatusResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csvs` | `array<CSVImportSchema>` | Yes | CSV Data |
| `count` | `number` | Yes | Total count of CSV records |

### GetUploadStatusResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetUploadStatusResponseSchema` | No | Requested Results |

### OgImageSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | No | Image url |
| `width` | `number` | No | Image width |
| `height` | `number` | No | Image height |
| `type` | `string` | No | Image Type |

### IOgTagsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | No | Tag url |
| `ogDescription` | `string` | No | Tag description |
| `ogImage` | `OgImageSchema` | No | OG Image data |
| `ogTitle` | `string` | No | Tag Title |
| `ogUrl` | `string` | No | Tag Url |
| `ogSiteName` | `string` | No | Site Name |
| `error` | `string` | No | Og Tag Error |

### CSVMediaResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | No | Media Url |
| `type` | `string` | No | Media Type |
| `size` | `number` | No | Media Size |
| `width` | `number` | No | Media Width |
| `height` | `number` | No | Media Height |
| `aspectRatio` | `number` | No | Media Aspect Ratio |
| `duration` | `number` | No | Media Aspect Ratio |
| `format` | `string` | No | Media format |
| `videoCodecName` | `string` | No | Video Codec |
| `frameRate` | `number` | No | Video Frame Rate |
| `audioCodecName` | `string` | No | Audio Codec |
| `audioChannels` | `number` | No | Audio Channel |
| `displayAspectRatio` | `string` | No | Display Aspect Ratio |
| `frames` | `array<string>` | No | List of frames |
| `selectedPoster` | `number` | No | Selected Poster |
| `error` | `string` | No | Error |
| `instagramError` | `string` | No | Instagram media error. It can be one of the following errors: imageSize, imageType, videoType, videoDuration, videoSize, videoAspectRatio, videoWidthHeight, audioCodec, audioCodecChannels, videoCodec, videoFrameRate |
| `gmbError` | `string` | No | GMB media error. It can be one of the following errors: imageSize, imageDimension, imageType |
| `facebookError` | `string` | No | Facebook media error. It can be one of the following errors: imageSize, imageType, videoDuration, videoSize |
| `linkedinError` | `string` | No | LinkedIn media error. It can be one of the following errors: imageSize, imageType, videoType, videoDuration, videoSize |
| `twitterError` | `string` | No | Twitter media error. It can be one of the following errors: imageSize, videoType, videoDuration, videoSize |
| `tiktokError` | `string` | No | Tiktok media error. It can be one of the following errors: videoType, videoDuration, videoSize, videoWidthHeight, videoCodec, videoFrameRate |
| `tiktokBusinessError` | `string` | No | Tikok Business media error. It can be one of the following errors: videoType, videoDuration, videoSize, videoWidthHeight, videoCodec, videoFrameRate |
| `invalidError` | `string` | No | Media error. It can be one of the following values: imageSize, imageWidth |

### CSVPostSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIds` | `array<string>` | No | Account Ids |
| `link` | `IOgTagsSchema` | No | OG Tag |
| `medias` | `array<CSVMediaResponseSchema>` | No | Post Media List |
| `scheduleDate` | `string` | No | Schedule date for the post in ISO format |
| `summary` | `string` | No | Post content/summary |
| `followUpComment` | `string` | No | Follow-up comment to be posted immediately after the main post is published.<br><br>**Supported Platforms:** Facebook, Instagram, LinkedIn, YouTube<br><br>**NOT Supported:** TikTok, Google My Business (GMB), Pinterest<br><br>**Use Case:** Great for adding hashtags, additional context, or engagement prompts without cluttering the main post.<br><br>- Follow-up comment is automatically trimmed to platform limits<br><br>**Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations) |
| `type` | `string` | No | Post type - post, story, or reel |
| `tiktokPostDetails` | `TiktokPostSchema` | No | Tiktok Post Details |
| `gmbPostDetails` | `GMBPostSchema` | No | GMB Post Details |
| `errorMessage` | `string` | No | Error Description |
| `csvFileType` | `string` | No | CSV file type |
| `mediaOptimization` | `boolean` | No | Media optimization flag |
| `applyWatermark` | `boolean` | No | Apply watermark flag |
| `status` | `string` | No | Post status |
| `updatedAt` | `string (date-time)` | No | Date Updated |

### GetCsvPostResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csv` | `CSVImportSchema` | No | CSV Data |
| `count` | `number` | No | Total count of posts in CSV |
| `posts` | `array<CSVPostSchema>` | No | CSV Posts |

### GetCsvPostResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetCsvPostResponseSchema` | No | Requested Results |

### CSVDefaultDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `string` | Yes | User ID |

### CsvPostStatusResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |

### CsvResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | No | Location Id |
| `fileName` | `string` | No | Name of the CSV file |
| `accountIds` | `array<string>` | No | Account Ids |
| `file` | `string` | No | File path of the CSV |
| `status` | `string` | No | CSV import status |
| `count` | `number` | No | Number of posts in the CSV |
| `createdBy` | `string` | No | User Id who created the CSV import |
| `traceId` | `string` | No | Trace Id for debugging |
| `originId` | `string` | No | Origin Id for tracking source |
| `approver` | `string` | No | Approver User Id |
| `csvFileType` | `string` | No | CSV file type |
| `mediaOptimization` | `boolean` | No | Media optimization flag |
| `applyWatermark` | `boolean` | No | Apply watermark flag |
| `updatedAt` | `string (date-time)` | No | Date Updated |

### CSVResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csv` | `CsvResponse` | No | CSV Data |

### DeleteCsvResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `CSVResponseSchema` | No | Requested Results |

### DeletePostCsvSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | CSV Id |
| `csvFileType` | `string` | No | CSV file type |
| `mediaOptimization` | `boolean` | No | Media optimization flag |
| `applyWatermark` | `boolean` | No | Apply watermark flag |
| `status` | `string` | No | CSV import status |
| `updatedAt` | `string (date-time)` | No | Date Updated |

### DeletePostResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `postId` | `string` | Yes | Post Id |
| `csv` | `DeletePostCsvSchema` | No | CSV Data |

### DeletePostResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `DeletePostResponseSchema` | No | Requested Results |

### TiktokProfileSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Id |
| `name` | `string` | No | Name of account |
| `username` | `string` | No | Username of account |
| `avatar` | `string` | No | Avatar of profile account |
| `verified` | `boolean` | No | Is verified |
| `isConnected` | `boolean` | No | Is connected |
| `type` | `object` | No | Tiktok Account Type must be one of the following values: business, profile |

### GetTiktokAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `profile` | `array<TiktokProfileSchema>` | No | Tiktok Business Account |

### GetTiktokAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetTiktokAccountSchema` | No | Requested Results |

### AttachTiktokAccountDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Type of TikTok account |
| `originId` | `string` | Yes | Original platform-specific account identifier |
| `name` | `string` | Yes | Display name of the account |
| `avatar` | `string` | Yes | Avatar or profile picture URL |
| `verified` | `boolean` | No | Indicates if the TikTok account is verified |
| `username` | `string` | No | Username or handle of the TikTok account |

### SocialMediaTiktokAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | MongoDB document ID of the social media account |
| `oAuthId` | `string` | No | OAuth provider account identifier |
| `oldId` | `string` | No | Legacy account identifier for backward compatibility |
| `locationId` | `string` | No | Location ID associated with this account |
| `originId` | `string` | No | Original platform-specific account identifier |
| `platform` | `object` | No | Social media platform name |
| `type` | `object` | No | type must be one of the following values: profile, business |
| `name` | `string` | No | Display name of the account |
| `avatar` | `string` | No | Avatar or profile picture URL |
| `meta` | `object` | No | Additional metadata for the account |
| `active` | `boolean` | No | Indicates if the account is currently active |
| `deleted` | `boolean` | No | Indicates if the account has been deleted |
| `createdAt` | `string (date-time)` | No | created date |
| `updatedAt` | `string (date-time)` | No | updated date |

### SocialMediaTiktokAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `SocialMediaTiktokAccountSchema` | No | Requested Results |

### TikTokOAuthAccountSchema

Type: `BaseOAuthAccountSchema + object`

### GetTiktokBusinessAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `profile` | `array<TiktokProfileSchema>` | No | Tiktok Profile |

### GetTiktokBusinessAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetTiktokBusinessAccountSchema` | No | Requested Results |

### YouTubeOAuthAccountSchema

Type: `BaseOAuthAccountSchema + object`

### YoutubeProfileSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Id |
| `name` | `string` | No | Name of account |
| `username` | `string` | No | Username of account |
| `avatar` | `string` | No | Avatar of profile account |
| `verified` | `boolean` | No | Is verified |
| `isConnected` | `boolean` | No | Is connected |
| `type` | `string` | No | Youtube Account Type |

### GetYoutubeAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `profile` | `array<YoutubeProfileSchema>` | No | Youtube Profile |

### GetYouTubeAccountsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetYoutubeAccountSchema` | No | Requested Results |

### AttachYoutubeAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Account type |
| `originId` | `string` | Yes | Origin ID |
| `name` | `string` | Yes | Name |
| `avatar` | `string` | Yes | Avatar URL |
| `verified` | `boolean` | No | Verification status |
| `username` | `string` | No | Username |

### PinterestOAuthAccountSchema

Type: `BaseOAuthAccountSchema + object`

### SocialMediaThreadsAccountSchema

Type: `BaseOAuthAccountSchema + object`

### PinterestProfileSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Id |
| `name` | `string` | No | Name of account |
| `username` | `string` | No | Username of account |
| `avatar` | `string` | No | Avatar of profile account |
| `isConnected` | `boolean` | No | Is connected |
| `type` | `string` | No | Pinterest Account Type |
| `websiteUrl` | `string` | No | Pinterest Account website Url |

### GetPinterestAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `profile` | `array<PinterestProfileSchema>` | No | Pinterest Profile |

### GetPinterestAccountsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetPinterestAccountSchema` | No | Requested Results |

### AttachPinterestAccountDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `originId` | `string` | Yes | Origin ID |
| `name` | `string` | No | Name |
| `avatar` | `string` | No | Avatar URL |
| `verified` | `boolean` | No | Verification status |
| `username` | `string` | No | Username |
| `websiteUrl` | `string` | No | Website URL |
| `companyId` | `string` | No | Company ID |
| `type` | `string` | No | Account type must be one of the following values: profile |
| `originAccountType` | `string` | No | Origin account type |

### AttachThreadsAccountDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Account type |
| `originId` | `string` | Yes | Origin ID |
| `name` | `string` | Yes | Account name |
| `avatar` | `string` | Yes | Avatar URL |

### SocialMediaTiktokBusinessAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `TikTokOAuthAccountSchema` | No | Requested Results |

### SocialMediaYouTubeAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `YouTubeOAuthAccountSchema` | No | Requested Results |

### SocialMediaPinterestAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `PinterestOAuthAccountSchema` | No | Requested Results |

### SocialMediaThreadsAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `SocialMediaThreadsAccountSchema` | No | Requested Results |

### CategorySchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Category Name |
| `primaryColor` | `string` | No | Color For Category |
| `secondaryColor` | `string` | No | Secondary Color |
| `locationId` | `string` | No | Location ID |
| `_id` | `string` | No | ID |
| `createdBy` | `string` | No | Created By User |
| `deleted` | `boolean` | Yes | Deleted Value |
| `createdAt` | `string (date-time)` | No | — |
| `updatedAt` | `string (date-time)` | No | — |

### GetByLocationIdResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | Count |
| `categories` | `array<CategorySchema>` | Yes | Meta Data |

### GetByLocationIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetByLocationIdResponseSchema` | No | Requested Results |

### GetByIdResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Category Name |
| `primaryColor` | `string` | No | Color For Category |
| `secondaryColor` | `string` | No | Secondary Color |
| `locationId` | `string` | No | Location ID |
| `_id` | `string` | No | ID |
| `createdBy` | `string` | No | Created By User |
| `deleted` | `boolean` | Yes | Deleted Value |
| `message` | `string` | No | Message |
| `createdAt` | `string (date-time)` | No | — |
| `updatedAt` | `string (date-time)` | No | — |

### GetCategorySchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `GetByIdResponseSchema` | No | Category Schema |

### GetByIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetCategorySchema` | No | Requested Results |

### SocialMediaTagSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tag` | `string` | No | Tag Name |
| `locationId` | `string` | No | Location Id |
| `_id` | `string` | No | MongoDB document ID |
| `createdBy` | `string` | No | Created By User Id |
| `deleted` | `boolean` | No | Deleted boolean value |
| `createdAt` | `string (date-time)` | No | Date when the record was created |
| `updatedAt` | `string (date-time)` | No | Date when the record was last updated |

### GetTagsByLocationIdResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `array<SocialMediaTagSchema>` | No | Tags Data |
| `count` | `number` | No | Count |

### GetTagsByLocationIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetTagsByLocationIdResponseSchema` | No | Requested Results |

### UpdateTagDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tagIds` | `array<string>` | Yes | Array of Tag Ids |

### GetTagsByIdResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `array<SocialMediaTagSchema>` | Yes | Social Media Tag Data |
| `count` | `number` | No | Count |

### GetTagsByIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `GetTagsByIdResponseSchema` | No | Requested Results |

### DeletePostsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `postIds` | `array<string>` | No | Requested Results |

### BulkDeletePostSuccessfulResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deletedCount` | `number` | No | Number of posts successfully deleted |

### BulkDeleteResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `object` | Yes | Message and deleted count |

### AvailableCategoryQueueDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queueId` | `string` | No | Queue ID |
| `prioritizeNewContent` | `boolean` | No | Prioritize new content over older content |
| `enableFuturePosts` | `boolean` | No | Enable posting future content |

### AvailableCategoryDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deleted` | `boolean` | No | Indicates if deleted |
| `_id` | `string` | No | Category ID |
| `name` | `string` | No | Category name |
| `locationId` | `string` | No | Location ID |
| `primaryColor` | `string` | No | Primary color (hex) |
| `secondaryColor` | `string` | No | Secondary color (hex) |
| `createdBy` | `string` | No | Creator user ID |
| `createdAt` | `string` | No | Creation timestamp |
| `updatedAt` | `string` | No | Last update timestamp |
| `publishedPostsCount` | `number` | No | Published posts count |
| `status` | `string` | No | Status: available (no queue), in_queue (active/paused), or draft |
| `queueDetails` | `AvailableCategoryQueueDetailsDTO` | No | Queue details (present when in_queue or draft) |

### MetaDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `string` | No | Total count of items |

### FetchAvailableCategoriesResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | — |
| `categories` | `array<AvailableCategoryDTO>` | No | List of categories with queue status |
| `meta` | `MetaDTO` | No | — |

### WrappedFetchAvailableCategoriesResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `FetchAvailableCategoriesResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### TimeSlotDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dayOfWeek` | `number` | Yes | Day of the week (0-6) |
| `time` | `string` | Yes | Time in HH:mm format |

### CreateCategoryQueueDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `categoryId` | `string` | Yes | Category ID |
| `timeSlots` | `array<TimeSlotDTO>` | Yes | — |
| `enableFuturePosts` | `boolean` | No | Enable Future Posts. Defaults to false. |
| `prioritizeNewContent` | `boolean` | No | Prioritize New Content. Defaults to false. |
| `userId` | `string` | Yes | User id |

### CreatedTimeSlotDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | Time slot ID |
| `dayOfWeek` | `number` | No | Day of the week (0=Sunday, 1=Monday, ...) |
| `time` | `string` | No | Time of the day (HH:mm format) |

### CreatedCategoryQueueDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | Queue ID |
| `locationId` | `string` | No | Location ID |
| `categoryId` | `string` | No | Category ID |
| `timeSlots` | `array<CreatedTimeSlotDTO>` | No | Time slots for scheduling posts |
| `enableFuturePosts` | `boolean` | No | Enable posting future content |
| `prioritizeNewContent` | `boolean` | No | Prioritize new content over older content |
| `status` | `string` | No | Status of the queue. Always "draft" for a new queue. |
| `startDate` | `string (date-time)` | No | Start date of the queue |
| `skipDateTime` | `array<string (date-time)>` | No | Dates/times to skip posting. Always empty for a new queue. |
| `totalPosts` | `number` | No | Total number of posts in the queue. Always 0 for a new queue. |
| `lastScheduledTime` | `string (date-time)` | No | Timestamp of the last scheduled post. Always null for a new queue. |
| `createdBy` | `string` | No | ID of the user who created the queue |
| `createdAt` | `string (date-time)` | No | Creation timestamp |
| `updatedAt` | `string (date-time)` | No | Last update timestamp |

### CreateCategoryQueueResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. |
| `queue` | `CreatedCategoryQueueDTO` | No | The newly created queue. |

### WrappedCreateCategoryQueueResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `CreateCategoryQueueResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### FetchCategoryQueuesDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `skip` | `number` | No | Number of items to skip |
| `limit` | `number` | No | Maximum number of items to return |

### CategoryInfoDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | Category ID |
| `name` | `string` | No | Name of the category |
| `primaryColor` | `string` | No | Primary color of the category |
| `secondaryColor` | `string` | No | Secondary color of the category |
| `deleted` | `boolean` | No | Indicates if the category is deleted |
| `locationId` | `string` | No | Location ID |
| `createdBy` | `string` | No | ID of the user who created the category |
| `createdAt` | `string` | No | Creation timestamp |
| `updatedAt` | `string` | No | Last update timestamp |

### CategoryQueueWithCategoryDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | Queue ID |
| `locationId` | `string` | No | Location ID |
| `categoryId` | `string` | No | Category ID |
| `timeSlots` | `array<TimeSlotDTO>` | No | Time slots for scheduling posts |
| `enableFuturePosts` | `boolean` | No | Enable posting future content |
| `prioritizeNewContent` | `boolean` | No | Prioritize new content over older content |
| `currentOrder` | `number` | No | Current order number in the queue |
| `status` | `string` | No | Status of the queue. Possible values: active, paused, draft. |
| `startDate` | `string (date-time)` | No | Start date of the queue |
| `skipDateTime` | `array<string (date-time)>` | No | Dates/times to skip posting |
| `currentPostId` | `string` | No | ID of the currently scheduled post |
| `totalPosts` | `number` | No | Total number of posts in the queue |
| `lastScheduledTime` | `string (date-time)` | No | Timestamp of the last scheduled post |
| `createdBy` | `string` | No | ID of the user who created the queue |
| `createdAt` | `string (date-time)` | No | Creation timestamp |
| `updatedAt` | `string (date-time)` | No | Last update timestamp |
| `category` | `CategoryInfoDTO` | No | The category associated with the queue. |

### FetchCategoryQueuesResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | — |
| `queues` | `array<CategoryQueueWithCategoryDTO>` | No | — |
| `meta` | `MetaDTO` | No | — |

### WrappedFetchCategoryQueuesResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `FetchCategoryQueuesResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### FetchQueueByIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. |
| `queue` | `CategoryQueueWithCategoryDTO` | No | The fetched queue along with its category metadata. |

### WrappedFetchQueueByIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `FetchQueueByIdResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### FetchQueueItemsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `sessionId` | `string` | No | Edit session ID |
| `skip` | `number` | No | Number of items to skip |
| `limit` | `number` | No | Maximum number of items to return |
| `errorFilter` | `boolean` | No | To return only queue items with errors |
| `itemId` | `string` | No | Item ID to center the response around. When provided, the response will position this item in the center with items above and below based on limit. The skip parameter is ignored when itemId is provided. |

### OgTagsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `metaLink` | `object` | No | The canonical URL of the content. |
| `metaImage` | `object` | No | URL of the content's primary image. |
| `ogTitle` | `object` | No | The title of the content. |

### VariationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | The ID of the variation. |
| `content` | `string` | No | The text content of the variation. |
| `mentions` | `array<object>` | No | Platform-specific mentions within the content (e.g., @username references). |
| `ogTags` | `OgTagsDTO` | No | Open Graph tags for link previews. |

### QueueItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | The unique identifier of the queue item. |
| `order` | `number` | No | The order of the item in the queue. |
| `variations` | `array<VariationDTO>` | No | A list of content variations for the post. |
| `primaryImage` | `string` | No | The primary image URL for the post. |
| `postId` | `string` | No | The ID of the original post, if any. |
| `post` | `GetPostFormattedSchema` | No | The formatted post data. |
| `errors` | `array<string>` | No | List of errors associated with the queue item. Possible values: INVALID_USER_ID, PIXABAY_MEDIA. |
| `scheduledDateTime` | `string (date-time)` | No | The calculated date/time when this item is scheduled to be posted |
| `scheduledVariationIndex` | `number` | No | The variation index that will be used when this item is posted |
| `isSkipped` | `boolean` | No | Indicates if this time slot is skipped and the post will not be published at this time |

### FetchQueueItemsMetaDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `string` | No | Total count of items |
| `skip` | `number` | No | Number of items skipped (offset from start) |
| `limit` | `number` | No | Maximum number of items returned |

### FetchQueueItemsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | — |
| `items` | `array<QueueItemDTO>` | No | — |
| `meta` | `FetchQueueItemsMetaDTO` | No | — |

### WrappedFetchQueueItemsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `FetchQueueItemsResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### StartEditSessionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |

### StartEditSessionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. |
| `sessionId` | `string` | No | The ID of the edit session. |
| `itemCount` | `number` | No | Number of items staged for editing. |

### WrappedStartEditSessionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `StartEditSessionResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### SaveEditSessionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `sessionId` | `string` | Yes | Edit session ID |
| `keepInDraft` | `boolean` | No | If true, keeps the queue in DRAFT state after saving instead of automatically activating it. Only applicable when the queue is currently in DRAFT status. |

### UpdatedSlotInfoDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `string` | No | The ID of the queue item |
| `scheduledDateTime` | `string (date-time)` | No | The updated scheduled date/time for this item |
| `isSkipped` | `boolean` | No | Indicates if this time slot is skipped |

### SaveEditSessionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. |
| `updatedSlots` | `array<UpdatedSlotInfoDTO>` | No | Updated slot information for all items after saving changes |
| `totalPostsChanged` | `number` | No | Number of unique posts that had their slots changed |

### WrappedSaveEditSessionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `SaveEditSessionResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### DiscardEditSessionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `sessionId` | `string` | Yes | Edit session ID |
| `keepInDraft` | `boolean` | No | If true, keeps the queue in DRAFT state after saving instead of automatically activating it. Only applicable when the queue is currently in DRAFT status. |

### DiscardEditSessionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. |

### WrappedDiscardEditSessionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `DiscardEditSessionResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### EditSessionCalendarDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `sessionId` | `string` | Yes | Edit session ID |
| `startDate` | `string` | Yes | Start Date in ISO format |
| `endDate` | `string` | Yes | End Date in ISO format |
| `accountIds` | `array<string>` | No | Filter by Account IDs. If not provided or empty, returns all posts. |

### EditSessionScheduledPostDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `scheduledDateTime` | `string (date-time)` | No | The date and time the post is scheduled to be published |
| `post` | `GetPostFormattedSchema` | No | The formatted post data. |
| `queueItemId` | `string` | No | The unique identifier of the queue item. |
| `queueId` | `string` | No | The ID of the queue this post belongs to |
| `order` | `number` | No | The order of the item in the queue. |
| `variations` | `array<VariationDTO>` | No | A list of content variations for the post. |
| `primaryImage` | `string` | No | The primary image URL for the post. |
| `errors` | `array<string>` | No | List of errors associated with the queue item. Possible values: INVALID_USER_ID, PIXABAY_MEDIA. |
| `category` | `CategoryInfoDTO` | No | The category associated with this post |
| `currentVariation` | `number` | No | The index of the current variation being used for this post |
| `timezone` | `string` | No | The timezone in which the post is scheduled |
| `isDraft` | `boolean` | No | Indicates this is a draft item from an edit session |
| `originalItemId` | `string` | No | Original queue item ID if this draft was created from an existing item |

### EditSessionCalendarResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | — |
| `scheduledPosts` | `array<EditSessionScheduledPostDTO>` | No | — |
| `total` | `number` | No | Total number of scheduled posts returned |
| `timezone` | `string` | No | The timezone used for scheduling, e.g., "Asia/Calcutta" |

### WrappedEditSessionCalendarResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `EditSessionCalendarResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### FetchSlotsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | The location ID |
| `sessionId` | `string` | No | Session ID for edit mode. If not provided, calculates slots for live items. |
| `skip` | `number` | No | Number of items to skip |
| `limit` | `number` | No | Number of items to return |

### FetchSlotsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | — |
| `slots` | `array<UpdatedSlotInfoDTO>` | No | Slot information for items in the requested range |
| `total` | `number` | No | Total number of items in the queue |
| `skip` | `number` | No | Number of items skipped |
| `limit` | `number` | No | Number of items returned |
| `timezone` | `string` | No | Timezone used for slot calculations |

### WrappedFetchSlotsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `FetchSlotsResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### UpdateCategoryQueueDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `skipLegacyWatermark` | `boolean` | No | Skip legacy watermark cleanup when rescheduling posts |
| `status` | `object` | No | Status of the Queue |
| `skipDateTime` | `string` | No | Skip Date Time in ISO format |
| `timeSlots` | `array<TimeSlotDTO>` | No | — |
| `enableFuturePosts` | `boolean` | No | Enable posting future content. Automatically Queue any New Posts Created in this Category. |
| `prioritizeNewContent` | `boolean` | No | Prioritize new content over older content. When true, new items added via directToQueue will be placed at the top of the queue. |

### CategoryQueueDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | Queue ID |
| `locationId` | `string` | No | Location ID |
| `categoryId` | `string` | No | Category ID |
| `timeSlots` | `array<TimeSlotDTO>` | No | Time slots for scheduling posts |
| `enableFuturePosts` | `boolean` | No | Enable posting future content |
| `prioritizeNewContent` | `boolean` | No | Prioritize new content over older content |
| `currentOrder` | `number` | No | Current order number in the queue |
| `status` | `string` | No | Status of the queue. Possible values: active, paused, draft. |
| `startDate` | `string (date-time)` | No | Start date of the queue |
| `skipDateTime` | `array<string (date-time)>` | No | Dates/times to skip posting |
| `currentPostId` | `string` | No | ID of the currently scheduled post |
| `totalPosts` | `number` | No | Total number of posts in the queue |
| `lastScheduledTime` | `string (date-time)` | No | Timestamp of the last scheduled post |
| `createdBy` | `string` | No | ID of the user who created the queue |
| `createdAt` | `string (date-time)` | No | Creation timestamp |
| `updatedAt` | `string (date-time)` | No | Last update timestamp |

### UpdateCategoryQueueResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. Examples: "Queue updated successfully.", "Queue paused successfully.", "Queue activated successfully.", "Queue deleted successfully." |
| `queue` | `CategoryQueueDTO` | No | The updated queue. |

### WrappedUpdateCategoryQueueResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `UpdateCategoryQueueResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### GeneralSuccessResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. |
| `updatedSlots` | `array<UpdatedSlotInfoDTO>` | No | Updated slot information for items affected by the operation |
| `totalPostsChanged` | `number` | No | Number of unique posts that had their slots changed |

### WrappedGeneralSuccessResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `GeneralSuccessResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### QueueModifiedPostDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIds` | `array<string>` | No | Account Ids (OAuth only) |
| `summary` | `string` | No | Post Content |
| `media` | `array<PostMediaSchema>` | No | Post Media |
| `status` | `object` | No | Post status indicating the current state of the post.<br><br>**Available Status Values:**<br>- `draft` - Post saved as draft, not yet ready for publishing<br>- `scheduled` - Post scheduled for future publishing (requires `scheduleDate`)<br>- `in_review` - Post pending approval (requires `scheduleDate` and `postApprovalDetails`)<br>- `published` - Post has been published<br>- `in_progress` - Post is currently being processed<br>- `pending` - Post is awaiting platform processing for Instagram media container creation<br>- `failed` - Post publishing failed<br>- `notification_sent` - Story notification sent (for manual story posting)<br>- `deleted` - Post has been deleted<br><br>**Validations:**<br>- `scheduled` or `in_review` status requires `scheduleDate` to be set<br>- Draft posts skip most validations (accountIds, media requirements) |
| `scheduleDate` | `string` | No | Schedule Date |
| `selectedBestTime` | `string` | No | Selected Best Time slot for scheduling |
| `createdBy` | `string` | No | Created By |
| `followUpComment` | `string` | No | Follow-up comment to be posted immediately after the main post is published.<br><br>**Supported Platforms:** Facebook, Instagram, LinkedIn, YouTube<br><br>**NOT Supported:** TikTok, Google My Business (GMB), Pinterest<br><br>**Use Case:** Great for adding hashtags, additional context, or engagement prompts without cluttering the main post.<br><br>- Follow-up comment is automatically trimmed to platform limits<br><br>**Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations) |
| `ogTagsDetails` | `OgTagsSchema` | No | Og Tags Meta Data |
| `type` | `object` | No | Post Type must be one of the following values: - post, story, reel |
| `postApprovalDetails` | `PostApprovalSchema` | No | Post Approval Details |
| `scheduleTimeUpdated` | `boolean` | No | Flag indicating if the schedule datetime was manually updated. Used for tracking rescheduled posts. |
| `tags` | `array<string>` | No | Array of Tag IDs to associate with the post for organization and filtering.<br><br>**Get Tag IDs from:** [Get Tags API](./social-planner/get-tags-location-id) — use the `_id` field from each tag.<br><br>**Validation:** All IDs must be valid MongoDB ObjectIds. |
| `categoryId` | `string` | No | Category ID to organize the post. Categories help group related posts.<br><br>**Get Category IDs from:** [Get Categories API](./social-planner/get-categories-location-id) — use the `_id` field.<br><br>**Validation:** Must be a valid MongoDB ObjectId. |
| `applyWatermark` | `boolean` | No | Apply watermark to media in this post.<br><br>**Note:** Watermarks are applied to images only. Videos are not watermarked. |
| `tiktokPostDetails` | `TiktokPostSchema` | No | Tiktok Post Details |
| `gmbPostDetails` | `GMBPostSchema` | No | GMB Post Details |
| `userId` | `string` | No | User ID |
| `linkedinPostDetails` | `LinkedinPostSchema` | No | Linkedin Post Details |
| `pinterestPostDetails` | `PinterestPostSchema` | No | Pinterest Post Details |
| `facebookPostDetails` | `FacebookPostSchema` | No | Facebook Post Details |
| `instagramPostDetails` | `InstagramPostSchema` | No | Instagram Post Details |
| `youtubePostDetails` | `YoutubePostSchema` | No | Youtube Post Details |
| `locationId` | `string` | No | Location Id |

### OgTagsInputDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `metaLink` | `object` | No | The canonical URL of the content for link preview. |
| `metaImage` | `object` | No | URL of the image to display in link preview. |
| `ogTitle` | `object` | No | Title to display in link preview. |

### VariationInputDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No | The text content of the variation. |
| `mentions` | `array<object>` | No | Platform-specific mentions within the content (e.g., @username references). |
| `ogTags` | `OgTagsInputDTO` | No | Open Graph tags for link previews. |

### UpdateQueueItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `sessionId` | `string` | No | Edit session ID |
| `modifiedPostPayload` | `QueueModifiedPostDTO` | No | Modifications to the original post |
| `newOrder` | `number or string` | No | New order value or position keyword (cyclic-aware). Accepts:<br>- A number: explicit order value calculated by FE as midpoint between adjacent items<br>- "top": place at cyclic top (first to be scheduled next)<br>- "bottom": place at cyclic bottom (last to be scheduled)<br><br>For positions between items, FE calculates: Math.floor((prevItem.order + nextItem.order) / 2) |
| `variations` | `array<VariationInputDTO>` | No | Variations |
| `primaryImage` | `string` | No | Primary media URL (image) |

### GetModifiedPayloadFormattedSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | MongoDB document ID of the post |
| `source` | `string` | No | source must be one of the following values: composer, recurring, csv |
| `locationId` | `string` | Yes | Location Id |
| `displayDate` | `string (date-time)` | No | Display date for the post |
| `createdAt` | `string (date-time)` | No | Date when the post was created |
| `updatedAt` | `string (date-time)` | No | Date when the post was last updated |
| `accountId` | `string` | No | Account Id |
| `error` | `string` | Yes | Error |
| `postId` | `string` | No | Platform-specific post identifier |
| `publishedAt` | `string` | No | Date when the post was published |
| `thumbnail` | `string` | No | Post-level cover image (thumbnail) URL.<br><br>For posts that contain a video, this is the resolved cover image used for the first video in `media[]`. It is set automatically from the `thumbnail` provided on the first video media item at create/edit time, or auto-generated from the video when one is not supplied. Per-item thumbnails inside `media[]` are not retained on the response — the primary cover image lives on this field. |
| `accountIds` | `array<string>` | No | Account Ids |
| `summary` | `string` | No | Content text of the post |
| `media` | `array<PostMediaSchema>` | No | Post Media Data <br> The limitations of media as per the platforms is provided through the reference link in API description |
| `status` | `object` | No | Status must be one of the following values: in_progress, draft, failed, published, scheduled, in_review, notification_sent, deleted |
| `createdBy` | `string` | No | User ID who created the post |
| `type` | `object` | Yes | Post Type must be one of the following values: - post, story, reel |
| `tags` | `array<string>` | No | Tag Ids |
| `ogTagsDetails` | `OgTagsSchema` | No | Og Tags Meta Data |
| `postApprovalDetails` | `FormatedApprovalDetails` | No | Post Approval Details |
| `tiktokPostDetails` | `TiktokPostSchema` | No | Tiktok Post Details |
| `gmbPostDetails` | `GMBPostSchema` | No | GMB Post Details |
| `user` | `PostUserSchema` | No | User |
| `linkedinPostDetails` | `LinkedinPostSchema` | No | Linkedin Post Details |
| `pinterestPostDetails` | `PinterestPostSchema` | No | Pinterest Post Details |
| `facebookPostDetails` | `FacebookPostSchema` | No | Facebook Post Details |
| `instagramPostDetails` | `InstagramPostSchema` | No | Instagram Post Details |
| `youtubePostDetails` | `YoutubePostSchema` | No | Youtube Post Details |
| `mediaOptimization` | `boolean` | No | Pass this parameter to optimize the image media |

### CreatedQueueItemWithVariationsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | The unique identifier of the queue item. |
| `order` | `number` | No | The order of the item in the queue. |
| `variations` | `array<VariationDTO>` | No | A list of content variations for the post. |
| `primaryImage` | `string` | No | The primary image URL for the post. |
| `lastScheduledTime` | `string (date-time)` | No | Timestamp of the last scheduled post. Always null for a new queue. |
| `queueId` | `string` | No | The ID of the queue this post belongs to |
| `postId` | `string` | No | The ID of the original post, if any. |
| `modifiedPostPayload` | `GetModifiedPayloadFormattedSchema` | No | The formatted post data modified from original post. |
| `parentPostId` | `string` | No | The ID of the parent post before splitting to individual social posts. |
| `errors` | `array<string>` | No | List of errors associated with the queue item. Possible values: INVALID_USER_ID, PIXABAY_MEDIA. |
| `currentVariation` | `number` | No | The index of the current variation being used for this post |
| `createdAt` | `string` | No | Creation timestamp |
| `updatedAt` | `string` | No | Last update timestamp |
| `deleted` | `boolean` | No | Indicates if the item is deleted |
| `locationId` | `string` | No | Location ID |

### UpdateQueueItemResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. |
| `queueItem` | `CreatedQueueItemWithVariationsDTO` | No | The updated queue item. |
| `updatedSlots` | `array<UpdatedSlotInfoDTO>` | No | Updated slot information for items affected by reorder operation |
| `totalPostsChanged` | `number` | No | Number of unique posts that had their slots changed |

### WrappedUpdateQueueItemResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `UpdateQueueItemResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### CalendarListDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `startDate` | `string` | Yes | Start Date in ISO format |
| `endDate` | `string` | Yes | End Date in ISO format |
| `categoryIds` | `array<string>` | No | Category Id |
| `accountIds` | `array<string>` | No | Filter by Account IDs. If not provided or empty, returns all posts. |

### ScheduledPostDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `scheduledDateTime` | `string (date-time)` | No | The date and time the post is scheduled to be published |
| `post` | `GetPostFormattedSchema` | No | The formatted post data. |
| `queueItemId` | `string` | No | The unique identifier of the queue item. |
| `queueId` | `string` | No | The ID of the queue this post belongs to |
| `order` | `number` | No | The order of the item in the queue. |
| `variations` | `array<VariationDTO>` | No | A list of content variations for the post. |
| `primaryImage` | `string` | No | The primary image URL for the post. |
| `errors` | `array<string>` | No | List of errors associated with the queue item. Possible values: INVALID_USER_ID, PIXABAY_MEDIA. |
| `category` | `CategoryInfoDTO` | No | The category associated with this post |
| `currentVariation` | `number` | No | The index of the current variation being used for this post |
| `timezone` | `string` | No | The timezone in which the post is scheduled |

### FetchCalendarListResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | — |
| `scheduledPosts` | `array<ScheduledPostDTO>` | No | — |
| `total` | `number` | No | Total number of scheduled posts returned |
| `timezone` | `string` | No | The timezone used for scheduling, e.g., "Asia/Calcutta" |

### WrappedFetchCalendarListResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `FetchCalendarListResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### DeleteActivePostResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. |

### WrappedDeleteActivePostResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `DeleteActivePostResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### ResetQueueItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `sessionId` | `string` | No | Edit session ID |

### QueueItemWithVariationsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | The unique identifier of the queue item. |
| `order` | `number` | No | The order of the item in the queue. |
| `variations` | `array<VariationDTO>` | No | A list of content variations for the post. |
| `primaryImage` | `string` | No | The primary image URL for the post. |
| `postId` | `string` | No | The ID of the original post, if any. |
| `post` | `GetPostFormattedSchema` | No | The formatted post data. |
| `errors` | `array<string>` | No | List of errors associated with the queue item. Possible values: INVALID_USER_ID, PIXABAY_MEDIA. |
| `scheduledDateTime` | `string (date-time)` | No | The calculated date/time when this item is scheduled to be posted |
| `scheduledVariationIndex` | `number` | No | The variation index that will be used when this item is posted |
| `isSkipped` | `boolean` | No | Indicates if this time slot is skipped and the post will not be published at this time |
| `currentVariation` | `number` | No | The index of the current variation being used for this post |

### ResetQueueItemResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. Examples: "Queue item reset successfully", "Dummy queue item deleted successfully". |
| `queueItem` | `QueueItemWithVariationsDTO` | No | The reset queue item, including its current variation. |

### WrappedResetQueueItemResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `ResetQueueItemResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### CloneQueueItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `sessionId` | `string` | Yes | Edit session ID |
| `order` | `number` | Yes | Order for the cloned item (typically between source and next item) |

### CloneQueueItemResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. |
| `queueItem` | `CreatedQueueItemWithVariationsDTO` | No | The cloned queue item |

### WrappedCloneQueueItemResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `CloneQueueItemResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### CreateQueueItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `sessionId` | `string` | No | Edit session ID |
| `modifiedPostPayload` | `QueueModifiedPostDTO` | No | New post details |
| `order` | `number or string` | No | Order for the new item in the queue (cyclic-aware). Accepts:<br>- A number: explicit order value calculated by FE as midpoint between adjacent items<br>- "top": place at cyclic top (first to be scheduled next)<br>- "bottom": place at cyclic bottom (last to be scheduled)<br><br>For positions between items, FE calculates: Math.floor((prevItem.order + nextItem.order) / 2)<br>Defaults to end if not provided. Note: This field is ignored when directToQueue is true -<br>the order will be automatically calculated based on the queue's prioritizeNewContent setting. |
| `variations` | `array<VariationInputDTO>` | No | Variations |
| `primaryImage` | `string` | No | Primary media URL (image) for the post. Falls back to modifiedPostPayload.primaryImage if not set. |
| `directToQueue` | `boolean` | No | When true, creates the queue item directly without requiring an edit session, even for active/paused queues. The order field is ignored and the item position is determined by the queue's prioritizeNewContent setting: if true, the item is added to the top of the queue; if false, it is added to the bottom. |

### CreateQueueItemResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | A message indicating the result of the operation. |
| `queueItem` | `CreatedQueueItemWithVariationsDTO` | No | The newly created queue item |

### WrappedCreateQueueItemResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `statusCode` | `number` | Yes | — |
| `results` | `CreateQueueItemResponseDTO` | Yes | — |
| `traceId` | `string` | No | — |

### CommentsCreateBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `parentId` | `string` | Yes | For top-level comments (`isParentThread: true`): pass the post ID returned by the posts API. For replies (`isParentThread: false`): pass the parent comment ID returned by the list-comments API. In both cases this must be a valid 24-character Highlevel ID — not the native platform ID. |
| `isParentThread` | `boolean` | Yes | Set `true` to create a top-level comment on a post (parentId = post ID). Set `false` to create a reply to an existing comment (parentId = comment ID). |
| `content` | `string` | Yes | Content of the comment. Per-platform max length: Facebook 8000, Instagram 2200, Linkedin 3000, Community 8000, Tiktok 150, Bluesky 300, Youtube 10000, Threads 500. |
| `attachments` | `array<AttachmentDTO>` | No | Attachments for the comment (max 1 image). **Supported on:** Facebook only. **Not supported on:** Instagram, LinkedIn, TikTok, Bluesky, Community — the field is accepted by the API but the attachment will not appear on the comment. (Community processes the field server-side, but external URLs are not rendered due to its bucket restriction.) |
| `mentions` | `array<MentionsDTO>` | No | Mentions for the comment. **Supported on:** Facebook, LinkedIn, Community. **Ignored on:** Instagram, TikTok, Bluesky — the field is accepted but mentions are not rendered on these platforms. |
| `notifyAllGroupMembers` | `boolean` | No | When `true`, all members of the Community group receive a push/in-app notification about this comment — equivalent to an `@everyone` broadcast.<br><br>**Supported on:** Community only. Ignored on all other platforms (the field is accepted but no notification is sent).<br><br>**Independent of the `mentions` array** — you do not need to add an `@everyone` entry to `mentions` for this to take effect. Conversely, putting the literal text `@everyone` in `content` does **not** by itself trigger notifications; only this flag does.<br><br>Defaults to `false` (no broadcast notification). Use `true` only when the comment is genuinely intended for every member of the group — overuse may cause members to mute the group. |

### CommentsCreateResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `CommentItemDTO` | Yes | The created comment |

### CommentsLikeResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |

### DeleteLikeResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |

### CommentsGetListBodyDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fromDate` | `string` | No | Start of the published-date window (ISO 8601). If provided, `toDate` is also required, and `fromDate` must be ≤ `toDate`. Omit both to disable date filtering. |
| `toDate` | `string` | No | End of the published-date window (ISO 8601). If provided, `fromDate` is also required. |
| `originIds` | `array<string>` | Yes | Origin IDs of connected accounts to filter by |
| `sortBy` | `string` | No | Sort by top comments or latest comments |
| `search` | `string` | No | Search |
| `skip` | `number` | No | Pagination offset — number of comments to skip (zero-based). Must be ≥ 0. |
| `limit` | `number` | No | Pagination page size — number of comments to return. Must be between 1 and 100. |
| `parentId` | `string` | No | Parent ID — pass the Highlevel post ID (for replies under a specific post) or the Highlevel comment ID (for replies under a specific comment). Omit to list all top-level comments for the location filtered by `originIds`. Must be a valid 24-character Highlevel ID, not the native platform ID. |

### CommentsGetListResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `CommentsGetListResultsDTO` | Yes | Comments and pagination metadata |

### AttachmentDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | Yes | URL of the attachment |
| `type` | `string` | Yes | Type of the attachment |

### MentionsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Mention name |
| `id` | `string` | Yes | Mention ID |
| `offset` | `number` | Yes | Mention offset |
| `length` | `number` | Yes | Mention length |
| `slug` | `string` | No | Mention slug for community profile link |

### CommentsGetListResultsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `array<CommentItemDTO>` | Yes | List of comments |
| `meta` | `CommentsListMetaDTO` | Yes | Pagination metadata |

### CommentItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Highlevel comment ID |
| `platform` | `string` | Yes | Platform the comment was posted on |
| `platformCommentId` | `string` | No | Native platform comment ID |
| `platformParentId` | `string` | No | Native platform parent ID (the post or comment this is a reply to) |
| `platformPostId` | `string` | No | Native platform post ID |
| `postId` | `string` | Yes | Highlevel post ID |
| `originId` | `string` | Yes | Connected account / page ID on the native platform |
| `isParentThread` | `boolean` | No | True if this comment is a top-level comment on the post; false if it is a reply to another comment |
| `isPost` | `boolean` | Yes | True if this record represents the root post (not a comment) |
| `content` | `string` | No | Comment content. May be empty or missing for attachment-only comments. |
| `attachments` | `array<CommentAttachmentDTO>` | No | Attachments on the comment |
| `author` | `CommentAuthorDTO` | No | Author of the comment. May be partial or missing for some sync paths. |
| `level` | `number` | No | Comment depth (0 = post, 1 = comment, 2 = reply) |
| `likeCount` | `number` | Yes | Number of likes on the comment |
| `reactionCount` | `number` | Yes | Number of reactions on the comment |
| `replyCount` | `number` | Yes | Number of replies to the comment |
| `shareCount` | `number` | Yes | Number of shares of the comment |
| `repostCount` | `number` | Yes | Number of reposts of the comment (platform-specific) |
| `quoteCount` | `number` | Yes | Number of quote posts (platform-specific) |
| `previewLink` | `string` | No | Direct link to view the comment on the native platform |
| `isRead` | `boolean` | Yes | Whether the comment has been read |
| `isDeleted` | `boolean` | Yes | Whether the comment was deleted |
| `isEdited` | `boolean` | Yes | Whether the comment was edited |
| `publishedAt` | `string (date-time)` | No | Time the comment was published on the native platform. May be missing for legacy or webhook-synced records. |
| `createdAt` | `string (date-time)` | No | Time the comment record was created in Highlevel |
| `updatedAt` | `string (date-time)` | No | Time the comment record was last updated in Highlevel |

### CommentsListMetaDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total` | `number` | Yes | Total comments matching the query |
| `totalUnread` | `number` | No | Total unread comments matching the query |
| `skip` | `number` | Yes | Pagination skip |
| `limit` | `number` | Yes | Pagination limit |
| `hasMore` | `boolean` | Yes | True if more pages exist beyond this batch |

### CommentAuthorDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Platform author ID |
| `name` | `string` | No | Author display name |
| `profilePic` | `string` | No | Author profile picture URL |

### CommentAttachmentDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | No | Attachment MIME type or platform-specific type |
| `url` | `string` | No | Attachment URL |
| `thumbnail` | `string` | No | Thumbnail URL |
| `videoUrl` | `string` | No | Video URL (when attachment is a video) |
