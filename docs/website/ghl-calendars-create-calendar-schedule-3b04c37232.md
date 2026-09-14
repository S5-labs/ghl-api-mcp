> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-calendar-schedule). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create event calendar availability schedule

**Endpoint:** `POST /calendars/schedules/event-calendar/:calendarId`

Create a new availability schedule specifically for an event calendar. The calendar ID is provided in the path, and schedule rules and timezone are provided in the request body.

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

- application/json

- Body
- Example (auto)

### Body**required**

**rules**object[]requiredSchedule rules defining when the schedule is active**timezone**stringrequiredTimezone for the schedule (IANA timezone identifier)**Possible values:** Value must match regular expression `^[A-Za-z_]+/[A-Za-z_]+$`

```json
{
  "rules": [
    {
      "type": "wday",
      "day": "monday",
      "intervals": [
        {
          "from": "09:00",
          "to": "17:00"
        }
      ]
    }
  ],
  "timezone": "America/New_York"
}
```

application/json

Schedule created successfully for the event calendar

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
