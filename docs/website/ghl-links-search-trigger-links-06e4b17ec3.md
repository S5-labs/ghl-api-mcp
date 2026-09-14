> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/links/search-trigger-links). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Search Trigger Links

**Endpoint:** `GET /links/search`

Get list of links by searching

## Request

**Authorization**

string

required

Access Token

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

**query**

string

Search query as a string

**skip**

number

Numbers of query results to skip

`0`

**limit**

number

Limit on number of search results

`20`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**links**object[]List of trigger links

```json
{
  "links": [
    {
      "id": "n4AriwEnFrGh3tu08W0U",
      "name": "first tag",
      "redirectTo": "https://www.google.com/",
      "fieldKey": "{{trigger_link.n4AriwEnFrGh3tu08W0U}}",
      "locationId": "ve9EPM428h8vShlRW1KT"
    }
  ]
}
```
