> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/delete-integration). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Deleting an existing integration

**Endpoint:** `DELETE /payments/custom-provider/provider`

API to delete an association for an app and location

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

Location id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredWhether the custom provider config is disconnect or not. true represents config is disconnect

```json
{
  "success": "true"
}
```
