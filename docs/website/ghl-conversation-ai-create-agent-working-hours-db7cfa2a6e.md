> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-agent-working-hours). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Agent Working Hours

**Endpoint:** `POST /conversation-ai/agents/:agentId/working-hours`

Creates the working-hours configuration for an AI agent. Returns 409 when one already exists — use the update endpoint to replace it.

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

Conversations AI agent id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**enabled**booleanrequiredMaster toggle for working hours.**channels**string[]requiredChannels the gate applies to. Must be non-empty when enabled.Available options`SMS``Email``WhatsApp``IG``FB``WebChat``Live_Chat``TIKTOK`**timezoneMode**stringrequiredAvailable options`contact``business`**schedule**objectrequired**continueConversations**objectrequired**offHoursAutoReply**objectrequired**followUp**objectrequired

```json
{
  "enabled": false,
  "channels": [
    "SMS",
    "WhatsApp"
  ],
  "timezoneMode": "contact",
  "schedule": {
    "mon": {
      "enabled": true,
      "slots": [
        {
          "startHour": 9,
          "startMinute": 0,
          "endHour": 17,
          "endMinute": 0
        }
      ]
    },
    "tue": {
      "enabled": true,
      "slots": [
        {
          "startHour": 9,
          "startMinute": 0,
          "endHour": 17,
          "endMinute": 0
        }
      ]
    },
    "wed": {
      "enabled": true,
      "slots": [
        {
          "startHour": 9,
          "startMinute": 0,
          "endHour": 17,
          "endMinute": 0
        }
      ]
    },
    "thu": {
      "enabled": true,
      "slots": [
        {
          "startHour": 9,
          "startMinute": 0,
          "endHour": 17,
          "endMinute": 0
        }
      ]
    },
    "fri": {
      "enabled": true,
      "slots": [
        {
          "startHour": 9,
          "startMinute": 0,
          "endHour": 17,
          "endMinute": 0
        }
      ]
    },
    "sat": {
      "enabled": true,
      "slots": [
        {
          "startHour": 9,
          "startMinute": 0,
          "endHour": 17,
          "endMinute": 0
        }
      ]
    },
    "sun": {
      "enabled": true,
      "slots": [
        {
          "startHour": 9,
          "startMinute": 0,
          "endHour": 17,
          "endMinute": 0
        }
      ]
    }
  },
  "continueConversations": {
    "enabled": true,
    "inactivityTimeout": {
      "value": 15,
      "unit": "minutes"
    }
  },
  "offHoursAutoReply": {
    "enabled": false,
    "message": "Thanks for reaching out! We're currently outside of business hours.",
    "sendNotification": false,
    "notificationConfig": {
      "emailNotification": {
        "enabled": false,
        "notifyAdmins": false,
        "notifyAllUsers": false,
        "notifyAssignedUser": false,
        "notifySpecificUsers": false,
        "specificUserIds": [],
        "notifyCustomEmail": false,
        "customEmail": ""
      },
      "contactTags": []
    }
  },
  "followUp": {
    "enabled": false,
    "message": "Hi {{contact.name}}, we're here now and happy to help."
  }
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequired**success**booleanrequired

```json
{
  "data": {
    "enabled": false,
    "channels": [
      "SMS",
      "WhatsApp"
    ],
    "timezoneMode": "contact",
    "schedule": {
      "mon": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "tue": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "wed": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "thu": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "fri": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "sat": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      },
      "sun": {
        "enabled": true,
        "slots": [
          {
            "startHour": 9,
            "startMinute": 0,
            "endHour": 17,
            "endMinute": 0
          }
        ]
      }
    },
    "continueConversations": {
      "enabled": true,
      "inactivityTimeout": {
        "value": 15,
        "unit": "minutes"
      }
    },
    "offHoursAutoReply": {
      "enabled": false,
      "message": "Thanks for reaching out! We're currently outside of business hours.",
      "sendNotification": false,
      "notificationConfig": {
        "emailNotification": {
          "enabled": false,
          "notifyAdmins": false,
          "notifyAllUsers": false,
          "notifyAssignedUser": false,
          "notifySpecificUsers": false,
          "specificUserIds": [],
          "notifyCustomEmail": false,
          "customEmail": ""
        },
        "contactTags": []
      }
    },
    "followUp": {
      "enabled": false,
      "message": "Hi {{contact.name}}, we're here now and happy to help."
    },
    "employeeId": "wK36brxPYCOikC85FkbA",
    "createdAt": "2024-07-29T15:51:28.071Z",
    "updatedAt": "2024-07-29T15:51:28.071Z"
  },
  "success": true
}
```
