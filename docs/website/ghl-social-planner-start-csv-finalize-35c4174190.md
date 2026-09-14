> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-csv-finalize). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Start CSV Finalize

**Endpoint:** `PATCH /social-media-posting/:locationId/csv/:id`

Finalize a CSV import and schedule all posts for publishing

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

CSV Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**userId**stringrequiredUser ID

```json
{
  "userId": "sdfdsfdsfEWEsdfsdsW32dd"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Updated Successfully"
}
```
