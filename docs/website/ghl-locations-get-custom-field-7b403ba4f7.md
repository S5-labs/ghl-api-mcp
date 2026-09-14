> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-field). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Custom Field

**Endpoint:** `GET /locations/:locationId/customFields/:id`

Get Custom Field

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

Custom Field Id or Field Key (e.g. "contact.first_name" or "opportunity.pipeline_id")

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**customField**object

```json
{
  "customField": {
    "id": "3sv6UEo51C9Bmpo1cKTq",
    "name": "pincode",
    "fieldKey": "contact.pincode",
    "placeholder": "Pin code",
    "dataType": "TEXT",
    "position": 0,
    "picklistOptions": [
      "first option"
    ],
    "picklistImageOptions": [],
    "isAllowedCustomOption": false,
    "isMultiFileAllowed": true,
    "maxFileLimit": 4,
    "locationId": "3sv6UEo51C9Bmpo1cKTq",
    "model": "opportunity"
  }
}
```
