> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-message). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get message by message id

**Endpoint:** `GET /conversations/messages/:id`

Get message by message id.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

Message object for the id given.

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequired**altId**stringAlternative identifier for the message**type**numberrequired**messageType**stringrequiredType of the message as a stringAvailable options`TYPE_CALL``TYPE_SMS``TYPE_EMAIL``TYPE_SMS_REVIEW_REQUEST``TYPE_WEBCHAT``TYPE_SMS_NO_SHOW_REQUEST``TYPE_CAMPAIGN_SMS``TYPE_CAMPAIGN_CALL``TYPE_CAMPAIGN_EMAIL``TYPE_CAMPAIGN_VOICEMAIL``TYPE_FACEBOOK``TYPE_CAMPAIGN_FACEBOOK`**locationId**stringrequired**contactId**stringrequired**conversationId**stringrequired**dateAdded**stringrequired**body**string**direction**stringrequiredAvailable options`inbound``outbound`**status**stringAvailable options`connected``delivered``failed``opened``pending``read``scheduled``sent``undelivered``clicked``opt_out`**contentType**stringrequired**attachments**string[]An array of attachment URLs. Attachments will be empty for Call and Voicemails, type 1 and 10. Please use get call recording API to fetch call recording and voicemails.**meta**object**source**stringMessage sourceAvailable options`workflow``bulk_actions``campaign``api``app`**userId**stringUser Id**conversationProviderId**stringConversation Provider Id**chatWidgetId**stringChat Widget Id**from**stringSender identifier (phone/name). Not returned for email types.**to**stringRecipient identifier (phone/name). Not returned for email types.**error**stringError message if message delivery failed

```json
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
```
