> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/list-managed-agents). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List published Managed Agents

**Endpoint:** `GET /agent-studio/managed-agents`

Returns only Managed Agents with a published production version in the authorized sub-account.

## Request

**Version**

string

required

API version.

Available options

`v3`

**locationId**

string

required

Authorized sub-account ID.

**Possible values:** `<= 256 characters`

**skip**

integer

Number of matching agents to skip.

**Possible values:** `>= 0`

`0`

**limit**

integer

Maximum number of agents to return.

**Possible values:** `>= 1` and `<= 100`

`25`

**query**

string

Case-insensitive name or description search.

**Possible values:** `<= 256 characters`

application/json

Published Managed Agents retrieved.

- application/json

- Schema
- Example (auto)

**Schema**

**agents**object[]requiredPublished Managed Agents on this page.**total**integerrequiredTotal number of matching published agents.**Possible values:** `>= 0`**skip**integerrequiredNumber of matching agents skipped.**Possible values:** `>= 0`**limit**integerrequiredMaximum number of agents returned per page.**Possible values:** `>= 1` and `<= 100`**hasMore**booleanrequiredWhether another page of results is available.

```json
{
  "agents": [
    {
      "id": "027ee957-ae94-40ad-89a3-b25c985f729b",
      "name": "Lead Qualifier",
      "description": "Qualifies inbound leads and books appointments.",
      "locationId": "ve9EPM428h8vShlRW1KT",
      "publishedVersionId": "Ver1K8sSF2nC7al5InWz"
    }
  ],
  "total": 3,
  "skip": 0,
  "limit": 25,
  "hasMore": false
}
```
