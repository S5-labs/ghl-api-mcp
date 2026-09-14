> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Location Access Token from Agency Token

**Endpoint:** `POST /oauth/location-token`

This API allows you to generate locationAccessToken from AgencyAccessToken

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

**companyId**stringrequiredCompany Id of location you want to request token for**locationId**stringrequiredThe location ID for which you want to obtain accessToken

```json
{
  "companyId": "tDtDnQdgm2LXpyiqYvZ6",
  "locationId": "l1C08ntBrFjLS0elLIYU"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**access_token**stringLocation access token which can be used to authenticate & authorize API under following scope**token_type**stringThe token type (always Bearer)**expires_in**numberTime in seconds remaining for token to expire**scope**stringScopes the following accessToken have access to**locationId**stringLocation ID - Present only for Sub-Account Access Token**planId**stringPlan Id of the subscribed plan in paid apps.**userId**stringrequiredUSER ID - Represent user id of person who performed installation**appId**stringApp ID of the installed application**versionId**stringVersion ID of the installed app version**refresh_token**stringThe OAuth2 refresh token used to obtain a new access token for this specific location.

```json
{
  "access_token": "ab12dc0ae1234a7898f9ff06d4f69gh",
  "token_type": "Bearer",
  "expires_in": 86399,
  "scope": "conversations/message.readonly conversations/message.write",
  "locationId": "l1C08ntBrFjLS0elLIYU",
  "planId": "l1C08ntBrFjLS0elLIYU",
  "userId": "l1C08ntBrFjLS0elLIYU",
  "appId": "6578278e879ad2646715ba9c",
  "versionId": "6578278e879ad2646715ba9c",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
}
```
