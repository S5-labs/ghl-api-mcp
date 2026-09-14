> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-conversation). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Conversation

**Endpoint:** `GET /conversations/:conversationId`

Get the conversation details based on the conversation ID

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

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**contactId**stringrequiredUnique identifier of the contact associated with this conversation**locationId**stringrequiredUnique identifier of the business location where this conversation takes place**deleted**booleanrequiredFlag indicating if this conversation has been moved to trash/deleted**inbox**booleanrequiredFlag indicating if this conversation is currently in the main inbox view**type**numberrequiredCommunication channel type for this conversation: 1 (Phone), 2 (Email), 3 (Facebook Messenger), 4 (Review), 5 (Group SMS), 6 (Internal Chat - coming soon)**unreadCount**numberrequiredNumber of messages in this conversation that have not been read by the user**assignedTo**stringUnique identifier of the team member currently responsible for handling this conversation**id**stringrequiredUnique identifier for this specific conversation thread**starred**booleanFlag indicating if this conversation has been marked as important/starred by the user

```json
{
  "contactId": "ve9EPM428kjkvShlRW1KT",
  "locationId": "ve9EPM428kjkvShlRW1KT",
  "deleted": false,
  "inbox": true,
  "type": 0,
  "unreadCount": 1,
  "assignedTo": "ve9EPM428kjkvShlRW1KT",
  "id": "ve9EPM428kjkvShlRW1KT",
  "starred": true
}
```
