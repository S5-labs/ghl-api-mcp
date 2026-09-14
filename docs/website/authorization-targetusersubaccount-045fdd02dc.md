> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/Authorization/TargetUserSubAccount). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Handling Access Tokens for Apps with Target User: Sub-Account

This document explains how to manage Access Tokens when your app’s Target User is set to Sub-Account.

---

## Installation Options

When you set the target user to Sub-Account during app creation, you can configure who can install the app. The type of token generated depends on the option chosen and who installs the app.

## Who can install the APP: **Agency Only**

- The app will be visible only to Agency Admins/Owners.
- Only Agency Admin/Owner can install the app.

#### Installation Flow

1. Install the app on your account.
1. After installation, the redirect URL will be triggered and an authorization code will be shared.
1. Use this code to exchange for an Access Token via the [Get Access Token](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token) API.

⚠️ **Note:** The Access Token generated here will be of type `Company` (Agency-level).

#### Sample Request

```bash
curl --request POST
--url https://services.leadconnectorhq.com/oauth/token
--header 'Accept: application/json'
--header 'Content-Type: application/x-www-form-urlencoded'
--data-urlencode client_id=68a32958b5154ca8bbdc4d40-meh5chaj
--data-urlencode client_secret=a5949eb7-4d46-4bfd-95c1-e338d4952e6b
--data-urlencode grant_type=authorization_code
--data-urlencode code=059ff0439402599b0ecb45388a9d4b9fc2d17123
--data-urlencode user_type=Company
```

#### Sample Response

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 86399,
  "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "scope": "businesses.readonly",
  "refreshTokenId": "68a32a7fb5154c26d5dd218c",
  "userType": "Company",
  "companyId": "GNb7aIv4rQFVb9iwNl5K",
  "isBulkInstallation": true,
  "userId": "Rg6BRRiHh7dS9gJy3W8a"
}
```

1. To access Sub-Account–specific API endpoints, the Agency-level Access Token must first be exchanged for a Sub-Account (Location-level) Access Token. This exchange can be performed using the [Get Location Access Token from Agency Token](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token) API.

> Note: You can configure a webhook URL for your app, and the App Install event will automatically be subscribed by default.
> When the APP is installed this event will be triggered, this webhook provides details such as the locationId where the app has been installed. You can use the locationId along with your Agency-level Access Token to exchange it for a Sub-Account (Location-level) Access Token.

#### Sample App Install Event Payload

```json
{
  "type": "INSTALL",
  "appId": "665c6bb13d4e5364bdec0e2f",
  "versionId": "665c6bb13d4e5364bdec0e2f",
  "installType": "Location",
  "locationId": "HjiMUOsCCHCjtxzEf8PR",
  "companyId": "GNb7aIv4rQFVb9iwNl5K",
  "userId": "Rg6BRRiHh7dS9gJy3W8a",
  "companyName": "Marketplace and Integrations Prod Agency",
  "isWhitelabelCompany": true,
  "whitelabelDetails": {
    "logoUrl": "https://...gif",
    "domain": "rajender.dentistsnear.me"
  },
  "timestamp": "2025-06-25T06:57:06.225Z",
  "webhookId": "1a533f85-1f1e-4886-891e-ee0cf4666e90"
}
```

#### Sample Request for Get Location Access Token from Agency Token

```bash
curl -L 'https://services.leadconnectorhq.com/oauth/locationToken'
-H 'Content-Type: application/x-www-form-urlencoded'
-H 'Accept: application/json'
-H 'Version: 2021-07-28'
-H 'Authorization: Bearer {AGENCY_ACCESS_TOKEN}'
-d 'companyId=GNb7aIv4rQFVb9iwNl5K'
-d 'locationId=HjiMUOsCCHCjtxzEf8PR'
```

#### Sample Response

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OGEzMmRhNjlkN2EzY2E5NT",
  "token_type": "Bearer",
  "expires_in": 86400,
  "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJMb2NhdGlvbiIsImF",
  "scope": "businesses.readonly oauth.write oauth.readonly",
  "userType": "Location",
  "companyId": "GNb7aIv4rQFVb9iwNl5K",
  "locationId": "HjiMUOsCCHCjtxzEf8PR",
  "userId": "Rg6BRRiHh7dS9gJy3W8a",
  "traceId": "8cf33664-9f4f-4392-adf6-71b8bed2592a"
}
```

---

## Who can install the APP: **Everyone**

This type of app can be installed by both Agency users and Sub-Account users. The type of Access Token generated will depend on who performs the installation.

### Scenario 1: Agency User installs the app

In this case, the Access Token generated will be of type Company (Agency-level). To access Sub-Account resources, you must exchange this token for a Location-level token using the [Get Location Access Token from Agency Token](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token) API endpoint.

#### Installation Flow

1. Install the app on your account.
1. After installation, the redirect URL will be triggered and an authorization code will be shared.
1. Use this code to exchange for an Access Token via the [Get Access Token](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token) API.

⚠️ **Note:** The Access Token generated here will be of type `Company` (Agency-level).

#### Sample Request

```bash
curl --request POST
--url https://services.leadconnectorhq.com/oauth/token
--header 'Accept: application/json'
--header 'Content-Type: application/x-www-form-urlencoded'
--data-urlencode client_id=68a32958b5154ca8bbdc4d40-meh5chaj
--data-urlencode client_secret=a5949eb7-4d46-4bfd-95c1-e338d4952e6b
--data-urlencode grant_type=authorization_code
--data-urlencode code=059ff0439402599b0ecb45388a9d4b9fc2d17123
--data-urlencode user_type=Company
```

#### Sample Response

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 86399,
  "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "scope": "businesses.readonly",
  "refreshTokenId": "68a32a7fb5154c26d5dd218c",
  "userType": "Company",
  "companyId": "GNb7aIv4rQFVb9iwNl5K",
  "isBulkInstallation": true,
  "userId": "Rg6BRRiHh7dS9gJy3W8a"
}
```

1. To access Sub-Account–specific API endpoints, the Agency-level Access Token must first be exchanged for a Sub-Account (Location-level) Access Token. This exchange can be performed using the [Get Location Access Token from Agency Token](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token) API.

> Note: You can configure a webhook URL for your app, and the App Install event will automatically be subscribed by default.
> When the APP is installed this event will be triggered, this webhook provides details such as the locationId where the app has been installed. You can use the locationId along with your Agency-level Access Token to exchange it for a Sub-Account (Location-level) Access Token.

#### Sample App Install Event Payload

```json
{
  "type": "INSTALL",
  "appId": "665c6bb13d4e5364bdec0e2f",
  "versionId": "665c6bb13d4e5364bdec0e2f",
  "installType": "Location",
  "locationId": "HjiMUOsCCHCjtxzEf8PR",
  "companyId": "GNb7aIv4rQFVb9iwNl5K",
  "userId": "Rg6BRRiHh7dS9gJy3W8a",
  "companyName": "Marketplace and Integrations Prod Agency",
  "isWhitelabelCompany": true,
  "whitelabelDetails": {
    "logoUrl": "https://...gif",
    "domain": "rajender.dentistsnear.me"
  },
  "timestamp": "2025-06-25T06:57:06.225Z",
  "webhookId": "1a533f85-1f1e-4886-891e-ee0cf4666e90"
}
```

#### Sample Request for Get Location Access Token from Agency Token

```bash
curl -L 'https://services.leadconnectorhq.com/oauth/locationToken'
-H 'Content-Type: application/x-www-form-urlencoded'
-H 'Accept: application/json'
-H 'Version: 2021-07-28'
-H 'Authorization: Bearer {AGENCY_ACCESS_TOKEN}'
-d 'companyId=GNb7aIv4rQFVb9iwNl5K'
-d 'locationId=HjiMUOsCCHCjtxzEf8PR'
```

#### Sample Response

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OGEzMmRhNjlkN2EzY2E5NT",
  "token_type": "Bearer",
  "expires_in": 86400,
  "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJMb2NhdGlvbiIsImF",
  "scope": "businesses.readonly oauth.write oauth.readonly",
  "userType": "Location",
  "companyId": "GNb7aIv4rQFVb9iwNl5K",
  "locationId": "HjiMUOsCCHCjtxzEf8PR",
  "userId": "Rg6BRRiHh7dS9gJy3W8a",
  "traceId": "8cf33664-9f4f-4392-adf6-71b8bed2592a"
}
```

### Scenario 2: Sub-Account User installs the app

In this case, the Access Token generated will be of type Location (Sub-Account level).

#### Installation Flow

1. Install the app on your account.
1. After installation, the redirect URL will be triggered and an authorization code will be shared.
1. Use this code to exchange for an Access Token via the [Get Access Token](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token) API.

#### Sample Request

```bash
curl --request POST \
  --url https://services.leadconnectorhq.com/oauth/token \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode client_id=68a42f3c2a64bb65c985c618-mei99elp \
  --data-urlencode client_secret=86f9901c-b57d-4395-a406-ff178cd8a57d \
  --data-urlencode grant_type=authorization_code \
  --data-urlencode code=4a1a74401abd1b46d923543c4a366eb3f21b5cbf \
  --data-urlencode user_type=Location
```

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJMb2NhdGlvbiIsImF1dGhDbGFzc0lkIjoiSGppTVVPc0NDSENqdHh6RWY4UFIiLCJzb3VyY2UiOiJJTl",
  "token_type": "Bearer",
  "expires_in": 86399,
  "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJMb2N",
  "scope": "businesses.readonly",
  "refreshTokenId": "68a4332c2a64bbc7a1888971",
  "userType": "Location",
  "companyId": "GNb7aIv4rQFVb9iwNl5K",
  "locationId": "HjiMUOsCCHCjtxzEf8PR",
  "isBulkInstallation": false,
  "userId": "57n5nmVqHA1ghBM8UKhU"
}
```

---

## Summary

- **Agency-only installation:** If “Who can install the app” is set to Agency only, the generated token will be of type `Company` (Agency-level). To run APIs and perform actions at the Sub-Account level, this token must be exchanged for a Location-level token.
- **Everyone installation:** If “Who can install the app” is set to Everyone, there are two possible scenarios:
  - **Agency User Installs the APP** → The generated token will be of type `Company` (Agency-level). To run APIs and perform actions at the Sub-Account level, this token must be exchanged for a Location-level token.
  - **Sub-Account User Installs the APP** → The generated token will be of type `Location`. This token can be used directly to call APIs and perform tasks without further exchange.
