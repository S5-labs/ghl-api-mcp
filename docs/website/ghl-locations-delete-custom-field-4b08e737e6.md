> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-custom-field). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Custom Field

**Endpoint:** `DELETE /locations/:locationId/customFields/:id`

Delete Custom Field

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

**id**

string

required

Custom Field Id

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
