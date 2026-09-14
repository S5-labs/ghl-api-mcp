> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/update-custom-object). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Object Schema By Key / Id

**Endpoint:** `PUT /objects/:key`

Update Custom Object Schema or standard object's like contact, opportunity, business searchable fields. To understand objects and records, please have a look at the documentation here : [https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0)

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**labels**objectThis is how your custom object will be displayed**description**stringnullablePet Object`s description**locationId**stringrequiredlocation id**searchableProperties**string[]requiredSearchable Fields: Provide the field key of your object that you want to search on, using the format (custom_object.<object_name>.<field_key>).

```json
{
  "labels": {
    "singular": "Pet",
    "plural": "Pets"
  },
  "description": "These are non vaccinated pets",
  "locationId": "632c34b4c9b7da3358ac9891",
  "searchableProperties": [
    "custom_objects.mad.mad",
    "custom_objects.mad.record_1",
    "custom_objects.mad.nn"
  ]
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**object**object

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
  }
}
```
