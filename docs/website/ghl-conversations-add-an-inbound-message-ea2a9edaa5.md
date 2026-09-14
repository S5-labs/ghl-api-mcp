> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-an-inbound-message). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Add an inbound message

**Endpoint:** `POST /conversations/messages/inbound`

Post the necessary fields for the API to add a new inbound message. <br><br>**Note:** Either `conversationId` or `contactId` is required

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

**type**stringrequiredMessage TypeAvailable options`SMS``Email``WhatsApp``GMB``IG``FB``Custom``WebChat``Live_Chat``Call`**attachments**string[]Array of attachments**message**stringMessage Body**conversationId**stringConversation Id**contactId**stringContact Id**conversationProviderId**stringrequiredConversation Provider Id**html**stringHTML Body of Email**subject**stringSubject of the Email**emailFrom**stringEmail address to send from. This field is associated with the contact record and cannot be dynamically changed.**emailTo**stringRecipient email address. This field is associated with the contact record and cannot be dynamically changed.**emailCc**string[]List of email address to CC**emailBcc**string[]List of email address to BCC**emailMessageId**stringSend the email message id for which this email should be threaded. This is for replying to a specific email**altId**stringexternal mail provider's message id**direction**objectMessage direction, if required can be set manually, default is outbound**Default value:**`outbound`**date**string<date-time>Date of the inbound message**call**objectPhone call dialer and receiver information

```json
{
  "type": "SMS",
  "attachments": [
    "string"
  ],
  "message": "string",
  "conversationId": "ve9EPM428h8vShlRW1KT",
  "contactId": "ve9EPM428h8vShlRW1KT",
  "conversationProviderId": "61d6d1f9cdac7612faf80753",
  "html": "string",
  "subject": "string",
  "emailFrom": "sender@company.com",
  "emailTo": "string",
  "emailCc": [
    "john1@doe.com",
    "john2@doe.com"
  ],
  "emailBcc": [
    "john1@doe.com",
    "john2@doe.com"
  ],
  "emailMessageId": "string",
  "altId": "61d6d1f9cdac7612faf80753",
  "direction": [
    "outbound",
    "inbound"
  ],
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
