> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/users/create-user). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create User

**Endpoint:** `POST /users/`

Create User

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

**companyId**stringrequiredCompany/Agency ID to associate the user with**email**stringrequiredEmail address of the user (used for login)**password**stringrequiredPassword for the user account. All passwords will be required to meet the following criteria: Minimum 12 characters At least one uppercase letter (A–Z) At least one lowercase letter (a–z) At least one number (0–9) At least one special character (e.g., !, @, #, $) **phone**stringPhone number of the user in E.164 format**type**stringrequiredUser account type (account for sub-account users, agency for agency-level users)**role**stringrequiredUser role within the account (admin or user)**locationIds**string[]requiredList of location IDs to assign to the user**permissions**objectUser permissions controlling access to various features**scopes**string[]Scopes allowed for users. Only scopes that have been passed will be enabled. Note:- If passed empty all the scopes will be get disabledAvailable options`campaigns.readonly``campaigns.write``calendars.readonly``calendars/events.write``calendars/groups.write``calendars.write``contacts.write``contacts/bulkActions.write``workflows.readonly``workflows.write``triggers.write``funnels.write`**scopesAssignedToOnly**string[]Assigned Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the assigned scopes will be get disabledAvailable options`campaigns.readonly``campaigns.write``calendars.readonly``calendars/events.write``calendars/groups.write``calendars.write``contacts.write``contacts/bulkActions.write``workflows.readonly``workflows.write``triggers.write``funnels.write`**profilePhoto**stringURL of the user profile photo**twilioPhone**objectPer-location inbound Twilio number in E.164 format, keyed by location id (Call and Voicemail Inbound Number for direct Twilio, not LC Phone). Replacement semantics: if you send twilioPhone in the request body, the stored map is replaced entirely with this object (not merged). Any location id omitted from the object is removed from the saved map. Omit the twilioPhone property entirely to leave existing numbers unchanged. Send an empty object {} to clear all per-location numbers. To clear a single location only, set that location id to an empty string "".**platformLanguage**stringPlatform language preference for the userAvailable options`en_US``es``fr_CA``fr_FR``nl``de``pt_PT``pt_BR``it``sv``da``fi`**firstName**stringrequiredFirst name of the user**lastName**stringrequiredLast name of the user

```json
{
  "companyId": "ve9EPM428h8vShlRW1KT",
  "email": "john@deo.com",
  "password": "************",
  "phone": "+18832327657",
  "type": "account",
  "role": "admin",
  "locationIds": [
    "C2QujeCh8ZnC7al2InWR"
  ],
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
  "scopesAssignedToOnly": [
    "contacts.write",
    "campaigns.readonly"
  ],
  "profilePhoto": "https://img.png",
  "twilioPhone": {
    "C2QujeCh8ZnC7al2InWR": "+18832327657",
    "M2QrtfVt8ZnC7cv2InDL": "+18832327657"
  },
  "platformLanguage": "en_US",
  "firstName": "John",
  "lastName": "Deo"
}
```

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
