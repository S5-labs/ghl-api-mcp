> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/external-auth/BasicAuth). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# API Key / Basic Auth

Use **API Key / Basic Auth** when your provider authenticates requests with a username and password, an API key, or other custom credentials sent on each call. During installation, HighLevel collects the credentials you ask for and sends them to your **authentication endpoint** to verify them. If the endpoint responds with a success status, the install proceeds and the credentials are stored for later use.

## Configuration at a glance

A Basic Auth setup has three parts:

1. **[Configure Your Fields](https://marketplace.gohighlevel.com/docs/oauth/external-auth/ConfigureYourFields)** - the credentials/inputs you ask the user for (API key, username, password, store domain, etc.).
1. **Configure authentication endpoint** - the request HighLevel sends to your backend to verify those inputs.
1. **(Optional) [Multi-Account Support](https://marketplace.gohighlevel.com/docs/oauth/external-auth/MultiAccountSupport)** - let a sub-account connect multiple external accounts, and sync the connected account's name/email.

## 1. Configure your fields

Define the inputs the user must provide at install time. These are typically the credentials your endpoint needs to verify - for example `apiKey`, `username`, and `password`.

See [Configure Your Fields](https://marketplace.gohighlevel.com/docs/oauth/external-auth/ConfigureYourFields) for the full reference. The key thing to remember: each field's value is available as `{{userData.<key>}}` everywhere in the request you configure below.

## 2. Configure authentication endpoint

This is the HTTP request HighLevel makes when a user installs your app. If it returns a success status code, authentication passes.

| Setting | Description |
| --- | --- |
| **Method** | The HTTP method: `GET`, `POST`, `PUT`, or `PATCH`. (With `GET`, you cannot configure a request body.) |
| **Authentication URL** | The endpoint HighLevel calls to verify credentials, e.g. `https://domain.com/me`. Must be an `https` URL. Supports `{{userData.<key>}}` placeholders. |

Click **Show options** to add:

- **URL Parameters** - query-string key/value pairs.
- **HTTP Headers** - request headers (e.g. an `Authorization` header).
- **Request Body** - body key/value pairs (not available for `GET`).

In each of these, you can reference the user's input with `{{userData.<key>}}`. For example, a header value of `Bearer {{userData.apiKey}}` becomes `Bearer sk_live_123...` for a user who entered that API key.

### Passing user input into the request

You access user-entered values through the `userData` object using the field's **Key**. For example, if your field's key is `apiKey`, reference it as `{{userData.apiKey}}`.

### Success status codes

For authentication to be considered successful, your authentication URL must respond with one of the following status codes:

```text
200, 201, 202, 204
```

Any other status code is treated as an authentication failure, and the install is blocked.

## The install payload

When a user installs your app, HighLevel sends the fields you configured **plus** a set of context parameters describing the installation. In `POST`, `PATCH`, and `PUT` requests these are sent in the body; in `GET` requests they're sent as query parameters.

| Key | Type | Details |
| --- | --- | --- |
| `companyId` | string | Set to the agency ID if the app was installed by an agency. `null` if installed by a sub-account (location). |
| `{field_key}` | string | One entry per field you configured (up to three). The key is your field's **Key**; the value is what the user entered. |
| `approveAllLocations` | boolean | `true` if "Select all N sub-accounts" was checked during installation; otherwise `false`. |
| `locationId` | string[] | If `approveAllLocations = false`, an array of the sub-account IDs selected during install. If `approveAllLocations = true`, this is `null`. |
| `excludedLocations` | string[] | If `approveAllLocations = true`, an array of sub-account IDs that were **not** selected. If `approveAllLocations = false`, this is `null`. |

### Examples

Assume an agency has 5 sub-accounts - A, B, C, D, E - and your app asks for `username` and `password`.

**Scenario 1 - user selects sub-account A:**

```json
{
  "companyId": "123",
  "locationId": ["A"],
  "username": "user1",
  "password": "password123",
  "approveAllLocations": false,
  "excludedLocations": null
}
```

**Scenario 2 - user selects sub-accounts A and B:**

```json
{
  "companyId": "123",
  "locationId": ["A", "B"],
  "username": "user1",
  "password": "password123",
  "approveAllLocations": false,
  "excludedLocations": null
}
```

**Scenario 3 - user selects "Select all 5 sub-accounts":**

```json
{
  "companyId": "123",
  "locationId": null,
  "username": "user1",
  "password": "password123",
  "approveAllLocations": true,
  "excludedLocations": null
}
```

**Scenario 4 - user selects "Select all 5", but unchecks C and D:**

```json
{
  "companyId": "123",
  "locationId": null,
  "username": "user1",
  "password": "password123",
  "approveAllLocations": true,
  "excludedLocations": ["C", "D"]
}
```

## 3. Multi-account support (optional)

If a single sub-account may need to connect more than one external account - or you want to display the connected account's name/email - configure **Multi-Account Support**. For Basic Auth this includes an optional **Account Info Request** and the ability to reuse your authentication response as the account info.

See [Multi-Account Support & User Info](https://marketplace.gohighlevel.com/docs/oauth/external-auth/MultiAccountSupport) for the full reference.

## Testing your setup

In **Step 3 - Test your auth**, you'll be prompted to enter values for the fields you configured. HighLevel then calls your authentication endpoint with those values and shows you the request, response, and HTTP details so you can confirm everything works before publishing.

> Save your configuration before testing - the tester uses the most recently saved version.
