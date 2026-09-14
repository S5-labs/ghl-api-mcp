> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/ConversationUnreadWebhook.md). Do not edit this generated file directly.

---
tags: [Webhook Events]
---

# Conversation

Called whenever a conversations unread status is updated

#### Schema

```json json_schema
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
    "contactId": {
      "type": "string"
    },
    "unreadCount": {
      "type": "number"
    },
    "inbox": {
      "type": "boolean"
    },
    "starred": {
      "type": "boolean"
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
  "type": "ConversationUnreadUpdate",
  "locationId": "ADVlSQnPsdq3hinusd6C3",
  "id": "MzKIpg0rEIH2ZUGKf6BS",
  "contactId": "zsYhPBOUsEHtrK508Wm9",
  "deleted": false,
  "inbox": false,
  "starred": true,
  "unreadCount": 0
}
```
