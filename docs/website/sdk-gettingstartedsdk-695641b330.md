> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/sdk/GettingStartedSDK). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Getting Started with HighLevel SDKs

HighLevel now ships official SDKs for Node.js, Python, and PHP so you can stop hand-rolling API calls. All three clients deliver the same core features—automatic OAuth flows, PIT support, per-location token storage, webhook helpers, auto refresh tokens and typed service methods—so pick the runtime that matches your stack.

## Pick your language

| SDK | Package | Minimum runtime | Deep dive |
| --- | --- | --- | --- |
| Node.js | `@gohighlevel/api-client` | Node.js 18+ | [Node guide](https://marketplace.gohighlevel.com/docs/sdk/node) |
| Python | `gohighlevel-api-client` | Python 3.8+ | [Python guide](https://marketplace.gohighlevel.com/docs/sdk/python) |
| PHP | `gohighlevel/api-client` | PHP 7.4+ | [PHP guide](https://marketplace.gohighlevel.com/docs/sdk/php) |

## Installation quick reference

- Node.js
- Python
- PHP

```bash
npm install @gohighlevel/api-client
# or
yarn add @gohighlevel/api-client
# or
pnpm add @gohighlevel/api-client
```

- Read the [Node guide](https://marketplace.gohighlevel.com/docs/sdk/node) when you are ready.

```bash
pip install gohighlevel-api-client
# or
poetry add gohighlevel-api-client
```

- Continue with the [Python guide](https://marketplace.gohighlevel.com/docs/sdk/python.md).

```bash
composer require gohighlevel/api-client
```

- Dive into the [PHP guide](https://marketplace.gohighlevel.com/docs/sdk/php.md).

## What you get out of the box

- **Auto token rotation** – refresh happens transparently once storage is configured.
- **Webhook utilities** – signature validation plus automatic handling of webhook events (INSTALL and UNINSTALL).
- **Token for bulk installation** – if webhook is used, it will generate token for each location in which app is installed and store it in the db
