> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-schedule). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update user availability schedule

**Endpoint:** `PUT /calendars/schedules/:id`

Modify an existing schedule by updating its rules, timezone, and name All fields are optional - only provided fields will be updated.

## Request

**Version**

string

required

API Version

Available options

`v3`

**id**

string

required

Unique identifier of the schedule to update

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringHuman-readable name for the schedule**rules**object[]Updated schedule rules defining when the schedule is active**timezone**stringUpdated timezone for the schedule (IANA timezone identifier)**Possible values:** Value must match regular expression `^[A-Za-z_]+/[A-Za-z_]+$`

```json
{
  "name": "Updated Business Hours",
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

Schedule updated successfully

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
