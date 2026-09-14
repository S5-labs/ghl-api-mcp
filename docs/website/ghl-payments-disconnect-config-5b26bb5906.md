> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/disconnect-config). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Disconnect existing provider config

**Endpoint:** `POST /payments/custom-provider/disconnect`

API to disconnect an existing payment config for given location

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

- application/json

- Body
- Example (auto)

### Body**required**

**liveMode**booleanrequiredWhether the config is for test mode or live mode. true represents config is for live payments

```json
{
  "liveMode": "true"
}
```

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
