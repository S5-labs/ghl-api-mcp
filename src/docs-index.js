import fs from "node:fs/promises";
import path from "node:path";

const ENDPOINT_RE = /\*\*Endpoint:\*\*\s*`([A-Z]+)\s+([^`]+)`(?:\s*\(([^)]+)\))?/;
const SCOPE_RE = /\*\*Scope:\*\*\s*`?([^`]+?)`?\s*$/;
const TOKEN_RE = /\*\*Token Type:\*\*\s*([^\[]+?)(?:\s*\[\^\d+\])?\s*$/;
const RAW_ENDPOINT_RE = /^(GET|POST|PUT|PATCH|DELETE)\s+(https?:\/\/\S+|\/\S+)\s*$/;
const RAW_SCOPE_RE = /^Scope:\s*(.+?)\s*$/i;
const RAW_TOKEN_RE = /^Token(?:\s+Type)?:\s*(.+?)\s*$/i;
const TABLE_ROW_RE = /^\|\s*\*\*(Method|Endpoint|Scope|Token|Token Type)\*\*\s*\|\s*(.+?)\s*\|\s*$/i;
const HEADING_RE = /^(#{1,6})\s+(.+)$/;

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function normalizeEndpointPath(rawPath) {
  const trimmed = rawPath.trim();

  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const parsed = new URL(trimmed);
      return decodeURIComponent(`${parsed.pathname}${parsed.search}`);
    } catch {
      return trimmed;
    }
  }

  return trimmed;
}

function canonicalizeEndpointPath(rawPath) {
  return normalizeEndpointPath(rawPath)
    .replace(/\$\{[^}]+\}/g, "{param}")
    .replace(/\{[^}]+\}/g, "{param}")
    .replace(/:[A-Za-z0-9_]+/g, "{param}")
    .replace(/\/+/g, "/")
    .replace(/\/$/, "") || "/";
}

function cleanTableValue(value) {
  return value
    .trim()
    .replace(/^`/, "")
    .replace(/`$/, "")
    .replace(/<\/?br\s*\/?>/gi, " ")
    .trim();
}

function excerptAround(text, query, maxLength = 600) {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return "";
  if (clean.length <= maxLength) return clean;

  const lower = clean.toLowerCase();
  const needle = query.toLowerCase();
  const idx = lower.indexOf(needle);
  if (idx === -1) {
    return `${clean.slice(0, maxLength - 1)}…`;
  }

  const half = Math.floor(maxLength / 2);
  const start = Math.max(0, idx - half);
  const end = Math.min(clean.length, start + maxLength);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < clean.length ? "…" : "";
  return `${prefix}${clean.slice(start, end)}${suffix}`;
}

function parseMarkdownDocument(filePath, content) {
  const lines = content.split(/\r?\n/);
  const docId = path.basename(filePath, path.extname(filePath));

  const headings = [];
  let documentTitle = docId;

  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(HEADING_RE);
    if (!match) continue;

    const [, hashes, title] = match;
    const level = hashes.length;
    const heading = {
      level,
      title: title.trim(),
      line: i,
      slug: slugify(title),
    };

    headings.push(heading);
    if (level === 1 && documentTitle === docId) {
      documentTitle = heading.title;
    }
  }

  const sections = headings.map((heading, idx) => {
    const next = headings[idx + 1];
    const startLine = heading.line;
    const endLine = next ? next.line - 1 : lines.length - 1;
    const contentSlice = lines.slice(startLine, endLine + 1).join("\n").trim();

    const parent = headings
      .slice(0, idx)
      .reverse()
      .find((candidate) => candidate.level < heading.level);

    return {
      id: `${docId}:${heading.slug}:${startLine + 1}`,
      docId,
      title: heading.title,
      level: heading.level,
      slug: heading.slug,
      startLine: startLine + 1,
      endLine: endLine + 1,
      parentTitle: parent ? parent.title : null,
      content: contentSlice,
    };
  });

  const endpoints = [];
  const seenEndpoints = new Set();

  function resolveHeadingContext(lineIndex) {
    const sectionHeading = [...headings]
      .reverse()
      .find((heading) => heading.line < lineIndex && heading.level === 2);
    const operationHeading = [...headings]
      .reverse()
      .find(
        (heading) =>
          heading.line < lineIndex &&
          heading.level >= 3 &&
          (!sectionHeading || heading.line > sectionHeading.line),
      );

    return { operationHeading, sectionHeading };
  }

  function addEndpoint({ method, rawPath, note = null, scope = null, tokenType = null, lineIndex }) {
    const pathValue = normalizeEndpointPath(rawPath);
    const canonicalPath = canonicalizeEndpointPath(pathValue);
    const dedupeKey = `${method}:${canonicalPath}:${lineIndex}`;
    if (seenEndpoints.has(dedupeKey)) return;
    seenEndpoints.add(dedupeKey);

    const { operationHeading, sectionHeading } = resolveHeadingContext(lineIndex);
    const blockStart = operationHeading ? operationHeading.line : Math.max(0, lineIndex - 4);
    const nextHeading = headings.find((heading) => heading.line > lineIndex);
    const blockEnd = nextHeading ? nextHeading.line - 1 : lines.length - 1;
    const blockContent = lines.slice(blockStart, blockEnd + 1).join("\n").trim();

    endpoints.push({
      id: `${method}:${canonicalPath}:${lineIndex + 1}`,
      docId,
      method,
      path: pathValue,
      canonicalPath,
      note: note?.trim() || null,
      scope,
      tokenType,
      sectionTitle: sectionHeading?.title || null,
      operationTitle: operationHeading?.title || sectionHeading?.title || `Endpoint at line ${lineIndex + 1}`,
      line: lineIndex + 1,
      content: blockContent,
    });
  }

  for (let i = 0; i < lines.length; i += 1) {
    const endpointMatch = lines[i].match(ENDPOINT_RE);
    if (endpointMatch) {
      const [, method, rawPath, note] = endpointMatch;
      let scope = null;
      let tokenType = null;

      for (let j = i + 1; j < Math.min(i + 10, lines.length); j += 1) {
        if (!scope) {
          const scopeMatch = lines[j].match(SCOPE_RE);
          if (scopeMatch) scope = scopeMatch[1].trim();
        }

        if (!tokenType) {
          const tokenMatch = lines[j].match(TOKEN_RE);
          if (tokenMatch) tokenType = tokenMatch[1].trim();
        }

        if (scope && tokenType) break;
      }

      addEndpoint({ method, rawPath, note, scope, tokenType, lineIndex: i });
      continue;
    }

    const tableRowMatch = lines[i].match(TABLE_ROW_RE);
    if (tableRowMatch && tableRowMatch[1].toLowerCase() === "endpoint") {
      let method = null;
      let rawPath = cleanTableValue(tableRowMatch[2]);
      let scope = null;
      let tokenType = null;

      for (let j = Math.max(0, i - 4); j <= Math.min(lines.length - 1, i + 4); j += 1) {
        const match = lines[j].match(TABLE_ROW_RE);
        if (!match) continue;
        const key = match[1].toLowerCase();
        const value = cleanTableValue(match[2]);

        if (key === "method") method = value.toUpperCase();
        if (key === "scope") scope = value;
        if (key === "token" || key === "token type") tokenType = value;
      }

      if (method && rawPath) {
        addEndpoint({ method, rawPath, scope, tokenType, lineIndex: i });
        continue;
      }
    }

    const rawEndpointMatch = lines[i].trim().match(RAW_ENDPOINT_RE);
    if (rawEndpointMatch) {
      const [, method, rawPath] = rawEndpointMatch;
      let scope = null;
      let tokenType = null;

      for (let j = i + 1; j < Math.min(i + 6, lines.length); j += 1) {
        if (!scope) {
          const scopeMatch = lines[j].trim().match(RAW_SCOPE_RE);
          if (scopeMatch) scope = scopeMatch[1].trim();
        }

        if (!tokenType) {
          const tokenMatch = lines[j].trim().match(RAW_TOKEN_RE);
          if (tokenMatch) tokenType = tokenMatch[1].trim();
        }
      }

      addEndpoint({ method, rawPath, scope, tokenType, lineIndex: i });
    }
  }

  return {
    id: docId,
    filePath,
    title: documentTitle,
    sections,
    endpoints,
    rawContent: content,
  };
}

function scoreText(text, queryTerms, fullQuery) {
  const normalized = normalize(text);
  if (!normalized) return 0;

  let score = 0;
  if (normalized.includes(fullQuery)) score += 8;

  for (const term of queryTerms) {
    if (term.length < 2) continue;
    const regex = new RegExp(`\\b${term}\\b`, "g");
    const matches = normalized.match(regex);
    if (!matches) continue;
    score += Math.min(matches.length, 5);
  }

  return score;
}

export class DocsIndex {
  constructor(docsDir) {
    this.docsDir = docsDir;
    this.docs = [];
    this.sections = [];
    this.endpoints = [];
  }

  async load() {
    const files = await this.#collectMarkdownFiles(this.docsDir);
    const docs = [];

    for (const filePath of files) {
      const content = await fs.readFile(filePath, "utf8");
      docs.push(parseMarkdownDocument(filePath, content));
    }

    this.docs = docs;
    this.sections = docs.flatMap((doc) => doc.sections);
    this.endpoints = docs.flatMap((doc) => doc.endpoints);
  }

  listDocs() {
    return this.docs.map((doc) => ({
      id: doc.id,
      title: doc.title,
      filePath: doc.filePath,
      sections: doc.sections.length,
      endpoints: doc.endpoints.length,
    }));
  }

  listEndpoints({ method, pathContains, sectionContains, limit = 25 } = {}) {
    const methodNorm = method ? method.toUpperCase() : null;
    const pathNorm = pathContains ? pathContains.toLowerCase() : null;
    const sectionNorm = sectionContains ? sectionContains.toLowerCase() : null;

    let results = this.endpoints.filter((endpoint) => {
      if (methodNorm && endpoint.method !== methodNorm) return false;
      if (pathNorm && !endpoint.path.toLowerCase().includes(pathNorm)) return false;
      if (
        sectionNorm &&
        !(endpoint.sectionTitle || "").toLowerCase().includes(sectionNorm) &&
        !(endpoint.operationTitle || "").toLowerCase().includes(sectionNorm)
      ) {
        return false;
      }
      return true;
    });

    results = results
      .sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method))
      .slice(0, Math.max(1, Math.min(limit, 100)));

    return results;
  }

  getEndpoint({ method, path: endpointPath }) {
    const methodNorm = method ? method.toUpperCase() : null;
    const pathNorm = endpointPath.trim().toLowerCase();
    const canonicalPath = canonicalizeEndpointPath(endpointPath).toLowerCase();

    let match = this.endpoints.find((endpoint) => {
      if (methodNorm && endpoint.method !== methodNorm) return false;
      return endpoint.path.toLowerCase() === pathNorm || endpoint.canonicalPath.toLowerCase() === canonicalPath;
    });

    if (match) return match;

    match = this.endpoints.find((endpoint) => {
      if (methodNorm && endpoint.method !== methodNorm) return false;
      return (
        endpoint.path.toLowerCase().includes(pathNorm) ||
        endpoint.canonicalPath.toLowerCase().includes(canonicalPath)
      );
    });

    return match || null;
  }

  getSection(query) {
    const queryNorm = query.toLowerCase();

    const byTitle = this.sections.find((section) =>
      section.title.toLowerCase() === queryNorm,
    );
    if (byTitle) return byTitle;

    const byContains = this.sections.find((section) =>
      section.title.toLowerCase().includes(queryNorm),
    );

    return byContains || null;
  }

  search(query, limit = 8) {
    const fullQuery = normalize(query);
    if (!fullQuery) return [];

    const queryTerms = fullQuery.split(/\s+/).filter(Boolean);

    const endpointResults = this.endpoints
      .map((endpoint) => {
        const searchable = [
          endpoint.method,
          endpoint.path,
          endpoint.operationTitle,
          endpoint.sectionTitle,
          endpoint.scope,
          endpoint.tokenType,
          endpoint.content,
        ]
          .filter(Boolean)
          .join("\n");

        const score = scoreText(searchable, queryTerms, fullQuery) + 3;
        if (score === 0) return null;

        return {
          type: "endpoint",
          score,
          item: endpoint,
          excerpt: excerptAround(endpoint.content, query, 650),
        };
      })
      .filter(Boolean);

    const sectionResults = this.sections
      .filter((section) => section.level >= 2)
      .map((section) => {
        const searchable = [section.title, section.parentTitle, section.content]
          .filter(Boolean)
          .join("\n");
        const score = scoreText(searchable, queryTerms, fullQuery);
        if (score === 0) return null;

        return {
          type: "section",
          score,
          item: section,
          excerpt: excerptAround(section.content, query, 500),
        };
      })
      .filter(Boolean);

    return [...endpointResults, ...sectionResults]
      .sort((a, b) => b.score - a.score)
      .slice(0, Math.max(1, Math.min(limit, 20)));
  }

  async #collectMarkdownFiles(root) {
    const entries = await fs.readdir(root, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
      const fullPath = path.join(root, entry.name);
      if (entry.isDirectory()) {
        const nested = await this.#collectMarkdownFiles(fullPath);
        files.push(...nested);
        continue;
      }

      if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
        files.push(fullPath);
      }
    }

    return files.sort();
  }
}
