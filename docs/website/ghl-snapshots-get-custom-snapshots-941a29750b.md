> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-custom-snapshots). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Snapshots

**Endpoint:** `GET /snapshots/`

Get a list of all own and imported Snapshots

## Request

**Version**

string

required

API Version

Available options

`v3`

**companyId**

string

required

Company Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**snapshots**object[]

```json
{
  "snapshots": [
    {
      "id": "1eM2UgkfaECOYyUdCo9Pa",
      "name": "Martial Arts Snapshot",
      "type": "own"
    }
  ]
}
```
