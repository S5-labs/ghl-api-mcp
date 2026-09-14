> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/ConversationUpdate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# ConversationUpdate

Called whenever a live chat conversation is merged into another conversation due to contact identification (e.g. a visitor provides their email or phone number matching an existing contact).

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
    "companyId": {
      "type": "string"
    },
    "newConversationId": {
      "type": "string"
    },
    "oldConversationId": {
      "type": "string"
    },
    "contactId": {
      "type": "string"
    }
  }
}
```

#### Example

```json
{
  "type": "ConversationUpdate",
  "locationId": "ADVlSQnPsdq3hinusd6C3",
  "companyId": "5DP4iH6HLkQsiKESj6rh",
  "newConversationId": "MzKIpg0rEIH2ZUGKf6BS",
  "oldConversationId": "zsYhPBOUsEHtrK508Wm9",
  "contactId": "xQRHBmMkNjMVJKHFPdgM"
}
```
