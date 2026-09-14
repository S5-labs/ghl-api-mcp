> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/set-default-design-kit). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Set Default Design Kit

**Endpoint:** `POST /brand-boards/locations/:locationId/design-kits/:designKitId/default`

Set a design kit as the default for a location. The previous default will be unset.

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

ID of the design kit to set as default.

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredWhether the default was set successfully.**designKitId**stringrequiredID of the design kit that is now the default.**traceId**stringTrace identifier for the request, useful for debugging and support.

```json
{
  "success": true,
  "designKitId": "507f1f77bcf86cd799439011",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
