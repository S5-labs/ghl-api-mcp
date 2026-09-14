> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-ad-accounts). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get ad accounts

**Endpoint:** `GET /ad-publishing/facebook/ad-accounts`

Retrieve Facebook ad accounts available for the connected user

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

Location identifier

**type**

string

Account source type

Available options

`INTEGRATION`

`AD_MANAGER`

**next**

string

Pagination cursor

**fetchAll**

string

Fetch all accounts

**limit**

string

Results page limit

application/json

Ad accounts the connected user can access

- application/json

- Schema
- Example (auto)

**Schema**

- Array [
- ]

```json
[
  {
    "id": "act_357046700569338",
    "name": "Acme - Production",
    "accountStatus": "ACTIVE",
    "currency": "USD",
    "fundingType": "FACEBOOK_EXTENDED_CREDIT",
    "business": {
      "id": "153049965367635",
      "name": "Acme Marketing"
    },
    "integrationConnected": false
  }
]
```
