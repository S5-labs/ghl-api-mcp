> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-slots). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Free Slots

**Endpoint:** `GET /calendars/:calendarId/free-slots`

Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.

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

Calendar Id

**startDate**

number

required

Start Date (**⚠️ Important:** Date range cannot be more than 31 days)

**endDate**

number

required

End Date (**⚠️ Important:** Date range cannot be more than 31 days)

**timezone**

string

The timezone in which the free slots are returned

**userId**

string

The user for whom the free slots are returned

**userIds**

string[]

The users for whom the free slots are returned

application/json

Availability map keyed by date (YYYY-MM-DD)

- application/json

- Schema
- Example (auto)

**Schema**

**property name***SlotsSchema

```json
{
  "2024-10-28": {
    "slots": [
      "2024-10-28T10:00:00-05:00",
      "2024-10-28T11:00:00-05:00"
    ]
  },
  "2024-10-29": {
    "slots": [
      "2024-10-29T10:00:00-05:00",
      "2024-10-29T14:30:00-05:00"
    ]
  }
}
```
