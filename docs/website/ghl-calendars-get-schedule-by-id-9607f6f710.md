> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-schedule-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get user availability schedule

**Endpoint:** `GET /calendars/schedules/:id`

Retrieve a specific schedule by its unique identifier. Returns detailed information including rules, timezone, and associated calendars/users.

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

Unique identifier of the schedule

application/json

Schedule found and retrieved successfully

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
