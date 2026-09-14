> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/associations/get-association-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get association by ID

**Endpoint:** `GET /associations/:associationId`

Using this api you can get SYSTEM_DEFINED / USER_DEFINED association by id

## Request

**Version**

string

required

API Version

Available options

`v3`

**associationId**

string

required

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**locationId**stringrequired**id**stringrequired**key**stringrequiredFirst Objects Association Label (custom_objects.children)**firstObjectLabel**objectrequiredFirst Objects Association Label (custom_objects.children)**firstObjectKey**objectrequiredFirst Objects Key**secondObjectLabel**objectrequiredSecond Object Association Label (contact)**secondObjectKey**objectrequiredSecond Objects Key**associationType**objectrequiredAssociation Type can be USER_DEFINED or SYSTEM_DEFINED

```json
{
  "locationId": "string",
  "id": "ve9EPM428h8vShlRW1KT",
  "key": "student",
  "firstObjectLabel": "student",
  "firstObjectKey": "custom_objects.children",
  "secondObjectLabel": "Teacher",
  "secondObjectKey": "contact",
  "associationType": "USER_DEFINED"
}
```
