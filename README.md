# GHL API Docs MCP Server

Dockerized MCP server that exposes GoHighLevel API documentation lookup tools for agents.

## Included Documentation

The server ships with:

- `docs/GHL_Custom_Objects_Fields_Review.md`

You can add more `.md` files under `docs/` and call `reload_docs` to re-index at runtime.

## Tools Exposed

- `list_docs` - list loaded documents and counts.
- `search_docs` - keyword search across sections and endpoints.
- `list_endpoints` - browse endpoints with optional filters.
- `get_endpoint_details` - get endpoint metadata + excerpt.
- `get_section` - fetch a full section by title.
- `reload_docs` - reload markdown from disk.

## Run Locally

```bash
npm install
npm start
```

## Run In Docker

Build image:

```bash
docker build -t ghl-docs-mcp .
```

Run with bundled docs:

```bash
docker run --rm -i ghl-docs-mcp
```

Run with external docs folder mounted:

```bash
docker run --rm -i \
  -v /absolute/path/to/docs:/docs:ro \
  -e GHL_DOCS_DIR=/docs \
  ghl-docs-mcp
```

## MCP Client Config Example

Use a docker-based stdio command in your MCP client configuration:

```json
{
  "mcpServers": {
    "ghl-docs": {
      "command": "docker",
      "args": ["run", "--rm", "-i", "ghl-docs-mcp"]
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
        "ghl-docs-mcp"
      ]
    }
  }
}
```

## Development

Run tests:

```bash
npm test
```
