> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-action). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Attach Action to Agent

**Endpoint:** `POST /conversation-ai/agents/:agentId/actions`

Creates and attach a new action for an AI agent. Actions define specific tasks or behaviors that the agent can perform, such as booking appointments, sending follow-ups, or collecting information.

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**type**stringrequiredAvailable options`triggerWorkflow``updateContactField``appointmentBooking``stopBot``humanHandOver``advancedFollowup``transferBot`**name**stringrequired**details**objectrequiredAction-specific details. The structure depends on the action type. For TRIGGER_WORKFLOW use triggerWorkflowDto, for UPDATE_CONTACT_FIELD use updateContactFieldDto, for APPOINTMENT_BOOKING use appointmentBookingDto, for STOP_BOT use stopBotDto, for HUMAN_HAND_OVER use humanHandOverDto, for ADVANCED_FOLLOWUP use advancedFollowupDto, and for TRANSFER_BOT use transferBotDto.

```json
{
  "type": "triggerWorkflow",
  "name": "Trigger a Workflow",
  "details": {
    "workflowIds": [
      "workflow123",
      "workflow456"
    ],
    "triggerCondition": "When user requests appointment",
    "triggerMessage": "Workflow triggered successfully"
  }
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequiredCreated action details**success**booleanrequiredSuccess status of the request

```json
{
  "data": {
    "id": "actionId123",
    "name": "Trigger Workflow",
    "type": "triggerWorkflow",
    "agentId": "agentId123",
    "details": {
      "workflowIds": [
        "workflow123",
        "workflow456"
      ],
      "triggerCondition": "When user requests appointment",
      "triggerMessage": "Workflow triggered successfully"
    }
  },
  "success": true
}
```
