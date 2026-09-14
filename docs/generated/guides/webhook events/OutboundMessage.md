> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/OutboundMessage.md). Do not edit this generated file directly.

---
tags: [Webhook Events]
---

# OutboundMessage

Called whenever a user sends a message to a contact.

| Channel   |
| --------- |
| Call      |
| Voicemail |
| SMS       |
| GMB       |
| FB        |
| IG        |
| Email     |
| Live Chat |

#### Message Schema

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
    "attachments": {
      "type": "array"
    },
    "body": {
      "type": "string"
    },
    "contactId": {
      "type": "string"
    },
    "contentType": {
      "type": "string"
    },
    "conversationId": {
      "type": "string"
    },
    "dateAdded": {
      "type": "string"
    },
    "direction": {
      "type": "string"
    },
    "messageType": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "messageId": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    },
    "source": {
      "type": "string"
    },
    "conversationProviderId": {
      "type": "string"
    },
    "callDuration": {
      "type": "number"
    },
    "callStatus": {
      "type": "string"
    }
  }
}
```

#### Example(Message)

```json
{
  "type": "OutboundMessage",
  "locationId": "l1C08ntBrFjLS0elLIYU",
  "attachments": [],
  "body": "This is a test message",
  "contactId": "cI08i1Bls3iTB9bKgFJh",
  "contentType": "text/plain",
  "conversationId": "fcanlLgpbQgQhderivVs",
  "dateAdded": "2021-04-21T11:31:45.750Z",
  "direction": "inbound",
  "messageType": "SMS",
  "source": "app",
  "status": "delivered",
  "conversationProviderId": "cI08i1Bls3iTB9bKgF01"
}
```

#### Example(Call and Voicemail)

```json
{
  "type": "OutboundMessage",
  "locationId": "0d48aEf7q67DAu134bpy", 
  "attachments": ["call recording url"],
  "contactId": "gblakL5aYQC4glDtP1r2t3",
  "conversationId": "SGDqZrzmwTr19d10aHkt9F",
  "dateAdded": "2024-05-08T11:57:42.250Z",
  "direction": "outbound",
  "messageType": "CALL",
  "userId": "xsmF1xxhmC92ZpL1lj7aLa",
  "messageId": "tyW42xCD0HQpb3hhfLcx",
  "status": "completed",
  "callDuration": 120,
  "callStatus": "completed"
}
```

### Call Status Details

For outbound calls:
- When the call is answered by a person, `status` will be `completed` and `callStatus` will be `completed`
- When the call reaches voicemail, `status` will be `completed` and `callStatus` will be `voicemail`
- The `callDuration` field indicates the length of the call in seconds

#### Example(Voicemail send through workflow)

```json
{
  "type": "OutboundMessage",
  "locationId": "0d48aEf7q67DAuXUxbpy",
  "attachments": ["voicemail url"],
  "contactId": "gb7xwL5aYQC4glDtP1r5",
  "conversationId": "SGDqZrzmwTr5P7aHkt9F",
  "dateAdded": "2024-05-08T12:04:55.828Z",
  "direction": "outbound",
  "messageType": "VoiceMail",
  "messageId": "hhYtaQM2I9ym8qhU9CmM",
  "status": "completed"
}
```

#### Email Message Schema

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
    "attachments": {
      "type": "array"
    },
    "body": {
      "type": "string"
    },
    "contactId": {
      "type": "string"
    },
    "conversationId": {
      "type": "string"
    },
    "dateAdded": {
      "type": "string"
    },
    "direction": {
      "type": "string"
    },
    "messageType": {
      "type": "string"
    },
    "emailMessageId": {
      "type": "string"
    },
    "threadId": {
      "type": "string"
    },
    "provider": {
      "type": "string"
    },
    "to": {
      "type": "string"
    },
    "cc": {
      "type": "string"
    },
    "bcc": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    },
    "source": {
      "type": "string"
    },
    "conversationProviderId": {
      "type": "string"
    }
  }
}
```

#### Example(Email)

```json
{
  "type": "OutboundMessage",
  "locationId": "kF4NJ5gzRyQF2gKFD34G",
  "body": "<div style=\"font-family: verdana, geneva; font-size: 11pt;\">Testing Email Notification</div>",
  "contactId": "3bN9f8LYJFG8F232XMUbfq",
  "conversationId": "yCdNo6pwyTLYKgg6V2gj",
  "dateAdded": "2024-01-12T12:59:04.045Z",
  "direction": "outbound",
  "messageType": "Email",
  "emailMessageId": "sddfDSF3G56GHG",
  "from": "Internal Notify <sample@email.service>",
  "threadId": "sddfDSF3G56GHG",
  "subject": "Order Confirmed",
  "to": ["example@email.com"],
  "source": "app",
  "conversationProviderId": "cI08i1Bls3iTB9bKgF01"
}
```
