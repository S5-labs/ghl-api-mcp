> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-an-outbound-message). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Add an external outbound call

**Endpoint:** `POST /conversations/messages/outbound`

Post the necessary fields for the API to add a new outbound call.

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

**type**stringrequiredMessage TypeAvailable options`Call`**attachments**string[]Array of attachments**conversationId**stringConversation Id. Provide either conversationId or contactId.**contactId**stringContact Id. When provided without conversationId, the conversation is resolved or created from this contact.**conversationProviderId**stringrequiredConversation Provider Id**altId**stringexternal mail provider's message id**date**string<date-time>Date of the outbound message**call**objectPhone call dialer and receiver information

```json
{
  "type": "Call",
  "attachments": [
    "string"
  ],
  "conversationId": "ve9EPM428h8vShlRW1KT",
  "contactId": "ve9EPM428h8vShlRW1KT",
  "conversationProviderId": "61d6d1f9cdac7612faf80753",
  "altId": "61d6d1f9cdac7612faf80753",
  "date": "2024-07-29T15:51:28.071Z",
  "call": {
    "to": "+15037081210",
    "from": "+15037081210",
    "status": "completed"
  }
}
```

application/json

Created the message

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequired**conversationId**stringrequiredConversation ID.**messageId**stringrequiredThis is the main Message ID**message**stringrequired**contactId**string**dateAdded**string<date-time>**emailMessageId**string

```json
{
  "success": true,
  "conversationId": "ABC12h2F6uBrIkfXYazb",
  "messageId": "t22c6DQcTDf3MjRhwf77",
  "message": "string",
  "contactId": "string",
  "dateAdded": "2024-07-29T15:51:28.071Z",
  "emailMessageId": "string"
}
```
