> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-current-active-post-and-schedule-next). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete an active post and schedule the next one

**Endpoint:** `DELETE /social-media-posting/category/queues/:postId/active-post`

Deletes a post that is currently scheduled and automatically triggers the scheduling of the next available post in the queue.

## Request

**Version**

string

required

API Version

Available options

`v3`

**postId**

string

required

**locationId**

string

required

Location ID

application/json

Successfully deleted the active post and scheduled the next one.

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
    "message": "Current post deleted and next post scheduled successfully"
  },
  "traceId": "string"
}
```
