> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/train-discovered-urls). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Train discovered website pages and ingest into the knowledge base

**Endpoint:** `POST /knowledge-bases/crawler/train`

Queues selected discovered pages so the AI ingests their content into the knowledge base. WHEN TO USE: use this when discoverWebsite has already found pages; use discoverWebsite to crawl first; use deleteTrainedUrlsForKnowledgeBase to untrain pages. RETURNS: whether training was queued, a status message, and the URL ids that were accepted.

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

**locationId**stringrequiredLocation ID as string**knowledgeBaseId**stringrequiredKnowledge base ID as string**operationId**stringrequiredOperation ID as string**urlIds**string[]requiredList of URL IDs to train

```json
{
  "locationId": "jNtgzTfHnLKErAWswvVE",
  "knowledgeBaseId": "RXzAdYGknD2phAoln3Jl",
  "operationId": "689267ba9d8d63ea160ee9c7",
  "urlIds": [
    "689267ccb27254d92da17b69"
  ]
}
```

application/json

Pages trained successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates if the operation was successful**message**stringrequiredSuccess message**urlIds**string[]requiredArray of URL IDs that were queued for training

```json
{
  "success": true,
  "message": "Training queued for 3 URLs",
  "urlIds": [
    "url_123",
    "url_456",
    "url_789"
  ]
}
```
