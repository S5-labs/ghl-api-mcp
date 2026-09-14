> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-agents). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Agents

**Endpoint:** `GET /voice-ai/agents`

Retrieve a paginated list of agents for given location.

## Request

**Version**

string

required

API Version

Available options

`v3`

**page**

number

Page number starting from 1

**Possible values:** `>= 1` and `<= 5000`

`1`

**pageSize**

number

Number of items per page

**Possible values:** `>= 1` and `<= 50`

`10`

**locationId**

string

required

Location ID

**query**

string

Query

application/json

Agent list retrieved successfully.

- application/json

- Schema
- Example (auto)

**Schema**

**total**numberrequiredTotal number of items**page**numberrequiredPage number starting from 1**pageSize**numberrequiredNumber of items per page**agents**object[]required

```json
{
  "total": 150,
  "page": 2,
  "pageSize": 10,
  "agents": [
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
  ]
}
```
