> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/VoiceAiCallEnd). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# VoiceAiCallEnd

Called whenever a Voice AI call ends for a sub-account.

> Requires scope: voice-ai-dashboard.readonly (Sub-Account apps)

#### Schema

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "locationId": { "type": "string" },
    "agentId": { "type": "string" },
    "contactId": { "type": "string" },
    "fromNumber": { "type": "string" },
    "createdAt": { "type": "string" },
    "duration": { "type": "number" },
    "summary": { "type": "string" },
    "transcript": { "type": "string" },
    "translation": { "$ref": "#/definitions/Translation" },
    "extractedData": { "type": "object" },
    "messageId": { "type": "string" },
    "trialCall": { "type": "boolean" },
    "executedCallActions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "_id": { "type": "string" },
          "actionType": {
            "type": "string",
            "enum": [
              "CALL_TRANSFER",
              "DATA_EXTRACTION",
              "IN_CALL_DATA_EXTRACTION",
              "WORKFLOW_TRIGGER",
              "SMS",
              "APPOINTMENT_BOOKING",
              "CUSTOM_ACTION",
              "KNOWLEDGE_BASE"
            ]
          },
          "actionName": { "type": "string" },
          "description": { "type": "string" },
          "actionParameters": {
            "description": "Parameters change based on actionType",
            "oneOf": [
              { "$ref": "#/definitions/CallTransferActionParameters" },
              { "$ref": "#/definitions/DataExtractionActionParameters" },
              { "$ref": "#/definitions/InCallDataExtractionActionParameters" },
              { "$ref": "#/definitions/WorkflowTriggerParameters" },
              { "$ref": "#/definitions/SMSParameters" },
              { "$ref": "#/definitions/AppointmentBookingActionParameters" },
              { "$ref": "#/definitions/CustomActionParameters" },
              { "$ref": "#/definitions/KnowledgeBaseParameters" }
            ]
          },
          "executedAt": { "type": "string", "format": "date-time" },
          "triggerReceivedAt": { "type": "string", "format": "date-time" }
        },
        "required": ["actionType", "actionName"]
      }
    }
  },
  "definitions": {
    "Translation": {
      "type": "object",
      "properties": {
        "transcript": { "type": "string" },
        "language": { "type": "string" }
      }
    },
    "CallTransferActionParameters": {
      "type": "object",
      "properties": {
        "triggerPrompt": { "type": "string" },
        "transferToType": { "type": "string", "enum": ["number"] },
        "transferToValue": { "type": "string" },
        "triggerMessage": { "type": "string" },
        "hearWhisperMessage": { "type": "boolean" }
      },
      "required": ["triggerPrompt", "transferToType", "transferToValue"]
    },
    "DataExtractionActionParameters": {
      "type": "object",
      "properties": {
        "contactFieldId": { "type": "string" },
        "description": { "type": "string" },
        "examples": { "type": "array", "items": { "type": "string" } },
        "overwriteExistingValue": { "type": "boolean" }
      },
      "required": ["contactFieldId", "description", "examples"]
    },
    "InCallDataExtractionActionParameters": {
      "type": "object",
      "properties": {
        "contactFieldId": { "type": "string" },
        "description": { "type": "string" },
        "examples": { "type": "array", "items": { "type": "string" } },
        "overwriteExistingValue": { "type": "boolean" }
      },
      "required": ["contactFieldId", "description", "examples"]
    },
    "WorkflowTriggerParameters": {
      "type": "object",
      "properties": {
        "triggerPrompt": { "type": "string" },
        "triggerMessage": { "type": "string" },
        "workflowId": { "type": "string" }
      },
      "required": ["triggerPrompt", "triggerMessage", "workflowId"]
    },
    "SMSParameters": {
      "type": "object",
      "properties": {
        "triggerPrompt": { "type": "string" },
        "triggerMessage": { "type": "string" },
        "messageBody": { "type": "string" }
      },
      "required": ["triggerPrompt", "triggerMessage", "messageBody"]
    },
    "AppointmentBookingActionParameters": {
      "type": "object",
      "properties": {
        "calendarId": { "type": "string" },
        "daysOfOfferingDates": { "type": "number" },
        "slotsPerDay": { "type": "number" },
        "hoursBetweenSlots": { "type": "number" }
      },
      "required": ["calendarId", "daysOfOfferingDates", "slotsPerDay", "hoursBetweenSlots"]
    },
    "CustomActionHeader": {
      "type": "object",
      "properties": {
        "key": { "type": "string" },
        "value": { "type": "string" }
      },
      "required": ["key", "value"]
    },
    "CustomActionParameter": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "description": { "type": "string" },
        "type": { "type": "string" },
        "example": { "type": "string" }
      },
      "required": ["name"]
    },
    "CustomActionApiDetails": {
      "type": "object",
      "properties": {
        "url": { "type": "string" },
        "method": { "type": "string", "enum": ["POST", "GET"] },
        "authenticationRequired": { "type": "boolean" },
        "authenticationValue": { "type": "string" },
        "headers": { "type": "array", "items": { "$ref": "#/definitions/CustomActionHeader" } },
        "parameters": { "type": "array", "items": { "$ref": "#/definitions/CustomActionParameter" } }
      },
      "required": ["url", "method"]
    },
    "CustomActionParameters": {
      "type": "object",
      "properties": {
        "triggerPrompt": { "type": "string" },
        "triggerMessage": { "type": "string" },
        "apiDetails": { "$ref": "#/definitions/CustomActionApiDetails" },
        "selectedPaths": { "type": "array", "items": { "type": "string" } }
      },
      "required": ["triggerPrompt", "apiDetails"]
    },
    "KnowledgeBaseParameters": {
      "type": "object",
      "properties": {
        "triggerPrompt": { "type": "string" },
        "triggerMessage": { "type": "string" },
        "knowledgeBaseId": { "type": "string" },
        "parameters": { "type": "array", "items": { "$ref": "#/definitions/CustomActionParameter" } }
      },
      "required": ["triggerMessage", "knowledgeBaseId"]
    }
  }
}
```

#### Example

```json
{
  "id": "CALL_abcdef123456",
  "locationId": "LOC_1234567890",
  "agentId": "507f1f77bcf86cd799439011",
  "contactId": "contact_abc123",
  "fromNumber": "+12345678901",
  "createdAt": "2025-08-01T00:00:00.000Z",
  "duration": 187,
  "summary": "Caller requested appointment details and received follow-up instructions.",
  "transcript": "Hello…",
  "translation": { "transcript": "Hola…", "language": "es" },
  "extractedData": { "phoneNumber": "+1234567890" },
  "executedCallActions": [
    {
      "_id": "64b7c5a1e1f2a3b4c5d6e7f8",
      "actionType": "CALL_TRANSFER",
      "actionName": "Transfer to Sales",
      "actionParameters": {
        "triggerPrompt": "When caller asks for pricing",
        "transferToType": "number",
        "transferToValue": "+12345678901",
        "triggerMessage": "Connecting you now"
      },
      "executedAt": "2025-08-01T00:00:20.000Z",
      "triggerReceivedAt": "2025-08-01T00:00:18.000Z"
    },
    {
      "_id": "64b7d0a2b3c4d5e6f7a8b9c0",
      "actionType": "CUSTOM_ACTION",
      "actionName": "Lookup Order",
      "actionParameters": {
        "triggerPrompt": "When caller provides order number",
        "triggerMessage": "Let me check that",
        "apiDetails": {
          "url": "https://api.example.com/orders",
          "method": "GET",
          "authenticationRequired": true,
          "authenticationValue": "Bearer sk_live_xxx",
          "headers": [{ "key": "x-tenant", "value": "acme" }],
          "parameters": [{ "name": "orderId", "description": "Order ID", "type": "string", "example": "ORD-123" }]
        },
        "selectedPaths": ["data.orderId", "status"]
      },
      "executedAt": "2025-08-01T00:00:30.000Z",
      "triggerReceivedAt": "2025-08-01T00:00:28.000Z"
    }
  ],
  "messageId": "msg_123456",
  "trialCall": false
}
```
