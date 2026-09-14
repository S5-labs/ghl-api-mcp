> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-event-notification). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Notification

**Endpoint:** `DELETE /calendars/:calendarId/notifications/:notificationId`

Delete notification

## Request

**Version**

string

required

API Version

Available options

`v3`

**calendarId**

string

required

Calendar ID

**notificationId**

string

required

Notification ID

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**message**stringrequiredResult of delete/update operation

```json
{
  "message": "Notification deleted successfully"
}
```
