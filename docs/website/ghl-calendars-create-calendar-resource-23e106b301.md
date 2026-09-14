> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-calendar-resource). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Calendar Resource

**Endpoint:** `POST /calendars/resources/:resourceType`

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

Create calendar resource by resource type (Services V1)

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**name**stringrequiredName of the calendar resource**description**stringrequiredDescription of the calendar resource**quantity**numberrequiredQuantity of the equipment.**outOfService**numberrequiredQuantity of the out of service equipment.**capacity**numberrequiredCapacity of the room.**calendarIds**string[]requiredService calendar IDs to be mapped with the resource. `One equipment can only be mapped with one service calendar.` One room can be mapped with multiple service calendars.**Possible values:** `<= 100`

```json
{
  "locationId": "ocQHyuzHvysMo5N5VsXc",
  "name": "Projector",
  "description": "Main conference room projector",
  "quantity": 5,
  "outOfService": 1,
  "capacity": 20,
  "calendarIds": [
    "Jsj0xnlDDjw0SuvX1J13"
  ]
}
```

application/json

Calendar resource created

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
