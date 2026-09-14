> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-schedule). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete user availability schedule

**Endpoint:** `DELETE /calendars/schedules/:id`

Permanently remove a schedule and all its associated rules. This action cannot be undone.

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

Unique identifier of the schedule to delete

application/json

Schedule deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanWhether the deletion was successful

```json
{
  "success": true
}
```
