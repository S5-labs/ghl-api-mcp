> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-action). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Agent Action

**Endpoint:** `GET /voice-ai/actions/:actionId`

Retrieve details of a specific action by its ID. Returns the action configuration including actionParameters.

## Request

**Version**

string

required

API Version

Available options

`v3`

**actionId**

string

required

Unique identifier for the action

**locationId**

string

required

Location ID

application/json

Action details retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredUnique identifier for the action**actionType**stringrequiredType of actionAvailable options`CALL_TRANSFER``DATA_EXTRACTION``IN_CALL_DATA_EXTRACTION``WORKFLOW_TRIGGER``SMS``APPOINTMENT_BOOKING``CUSTOM_ACTION``KNOWLEDGE_BASE`**name**stringrequiredHuman-readable name for this action**actionParameters**objectrequiredAction parameters - structure varies by actionType

```json
{
  "id": "507f1f77bcf86cd799439011",
  "actionType": "CALL_TRANSFER",
  "name": "Transfer to Manager",
  "actionParameters": {
    "triggerPrompt": "When the caller asks to speak to a manager",
    "transferToType": "number",
    "transferToValue": "+12345678901",
    "triggerMessage": "Let me transfer you to a manager right away",
    "hearWhisperMessage": true
  }
}
```
