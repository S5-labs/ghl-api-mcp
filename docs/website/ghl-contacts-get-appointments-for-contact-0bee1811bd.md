> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-appointments-for-contact). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Appointments for Contact

**Endpoint:** `GET /contacts/:contactId/appointments`

Get Appointments for Contact

## Request

**Version**

string

required

API Version

Available options

`v3`

**contactId**

string

required

Contact Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**events**object[]List of appointments

```json
{
  "events": [
    {
      "id": "YS3jaqqeehkR2Is80miy",
      "calendarId": "YlWd2wuCAZQzh2cH1fVZ",
      "status": "booked",
      "title": "Test",
      "assignedUserId": "YlWd2wuCAZQzh2cH1fVZ",
      "notes": "test",
      "startTime": "2021-07-16 11:00:00",
      "endTime": "2021-07-16 11:30:00"
    }
  ]
}
```
