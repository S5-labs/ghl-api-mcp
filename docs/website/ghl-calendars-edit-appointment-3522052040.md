> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/edit-appointment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Appointment

**Endpoint:** `PUT /calendars/events/appointments/:eventId`

Update appointment

## Request

**Version**

string

required

API Version

Available options

`v3`

**eventId**

string

required

Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**title**stringTitle**meetingLocationType**stringMeeting location type. If `address` is provided in the request body, the `meetingLocationType` defaults to **custom**. Available options`custom``zoom``gmeet``phone``address``ms_teams``google`**meetingLocationId**stringThe unique identifier for the meeting location. This value can be found in `calendar.locationConfigurations`or `calendar.teamMembers[].locationConfigurations` **Default value:**`default`**overrideLocationConfig**booleanFlag to override location config **false** - If only `meetingLocationId` is provided **true** - If only `meetingLocationType` is provided **appointmentStatus**stringAppointment statusAvailable options`new``confirmed``cancelled``showed``noshow``invalid``completed``active`**assignedUserId**stringAssigned User Id**description**stringAppointment Description**address**stringAppointment Address**ignoreDateRange**booleanIf set to true, the minimum scheduling notice and date range would be ignored**toNotify**booleanIf set to false, the automations will not run. Defaults to true**Default value:**`true`**ignoreFreeSlotValidation**booleanIf true the time slot validation would be avoided for any appointment creation (even the ignoreDateRange)**rrule**stringRRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true.**calendarId**stringCalendar Id**startTime**stringStart Time**endTime**stringEnd Time

```json
{
  "title": "Test Event",
  "meetingLocationType": "custom",
  "meetingLocationId": "custom_0",
  "overrideLocationConfig": true,
  "appointmentStatus": "confirmed",
  "assignedUserId": "0007BWpSzSwfiuSl0tR2",
  "description": "Booking a call to discuss the project",
  "address": "Zoom",
  "ignoreDateRange": false,
  "toNotify": false,
  "ignoreFreeSlotValidation": true,
  "rrule": "RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5",
  "calendarId": "CVokAlI8fgw4WYWoCtQz",
  "startTime": "2021-06-23T03:30:00+05:30",
  "endTime": "2021-06-23T04:30:00+05:30"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**calendarId**stringrequiredCalendar Id**locationId**stringrequiredLocation Id**contactId**stringrequiredContact Id**startTime**stringStart Time**endTime**stringEnd Time**title**stringTitle**meetingLocationType**stringMeeting Location Type**Default value:**`default`**appointmentStatus**stringAppointment statusAvailable options`new``confirmed``cancelled``showed``noshow``invalid``active``completed`**assignedUserId**stringAssigned User Id**address**stringAppointment Address**isRecurring**booleantrue if the event is recurring otherwise false**rrule**stringRRULE as per the iCalendar (RFC 5545) specification for recurring events**dateAdded**stringrequiredDate Added**dateUpdated**stringrequiredDate Updated**id**stringrequiredId

```json
{
  "calendarId": "CVokAlI8fgw4WYWoCtQz",
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "contactId": "0007BWpSzSwfiuSl0tR2",
  "startTime": "2021-06-23T03:30:00+05:30",
  "endTime": "2021-06-23T04:30:00+05:30",
  "title": "Test Event",
  "meetingLocationType": "custom",
  "appointmentStatus": "confirmed",
  "assignedUserId": "0007BWpSzSwfiuSl0tR2",
  "address": "Zoom",
  "isRecurring": "true",
  "rrule": "RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5",
  "dateAdded": "2021-06-23T03:30:00+05:30",
  "dateUpdated": "2021-06-23T04:30:00+05:30",
  "id": "0TkCdp9PfvLeWKYRRvIz"
}
```
