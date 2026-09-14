> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/pause-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Pause location

**Endpoint:** `POST /saas/pause/:locationId`

Pause Sub account for given locationId

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**paused**booleanrequiredPaused**companyId**stringrequiredCompany ID

```json
{
  "paused": true,
  "companyId": "companyId1"
}
```

application/json

True when the pause/resume request was accepted.

- application/json

- Schema

**Schema**

**boolean**boolean
