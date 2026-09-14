> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-service-catalog). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Service

**Endpoint:** `POST /calendars/services/catalog`

Create new service in a location.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**name**stringrequiredService name**slug**stringrequiredUnique URL-friendly identifier**staff**object[]requiredAssigned staff members (at least one required)**description**stringService description**eventColor**stringService event color (hex)**coverImage**stringService cover image URL**serviceCategoryId**stringService category ID (uses default category if not provided)**payment**objectPayment details (default amount is 0, currency configured in Service Global Settings is used.)**serviceDuration**numberThis controls the duration of the appointment**serviceDurationUnit**stringDuration unitAvailable options`mins``hours`**preBuffer**numberPre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready**preBufferUnit**stringPre-buffer unitAvailable options`mins``hours`**postBuffer**numberPost-buffer: Additional time that can be added after an appointment, allowing for extra time to wrap up**postBufferUnit**stringPost-buffer unitAvailable options`mins``hours`**isPrivate**booleanWhether service is private (not shown publicly)**formId**stringCustom form ID (will be used to display the custom form on the booking page, if only one service is selected)**variations**object[]Service variations (pass empty array for no variations)

```json
{
  "locationId": "0007BWpSzSwfiuSl0tR2",
  "name": "Hair Styling",
  "slug": "hair-styling",
  "staff": [
    {
      "id": "65e5f6dfacf123513228d384"
    }
  ],
  "description": "Full hair styling session",
  "eventColor": "#66C61C",
  "coverImage": "https://example.com/cover.jpg",
  "serviceCategoryId": "65e5f6dfacf123513228d381",
  "payment": {
    "amount": 50,
    "deposit": 20,
    "depositType": "amount"
  },
  "serviceDuration": 30,
  "serviceDurationUnit": "mins",
  "preBuffer": 10,
  "preBufferUnit": "mins",
  "postBuffer": 15,
  "postBufferUnit": "mins",
  "isPrivate": false,
  "formId": "65e5f6dfacf123513228d390",
  "variations": [
    {
      "name": "Standard Haircut",
      "serviceDuration": 30,
      "payment": {
        "amount": 50
      }
    }
  ]
}
```

application/json

Service created successfully

- application/json

- Schema
- Example (auto)

**Schema**

**service**objectrequiredService details

```json
{
  "service": {
    "id": "65e5f6dfacf123513228d384",
    "locationId": "0007BWpSzSwfiuSl0tR2",
    "name": "Hair Styling"
  }
}
```
