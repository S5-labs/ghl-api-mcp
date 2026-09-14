> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/delete-object-record). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Record

**Endpoint:** `DELETE /objects/:schemaKey/records/:id`

Delete Record By Id . Supported Objects are business and custom objects.

## Request

**Version**

string

required

API Version

Available options

`v3`

**schemaKey**

string

required

The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings.

**id**

string

required

id of the record to be updated. Available on the Record details page under the 3 dots or in the url

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringid of the deleted object**success**booleanboolean that defines if the operation was a success or not

```json
{
  "id": "661c06b4ffde146bdb469442",
  "success": true
}
```
