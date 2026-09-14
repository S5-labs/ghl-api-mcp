> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-messages). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get messages by conversation id

**Endpoint:** `GET /conversations/:conversationId/messages`

Get messages by conversation id.

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

**lastMessageId**

string

Message ID of the last message in the list as a string

**limit**

number

Number of messages to be fetched from the conversation. Default limit is 20

**type**

string

Types of message to fetched separated with comma

Available options

`TYPE_CALL`

`TYPE_SMS`

`TYPE_EMAIL`

`TYPE_FACEBOOK`

`TYPE_GMB`

`TYPE_INSTAGRAM`

`TYPE_WHATSAPP`

`TYPE_ACTIVITY_APPOINTMENT`

`TYPE_ACTIVITY_CONTACT`

`TYPE_ACTIVITY_INVOICE`

`TYPE_ACTIVITY_PAYMENT`

`TYPE_ACTIVITY_OPPORTUNITY`

application/json

List of messages for the conversation id of the given type.

- application/json

- Schema
- Example (auto)

**Schema**

**messages**objectrequired

```json
{
  "messages": {
    "lastMessageId": "p1mRSHeLDhAms5q0LMr4",
    "nextPage": true,
    "messages": [
      {
        "id": "ve9EPM428h8vShlRW1KT",
        "altId": "msg_123456789",
        "type": 1,
        "messageType": "SMS",
        "locationId": "ve9EPM428h8vShlRW1KT",
        "contactId": "ve9EPM428h8vShlRW1KT",
        "conversationId": "ve9EPM428h8vShlRW1KT",
        "dateAdded": "2024-03-27T18:13:49.000Z",
        "body": "Hi there",
        "direction": "inbound",
        "status": "connected",
        "contentType": "text/plain",
        "attachments": [
          "string"
        ],
        "meta": {
          "callDuration": 120,
          "callStatus": "completed",
          "email": {
            "email": {
              "messageIds": [
                "ve9EPM428kjkvShlRW1KT",
                "ve9EPs1028kjkvShlRW1KT"
              ]
            }
          },
          "ig": {
            "ig": {
              "page_id": "1234567890",
              "page_name": "Instagram Page"
            }
          },
          "fb": {
            "fb": {
              "page_id": "1234567890",
              "page_name": "Facebook Page"
            }
          }
        },
        "source": "workflow",
        "userId": "ve9EPM428kjkvShlRW1KT",
        "conversationProviderId": "ve9EPM428kjkvShlRW1KT",
        "chatWidgetId": "67b0cc8cf14b19d85ace7s35",
        "from": "+14155551234",
        "to": "+14155555678",
        "error": "string"
      }
    ]
  }
}
```
