> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFaqChange). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Knowledge Base Asset

Called whenever a knowledge base **FAQ** asset is created, updated or deleted

#### Schema

```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },
    "knowledgeBaseId": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "assetType": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "action": {
      "type": "string"
    },
    "deleted": {
      "type": "boolean"
    }
  }
}
```

- Note: `action` indicates the change that occurred and is one of `created`, `updated` or `deleted`. For a `deleted` action, `deleted` is `true`.
- Note: `assetType` is always `faq` for this event.
- Note: `status` reflects the asset's processing state and varies by asset type.

#### Example

```json
{
  "type": "KnowledgeBaseFaqChange",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "knowledgeBaseId": "6578278e879ad2646715ba9c",
  "id": "c6tZZU0rJBf30ZXx9Gli",
  "assetType": "faq",
  "status": "active",
  "action": "updated",
  "deleted": false
}
```
