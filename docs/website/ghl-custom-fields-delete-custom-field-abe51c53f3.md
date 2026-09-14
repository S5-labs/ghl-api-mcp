> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/delete-custom-field). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Custom Field By Id

**Endpoint:** `DELETE /custom-fields/:id`

Delete Custom Field By Id

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

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeded**booleanrequired**id**stringrequired**key**stringrequired

```json
{
  "succeded": true,
  "id": "3v34PM428h8vShlRW1KT",
  "key": "custom_object.pet.name"
}
```
