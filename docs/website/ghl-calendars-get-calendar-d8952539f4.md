> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-calendar). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Calendar

**Endpoint:** `GET /calendars/:calendarId`

Get calendar by ID

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

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**calendar**objectrequiredCalendar details

```json
{
  "calendar": {
    "id": "0TkCdp9PfvLeWKYRRvIz",
    "name": "test calendar",
    "locationId": "ocQHyuzHvysMo5N5VsXc"
  }
}
```
