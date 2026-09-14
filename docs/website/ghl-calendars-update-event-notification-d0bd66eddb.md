> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-event-notification). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update notification

**Endpoint:** `PUT /calendars/:calendarId/notifications/:notificationId`

Update Event notification by id

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

- application/json

- Body
- Example (auto)

### Body**required**

**receiverType**stringNotification recipient typeAvailable options`contact``guest``assignedUser``emails``phoneNumbers``business`**additionalEmailIds**string[]Additional email addresses to receive notifications.**additionalPhoneNumbers**string[]Additional phone numbers to receive notifications.**selectedUsers**string[]Selected users for in-App and business email notifications. Supports user IDs and special keyword "sub_account_admin"**channel**stringNotification channelAvailable options`email``inApp``sms``whatsapp`**notificationType**stringNotification typeAvailable options`booked``confirmation``cancellation``reminder``followup``reschedule`**isActive**booleanIs the notification active**Default value:**`true`**deleted**booleanMarks the notification as deleted (soft delete)**Default value:**`false`**templateId**stringTemplate ID for email notification**body**stringBody for email notification. Not necessary for in-App notification**subject**stringSubject for email notification. Not necessary for in-App notification**afterTime**object[]Specifies the time after which the follow-up notification should be sent. This is not required for other notification types.**beforeTime**object[]Specifies the time before which the reminder notification should be sent. This is not required for other notification types.**fromAddress**stringFrom address for email notification**fromNumber**stringfrom number for sms notification**fromName**stringFrom name for email/sms notification

```json
{
  "receiverType": "user",
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
  "channel": "email",
  "notificationType": "confirmation",
  "isActive": true,
  "deleted": false,
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
  "fromAddress": "notifications@example.com",
  "fromNumber": "+15551234567",
  "fromName": "Acme Scheduling"
}
```

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
