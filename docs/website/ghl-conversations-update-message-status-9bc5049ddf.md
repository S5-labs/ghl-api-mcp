> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-message-status). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update message status

**Endpoint:** `PUT /conversations/messages/:messageId/status`

Post the necessary fields for the API to update message status.

## Request

**Version**

string

required

API Version

Available options

`v3`

**messageId**

string

required

Message Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**status**stringrequiredMessage statusAvailable options`delivered``failed``pending``read`**error**objectError object from the conversation provider**emailMessageId**stringEmail message Id**recipients**string[]Email delivery status for additional email recipients.

```json
{
  "status": "read",
  "error": {
    "code": "1",
    "type": "saas",
    "message": "There was an error from the provider"
  },
  "emailMessageId": "ve9EPM428h8vShlRW1KT",
  "recipients": [
    "string"
  ]
}
```

application/json

Created the message

- application/json

- Schema
- Example (auto)

**Schema**

**conversationId**stringrequiredConversation ID.**emailMessageId**stringThis contains the email message id (only for Email type). Use this ID to send inbound replies to CRM to create a threaded email.**messageId**stringrequiredThis is the main Message ID**messageIds**string[]When sending via the GMB channel, we will be returning list of `messageIds` instead of single `messageId`.**msg**stringAdditional response message when sending a workflow message

```json
{
  "conversationId": "ABC12h2F6uBrIkfXYazb",
  "emailMessageId": "rnGyqh2F6uBrIkfhFo9A",
  "messageId": "t22c6DQcTDf3MjRhwf77",
  "messageIds": [
    "string"
  ],
  "msg": "Message queued successfully."
}
```
