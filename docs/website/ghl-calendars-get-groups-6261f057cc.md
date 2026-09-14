> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-groups). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Groups

**Endpoint:** `GET /calendars/groups`

Get all calendar groups in a location.

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

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**groups**object[]List of calendar groups

```json
{
  "groups": [
    {
      "locationId": "ocQHyuzHvysMo5N5VsXc",
      "name": "group a",
      "slug": "15-mins"
    }
  ]
}
```
