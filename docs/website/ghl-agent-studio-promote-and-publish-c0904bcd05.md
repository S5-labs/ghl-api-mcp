> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/promote-and-publish). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Promote to Production

**Endpoint:** `POST /agent-studio/agent/versions/:versionId/publish`

Promotes a draft version to production.

## Request

**Version**

string

required

API Version

Available options

`v3`

**versionId**

string

required

**source**

string

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID for authorization**userId**stringUser ID performing the promotion action**userName**stringUser name performing the promotion action**userEmail**stringUser email performing the promotion action

```json
{
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "userId": "usr_abc123def456",
  "userName": "John Doe",
  "userEmail": "john.doe@example.com"
}
```

application/json

Version promoted and published successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status**message**stringrequiredResponse message**data**objectrequiredResult data with production and new draft version details

```json
{
  "success": true,
  "message": "Draft published to production successfully. New draft version created for future edits.",
  "data": {
    "productionVersion": {
      "versionId": "v1a2b3c4d5e6f7g8h9i0",
      "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
      "versionName": "Customer Support Agent v2",
      "state": "prod",
      "isPublished": true,
      "version": 2,
      "publishedAt": "2024-02-27T12:00:00.000Z",
      "publishedBy": "usr_abc123def456",
      "publishedByName": "John Doe",
      "publishedByEmail": "john.doe@example.com"
    },
    "newDraftVersion": {
      "versionId": "v2b3c4d5e6f7g8h9i0j1",
      "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
      "versionName": "Customer Support Agent v3",
      "state": "draft",
      "isPublished": false,
      "version": 3,
      "createdAt": "2024-02-27T12:00:00.000Z"
    }
  }
}
```
