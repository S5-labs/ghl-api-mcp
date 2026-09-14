> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Agent

**Endpoint:** `GET /voice-ai/agents/:agentId`

Retrieve detailed configuration and settings for a specific voice AI agent

## Request

**Version**

string

required

API Version

Available options

`v3`

**agentId**

string

required

Unique agent identifier

**locationId**

string

required

Location ID

application/json

Agent details retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredUnique identifier for the created agent**locationId**stringrequiredUnique identifier for the location where this agent operates**agentName**stringrequiredDisplay name of the voice AI agent**businessName**stringrequiredName of the business this agent represents**welcomeMessage**stringrequiredGreeting message spoken when the agent answers calls**agentPrompt**stringrequiredCustom instructions defining the agent's behavior**voiceId**stringrequiredIdentifier for the speech synthesis voice being used**language**stringrequiredLanguage code for the agent's speech and understanding**patienceLevel**stringrequiredCurrent tolerance level for caller response delays**maxCallDuration**numberrequiredMaximum call duration in seconds, between 180-900**Possible values:** `>= 180` and `<= 900`**sendUserIdleReminders**booleanrequiredIndicates whether automatic idle reminders are enabled**reminderAfterIdleTimeSeconds**numberrequiredSeconds to wait before sending idle reminders, between 1-20**Possible values:** `>= 1` and `<= 20`**inboundNumber**stringPhone number for receiving inbound calls**numberPoolId**stringIdentifier for the number pool managing this agent's phone allocation**callEndWorkflowIds**string[]Array of workflow IDs triggered automatically when calls end**sendPostCallNotificationTo**objectCurrent post-call notification settings including recipient configuration**agentWorkingHours**object[]Time intervals when the agent accepts calls, organized by day of week**timezone**stringrequiredIANA timezone identifier for working hours and scheduling**isAgentAsBackupDisabled**booleanrequiredIndicates whether this agent is excluded from backup scenarios**translation**objectCurrent language translation settings including enablement status and target language**actions**object[]requiredRaw actions configured for this agent with complete actionParameters structure

```json
{
  "id": "507f1f77bcf86cd799439011",
  "locationId": "LOC123456789ABCDEF",
  "agentName": "Customer Support Agent",
  "businessName": "Acme Corporation",
  "welcomeMessage": "Hello! Thank you for calling. How can I assist you today?",
  "agentPrompt": "You are a helpful customer service representative.",
  "voiceId": "507f1f77bcf86cd799439011",
  "language": "en-US",
  "patienceLevel": "medium",
  "maxCallDuration": 600,
  "sendUserIdleReminders": true,
  "reminderAfterIdleTimeSeconds": 5,
  "inboundNumber": "+1234567890",
  "numberPoolId": "pool_507f1f77bcf86cd799439011",
  "callEndWorkflowIds": [],
  "sendPostCallNotificationTo": {
    "admins": true,
    "allUsers": false,
    "contactAssignedUser": false,
    "specificUsers": [],
    "customEmails": []
  },
  "agentWorkingHours": [],
  "timezone": "America/New_York",
  "isAgentAsBackupDisabled": false,
  "translation": {
    "enabled": false,
    "language": "es"
  },
  "actions": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "actionType": "CALL_TRANSFER",
      "name": "Transfer to Manager",
      "actionParameters": {
        "triggerPrompt": "When caller asks for manager",
        "triggerMessage": "Let me transfer you",
        "transferToType": "number",
        "transferToValue": "+1234567890"
      }
    }
  ]
}
```
