> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/send-a-new-message). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Send a new message

**Endpoint:** `POST /conversations/messages`

Post the necessary fields for the API to send a new message.

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

**type**stringrequiredType of message being sentAvailable options`SMS``Email``WhatsApp``IG``FB``Custom``Live_Chat``InternalComment`**contactId**stringrequiredID of the contact receiving the message**appointmentId**stringID of the associated appointment**attachments**string[]Array of attachment URLs**emailFrom**stringEmail address to send from**emailCc**string[]Array of CC email addresses**emailBcc**string[]Array of BCC email addresses**html**stringHTML content of the message**message**stringText content of the message. For InternalComment type, use `@username<userId>actualUserId</userId>` format to mention team members. The mentioned user IDs must also be included in the mentions array.**subject**stringSubject line for email messages**replyMessageId**stringID of message being replied to**templateId**stringID of message template**threadId**stringID of message thread. For email messages, this is the message ID that contains multiple email messages in the thread**scheduledTimestamp**numberUTC Timestamp (in seconds) at which the message should be scheduled**conversationProviderId**stringID of conversation provider**emailTo**stringEmail address to send to, if different from contact's primary email. This should be a valid email address associated with the contact.**emailReplyMode**stringMode for email repliesAvailable options`reply``reply_all`**fromNumber**stringPhone number used as the sender number for outbound messages**toNumber**stringRecipient phone number for outbound messages**status**stringrequiredMessage statusAvailable options`delivered``failed``pending``read`**mentions**string[]Array of user IDs mentioned in the message. Required for InternalComment type. User IDs correspond to team members tagged with `@username<userId>id</userId>` format in the message text.**userId**stringUse this field to specify the user who is making the internal comment when type is 'InternalComment'. If not provided, the comment will be attributed to the system or default user.**whatsapp**objectWhatsApp specific payload. Use this to send media (image, video, audio, document) on a WhatsApp message. Only applies when `type` is `WhatsApp`.

```json
{
  "type": "Email",
  "contactId": "abc123def456",
  "appointmentId": "appt123",
  "attachments": [
    "https://storage.com/file1.pdf",
    "https://storage.com/file2.jpg"
  ],
  "emailFrom": "sender@company.com",
  "emailCc": [
    "cc1@company.com",
    "cc2@company.com"
  ],
  "emailBcc": [
    "bcc1@company.com",
    "bcc2@company.com"
  ],
  "html": "<p>Hello World</p>",
  "message": "Hello, how can I help you today?",
  "subject": "Important Update",
  "replyMessageId": "msg123",
  "templateId": "template123",
  "threadId": "thread123",
  "scheduledTimestamp": 1669287863,
  "conversationProviderId": "provider123",
  "emailTo": "recipient@company.com",
  "emailReplyMode": "reply_all",
  "fromNumber": "+1499499299",
  "toNumber": "+1439499299",
  "status": "delivered",
  "mentions": [
    "userId123",
    "userId456"
  ],
  "userId": "user123",
  "whatsapp": {
    "type": "media",
    "media": {
      "type": "image",
      "url": "https://static-assets.internal.usercontent.site/conversations-assets/location/<locationId>/conversations/contact/<contactId>/<uuid>.png",
      "name": "sample.png"
    }
  }
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
