> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-action). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Action

**Endpoint:** `PUT /conversation-ai/agents/:agentId/actions/:actionId`

Updates an existing action's configuration — name, description, trigger condition and behaviour settings. For `customApi` ("API Call") actions `details.apiConfig` is optional: omit it to leave the HTTP definition untouched. When sent, it is merged ONE LEVEL DEEP over the stored config — a top-level key you send replaces the stored value outright, keys you omit are kept. Nested values (`headers`, `queryParams`, `bodyTemplate`, `parameters`, `outputFields`) are replaced whole, so send the complete object rather than just the entry you changed. `authentication` is the exception: secret fields omitted, or returned as the redacted placeholder, keep the stored secret.

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

The unique identifier of the action ID Attached to the agent

**agentId**

string

required

The unique identifier of the AI agent

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**type**stringrequiredType of action to performAvailable options`triggerWorkflow``updateContactField``appointmentBooking``stopBot``humanHandOver``advancedFollowup``transferBot``customApi`**name**stringrequiredName of the action (3-50 characters)**details**objectrequiredAction-specific details. The structure depends on the action type. For TRIGGER_WORKFLOW use triggerWorkflowDto, for UPDATE_CONTACT_FIELD use updateContactFieldDto, for APPOINTMENT_BOOKING use appointmentBookingDto, for STOP_BOT use stopBotDto, for HUMAN_HAND_OVER use humanHandOverDto, for ADVANCED_FOLLOWUP use advancedFollowupDto, for TRANSFER_BOT use transferBotDto, and for CUSTOM_API use CustomApiDetailsDTO (the API Call config).

```json
{
  "type": "triggerWorkflow",
  "name": "Trigger a Workflow",
  "details": {
    "workflowIds": [
      "workflow123"
    ],
    "triggerCondition": "When user requests appointment"
  }
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequiredUpdated action details (classic action or customApi API Call action)**success**booleanrequiredSuccess status of the request

```json
{
  "data": {
    "id": "actionId123",
    "name": "Trigger Workflow",
    "type": "triggerWorkflow"
  },
  "success": true
}
```
