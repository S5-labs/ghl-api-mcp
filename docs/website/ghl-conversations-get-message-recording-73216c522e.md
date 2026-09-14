> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-message-recording). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Recording by Message ID

**Endpoint:** `GET /conversations/messages/:messageId/locations/:locationId/recording`

Get the recording for a message by passing the message id

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

Gives the attached recording to the message
