# ghl-api-mcp

`ghl-api-mcp` is an MCP stdio server for GoHighLevel documentation. It lets agents search docs, list endpoints, and fetch focused API details without loading large markdown files into prompt context.

This repo does not include a runnable GoHighLevel OAuth/SSO sample app; it contains documentation and the MCP docs server that indexes that documentation.

## What It Does

The server indexes markdown files under `docs/` and exposes MCP tools for:

- `list_docs`
- `search_docs`
- `list_endpoints`
- `get_endpoint_details`
- `get_section`
- `get_document`
- `reload_docs`

The current corpus includes API review docs, implementation guides, and operational notes such as OAuth/SSO integration details and rate-limit guidance. To see exactly what is loaded, run `list_docs`.

`list_docs` labels each file as either a `reference` or `guide`. Use `get_document` when an agent needs the full body of a longer procedural document instead of a single extracted section.

For `search_docs`, `list_endpoints`, `get_endpoint_details`, and `get_section`, you can pass an optional `whitelabel_domain` like `api.example.com` or `https://api.example.com`. Returned endpoint URLs and embedded example URLs will be rewritten to that domain.

## Requirements

- Node.js `>=20` for local usage
- Docker, if you want to run the containerized version

## Quick Start

### Local

```bash
npm install
npm start
```

Or run the CLI entrypoint directly:

```bash
npm install
./bin/ghl-api-mcp.js
```

Important: this is a stdio MCP server. When you run it successfully, it stays attached and waits for client requests. It is not an HTTP server and does not open a port.

### Docker

```bash
docker build -t ghl-api-mcp .
docker run --rm -i ghl-api-mcp
```

## MCP Client Configuration

### Local Repo Checkout

Use this when the repository already exists on disk:

```json
{
  "mcpServers": {
    "ghl-docs": {
      "command": "node",
      "args": ["/absolute/path/to/ghl-api-mcp/src/server.js"]
    }
  }
}
```

### Local Repo Checkout With External Docs Directory

```json
{
  "mcpServers": {
    "ghl-docs": {
      "command": "node",
      "args": ["/absolute/path/to/ghl-api-mcp/src/server.js"],
      "env": {
        "GHL_DOCS_DIR": "/absolute/path/to/docs"
      }
    }
  }
}
```

### Docker

```json
{
  "mcpServers": {
    "ghl-docs": {
      "command": "docker",
      "args": ["run", "--rm", "-i", "ghl-api-mcp"]
    }
  }
}
```

### Docker With External Docs Directory

```json
{
  "mcpServers": {
    "ghl-docs": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-v",
        "/absolute/path/to/docs:/docs:ro",
        "-e",
        "GHL_DOCS_DIR=/docs",
        "ghl-api-mcp"
      ]
    }
  }
}
```

## Document Loading

- Any `.md` file under `docs/` is indexed automatically
- If the server is already running, call `reload_docs` after changing docs on disk
- If you add docs to the repo and run via Docker without a mounted docs directory, rebuild the image so the container includes the new files

## Development

```bash
npm install
npm test
```

## Scraping Workflow

Use the browser-backed scraper when a GHL doc links to richer ClickUp content:

```bash
npm run scrape:page -- \
  --url https://marketplace.gohighlevel.com/docs/ghl/contacts/search-contacts-advanced \
  --output docs/generated/search-contacts-advanced.md
```

Browser selection order:

1. Chrome
2. Chrome Canary
3. Zen

You can override the browser with `--browser`, `--executablePath`, or `PUPPETEER_EXECUTABLE_PATH`.
