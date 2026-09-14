> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-service-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Service Location

**Endpoint:** `DELETE /calendars/services/locations/:serviceLocationId`

Delete a service location by ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**serviceLocationId**

string

required

Unique Service Location ID

application/json

Service location deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess**message**stringSuccess message

```json
{
  "success": true,
  "message": "Service deleted successfully"
}
```
