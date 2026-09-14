> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/links/get-link-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Link by ID

**Endpoint:** `GET /links/id/:linkId`

Get a single link by its ID

## Request

**Authorization**

string

required

Access Token

**Version**

string

required

API Version

Available options

`v3`

**linkId**

string

required

Link Id

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

**link**objectThe trigger link object

```json
{
  "link": {
    "id": "n4AriwEnFrGh3tu08W0U",
    "name": "first tag",
    "redirectTo": "https://www.google.com/",
    "fieldKey": "{{trigger_link.n4AriwEnFrGh3tu08W0U}}",
    "locationId": "ve9EPM428h8vShlRW1KT"
  }
}
```
