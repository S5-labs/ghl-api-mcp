> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/associations/create-association). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Association

**Endpoint:** `POST /associations/`

Allow you to create contact - contact , contact - custom objects associations, will add more in the future.Documentation Link - [https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3](https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3)

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

**locationId**stringrequired**key**stringrequiredAssociation's Unique key**firstObjectLabel**objectrequiredFirst Objects Association Label (custom_objects.children)**firstObjectKey**objectrequiredFirst Objects Key**secondObjectLabel**objectrequiredSecond Object Association Label (contact)**secondObjectKey**objectrequiredSecond Objects Key

```json
{
  "locationId": "string",
  "key": "student_teacher",
  "firstObjectLabel": "student",
  "firstObjectKey": "custom_objects.children",
  "secondObjectLabel": "Teacher",
  "secondObjectKey": "contact"
}
```

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
