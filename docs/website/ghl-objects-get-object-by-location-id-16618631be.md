> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-by-location-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all objects for a location

**Endpoint:** `GET /objects/`

Get all objects for a location. Supported Objects are contact, opportunity, business and custom objects.To understand objects and records, please have a look at the documentation here : [https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0)

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

location id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**objects**object[]

```json
{
  "objects": [
    {
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
  ]
}
```
