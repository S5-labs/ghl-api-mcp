> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-message-transcription). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get transcription by Message ID

**Endpoint:** `GET /conversations/locations/:locationId/messages/:messageId/transcription`

Get the recording transcription for a message by passing the message id

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

application/json

Gives the attached recording transcription to the message

- application/json

- Schema
- Example (auto)

**Schema**

**mediaChannel**numberrequiredMedia channel describes the user interaction channel**sentenceIndex**numberrequiredIndex of the sentence in the transcription**startTime**numberrequiredStart time of the sentence in milliseconds**endTime**numberrequiredEnd time of the sentence in milliseconds**transcript**stringrequiredTranscript of the sentence**confidence**numberrequiredConfidence of the transcription

```json
{
  "mediaChannel": "1",
  "sentenceIndex": "1",
  "startTime": "34",
  "endTime": "45",
  "transcript": "This call may be recorded for quality assurance purposes.",
  "confidence": "0.5"
}
```
