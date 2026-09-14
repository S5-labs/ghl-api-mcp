> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseDelete). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Knowledge Base

Called whenever a knowledge base is deleted

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
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "deleted": {
      "type": "boolean"
    }
  }
}
```

#### Example

```json
{
  "type": "KnowledgeBaseDelete",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "id": "6578278e879ad2646715ba9c",
  "name": "Support Knowledge Base",
  "description": "FAQs and docs for customer support",
  "deleted": true
}
```
