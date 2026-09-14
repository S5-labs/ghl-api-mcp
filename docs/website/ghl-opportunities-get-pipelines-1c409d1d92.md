> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipelines). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Pipelines

**Endpoint:** `GET /opportunities/pipelines`

Get Pipelines

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

Identifier of the location (sub-account) to retrieve pipelines for

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**pipelines**object[]List of pipelines for the location

```json
{
  "pipelines": []
}
```
