> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-account). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Account

**Endpoint:** `DELETE /social-media-posting/:locationId/accounts/:id`

Delete account and account from group

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

**id**

string

required

Id

**userId**

string

ID of the user performing the disconnect. Recorded for auditing only; omit it and the account is still deleted.

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
  "statusCode": 200,
  "message": "Deleted Account",
  "results": {
    "locationId": "ve9EPM428h8vShlRW1KT",
    "id": "65fac446d599990d1313c1dd"
  }
}
```
