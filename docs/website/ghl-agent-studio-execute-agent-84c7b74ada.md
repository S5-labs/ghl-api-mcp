> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/execute-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Execute Agent

**Endpoint:** `POST /agent-studio/agent/:agentId/execute`

Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body.

**Session Management:**

- For the first message in a new session, do not include the `executionId` in the request payload.
- The API will return an `executionId` along with the agent response, which uniquely identifies this conversation session.
- To continue the conversation within the same session, include the `executionId` from the previous response in subsequent requests. This allows the agent to maintain conversation context and history across multiple interactions.

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

**source**

string

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**message**stringrequiredMessage to send to the agent**executionId**stringUnique session identifier that maintains conversational context across multiple interactions within the same agent session. Omit this field for the first message in a new session. Include the executionId returned from the previous response to maintain context in subsequent messages.**inputVariables**objectInput variables to pass to the agent. These should match the input variables defined in the agent configuration.**versionId**stringPublished version ID to execute. If not provided, the latest published production version will be used.**attachments**object[]Attachments for the message**locationId**stringrequiredLocation ID**contactId**stringContact ID to associate with this execution. When provided, contact data will be hydrated and made available to the agent.

```json
{
  "message": "How can you help me with my marketing?",
  "executionId": "a1b2c3d4e5f6g7h8i9j0k1l2",
  "inputVariables": {
    "customerName": "John Doe",
    "orderNumber": "ORD-12345"
  },
  "versionId": "b2b1c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d",
  "attachments": [
    {
      "type": "image",
      "imageUrl": "https://example.com/image.png"
    }
  ],
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "contactId": "cid_abc123def456"
}
```

application/json

Agent executed successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status**executionId**stringrequiredUnique session identifier that maintains conversational context across multiple interactions within the same agent session. Use this ID in subsequent requests to continue the conversation.**interactionId**stringrequiredUnique identifier for a single interaction cycle, consisting of one user input and the corresponding agent response. Each message exchange generates a new interactionId.**response**stringrequiredAgent response text**type**stringrequiredResponse type**nextExpectedInput**stringrequiredExpected input type for next interaction**goalCompletion**booleanrequiredWhen end node is added in the graph, this will be true if the agent reached the end node in the graph**executionStatus**stringrequiredExecution status**flowSwitch**booleanrequiredWhether flow was switched**attachments**arrayrequiredResponse attachments**generativeOutputs**arrayrequiredGenerated outputs

```json
{
  "success": true,
  "executionId": "a1b2c3d4e5f6g7h8i9j0k1l2",
  "interactionId": "m9n8o7p6q5r4s3t2u1v0w9x8",
  "response": "I can help you with various tasks...",
  "type": "text",
  "nextExpectedInput": "text",
  "goalCompletion": false,
  "executionStatus": "completed",
  "flowSwitch": false,
  "attachments": [],
  "generativeOutputs": []
}
```
