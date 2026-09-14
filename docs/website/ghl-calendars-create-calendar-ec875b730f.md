> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-calendar). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Calendar

**Endpoint:** `POST /calendars/`

Create calendar in a location.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**isActive**booleanShould the created calendar be active or draft**Default value:**`true`**notifications**object[]deprecated🚨 Deprecated! Please use 'Calendar Notifications APIs' instead.**locationId**stringrequiredLocation ID**groupId**stringGroup Id**teamMembers**object[]Team members are required for calendars of type: Round Robin, Collective, Class, Service. Personal calendar must have exactly one team member.**eventType**stringEvent type for round robin distributionAvailable options`RoundRobin_OptimizeForAvailability``RoundRobin_OptimizeForEqualDistribution`**name**stringrequiredCalendar name**description**stringCalendar description**slug**stringCalendar slug for URL**widgetSlug**stringWidget slug**calendarType**stringCalendar typeAvailable options`round_robin``event``class_booking``collective``service_booking``personal`**widgetType**stringCalendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.Available options`default``classic`**eventTitle**stringTitle for calendar events**Default value:**`{{contact.name}}`**eventColor**stringColor for calendar events in hex format**Default value:**`#039be5`**locationConfigurations**object[]Meeting location configuration for event calendar**slotDuration**numberThis controls the duration of the meeting**Default value:**`30`**slotDurationUnit**stringUnit for slot duration.Available options`mins``hours`**slotInterval**numberSlot interval reflects the amount of time the between booking slots that will be shown in the calendar.**Default value:**`30`**slotIntervalUnit**stringUnit for slot interval.Available options`mins``hours`**slotBuffer**numberSlot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up**slotBufferUnit**stringUnit for slot buffer.Available options`mins``hours`**preBuffer**numberPre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready**preBufferUnit**stringUnit for pre-buffer.Available options`mins``hours`**appoinmentPerSlot**numberMaximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar.**Default value:**`1`**appoinmentPerDay**numberNumber of appointments that can be booked for a given day**allowBookingAfter**numberMinimum scheduling notice for events**allowBookingAfterUnit**stringUnit for minimum scheduling noticeAvailable options`hours``days``weeks``months``mins`**allowBookingFor**numberMinimum number of days/weeks/months for which to allow booking events**allowBookingForUnit**stringUnit for controlling the duration for which booking would be allowed forAvailable options`days``weeks``months`**openHours**object[]deprecatedWhile we will support this property for backward compatibility, it is recommended to use 'Availability' APIs instead.**enableRecurring**booleanEnable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this**Default value:**`false`**recurring**objectRecurring appointment configuration**formId**stringForm ID to be used for booking**stickyContact**booleanEnable sticky contact assignment**isLivePaymentMode**booleanWhether payment mode is live**autoConfirm**booleanAuto-confirm appointments**Default value:**`true`**shouldSendAlertEmailsToAssignedMember**booleanSend alert emails to assigned team member**alertEmail**stringAlert email address**googleInvitationEmails**booleanSend Google invitation emails**Default value:**`false`**allowReschedule**booleanAllow rescheduling of appointments**Default value:**`true`**allowCancellation**booleanAllow cancellation of appointments**Default value:**`true`**shouldAssignContactToTeamMember**booleanAssign contact to team member on booking**shouldSkipAssigningContactForExisting**booleanSkip assigning contact if contact already exists**notes**stringNotes for the calendar**pixelId**stringFacebook Pixel ID for tracking**formSubmitType**stringAction after form submissionAvailable options`RedirectURL``ThankYouMessage`**formSubmitRedirectURL**stringRedirect URL after form submission**formSubmitThanksMessage**stringThank you message displayed after form submission**availabilityType**numberdeprecatedWhile we will support this property for backward compatibility, it is not required anymore.Available options`0``1`**availabilities**object[]deprecatedWhile we will support this property for backward compatibility, it is recommended to use 'Availability' APIs instead.**guestType**stringType of guest allowedAvailable options`count_only``collect_detail`**consentLabel**stringConsent label text**calendarCoverImage**stringCalendar cover image URL**lookBusyConfig**objectLook Busy Configuration**appointmentPerSlot**numberMaximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar.**Default value:**`1`**appointmentPerDay**numberNumber of appointments that can be booked for a given day

```json
{
  "isActive": true,
  "locationId": "ocQHyuzHvysMo5N5VsXc",
  "groupId": "BqTwX8QFwXzpegMve9EQ",
  "teamMembers": [
    {
      "userId": "ocQHyuzHvysMo5N5VsXc",
      "priority": 0.5,
      "isPrimary": true
    }
  ],
  "eventType": "RoundRobin_OptimizeForAvailability",
  "name": "test calendar",
  "description": "this is used for testing",
  "slug": "test1",
  "widgetSlug": "test1",
  "calendarType": "round_robin",
  "widgetType": "classic",
  "eventTitle": "{{contact.name}}",
  "eventColor": "#039BE5",
  "locationConfigurations": [
    {
      "kind": "custom",
      "location": "https://meet.google.com/abc-def"
    }
  ],
  "slotDuration": 30,
  "slotDurationUnit": "mins",
  "slotInterval": 30,
  "slotIntervalUnit": "mins",
  "slotBuffer": 15,
  "slotBufferUnit": "mins",
  "preBuffer": 10,
  "preBufferUnit": "mins",
  "appoinmentPerSlot": 1,
  "appoinmentPerDay": 8,
  "allowBookingAfter": 4,
  "allowBookingAfterUnit": "days",
  "allowBookingFor": 30,
  "allowBookingForUnit": "days",
  "enableRecurring": false,
  "recurring": {
    "freq": "WEEKLY",
    "count": 4,
    "bookingOption": "skip",
    "bookingOverlapDefaultStatus": "confirmed"
  },
  "formId": "YlWd2wuCAZQzh2cH1fVZ",
  "stickyContact": true,
  "isLivePaymentMode": false,
  "autoConfirm": true,
  "shouldSendAlertEmailsToAssignedMember": false,
  "alertEmail": "alerts@example.com",
  "googleInvitationEmails": true,
  "allowReschedule": true,
  "allowCancellation": true,
  "shouldAssignContactToTeamMember": true,
  "shouldSkipAssigningContactForExisting": false,
  "notes": "Please arrive 10 minutes early.",
  "pixelId": "1234567890",
  "formSubmitType": "ThankYouMessage",
  "formSubmitRedirectURL": "https://example.com/thank-you",
  "formSubmitThanksMessage": "Thank you for booking!",
  "guestType": "count_only",
  "consentLabel": "I confirm that I want to receive content from this company using any contact information I provide.",
  "calendarCoverImage": "https://path-to-image.com",
  "lookBusyConfig": {
    "enabled": true,
    "lookBusyPercentage": 50
  },
  "appointmentPerSlot": 1,
  "appointmentPerDay": 8
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**calendar**objectrequiredCalendar details

```json
{
  "calendar": {
    "id": "0TkCdp9PfvLeWKYRRvIz",
    "name": "test calendar",
    "locationId": "ocQHyuzHvysMo5N5VsXc"
  }
}
```
