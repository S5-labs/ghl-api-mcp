> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/create-custom-object-schema). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Custom Object

**Endpoint:** `POST /objects/`

Allows you to create a custom object schema. To understand objects and records, please have a look at the documentation here : [https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0)

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

**labels**objectrequiredThis is what your custom object will be called. These labels will be used to display your custom object on the UI**key**stringrequiredkey that would be used to refer the Custom Object internally (lowercase + underscore_separated). 'custom_objects.' would be added as prefix by default**description**stringPet Object`s description**locationId**stringrequiredLocation Id**primaryDisplayPropertyDetails**objectrequiredPrimary property which will be displayed on the record page

```json
{
  "labels": {
    "singular": "Pet",
    "plural": "Pets"
  },
  "key": "custom_objects.pet",
  "description": "These are non vaccinated pets",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "primaryDisplayPropertyDetails": {
    "key": "custom_objects.pet.name",
    "name": "Pet name",
    "dataType": "TEXT"
  }
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
