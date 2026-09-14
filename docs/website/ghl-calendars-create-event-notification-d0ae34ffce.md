> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-event-notification). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create notification

**Endpoint:** `POST /calendars/:calendarId/notifications`

Create Calendar notifications, either one or multiple. All notification settings must be for single calendar only

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

application/json

- application/json

- Body
- Example (auto)

### Body array**required**

- Array [
- ]

```json
[
  {
    "receiverType": "user",
    "channel": "email",
    "notificationType": "confirmation",
    "isActive": true,
    "templateId": "MwPcayliwcdoUFzvbTok",
    "body": "Your appointment has been confirmed.",
    "subject": "Appointment Confirmation",
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
    "additionalEmailIds": [
      "example1@email.com",
      "example2@email.com"
    ],
    "additionalPhoneNumbers": [
      "+919876744444",
      "+919876744445"
    ],
    "selectedUsers": [
      "userId1",
      "userId2",
      "sub_account_admin"
    ],
    "fromAddress": "notifications@example.com",
    "fromName": "Acme Scheduling",
    "fromNumber": "+15551234567"
  }
]
```

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
