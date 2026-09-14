> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-catalog-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Service by ID

**Endpoint:** `GET /calendars/services/catalog/:serviceId`

Get service by ID.

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

Successful response

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
