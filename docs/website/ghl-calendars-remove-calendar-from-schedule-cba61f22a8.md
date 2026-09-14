> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/remove-calendar-from-schedule). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Remove user availability schedule from a calendar

**Endpoint:** `DELETE /calendars/schedules/:id/associations/:calendarId`

Removes the association between a team calendar and the given schedule by removing the calendarId from the schedule

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

Unique identifier of the calendar to remove from the schedule

application/json

Calendar successfully removed from schedule

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
