> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/get-agent-working-hours). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Agent Working Hours

**Endpoint:** `GET /conversation-ai/agents/:agentId/working-hours`

Retrieves the working-hours configuration for an AI agent: the weekly schedule, the channels it applies to, the timezone mode, and the off-hours auto-reply and follow-up settings.

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
