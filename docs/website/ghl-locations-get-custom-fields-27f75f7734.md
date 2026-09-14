> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-fields). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Custom Fields

**Endpoint:** `GET /locations/:locationId/customFields`

Get Custom Fields

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

**model**

string

Model of the custom field you want to retrieve

Available options

`contact`

`opportunity`

`all`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**customFields**object[]

```json
{
  "customFields": [
    {
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
  ]
}
```
