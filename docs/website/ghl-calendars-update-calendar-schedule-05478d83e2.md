> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-calendar-schedule). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update event calendar availability schedule

**Endpoint:** `PUT /calendars/schedules/event-calendar/:calendarId`

Update the availability schedule for a specific event calendar. Only provided fields will be updated. The calendar ID is provided in the path.

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

**rules**object[]Updated schedule rules defining when the schedule is active**timezone**stringUpdated timezone for the schedule (IANA timezone identifier)**Possible values:** Value must match regular expression `^[A-Za-z_]+/[A-Za-z_]+$`

```json
{
  "rules": [
    {
      "type": "wday",
      "day": "monday",
      "intervals": [
        {
          "from": "08:00",
          "to": "18:00"
        }
      ]
    }
  ],
  "timezone": "America/Los_Angeles"
}
```

application/json

Schedule updated successfully for the event calendar

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
