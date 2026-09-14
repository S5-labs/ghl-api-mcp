> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-appointment-note). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Note

**Endpoint:** `POST /calendars/appointments/:appointmentId/notes`

Create Note

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**userId**stringUser ID of the note author**body**stringrequiredNote body**Possible values:** `<= 5000 characters`

```json
{
  "userId": "GCs5KuzPqTls7vWclkEV",
  "body": "lorem ipsum"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**note**objectThe created or updated note

```json
{
  "note": {
    "id": "HGPcayliwcdoUFzvbTok",
    "body": "lorem ipsum",
    "userId": "TUcmRxWrjqzJS8EjkxNK"
  }
}
```
