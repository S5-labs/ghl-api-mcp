> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-event-notification). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get notifications

**Endpoint:** `GET /calendars/:calendarId/notifications`

Get calendar notifications based on query

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

**isActive**

boolean

Filter by active status

**deleted**

boolean

Include deleted notifications

**limit**

number

Number of records to return

`100`

**skip**

number

Number of records to skip

`0`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

- Array [
- ]

```json
[
  {
    "_id": "629a5d0a8c3f2b001f3d4e5a",
    "receiverType": "contact",
    "additionalEmailIds": [
      "example1@email.com",
      "example2@email.com"
    ],
    "additionalPhoneNumbers": [
      "+919876744444",
      "+919876744445"
    ],
    "channel": "email",
    "notificationType": "confirmation",
    "isActive": true,
    "additionalWhatsappNumbers": [
      "+919876744444",
      "+919876744445"
    ],
    "templateId": "0as9d8as0d",
    "body": "This is a test notification",
    "subject": "Test Notification",
    "afterTime": [
      {
        "timeOffset": 1,
        "unit": "hours"
      }
    ],
    "beforeTime": [
      {
        "timeOffset": 1,
        "unit": "hours"
      }
    ],
    "selectedUsers": [
      "user1",
      "user2"
    ],
    "deleted": false
  }
]
```
