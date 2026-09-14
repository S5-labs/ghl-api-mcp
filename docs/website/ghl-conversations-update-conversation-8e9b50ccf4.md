> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-conversation). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Conversation

**Endpoint:** `PUT /conversations/:conversationId`

Update the conversation details based on the conversation ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**conversationId**

string

required

Conversation ID as string

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID as string**unreadCount**numberCount of unread messages in the conversation**starred**booleanStarred status of the conversation.**feedback**object

```json
{
  "locationId": "tDtDnQdgm2LXpyiqYvZ6",
  "unreadCount": 1,
  "starred": true,
  "feedback": {}
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredBoolean value as the API response.**conversation**objectrequiredConversation data of the provided conversation ID.

```json
{
  "success": true,
  "conversation": {
    "id": "tDtDnQdgm2LXpyiqYvZ6",
    "locationId": "tDtDnQdgm2LXpyiqYvZ6",
    "contactId": "tDtDnQdgm2LXpyiqYvZ6",
    "assignedTo": "tDtDnQdgm2LXpyiqYvZ6",
    "userId": "tDtDnQdgm2LXpyiqYvZ6",
    "lastMessageBody": "Hello, this is the message body",
    "lastMessageDate": "1628008053263",
    "lastMessageType": "TYPE_CALL",
    "unreadCount": 1,
    "inbox": true,
    "starred": true,
    "deleted": false
  }
}
```
