> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/set-default-brand-voice). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Set Default Brand Voice

**Endpoint:** `POST /brand-boards/locations/:locationId/brand-voices/:brandVoiceId/default`

Set a brand voice as the default for a location. The previous default will be unset.

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

**success**booleanrequiredWhether the operation was successful**brandVoiceId**stringrequiredBrand voice ID that was set as default**traceId**stringTrace ID of request

```json
{
  "success": true,
  "brandVoiceId": "507f1f77bcf86cd799439011",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
