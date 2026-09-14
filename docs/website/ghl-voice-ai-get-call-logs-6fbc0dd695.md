> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-call-logs). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Call Logs

**Endpoint:** `GET /voice-ai/dashboard/call-logs`

Returns call logs for Voice AI agents scoped to a location. Supports filtering by agent, contact, call type, action types, and date range (interpreted in the provided IANA timezone). Also supports sorting and 1-based pagination.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location identifier. Filters results to this location.

**agentId**

string

Agent identifier. When provided, returns logs for this agent only.

**contactId**

string

Contact IDs (comma-separated) to filter by.

**callType**

string

Call type filter.

Available options

`LIVE`

`TRIAL`

**startDate**

number

Start date filter (Unix timestamp). Must be less than endDate. Both startDate and endDate must be provided together.

**endDate**

number

End date filter (Unix timestamp). Must be greater than startDate. Both startDate and endDate must be provided together.

**actionType**

string

Action type filter for call logs (comma-separated ACTION_TYPE values)

Available options

`CALL_TRANSFER`

`DATA_EXTRACTION`

`IN_CALL_DATA_EXTRACTION`

`WORKFLOW_TRIGGER`

`SMS`

`APPOINTMENT_BOOKING`

`CUSTOM_ACTION`

`KNOWLEDGE_BASE`

**sortBy**

string

Field to sort by. Defaults to newest if omitted.

Available options

`duration`

`createdAt`

**sort**

string

Sort direction. Applies only when sortBy is provided.

Available options

`ascend`

`descend`

**page**

number

Page number (1-based).

`1`

**pageSize**

number

Page size (max 50).

`10`

application/json

Successfully retrieved call logs

- application/json

- Schema
- Example (auto)

**Schema**

**total**numberrequiredTotal number of items**page**numberrequiredPage number starting from 1**pageSize**numberrequiredNumber of items per page**callLogs**object[]requiredArray of call logs

```json
{
  "total": 150,
  "page": 2,
  "pageSize": 10,
  "callLogs": [
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
  ]
}
```
