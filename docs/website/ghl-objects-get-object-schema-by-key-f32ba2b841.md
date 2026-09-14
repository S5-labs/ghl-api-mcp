> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-schema-by-key). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Object Schema by key / id

**Endpoint:** `GET /objects/:key`

Retrieve Object Schema by key or ID. This will return the schema of the custom object, including all its fields and properties. Supported objects include contact, opportunity, business and custom objects.To understand objects and records, please have a look the documentation here : [https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0)

## Request

**Version**

string

required

API Version

Available options

`v3`

**key**

string

required

key of the custom or standard object. For custom objects, the key must include the prefix “custom_objects.”. This key can be found on the Object Details page under Settings in the UI.

**locationId**

string

required

location id of the sub account

**fetchProperties**

string

Fetch Properties , Fetches all the standard / custom fields of the object when set to true

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**object**object**cache**booleanrequiredIs the response served from cache**fields**object[]

```json
{
  "object": {
    "id": "661c06b4ffde146bdb469442",
    "standard": false,
    "key": "custom_objects.pet",
    "labels": {
      "singular": "Pet",
      "plural": "Pets"
    },
    "description": "These are non vaccinated pets",
    "locationId": "Q9DT3OAqEXDLYuob1G32",
    "primaryDisplayProperty": "custom_objects.pet.name",
    "dateAdded": "2024-07-29T15:51:28.071Z",
    "dateUpdated": "2024-07-29T15:51:28.071Z",
    "type": "The Object type can either USER_DEFINED or SYSTEM_DEFINED"
  },
  "cache": true,
  "fields": [
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
  ]
}
```
