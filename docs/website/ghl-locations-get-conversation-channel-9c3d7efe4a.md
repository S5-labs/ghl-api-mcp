> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/get-conversation-channel). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Conversation Channel

**Endpoint:** `GET /locations/:locationId/conversationChannels/:type`

Get the conversation channel providers configured for a location by type (SMS or Email)

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

Location Id

**type**

string

required

Channel type to retrieve providers for

Available options

`SMS`

`Email`

application/json

Retrieved all the conversation channels

- application/json

- Schema
- Example (auto)

**Schema**

**conversationChannel**objectrequired

```json
{
  "conversationChannel": {
    "SMS": [
      {
        "conversationProvider": {
          "_id": "twilio_provider",
          "name": "Twilio",
          "type": "SMS",
          "default": true
        }
      }
    ],
    "Email": [
      {
        "conversationProvider": {
          "_id": "twilio_provider",
          "name": "Twilio",
          "type": "SMS",
          "default": true
        }
      }
    ]
  }
}
```
