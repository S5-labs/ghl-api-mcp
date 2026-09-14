> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/sdk/node). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# HighLevel Node.js SDK

The official `@gohighlevel/api-client` package wraps every HighLevel REST endpoint with a typed, promise-based interface. You get automatic OAuth handling, token rotation, retries, and consistent errors without re-implementing request plumbing.

## Installation

The SDK supports any modern Node.js runtime (v18+) and works with npm, yarn, or pnpm. Install it as a regular dependency so it is available anywhere you need to talk to HighLevel.

- npm
- yarn
- pnpm

```bash
npm install @gohighlevel/api-client
```

```bash
yarn add @gohighlevel/api-client
```

```bash
pnpm add @gohighlevel/api-client
```

## Quick Start

### Initialize the client

Set your OAuth credentials (or PIT) through environment variables so that local development and deployments share the same configuration.

- JavaScript
- TypeScript

```javascript
const { HighLevel } = require('@gohighlevel/api-client');

const highLevel = new HighLevel({
  clientId: process.env.HIGHLEVEL_CLIENT_ID,
  clientSecret: process.env.HIGHLEVEL_CLIENT_SECRET,
});
```

```typescript
import { HighLevel } from '@gohighlevel/api-client';

const highLevel = new HighLevel({
  clientId: process.env.HIGHLEVEL_CLIENT_ID ?? '',
  clientSecret: process.env.HIGHLEVEL_CLIENT_SECRET ?? '',
});
```

### Make your first API call

Every service under `highLevel` mirrors the REST resources (contacts, opportunities, workflows, etc.). Provide the required `locationId` or `companyId` so the SDK can manage tokens for you.

```javascript
async function listContacts() {
  try {
    const response = await highLevel.contacts.searchContactsAdvanced({
      locationId: 'zBG0T99IsBgOoXUrcROH',
      pageLimit: 5,
    });

    console.log(response);
  } catch (error) {
    console.error('HighLevel error:', error);
  }
}

listContacts();
```

## Token storage and refresh

By default, tokens live in memory. In production, inject your own storage adapter (Redis, MongoDB, SQL, etc.) so tokens survive restarts:

```javascript
import { HighLevel, MongoDBSessionStorage } from '@gohighlevel/api-client';

const highLevel = new HighLevel({
  clientId: process.env.HIGHLEVEL_CLIENT_ID,
  clientSecret: process.env.HIGHLEVEL_CLIENT_SECRET,
  sessionStorage: new MongoDBSessionStorage({
    dbUrl: 'mongodb://localhost:27017',
    dbName: 'ghl_sessions'
  })
});
```

The SDK will refresh expired access tokens on-demand and update your storage without extra work.

## Webhook middleware

Use `highLevel.webhooks.subscribe()` to get an Express-compatible middleware that validates signatures, handles INSTALL/UNINSTALL events, and keeps session storage synchronized before your custom logic runs.

```javascript
app.use('/api/webhooks/ghl', highLevel.webhooks.subscribe());
app.post('/api/webhooks/ghl', (req, res) => {
  // Your business logic can rely on the tokens being current.
  res.json({ ok: true });
});
```

**Note**: If you use webhook middleware provided by SDK, in case of bulk installation it will generate and store the token for each location when it receives INSTALL event from highlevel.

## Additional resources

You can find some SDK & additional examples here:

[SDK](https://github.com/GoHighLevel/highlevel-api-sdk)

[npm](https://www.npmjs.com/package/@gohighlevel/api-client)

[Examples](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/node)
