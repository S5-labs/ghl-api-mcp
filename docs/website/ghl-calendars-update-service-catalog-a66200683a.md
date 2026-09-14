> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-service-catalog). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Service

**Endpoint:** `PUT /calendars/services/catalog/:serviceId`

Update service by ID.

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

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringService name**description**stringService description**slug**stringUnique URL-friendly identifier**eventColor**stringService event color (hex)**coverImage**stringService cover image URL**serviceCategoryId**stringService category ID**payment**objectPayment details (currency configured in Service Global Settings is used.)**serviceDuration**numberThis controls the duration of the appointment**serviceDurationUnit**stringDuration unitAvailable options`mins``hours`**preBuffer**numberPre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready**preBufferUnit**stringPre-buffer unitAvailable options`mins``hours`**postBuffer**numberPost-buffer: Additional time that can be added after an appointment, allowing for extra time to wrap up**postBufferUnit**stringPost-buffer unitAvailable options`mins``hours`**isPrivate**booleanWhether service is private (not shown publicly)**formId**stringCustom form ID (will be used to display the custom form on the booking page, if only one service is selected)**staff**object[]Assigned staff members**variations**object[]Service variations (an empty array removes all variations). Include an id to update an existing variation; omit the id to create a new one.

```json
{
  "name": "Hair Styling",
  "description": "Full hair styling session",
  "slug": "hair-styling",
  "eventColor": "#66C61C",
  "coverImage": "https://example.com/cover.jpg",
  "serviceCategoryId": "65e5f6dfacf123513228d381",
  "payment": {
    "amount": 50,
    "deposit": 20,
    "depositType": "amount"
  },
  "serviceDuration": 60,
  "serviceDurationUnit": "mins",
  "preBuffer": 10,
  "preBufferUnit": "mins",
  "postBuffer": 15,
  "postBufferUnit": "mins",
  "isPrivate": false,
  "formId": "65e5f6dfacf123513228d390",
  "staff": [
    {
      "id": "65e5f6dfacf123513228d384"
    }
  ],
  "variations": [
    {
      "id": "65e5f6dfacf123513228d385",
      "name": "Standard Haircut",
      "serviceDuration": 30
    }
  ]
}
```

application/json

Service updated successfully

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
