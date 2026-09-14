> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/funnels/get-pages-count-by-funnel-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch count of funnel pages

**Endpoint:** `GET /funnels/page/count`

Retrieves count of all funnel pages based on the given query parameters.

## Request

**locationId**

string

required

**funnelId**

string

required

**name**

string

application/json

Successful response - Count of funnel pages returned

- application/json

- Schema
- Example (auto)

**Schema**

**count**numberrequired

```json
{
  "count": 20
}
```
