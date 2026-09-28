> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Agent

**Endpoint:** `PUT /conversation-ai/agents/:agentId`

Updates an existing AI agent's configuration. All fields in the agent configuration can be updated including name, status, actions, and behavior settings.

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

Conversations AI agent id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringName of the agent.**businessName**stringName of the business the agent represents.**mode**stringMode of operation for the agent, required if primary is enabled.Available options`off``suggestive``auto-pilot`**channels**string[]Channels the agent can use.Available options`IG``FB``SMS``WebChat``WhatsApp``Live_Chat``Email`**isPrimary**booleanIndicates if this agent is a primary agent.**waitTime**numberWait time before agent responds (max 5 for minutes, 300 for seconds).**waitTimeUnit**stringUnit for wait time - SECONDS or MINUTESAvailable options`minutes``seconds`**sleepEnabled**booleandeprecatedIndicates if sleep functionality is enabled.**sleepOnManualMessage**booleanEnable sleep when a manual outbound message is sent.**sleepOnWorkflowMessage**booleanEnable sleep when a workflow outbound message is sent.**sleepTime**numberDuration of sleep period (required if sleepEnabled is true). Set to null for indefinite sleep. (max 2880 for minutes, 172800 for seconds, 48 for hours)**sleepTimeUnit**stringUnit of sleep time - HOURS, MINUTES, or SECONDS (required if sleepEnabled is true). Set to null for indefinite sleep.Available options`hours``minutes``seconds`**personality**stringPersonality traits of the agent.**goal**stringThe goal of the agent.**instructions**stringInstructions for the agent.**fullPrompt**stringComplete agent prompt. When set and non-empty, used as the source of truth at generation time instead of personality, goal, and instructions.**autoPilotMaxMessages**numberrequiredMaximum number of messages in auto-pilot mode before requiring human intervention. (max: 100, min: 1)**Default value:**`75`**knowledgeBaseIds**string[]Array of knowledge base IDs associated with this agent.**respondToImages**booleanAllow agent to respond to images**Default value:**`false`**respondToAudio**booleanAllow agent to respond to audio**Default value:**`false`

```json
{
  "name": "John Doe",
  "businessName": "Tech Corp",
  "mode": "auto-pilot",
  "channels": [
    "SMS",
    "Live_Chat"
  ],
  "isPrimary": true,
  "waitTime": 30,
  "waitTimeUnit": "seconds",
  "sleepOnManualMessage": false,
  "sleepOnWorkflowMessage": false,
  "sleepTime": 10,
  "sleepTimeUnit": "hours",
  "personality": "You re an AI assistant and you are friendly and helpful",
  "goal": "You are an AI assistant and you are helping customers with inquiries.",
  "instructions": "Provide excellent customer service.",
  "fullPrompt": "string",
  "autoPilotMaxMessages": 75,
  "knowledgeBaseIds": [
    "kb_abc123",
    "kb_def456"
  ],
  "respondToImages": true,
  "respondToAudio": true
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredUnique identifier for the agent.**name**stringrequiredName of the agent.**businessName**stringName of the business the agent represents.**mode**stringrequiredCurrent operating mode of the agent.Available options`off``suggestive``auto-pilot`**channels**string[]requiredCommunication channels the agent operates on.Available options`IG``FB``SMS``WebChat``WhatsApp``Live_Chat``Email`**waitTime**numberrequiredWait time before agent responds.**waitTimeUnit**stringrequiredUnit for wait time.Available options`minutes``seconds`**sleepEnabled**booleanrequireddeprecatedIndicates if sleep functionality is enabled.**sleepOnManualMessage**booleanWhether the bot sleeps on manual outbound messages.**sleepOnWorkflowMessage**booleanWhether the bot sleeps on workflow outbound messages.**sleepTime**numberDuration of sleep period.**sleepTimeUnit**stringUnit of sleep time.Available options`hours``minutes``seconds`**emailWaitTime**numberEmail-specific wait time (max 12 hours).**emailWaitTimeUnit**stringUnit for email wait time.Available options`seconds``minutes``hours`**emailSettings**objectEmail channel formatting settings.**actions**object[]requiredList of actions associated with this agent.**isPrimary**booleanrequiredIndicates if this agent is a primary agent.**autoPilotMaxMessages**numberrequiredMaximum number of messages in auto-pilot mode before requiring human intervention.**goal**stringThe goal of the agent.**personality**stringPersonality traits of the agent.**instructions**stringInstructions for the agent.**fullPrompt**stringComplete agent prompt when stored; when set and non-empty, used as the source of truth at generation time.**knowledgeBaseIds**string[]Array of knowledge base IDs associated with this agent.**knowledgeBaseTriggers**object[]Knowledge base trigger configurations**workingHours**objectnullableWorking-hours schedule for this agent, or null when not configured. Manage it via the /working-hours routes.

```json
{
  "id": "emp_123",
  "name": "John Doe",
  "businessName": "Tech Corp",
  "mode": "auto-pilot",
  "channels": [
    "SMS",
    "Live_Chat"
  ],
  "waitTime": 30,
  "waitTimeUnit": "seconds",
  "sleepOnManualMessage": false,
  "sleepOnWorkflowMessage": false,
  "sleepTime": 2,
  "sleepTimeUnit": "hours",
  "emailWaitTime": 1,
  "emailWaitTimeUnit": "hours",
  "emailSettings": {},
  "actions": [
    {
      "id": "actionId123",
      "type": "triggerWorkflow"
    }
  ],
  "isPrimary": false,
  "autoPilotMaxMessages": 25,
  "goal": "Assist customers with inquiries",
  "personality": "Friendly and helpful",
  "instructions": "Provide excellent customer service",
  "fullPrompt": "string",
  "knowledgeBaseIds": [
    "kb_123",
    "kb_456"
  ],
  "knowledgeBaseTriggers": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "mode": "all",
      "knowledgeBaseIds": [
        "kb_001"
      ],
      "triggerCondition": "When the customer asks about pricing or billing",
      "priority": 2
    }
  ],
  "workingHours": {
    "enabled": false,
    "channels": [
      "SMS",
      "WhatsApp"
    ],
    "timezoneMode": "contact",
    "schedule": {
      "mon": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "tue": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "wed": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "thu": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "fri": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "sat": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "sun": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      }
    },
    "continueConversations": {
      "enabled": true,
      "inactivityTimeout": {
        "value": 15,
        "unit": "minutes"
      }
    },
    "offHoursAutoReply": {
      "enabled": false,
      "message": "Thanks for reaching out! We're currently outside of business hours.",
      "sendNotification": false,
      "notificationConfig": {
        "emailNotification": {
          "enabled": false,
          "notifyAdmins": false,
          "notifyAllUsers": false,
          "notifyAssignedUser": false,
          "notifySpecificUsers": false,
          "specificUserIds": [],
          "notifyCustomEmail": false,
          "customEmail": ""
        },
        "contactTags": []
      }
    },
    "followUp": {
      "enabled": false,
      "message": "Hi {{contact.name}}, we're here now and happy to help."
    },
    "employeeId": "wK36brxPYCOikC85FkbA",
    "createdAt": "2024-07-29T15:51:28.071Z",
    "updatedAt": "2024-07-29T15:51:28.071Z"
  }
}
```
