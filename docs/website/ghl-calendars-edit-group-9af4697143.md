> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/edit-group). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Group

**Endpoint:** `PUT /calendars/groups/:groupId`

Update Group by group ID

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

**name**stringrequiredGroup name**description**stringrequiredGroup description**slug**stringrequiredGroup slug

```json
{
  "name": "group a",
  "description": "group description",
  "slug": "15-mins"
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
