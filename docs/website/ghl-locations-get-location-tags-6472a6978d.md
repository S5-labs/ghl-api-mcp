> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/get-location-tags). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Tags

**Endpoint:** `GET /locations/:locationId/tags`

Get Sub-Account (Formerly Location) Tags

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

**tags**object[]

```json
{
  "tags": [
    {
      "name": "minim aliquip anim",
      "locationId": "ve9EPM428h8vShlRW1KT",
      "id": "flGwEuzsfJOia1i1ikRN"
    }
  ]
}
```
