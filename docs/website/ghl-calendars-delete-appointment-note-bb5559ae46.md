> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-appointment-note). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Note

**Endpoint:** `DELETE /calendars/appointments/:appointmentId/notes/:noteId`

Delete Note

## Request

**Version**

string

required

API Version

Available options

`v3`

**appointmentId**

string

required

Appointment ID

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanWhether the note was successfully deleted

```json
{
  "success": true
}
```
