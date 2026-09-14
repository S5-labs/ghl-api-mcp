> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-locations). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Service Locations

**Endpoint:** `GET /calendars/services/locations`

Get all service locations

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location ID

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**serviceLocations**object[]requiredList of service locations

```json
{
  "serviceLocations": [
    {
      "id": "65e5f6dfacf123513228d384",
      "locationId": "0007BWpSzSwfiuSl0tR2",
      "name": "Main Office"
    }
  ]
}
```
