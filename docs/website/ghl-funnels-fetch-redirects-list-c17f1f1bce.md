> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/funnels/fetch-redirects-list). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch List of Redirects

**Endpoint:** `GET /funnels/lookup/redirect/list`

Retrieves a list of all URL redirects based on the given query parameters.

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

**limit**

number

required

**offset**

number

required

**search**

string

application/json

Successful response - List of URL redirects returned

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequiredObject containing the count of redirects and an array of redirect data

```json
{
  "data": {
    "count": 42,
    "data": []
  }
}
```
