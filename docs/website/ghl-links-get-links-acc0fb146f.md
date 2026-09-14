> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/links/get-links). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Links

**Endpoint:** `GET /links/`

Get Links

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

Location ID of the business profile

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**links**object[]List of trigger links

```json
{
  "links": [
    {
      "id": "n4AriwEnFrGh3tu08W0U",
      "name": "first tag",
      "redirectTo": "https://www.google.com/",
      "fieldKey": "{{trigger_link.n4AriwEnFrGh3tu08W0U}}",
      "locationId": "ve9EPM428h8vShlRW1KT"
    }
  ]
}
```
