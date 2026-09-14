> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-latest-snapshot-push). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Last Snapshot Push

**Endpoint:** `GET /snapshots/snapshot-status/:snapshotId/location/:locationId`

Get Latest Snapshot Push Status for a location id

## Request

**Version**

string

required

API Version

Available options

`v3`

**snapshotId**

string

required

**locationId**

string

required

**companyId**

string

required

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**object

```json
{
  "data": {
    "id": "1eM2UgkfaECOYyUdCo9Pa",
    "locationId": "BrKClvyvdxhJ9Mxz2pzQ",
    "status": "processing",
    "completed": "['forms', 'surveys', 'funnels', 'workflows']",
    "pending": "['custom_fields','custom_values','tags']"
  }
}
```
