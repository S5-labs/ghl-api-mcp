> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/fetch-calendar-resources). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Calendar Resources

**Endpoint:** `GET /calendars/resources/:resourceType`

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

List calendar resources by resource type and location ID (Services V1)

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

**locationId**

string

required

Location ID

**limit**

number

required

Maximum number of results

**skip**

number

required

Number of results to skip

application/json

Calendar resources listed

- application/json

- Schema
- Example (auto)

**Schema**

- Array [
- ]

```json
[
  {
    "locationId": "ocQHyuzHvysMo5N5VsXc",
    "name": "yoga room",
    "resourceType": "rooms",
    "isActive": true,
    "description": "Spacious yoga studio",
    "quantity": 3,
    "outOfService": 0,
    "capacity": 85,
    "calendarIds": [
      "Jsj0xnlDDjw0SuvX1J13",
      "oCM5feFC86FAAbcO7lJK"
    ]
  }
]
```
