> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/update-queue-item). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update an item in a queue

**Endpoint:** `PUT /social-media-posting/category/queues/:queueId/items/:itemId`

Updates the content or variations of a specific item within a category queue.

## Request

**Version**

string

required

API Version

Available options

`v3`

**queueId**

string

required

**itemId**

string

required

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**sessionId**stringEdit session ID**modifiedPostPayload**objectModifications to the original post**newOrder**objectNew order value or position keyword (cyclic-aware). Accepts: A number: explicit order value calculated by FE as midpoint between adjacent items "top": place at cyclic top (first to be scheduled next) "bottom": place at cyclic bottom (last to be scheduled) For positions between items, FE calculates: Math.floor((prevItem.order + nextItem.order) / 2)**variations**object[]Variations**primaryImage**stringPrimary media URL (image)

```json
{
  "locationId": "609e126a1c4ae1001291e1b5",
  "sessionId": "60af88475f1b2c001f5d5f4b",
  "modifiedPostPayload": {
    "accountIds": [
      "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
    ],
    "summary": "Hello World",
    "media": [
      {
        "url": "https://example.com/image.jpg",
        "type": "image/jpeg",
        "caption": "Sample caption",
        "altText": "A sunset over the ocean with silhouetted palm trees"
      }
    ],
    "status": "scheduled",
    "scheduleDate": "2024-01-15T10:00:00Z",
    "selectedBestTime": "2024-01-15T10:00:00Z",
    "createdBy": "Lx1EI6YIgQYMQi0ytFXv",
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
      "pdfTitle": "Q4 Marketing Strategy Presentation",
      "postAsPdf": true,
      "poll": {
        "question": "What is your favorite color?",
        "options": [
          {
            "text": "Red"
          }
        ],
        "settings": {
          "duration": "SEVEN_DAYS"
        }
      }
    },
    "pinterestPostDetails": {
      "title": "10 Easy Home Decor Ideas for 2024",
      "link": "https://yoursite.com/blog/home-decor-ideas",
      "pinterestBoards": [
        {
          "accountId": "6887d6de1d8175813d50dab8",
          "boards": [
            "987654321098765432",
            "234567890123456789"
          ]
        },
        {
          "accountId": "682c7d1710a2fe3d805a3513",
          "boards": [
            "111222333444555666"
          ]
        }
      ],
      "shortenedLinks": [
        "string"
      ]
    },
    "facebookPostDetails": {
      "type": "post",
      "textFormatPresetId": "303063890126415"
    },
    "instagramPostDetails": {
      "type": "post",
      "collaborators": {
        "accountId1": [
          "username1",
          "username2"
        ],
        "accountId2": [
          "username3",
          "username4"
        ]
      },
      "showOnFeed": true,
      "publishViaPushNotification": true,
      "publisherNote": "When publishing, add swipe up link to the landing page so that we can direct them to the sales page"
    },
    "youtubePostDetails": {
      "title": "How to Build a Successful Marketing Strategy in 2024",
      "privacyLevel": "public",
      "type": "video"
    },
    "locationId": "ve9EPM428h8vShlRW1KT"
  },
  "newOrder": "top",
  "variations": [
    {
      "content": "Check out our latest blog post! #marketing #socialmedia",
      "mentions": [
        {
          "platform": "instagram",
          "username": "example_user",
          "offset": 10,
          "length": 12
        }
      ],
      "ogTags": {
        "metaLink": "https://example.com/blog/post-title",
        "metaImage": "https://example.com/images/preview.png",
        "ogTitle": "Check out our latest blog post!"
      }
    }
  ],
  "primaryImage": "http://example.com/media.png"
}
```

application/json

The queue item has been successfully updated.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequired**statusCode**numberrequired**results**objectrequired**traceId**string

```json
{
  "success": true,
  "statusCode": 200,
  "results": {
    "message": "Queue item updated successfully",
    "queueItem": {
      "_id": "60af88475f1b2c001f5d5f4b",
      "order": 1000,
      "variations": [
        {
          "_id": "60af88475f1b2c001f5d5f4c",
          "content": "Check out our latest blog post! #marketing #socialmedia",
          "mentions": [
            {
              "platform": "instagram",
              "username": "example_user",
              "offset": 10,
              "length": 12
            }
          ],
          "ogTags": {
            "metaLink": "https://example.com",
            "metaImage": "https://example.com/image.png",
            "ogTitle": "Example Title"
          }
        }
      ],
      "primaryImage": "https://example.com/images/post-image.png",
      "lastScheduledTime": null,
      "queueId": "60af88475f1b2c001f5d5f4a",
      "postId": "60af88475f1b2c001f5d5f4d",
      "modifiedPostPayload": {
        "_id": "61bb16833b3f2791f9715be2",
        "source": "composer",
        "locationId": "ve9EPM428h8vShlRW1KT",
        "displayDate": "2023-08-02T00:00:00.000Z",
        "createdAt": "2023-08-02T00:00:00.000Z",
        "updatedAt": "2023-08-02T00:00:00.000Z",
        "accountId": "w37swmmLbA02zgqKPpxITe",
        "error": "Failed due to auth token",
        "postId": "323534534435",
        "publishedAt": "2021-06-22T05:32:49.463Z",
        "thumbnail": "https://storage.googleapis.com/test/test/media/test.jpeg",
        "accountIds": [
          "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
        ],
        "summary": "Sample Summary",
        "media": [
          {
            "url": "https://example.com/image.jpg",
            "type": "image/jpeg",
            "caption": "Sample caption",
            "altText": "A sunset over the ocean with silhouetted palm trees"
          }
        ],
        "status": "published",
        "createdBy": "Lx1EI6YIgQYMQi0ytFXv",
        "type": "post",
        "tags": [
          "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
        ],
        "ogTagsDetails": {
          "metaImage": "https://example.com/image.jpg",
          "metaLink": "https://www.yahoo.com/",
          "ogTitle": "Page Title",
          "ogDescription": "Page Description"
        },
        "postApprovalDetails": {
          "approver": "iVrVJ2uoXNF0wzcBzgl5",
          "approvalStatus": "approved"
        },
        "tiktokPostDetails": {
          "privacyLevel": "PUBLIC_TO_EVERYONE",
          "enableComment": true
        },
        "gmbPostDetails": {
          "gmbEventType": "STANDARD",
          "actionType": "BOOK"
        },
        "user": {
          "id": "6284c43d519161e96cc09c13",
          "firstName": "Harry",
          "lastName": "Spencer",
          "email": "abc@xyc.com"
        },
        "linkedinPostDetails": {
          "pdfTitle": "Q4 Marketing Strategy Presentation",
          "postAsPdf": true,
          "poll": {
            "question": "What is your favorite color?",
            "options": [
              {
                "text": "Red"
              }
            ],
            "settings": {
              "duration": "SEVEN_DAYS"
            }
          }
        },
        "pinterestPostDetails": {
          "title": "10 Easy Home Decor Ideas for 2024",
          "link": "https://yoursite.com/blog/home-decor-ideas",
          "pinterestBoards": [
            {
              "accountId": "6887d6de1d8175813d50dab8",
              "boards": [
                "987654321098765432",
                "234567890123456789"
              ]
            },
            {
              "accountId": "682c7d1710a2fe3d805a3513",
              "boards": [
                "111222333444555666"
              ]
            }
          ],
          "shortenedLinks": [
            "string"
          ]
        },
        "facebookPostDetails": {
          "type": "post",
          "textFormatPresetId": "303063890126415"
        },
        "instagramPostDetails": {
          "type": "post",
          "collaborators": {
            "accountId1": [
              "username1",
              "username2"
            ],
            "accountId2": [
              "username3",
              "username4"
            ]
          },
          "showOnFeed": true,
          "publishViaPushNotification": true,
          "publisherNote": "When publishing, add swipe up link to the landing page so that we can direct them to the sales page"
        },
        "youtubePostDetails": {
          "title": "How to Build a Successful Marketing Strategy in 2024",
          "privacyLevel": "public",
          "type": "video"
        },
        "mediaOptimization": true
      },
      "parentPostId": "60af88475f1b2c001f5d5f4e",
      "errors": [
        "INVALID_USER_ID",
        "PIXABAY_MEDIA"
      ],
      "currentVariation": 0,
      "createdAt": "2024-12-09T13:41:21.385Z",
      "updatedAt": "2024-12-09T13:41:21.385Z",
      "deleted": false,
      "locationId": "fvg1TXIiVxGcdOaL0riG"
    },
    "updatedSlots": [
      {
        "itemId": "60af88475f1b2c001f5d5f4b",
        "scheduledDateTime": "2023-10-15T10:00:00.000Z",
        "isSkipped": false
      }
    ],
    "totalPostsChanged": 5
  },
  "traceId": "string"
}
```
