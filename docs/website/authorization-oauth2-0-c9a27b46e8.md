> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/Authorization/OAuth2.0). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# OAuth 2.0

OAuth 2.0 is a standard protocol that authorizes a client application (like a third-party app) to access specific resources on behalf of a user, without sharing the user’s password. It’s widely used for APIs that need secure, delegated access.

HighLevel supports the **Authorization Code Grant** flow with v2 APIs. Below is the step-by-step procedure to understand and use the OAuth 2.0 flow.

---

## 1. Register an OAuth App

1. Go to the [Marketplace](https://marketplace.gohighlevel.com/) and sign up for a developer account.
1. Go to My Apps, click Create App.
1. Fill in the following details:
  - **APP Name:** Suitable name for the app.
  - **APP Type:** Private or Public. ***Note**: We recommend starting with your app set to Private. This allows you to develop and thoroughly test its functionality in a controlled environment. Once you're confident the app is stable and complete, you can switch it to Public for broader installation and use by other accounts.*
    - **Private Apps**: For personal/internal use, not listed in the Marketplace.
    - **Public Apps**: Visible and installable by all users once approved.
  - **Target User**: This allows you to define who your app is intended for — in other words, who will actually be using it. For the vast majority of apps (approximately 95%), the ideal choice is `"Sub-account"` (recommended).
  - **Who can install**: Who should be able to view and install the app from the Marketplace UI? The recommended setting is `“Both Agency & Sub-account”` to ensure maximum visibility and adoption of your app. However, if you’re building a fully white-labeled SaaS feature intended to be exclusively discovered and installed by agencies for use within their sub-accounts, you may choose to limit visibility to Agencies only.
  - **Listing Type:** White-label recommended for marketing agencies.

![drawing](https://storage.googleapis.com/msgsndr/HjiMUOsCCHCjtxzEf8PR/media/6899b9f5af6a321b106b6397.png)

<br>

1. After creating the APP you will be taken to the Profile section where you will need to add the details related to your APP. For eg; APP Logo, category, Company Name, APP Description, preview images etc.
1. After completing the profile details, please click on the Advanced Settings drop down available in the left pane and go to the auth section.
1. The Auth page will appear as shown in the screenshot below. This is where you’ll configure essential settings for your app’s OAuth integration, including scopes, redirect URLs, and client credentials.

![drawing](https://storage.googleapis.com/msgsndr/HjiMUOsCCHCjtxzEf8PR/media/6899bdc9924ed909d78adefc.png)

<br>

- **Scopes:** Scopes define the level of access your app will have — what data it can read or what actions it can perform on behalf of the user. [Click Here](https://marketplace.gohighlevel.com/docs/Authorization/Scopes) to find all the available Scopes.
  - It’s best practice to request the minimum number of scopes necessary for your app to function.
  - Click on the "Select Scope" dropdown and choose the relevant scopes based on your app’s functionality.
- **Redirect URL:** A Redirect URL (also known as a Callback URL) is the destination where the authorization server will send the authorization code after the user installs the app.
  - Enter your redirect URL in the Redirect URL field.
  - Click the "Add" button to save it.
- **Client Keys (ID & Secret):** In the Client Keys section:
  - Click the "Add" button.
  - Provide a name for your client key pair.
  - Upon saving, your Client ID and Client Secret will be generated.

These credentials are used to identify and authenticate your application with the OAuth server during token exchange.

**Important:** Be sure to copy and securely store your Client Secret immediately. After clicking "OK", you will not be able to view or copy the secret again from the UI.

---

## 2. Add the App to Your Desired Location

- Have the location/agency admin visit your Installation URL.
- Select the location to connect.
- Redirected to your Redirect URL with an Authorization Code.
- Exchange the code for an Access Token via the OAuth 2.0 [Get Access Token](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token) API.
- Use the Access Token to call APIs.

---

## 3. Get the Installation URL

Inside your APP Auth Pane available inside the Advanced Settings Section you will be able to see the Install Link at the top of the Page.

![drawing](https://storage.googleapis.com/msgsndr/HjiMUOsCCHCjtxzEf8PR/media/6899c08c5cdebfd21181f595.png)

<br>

Click on the Show button and you will be able to see the Installation URLs which you will be using to install the APP.

![drawing](https://storage.googleapis.com/msgsndr/HjiMUOsCCHCjtxzEf8PR/media/6899c0fd1636d22bb894ee31.png)

<br>

Depending on your usecase and account setup you can either use the standard or the whitelabel version of the Installation URL.

Refer to the below steps to install the APP:

1. Copy the Installation URL and open it in your browser.
1. In case you are not logged in to your GHL account it will ask you to login to your account.

![drawing](https://storage.googleapis.com/msgsndr/HjiMUOsCCHCjtxzEf8PR/media/6899c1dd924ed9407f8ba6fe.png)

<br>

- In case you are logged in it will show a page showcasing the accounts.

![drawing](https://storage.googleapis.com/msgsndr/HjiMUOsCCHCjtxzEf8PR/media/6899c23c924ed941ae8bb2c4.png)

<br>

1. Select the account you want to install the APP in.
1. When a user grants access, their browser is redirected to the specified redirect URI, and the Authorization Code is passed inside the code query parameter.

```json
https://myapp.com/oauth/callback/highlevel?code=7676cjcbdc6t76cdcbkjcd09821jknnkj
```

This URL demonstrates a typical OAuth callback scenario for a HighLevel integration. The `code` parameter included in the query string is essential for completing the authorization flow.

---

## 4. Listening to Webhook Events

The HighLevel Marketplace App allows you to listen to various webhook events, enabling real-time updates and integrations based on user actions.

To set up webhook listeners:

1. Navigate to your app in the Marketplace dashboard.
1. Click on the "Advanced Settings" dropdown in the left-hand panel.
1. Go to the "Webhooks" section.
1. In the input box at the top, enter your webhook URL.
1. Use the toggle switches next to each event to subscribe to the events you wish to listen for.

For a full list of supported webhook events and example payloads, please refer to the documentation: [Webhook Events & Payloads](https://marketplace.gohighlevel.com/docs/category/webhook)

### Important: App Install Webhook

One of the most critical webhook events is the App Install event. This event provides essential details whenever your app is installed by a user. If a webhook URL is configured for your app, this event is subscribed to by default.

Here’s a sample payload for the App Install event:

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

---

## 5. Exchange Authorization Code for Access Token

Once you have received the Authorization code on your redirect URl you are expected to use [Get Access Token API](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token) endpoint to generate the Acces Token which you can then use to run the API endpoints.

Sample Payload:

```bash
curl -X POST "https://services.leadconnectorhq.com/oauth/token" \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "665c6bb13d4e5364bdec0e2f-mawqjyjd",
    "client_secret": "74032272-7f45-4e07-8717-5e1ddbfe3de0",
    "grant_type": "authorization_code",
    "code": "363fe3f086e2db02bb9c34722902d21f76c9b217",
    "user_type": "Company",
    "redirect_uri": "https://myapp.com/oauth/callback/highlevel"
  }'
```

Sample Response:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJDb20",
  "token_type": "Bearer",
  "expires_in": 86399,
  "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJDb21w",
  "scope": "calendars.readonly calendars/events.readonly calendars.write calendars/events.write calendars/groups.readonly calendars/groups.write calendars/resources.readonly calendars/resources.write",
  "refreshTokenId": "685a9cc9f7434ae2fc66c31d",
  "userType": "Company",
  "companyId": "GNb7aIv4rQFVb9iwNl5K",
  "isBulkInstallation": true,
  "userId": "Rg6BRRiHh7dS9gJy3W8a"
}
```

---

## 6. Refresh Token Usage

As shown in the previous response, the Access Token expires after 86,399 seconds, which is approximately 24 hours. This means you'll need to regenerate a new Access Token once it expires to continue making API requests.

However, regenerating an Access Token using the authorization code requires repeating the entire installation process, which can be time-consuming. To simplify this, we also provide a Refresh Token along with the Access Token.

The Refresh Token is valid for up to one year, or until it is used. Once you use a Refresh Token to obtain a new Access Token, the original Refresh Token becomes invalid, and the response will include a new Refresh Token along with the new Access Token. If left unused, the Refresh Token will remain valid for one year.

To generate a new Access Token using your existing Refresh Token, use the following API endpoint: [Get Access Token](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token)

- Access Tokens expire after ~24 hours.
- Refresh Tokens are valid for 1 year or until used.
- Use Refresh Token to obtain a new Access Token without reinstallation.

Sample Payload:

```bash
curl --request POST \
  --url https://services.leadconnectorhq.com/oauth/token \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data client_id=665c6bb13d4e5364bdece2f-mawqjyjd \
  --data client_secret=74032272-7f45-4e7-8717-5e1ddbfe3de0 \
  --data grant_type=refresh_token \
  --data refresh_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.dCiY5HiwOaxk8Cz6pQ0KstyeRu5fhPo \
  --data user_type=Company \
  --data redirect_uri=https://myapp.com/oauth/callback/highlevel
```

Sample Response:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJDb21QU_Dcpo6oL_t8NN350g",
  "token_type": "Bearer",
  "expires_in": 86399,
  "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.sDO9cDrBHKShX173dwDZyxh4a6U",
  "scope": "businesses.readonly businesses.write companies.readonly calendars.readonly calendars/events.readonly calendars.write calendars/events.write calendars/groups.readonly calendars/groups.write calendars/resources.readonly calendars/resources.write",
  "refreshTokenId": "685b558f21fa7b18e3d09a",
  "userType": "Company",
  "companyId": "GNb7aIvrQFVb9wNl5K",
  "isBulkInstallation": true,
  "userId": "Rg6BRRih7dS9gJ3W8a"
}
```

---

## 7. Types of Access Token

In HighLevel we have 2 types of Access Token depending on the type of APP you have installed and who has installed the APP.

1. **Access Token with User Type as Agency:** This Type of Access Token will be utilized to run the APIs related to the Agency Functionalities. For eg; [Create Sub-Account API.](https://marketplace.gohighlevel.com/docs/ghl/locations/create-location/index.html)

Sample Response:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJDb21QU_Dcpo6oL_t8NN350g",
  "token_type": "Bearer",
  "expires_in": 86399,
  "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.sDO9cDrBHKShX173dwDZyxh4a6U",
  "scope": "businesses.readonly businesses.write companies.readonly calendars.readonly calendars/events.readonly calendars.write calendars/events.write calendars/groups.readonly calendars/groups.write calendars/resources.readonly calendars/resources.write",
  "refreshTokenId": "685ba558f21fa7b18e3d09a",
  "userType": "Company",
  "companyId": "GNb7aIv4rQFVb9wNl5K",
  "isBulkInstallation": true,
  "userId": "Rg6BRRiHh7dS9gJ3W8a"
}
```

1. **Access Token with User Type as Location:** This Type of Access Token will be utilized to run the APIs related to the Sub-Account or Location Functionalities. For eg; [Create Contact API.](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-contact)

Sample Response:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ODViZDRiNW",
  "token_type": "Bearer",
  "expires_in": 86400,
  "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3",
  "scope": "calendars.readonly calendars/events.readonly calendars.write calendars/events.write calendars/groups.readonly calendars/groups.write calendars/resources.readonly calendars/resources.write",
  "userType": "Location",
  "companyId": "GNb7aIv4rQFVb9iNl5K",
  "locationId": "HjiMUOsCCHCjtxEf8PR",
  "userId": "Rg6BRRiHh7dS9gy3W8a",
  "traceId": "8f712294-b015-42a-8c69-7fcb960560aa"
}
```

---

## 8. Create Sub-Account Token from Agency Token

Suppose you have an Agency-level Access Token but want to run API endpoints specific to a Sub-Account (Location). In that case, you can use the Agency-level Access Token to generate a Sub-Account/Location-level Access Token via the [Get Location Access Token from Agency Token](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token) API endpoint.

Sample Payload:

```bash
curl -L "https://services.leadconnectorhq.com/oauth/locationToken" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Version: 2021-07-28" \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJD" \
  -d '{
    "companyId": "GNb7aIv4rQFV9iwNl5K",
    "locationId": "HjiMUOsCCHCjtxEf8PR"
  }'
```

Sample Response:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ODViZDRiNW",
  "token_type": "Bearer",
  "expires_in": 86400,
  "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3",
  "scope": "calendars.readonly calendars/events.readonly calendars.write calendars/events.write calendars/groups.readonly calendars/groups.write calendars/resources.readonly calendars/resources.write",
  "userType": "Location",
  "companyId": "GNb7aIv4rQFVb9iNl5K",
  "locationId": "HjiMUOsCCHCjtxEf8PR",
  "userId": "Rg6BRRiHh7dS9gy3W8a",
  "traceId": "8f712294-b015-42a-8c69-7fcb960560aa"
}
```
