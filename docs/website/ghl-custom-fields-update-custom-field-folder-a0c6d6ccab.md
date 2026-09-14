> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/update-custom-field-folder). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Custom Field Folder Name

**Endpoint:** `PUT /custom-fields/folder/:id`

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

**id**

string

required

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringrequiredField name**locationId**stringrequiredLocation Id

```json
{
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
