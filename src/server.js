import path from "node:path";
import { fileURLToPath } from "node:url";

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

import { DocsIndex } from "./docs-index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_DOCS_DIR = path.resolve(__dirname, "..", "docs");
const DEFAULT_API_BASE_URL = "https://services.leadconnectorhq.com";

const tools = [
  {
    name: "list_docs",
    description:
      "List loaded GoHighLevel documentation files and their endpoint/section counts.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: "search_docs",
    description:
      "Search GoHighLevel API docs with keyword matching across endpoints and section content.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Keywords, endpoint name, scope, or concept to find.",
        },
        limit: {
          type: "integer",
          minimum: 1,
          maximum: 20,
          description: "Maximum number of results to return (default: 8).",
        },
        whitelabel_domain: {
          type: "string",
          description:
            "Optional whitelabel API domain or base URL to use when rendering endpoint URLs.",
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "list_endpoints",
    description:
      "List available API endpoints with optional method/path/section filters.",
    inputSchema: {
      type: "object",
      properties: {
        method: {
          type: "string",
          description: "HTTP method filter (GET, POST, PUT, DELETE).",
        },
        path_contains: {
          type: "string",
          description: "Filter endpoint path by substring.",
        },
        section_contains: {
          type: "string",
          description: "Filter by section or operation title.",
        },
        limit: {
          type: "integer",
          minimum: 1,
          maximum: 100,
          description: "Maximum rows to return (default: 25).",
        },
        whitelabel_domain: {
          type: "string",
          description:
            "Optional whitelabel API domain or base URL to use when rendering endpoint URLs.",
        },
      },
      additionalProperties: false,
    },
  },
  {
    name: "get_endpoint_details",
    description:
      "Get details for a specific API endpoint, including scope, token type, and documentation excerpt.",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "Endpoint path, such as /objects/:schemaKey/records/search",
        },
        method: {
          type: "string",
          description: "Optional HTTP method to disambiguate endpoint matches.",
        },
        whitelabel_domain: {
          type: "string",
          description:
            "Optional whitelabel API domain or base URL to use when rendering endpoint URLs.",
        },
      },
      required: ["path"],
      additionalProperties: false,
    },
  },
  {
    name: "get_section",
    description:
      "Retrieve a documentation section by title or partial title.",
    inputSchema: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "Section title, such as 'Search Object Records'.",
        },
        max_chars: {
          type: "integer",
          minimum: 300,
          maximum: 12000,
          description: "Maximum number of section characters to return (default: 4000).",
        },
        whitelabel_domain: {
          type: "string",
          description:
            "Optional whitelabel API domain or base URL to use when rendering endpoint URLs.",
        },
      },
      required: ["title"],
      additionalProperties: false,
    },
  },
  {
    name: "reload_docs",
    description: "Reload markdown files from disk (useful after docs updates).",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
];

export async function startServer({ docsDir = process.env.GHL_DOCS_DIR || DEFAULT_DOCS_DIR } = {}) {
  const docsIndex = new DocsIndex(docsDir);
  await docsIndex.load();

  const server = new Server(
    {
      name: "ghl-api-mcp",
      version: "0.1.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const name = request.params.name;
    const args = request.params.arguments || {};
    const whitelabelDomain = optionalString(args.whitelabel_domain);

    switch (name) {
      case "list_docs":
        return textResponse(formatDocsList(docsIndex.listDocs()));

      case "search_docs": {
        const query = ensureString(args.query, "query");
        const limit = ensureInteger(args.limit, 8);
        const results = docsIndex.search(query, limit);
        return textResponse(formatSearchResults(query, results, whitelabelDomain));
      }

      case "list_endpoints": {
        const method = optionalString(args.method)?.toUpperCase();
        const pathContains = optionalString(args.path_contains);
        const sectionContains = optionalString(args.section_contains);
        const limit = ensureInteger(args.limit, 25);

        const endpoints = docsIndex.listEndpoints({
          method,
          pathContains,
          sectionContains,
          limit,
        });

        return textResponse(formatEndpointList(endpoints, whitelabelDomain));
      }

      case "get_endpoint_details": {
        const endpointPath = ensureString(args.path, "path");
        const method = optionalString(args.method)?.toUpperCase();
        const endpoint = docsIndex.getEndpoint({ method, path: endpointPath });

        if (!endpoint) {
          return textResponse(
            `No endpoint found for path \`${endpointPath}\`${
              method ? ` and method \`${method}\`` : ""
            }.`,
          );
        }

        return textResponse(formatEndpointDetails(endpoint, whitelabelDomain));
      }

      case "get_section": {
        const title = ensureString(args.title, "title");
        const maxChars = ensureInteger(args.max_chars, 4000);
        const section = docsIndex.getSection(title);

        if (!section) {
          return textResponse(`No section matched title \`${title}\`.`);
        }

        const body =
          section.content.length > maxChars
            ? `${section.content.slice(0, maxChars)}\n\n[truncated at ${maxChars} characters]`
            : section.content;
        const renderedBody = rewriteBaseUrls(body, whitelabelDomain);

        return textResponse(
          [
            `# ${section.title}`,
            "",
            `- Document: ${section.docId}`,
            `- Parent: ${section.parentTitle || "(none)"}`,
            `- Lines: ${section.startLine}-${section.endLine}`,
            whitelabelDomain
              ? `- API Base URL: ${normalizeWhitelabelDomain(whitelabelDomain)}`
              : null,
            "",
            renderedBody,
          ].join("\n"),
        );
      }

      case "reload_docs": {
        await docsIndex.load();
        const docs = docsIndex.listDocs();
        return textResponse(
          `Reloaded ${docs.length} documentation file(s) from \`${docsDir}\`.`,
        );
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);

  process.stderr.write(
    `GHL docs MCP server started. docsDir=${docsDir}, docs=${docsIndex.listDocs().length}\n`,
  );

  return { server, docsIndex, docsDir };
}

function textResponse(text) {
  return {
    content: [{ type: "text", text }],
  };
}

function ensureString(value, fieldName) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`'${fieldName}' must be a non-empty string`);
  }
  return value.trim();
}

function optionalString(value) {
  if (value == null) return null;
  if (typeof value !== "string") {
    throw new Error("Expected a string value");
  }
  const trimmed = value.trim();
  return trimmed || null;
}

function ensureInteger(value, fallback) {
  if (value == null) return fallback;
  const parsed = Number.parseInt(String(value), 10);
  if (Number.isNaN(parsed)) {
    throw new Error("Expected an integer value");
  }
  return parsed;
}

function formatDocsList(docs) {
  if (docs.length === 0) {
    return "No markdown docs loaded.";
  }

  const lines = ["Loaded documentation files:", ""];

  docs.forEach((doc, idx) => {
    lines.push(
      `${idx + 1}. ${doc.title} (${doc.id})`,
      `   - File: ${doc.filePath}`,
      `   - Sections: ${doc.sections}`,
      `   - Endpoints: ${doc.endpoints}`,
      "",
    );
  });

  return lines.join("\n").trim();
}

function formatEndpointList(endpoints, whitelabelDomain) {
  if (endpoints.length === 0) {
    return "No endpoints matched the filter.";
  }

  const lines = [`Matched endpoints: ${endpoints.length}`, ""];

  endpoints.forEach((endpoint, idx) => {
    lines.push(
      `${idx + 1}. ${endpoint.method} ${endpoint.path}`,
      whitelabelDomain
        ? `   - URL: ${buildEndpointUrl(endpoint.path, whitelabelDomain)}`
        : null,
      `   - Operation: ${endpoint.operationTitle}`,
      `   - Section: ${endpoint.sectionTitle || "(unknown)"}`,
      `   - Scope: ${endpoint.scope || "(not listed)"}`,
      `   - Token: ${endpoint.tokenType || "(not listed)"}`,
      "",
    );
  });

  return lines.filter(Boolean).join("\n").trim();
}

function formatEndpointDetails(endpoint, whitelabelDomain) {
  return [
    `# ${endpoint.method} ${endpoint.path}`,
    "",
    whitelabelDomain
      ? `- URL: ${buildEndpointUrl(endpoint.path, whitelabelDomain)}`
      : null,
    `- Operation: ${endpoint.operationTitle}`,
    `- Section: ${endpoint.sectionTitle || "(unknown)"}`,
    `- Scope: ${endpoint.scope || "(not listed)"}`,
    `- Token Type: ${endpoint.tokenType || "(not listed)"}`,
    `- Line: ${endpoint.line}`,
    endpoint.note ? `- Note: ${endpoint.note}` : null,
    "",
    "## Excerpt",
    "",
    rewriteBaseUrls(endpoint.content, whitelabelDomain),
  ]
    .filter(Boolean)
    .join("\n");
}

function formatSearchResults(query, results, whitelabelDomain) {
  if (results.length === 0) {
    return `No results found for \`${query}\`.`;
  }

  const lines = [`Search results for \`${query}\` (${results.length}):`, ""];

  results.forEach((result, idx) => {
    if (result.type === "endpoint") {
      const endpoint = result.item;
      lines.push(
        `${idx + 1}. [Endpoint] ${endpoint.method} ${endpoint.path}`,
        whitelabelDomain
          ? `   - URL: ${buildEndpointUrl(endpoint.path, whitelabelDomain)}`
          : null,
        `   - Operation: ${endpoint.operationTitle}`,
        `   - Scope: ${endpoint.scope || "(not listed)"}`,
        `   - Score: ${result.score}`,
        `   - Excerpt: ${rewriteBaseUrls(result.excerpt, whitelabelDomain)}`,
        "",
      );
      return;
    }

    const section = result.item;
    lines.push(
      `${idx + 1}. [Section] ${section.title}`,
      `   - Parent: ${section.parentTitle || "(none)"}`,
      `   - Score: ${result.score}`,
      `   - Excerpt: ${rewriteBaseUrls(result.excerpt, whitelabelDomain)}`,
      "",
    );
  });

  return lines.filter(Boolean).join("\n").trim();
}

export function normalizeWhitelabelDomain(value) {
  const trimmed = ensureString(value, "whitelabel_domain");
  const candidate = /^[a-z]+:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  let url;
  try {
    url = new URL(candidate);
  } catch {
    throw new Error("'whitelabel_domain' must be a valid domain or URL");
  }

  return url.origin;
}

export function buildEndpointUrl(endpointPath, whitelabelDomain) {
  const baseUrl = whitelabelDomain
    ? normalizeWhitelabelDomain(whitelabelDomain)
    : DEFAULT_API_BASE_URL;
  const normalizedPath = endpointPath.startsWith("/") ? endpointPath : `/${endpointPath}`;
  return `${baseUrl}${normalizedPath}`;
}

export function rewriteBaseUrls(text, whitelabelDomain) {
  if (!whitelabelDomain) return text;

  const normalizedBaseUrl = normalizeWhitelabelDomain(whitelabelDomain);
  return text.replaceAll(DEFAULT_API_BASE_URL, normalizedBaseUrl);
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  await startServer();
}
