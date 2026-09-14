> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-schedule). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create user availability schedule

**Endpoint:** `POST /calendars/schedules`

Create new schedule with specified rules, timezone, location, user and calendar associations.

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

**rules**object[]Schedule rules defining when the schedule is active**timezone**stringrequiredTimezone for the schedule (IANA timezone identifier)**Possible values:** Value must match regular expression `^[A-Za-z_]+/[A-Za-z_]+$`**locationId**stringrequiredLocation ID where this schedule applies**name**stringrequiredHuman-readable name for the schedule**userId**stringrequiredUser ID associated with the schedule**calendarIds**string[]Calendar IDs associated with the schedule

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
  "timezone": "America/New_York",
  "locationId": "IkqiJlXJ7o9h61tCHHod",
  "name": "Business Hours Schedule",
  "userId": "IkqiJlXJ7o9h61tCHHod",
  "calendarIds": [
    "WvVX9LpvlBO6K506xLbp",
    "XyZ8MnQrStUvWxYzAbCdEf"
  ]
}
```

application/json

Schedule created successfully

- application/json

- Schema
- Example (auto)

**Schema**

**schedule**objectrequiredSchedule

```json
{
  "schedule": {
    "id": "IkqiJlXJ7o9h61tCHHod",
    "name": "Business Hours Schedule",
    "locationId": "ocQHyuzHvysMo5N5VsXc"
  }
}
```
