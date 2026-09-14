> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-accounts). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get LinkedIn ad accounts

**Endpoint:** `GET /ad-publishing/linkedin/ad-accounts`

Retrieve LinkedIn Ads accounts available for the connected user

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
    "id": 556129919,
    "name": "Acme Test Account",
    "status": "ACTIVE",
    "currency": "USD",
    "servingStatuses": [
      "RUNNABLE"
    ],
    "organizationId": "urn:li:organization:2414183"
  }
]
```
