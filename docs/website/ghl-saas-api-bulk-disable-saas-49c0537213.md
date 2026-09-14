> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-disable-saas). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Disable SaaS for locations

**Endpoint:** `POST /saas/bulk-disable-saas/:companyId`

Disable SaaS for locations for given locationIds

## Request

**Version**

string

required

API Version

Available options

`v3`

**companyId**

string

required

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationIds**string[]requiredLocation IDs

```json
{
  "locationIds": [
    "locationId1",
    "locationId2"
  ]
}
```

application/json

Result of the bulk SaaS disable operation.

- application/json

- Schema
- Example (auto)

**Schema**

**msg**stringrequiredStatus message returned by the bulk disable SaaS operation

```json
{
  "msg": "success"
}
```
