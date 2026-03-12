import fs from "node:fs/promises";
import path from "node:path";

const ENDPOINT_RE = /\*\*Endpoint:\*\*\s*`([A-Z]+)\s+([^`]+)`(?:\s*\(([^)]+)\))?/;
const SCOPE_RE = /\*\*Scope:\*\*\s*`?([^`]+?)`?\s*$/;
const TOKEN_RE = /\*\*Token Type:\*\*\s*([^\[]+?)(?:\s*\[\^\d+\])?\s*$/;
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

  for (let i = 0; i < lines.length; i += 1) {
    const endpointMatch = lines[i].match(ENDPOINT_RE);
    if (!endpointMatch) continue;

    const [, method, rawPath, note] = endpointMatch;
    const pathValue = rawPath.trim();

    const operationHeading = [...headings]
      .reverse()
      .find((heading) => heading.line < i && heading.level >= 3);
    const sectionHeading = [...headings]
      .reverse()
      .find((heading) => heading.line < i && heading.level === 2);

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

    const blockStart = operationHeading ? operationHeading.line : Math.max(0, i - 4);
    const nextHeading = headings.find((heading) => heading.line > i);
    const blockEnd = nextHeading ? nextHeading.line - 1 : lines.length - 1;
    const blockContent = lines.slice(blockStart, blockEnd + 1).join("\n").trim();

    const endpointId = `${method}:${pathValue}:${i + 1}`;

    endpoints.push({
      id: endpointId,
      docId,
      method,
      path: pathValue,
      note: note?.trim() || null,
      scope,
      tokenType,
      sectionTitle: sectionHeading?.title || null,
      operationTitle: operationHeading?.title || sectionHeading?.title || `Endpoint at line ${i + 1}`,
      line: i + 1,
      content: blockContent,
    });
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

    let match = this.endpoints.find((endpoint) => {
      if (methodNorm && endpoint.method !== methodNorm) return false;
      return endpoint.path.toLowerCase() === pathNorm;
    });

    if (match) return match;

    match = this.endpoints.find((endpoint) => {
      if (methodNorm && endpoint.method !== methodNorm) return false;
      return endpoint.path.toLowerCase().includes(pathNorm);
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
