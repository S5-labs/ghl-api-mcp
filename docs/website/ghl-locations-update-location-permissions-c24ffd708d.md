> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/update-location-permissions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Permissions

**Endpoint:** `PUT /locations/:locationId/permissions`

Update Sub-Account (Formerly Location) permissions

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

Location Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**permissions**string[]requiredPermission plan values to apply for the sub-accountAvailable options`2-way-text-messaging``gmb-messaging``web-chat``reputation-management``facebook-messenger``gmb-call-tracking``missed-call-text-back``text-to-pay``calendar``crm``opportunities``email-marketing`

```json
{
  "permissions": [
    "crm",
    "workflow"
  ]
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**permissions**string[]requiredEnabled permission names for the sub-accountAvailable options`2-way-text-messaging``gmb-messaging``web-chat``reputation-management``facebook-messenger``gmb-call-tracking``missed-call-text-back``text-to-pay``calendar``crm``opportunities``email-marketing`

```json
{
  "permissions": [
    "crm",
    "workflow"
  ]
}
```
