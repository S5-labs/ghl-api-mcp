> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/delete-conversation). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Conversation

**Endpoint:** `DELETE /conversations/:conversationId`

Delete the conversation details based on the conversation ID

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

**success**booleanrequiredBoolean value as the API response.

```json
{
  "success": true
}
```
