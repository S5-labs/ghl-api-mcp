> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-bookings). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Service Bookings

**Endpoint:** `GET /calendars/services/bookings`

Retrieve service bookings for a location within a given date range, with an optional service location filter.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location ID

**startTime**

string

required

Start Time (timestamp in milliseconds as string)

**endTime**

string

required

End Time (timestamp in milliseconds as string)

**timezone**

string

Timezone

**serviceLocationId**

string

Service Location ID

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**bookings**object[]requiredService Bookings

```json
{
  "bookings": [
    {
      "bookingId": "7NkT25Vor1v4aQatFsv2",
      "locationId": "0007BWpSzSwfiuSl0tR2",
      "contactId": "9NkT25Vor1v4aQatFsv2",
      "serviceLocationId": "65e5f6dfacf123513228d384",
      "title": "John Doe - Hair Styling",
      "startTime": "2023-09-25T16:00:00+05:30",
      "endTime": "2023-09-25T16:30:00+05:30",
      "timezone": "America/New_York",
      "status": "confirmed",
      "deleted": false
    }
  ]
}
```
