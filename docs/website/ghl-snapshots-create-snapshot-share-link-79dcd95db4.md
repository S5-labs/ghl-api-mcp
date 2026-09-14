> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/snapshots/create-snapshot-share-link). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Snapshot Share Link

**Endpoint:** `POST /snapshots/share/link`

Create a share link for snapshot

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**snapshot_id**stringrequiredid for snapshot to be shared**share_type**stringrequiredType of share link to generateAvailable options`link``permanent_link``agency_link``location_link`**relationship_number**stringComma separated Relationship number of Agencies to create agency restricted share link**share_location_id**stringComma separated Sub-Account ids to create sub-account restricted share link

```json
{
  "snapshot_id": "1eM2UgkfaECOYyUdCo9Pa",
  "share_type": "permanent_link",
  "relationship_number": "0-128-926,1-208-926,2-008-926",
  "share_location_id": "l1C08ntBrFjLS0elLIYU, U1C08ntBrFjLS0elKIYP"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringid for shared snapshot**shareLink**stringShare Link for snapshot

```json
{
  "id": "1eM2UgkfaECOYyUdCo9Pa",
  "shareLink": "https://affiliates.gohighlevel.com/?share=1eM2UgkfaECOYyUdCo9Pa"
}
```
