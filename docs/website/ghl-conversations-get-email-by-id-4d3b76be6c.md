> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-email-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get email by Id

**Endpoint:** `GET /conversations/messages/email/:id`

Get email by Id

## Request

application/json

Email object for the id given.

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequired**altId**stringExternal Id**threadId**stringrequiredMessage Id or thread Id**locationId**stringrequired**contactId**stringrequired**conversationId**stringrequired**dateAdded**stringrequired**subject**string**body**stringrequired**direction**stringrequiredAvailable options`inbound``outbound`**status**stringAvailable options`pending``scheduled``sent``delivered``read``undelivered``connected``failed``opened`**contentType**stringrequired**attachments**string[]An array of attachment URLs.**provider**string**from**stringrequiredName and Email Id of the sender**to**string[]requiredList of email Ids of the receivers**cc**string[]List of email Ids of the people in the cc field**bcc**string[]List of email Ids of the people in the bcc field**replyToMessageId**stringIn case of reply, email message Id of the reply to email**source**stringEmail sourceAvailable options`workflow``bulk_actions``campaign``api``app`**conversationProviderId**stringConversation provider ID**error**stringError message for bounced/failed emails

```json
{
  "id": "ve9EPM428h8vShlRW1KT",
  "altId": "ve9EPM428h8vShlRW1KT",
  "threadId": "ve9EPM428h8vShlRW1KT",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "contactId": "ve9EPM428h8vShlRW1KT",
  "conversationId": "ve9EPM428h8vShlRW1KT",
  "dateAdded": "2024-03-27T18:13:49.000Z",
  "subject": "Order confirm",
  "body": "Hi there",
  "direction": "inbound",
  "status": "pending",
  "contentType": "text/plain",
  "attachments": [
    "string"
  ],
  "provider": "Leadconnector Gmail",
  "from": "string",
  "to": [
    "string"
  ],
  "cc": [
    "string"
  ],
  "bcc": [
    "string"
  ],
  "replyToMessageId": "string",
  "source": "workflow",
  "conversationProviderId": "cI08i1Bls3iTB9bKgF01",
  "error": "string"
}
```
