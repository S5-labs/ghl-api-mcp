> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-services-catalog). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Services

**Endpoint:** `GET /calendars/services/catalog`

Get all services in a location.

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

**serviceCategoryId**

string

Filter by service category ID

**isPrivate**

boolean

Filter services: true = private only, false = public only, unset = all services

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**services**object[]requiredList of services

```json
{
  "services": [
    {
      "id": "65e5f6dfacf123513228d384",
      "locationId": "0007BWpSzSwfiuSl0tR2",
      "name": "Hair Styling"
    }
  ]
}
```
