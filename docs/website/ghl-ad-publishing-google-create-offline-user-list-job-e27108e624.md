> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-create-offline-user-list-job). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create offline user list job

**Endpoint:** `POST /ad-publishing/google/segments/offline-user-list-job`

Create a job to upload users to a Google customer match list

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation identifier**smartListIds**string[]Smart list IDs**csvPath**stringCSV file path**userListId**stringUser list identifier**isDynamic**booleanDynamic list flag

```json
{
  "locationId": "loc_abc123",
  "smartListIds": [
    "sl_123"
  ],
  "csvPath": "/uploads/users.csv",
  "userListId": "ul_123",
  "isDynamic": false
}
```

application/json

Acknowledgement that the offline job was queued

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredTrue when the operation succeeded

```json
{
  "success": true
}
```
