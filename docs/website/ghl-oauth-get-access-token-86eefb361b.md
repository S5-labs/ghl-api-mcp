> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Access Token

**Endpoint:** `POST /oauth/token`

Use Access Tokens to access CRM resources on behalf of an authenticated location/company.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/x-www-form-urlencoded

- application/x-www-form-urlencoded

- Body
- Example (auto)

### Body**required**

**client_id**stringrequiredThe ID provided by CRM for your integration**client_secret**stringrequiredThe client secret provided by CRM for your integration**grant_type**stringrequiredThe OAuth2 grant type — authorization_code, refresh_token, or client_credentialsAvailable options`authorization_code``refresh_token``client_credentials`**code**stringThe authorization code received from the authorization endpoint (required for authorization_code grant)**refresh_token**stringThe refresh token used to obtain a new access token (required for refresh_token grant)**user_type**stringThe type of token to be requestedAvailable options`Company``Location`**redirect_uri**stringThe redirect URI for your application

```json
{
  "client_id": "6578278e879ad2646715ba9c",
  "client_secret": "ab12dc0ae1234a7898f9ff06d4f69gh",
  "grant_type": "authorization_code",
  "code": "ab12dc0ae1234a7898f9ff06d4f69gh",
  "refresh_token": "xy34dc0ae1234a4858f9ff06d4f66ba",
  "user_type": "Location",
  "redirect_uri": "https://myapp.com/oauth/callback/crm"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**access_token**stringThe OAuth2 access token**token_type**stringThe token type (always Bearer)**expires_in**numberTime in seconds until the access token expires**refresh_token**stringThe OAuth2 refresh token used to obtain a new access token**scope**stringSpace-separated list of scopes the access token has access to**userType**stringThe user type associated with the token (Location or Company)**locationId**stringLocation ID - Present only for Sub-Account Access Token**companyId**stringCompany ID**approvedLocations**string[]Approved locations to generate location access token**userId**stringrequiredUSER ID - Represent user id of person who performed installation**planId**stringPlan Id of the subscribed plan in paid apps.**isBulkInstallation**booleanIndicates whether the installation was performed as a bulk installation**installToFutureLocations**booleanBoolean to control if user wants app to be automatically installed to future locations (only for company tokens)**approveAllLocations**booleanBoolean indicating if user approved all locations during bulk installation (only for company tokens)

```json
{
  "access_token": "ab12dc0ae1234a7898f9ff06d4f69gh",
  "token_type": "Bearer",
  "expires_in": 86399,
  "refresh_token": "xy34dc0ae1234a4858f9ff06d4f66ba",
  "scope": "conversations/message.readonly conversations/message.write",
  "userType": "Location",
  "locationId": "l1C08ntBrFjLS0elLIYU",
  "companyId": "l1C08ntBrFjLS0elLIYU",
  "approvedLocations": [
    "l1C08ntBrFjLS0elLIYU"
  ],
  "userId": "l1C08ntBrFjLS0elLIYU",
  "planId": "l1C08ntBrFjLS0elLIYU",
  "isBulkInstallation": false,
  "installToFutureLocations": true,
  "approveAllLocations": true
}
```
