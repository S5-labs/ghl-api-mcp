> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/list-brand-voices). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Brand Voices

**Endpoint:** `GET /brand-boards/locations/:locationId/brand-voices`

Get list of brand voices for a location

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

**limit**

number

Number of brand voices to return. Defaults to 10, minimum is 1, maximum is 20

**Possible values:** `>= 1` and `<= 20`

`10`

**offset**

number

Number of brand voices to skip for pagination. Defaults to 0, minimum is 0

**Possible values:** `>= 0`

`0`

**search**

string

Search text for brand voice name

**deleted**

boolean

Whether to return deleted brand voices. Defaults to false

`false`

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**items**object[]requiredList of brand voices**total**numberrequiredTotal count of brand voices**traceId**stringTrace ID of request

```json
{
  "items": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "My Brand Voice",
      "isDefault": false,
      "createdAt": "2024-01-05T12:00:00.000Z",
      "updatedAt": "2024-01-05T12:00:00.000Z"
    }
  ],
  "total": 25,
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
