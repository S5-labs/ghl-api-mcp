> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/sdk/python). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# HighLevel Python SDK

The official `gohighlevel-api-client` package publishes a async client that speaks to every HighLevel endpoint with the same token automation, webhook helpers, and storage adapters you get on other platforms. Requires Python 3.8+.

## Installation

- pip
- Pipenv
- Poetry

```bash
pip install gohighlevel-api-client
```

```bash
pipenv install gohighlevel-api-client
```

```bash
poetry add gohighlevel-api-client
```

## Quick Start

### Initialize the client

```python
from highlevel import HighLevel
client = HighLevel(
    client_id="your_client_id",
    client_secret="your_client_secret",
)
```

### Make an API call

The SDK is async-first; wrap your logic in `asyncio.run()` when you are not already inside an async framework.

```python
import asyncio
from highlevel import HighLevel

async def main():
  client = HighLevel(
    client_id="your_client_id",
    client_secret="your_client_secret",
  )

  response = await client.contacts.search_contacts_advanced({
    "locationId": "zBG0T99IsBgOoXUrcROH",
    "pageLimit": 5,
  })

  print(response)

asyncio.run(main())
```

## Session storage

Use in-memory storage for local testing or swap in MongoDB/Redis/etc. for production resiliency.

```python
from highlevel.storage import MongoDBSessionStorage

storage = MongoDBSessionStorage(
  connection_string="mongodb://localhost:27017",
  database_name="ghl_sessions",
  collection_name="jwt_tokens",
)

client = HighLevel(
  client_id="your_client_id",
  client_secret="your_client_secret",
  session_storage=storage,
)
```

## Webhook integration

Hook up the middleware returned by `client.webhooks.subscribe()` to validate signatures, respond to INSTALL/UNINSTALL automatically, and keep session storage synchronized.

```python
client = HighLevel(
  client_id="your_client_id",
  client_secret="your_client_secret"
)

webhook_middleware = client.webhooks.subscribe()

@app.post("/api/webhooks/ghl")
async def handle_ghl_webhook(request):
  await webhook_middleware(request)
  # you custom logic for webhook goes here
  return {"status": "success"}
```

## Additional resources

You can find some SDK & additional examples here:

[SDK](https://github.com/GoHighLevel/highlevel-api-python)

[pypi](https://pypi.org/project/gohighlevel-api-client/)

[Examples](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/python)
