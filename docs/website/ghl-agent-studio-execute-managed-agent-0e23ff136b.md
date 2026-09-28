> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/execute-managed-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Execute a published Managed Agent

**Endpoint:** `POST /agent-studio/managed-agents/:managedAgentId/execute`

Runs one JSON turn against the published production snapshot. Omit sessionId on the first turn and pass the returned sessionId on subsequent turns. Reuse the same Idempotency-Key only when retrying the exact same logical turn. For a 429 response, retry that key only when retryable is true and Retry-After is present.

## Request

**Version**

string

required

API version.

Available options

`v3`

**Idempotency-Key**

string

required

Unique key for this logical turn. Maximum 128 characters.

**Possible values:** `non-empty` and `<= 128 characters`

**managedAgentId**

string

required

Managed Agent ID.

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredAuthorized sub-account ID.**Possible values:** `non-empty` and `<= 256 characters`**message**stringrequiredUser message for this turn.**Possible values:** `non-empty` and `<= 10000 characters`, Value must match regular expression `\S`**sessionId**stringSession ID returned by a previous turn.**Possible values:** `non-empty` and `<= 256 characters`**contactId**stringOptional contact to hydrate into runtime context.**Possible values:** `non-empty` and `<= 256 characters`**extraVariables**objectOptional JSON variables. Maximum encoded size is 32 KiB and maximum nesting depth is 5. Runtime identity names are reserved and rejected with 400: the roots `account`, `contact` and `location`, and the keys `agentId`, `agencyId`, `companyId`, `contactId`, `executionId`, `locationId`, `sessionId` and `userId`. Matching is case-insensitive and applies at the top level and under the optional `global`, `inputs`, `raw` and `runtime` prefixes, in either dotted (`runtime.contact.id`) or nested form. Use the endpoint `locationId` and the top-level `contactId` instead. These names nested under one of your own keys (for example `customer.contactId`) are accepted.

```json
{
  "locationId": "ve9EPM428h8vShlRW1KT",
  "message": "Summarize today's new contacts.",
  "sessionId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "contactId": "cid_abc123def456",
  "extraVariables": {
    "customerName": "Sarah"
  }
}
```

application/json

Managed Agent turn completed.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredWhether the turn completed successfully.Available options`true`**agentId**stringrequiredManaged Agent that handled the turn.**sessionId**stringrequiredPass this value on the next turn to continue the conversation.**finalText**stringrequiredFinal text returned by the Managed Agent.**toolsFired**string[]requiredTool identifiers invoked during the turn.**generatedMedia**object[]Media assets generated during the turn.

```json
{
  "success": true,
  "agentId": "027ee957-ae94-40ad-89a3-b25c985f729b",
  "sessionId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "finalText": "Here are today's new contacts…",
  "toolsFired": [
    "web_search"
  ],
  "generatedMedia": [
    {
      "type": "image",
      "url": "https://storage.googleapis.com/example/generated-image.png",
      "mimeType": "image/png",
      "toolName": "generate_image",
      "toolCallId": "tool_call_abc123"
    }
  ]
}
```
