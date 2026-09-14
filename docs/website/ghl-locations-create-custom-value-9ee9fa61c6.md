> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/create-custom-value). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Custom Value

**Endpoint:** `POST /locations/:locationId/customValues`

Create Custom Value

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

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringrequired**value**stringrequired

```json
{
  "name": "Custom Field Name",
  "value": "Value"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**customValue**object

```json
{
  "customValue": {
    "id": "rWQ709Pb62syqGLceg1x",
    "name": "Custom Field",
    "fieldKey": "{{ custom_values.custom_field }}",
    "value": "Value",
    "locationId": "rWQ709Pb6dasyqGLceg1x"
  }
}
```
