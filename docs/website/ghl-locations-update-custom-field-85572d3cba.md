> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/update-custom-field). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Custom Field

**Endpoint:** `PUT /locations/:locationId/customFields/:id`

Update Custom Field

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

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringrequired**placeholder**string**acceptedFormat**string[]**isMultipleFile**boolean**maxNumberOfFiles**number**textBoxListOptions**object[]**position**number**Default value:**`0`**model**stringModel of the custom field you want to updateAvailable options`contact``opportunity`

```json
{
  "name": "Custom Field",
  "placeholder": "Placeholder Text",
  "acceptedFormat": [
    ".pdf",
    ".docx",
    ".jpeg"
  ],
  "isMultipleFile": false,
  "maxNumberOfFiles": 2,
  "textBoxListOptions": [
    {
      "label": "First",
      "prefillValue": ""
    },
    {
      "label": "First",
      "prefillValue": ""
    }
  ],
  "position": 0,
  "model": "opportunity"
}
```

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
