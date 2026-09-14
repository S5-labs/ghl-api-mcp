> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/ExternalAuthentication). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# External Authentication

## What is External Authentication?

External Authentication lets your Marketplace app verify a HighLevel user against **your own system** before the app is installed. When a user installs your app, HighLevel collects the credentials you ask for, authenticates them with your backend, and securely stores the resulting tokens or credentials.

Those stored credentials are then used automatically whenever your app needs to talk to your service - for example, when a [Workflow Action or Trigger](https://marketplace.gohighlevel.com/docs/marketplace-modules/WorkflowActionsAndTriggers) you've built runs and needs to call your API on the user's behalf. HighLevel manages the credential lifecycle (including refreshing OAuth tokens) so your integration keeps working without the user having to re-authenticate constantly.

### A real-world example

Imagine you're building an app that syncs orders from a merchant's store into HighLevel:

- The merchant installs your app from the Marketplace.
- During installation, they're asked to authorize your app (via OAuth) or to enter an API key.
- HighLevel stores the credentials and uses them every time your workflow action needs to read or write data in the merchant's store.

The merchant connects once, and your integration keeps working.

## Why use it?

- **Authenticate before install** - confirm the user actually has a valid account on your side before the app is added.
- **Securely store credentials** - HighLevel keeps the API keys / tokens safe and injects them into the external calls your app makes.
- **Hands-off token management** - for OAuth, HighLevel can automatically refresh expiring access tokens.
- **Per-account configuration** - collect things like a store domain or workspace ID so your endpoints can be tailored to each user.

## Supported authentication methods

External Authentication supports two methods:

| Method | Best for | Documentation |
| --- | --- | --- |
| **OAuth v2** (recommended) | Providers that support the OAuth 2.0 Authorization Code flow. HighLevel redirects the user to your authorization page, exchanges the returned code for tokens, and stores them. | [OAuth 2.0 →](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2) |
| **API Key / Basic Auth** | Providers that authenticate with a username/password, API key, or other custom credentials sent on each request. | [API Key / Basic Auth →](https://marketplace.gohighlevel.com/docs/oauth/external-auth/BasicAuth) |

> Note: Currently, only the OAuth 2.0 Authorization Code grant type is supported. Switching an app between authentication types (for example, from Basic to OAuth) after it has been published is not supported.

## How to enable External Authentication

1. Go to the [Developer Marketplace](https://marketplace.gohighlevel.com/) → **My Apps** and select your app.
1. Open **Advanced Settings → External Authentication** in the left navigation.
1. Toggle **External authentication** on. When enabled, users go through an additional authentication step during installation.

When enabled, configuration follows a simple three-step wizard:

| Step | What you do |
| --- | --- |
| **Step 1 - Choose authentication method** | Select **OAuth v2** or **API key / Basic auth**. |
| **Step 2 - Configure** | Set up your fields, endpoints, and (optionally) multi-account support. |
| **Step 3 - Test your auth** | Run the authentication flow with sample values to confirm everything works before publishing. |

## Configuration building blocks

External Authentication is made up of a few configurable pieces. Depending on the method you choose, you'll use some or all of them:

- **[Configure Your Fields](https://marketplace.gohighlevel.com/docs/oauth/external-auth/ConfigureYourFields)** - Custom inputs you ask the user for at install time (for example a Shopify or WooCommerce store domain). These power *dynamic* URLs and request data that differ per user. Available for both methods.
- **[API Key / Basic Auth](https://marketplace.gohighlevel.com/docs/oauth/external-auth/BasicAuth)** - Configure the request HighLevel sends to your backend to verify credentials, plus the install payload your endpoint receives.
- **[OAuth 2.0](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2)** - Configure the authorization, token, refresh, and test requests for the OAuth Authorization Code flow.
- **[Multi-Account Support & User Info](https://marketplace.gohighlevel.com/docs/oauth/external-auth/MultiAccountSupport)** - Let a single sub-account connect multiple external accounts, and fetch a connected account's name/email for display.
- **[Code Mode](https://marketplace.gohighlevel.com/docs/oauth/external-auth/CodeMode)** - When the form builder isn't flexible enough, write JavaScript to fully customize any OAuth request.

## Testing your integration

Before submitting your app for review, always use **Step 3 - Test your auth**. The tester runs the real authentication flow with sample values:

- For **OAuth**, it opens your authorization page, exchanges the code for tokens, then calls your Test API endpoint.
- For **Basic Auth**, it prompts you for your configured fields and calls your authentication endpoint.

The tester surfaces the request that was sent, the response received, HTTP details, and (when using [Code Mode](https://marketplace.gohighlevel.com/docs/oauth/external-auth/CodeMode)) execution logs - so you can debug quickly.

> Tip: Save your configuration before testing. The tester always uses the most recently saved version.

## Next steps

1. Decide which method fits your provider: [OAuth 2.0](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2) or [API Key / Basic Auth](https://marketplace.gohighlevel.com/docs/oauth/external-auth/BasicAuth).
1. If your endpoints differ per user (store domain, region, workspace), set up [Configure Your Fields](https://marketplace.gohighlevel.com/docs/oauth/external-auth/ConfigureYourFields).
1. If users may connect more than one external account, review [Multi-Account Support & User Info](https://marketplace.gohighlevel.com/docs/oauth/external-auth/MultiAccountSupport).
1. Need full control over a request? See [Code Mode](https://marketplace.gohighlevel.com/docs/oauth/external-auth/CodeMode).

## Need help?

- **Community**: [Join our developer community](https://developers.gohighlevel.com/join-dev-community)
- **Support**: [Contact developer support](https://developers.gohighlevel.com/support)
