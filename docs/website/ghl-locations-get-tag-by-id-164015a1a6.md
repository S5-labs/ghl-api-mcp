> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/get-tag-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get tag by id

**Endpoint:** `GET /locations/:locationId/tags/:tagId`

Get tag by id

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

**tagId**

string

required

Tag Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**tag**object

```json
{
  "tag": {
    "name": "minim aliquip anim",
    "locationId": "ve9EPM428h8vShlRW1KT",
    "id": "flGwEuzsfJOia1i1ikRN"
  }
}
```
