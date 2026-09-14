> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-calendar-group). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Calendar Group

**Endpoint:** `POST /calendars/groups`

Create Calendar Group

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID**name**stringrequiredGroup name**description**stringrequiredGroup description**slug**stringrequiredGroup slug**isActive**booleanWhether the group is active

```json
{
  "locationId": "ocQHyuzHvysMo5N5VsXc",
  "name": "group a",
  "description": "group description",
  "slug": "15-mins",
  "isActive": true
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**group**objectThe created group object

```json
{
  "group": {
    "locationId": "ocQHyuzHvysMo5N5VsXc",
    "name": "group a",
    "slug": "15-mins"
  }
}
```
