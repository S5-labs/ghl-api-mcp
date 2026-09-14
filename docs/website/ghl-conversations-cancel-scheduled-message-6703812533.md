> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-message). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Cancel a scheduled message.

**Endpoint:** `DELETE /conversations/messages/:messageId/schedule`

Post the messageId for the API to delete a scheduled message. <br>

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

The scheduled message was cancelled successfully

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
