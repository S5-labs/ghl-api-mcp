> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-account-details). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get ad account details

**Endpoint:** `GET /ad-publishing/linkedin/ad-account`

Retrieve details of a specific LinkedIn ad account

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

**adAccountId**

string

required

Ad account identifier

application/json

Details for a single ad account, including the organization logo

- application/json

- Schema
- Example (auto)

**Schema**

**id**numberrequiredLinkedIn ad account id. Returned as a number, unlike most ids in this API.**name**stringrequiredAccount name**status**stringrequiredAccount status**currency**stringrequiredAccount billing currency, ISO 4217**servingStatuses**string[]requiredWhy the account can or cannot serve ads**organizationId**stringrequiredOrganization URN that owns the account, from LinkedIn `reference`**organizationLogo**stringOrganization logo URL. LinkedIn media URLs are time-limited and expire.

```json
{
  "id": 556129919,
  "name": "Acme Test Account",
  "status": "ACTIVE",
  "currency": "USD",
  "servingStatuses": [
    "RUNNABLE"
  ],
  "organizationId": "urn:li:organization:2414183",
  "organizationLogo": "https://media.licdn.com/dms/image/v2/.../company-logo_400_400?e=1788998400&v=beta&t=xc-DB8"
}
```
