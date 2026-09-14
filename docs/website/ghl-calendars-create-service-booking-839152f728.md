> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-service-booking). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Service Booking

**Endpoint:** `POST /calendars/services/bookings`

Create a new service booking

## Request

**Version**

string

required

API Version

Available options

`v3`

**overrideAvailability**

boolean

If true the time slot validation would be avoided for any booking creation/update (even the skipSchedulingNotice)

`false`

**skipSchedulingNotice**

boolean

If set to true, the minimum scheduling notice and date range would be ignored

`false`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**contactId**stringrequiredContact ID**startTime**stringrequiredStart Time**endTime**stringrequiredEnd Time**timezone**stringrequiredTimezone**services**object[]requiredServices**serviceLocationId**stringService Location ID (If not provided, then the default service location will be used)**meetingLocation**stringMeeting Location (If service location is an ask the booker, then the meeting location is required)**title**stringService Booking Title**status**stringStatus. (If not provided, the status configured in Service Global Settings will be used.)Available options`confirmed``new`

```json
{
  "locationId": "0007BWpSzSwfiuSl0tR2",
  "contactId": "9NkT25Vor1v4aQatFsv2",
  "startTime": "2021-06-23T03:30:00+05:30",
  "endTime": "2023-09-25T16:30:00+05:30",
  "timezone": "America/New_York",
  "services": [
    {
      "id": "a3b4c5d6e7f8901234567890",
      "staffId": "8MkU36Wps2w5bRbuGtw3"
    }
  ],
  "serviceLocationId": "65e5f6dfacf123513228d384",
  "meetingLocation": "123 Main St, Anytown, USA",
  "title": "Service Appointment",
  "status": "confirmed"
}
```

application/json

Booking created successfully

- application/json

- Schema
- Example (auto)

**Schema**

**bookingId**stringrequiredBooking ID**locationId**stringrequiredLocation ID**contactId**stringrequiredContact ID**serviceLocationId**stringrequiredService Location ID**title**stringrequiredService Booking Title**startTime**stringrequiredStart Time**endTime**stringrequiredEnd Time**services**object[]requiredServices**timezone**stringrequiredTimezone**status**stringrequiredStatus**deleted**booleanrequiredTells if the booking is deleted**dateAdded**stringrequiredDate Added**dateUpdated**stringrequiredDate Updated**createdBy**objectrequiredBooking booked by metadata**meetingLocation**stringMeeting Location (If service location is an ask the booker, then the meeting location is used for the booking)**messages**array[]Optional informative or warning messages (e.g. meeting location ignored for non-ask-booker locations)

```json
{
  "bookingId": "7NkT25Vor1v4aQatFsv2",
  "locationId": "0007BWpSzSwfiuSl0tR2",
  "contactId": "9NkT25Vor1v4aQatFsv2",
  "serviceLocationId": "65e5f6dfacf123513228d384",
  "title": "John Doe - Hair Styling",
  "startTime": "2023-09-25T16:00:00+05:30",
  "endTime": "2023-09-25T16:30:00+05:30",
  "services": [
    {
      "id": "68e5f6dfacf123513228d384",
      "serviceCategoryId": "3c4d5e6f7890123456789abc",
      "serviceStaffId": "7NkT25Vor1v4aQatFsv2",
      "serviceStartTime": "2023-09-25T16:00:00+05:30",
      "serviceEndTime": "2023-09-25T16:30:00+05:30"
    }
  ],
  "timezone": "America/New_York",
  "status": "confirmed",
  "deleted": false,
  "dateAdded": "2023-09-25T16:00:00+05:30",
  "dateUpdated": "2023-09-25T16:00:00+05:30",
  "createdBy": {
    "userId": "7NkT25Vor1v4aQatFsv2",
    "source": "public_api"
  },
  "meetingLocation": "123 Main St, Anytown, USA",
  "messages": [
    "Meeting location is not supported for the selected service location and has been ignored."
  ]
}
```
