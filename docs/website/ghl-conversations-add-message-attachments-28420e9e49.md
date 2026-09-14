> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-message-attachments). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Add message attachments

**Endpoint:** `PUT /conversations/messages/:messageId/attachments`

Set attachments on an existing message (replaces existing). Maximum 5 URLs. Supported for Custom Call message type.

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

**attachments**string[]requiredArray of attachment URLs to set on the message (replaces existing). Maximum 5 URLs.

```json
{
  "attachments": [
    "https://provider.com/recordings/call-123.mp3"
  ]
}
```

application/json

Successfully set message attachments

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates whether the operation was successful.**messageId**stringrequiredThe ID of the message that was updated.**attachments**string[]requiredThe updated list of attachment URLs on the message.

```json
{
  "success": true,
  "messageId": "ve9EPM428h8vShlRW1KT",
  "attachments": [
    "https://provider.com/recordings/call-123.mp3"
  ]
}
```
