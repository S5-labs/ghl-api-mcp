# ghl-api-mcp

`ghl-api-mcp` is a Dockerized MCP server that gives agents targeted access to GoHighLevel API documentation.
Instead of loading large markdown files into prompt context, agents can search docs, list endpoints, and fetch focused endpoint or section details on demand.

## Included Documentation

The server currently ships with:

- `docs/GHL_Custom_Objects_Fields_Review.md`

You can add more `.md` files under `docs/` and call `reload_docs` to re-index them at runtime.

## Tools Exposed

- `list_docs` lists loaded documents and counts.
- `search_docs` runs keyword search across sections and endpoints.
- `list_endpoints` browses endpoints with optional method, path, and section filters.
- `get_endpoint_details` returns endpoint metadata and a focused excerpt.
- `get_section` fetches a section by title or partial title.
- `reload_docs` reloads markdown files from disk.

## Run Locally

```bash
npm install
npm start
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

## MCP Client Config Example

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
