> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/download-message-transcription). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Download transcription by Message ID

**Endpoint:** `GET /conversations/locations/:locationId/messages/:messageId/transcription/download`

Download the recording transcription for a message by passing the message id

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

Location ID as string

**messageId**

string

required

Message ID as string

Downloads the attached transcription of the message
