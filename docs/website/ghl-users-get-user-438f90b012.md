> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/users/get-user). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get User

**Endpoint:** `GET /users/:userId`

Get User

## Request

**Version**

string

required

API Version

Available options

`v3`

**userId**

string

required

User Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringUnique identifier of the user**name**stringFull name of the user**firstName**stringFirst name of the user**lastName**stringLast name of the user**email**stringEmail address of the user**phone**stringPhone number of the user**extension**stringPhone extension of the user**permissions**objectUser permissions controlling access to various features**scopes**stringList of OAuth scopes granted to this userAvailable options`campaigns.readonly``campaigns.write``calendars.readonly``calendars/events.write``calendars/groups.write``calendars.write``contacts.write``contacts/bulkActions.write``workflows.readonly``workflows.write``triggers.write``funnels.write`**roles**objectRole and access configuration for the user**lcPhone**objectLC Phone Inbound Phone Numbers**platformLanguage**stringPlatform language preference for the userAvailable options`en_US``es``fr_CA``fr_FR``nl``de``pt_PT``pt_BR``it``sv``da``fi`

```json
{
  "id": "0IHuJvc2ofPAAA8GzTRi",
  "name": "John Deo",
  "firstName": "John",
  "lastName": "Deo",
  "email": "john@deo.com",
  "phone": "+1 808-868-8888",
  "extension": "",
  "permissions": {
    "campaignsEnabled": true,
    "campaignsReadOnly": false,
    "contactsEnabled": true,
    "workflowsEnabled": true
  },
  "scopes": [
    "contacts.write",
    "campaigns.readonly"
  ],
  "roles": {
    "type": "account",
    "role": "admin",
    "locationIds": [
      "ve9EPM428h8vShlRW1KT"
    ]
  },
  "lcPhone": {
    "locationId": "+1234556677"
  },
  "platformLanguage": "en_US"
}
```
