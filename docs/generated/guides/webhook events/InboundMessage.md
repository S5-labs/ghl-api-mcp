> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/InboundMessage.md). Do not edit this generated file directly.

---
tags: [Webhook Events]
---

# InboundMessage

Called whenever a contact sends a message to the user.

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
  "type": "InboundMessage",
  "locationId": "l1C08ntBrFjLS0elLIYU",
  "attachments": [],
  "body": "This is a test message",
  "contactId": "cI08i1Bls3iTB9bKgFJh",
  "contentType": "text/plain",
  "conversationId": "fcanlLgpbQgQhderivVs",
  "dateAdded": "2021-04-21T11:31:45.750Z",
  "direction": "inbound",
  "messageType": "SMS",
  "status": "delivered",
  "conversationProviderId": "cI08i1Bls3iTB9bKgF01"
}
```

#### Example(Call)

```json
{
  "type": "OutboundMessage",
  "locationId": "0d48aEf7q67DAu134bpy",
  "attachments": ["call recording url"],
  "contactId": "gblakL5aYQC4glDtP1r2t3",
  "conversationId": "SGDqZrzmwTr19d10aHkt9F",
  "dateAdded": "2024-05-08T11:57:42.250Z",
  "direction": "inbound",
  "messageType": "CALL",
  "userId": "xsmF1xxhmC92ZpL1lj7aLa",
  "messageId": "tyW42xCD0HQpb3hhfLcx",
  "status": "completed",
  "callDuration": 120,
  "callStatus": "completed"
}
```

Example for unattended incoming call going to voicemail -

```json
{
  "type": "InboundMessage",
  "locationId": "0dalah57827q67DAuXUxbpy",
  "attachments": ["voicemail url"],
  "contactId": "gb7laj5aYQC4glDtP1r5",
  "conversationId": "SGDqZrzmwTA5P7LHkt9F",
  "dateAdded": "2024-05-08T12:00:56.193Z",
  "direction": "inbound",
  "messageType": "CALL",
  "messageId": "QkNS0DNje0FjoLQdD5O3",
  "status": "voicemail"
}
```

### Call Status Details

For inbound calls:
- When the call is answered by a person, `status` will be `completed` and `callStatus` will be `completed`
- When the call goes to voicemail, `status` will be `voicemail` and `callStatus` will be `voicemail`
- The `callDuration` field indicates the length of the call in seconds

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
    "conversationProviderId": {
      "type": "string"
    }
  }
}
```

#### Example(Email)

```json
{
  "type": "InboundMessage",
  "locationId": "kF4NJ5gzRyQF2gKFD34G",
  "body": "<div style=\"font-family: verdana, geneva; font-size: 11pt;\">Testing Email Notification</div>",
  "contactId": "3bN9f8LYJFG8F232XMUbfq",
  "conversationId": "yCdNo6pwyTLYKgg6V2gj",
  "dateAdded": "2024-01-12T12:59:04.045Z",
  "direction": "inbound",
  "messageType": "Email",
  "emailMessageId": "sddfDSF3G56GHG",
  "from": "Internal Notify <sample@email.service>",
  "threadId": "sddfDSF3G56GHG",
  "subject": "Order Confirmed",
  "to": ["testprasath95@gmail.com"],
  "conversationProviderId": "cI08i1Bls3iTB9bKgF01"
}
```

##### For listening to inbound messages

You need to change the Messaging webhook to -

<https://services.leadconnectorhq.com/conversations/providers/twilio/inbound_message>

You can find it inside your Twilio Account -

`Phone Numbers` > `Active Number` > `Click on the number` > `Messaging` > `A Message comes in`

If you want to revert, here's the old messaging webhook url -

<https://services.leadconnectorhq.com/appengine/twilio/incoming_message>
