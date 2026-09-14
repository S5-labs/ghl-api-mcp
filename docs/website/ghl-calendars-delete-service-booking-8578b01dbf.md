> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-service-booking). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Service Booking

**Endpoint:** `DELETE /calendars/services/bookings/:bookingId`

Delete a service booking by ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**bookingId**

string

required

Unique Service Booking ID

application/json

Booking deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates if the deletion was successful**message**stringrequiredResponse message

```json
{
  "success": true,
  "message": "Service booking deleted successfully"
}
```
