> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/add-calendar-to-schedule). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Apply user availability schedule to a calendar

**Endpoint:** `PUT /calendars/schedules/:id/associations/:calendarId`

Associates a calendar with the given schedule by adding the calendarId to a schedule

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

**calendarId**

string

required

Unique identifier of the team calendar to add to the schedule

application/json

Calendar successfully added to schedule

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanWhether the operation was successful

```json
{
  "success": true
}
```
