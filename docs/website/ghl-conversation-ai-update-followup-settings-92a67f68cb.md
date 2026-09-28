> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-followup-settings). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Followup Settings

**Endpoint:** `PATCH /conversation-ai/agents/:agentId/followup-settings`

Update the followup settings for an action

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

The unique identifier of the AI agent

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**actionIds**string[]requiredArray of action IDs to update followup settings for**followupSettings**objectrequiredFollowup settings configuration to apply to the specified actions

```json
{
  "actionIds": [
    "edxcfghbnjkimd"
  ],
  "followupSettings": {
    "dynamicChannelSwitching": true,
    "followUpHours": false,
    "timezoneToUse": "contact"
  }
}
```

application/json

Success

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
