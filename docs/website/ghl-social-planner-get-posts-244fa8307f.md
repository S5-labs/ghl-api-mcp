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

Location Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**type**stringtype must be one of the following values: recent, all, scheduled, draft, failed, in_review, published, in_progress, pending and deleted**Default value:**`all`**accounts**stringList of account Ids separated by comma as a string**skip**stringrequiredNumber of records to skip for pagination**Default value:**`0`**limit**stringrequiredMaximum number of records to return**Default value:**`10`**fromDate**stringrequiredFrom Date**toDate**stringrequiredTo Date**includeUsers**stringrequiredInclude User Data**postType**objectPost Type must be one of the following values: - post, story, reel

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
          "like": 12,
          "share": 3,
          "comment": 5
        }
      }
    ],
    "count": 6
  }
}
```
