# Agent Studio APIs

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/agent-studio-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Agent Studio APIs

## Agents

### Create Agent

**Endpoint:** `POST /agent-studio/agent`
**Scope:** `agent-studio.write`
**Token Type:** Location-Access

Creates a new agent with staging version. The agent will be created with an initial staging version that can later be promoted to production.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `source` | query | `string` | No | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreatePublicAgentDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Agent created successfully | `CreatePublicAgentResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### List Agents

**Endpoint:** `GET /agent-studio/agent`
**Scope:** `agent-studio.readonly`
**Token Type:** Location-Access

Lists all active agents for the specified location. locationId is required parameter to ensure optimal performance. Supports pagination using limit and offset. Optionally filter by isPublished=true to return only agents with a published production version.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `isPublished` | query | `string` | No | Optional filter to return only agents with a published production version |
| `limit` | query | `string` | Yes | — |
| `offset` | query | `string` | Yes | — |
| `source` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agents retrieved successfully | `GetPublishedAgentsResponseDTO` |
| `400` | Bad Request - locationId is required | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Update Agent

**Endpoint:** `PATCH /agent-studio/agent/versions/{versionId}`
**Scope:** `agent-studio.write`
**Token Type:** Location-Access

Updates a specific agent version by versionId. Supports updating nodes, edges, variables, and configuration.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `versionId` | path | `string` | Yes | — |
| `source` | query | `string` | No | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdatePublicAgentVersionDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Version updated successfully | `UpdatePublicAgentResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Version not found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Update Agent Metadata

**Endpoint:** `PATCH /agent-studio/agent/{agentId}`
**Scope:** `agent-studio.write`
**Token Type:** Location-Access

Updates agent metadata such as name, description, and status.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | — |
| `source` | query | `string` | No | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdatePublicAgentMetadataDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agent metadata updated successfully | `UpdatePublicAgentResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Agent not found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Delete Agent

**Endpoint:** `DELETE /agent-studio/agent/{agentId}`
**Scope:** `agent-studio.write`
**Token Type:** Location-Access

Deletes an agent and all its versions.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | — |
| `source` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agent deleted successfully | `DeletePublicAgentResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Agent not found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Get Agent

**Endpoint:** `GET /agent-studio/agent/{agentId}`
**Scope:** `agent-studio.readonly`
**Token Type:** Location-Access

Gets a specific agent by its ID for the specified location with all its versions. Returns complete agent metadata and all non-deleted versions (draft, staging, production). locationId is required parameter. The agent must have active status.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | — |
| `source` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agent retrieved successfully | `GetAgentByIdResponseDTO` |
| `400` | Bad Request - locationId is required | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Agent not found or not available | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Promote to Production

**Endpoint:** `POST /agent-studio/agent/versions/{versionId}/publish`
**Scope:** `agent-studio.write`
**Token Type:** Location-Access

Promotes a draft version to production.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `versionId` | path | `string` | Yes | — |
| `source` | query | `string` | No | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `PromoteAndPublishDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Version promoted and published successfully | `PromoteAndPublishResponseDTO` |
| `400` | Bad Request - Only draft versions can be promoted | `—` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Version not found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Execute Agent

**Endpoint:** `POST /agent-studio/agent/{agentId}/execute`
**Scope:** `agent-studio.write`
**Token Type:** Location-Access

Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body. 

**Session Management:**
- For the first message in a new session, do not include the `executionId` in the request payload.
- The API will return an `executionId` along with the agent response, which uniquely identifies this conversation session.
- To continue the conversation within the same session, include the `executionId` from the previous response in subsequent requests. This allows the agent to maintain conversation context and history across multiple interactions.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | — |
| `source` | query | `string` | No | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ExecutePublicAgentDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agent executed successfully | `ExecutePublicAgentResponseDTO` |
| `400` | Agent is not active or invalid request - locationId is required | `—` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | User does not have required scopes to execute this agent | `—` |
| `404` | Agent not found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### List Agents (Deprecated)

**Endpoint:** `GET /agent-studio/public-api/agents`
**Scope:** `agent-studio.readonly`
**Token Type:** Location-Access
**Deprecated:** Yes

**Deprecated endpoint - use GET /agent instead.**

Lists all active agents that have a published production version for the specified location. locationId is required parameter. Supports pagination using limit and offset.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `limit` | query | `string` | Yes | — |
| `offset` | query | `string` | Yes | — |
| `source` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agents retrieved successfully | `GetPublishedAgentsResponseDTO` |
| `400` | Bad Request - locationId is required | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Get Agent (Deprecated)

**Endpoint:** `GET /agent-studio/public-api/agents/{agentId}`
**Scope:** `agent-studio.readonly`
**Token Type:** Location-Access
**Deprecated:** Yes

**Deprecated endpoint - use GET /agent/:agentId instead.**

Gets a specific agent by its ID for the specified location with all its versions. locationId is required parameter. The agent must have active status.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | — |
| `source` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agent retrieved successfully | `GetAgentByIdResponseDTO` |
| `400` | Bad Request - locationId is required | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | Agent not found or not available | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

### Execute Agent (Deprecated)

**Endpoint:** `POST /agent-studio/public-api/agents/{agentId}/execute`
**Scope:** `agent-studio.write`
**Token Type:** Location-Access
**Deprecated:** Yes

**Deprecated endpoint - use POST /agent/:agentId/execute instead.**

Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body. 

**Session Management:**
- For the first message in a new session, do not include the `executionId` in the request payload.
- The API will return an `executionId` along with the agent response, which uniquely identifies this conversation session.
- To continue the conversation within the same session, include the `executionId` from the previous response in subsequent requests.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `agentId` | path | `string` | Yes | — |
| `source` | query | `string` | No | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ExecutePublicAgentDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Agent executed successfully | `ExecutePublicAgentResponseDTO` |
| `400` | Agent is not active or invalid request - locationId is required | `—` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | User does not have required scopes to execute this agent | `—` |
| `404` | Agent not found | `—` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |
| `500` | Internal Server Error | `InternalServerErrorDTO` |

## Schemas

### InternalServerErrorDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No | — |
| `message` | `string` | No | — |

### CreatePublicAgentDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `name` | `string` | No | Name of the agent |
| `description` | `string` | No | Description of the agent |
| `agencyId` | `string` | No | Agency ID |
| `authorId` | `string` | No | Author ID |
| `authorName` | `string` | No | Author name |
| `authorEmail` | `string` | No | Author email |
| `status` | `string` | Yes | Status of the agent |
| `version` | `object` | Yes | Version data for the agent including nodes, edges, and configuration |
| `nodes` | `array<string>` | No | Nodes array (deprecated, prefer using version.nodes) |
| `edges` | `array<string>` | No | Edges array (deprecated, prefer using version.edges) |

### CreatePublicAgentResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status |
| `message` | `string` | Yes | Response message |
| `agent` | `object` | Yes | Created agent data with metadata |
| `versions` | `array<object>` | Yes | Created versions array (initial staging version) |

### UpdatePublicAgentVersionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID for authorization |
| `versionName` | `string` | No | Version name |
| `description` | `string` | No | Description of the version |
| `nodes` | `array<object>` | No | Complete array of nodes for the agent workflow. Provide all nodes including unchanged ones. |
| `edges` | `array<object>` | No | Complete array of edges connecting the nodes. Provide all edges including unchanged ones. |
| `globalVariables` | `array<object>` | No | Global variables accessible throughout the agent workflow |
| `inputVariables` | `array<object>` | No | Input variables required from user at execution time |
| `runtimeVariables` | `array<object>` | No | Runtime variables generated during agent execution |
| `globalConfig` | `object` | No | Global configuration including prompts and settings |
| `userId` | `string` | No | User ID performing the update |
| `userName` | `string` | No | User name performing the update |

### UpdatePublicAgentResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status |
| `message` | `string` | Yes | Response message |
| `data` | `object` | Yes | Updated agent or version data |

### UpdatePublicAgentMetadataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID for authorization (cannot be updated) |
| `name` | `string` | No | Name of the agent |
| `description` | `string` | No | Description of the agent |
| `status` | `string` | No | Status of the agent |

### DeletePublicAgentResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status |
| `message` | `string` | Yes | Response message |
| `agentId` | `string` | No | Deleted agent ID |

### PromoteAndPublishDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID for authorization |
| `userId` | `string` | No | User ID performing the promotion action |
| `userName` | `string` | No | User name performing the promotion action |
| `userEmail` | `string` | No | User email performing the promotion action |

### PromoteAndPublishResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status |
| `message` | `string` | Yes | Response message |
| `data` | `object` | Yes | Result data with production and new draft version details |

### GetPublishedAgentsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status |
| `message` | `string` | Yes | Response message |
| `agents` | `array<object>` | Yes | List of agents with metadata |
| `pagination` | `object` | Yes | Pagination metadata |

### GetAgentByIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status |
| `message` | `string` | Yes | Response message |
| `agent` | `object` | Yes | Agent metadata with all active versions |
| `traceId` | `string` | No | Request trace ID for debugging |

### PublicAttachmentSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Type of attachment |
| `imageUrl` | `string` | Yes | URL of the image attachment |

### ExecutePublicAgentDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes | Message to send to the agent |
| `executionId` | `string` | No | Unique session identifier that maintains conversational context across multiple interactions within the same agent session. Omit this field for the first message in a new session. Include the executionId returned from the previous response to maintain context in subsequent messages. |
| `inputVariables` | `object` | No | Input variables to pass to the agent. These should match the input variables defined in the agent configuration. |
| `versionId` | `string` | No | Published version ID to execute. If not provided, the latest published production version will be used. |
| `attachments` | `array<PublicAttachmentSchema>` | No | Attachments for the message |
| `locationId` | `string` | Yes | Location ID |
| `contactId` | `string` | No | Contact ID to associate with this execution. When provided, contact data will be hydrated and made available to the agent. |

### ExecutePublicAgentResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status |
| `executionId` | `string` | Yes | Unique session identifier that maintains conversational context across multiple interactions within the same agent session. Use this ID in subsequent requests to continue the conversation. |
| `interactionId` | `string` | Yes | Unique identifier for a single interaction cycle, consisting of one user input and the corresponding agent response. Each message exchange generates a new interactionId. |
| `response` | `string` | Yes | Agent response text |
| `type` | `string` | Yes | Response type |
| `nextExpectedInput` | `string` | Yes | Expected input type for next interaction |
| `goalCompletion` | `boolean` | Yes | When end node is added in the graph, this will be true if the agent reached the end node in the graph |
| `executionStatus` | `string` | Yes | Execution status |
| `flowSwitch` | `boolean` | Yes | Whether flow was switched |
| `attachments` | `array<object>` | Yes | Response attachments |
| `generativeOutputs` | `array<object>` | Yes | Generated outputs |
