> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/create-custom-field). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Custom Field

**Endpoint:** `POST /custom-fields/`

Create Custom Field

info

Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation Id**name**stringField name**description**stringDescription of the field**placeholder**stringPlaceholder text for the field**showInForms**booleanrequiredWhether the field should be shown in forms**options**object[]Options for the field (Optional, valid only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST type)**acceptedFormats**stringAllowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, allAvailable options`.pdf``.docx``.doc``.jpg``.jpeg``.png``.gif``.csv``.xlsx``.xls``all`**dataType**stringrequiredType of field that you are trying to createAvailable options`TEXT``LARGE_TEXT``NUMERICAL``PHONE``MONETORY``CHECKBOX``SINGLE_OPTIONS``MULTIPLE_OPTIONS``DATE``TEXTBOX_LIST``FILE_UPLOAD``RADIO`**fieldKey**stringrequiredField key. For Custom Object it's formatted as "custom_object.{objectKey}.{fieldKey}". "custom_object" is a fixed prefix, "{objectKey}" is your custom object's identifier, and "{fieldKey}" is the unique field name within that object. Example: "custom_object.pet.name" for a "name" field in a "pet" custom object.**objectKey**stringrequiredThe key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.**maxFileLimit**numberMaximum file limit for uploads. Applicable only for fields with a data type of FILE_UPLOAD.**allowCustomOption**booleanDetermines if users can add a custom option value different from the predefined options in records for RADIO type fields. A custom value added in one record does not automatically become an option and will not appear as an option for other records.**parentId**stringrequiredID of the parent folder

```json
{
  "locationId": "ve9EPM428h8vShlRW1KT",
  "name": "Name",
  "description": "string",
  "placeholder": "string",
  "showInForms": true,
  "options": [
    {
      "key": "string",
      "label": "string",
      "url": "string"
    }
  ],
  "acceptedFormats": ".pdf",
  "dataType": "TEXT",
  "fieldKey": "custom_object.pet.name",
  "objectKey": "custom_object.pet",
  "maxFileLimit": 2,
  "allowCustomOption": true,
  "parentId": "string"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**field**object

```json
{
  "field": {
    "locationId": "ve9EPM428h8vShlRW1KT",
    "name": "Name",
    "description": "string",
    "placeholder": "string",
    "showInForms": true,
    "options": [
      {
        "key": "string",
        "label": "string",
        "url": "string"
      }
    ],
    "acceptedFormats": ".pdf",
    "id": "string",
    "objectKey": "custom_object.pet",
    "dataType": "TEXT",
    "parentId": "3v34PM428h8vShlRW1KT",
    "fieldKey": "custom_object.pet.name",
    "allowCustomOption": true,
    "maxFileLimit": 2,
    "dateAdded": "2024-07-29T15:51:28.071Z",
    "dateUpdated": "2024-07-29T15:51:28.071Z"
  }
}
```
