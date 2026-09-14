# Conversation AI API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/conversation-ai-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for AI Employees API

## Actions

### Attach Action to Agent

**Endpoint:** `POST /conversation-ai/agents/{agentId}/actions`
**Scope:** `conversation-ai.write`
**Token Type:** bearer

Creates and attach a new action for an AI agent. Actions define specific tasks or behaviors that the agent can perform, such as booking appointments, sending follow-ups, or collecting information.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateActionDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `createActionResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Actions for an Agent

**Endpoint:** `GET /conversation-ai/agents/{agentId}/actions/list`
**Scope:** `conversation-ai.readonly`
**Token Type:** bearer

List for actions for an agent

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `fetchActionsForEmployeeResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Action by ID

**Endpoint:** `GET /conversation-ai/agents/{agentId}/actions/{actionId}`
**Scope:** `conversation-ai.readonly`
**Token Type:** bearer

Retrieves detailed information about a specific action using its unique identifier. Returns the action configuration, associated agents, and performance metrics.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `actionId` | path | `string` | Yes | The unique identifier of the action ID Attached to the agent |
| `agentId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `fetchActionDetailsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Action

**Endpoint:** `PUT /conversation-ai/agents/{agentId}/actions/{actionId}`
**Scope:** `conversation-ai.write`
**Token Type:** bearer

Updates an existing action's configuration. This includes modifying the action name, description, trigger conditions, and behavior settings.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `actionId` | path | `string` | Yes | The unique identifier of the action ID Attached to the agent |
| `agentId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateActionDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `updateActionResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Remove Action from Agent

**Endpoint:** `DELETE /conversation-ai/agents/{agentId}/actions/{actionId}`
**Scope:** `conversation-ai.write`
**Token Type:** bearer

Permanently deletes an action. This will remove the action from all associated agents and cannot be undone.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `actionId` | path | `string` | Yes | The unique identifier of the action ID Attached to the agent |
| `agentId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `deleteActionResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Followup Settings

**Endpoint:** `PATCH /conversation-ai/agents/{agentId}/followup-settings`
**Scope:** `conversation-ai.write`
**Token Type:** bearer

Update the followup settings for an action

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateFollowupSettingsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `updateActionResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Agents

### Create an Agent

**Endpoint:** `POST /conversation-ai/agents`
**Scope:** `conversation-ai.write`
**Token Type:** bearer

Creates a new AI agent for the location. The agent will be created with the specified configuration including name, role, actions, and behavior settings.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateEmployeeDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `EmployeeResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Search Agents

**Endpoint:** `GET /conversation-ai/agents/search`
**Scope:** `conversation-ai.readonly`
**Token Type:** bearer

Searches for AI agents based on various criteria including name, status, and configuration. Supports advanced filtering and full-text search capabilities.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `startAfter` | query | `string` | No | Start after is the agent id to start after, Serving as skip, send empty when first page |
| `limit` | query | `number` | No | Records per page |
| `query` | query | `string` | No | query to search on agent name, must be provided in lowercase |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `SearchEmployeeResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Agent

**Endpoint:** `PUT /conversation-ai/agents/{agentId}`
**Scope:** `conversation-ai.write`
**Token Type:** bearer

Updates an existing AI agent's configuration. All fields in the agent configuration can be updated including name, status, actions, and behavior settings.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | Conversations AI agent id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateEmployeeDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `EmployeeResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Agent

**Endpoint:** `GET /conversation-ai/agents/{agentId}`
**Scope:** `conversation-ai.readonly`
**Token Type:** bearer

Retrieves a specific AI agent by its ID. Returns the complete agent configuration including name, status, actions, and settings.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | Conversations AI agent id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `EmployeeResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Agent

**Endpoint:** `DELETE /conversation-ai/agents/{agentId}`
**Scope:** `conversation-ai.write`
**Token Type:** bearer

Deletes an AI agent permanently. This action cannot be undone. All associated configurations and conversation history will be removed.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | Conversations AI agent id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteEmployeeResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Generations

### Get the generation details

**Endpoint:** `GET /conversation-ai/generations`
**Scope:** `conversation-ai.readonly`
**Token Type:** bearer

Retrieves detailed information about AI responses including the System Prompt, Conversation history, Knowledge base, website, FAQ chunks, and Rich Text chunks.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `messageId` | query | `string` | Yes | Message Id |
| `source` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `FetchAIResponseDetailsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### triggerWorkflowDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `workflowIds` | `array<string>` | Yes | Array of workflow IDs to trigger |
| `triggerCondition` | `string` | Yes | Condition that triggers the workflow |
| `triggerMessage` | `string` | No | Optional message to send when triggering the workflow |

### updateContactFieldDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contactFieldId` | `string` | Yes | ID of the contact field in Contacts Table |
| `description` | `string` | Yes | Description of the contact field in Contacts Table |
| `contactUpdateExamples` | `array<string>` | No | Contact update examples in Contacts Table. Not required when using standard fields, Monetory or Date Custom fields. |

### appointmentBookingDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionId` | `string` | No | Optional action ID reference |
| `calendarId` | `string` | Yes | Calendar ID for appointment booking |
| `onlySendLink` | `boolean` | Yes | If true, only sends the appointment link without booking |
| `triggerWorkflow` | `boolean` | Yes | Whether to trigger a workflow after booking (cannot be true when onlySendLink is true) |
| `workflowIds` | `array<string>` | No | Workflow IDs to trigger after booking (required when triggerWorkflow is true) |
| `sleepAfterBooking` | `boolean` | Yes | Whether to put the agent to sleep after booking (cannot be true when onlySendLink is true) |
| `sleepTimeUnit` | `string` | No | Unit for sleep time (required when sleepAfterBooking is true) |
| `sleepTime` | `number` | No | Sleep duration (required when sleepAfterBooking is true) |
| `transferBot` | `boolean` | Yes | Whether to transfer to another agent after booking (cannot be true when onlySendLink is true) |
| `transferAgent` | `string` | No | Agent ID to transfer to (required when transferBot is true) |
| `rescheduleEnabled` | `boolean` | Yes | Whether to allow appointment rescheduling (cannot be true when onlySendLink is true) |
| `cancelEnabled` | `boolean` | Yes | Whether to allow appointment cancellation (cannot be true when onlySendLink is true) |

### stopBotDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `stopBotDetectionType` | `string` | Yes | Type of stop bot detection - Goodbye or Custom |
| `stopBotTriggerCondition` | `string` | Yes | Condition that triggers stopping the bot |
| `reactivateEnabled` | `boolean` | Yes | Whether the bot can be reactivated after being stopped |
| `sleepTimeUnit` | `string` | No | Time unit for reactivation delay (required when reactivateEnabled is true) |
| `sleepTime` | `number` | No | Time duration before reactivation (required when reactivateEnabled is true) |
| `enabled` | `boolean` | Yes | Whether this action is enabled for the agent |
| `stopBotExamples` | `array<string>` | Yes | Example phrases that trigger stop bot action (minimum 2 required) |
| `finalMessage` | `string` | Yes | Final message sent when stopping the bot |
| `tags` | `array<string>` | No | Tags to apply when stopping the bot |

### humanHandOverDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Whether human handover action is enabled |
| `triggerCondition` | `string` | Yes | Condition that triggers human handover |
| `examples` | `array<string>` | No | Example phrases that trigger human handover (required when handoverType is custom or contactRequest) |
| `assignToUserId` | `string` | No | ID of the user to assign the conversation to |
| `skipAssignToUser` | `boolean` | No | Whether to skip assigning to a specific user |
| `createTask` | `boolean` | No | Whether to create a task when handing over |
| `reactivateEnabled` | `boolean` | Yes | Whether the agent can be reactivated after handover |
| `sleepTimeUnit` | `string` | No | Time unit for reactivation delay (required when reactivateEnabled is true) |
| `sleepTime` | `number` | No | Time duration before reactivation (required when reactivateEnabled is true) |
| `finalMessage` | `string` | Yes | Final message sent when handing over to human |
| `tags` | `array<string>` | No | Tags to apply during handover |
| `handoverType` | `string` | Yes | Type of human handover detection |

### FollowupSequence

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes | Unique identifier for this followup step |
| `followupTimeUnit` | `string` | Yes | Time unit for followup delay |
| `followupTime` | `number` | Yes | Time duration before followup (max: 60 minutes, 24 hours, or 180 days depending on unit) |
| `aiEnabledMessage` | `boolean` | No | Whether to use AI to generate the followup message |
| `triggerWorkflow` | `boolean` | No | Whether to trigger a workflow during this followup |
| `customMessage` | `string` | No | Custom message to send (when aiEnabledMessage is false) |
| `workflowId` | `string` | No | Workflow ID to trigger (when triggerWorkflow is true) |
| `contactRequested` | `boolean` | No | Whether contact was requested in this followup |

### Interval

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `startHour` | `number` | Yes | Start hour (24-hour format) |
| `startMinute` | `number` | Yes | Start minute |
| `endHour` | `number` | Yes | End hour (24-hour format) |
| `endMinute` | `number` | Yes | End minute |

### WorkingHours

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dayOfTheWeek` | `number` | Yes | Day of the week (0=Sunday, 1=Monday, etc.) |
| `intervals` | `array<Interval>` | No | Time intervals for this day |

### FollowupSettings

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dynamicChannelSwitching` | `boolean` | Yes | Whether to dynamically switch channels for followups |
| `followUpHours` | `boolean` | No | Whether to respect working hours for followups |
| `workingHours` | `array<WorkingHours>` | No | Working hours configuration for followups |
| `timezoneToUse` | `string` | No | Timezone to use for followups, contact or location |

### advancedFollowupDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Whether advanced followup is enabled |
| `scenarioId` | `string` | Yes | ID of the followup scenario |
| `followupSequence` | `array<FollowupSequence>` | Yes | Sequence of followup actions to perform |
| `followupSettings` | `FollowupSettings` | No | Additional settings for followup behavior |

### transferBotDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `transferBotType` | `string` | Yes | Type of transfer - Default or Custom |
| `transferToBot` | `string` | Yes | ID of the bot/agent to transfer to |
| `enabled` | `boolean` | Yes | Whether this transfer action is enabled |
| `transferBotTriggerCondition` | `string` | No | Condition that triggers the transfer (required for Custom type) |
| `transferBotExamples` | `array<string>` | No | Example phrases that trigger transfer (required for Custom type, minimum 2) |

### CreateActionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `details` | `triggerWorkflowDto or updateContactFieldDto or appointmentBookingDto or stopBotDto or humanHandOverDto or advancedFollowupDto or transferBotDto` | Yes | Action-specific details. The structure depends on the action type. For TRIGGER_WORKFLOW use triggerWorkflowDto, for UPDATE_CONTACT_FIELD use updateContactFieldDto, for APPOINTMENT_BOOKING use appointmentBookingDto, for STOP_BOT use stopBotDto, for HUMAN_HAND_OVER use humanHandOverDto, for ADVANCED_FOLLOWUP use advancedFollowupDto, and for TRANSFER_BOT use transferBotDto. |

### ActionDataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the action |
| `name` | `string` | Yes | Name of the action |
| `type` | `string` | Yes | Type of the action |
| `agentId` | `string` | No | Agent ID where the action belongs |
| `details` | `triggerWorkflowDto or updateContactFieldDto or appointmentBookingDto or stopBotDto or humanHandOverDto or advancedFollowupDto or transferBotDto` | Yes | Action-specific details. The structure depends on the action type. For TRIGGER_WORKFLOW use triggerWorkflowDto, for UPDATE_CONTACT_FIELD use updateContactFieldDto, for APPOINTMENT_BOOKING use appointmentBookingDto, for STOP_BOT use stopBotDto, for HUMAN_HAND_OVER use humanHandOverDto, for ADVANCED_FOLLOWUP use advancedFollowupDto, and for TRANSFER_BOT use transferBotDto. |

### createActionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `ActionDataDTO` | Yes | Created action details |
| `success` | `boolean` | Yes | Success status of the request |

### fetchActionsForEmployeeResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array<ActionDataDTO>` | Yes | Grouped actions by type |
| `success` | `boolean` | Yes | Success status of the request |

### fetchActionDetailsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `ActionDataDTO` | Yes | Action details |
| `success` | `boolean` | Yes | Success status of the request |

### updateActionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `ActionDataDTO` | Yes | Updated action details |
| `success` | `boolean` | Yes | Success status of the request |

### DeleteActionDataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | ID of the deleted action |

### deleteActionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `DeleteActionDataDTO` | Yes | Deleted action information |
| `success` | `boolean` | Yes | Success status of the request |

### UpdateFollowupSettingsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionIds` | `array<string>` | Yes | — |
| `followupSettings` | `FollowupSettings` | Yes | — |

### CreateEmployeeDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Name of the agent. |
| `businessName` | `string` | No | Name of the business the agent represents. |
| `mode` | `string` | No | Mode of operation - OFF, SUGGESTIVE, or AUTO_PILOT |
| `channels` | `array<string>` | No | Communication channels the agent can operate on |
| `isPrimary` | `boolean` | No | Indicates if this agent is a primary agent. |
| `waitTime` | `number` | No | Wait time before agent responds (max 5 for minutes, 300 for seconds) |
| `waitTimeUnit` | `string` | No | Unit for wait time - SECONDS or MINUTES |
| `sleepEnabled` | `boolean` | No | Indicates if sleep functionality is enabled. |
| `sleepTime` | `number` | No | Duration of sleep period (required if sleepEnabled is true). Set to null for indefinite sleep. (max 2880 for minutes, 172800 for seconds, 48 for hours) |
| `sleepTimeUnit` | `string` | No | Unit of sleep time - HOURS, MINUTES, or SECONDS (required if sleepEnabled is true). Set to null for indefinite sleep. |
| `personality` | `string` | Yes | Personality traits of the agent. |
| `goal` | `string` | Yes | The goal of the agent. |
| `instructions` | `string` | Yes | Instructions for the agent. |
| `autoPilotMaxMessages` | `number` | No | Maximum number of messages in auto-pilot mode before requiring human intervention. (max: 100, min: 1) |
| `knowledgeBaseIds` | `array<string>` | No | Array of knowledge base IDs associated with this agent. |
| `respondToImages` | `boolean` | No | Allow agent to respond to images |
| `respondToAudio` | `boolean` | No | Allow agent to respond to audio |
| `sleepOnManualMessage` | `boolean` | No | Enable sleep when a manual outbound message is sent. |
| `sleepOnWorkflowMessage` | `boolean` | No | Enable sleep when a workflow outbound message is sent. |

### ActionsIdDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the action. |
| `type` | `string` | Yes | type of action. |

### EmployeeResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the agent. |
| `name` | `string` | Yes | Name of the agent. |
| `businessName` | `string` | No | Name of the business the agent represents. |
| `mode` | `string` | Yes | Current operating mode of the agent. |
| `channels` | `array<string>` | Yes | Communication channels the agent operates on. |
| `waitTime` | `number` | Yes | Wait time before agent responds. |
| `waitTimeUnit` | `string` | Yes | Unit for wait time. |
| `sleepEnabled` | `boolean` | Yes | Indicates if sleep functionality is enabled. |
| `sleepTime` | `number` | No | Duration of sleep period. |
| `sleepTimeUnit` | `string` | No | Unit of sleep time. |
| `actions` | `array<ActionsIdDto>` | Yes | List of actions associated with this agent. |
| `isPrimary` | `boolean` | Yes | Indicates if this agent is a primary agent. |
| `autoPilotMaxMessages` | `number` | Yes | Maximum number of messages in auto-pilot mode before requiring human intervention. |
| `goal` | `string` | No | The goal of the agent. |
| `personality` | `string` | No | Personality traits of the agent. |
| `instructions` | `string` | No | Instructions for the agent. |
| `knowledgeBaseIds` | `array<string>` | No | Array of knowledge base IDs associated with this agent. |
| `sleepOnManualMessage` | `boolean` | No | Whether the bot sleeps on manual outbound messages. |
| `sleepOnWorkflowMessage` | `boolean` | No | Whether the bot sleeps on workflow outbound messages. |

### EmployeeListItemDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the agent. |
| `name` | `string` | Yes | Name of the agent. |
| `businessName` | `string` | No | Name of the business the agent represents. |
| `mode` | `string` | Yes | Current operating mode of the agent. |
| `channels` | `array<string>` | Yes | Communication channels the agent operates on. |
| `waitTime` | `number` | Yes | Wait time before agent responds. |
| `waitTimeUnit` | `string` | Yes | Unit for wait time. |
| `sleepEnabled` | `boolean` | Yes | Indicates if sleep functionality is enabled. |
| `sleepTime` | `number` | No | Duration of sleep period. |
| `sleepTimeUnit` | `string` | No | Unit of sleep time. |
| `actions` | `array<object>` | Yes | List of actions associated with this agent. |
| `isPrimary` | `boolean` | Yes | Indicates if this agent is a primary agent. (First agent created for a location is primary by default) |
| `autoPilotMaxMessages` | `number` | Yes | Maximum number of messages in auto-pilot mode before requiring human intervention. |
| `goal` | `object` | No | Goal configuration for the agent. |
| `knowledgeBaseIds` | `array<string>` | No | Array of knowledge base IDs associated with this agent. |
| `createdAt` | `string` | Yes | Timestamp when the agent was created. |
| `updatedAt` | `string` | Yes | Timestamp when the agent was last updated. |
| `sleepOnManualMessage` | `boolean` | No | Whether the bot sleeps on manual outbound messages. |
| `sleepOnWorkflowMessage` | `boolean` | No | Whether the bot sleeps on workflow outbound messages. |

### SearchEmployeeResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents` | `array<EmployeeListItemDTO>` | Yes | List of agents matching the search criteria. |
| `totalCount` | `number` | Yes | Total number of agents in the location (unfiltered count). |
| `count` | `number` | Yes | Number of agents in the current response (filtered/paginated count). |

### UpdateEmployeeDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Name of the agent. |
| `businessName` | `string` | No | Name of the business the agent represents. |
| `mode` | `string` | No | Mode of operation for the agent, required if primary is enabled. |
| `channels` | `array<string>` | No | Channels the agent can use. |
| `isPrimary` | `boolean` | No | Indicates if this agent is a primary agent. |
| `waitTime` | `number` | No | Wait time before agent responds (max 5 for minutes, 300 for seconds). |
| `waitTimeUnit` | `string` | No | Unit for wait time - SECONDS or MINUTES |
| `sleepEnabled` | `boolean` | No | Indicates if sleep functionality is enabled. |
| `sleepTime` | `number` | No | Duration of sleep period (required if sleepEnabled is true). Set to null for indefinite sleep. (max 2880 for minutes, 172800 for seconds, 48 for hours) |
| `sleepTimeUnit` | `string` | No | Unit of sleep time - HOURS, MINUTES, or SECONDS (required if sleepEnabled is true). Set to null for indefinite sleep. |
| `personality` | `string` | No | Personality traits of the agent. |
| `goal` | `string` | No | The goal of the agent. |
| `instructions` | `string` | No | Instructions for the agent. |
| `autoPilotMaxMessages` | `number` | Yes | Maximum number of messages in auto-pilot mode before requiring human intervention. (max: 100, min: 1) |
| `knowledgeBaseIds` | `array<string>` | No | Array of knowledge base IDs associated with this agent. |
| `respondToImages` | `boolean` | No | Allow agent to respond to images |
| `respondToAudio` | `boolean` | No | Allow agent to respond to audio |
| `sleepOnManualMessage` | `boolean` | No | Enable sleep when a manual outbound message is sent. |
| `sleepOnWorkflowMessage` | `boolean` | No | Enable sleep when a workflow outbound message is sent. |

### DeleteEmployeeResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Indicates if the agent was deleted successfully. |
| `id` | `string` | Yes | Unique identifier of the deleted agent. |

### FetchAIResponseDetailsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `prompt` | `string` | Yes | The complete prompt used for the AI response. |
| `intent` | `string` | No | The intent/goal extracted from location prompt. |
| `responseMessage` | `string` | Yes | The response message generated by the AI. |
| `faqs` | `array<object>` | No | FAQ chunks used in generating the response from fine-tuned data. |
| `website` | `array<object>` | No | Website content chunks used in generating the response. |
| `agentId` | `string` | No | ID of the employee/agent that generated the response. |
| `input` | `string` | No | The original input message that triggered this response. |
| `actionLogs` | `array<object>` | Yes | List of actions taken during this interaction. |
| `history` | `array<object>` | Yes | Conversation history leading up to this response. |
| `mode` | `string` | No | Mode of operation during this interaction. |
