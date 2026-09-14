> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-block-slot). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Block Slot

**Endpoint:** `POST /calendars/events/block-slots`

Create block slot

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

**title**stringTitle**calendarId**stringrequiredEither calendarId or assignedUserId can be set, not both.**assignedUserId**stringEither calendarId or assignedUserId can be set, not both.**locationId**stringrequiredLocation Id**startTime**stringStart Time**endTime**stringEnd Time

```json
{
  "title": "Test Event",
  "calendarId": "CVokAlI8fgw4WYWoCtQz",
  "assignedUserId": "CVokAlI8fgw4WYWoCtQz",
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "startTime": "2021-06-23T03:30:00+05:30",
  "endTime": "2021-06-23T04:30:00+05:30"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredId**locationId**stringrequiredLocation Id**title**stringrequiredTitle**startTime**objectrequiredStart Time**endTime**objectrequiredEnd Time**calendarId**stringCalendar id**assignedUserId**stringAssigned User Id

```json
{
  "id": "0TkCdp9PfvLeWKYRRvIz",
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "title": "My event",
  "startTime": "2021-06-23T03:30:00+05:30",
  "endTime": "2021-06-23T04:30:00+05:30",
  "calendarId": "CVokAlI8fgw4WYWoCtQz",
  "assignedUserId": "0007BWpSzSwfiuSl0tR2"
}
```
