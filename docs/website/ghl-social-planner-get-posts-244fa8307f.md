> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-posts). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get posts

**Endpoint:** `POST /social-media-posting/:locationId/posts/list`

Get Posts

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**type**stringtype must be one of the following values: recent, all, scheduled, draft, failed, in_review, published, in_progress, pending and deleted**Default value:**`all`**accounts**stringList of account Ids separated by comma as a string**skip**stringNumber of records to skip for pagination. Send as a numeric string — a JSON number is rejected.**Default value:**`0`**limit**stringMaximum number of records to return. Send as a numeric string — a JSON number is rejected.**Default value:**`10`**fromDate**stringFrom Date**toDate**stringTo Date**includeUsers**stringInclude User Data**postType**stringPost Type must be one of the following values: post, story, reel, short Matches the top-level `type` a post was created with (see the `type` field on Create Post), so only these three values can ever match a post.Available options`post``story``reel`

```json
{
  "type": "all",
  "accounts": "660a83fc29deacac50033e2b_omaDY3RbWtTP511e808O_17841465964543589, 38bF83fc29deacac50033e2b_omaDY3RbWtr3P11e808O_17841465964543998",
  "skip": "0",
  "limit": "10",
  "fromDate": "2024-01-22T05:32:49.463Z",
  "toDate": "2024-03-20T05:32:49.463Z",
  "includeUsers": "true",
  "postType": "post"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectRequested Results

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Fetched Posts",
  "results": {
    "posts": [
      {
        "_id": "61bb16833b3f2791f9715be2",
        "locationId": "ve9EPM428h8vShlRW1KT",
        "status": "published",
        "insights": {
          "like": 0,
          "share": 0,
          "comment": 0
        }
      }
    ],
    "count": 6
  }
}
```
