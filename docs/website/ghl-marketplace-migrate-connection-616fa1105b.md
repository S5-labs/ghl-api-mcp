> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/marketplace/migrate-connection). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Migrate external authentication connection

**Endpoint:** `POST /marketplace/external-auth/migration`

Migrates an external authentication connection credentials (basic or oauth2) for a specific app and location. This endpoint validates the app configuration, stores credentials safely in CRM's native encrypted storage. With this the lifecycle of the token is managed by CRM.

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

**type**stringrequiredType of authentication - basic or oauth2Available options`oauth2``basic`**locationId**stringrequiredLocation ID**appId**stringrequiredApp ID**appVersionId**stringrequiredApp Version ID**accountId**stringrequiredConnection identifier**apiKey**stringAPI Key (supported when type is basic)**basicCredentials**objectBasic auth credentials as key/value pairs (supported when type is basic). Keys are validated against the app version externalAuthConfig.fields.**accessToken**stringAccess token (required when type is oauth2)**refreshToken**stringRefresh token. Omit only when the provider issues long-lived, non-refreshable tokens (e.g. TikTok Marketing API, ClickUp) and therefore never returns one. Callers are responsible for supplying it whenever their app has a refresh endpoint configured: the migration stores exactly what it is given and replaces any previously stored secret, so omitting a refresh token the connection needs will leave it unable to refresh once the access token expires. Must be a non-empty string when supplied — null is rejected.**expiryIn**numberAccess token expiry time in milliseconds (optional for oauth2)**expiryAt**numberTimestamp for access token expiry (optional for oauth2)**scopes**string[]OAuth2 scopes (optional for oauth2)**displayName**stringDisplay name for the connection (optional, defaults to accountId)**email**stringAccount email metadata for the migrated connection**identitySource**stringSource of the account identity metadataAvailable options`provider``manual`**isDefault**booleanWhether this is the default connection for the location (optional, defaults to false)

```json
{
  "type": "oauth2",
  "locationId": "location_12345",
  "appId": "507f1f77bcf86cd799439011",
  "appVersionId": "507f1f77bcf86cd799439012",
  "accountId": "my-connection-identifier",
  "apiKey": "sk_test_1234567890",
  "basicCredentials": {
    "email": "user@example.com",
    "password": "p@ssw0rd"
  },
  "accessToken": "ya29.a0AfH6SMBx...",
  "refreshToken": "1//0gHq5F...",
  "expiryIn": 3600000,
  "expiryAt": 1735689600000,
  "scopes": [
    "contacts.readonly",
    "contacts.write"
  ],
  "displayName": "My Connection Display Name",
  "email": "user@example.com",
  "identitySource": "manual",
  "isDefault": false
}
```

application/json

Connection migrated successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates if the migration was successful**identifier**stringrequiredUnique identifier for the migrated connection**message**stringMessage describing the result

```json
{
  "success": true,
  "identifier": "migration_12345",
  "message": "Connection migrated successfully"
}
```
