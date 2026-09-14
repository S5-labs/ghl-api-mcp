> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-calendar-resource). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Calendar Resource

**Endpoint:** `GET /calendars/resources/:resourceType/:id`

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

Get calendar resource by ID (Services V1)

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

Calendar resource fetched

- application/json

- Schema
- Example (auto)

**Schema**

**locationId**stringrequiredLocation ID of the resource**name**stringrequiredName of the resource**resourceType**stringrequiredType of the calendar resourceAvailable options`equipments``rooms`**isActive**booleanrequiredWhether the resource is active**description**stringDescription of the resource**quantity**numberQuantity of the resource**outOfService**numberIndicates if the resource is out of service**capacity**numberCapacity of the resource**calendarIds**string[]requiredCalendar IDs

```json
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
```
