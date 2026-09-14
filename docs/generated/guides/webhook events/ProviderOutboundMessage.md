> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/ProviderOutboundMessage.md). Do not edit this generated file directly.

---
tags: [Webhook Events]
---

# Conversation Provider - Outbound Message

Called whenever a user sends a message to a contact and has a custom provider as the default channel in the settings.

> Conversation Provider - Outbound Message differs from the structure of our other webhooks which may appear similar upon first glance however, the documentation below is accurate and only what is listed will be necessary for a successful execution.

| Channel | Supported Modules                            |
| ------- | -------------------------------------------- |
| SMS     | Web App, Mobile App, Workflows, Bulk Actions |
| Email   | Web App, Mobile App, Workflows, Bulk Actions |

#### Schema

```json json_schema
{
  "type": "object",
  "properties": {
    "contactId": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },
    "messageId": {
      "type": "string"
    },
    "emailMessageId": {
      "type": "string"
    },
    "type": {
      "type": "Email/SMS"
    },
    "attachments": {
      "type": "array"
    },
    "message": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "emailTo": {
      "type": "string"
    },
    "emailFrom": {
      "type": "string"
    },
    "html": {
      "type": "string"
    },
    "subject": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  }
}
```

#### Example for SMS

```json
{
  "contactId": "GKBhT6BfwY9mjzXAU3sq",
  "locationId": "GKAWb4yu7A4LSc0skQ6g",
  "messageId": "GKJxs4P5L8dWc5CFUITM",
  "type": "SMS",
  "phone": "+15864603685",
  "message": "The text message to be sent to the contact",
  "attachments": ["https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"],
  "userId": "GK56r6wdJDrkUPd0xsmx"
}
```

#### Example for Email

```json
{
  "contactId": "GKKFF0QB9gV8fGA6zEbr",
  "locationId": "GKifVDyQeo7nwe27vMP0",
  "messageId": "GK56r6wdJDrkUPd0xsmx",
  "emailMessageId": "GK56r6wdJDrkUPd0xsmx",
  "type": "Email",
  "emailTo": ["abc@gmail.com"],
  "emailFrom": "From Name <email@gmail.com>",
  "attachments": ["https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"],
  "html": "<div style=\"font-family: verdana, geneva; font-size: 11pt;\"><p>Testing an outobund email from custom provider.</p></div>",
  "subject": "Subject from Conversation Page",
  "userId": "GK56r6wdJDrkUPd0xsmx"
}
```
