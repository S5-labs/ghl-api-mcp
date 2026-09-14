> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/find-event-notification). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get notification

**Endpoint:** `GET /calendars/:calendarId/notifications/:notificationId`

Find Event notification by notificationId

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

**_id**stringNotification ID**receiverType**stringNotification recipient typeAvailable options`contact``guest``assignedUser``emails``phoneNumbers``business`**additionalEmailIds**string[]Additional email addresses to receive notifications**additionalPhoneNumbers**string[]Additional phone numbers to receive notifications**channel**stringNotification channelAvailable options`email``inApp``sms``whatsapp`**notificationType**stringNotification typeAvailable options`booked``confirmation``cancellation``reminder``followup``reschedule`**isActive**booleanWhether the notification is active**additionalWhatsappNumbers**string[]Additional WhatsApp numbers to receive notifications**templateId**stringTemplate ID for the notification**body**stringNotification body content**subject**stringNotification subject line**afterTime**object[]Time schedules after which follow-up notifications are sent**beforeTime**object[]Time schedules before which reminder notifications are sent**selectedUsers**string[]Selected user IDs for the notification**deleted**booleanWhether the notification is deleted

```json
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
```
