> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/delete-design-kit). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Design Kit

**Endpoint:** `DELETE /brand-boards/locations/:locationId/design-kits/:designKitId`

Delete a design kit by ID

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

ID of the location that owns the design kit.

**designKitId**

string

required

ID of the design kit to delete.

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**deleted**booleanrequiredWhether the design kit was successfully deleted.**traceId**stringTrace identifier for the request, useful for debugging and support.

```json
{
  "deleted": true,
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
