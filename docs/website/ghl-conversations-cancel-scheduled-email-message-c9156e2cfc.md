> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-email-message). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Cancel a scheduled email message.

**Endpoint:** `DELETE /conversations/messages/email/:emailMessageId/schedule`

Post the messageId for the API to delete a scheduled email message. <br>

## Request

**emailMessageId**

string

required

Email Message Id

application/json

The scheduled email message was cancelled successfully

- application/json

- Schema
- Example (auto)

**Schema**

**status**numberrequiredHTTP Status code of the request**message**stringrequiredError message of the request

```json
{
  "status": 404,
  "message": "Failed cancel the scheduled message"
}
```
