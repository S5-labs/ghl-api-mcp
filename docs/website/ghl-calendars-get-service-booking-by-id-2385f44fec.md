> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-booking-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Service Booking by ID

**Endpoint:** `GET /calendars/services/bookings/:bookingId`

Get a specific service booking by ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**bookingId**

string

required

Unique Service Booking ID

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**bookingId**stringrequiredBooking ID**locationId**stringrequiredLocation ID**contactId**stringrequiredContact ID**serviceLocationId**stringrequiredService Location ID**title**stringrequiredService Booking Title**startTime**stringrequiredStart Time**endTime**stringrequiredEnd Time**services**object[]requiredServices**timezone**stringrequiredTimezone**status**stringrequiredStatus**deleted**booleanrequiredTells if the booking is deleted**dateAdded**stringrequiredDate Added**dateUpdated**stringrequiredDate Updated**createdBy**objectrequiredBooking booked by metadata**meetingLocation**stringMeeting Location (If service location is an ask the booker, then the meeting location is used for the booking)

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
  "meetingLocation": "123 Main St, Anytown, USA"
}
```
