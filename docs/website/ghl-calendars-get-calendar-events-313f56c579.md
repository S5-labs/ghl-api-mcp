> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-calendar-events). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Calendar Events

**Endpoint:** `GET /calendars/events`

Get Calendar Events

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

Location Id

**userId**

string

User Id - Owner of an appointment. Either of userId, groupId or calendarId is required

**calendarId**

string

Either of calendarId, userId or groupId is required

**groupId**

string

Either of groupId, calendarId or userId is required

**startTime**

string

required

Start Time (in millis)

**endTime**

string

required

End Time (in millis)

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**events**object[]List of calendar events

```json
{
  "events": [
    {
      "id": "ocQHyuzHvysMo5N5VsXc",
      "calendarId": "CVokAlI8fgw4WjWoC3IS",
      "title": "Appointment with John"
    }
  ]
}
```
