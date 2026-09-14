> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Sub-Account (Formerly Location)

**Endpoint:** `DELETE /locations/:locationId`

Delete a Sub-Account (Formerly Location) from the Agency

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

**deleteTwilioAccount**

boolean

required

Boolean value to indicate whether to delete Twilio Account or not

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status of the API**message**stringrequiredSuccess message of the API

```json
{
  "success": true,
  "message": "Deleted location with id: ve9EPM428h8vShlRW1KT"
}
```
