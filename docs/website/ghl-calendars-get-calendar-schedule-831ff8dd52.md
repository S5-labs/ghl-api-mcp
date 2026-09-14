> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-calendar-schedule). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get event calendar availability schedule

**Endpoint:** `GET /calendars/schedules/event-calendar/:calendarId`

Retrieve the availability schedule for a specific event calendar. Returns the schedule associated with the calendar ID provided in the path.

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

Unique identifier of the event calendar

application/json

Schedule retrieved successfully for the event calendar

- application/json

- Schema
- Example (auto)

**Schema**

**schedule**objectrequiredThe event calendar schedule

```json
{
  "schedule": {
    "timezone": "America/New_York",
    "rules": [
      {
        "type": "weekday",
        "day": "monday",
        "intervals": [
          {
            "from": "09:00",
            "to": "17:00"
          }
        ]
      }
    ],
    "calendarId": "WvVX9LpvlBO6K506xLbp"
  }
}
```
