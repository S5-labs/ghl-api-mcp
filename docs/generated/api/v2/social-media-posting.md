# Social Media Posting API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/social-media-posting.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Social Media Posting API

## Oauth | Google

### Starts OAuth For Google Account

**Endpoint:** `GET /social-media-posting/oauth/google/start`
**Scope:** `socialplanner/oauth.readonly`
**Token Type:** bearer

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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
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

### Get google business locations

**Endpoint:** `GET /social-media-posting/oauth/{locationId}/google/locations/{accountId}`
**Token Type:** bearer

Get google business locations

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetGoogleLocationResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Set google business locations

**Endpoint:** `POST /social-media-posting/oauth/{locationId}/google/locations/{accountId}`
**Token Type:** bearer

Set google business locations

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AttachGMBLocationDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `SocialMediaGmbAccountResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

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
| application/json | `PostCreateRequest` |

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

Deletes multiple posts based on the provided list of post IDs. 
                  This operation is useful for clearing up large numbers of posts efficiently. 
                  
Note: 
                  
1.The maximum number of posts that can be deleted in a single request is '50'.
                  
2.However, It will only get deleted in Highlevel database but still
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

## Oauth | Facebook

### Starts OAuth For Facebook Account

**Endpoint:** `GET /social-media-posting/oauth/facebook/start`
**Token Type:** bearer

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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Account Location Id |
| `userId` | query | `string` | Yes | User ID |
| `page` | query | `string` | No | Facebook Page |
| `reconnect` | query | `string` | No | Reconnect boolean as string |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful Response | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get facebook pages

**Endpoint:** `GET /social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}`
**Token Type:** bearer

Get facebook pages

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response, runs Facebook OAuth and redirects to application | `GetFacebookAccountsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Attach facebook pages

**Endpoint:** `POST /social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}`
**Token Type:** bearer

Attach facebook pages

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AttachFBAccountDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `SocialMediaFBAccountResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Oauth | Instagram

### Starts OAuth For Instagram Account

**Endpoint:** `GET /social-media-posting/oauth/instagram/start`
**Scope:** `socialplanner/oauth.readonly`
**Token Type:** bearer

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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
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

### Get Instagram Professional Accounts

**Endpoint:** `GET /social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}`
**Token Type:** bearer

Get Instagram Professional Accounts

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetInstagramAccountsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Attach Instagram Professional Accounts

**Endpoint:** `POST /social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}`
**Token Type:** bearer

Attach Instagram Professional Accounts

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AttachIGAccountDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `SocialMediaInstagramAccountResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Oauth | LinkedIn

### Starts OAuth For LinkedIn Account

**Endpoint:** `GET /social-media-posting/oauth/linkedin/start`
**Token Type:** bearer

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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
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

### Get Linkedin pages and profile

**Endpoint:** `GET /social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}`
**Token Type:** bearer

Get Linkedin pages and profile

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetLinkedInAccountsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Attach linkedin pages and profile

**Endpoint:** `POST /social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}`
**Token Type:** bearer

Attach linkedin pages and profile

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AttachLinkedinAccountDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `SocialMediaLinkedInAccountResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Oauth | Twitter

### Starts OAuth For Twitter Account

**Endpoint:** `GET /social-media-posting/oauth/twitter/start`
**Scope:** `socialplanner/oauth.readonly`
**Token Type:** bearer
**Deprecated:** Yes

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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
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

### Get Twitter profile

**Endpoint:** `GET /social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}`
**Deprecated:** Yes

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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetTwitterAccountsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Attach Twitter profile

**Endpoint:** `POST /social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}`
**Deprecated:** Yes

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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AttachTwitterAccountDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `SocialMediaTwitterAccountResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## CSV

### Upload CSV

**Endpoint:** `POST /social-media-posting/{locationId}/csv`
**Scope:** `socialplanner/csv.write`
**Token Type:** bearer

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| multipart/form-data | `UploadCSVDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `UploadFileResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Upload Status

**Endpoint:** `GET /social-media-posting/{locationId}/csv`
**Token Type:** bearer

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `skip` | query | `string` | No | — |
| `limit` | query | `string` | No | — |
| `includeUsers` | query | `string` | No | — |
| `userId` | query | `string` | No | User ID |

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
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get CSV Post

**Endpoint:** `GET /social-media-posting/{locationId}/csv/{id}`
**Token Type:** bearer

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | — |
| `id` | path | `string` | Yes | CSV Id |
| `skip` | query | `string` | No | — |
| `limit` | query | `string` | No | — |

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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | — |
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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | — |
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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | — |
| `postId` | path | `string` | Yes | CSV Post Id |
| `csvId` | path | `string` | Yes | CSV Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeletePostResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Oauth | Tiktok

### Starts OAuth For Tiktok Account

**Endpoint:** `GET /social-media-posting/oauth/tiktok/start`
**Scope:** `socialplanner/oauth.readonly`
**Token Type:** bearer

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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
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

### Get Tiktok profile

**Endpoint:** `GET /social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}`
**Token Type:** bearer

Get Tiktok profile

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetTiktokAccountResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Attach Tiktok profile

**Endpoint:** `POST /social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}`
**Token Type:** bearer

Attach Tiktok profile

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AttachTiktokAccountDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `SocialMediaTiktokAccountResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Starts OAuth For Tiktok Business Account

**Endpoint:** `GET /social-media-posting/oauth/tiktok-business/start`
**Scope:** `socialplanner/oauth.readonly`
**Token Type:** bearer

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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
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

### Get Tiktok Business profile

**Endpoint:** `GET /social-media-posting/oauth/{locationId}/tiktok-business/accounts/{accountId}`
**Token Type:** bearer

Get Tiktok Business profile

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Account Location Id |
| `accountId` | path | `string` | Yes | Account Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetTiktokBusinessAccountResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Category

### Get categories by location id

**Endpoint:** `GET /social-media-posting/{locationId}/categories`
**Scope:** `socialplanner/category.readonly`
**Token Type:** bearer

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

Retrieve analytics data for multiple social media accounts. Provides metrics for the last 7 days with comparison to the previous 7 days. Supports filtering by platforms and specific connected accounts.

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
| `201` | Successfully retrieved analytics data | `object` |
| `400` | Bad Request - Occurs when more than 100 accounts are requested or invalid parameters are provided | `BadRequestDTO` |
| `401` | Unauthorized - Invalid or missing authentication credentials | `UnauthorizedDTO` |
| `422` | Unprocessable Entity - Invalid request body format | `UnprocessableDTO` |

## Schemas

### GoogleLocationSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | — |
| `storeCode` | `string` | No | — |
| `title` | `string` | No | — |
| `metadata` | `object` | No | Meta data not related to User |
| `storefrontAddress` | `object` | No | Store front address |
| `relationshipData` | `object` | No | All locations and chain related to this one |
| `maxLocation` | `boolean` | No | — |
| `isVerified` | `boolean` | No | — |
| `isConnected` | `boolean` | No | — |

### GoogleAccountsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | — |
| `accountName` | `string` | No | — |
| `type` | `string` | No | — |
| `verificationState` | `string` | No | — |
| `vettedState` | `string` | No | — |

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
| `location` | `object` | No | — |
| `account` | `object` | No | — |
| `companyId` | `string` | No | Company ID |

### SocialGoogleMediaAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | — |
| `oAuthId` | `string` | No | — |
| `oldId` | `string` | No | — |
| `locationId` | `string` | No | — |
| `originId` | `string` | No | — |
| `platform` | `object` | No | — |
| `type` | `object` | No | — |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `meta` | `object` | No | — |
| `active` | `boolean` | No | — |
| `deleted` | `boolean` | No | — |
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
| `type` | `string` | No | type must be one of the following values: recent, all, scheduled, draft, failed, in_review, published, in_progress and deleted |
| `accounts` | `string` | No | List of account Ids seperated by comma as a string |
| `skip` | `string` | Yes | — |
| `limit` | `string` | Yes | — |
| `fromDate` | `string` | Yes | From Date |
| `toDate` | `string` | Yes | To Date |
| `includeUsers` | `string` | Yes | Include User Data |
| `postType` | `object` | No | Post Type must be one of the following values: - post, story, reel |

### PostMediaSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | Yes | — |
| `caption` | `string` | No | — |
| `type` | `string` | No | — |
| `thumbnail` | `string` | No | — |
| `defaultThumb` | `string` | No | — |
| `id` | `string` | No | — |

### OgTagsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `metaImage` | `string` | No | Meta Image |
| `metaLink` | `string` | No | Meta Link |

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
| `approver` | `string` | No | Approver |
| `requesterNote` | `string` | No | Requester Notes |
| `approverNote` | `string` | No | Approver Notes |
| `approvalStatus` | `object` | No | Approval Status must be one of the following values: pending, approved, rejected, not_required |
| `approverUser` | `PostUserSchema` | No | Approver User Details |

### TiktokPostSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `privacyLevel` | `object` | No | privacy level is an enum and must be one of the following values: PUBLIC_TO_EVERYONE, MUTUAL_FOLLOW_FRIENDS, SELF_ONLY |
| `promoteOtherBrand` | `boolean` | No | promote other brand |
| `enableComment` | `boolean` | No | enable comment |
| `enableDuet` | `boolean` | No | enable duet |
| `enableStitch` | `boolean` | No | enable stitch |
| `videoDisclosure` | `boolean` | No | video disclosure |
| `promoteYourBrand` | `boolean` | No | promote your brand |

### DateSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `year` | `number` | Yes | — |
| `month` | `number` | Yes | — |
| `day` | `number` | Yes | — |

### TimeSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hours` | `number` | Yes | — |
| `minutes` | `number` | Yes | — |
| `seconds` | `number` | Yes | — |

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
| `gmbEventType` | `string` | No | gmbEventType must be one of the following values: STANDARD, EVENT, OFFER |
| `title` | `string` | No | Title |
| `offerTitle` | `string` | No | Offer Title |
| `startDate` | `StartDateSchema` | No | Start Date |
| `endDate` | `EndDateSchema` | No | End Date |
| `termsConditions` | `string` | No | Terms Condition Url |
| `url` | `string` | No | Url |
| `couponCode` | `string` | No | Coupon Code |
| `redeemOnlineUrl` | `string` | No | Redeem Online Url |
| `actionType` | `object` | No | Action Type must be one of the following values: none, order, book, shop, learn_more, call, sign_up |

### GetPostFormattedSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | — |
| `source` | `string` | No | source must be one of the following values: composer, recurring, csv |
| `locationId` | `string` | Yes | Location Id |
| `platform` | `string` | No | platform must be one of the following values: google, facebook, instagram, linkedin, twitter, tiktok |
| `displayDate` | `string (date-time)` | No | — |
| `createdAt` | `string (date-time)` | No | — |
| `updatedAt` | `string (date-time)` | No | — |
| `accountId` | `string` | No | Account Id |
| `error` | `string` | Yes | Error |
| `postId` | `string` | No | — |
| `publishedAt` | `string` | No | — |
| `accountIds` | `array<string>` | No | Account Ids |
| `summary` | `string` | No | — |
| `media` | `array<PostMediaSchema>` | No | Post Media Data <br> The limitations of media as per the platforms is provided through the reference link in API description |
| `status` | `object` | No | Status must be one of the following values: in_progress, draft, failed, published, scheduled, in_review, notification_sent, deleted |
| `createdBy` | `string` | No | — |
| `type` | `object` | Yes | Post Type must be one of the following values: - post, story, reel |
| `tags` | `array<string>` | No | Tag Ids |
| `ogTagsDetails` | `OgTagsSchema` | No | Og Tags Meta Data |
| `postApprovalDetails` | `FormatedApprovalDetails` | No | Post Approval Details |
| `tiktokPostDetails` | `TiktokPostSchema` | No | Tiktok Post Details |
| `gmbPostDetails` | `GMBPostSchema` | No | GMB Post Details |
| `user` | `PostUserSchema` | No | User |

### PostSuccessfulResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `array<GetPostFormattedSchema>` | No | Post Data |
| `count` | `number` | No | — |

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
| `approver` | `string` | No | Approver |
| `requesterNote` | `string` | No | Requester Notes |
| `approverNote` | `string` | No | Approver Notes |
| `approvalStatus` | `object` | No | Approval Status must be one of the following values: pending, approved, rejected, not_required |

### CreatePostDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIds` | `array<string>` | Yes | Account Ids |
| `summary` | `string` | No | Post Content <br> The limitations of content as per the platforms is provided through the reference link in API description. The summary will be trimmed based on the limit |
| `media` | `array<PostMediaSchema>` | No | Post Media Data <br> The limitations of media as per the platforms is provided through the reference link in API description |
| `status` | `object` | No | Status must be one of the following values: null, in_progress, draft, failed, published, scheduled, in_review, notification_sent, deleted |
| `scheduleDate` | `string` | No | Schedule Date |
| `createdBy` | `string` | No | Created By |
| `followUpComment` | `string` | No | Follow Up Comment on platform. It is not allowed on Tiktok and GMB accounts and there is a limit of 280 charecters for twitter account |
| `ogTagsDetails` | `OgTagsSchema` | No | Og Tags Meta Data |
| `type` | `object` | Yes | Post Type must be one of the following values: - post, story, reel |
| `postApprovalDetails` | `PostApprovalSchema` | No | Post Approval Details |
| `scheduleTimeUpdated` | `boolean` | No | if schedule datetime is updated |
| `tags` | `array<string>` | No | Array of Tag Value |
| `categoryId` | `string` | No | Category Id |
| `tiktokPostDetails` | `TiktokPostSchema` | No | Tiktok Post Details |
| `gmbPostDetails` | `GMBPostSchema` | No | GMB Post Details |
| `userId` | `string` | Yes | User ID |

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
| `createdBy` | `string` | No | Created By |
| `followUpComment` | `string` | No | Follow Up Comment on platform. It is not allowed on Tiktok and GMB accounts and there is a limit of 280 charecters for twitter account |
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
| `postId` | `string` | No | — |

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
| `id` | `string` | No | — |
| `oauthId` | `string` | No | — |
| `profileId` | `string` | No | — |
| `name` | `string` | No | — |
| `platform` | `string` | No | platform must be one of the following values: google, facebook, instagram, linkedin, twitter, tiktok |
| `type` | `string` | No | — |
| `expire` | `string` | No | — |
| `isExpired` | `boolean` | No | — |
| `meta` | `object` | No | — |

### GetGroupSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Group Id |
| `name` | `string` | Yes | name of group |
| `accountIds` | `array<string>` | Yes | — |

### AccountsListResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts` | `array<GetAccountSchema>` | No | — |
| `groups` | `array<GetGroupSchema>` | No | — |

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
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `isOwned` | `boolean` | No | — |
| `isConnected` | `boolean` | No | — |

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
| `type` | `object` | No | — |
| `originId` | `string` | No | — |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `companyId` | `string` | No | Company ID |

### SocialMediaFacebookAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | — |
| `oAuthId` | `string` | No | — |
| `oldId` | `string` | No | — |
| `locationId` | `string` | No | — |
| `originId` | `string` | No | — |
| `platform` | `object` | No | — |
| `type` | `object` | No | type value must be page |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `meta` | `object` | No | — |
| `active` | `boolean` | No | — |
| `deleted` | `boolean` | No | — |
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
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `pageId` | `string` | No | — |
| `isConnected` | `boolean` | No | — |

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
| `originId` | `string` | No | — |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `pageId` | `string` | Yes | — |
| `companyId` | `string` | No | Company ID |

### SocialMediaInstagramAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | — |
| `oAuthId` | `string` | No | — |
| `oldId` | `string` | No | — |
| `locationId` | `string` | No | — |
| `originId` | `string` | No | — |
| `platform` | `object` | No | — |
| `type` | `object` | No | — |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `meta` | `object` | No | — |
| `active` | `boolean` | No | — |
| `deleted` | `boolean` | No | — |
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
| `type` | `string` | No | — |
| `originId` | `string` | No | — |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `urn` | `string` | No | — |
| `companyId` | `string` | No | Company ID |

### SocialMediaLinkedInAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | — |
| `oAuthId` | `string` | No | — |
| `oldId` | `string` | No | — |
| `locationId` | `string` | No | — |
| `originId` | `string` | No | — |
| `platform` | `object` | No | — |
| `type` | `object` | No | type must be one of the following values: page, profile |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `meta` | `object` | No | — |
| `active` | `boolean` | No | — |
| `deleted` | `boolean` | No | — |
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
| `originId` | `string` | No | — |
| `name` | `string` | No | — |
| `username` | `string` | No | — |
| `avatar` | `string` | No | — |
| `protected` | `boolean` | No | — |
| `verified` | `boolean` | No | — |
| `companyId` | `string` | No | Company ID |

### SocialMediaTwitterAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | — |
| `oAuthId` | `string` | No | — |
| `oldId` | `string` | No | — |
| `locationId` | `string` | No | — |
| `originId` | `string` | No | — |
| `platform` | `object` | No | — |
| `type` | `object` | No | — |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `meta` | `object` | No | — |
| `active` | `boolean` | No | — |
| `deleted` | `boolean` | No | — |
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
| `filePath` | `string` | No | — |
| `rowsCount` | `number` | No | — |
| `fileName` | `string` | No | — |

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
| `rowsCount` | `number` | Yes | Entires Count. rowcCount must be between 1 and number of posts in CSV |
| `fileName` | `string` | Yes | Name of file |
| `approver` | `string` | No | — |
| `userId` | `string` | No | User ID |

### SetAccountsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |

### CSVImportSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Csv Id |
| `locationId` | `string` | No | locationId |
| `fileName` | `string` | No | File Name |
| `accountIds` | `array<string>` | No | Account Ids |
| `file` | `string` | No | File path |
| `status` | `string` | No | status must be one of the following values: pending, in_progress, completed, failed, in_review, importing, deleted |
| `count` | `number` | No | Posts count |
| `createdBy` | `string` | No | Created By Id |
| `traceId` | `string` | No | Trace Id |
| `originId` | `string` | No | Origin Id |
| `approver` | `string` | No | Approver Id |
| `createdAt` | `string (date-time)` | No | Date Created |

### GetUploadStatusResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csvs` | `CSVImportSchema` | Yes | CSV Data |
| `count` | `number` | Yes | — |

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
| `ogImage` | `OgImageSchema` | No | Tag description |
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
| `instagramError` | `string` | No | Instagram media error. It can we one of the following errors: imageSize, imageType, imageAspectRatio, videoType, videoDuration, videoSize, videoAspectRatio, videoWidthHeight, audioCodec, audioCodecChannels, videoCodec, videoFrameRate |
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
| `scheduleDate` | `string` | No | — |
| `summary` | `string` | No | — |
| `followUpComment` | `string` | No | — |
| `type` | `object` | No | — |
| `tiktokPostDetails` | `TiktokPostSchema` | No | Tiktok Post Details |
| `gmbPostDetails` | `GMBPostSchema` | No | GMB Post Details |
| `errorMessage` | `string` | No | Error Description |

### GetCsvPostResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csv` | `CSVImportSchema` | No | CSV Data |
| `count` | `number` | No | — |
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
| `userId` | `string` | No | User ID |

### CsvPostStatusResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |

### CsvResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | No | — |
| `fileName` | `string` | No | — |
| `accountIds` | `array<string>` | No | Account Ids |
| `file` | `string` | No | — |
| `status` | `object` | No | status must be one of the following values: pending, in_progress, completed, failed, in_review, importing, deleted |
| `count` | `number` | No | — |
| `createdBy` | `string` | No | — |
| `traceId` | `string` | No | — |
| `originId` | `string` | No | — |
| `approver` | `string` | No | — |

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

### DeletePostResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `postId` | `string` | Yes | Post Id |

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
| `type` | `string` | No | — |
| `originId` | `string` | No | — |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `verified` | `boolean` | No | — |
| `username` | `string` | No | — |
| `companyId` | `string` | No | Company ID |

### SocialMediaTiktokAccountSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | — |
| `oAuthId` | `string` | No | — |
| `oldId` | `string` | No | — |
| `locationId` | `string` | No | — |
| `originId` | `string` | No | — |
| `platform` | `object` | No | — |
| `type` | `object` | No | type must be one of the following values: profile, business |
| `name` | `string` | No | — |
| `avatar` | `string` | No | — |
| `meta` | `object` | No | — |
| `active` | `boolean` | No | — |
| `deleted` | `boolean` | No | — |
| `createdAt` | `string (date-time)` | No | created date |
| `updatedAt` | `string (date-time)` | No | updated date |

### SocialMediaTiktokAccountResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `SocialMediaTiktokAccountSchema` | No | Requested Results |

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
| `_id` | `string` | No | ID |
| `createdBy` | `string` | No | Created By User Id |
| `deleted` | `boolean` | No | Deleted boolean value |
| `createdAt` | `string (date-time)` | No | — |
| `updatedAt` | `string (date-time)` | No | — |

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
| `deletedCount` | `number` | No | — |

### BulkDeleteResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success or Failure |
| `statusCode` | `number` | Yes | Status Code |
| `message` | `string` | Yes | Message |
| `results` | `object` | Yes | Message and deleted count |
