> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create an Agent

**Endpoint:** `POST /conversation-ai/agents`

Creates a new AI agent for the location. The agent will be created with the specified configuration including name, role, actions, and behavior settings.

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

**name**stringrequiredName of the agent.**businessName**stringName of the business the agent represents.**mode**stringMode of operation - OFF, SUGGESTIVE, or AUTO_PILOTAvailable options`off``suggestive``auto-pilot`**channels**string[]Communication channels the agent can operate onAvailable options`IG``FB``SMS``WebChat``WhatsApp``Live_Chat`**isPrimary**booleanIndicates if this agent is a primary agent.**Default value:**`false`**waitTime**numberWait time before agent responds (max 5 for minutes, 300 for seconds)**Default value:**`2`**waitTimeUnit**stringUnit for wait time - SECONDS or MINUTESAvailable options`minutes``seconds`**sleepEnabled**booleandeprecatedIndicates if sleep functionality is enabled.**Default value:**`false`**sleepTime**numberDuration of sleep period (required if sleepEnabled is true). Set to null for indefinite sleep. (max 2880 for minutes, 172800 for seconds, 48 for hours)**sleepTimeUnit**stringUnit of sleep time - HOURS, MINUTES, or SECONDS (required if sleepEnabled is true). Set to null for indefinite sleep.Available options`hours``minutes``seconds`**personality**stringrequiredPersonality traits of the agent.**goal**stringrequiredThe goal of the agent.**instructions**stringrequiredInstructions for the agent.**autoPilotMaxMessages**numberMaximum number of messages in auto-pilot mode before requiring human intervention. (max: 100, min: 1)**Default value:**`75`**knowledgeBaseIds**string[]Array of knowledge base IDs associated with this agent.**respondToImages**booleanAllow agent to respond to images**Default value:**`false`**respondToAudio**booleanAllow agent to respond to audio**Default value:**`false`**sleepOnManualMessage**booleanEnable sleep when a manual outbound message is sent.**sleepOnWorkflowMessage**booleanEnable sleep when a workflow outbound message is sent.

```json
{
  "name": "John Doe",
  "businessName": "Tech Corp",
  "mode": "auto-pilot",
  "channels": [
    "SMS",
    "Live_Chat",
    "WhatsApp"
  ],
  "isPrimary": true,
  "waitTime": 2,
  "waitTimeUnit": "seconds",
  "sleepTime": 2,
  "sleepTimeUnit": "hours",
  "personality": "Friendly and helpful",
  "goal": "Assist customers with inquiries.",
  "instructions": "Provide  customer service.",
  "autoPilotMaxMessages": 75,
  "knowledgeBaseIds": [
    "string"
  ],
  "respondToImages": true,
  "respondToAudio": true,
  "sleepOnManualMessage": false,
  "sleepOnWorkflowMessage": false
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredUnique identifier for the agent.**name**stringrequiredName of the agent.**businessName**stringName of the business the agent represents.**mode**stringrequiredCurrent operating mode of the agent.Available options`off``suggestive``auto-pilot`**channels**string[]requiredCommunication channels the agent operates on.Available options`IG``FB``SMS``WebChat``WhatsApp``Live_Chat`**waitTime**numberrequiredWait time before agent responds.**waitTimeUnit**stringrequiredUnit for wait time.Available options`minutes``seconds`**sleepEnabled**booleanrequireddeprecatedIndicates if sleep functionality is enabled.**sleepTime**numberDuration of sleep period.**sleepTimeUnit**stringUnit of sleep time.Available options`hours``minutes``seconds`**actions**object[]requiredList of actions associated with this agent.**isPrimary**booleanrequiredIndicates if this agent is a primary agent.**autoPilotMaxMessages**numberrequiredMaximum number of messages in auto-pilot mode before requiring human intervention.**goal**stringThe goal of the agent.**personality**stringPersonality traits of the agent.**instructions**stringInstructions for the agent.**knowledgeBaseIds**string[]Array of knowledge base IDs associated with this agent.**sleepOnManualMessage**booleanWhether the bot sleeps on manual outbound messages.**sleepOnWorkflowMessage**booleanWhether the bot sleeps on workflow outbound messages.

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
  "sleepTime": 2,
  "sleepTimeUnit": "hours",
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
  "knowledgeBaseIds": [
    "kb_123",
    "kb_456"
  ],
  "sleepOnManualMessage": false,
  "sleepOnWorkflowMessage": false
}
```
