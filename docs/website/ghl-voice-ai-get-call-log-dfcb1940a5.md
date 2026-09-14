> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-call-log). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Call Log

**Endpoint:** `GET /voice-ai/dashboard/call-logs/:callId`

Returns a call log by callId.

## Request

**Version**

string

required

API Version

Available options

`v3`

**callId**

string

required

Call ID

**locationId**

string

required

Location ID

application/json

Successfully retrieved call log

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredUnique identifier for the call**contactId**stringAssociated contact ID**agentId**stringrequiredAgent ID associated with the call**isAgentDeleted**booleanrequiredWhether the agent is deleted**fromNumber**stringCaller phone number**createdAt**string<date-time>requiredTimestamp when the call was created**duration**numberrequiredCall duration in seconds**trialCall**booleanrequiredWhether this call was a trial call**executedCallActions**object[]requiredActions performed during the call. Note: The APPOINTMENT_BOOKING action will only be visible in executedCallActions from Sep 9th 2025.**summary**stringrequiredCall summary**transcript**stringrequiredCall transcript**translation**objectTranscript translation details**extractedData**objectDynamic data extracted from the call based on agent configuration**messageId**stringMessage identifier associated with the call

```json
{
  "id": "507f1f77bcf86cd799439011",
  "contactId": "507f1f77bcf86cd799439012",
  "agentId": "507f1f77bcf86cd799439013",
  "isAgentDeleted": false,
  "fromNumber": "+1234567890",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "duration": 180,
  "trialCall": false,
  "executedCallActions": [
    {
      "actionId": "507f1f77bcf86cd799439015",
      "actionType": "CALL_TRANSFER",
      "actionName": "Transfer to Manager",
      "actionParameters": {
        "transferToType": "number",
        "transferToValue": "+12345678901",
        "triggerMessage": "Let me transfer you to a manager right away",
        "hearWhisperMessage": true
      },
      "executedAt": "2024-01-15T10:32:00.000Z",
      "triggerReceivedAt": "2024-01-15T10:31:45.000Z"
    },
    {
      "actionId": "507f1f77bcf86cd799439016",
      "actionType": "SMS",
      "actionName": "Send Confirmation SMS",
      "actionParameters": {
        "triggerPrompt": "When caller asks for booking confirmation",
        "triggerMessage": "I'll send you a confirmation text",
        "messageBody": "Your appointment is confirmed for tomorrow at 2 PM"
      },
      "executedAt": "2024-01-15T10:33:30.000Z",
      "triggerReceivedAt": "2024-01-15T10:33:15.000Z"
    },
    {
      "actionId": "507f1f77bcf86cd799439017",
      "actionType": "DATA_EXTRACTION",
      "actionName": "Extract Phone Number",
      "actionParameters": {
        "contactFieldId": "507f1f77bcf86cd799439018",
        "description": "Customer's phone number",
        "examples": [
          "+1234567890",
          "+9876543210"
        ],
        "overwriteExistingValue": false
      },
      "executedAt": "2024-01-15T10:34:15.000Z",
      "triggerReceivedAt": "2024-01-15T10:34:00.000Z"
    },
    {
      "actionId": "507f1f77bcf86cd799439019",
      "actionType": "WORKFLOW_TRIGGER",
      "actionName": "Start Follow-up Workflow",
      "actionParameters": {
        "triggerPrompt": "When caller requests a quote",
        "triggerMessage": "Let me start that process for you",
        "workflowId": "507f1f77bcf86cd799439020"
      },
      "executedAt": "2024-01-15T10:35:00.000Z",
      "triggerReceivedAt": "2024-01-15T10:34:45.000Z"
    },
    {
      "actionId": "507f1f77bcf86cd799439021",
      "actionType": "APPOINTMENT_BOOKING",
      "actionName": "Book Consultation",
      "actionParameters": {
        "calendarId": "507f1f77bcf86cd799439022",
        "daysOfOfferingDates": 3,
        "slotsPerDay": 3,
        "hoursBetweenSlots": 1
      },
      "executedAt": "2024-01-15T10:36:45.000Z",
      "triggerReceivedAt": "2024-01-15T10:36:30.000Z"
    },
    {
      "actionId": "507f1f77bcf86cd799439023",
      "actionType": "CUSTOM_ACTION",
      "actionName": "Check Order Status",
      "actionParameters": {
        "triggerPrompt": "When caller provides order number",
        "triggerMessage": "Let me check that order status",
        "apiDetails": {
          "url": "https://api.example.com/orders",
          "method": "GET",
          "authenticationRequired": true,
          "authenticationValue": "token123",
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json"
            }
          ],
          "parameters": [
            {
              "name": "orderId",
              "description": "Order ID to look up",
              "type": "string",
              "example": "ORD-12345"
            }
          ]
        },
        "responsePathsToExtract": [
          "data.orderId",
          "status"
        ]
      },
      "executedAt": "2024-01-15T10:37:20.000Z",
      "triggerReceivedAt": "2024-01-15T10:37:05.000Z"
    },
    {
      "actionId": "507f1f77bcf86cd799439024",
      "actionType": "IN_CALL_DATA_EXTRACTION",
      "actionName": "Extract Email During Call",
      "actionParameters": {
        "contactFieldId": "507f1f77bcf86cd799439025",
        "description": "Customer's email address",
        "examples": [
          "john@example.com",
          "jane@company.com"
        ],
        "overwriteExistingValue": true
      },
      "executedAt": "2024-01-15T10:31:45.000Z",
      "triggerReceivedAt": "2024-01-15T10:31:30.000Z"
    },
    {
      "actionId": "507f1f77bcf86cd799439026",
      "actionType": "KNOWLEDGE_BASE",
      "actionName": "Query Product Info",
      "actionParameters": {
        "triggerPrompt": "When caller asks about pricing",
        "triggerMessage": "Let me look that up for you",
        "knowledgeBaseId": "507f1f77bcf86cd799439027",
        "parameters": [
          {
            "name": "category",
            "description": "Product category to search",
            "type": "string",
            "example": "pricing"
          }
        ]
      },
      "executedAt": "2024-01-15T10:38:10.000Z",
      "triggerReceivedAt": "2024-01-15T10:37:55.000Z"
    }
  ],
  "summary": "Customer called to inquire about product pricing and was transferred to sales team.",
  "transcript": "bot: Hello, how can I help you today?\nhuman: I would like to know about your pricing...",
  "translation": {
    "translatedTranscript": "Translated version of the call transcript"
  },
  "extractedData": {
    "phoneNumber": "+1234567890",
    "customerName": "John Doe",
    "email": "john.doe@example.com",
    "companyName": "Acme Corp",
    "customField1": "Custom value",
    "customField2": "Another value"
  },
  "messageId": "507f1f77bcf86cd799439014"
}
```
