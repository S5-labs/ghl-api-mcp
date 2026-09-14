> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-calendars). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Calendars

**Endpoint:** `GET /calendars/`

Get all calendars in a location.

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

Location Id

**groupId**

string

Group Id

**showDrafted**

boolean

Show drafted

`true`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**calendars**object[]List of calendars

```json
{
  "calendars": [
    {
      "id": "0TkCdp9PfvLeWKYRRvIz",
      "name": "test calendar",
      "locationId": "ocQHyuzHvysMo5N5VsXc"
    }
  ]
}
```
