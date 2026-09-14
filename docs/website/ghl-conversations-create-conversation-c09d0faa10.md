> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/create-conversation). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Conversation

**Endpoint:** `POST /conversations/`

Creates a new conversation with the data provided

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

**locationId**stringrequiredLocation ID as string**contactId**stringrequiredContact ID as string

```json
{
  "locationId": "tDtDnQdgm2LXpyiqYvZ6",
  "contactId": "tDtDnQdgm2LXpyiqYvZ6"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates whether the API request was successful.**conversation**objectrequiredConversation data of the provided conversation ID.

```json
{
  "success": true,
  "conversation": {
    "id": "tDtDnQdgm2LXpyiqYvZ6",
    "dateUpdated": "2023-10-01T12:00:00Z",
    "dateAdded": "2023-10-01T12:00:00Z",
    "deleted": false,
    "contactId": "ve9EPM428kjkvShlRW1KT",
    "locationId": "ve9EPM428kjkvShlRW1KT",
    "lastMessageDate": "2023-10-01T12:00:00Z",
    "assignedTo": "ve9EPM428kjkvShlRW1KT"
  }
}
```
