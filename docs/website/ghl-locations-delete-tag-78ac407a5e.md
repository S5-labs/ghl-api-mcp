> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-tag). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete tag

**Endpoint:** `DELETE /locations/:locationId/tags/:tagId`

Delete tag

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

**succeded**boolean

```json
{
  "succeded": true
}
```
