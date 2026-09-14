> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/external-auth/ConfigureYourFields). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Configure Your Fields

**Configure Your Fields** lets you collect custom inputs from the user during installation. These inputs become available to every request your app makes through External Authentication, so you can tailor URLs, headers, parameters, and request bodies to each individual user.

This section is available for **both** [API Key / Basic Auth](https://marketplace.gohighlevel.com/docs/oauth/external-auth/BasicAuth) and [OAuth 2.0](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2).

## Why custom fields exist: dynamic, per-user endpoints

Many providers don't have a single, fixed API URL. The endpoint depends on something unique to each user's account, such as a store domain or a region.

- **Shopify** - every store lives at its own subdomain, e.g. `https://acme-store.myshopify.com`.
- **WooCommerce** - each merchant runs their store at their own URL, e.g. `https://shop.acme.com`.
- **Self-hosted / regional APIs** - the host, tenant ID, or data-center region differs per customer.

Without custom fields, you couldn't build a single app configuration that works for everyone. With them, you ask the user for the variable piece (for example, `store_domain`) at install time and reference it inside your endpoint configuration.

For example, you might configure your authentication URL as:

```text
https://{{userData.store_domain}}/admin/api/2024-01/shop.json
```

At install time the user provides `store_domain = acme-store.myshopify.com`, and HighLevel resolves the URL to:

```text
https://acme-store.myshopify.com/admin/api/2024-01/shop.json
```

## Adding a field

In **Step 2 → Configure Your Fields**, click **+ Add Field**. Each field has the following properties:

| Property | Required | Description |
| --- | --- | --- |
| **Label** | No | A friendly name shown to the user on the install form (e.g. "Store domain"). |
| **Key** | Yes | The programmatic identifier you reference in your configuration. Use a simple key like `store_domain` or `api_key`. This is how you access the value via `{{userData.<key>}}`. |
| **Type** | No | The input type shown to the user: **text** (default) or **password** (masked input, for secrets). |
| **Required** | No | If checked, the user can't complete installation without filling this field. |
| **Help Text** | No | A short hint displayed under the field, e.g. "Enter the API key found at yourdomain.com/account". |
| **Default Value** | No | A value used when the user leaves the field empty. |

> Limit: You can configure a maximum of three fields.

## Using field values: the `userData` object

Every value the user enters is stored on a `userData` object, keyed by the field **Key**. You reference it anywhere in your endpoint configuration with the template syntax `{{userData.<key>}}`.

For example, if you defined a field with key `api_key`:

- In a header: `Authorization: Bearer {{userData.api_key}}`
- In a URL parameter: `?token={{userData.api_key}}`
- In the request body: `{ "apiKey": "{{userData.api_key}}" }`
- In the URL itself: `https://{{userData.store_domain}}/api/me`

When the request is made, HighLevel substitutes each `{{userData.<key>}}` placeholder with the value that specific user provided.

> Using Code Mode? The same values are available there too - access them through bundle.inputData.<key> instead of the {{userData.<key>}} template syntax.

## Where the values are sent

The fields you collect are passed along with the install payload that HighLevel sends to your authentication endpoint:

- In **POST**, **PUT**, and **PATCH** requests, the fields are included in the request **body**.
- In **GET** requests, the fields are passed as **query parameters**.

For the complete install payload (including `companyId`, `locationId`, and sub-account selection details), see [API Key / Basic Auth → The install payload](https://marketplace.gohighlevel.com/docs/oauth/external-auth/BasicAuth#the-install-payload).
