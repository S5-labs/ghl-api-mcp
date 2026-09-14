> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/create-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Agent

**Endpoint:** `POST /voice-ai/agents`

Create a new voice AI agent configuration and settings

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

**locationId**stringrequiredUnique identifier for the location where this agent will operate**agentName**stringDisplay name for the voice AI agent, between 1-40 characters. Default: "My Agent {random 3 digit number}"**Possible values:** `non-empty` and `<= 40 characters`**businessName**stringName of the business this agent represents. Default: Uses location name**Possible values:** `non-empty`**welcomeMessage**stringInitial greeting spoken when the agent answers calls. Default: Auto generated**Possible values:** `non-empty` and `<= 190 characters`**agentPrompt**stringCustom instructions defining the agent's behavior and personality. Default: Basic prompt generated automatically**voiceId**stringIdentifier for the speech synthesis voice from available voice options. Default: Auto generated**language**VoiceAILanguageLanguage code for the agent's speech and understanding. Default: "en-US"Available options`en-US``pt-BR``es``fr``de``it``nl-NL``multi`**patienceLevel**PatienceLevelTolerance level for caller response delays. Default: "high"Available options`low``medium``high`**maxCallDuration**numberMaximum call duration in seconds, between 180-900 (3-15 minutes). Default: 300 seconds (5 minutes)**Possible values:** `>= 180` and `<= 900`**sendUserIdleReminders**booleanEnables automatic reminders when callers are silent. Default: true**reminderAfterIdleTimeSeconds**numberSeconds to wait before sending idle reminders, between 1-20. Default: 8 seconds**Possible values:** `>= 1` and `<= 20`**inboundNumber**stringPhone number for receiving inbound calls to this agent. Default: null**numberPoolId**stringIdentifier for the number pool managing phone number allocation. Default: null**callEndWorkflowIds**string[]Array of workflow IDs to trigger automatically when calls end. Default: []**Possible values:** `<= 10`**sendPostCallNotificationTo**objectConfiguration for post-call email notifications to various recipients. Default: []**agentWorkingHours**object[]Time intervals defining when the agent accepts calls, organized by day of week. Default: [] (available 24/7)**timezone**stringIANA timezone identifier affecting working hours and scheduling. Default: Location timezone**Possible values:** Value must match regular expression `^[A-Za-z_]+/[A-Za-z_]+$`**isAgentAsBackupDisabled**booleanPrevents this agent from being used as a fallback option. Default: false (Available as backup agent)**translation**objectLanguage translation settings including enablement flag and target language code. Rules: (1) translation.enabled can only be true if the agent's language is not en-US; (2) when enabled, translation.language must be either the agent's language or en-US; (3) when enabled, translation.language is required.

```json
{
  "locationId": "LOC123456789ABCDEF",
  "agentName": "Customer Support Agent",
  "businessName": "Acme Corporation",
  "welcomeMessage": "Hello! Thank you for calling Acme Corporation. How can I assist you today?",
  "agentPrompt": "You are a helpful customer service representative. Always be polite and professional.",
  "voiceId": "507f1f77bcf86cd799439011",
  "language": "en-US",
  "patienceLevel": "low",
  "maxCallDuration": 600,
  "sendUserIdleReminders": true,
  "reminderAfterIdleTimeSeconds": 5,
  "inboundNumber": "+1234567890",
  "numberPoolId": "pool_507f1f77bcf86cd799439011",
  "callEndWorkflowIds": [
    "wf_507f1f77bcf86cd799439011",
    "wf_507f1f77bcf86cd799439012"
  ],
  "sendPostCallNotificationTo": {
    "admins": true,
    "allUsers": false,
    "contactAssignedUser": false,
    "specificUsers": [
      "user_507f1f77bcf86cd799439011"
    ],
    "customEmails": [
      "manager@company.com"
    ]
  },
  "agentWorkingHours": [
    {
      "dayOfTheWeek": 1,
      "intervals": [
        {
          "startHour": 9,
          "startMinute": 0,
          "endHour": 17,
          "endMinute": 30
        }
      ]
    }
  ],
  "timezone": "America/New_York",
  "isAgentAsBackupDisabled": false,
  "translation": {
    "enabled": false,
    "language": "es"
  }
}
```

application/json

Agent created successfully

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredUnique identifier for the created agent**locationId**stringrequiredUnique identifier for the location where this agent operates**agentName**stringrequiredDisplay name of the voice AI agent**businessName**stringrequiredName of the business this agent represents**welcomeMessage**stringrequiredGreeting message spoken when the agent answers calls**agentPrompt**stringrequiredCustom instructions defining the agent's behavior**voiceId**stringrequiredIdentifier for the speech synthesis voice being used**language**stringrequiredLanguage code for the agent's speech and understanding**patienceLevel**stringrequiredCurrent tolerance level for caller response delays**maxCallDuration**numberrequiredMaximum call duration in seconds, between 180-900**Possible values:** `>= 180` and `<= 900`**sendUserIdleReminders**booleanrequiredIndicates whether automatic idle reminders are enabled**reminderAfterIdleTimeSeconds**numberrequiredSeconds to wait before sending idle reminders, between 1-20**Possible values:** `>= 1` and `<= 20`**inboundNumber**stringPhone number for receiving inbound calls**numberPoolId**stringIdentifier for the number pool managing this agent's phone allocation**callEndWorkflowIds**string[]Array of workflow IDs triggered automatically when calls end**sendPostCallNotificationTo**objectCurrent post-call notification settings including recipient configuration**agentWorkingHours**object[]Time intervals when the agent accepts calls, organized by day of week**timezone**stringrequiredIANA timezone identifier for working hours and scheduling**isAgentAsBackupDisabled**booleanrequiredIndicates whether this agent is excluded from backup scenarios**translation**objectCurrent language translation settings including enablement status and target language

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
  }
}
```
