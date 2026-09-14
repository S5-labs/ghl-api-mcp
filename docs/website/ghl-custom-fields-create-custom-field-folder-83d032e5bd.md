> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/create-custom-field-folder). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Custom Field Folder

**Endpoint:** `POST /custom-fields/folder`

Create Custom Field Folder

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

**objectKey**stringrequiredThe key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.**name**stringrequiredField name**locationId**stringrequiredLocation Id

```json
{
  "objectKey": "custom_object.pet",
  "name": "Name",
  "locationId": "ve9EPM428h8vShlRW1KT"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredUnique identifier of the object**objectKey**stringrequiredThe key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.**locationId**stringrequiredLocation Id**name**stringrequiredField name

```json
{
  "id": "string",
  "objectKey": "custom_object.pet",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "name": "Name"
}
```
