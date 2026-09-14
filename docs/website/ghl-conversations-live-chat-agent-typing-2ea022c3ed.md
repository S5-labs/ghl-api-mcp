> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/live-chat-agent-typing). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Agent/Ai-Bot is typing a message indicator for live chat

**Endpoint:** `POST /conversations/providers/live-chat/typing`

Agent/AI-Bot will call this when they are typing a message in live chat message

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

**locationId**stringrequiredLocation Id**isTyping**stringrequiredTyping status**visitorId**stringrequiredvisitorId is the Unique ID assigned to each Live chat visitor. visitorId will be added soon in [GET Contact API](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact)**conversationId**stringrequiredConversation Id

```json
{
  "locationId": "ve9EPM428h8vShlRW1KT",
  "isTyping": true,
  "visitorId": "ve9EPM428h8vShlRW1KT",
  "conversationId": "ve9EPM428h8vShlRW1KT"
}
```

application/json

Show typing indicator for live chat

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequired

```json
{
  "success": true
}
```
