> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-appointment-notes). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Notes

**Endpoint:** `GET /calendars/appointments/:appointmentId/notes`

Get Appointment Notes

## Request

**Version**

string

required

API Version

Available options

`v3`

**appointmentId**

string

required

Appointment ID

**limit**

number

required

Limit of notes to fetch

**Possible values:** `<= 20`

**offset**

number

required

Offset of notes to fetch

**Possible values:** `>= 0`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**notes**object[]List of appointment notes**hasMore**booleanWhether more notes are available

```json
{
  "notes": [
    {
      "id": "HGPcayliwcdoUFzvbTok",
      "body": "lorem ipsum",
      "userId": "TUcmRxWrjqzJS8EjkxNK"
    }
  ],
  "hasMore": true
}
```
