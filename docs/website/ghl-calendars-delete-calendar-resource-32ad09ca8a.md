> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-calendar-resource). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Calendar Resource

**Endpoint:** `DELETE /calendars/resources/:resourceType/:id`

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

Delete calendar resource by ID (Services V1)

## Request

**Version**

string

required

API Version

Available options

`v3`

**resourceType**

string

required

Calendar Resource Type

Available options

`equipments`

`rooms`

**id**

string

required

Calendar Resource ID

application/json

Calendar resource deleted

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanSuccess

```json
{
  "success": "true"
}
```
