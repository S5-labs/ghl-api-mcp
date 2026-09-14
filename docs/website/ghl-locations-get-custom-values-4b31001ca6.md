> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-values). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Custom Values

**Endpoint:** `GET /locations/:locationId/customValues`

Get Custom Values

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

**customValues**object[]

```json
{
  "customValues": [
    {
      "id": "rWQ709Pb62syqGLceg1x",
      "name": "Custom Field",
      "fieldKey": "{{ custom_values.custom_field }}",
      "value": "Value",
      "locationId": "rWQ709Pb6dasyqGLceg1x"
    }
  ]
}
```
