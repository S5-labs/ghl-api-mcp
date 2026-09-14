> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/disable-group). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Disable Group

**Endpoint:** `PUT /calendars/groups/:groupId/status`

Disable Group

## Request

**Version**

string

required

API Version

Available options

`v3`

**groupId**

string

required

Group Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**isActive**booleanrequiredIs Active?

```json
{
  "isActive": true
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanSuccess

```json
{
  "success": "true"
}
```
