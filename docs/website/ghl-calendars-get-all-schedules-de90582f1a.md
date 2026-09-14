> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-all-schedules). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List user availability schedule

**Endpoint:** `GET /calendars/schedules/search`

Retrieve user availability schedules based on various filters including location, calendar, and user. Supports pagination.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location ID to filter schedules by

**userId**

string

required

User ID to filter schedules by specific user

**calendarId**

string

Calendar ID for filtering schedules by specific calendar

**skip**

number

Number of items to skip for pagination

**Possible values:** `>= 0`

`0`

**limit**

number

Maximum number of items to return (max 500)

**Possible values:** `>= 1` and `<= 500`

`50`

application/json

Schedules retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**schedules**object[]requiredArray of schedules

```json
{
  "schedules": [
    {
      "id": "IkqiJlXJ7o9h61tCHHod",
      "name": "Business Hours Schedule",
      "locationId": "ocQHyuzHvysMo5N5VsXc"
    }
  ]
}
```
