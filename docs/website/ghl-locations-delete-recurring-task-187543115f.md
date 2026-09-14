> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-recurring-task). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Recurring Task

**Endpoint:** `DELETE /locations/:locationId/recurring-tasks/:id`

Delete Recurring Task

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

Recurring Task Id

**locationId**

string

required

Location Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredRecurring Task Id**success**booleanrequiredSuccess

```json
{
  "id": "sx6wyHhbFdRXh302Lunr",
  "success": true
}
```
