> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/delete-brand-voice). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Brand Voice

**Endpoint:** `DELETE /brand-boards/locations/:locationId/brand-voices/:brandVoiceId`

Delete a brand voice by ID

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

Location ID

**brandVoiceId**

string

required

Brand voice ID

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**deleted**booleanrequiredWhether the brand voice is deleted**traceId**stringTrace ID of request

```json
{
  "deleted": true,
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
