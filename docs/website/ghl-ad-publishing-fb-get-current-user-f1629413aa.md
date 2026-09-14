> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-current-user). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get current Facebook user

**Endpoint:** `GET /ad-publishing/facebook/me`

Retrieve the authenticated Facebook user profile for a location

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

Location identifier

application/json

Profile of the Facebook user connected to this location

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredFacebook user id**name**stringrequiredDisplay name on the connected Facebook account**picture**objectrequiredProfile photo, kept in Facebook’s `{ data: { … } }` envelope

```json
{
  "id": "122106171518726316",
  "name": "Jane Doe",
  "picture": {
    "data": {
      "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=...&height=50&width=50",
      "width": 50,
      "height": 50,
      "isSilhouette": false
    }
  }
}
```
