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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**actionIds**string[]required**followupSettings**objectrequired

```json
{
  "actionIds": [
    "edxcfghbnjkimd"
  ],
  "followupSettings": {
    "dynamicChannelSwitching": true,
    "followUpHours": true,
    "workingHours": [
      {
        "dayOfTheWeek": 1,
        "intervals": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 30
          }
        ]
      }
    ],
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

**data**objectrequiredUpdated action details**success**booleanrequiredSuccess status of the request

```json
{
  "data": {
    "id": "actionId123",
    "name": "Trigger Workflow",
    "type": "triggerWorkflow",
    "agentId": "agentId123",
    "details": {
      "workflowIds": [
        "workflow123",
        "workflow456"
      ],
      "triggerCondition": "When user requests appointment",
      "triggerMessage": "Workflow triggered successfully"
    }
  },
  "success": true
}
```
