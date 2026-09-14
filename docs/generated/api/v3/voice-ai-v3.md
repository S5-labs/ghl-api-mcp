# Voice AI API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/voice-ai-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Voice AI API

## Agents

### Create Agent

**Endpoint:** `POST /voice-ai/agents`
**Scope:** `voice-ai-agents.write`
**Token Type:** bearer

Create a new voice AI agent configuration and settings

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AgentCreationRequestDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Agent created successfully | `CreateAgentResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### List Agents

**Endpoint:** `GET /voice-ai/agents`
**Scope:** `voice-ai-agents.readonly`
**Token Type:** bearer

Retrieve a paginated list of agents for given location.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `page` | query | `number` | No | Page number starting from 1 |
| `pageSize` | query | `number` | No | Number of items per page |
| `locationId` | query | `string` | Yes | Location ID |
| `query` | query | `string` | No | Query |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agent list retrieved successfully. | `GetAgentsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Patch Agent

**Endpoint:** `PATCH /voice-ai/agents/{agentId}`
**Scope:** `voice-ai-agents.write`
**Token Type:** bearer

Partially update an existing voice AI agent

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | Unique agent identifier |
| `locationId` | query | `string` | Yes | Location ID |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `PatchAgentDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agent updated successfully | `PatchAgentResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Agent

**Endpoint:** `GET /voice-ai/agents/{agentId}`
**Scope:** `voice-ai-agents.readonly`
**Token Type:** bearer

Retrieve detailed configuration and settings for a specific voice AI agent

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | Unique agent identifier |
| `locationId` | query | `string` | Yes | Location ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agent details retrieved successfully | `GetAgentResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Agent

**Endpoint:** `DELETE /voice-ai/agents/{agentId}`
**Scope:** `voice-ai-agents.write`
**Token Type:** bearer

Delete a voice AI agent and all its configurations

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | Unique agent identifier |
| `locationId` | query | `string` | Yes | Location ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `204` | Agent deleted successfully | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Dashboard

### List Call Logs

**Endpoint:** `GET /voice-ai/dashboard/call-logs`
**Scope:** `voice-ai-dashboard.readonly`
**Token Type:** bearer

Returns call logs for Voice AI agents scoped to a location. Supports filtering by agent, contact, call type, action types, and date range (interpreted in the provided IANA timezone). Also supports sorting and 1-based pagination.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location identifier. Filters results to this location. |
| `agentId` | query | `string` | No | Agent identifier. When provided, returns logs for this agent only. |
| `contactId` | query | `string` | No | Contact IDs (comma-separated) to filter by. |
| `callType` | query | `string` | No | Call type filter. |
| `startDate` | query | `number` | No | Start date filter (Unix timestamp). Must be less than endDate. Both startDate and endDate must be provided together. |
| `endDate` | query | `number` | No | End date filter (Unix timestamp). Must be greater than startDate. Both startDate and endDate must be provided together. |
| `actionType` | query | `string` | No | Action type filter for call logs (comma-separated ACTION_TYPE values) |
| `sortBy` | query | `string` | No | Field to sort by. Defaults to newest if omitted. |
| `sort` | query | `string` | No | Sort direction. Applies only when sortBy is provided. |
| `page` | query | `number` | No | Page number (1-based). |
| `pageSize` | query | `number` | No | Page size (max 50). |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved call logs | `CallLogsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Call Log

**Endpoint:** `GET /voice-ai/dashboard/call-logs/{callId}`
**Scope:** `voice-ai-dashboard.readonly`
**Token Type:** bearer

Returns a call log by callId.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `callId` | path | `string` | Yes | Call ID |
| `locationId` | query | `string` | Yes | Location ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully retrieved call log | `CallLogDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Actions

### Create Agent Action

**Endpoint:** `POST /voice-ai/actions`
**Scope:** `voice-ai-agent-goals.write`
**Token Type:** bearer

Create a new action for a voice AI agent. Actions define specific behaviors and capabilities for the agent during calls.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateSingleActionDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Action created successfully | `CreateActionResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Agent Action

**Endpoint:** `PUT /voice-ai/actions/{actionId}`
**Scope:** `voice-ai-agent-goals.write`
**Token Type:** bearer

Update an existing action for a voice AI agent. Modifies the behavior and configuration of an agent action.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `actionId` | path | `string` | Yes | Unique identifier for the action |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateSingleActionDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Action updated successfully | `UpdateActionResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Agent Action

**Endpoint:** `GET /voice-ai/actions/{actionId}`
**Scope:** `voice-ai-agent-goals.readonly`
**Token Type:** bearer

Retrieve details of a specific action by its ID. Returns the action configuration including actionParameters.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `actionId` | path | `string` | Yes | Unique identifier for the action |
| `locationId` | query | `string` | Yes | Location ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Action details retrieved successfully | `GetActionResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Agent Action

**Endpoint:** `DELETE /voice-ai/actions/{actionId}`
**Scope:** `voice-ai-agent-goals.write`
**Token Type:** bearer

Delete an existing action from a voice AI agent. This permanently removes the action and its configuration.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `actionId` | path | `string` | Yes | Unique identifier for the action |
| `locationId` | query | `string` | Yes | Location ID |
| `agentId` | query | `string` | Yes | Agent ID the action is attached to |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `204` | Action deleted successfully | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### VoiceAILanguage

Language code for the agent's speech and understanding. Default: "en-US"

Type: `string`

### PatienceLevel

Tolerance level for caller response delays. Default: "high"

Type: `string`

### SendPostCallNotificationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admins` | `boolean` | Yes | Enables post-call notifications to all admin users in the location. Default: true |
| `allUsers` | `boolean` | Yes | Enables post-call notifications to all users in the location. Default: false |
| `contactAssignedUser` | `boolean` | Yes | Enables post-call notifications to the user assigned to the contact. Default: false |
| `specificUsers` | `array<string>` | Yes | Array of specific user IDs to receive post-call notifications. Default: [] |
| `customEmails` | `array<string>` | Yes | Array of custom email addresses to receive post-call notifications. Default: [] |

### IntervalDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `startHour` | `number` | Yes | Starting hour of the working interval in 24-hour format (0-23) |
| `endHour` | `number` | Yes | Ending hour of the working interval in 24-hour format (0-23) |
| `startMinute` | `number` | Yes | Starting minute of the working interval (0-59) |
| `endMinute` | `number` | Yes | Ending minute of the working interval (0-59) |

### AgentWorkingHoursDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dayOfTheWeek` | `number` | Yes | Day of the week for this working hours configuration (Monday=1 to Sunday=7) |
| `intervals` | `array<IntervalDTO>` | Yes | Array of time intervals when the agent is available on this day |

### TranslationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Enables language translation for agent conversations. Default: false |
| `language` | `string` | No | Target language code for translation (e.g., "es" for Spanish, "fr" for French). |

### AgentCreationRequestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Unique identifier for the location where this agent will operate |
| `agentName` | `string` | No | Display name for the voice AI agent, between 1-40 characters. Default: "My Agent {random 3 digit number}" |
| `businessName` | `string` | No | Name of the business this agent represents. Default: Uses location name |
| `welcomeMessage` | `string` | No | Initial greeting spoken when the agent answers calls. Default: Auto generated |
| `agentPrompt` | `string` | No | Custom instructions defining the agent's behavior and personality. Default: Basic prompt generated automatically |
| `voiceId` | `string` | No | Identifier for the speech synthesis voice from available voice options. Default: Auto generated |
| `language` | `VoiceAILanguage` | No | — |
| `patienceLevel` | `PatienceLevel` | No | — |
| `maxCallDuration` | `number` | No | Maximum call duration in seconds, between 180-900 (3-15 minutes). Default: 300 seconds (5 minutes) |
| `sendUserIdleReminders` | `boolean` | No | Enables automatic reminders when callers are silent. Default: true |
| `reminderAfterIdleTimeSeconds` | `number` | No | Seconds to wait before sending idle reminders, between 1-20. Default: 8 seconds |
| `inboundNumber` | `string` | No | Phone number for receiving inbound calls to this agent. Default: null |
| `numberPoolId` | `string` | No | Identifier for the number pool managing phone number allocation. Default: null |
| `callEndWorkflowIds` | `array<string>` | No | Array of workflow IDs to trigger automatically when calls end. Default: [] |
| `sendPostCallNotificationTo` | `SendPostCallNotificationDTO` | No | Configuration for post-call email notifications to various recipients. Default: [] |
| `agentWorkingHours` | `array<AgentWorkingHoursDTO>` | No | Time intervals defining when the agent accepts calls, organized by day of week. Default: [] (available 24/7) |
| `timezone` | `string` | No | IANA timezone identifier affecting working hours and scheduling. Default: Location timezone |
| `isAgentAsBackupDisabled` | `boolean` | No | Prevents this agent from being used as a fallback option. Default: false (Available as backup agent) |
| `translation` | `TranslationDTO` | No | Language translation settings including enablement flag and target language code. Rules: (1) translation.enabled can only be true if the agent's language is not en-US; (2) when enabled, translation.language must be either the agent's language or en-US; (3) when enabled, translation.language is required. |

### SendPostCallNotificationSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admins` | `boolean` | No | Send notifications to admins |
| `allUsers` | `boolean` | No | Send notifications to all users |
| `contactAssignedUser` | `boolean` | No | Send notifications to contact assigned user |
| `specificUsers` | `array<string>` | No | Specific user IDs to notify |
| `customEmails` | `array<string>` | No | Custom email addresses to notify |

### TranslationSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | No | Whether translation is enabled |
| `language` | `string` | No | Translation language code |

### CreateAgentResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the created agent |
| `locationId` | `string` | Yes | Unique identifier for the location where this agent operates |
| `agentName` | `string` | Yes | Display name of the voice AI agent |
| `businessName` | `string` | Yes | Name of the business this agent represents |
| `welcomeMessage` | `string` | Yes | Greeting message spoken when the agent answers calls |
| `agentPrompt` | `string` | Yes | Custom instructions defining the agent's behavior |
| `voiceId` | `string` | Yes | Identifier for the speech synthesis voice being used |
| `language` | `string` | Yes | Language code for the agent's speech and understanding |
| `patienceLevel` | `string` | Yes | Current tolerance level for caller response delays |
| `maxCallDuration` | `number` | Yes | Maximum call duration in seconds, between 180-900 |
| `sendUserIdleReminders` | `boolean` | Yes | Indicates whether automatic idle reminders are enabled |
| `reminderAfterIdleTimeSeconds` | `number` | Yes | Seconds to wait before sending idle reminders, between 1-20 |
| `inboundNumber` | `string` | No | Phone number for receiving inbound calls |
| `numberPoolId` | `string` | No | Identifier for the number pool managing this agent's phone allocation |
| `callEndWorkflowIds` | `array<string>` | No | Array of workflow IDs triggered automatically when calls end |
| `sendPostCallNotificationTo` | `SendPostCallNotificationSchema` | No | Current post-call notification settings including recipient configuration |
| `agentWorkingHours` | `array<AgentWorkingHoursDTO>` | No | Time intervals when the agent accepts calls, organized by day of week |
| `timezone` | `string` | Yes | IANA timezone identifier for working hours and scheduling |
| `isAgentAsBackupDisabled` | `boolean` | Yes | Indicates whether this agent is excluded from backup scenarios |
| `translation` | `TranslationSchema` | No | Current language translation settings including enablement status and target language |

### PatchAgentDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentName` | `string` | No | Display name for the voice AI agent, between 1-40 characters. Default: "My Agent {random 3 digit number}" |
| `businessName` | `string` | No | Name of the business this agent represents. Default: Uses location name |
| `welcomeMessage` | `string` | No | Initial greeting spoken when the agent answers calls. Default: Auto generated |
| `agentPrompt` | `string` | No | Custom instructions defining the agent's behavior and personality. Default: Basic prompt generated automatically |
| `voiceId` | `string` | No | Identifier for the speech synthesis voice from available voice options. Default: Auto generated |
| `language` | `VoiceAILanguage` | No | — |
| `patienceLevel` | `PatienceLevel` | No | — |
| `maxCallDuration` | `number` | No | Maximum call duration in seconds, between 180-900 (3-15 minutes). Default: 300 seconds (5 minutes) |
| `sendUserIdleReminders` | `boolean` | No | Enables automatic reminders when callers are silent. Default: true |
| `reminderAfterIdleTimeSeconds` | `number` | No | Seconds to wait before sending idle reminders, between 1-20. Default: 8 seconds |
| `inboundNumber` | `string` | No | Phone number for receiving inbound calls to this agent. Default: null |
| `numberPoolId` | `string` | No | Identifier for the number pool managing phone number allocation. Default: null |
| `callEndWorkflowIds` | `array<string>` | No | Array of workflow IDs to trigger automatically when calls end. Default: [] |
| `sendPostCallNotificationTo` | `SendPostCallNotificationDTO` | No | Configuration for post-call email notifications to various recipients. Default: [] |
| `agentWorkingHours` | `array<AgentWorkingHoursDTO>` | No | Time intervals defining when the agent accepts calls, organized by day of week. Default: [] (available 24/7) |
| `timezone` | `string` | No | IANA timezone identifier affecting working hours and scheduling. Default: Location timezone |
| `isAgentAsBackupDisabled` | `boolean` | No | Prevents this agent from being used as a fallback option. Default: false (Available as backup agent) |
| `translation` | `TranslationDTO` | No | Language translation settings including enablement flag and target language code. Rules: (1) translation.enabled can only be true if the agent's language is not en-US; (2) when enabled, translation.language must be either the agent's language or en-US; (3) when enabled, translation.language is required. |

### PatchAgentResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the created agent |
| `locationId` | `string` | Yes | Unique identifier for the location where this agent operates |
| `agentName` | `string` | Yes | Display name of the voice AI agent |
| `businessName` | `string` | Yes | Name of the business this agent represents |
| `welcomeMessage` | `string` | Yes | Greeting message spoken when the agent answers calls |
| `agentPrompt` | `string` | Yes | Custom instructions defining the agent's behavior |
| `voiceId` | `string` | Yes | Identifier for the speech synthesis voice being used |
| `language` | `string` | Yes | Language code for the agent's speech and understanding |
| `patienceLevel` | `string` | Yes | Current tolerance level for caller response delays |
| `maxCallDuration` | `number` | Yes | Maximum call duration in seconds, between 180-900 |
| `sendUserIdleReminders` | `boolean` | Yes | Indicates whether automatic idle reminders are enabled |
| `reminderAfterIdleTimeSeconds` | `number` | Yes | Seconds to wait before sending idle reminders, between 1-20 |
| `inboundNumber` | `string` | No | Phone number for receiving inbound calls |
| `numberPoolId` | `string` | No | Identifier for the number pool managing this agent's phone allocation |
| `callEndWorkflowIds` | `array<string>` | No | Array of workflow IDs triggered automatically when calls end |
| `sendPostCallNotificationTo` | `SendPostCallNotificationSchema` | No | Current post-call notification settings including recipient configuration |
| `agentWorkingHours` | `array<AgentWorkingHoursDTO>` | No | Time intervals when the agent accepts calls, organized by day of week |
| `timezone` | `string` | Yes | IANA timezone identifier for working hours and scheduling |
| `isAgentAsBackupDisabled` | `boolean` | Yes | Indicates whether this agent is excluded from backup scenarios |
| `translation` | `TranslationSchema` | No | Current language translation settings including enablement status and target language |

### AgentActionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this action |
| `actionType` | `string` | Yes | Type of action |
| `name` | `string` | Yes | Human-readable name for this action |
| `actionParameters` | `CallTransferActionParameters or DataExtractionActionParameters or InCallDataExtractionActionParameters or WorkflowTriggerParameters or SMSParameters or AppointmentBookingActionParameters or CustomActionParameters or KnowledgeBaseParameters` | Yes | Action parameters - structure varies by actionType |

### GetAgentResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the created agent |
| `locationId` | `string` | Yes | Unique identifier for the location where this agent operates |
| `agentName` | `string` | Yes | Display name of the voice AI agent |
| `businessName` | `string` | Yes | Name of the business this agent represents |
| `welcomeMessage` | `string` | Yes | Greeting message spoken when the agent answers calls |
| `agentPrompt` | `string` | Yes | Custom instructions defining the agent's behavior |
| `voiceId` | `string` | Yes | Identifier for the speech synthesis voice being used |
| `language` | `string` | Yes | Language code for the agent's speech and understanding |
| `patienceLevel` | `string` | Yes | Current tolerance level for caller response delays |
| `maxCallDuration` | `number` | Yes | Maximum call duration in seconds, between 180-900 |
| `sendUserIdleReminders` | `boolean` | Yes | Indicates whether automatic idle reminders are enabled |
| `reminderAfterIdleTimeSeconds` | `number` | Yes | Seconds to wait before sending idle reminders, between 1-20 |
| `inboundNumber` | `string` | No | Phone number for receiving inbound calls |
| `numberPoolId` | `string` | No | Identifier for the number pool managing this agent's phone allocation |
| `callEndWorkflowIds` | `array<string>` | No | Array of workflow IDs triggered automatically when calls end |
| `sendPostCallNotificationTo` | `SendPostCallNotificationSchema` | No | Current post-call notification settings including recipient configuration |
| `agentWorkingHours` | `array<AgentWorkingHoursDTO>` | No | Time intervals when the agent accepts calls, organized by day of week |
| `timezone` | `string` | Yes | IANA timezone identifier for working hours and scheduling |
| `isAgentAsBackupDisabled` | `boolean` | Yes | Indicates whether this agent is excluded from backup scenarios |
| `translation` | `TranslationSchema` | No | Current language translation settings including enablement status and target language |
| `actions` | `array<AgentActionResponseDTO>` | Yes | Raw actions configured for this agent with complete actionParameters structure |

### GetAgentsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total` | `number` | Yes | Total number of items |
| `page` | `number` | Yes | Page number starting from 1 |
| `pageSize` | `number` | Yes | Number of items per page |
| `agents` | `array<GetAgentResponseDTO>` | Yes | — |

### CallTransferActionParameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `triggerPrompt` | `string` | Yes | When to trigger this action during the call |
| `transferToType` | `string` | Yes | Type of transfer destination (currently only "number" is supported) |
| `transferToValue` | `string` | Yes | Phone number to transfer to. Must start with +, include country code, contain only numbers, and be 11-16 characters long (e.g., +12345678901). |
| `triggerMessage` | `string` | Yes | Message to tell the caller before transferring |
| `hearWhisperMessage` | `boolean` | No | Whether to play whisper message to the receiving party |

### DataExtractionActionParameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contactFieldId` | `string` | Yes | ID of the contact field to be updated with the extracted data |
| `description` | `string` | Yes | Description of what data to extract |
| `examples` | `array<string>` | Yes | Example values to help Agent understand the expected format. At least one example is required, maximum 5 examples allowed. |
| `overwriteExistingValue` | `boolean` | No | Whether to overwrite existing field value if already set, default is false |

### InCallDataExtractionActionParameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contactFieldId` | `string` | Yes | ID of the contact field to be updated with the extracted data |
| `description` | `string` | Yes | Description of what data to extract |
| `examples` | `array<string>` | Yes | Example values to help Agent understand the expected format. At least one example is required, maximum 5 examples allowed. |
| `overwriteExistingValue` | `boolean` | No | Whether to overwrite existing field value if already set, default is false |

### WorkflowTriggerParameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `triggerPrompt` | `string` | Yes | When to trigger this workflow |
| `triggerMessage` | `string` | Yes | Message to tell the caller |
| `workflowId` | `string` | Yes | Workflow ID to trigger |

### SMSParameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `triggerPrompt` | `string` | Yes | When to send the SMS |
| `triggerMessage` | `string` | Yes | Message to tell the caller |
| `messageBody` | `string` | Yes | SMS message content to send |

### AppointmentBookingActionParameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calendarId` | `string` | Yes | Calendar ID to book appointments in |
| `daysOfOfferingDates` | `number` | Yes | Number of days ahead to offer booking dates |
| `slotsPerDay` | `number` | Yes | Number of available slots per day |
| `hoursBetweenSlots` | `number` | Yes | Hours between available slots |

### CustomActionHeaderDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | HTTP header name |
| `value` | `string` | Yes | HTTP header value |

### CustomActionParameterDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Parameter name |
| `description` | `string` | No | Parameter description |
| `type` | `string` | No | Parameter type |
| `example` | `string` | No | Example parameter value |

### CustomActionApiDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | Yes | API endpoint URL |
| `method` | `string` | Yes | HTTP method |
| `authenticationRequired` | `boolean` | No | Whether authentication is required |
| `authenticationValue` | `string` | No | Authentication token or API key (required if authenticationRequired is true) |
| `headers` | `array<CustomActionHeaderDTO>` | No | HTTP headers to include |
| `parameters` | `array<CustomActionParameterDTO>` | No | API parameters to send |

### CustomActionParameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `triggerPrompt` | `string` | Yes | When to call the custom API |
| `triggerMessage` | `string` | Yes | Message to tell the caller |
| `apiDetails` | `CustomActionApiDetailsDTO` | Yes | API endpoint configuration |
| `selectedPaths` | `array<string>` | No | Selected response paths to extract from API response. Required: at least 1 value if the method is GET. Should be empty if the method is POST. |

### KnowledgeBaseParameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `triggerPrompt` | `string` | Yes | When to query the knowledge base |
| `knowledgeBaseId` | `string` | Yes | Knowledge base ID to query |

### CallActionSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionId` | `string` | No | Action ID reference |
| `actionType` | `string` | Yes | Action type |
| `actionName` | `string` | Yes | Action name |
| `actionParameters` | `CallTransferActionParameters or DataExtractionActionParameters or InCallDataExtractionActionParameters or WorkflowTriggerParameters or SMSParameters or AppointmentBookingActionParameters or CustomActionParameters or KnowledgeBaseParameters` | No | Action parameters - structure varies by actionType |
| `executedAt` | `string (date-time)` | No | When the action was executed |
| `triggerReceivedAt` | `string (date-time)` | No | When the trigger was received |

### ExtractedDataSchema

Type: `object`

### CallLogDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the call |
| `contactId` | `string` | No | Associated contact ID |
| `agentId` | `string` | Yes | Agent ID associated with the call |
| `isAgentDeleted` | `boolean` | Yes | Whether the agent is deleted |
| `fromNumber` | `string` | No | Caller phone number |
| `createdAt` | `string (date-time)` | Yes | Timestamp when the call was created |
| `duration` | `number` | Yes | Call duration in seconds |
| `trialCall` | `boolean` | Yes | Whether this call was a trial call |
| `executedCallActions` | `array<CallActionSchema>` | Yes | Actions performed during the call. Note: The APPOINTMENT_BOOKING action will only be visible in executedCallActions from Sep 9th 2025. |
| `summary` | `string` | Yes | Call summary |
| `transcript` | `string` | Yes | Call transcript |
| `translation` | `TranslationSchema` | No | Transcript translation details |
| `extractedData` | `ExtractedDataSchema` | No | Dynamic data extracted from the call based on agent configuration |
| `messageId` | `string` | No | Message identifier associated with the call |

### CallLogsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total` | `number` | Yes | Total number of items |
| `page` | `number` | Yes | Page number starting from 1 |
| `pageSize` | `number` | Yes | Number of items per page |
| `callLogs` | `array<CallLogDTO>` | Yes | Array of call logs |

### CreateSingleActionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | Yes | Agent ID to attach the action to |
| `locationId` | `string` | Yes | Location ID |
| `actionType` | `string` | Yes | Type of action |
| `name` | `string` | Yes | Human-readable name for this action |
| `actionParameters` | `CallTransferActionParameters or DataExtractionActionParameters or InCallDataExtractionActionParameters or WorkflowTriggerParameters or SMSParameters or AppointmentBookingActionParameters or CustomActionParameters or KnowledgeBaseParameters` | Yes | Action parameters - structure varies by actionType |

### CreateActionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the created action |
| `actionType` | `string` | Yes | Type of action |
| `name` | `string` | Yes | Human-readable name for this action |
| `actionParameters` | `CallTransferActionParameters or DataExtractionActionParameters or InCallDataExtractionActionParameters or WorkflowTriggerParameters or SMSParameters or AppointmentBookingActionParameters or CustomActionParameters or KnowledgeBaseParameters` | Yes | Action parameters - structure varies by actionType |

### UpdateSingleActionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | Yes | Agent ID to attach the action to |
| `locationId` | `string` | Yes | Location ID |
| `actionType` | `string` | Yes | Type of action |
| `name` | `string` | Yes | Human-readable name for this action |
| `actionParameters` | `CallTransferActionParameters or DataExtractionActionParameters or InCallDataExtractionActionParameters or WorkflowTriggerParameters or SMSParameters or AppointmentBookingActionParameters or CustomActionParameters or KnowledgeBaseParameters` | Yes | Action parameters - structure varies by actionType |

### UpdateActionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the created action |
| `actionType` | `string` | Yes | Type of action |
| `name` | `string` | Yes | Human-readable name for this action |
| `actionParameters` | `CallTransferActionParameters or DataExtractionActionParameters or InCallDataExtractionActionParameters or WorkflowTriggerParameters or SMSParameters or AppointmentBookingActionParameters or CustomActionParameters or KnowledgeBaseParameters` | Yes | Action parameters - structure varies by actionType |

### GetActionResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the action |
| `actionType` | `string` | Yes | Type of action |
| `name` | `string` | Yes | Human-readable name for this action |
| `actionParameters` | `CallTransferActionParameters or DataExtractionActionParameters or InCallDataExtractionActionParameters or WorkflowTriggerParameters or SMSParameters or AppointmentBookingActionParameters or CustomActionParameters or KnowledgeBaseParameters` | Yes | Action parameters - structure varies by actionType |
