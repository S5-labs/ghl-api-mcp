# ghl-api-mcp

`ghl-api-mcp` is an MCP server that gives agents targeted access to GoHighLevel API documentation.
Instead of loading large markdown files into prompt context, agents can search docs, list endpoints, and fetch focused endpoint or section details on demand.

## Included Documentation

The server currently ships with:

- `docs/GHL_Custom_Fields_Review.md`
- `docs/GHL_Custom_Objects_Review.md`

You can add more `.md` files under `docs/` and call `reload_docs` to re-index them at runtime.

## Tools Exposed

- `list_docs` lists loaded documents and counts.
- `search_docs` runs keyword search across sections and endpoints.
- `list_endpoints` browses endpoints with optional method, path, and section filters.
- `get_endpoint_details` returns endpoint metadata and a focused excerpt.
- `get_section` fetches a section by title or partial title.
- `reload_docs` reloads markdown files from disk.

For `search_docs`, `list_endpoints`, `get_endpoint_details`, and `get_section`, you can pass an optional `whitelabel_domain` value such as `api.example.com` or `https://api.example.com`. When provided, returned endpoint URLs and embedded example URLs are rewritten to that domain.

## Run Locally

```bash
npm install
npm start
```

You can also run the CLI entrypoint directly after install:

```bash
npm install
./bin/ghl-api-mcp.js
```

## Run In Docker

Build image:

```bash
docker build -t ghl-api-mcp .
```

Run with bundled docs:

```bash
docker run --rm -i ghl-api-mcp
```

Run with external docs folder mounted:

```bash
docker run --rm -i \
  -v /absolute/path/to/docs:/docs:ro \
  -e GHL_DOCS_DIR=/docs \
  ghl-api-mcp
```

## MCP Client Config Examples

Use a local Node command when the repo is already checked out:

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

If you want the docs directory outside the repo:

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

Use a docker-based stdio command in your MCP client configuration:

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

If you want to pass your own docs folder:

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

## Development

Install dependencies and run tests:

```bash
npm install
npm test
```
