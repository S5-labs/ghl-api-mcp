> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-service-catalog). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Service

**Endpoint:** `DELETE /calendars/services/catalog/:serviceId`

Delete service by ID.

## Request

**Version**

string

required

API Version

Available options

`v3`

**serviceId**

string

required

Service ID

application/json

Service deleted successfully

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
