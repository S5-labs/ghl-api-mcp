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

This is the preferred setup for local agents. It reads the repo's `docs/`
directory directly, so docs-only edits do not require rebuilding Docker images
and MCP clients do not create Docker containers.

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

Use Docker only when the repo is not available to the MCP client. For a local
checkout, prefer the Node configuration above so client restarts cannot leave
old MCP containers running.

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

### Automatic full-corpus synchronization

The documentation corpus is synchronized from two official sources:

1. The rendered [HighLevel API documentation website](https://marketplace.gohighlevel.com/docs/)
   is the freshness authority. Its sitemap currently exposes the canonical,
   unversioned pages, which are converted to Markdown under `docs/website/`.
2. HighLevel's
   [`GoHighLevel/highlevel-api-docs`](https://github.com/GoHighLevel/highlevel-api-docs)
   repository supplies structured OpenAPI schemas and source Markdown under
   `docs/generated/`.

This split is intentional: the website can be newer than the public source
repository, while the repository often contains richer request and response
schemas than the rendered API pages. Knowledge-base document and section
lookups prefer website snapshots; exact endpoint lookups prefer the structured
v3/v2 OpenAPI documents.

Run a synchronization locally:

```bash
npm run docs:sync
```

Check whether the committed corpus is current without changing files:

```bash
npm run docs:check
```

Hand-authored review documents in `docs/` are never overwritten. Both syncs are
deterministic and record source/output hashes in
`docs/website/.ghl-website-manifest.json` and
`docs/generated/.ghl-sync-manifest.json`. Normal local website syncs cache pages
whose non-empty sitemap timestamp has not changed. Pages without a sitemap
timestamp are fetched on every sync so new content is not cached indefinitely.
This includes SDK and Marketplace CLI guides as well as API reference pages.
Deleted sitemap routes are removed
automatically.

`npm run docs:check` forces a complete website revalidation, even when sitemap
timestamps are unchanged. The scheduled workflow does the same, preventing an
incorrect or missing `lastmod` value from hiding website drift.

The `Sync HighLevel API documentation` GitHub Actions workflow runs every Monday
and can also be started manually. When either official source changes, it runs
the test suite and opens or updates a pull request from
`automation/sync-highlevel-api-docs`. Repository Actions settings must allow
GitHub Actions to create pull requests.

You can pin a different upstream branch or tag with `GHL_DOCS_REF`, or test a
local checkout without network access:

```bash
node scripts/sync-ghl-docs.js --source-dir /path/to/highlevel-api-docs
```

To refresh only the rendered website snapshots, or inspect one page during
development:

```bash
npm run docs:sync:website
node scripts/sync-ghl-website.js \
  --url https://marketplace.gohighlevel.com/docs/other/user-context-marketplace-apps \
  --output /tmp/ghl-website-page
```

### Single-page browser scraping

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
