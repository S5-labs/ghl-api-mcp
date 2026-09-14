> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/external-auth/MultiAccountSupport). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Multi-Account Support & User Info

This section covers two related capabilities that work for both [OAuth 2.0](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2) and [API Key / Basic Auth](https://marketplace.gohighlevel.com/docs/oauth/external-auth/BasicAuth):

- **User Info Endpoint** - fetch the connected account's details (name, email) so HighLevel can display *which* account is connected.
- **Allow multi-account auth** - let a single sub-account connect more than one external account.

## User Info Endpoint

When your provider exposes a "who am I" style endpoint (such as `/me`, `/account`, or similar), turn on **User Info Endpoint**. HighLevel calls it after authentication and syncs the connected user's name and email from your provider. This is what lets the UI show a friendly label for each connected account instead of an opaque ID.

> Heads up: Once User Info Endpoint is saved in a published version of your app, it cannot be turned off in later versions. Be sure you want it before publishing.

### Mapping the response fields

After the user info request runs, you tell HighLevel where to find each value in the response using dot notation for nested paths.

| Field | Required | Description |
| --- | --- | --- |
| **ID** | Yes (when User Info Endpoint is enabled) | The unique identifier of the connected account. This is how HighLevel distinguishes one connected account from another. |
| **Name** | One of Name or Email | A display name for the account. |
| **Email** | One of Name or Email | A display email for the account. |

For example, given this response:

```json
{
  "data": {
    "id": "acct_12345",
    "name": "Acme Store",
    "email": "owner@acme.com"
  }
}
```

You would map:

- **ID field** → `data.id`
- **Name field** → `data.name`
- **Email field** → `data.email`

> When User Info Endpoint is enabled you must map ID and at least one of Name or Email. The ID identifies the connected account; Name or Email is used for display.

## Allow multi-account auth for this app

Turn on **Allow multi-account auth for this app** to let users connect multiple external accounts to a single sub-account. This is useful when a customer manages several stores, workspaces, or profiles on your platform and wants to use all of them from one HighLevel location.

The mapped **ID** (above) is what keeps connected accounts distinct, which is why user info mapping pairs naturally with multi-account support.

> Heads up: Once Allow multi-account auth is saved in a published version, it cannot be turned off in later versions.

## OAuth: Fetch user information

For OAuth apps, configure the user info request in the **Fetch user information** section:

- **Same as Test API Endpoint** - check this to reuse your [Test API endpoint](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#test-api-endpoint) configuration instead of defining a separate request.
- **Fetch user info URL** - otherwise, configure a dedicated request (method + URL, with **More options** for params/headers/body). The access token is included automatically via the `Authorization: Bearer {{bundle.accessToken}}` header.

Then map the response fields (**ID field**, **Name field**, **Email field**) as described above. Need to transform or assemble the response yourself? Use [Code Mode](https://marketplace.gohighlevel.com/docs/oauth/external-auth/CodeMode) on the user info request.

## Basic Auth: Account info

For API Key / Basic Auth apps, the same capabilities appear under **Configure Multi-Account Support**:

- **Use the authentication endpoint response as account info** - check this to reuse the response from your [authentication endpoint](https://marketplace.gohighlevel.com/docs/oauth/external-auth/BasicAuth#2-configure-authentication-endpoint) instead of making a separate call.
- **Account Info Request** - otherwise, configure an optional request (method + URL, with more options) used to fetch account metadata for each credential set.

Then map the fields:

| Field | Description |
| --- | --- |
| **Account ID Path** | Path to the value that identifies the account, e.g. `data.account.id`. Required when User Info Endpoint is enabled. |
| **Account Name Path** | Path to the account's display name, e.g. `data.account.name`. |
| **Account Email Path** | Path to the account's email, e.g. `data.account.email`. |
