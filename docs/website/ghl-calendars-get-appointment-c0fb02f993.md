> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-appointment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Appointment

**Endpoint:** `GET /calendars/events/appointments/:eventId`

Get appointment by ID

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

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**event**objectCalendar event object

```json
{
  "event": {
    "id": "ocQHyuzHvysMo5N5VsXc",
    "calendarId": "CVokAlI8fgw4WjWoC3IS",
    "title": "Appointment with John"
  }
}
```
