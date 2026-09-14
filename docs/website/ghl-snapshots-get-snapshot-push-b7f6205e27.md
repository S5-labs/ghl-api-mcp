> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-snapshot-push). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Snapshot Push between Dates

**Endpoint:** `GET /snapshots/snapshot-status/:snapshotId`

Get list of sub-accounts snapshot pushed in time period

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

**companyId**

string

required

**from**

string

required

Only accepts ISO 8601 format

**to**

string

required

Only accepts ISO 8601 format

**lastDoc**

string

required

Id for last document till what you want to skip

**limit**

string

Limit of documents to return. Default is 20

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**object[]

```json
{
  "data": [
    {
      "id": "1eM2UgkfaECOYyUdCo9Pa",
      "locationId": "BrKClvyvdxhJ9Mxz2pzQ",
      "status": "processing",
      "dateAdded": "10/28/2022, 6:24:54 PM"
    }
  ]
}
```
