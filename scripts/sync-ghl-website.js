#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { load } from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.resolve(path.dirname(__filename), "..");
const DEFAULT_SITEMAP_URL = "https://marketplace.gohighlevel.com/docs/sitemap.xml";
const DEFAULT_OUTPUT_DIR = path.join(ROOT_DIR, "docs", "website");
const DEFAULT_CONCURRENCY = 4;
const MANIFEST_NAME = ".ghl-website-manifest.json";

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith("--")) continue;
    const key = item.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      index += 1;
    }
  }
  return args;
}

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function normalizeInlineText(value) {
  return value.replace(/\u200b/g, "").replace(/\s+/g, " ").trim();
}

function escapeTableCell(value) {
  return normalizeInlineText(value).replace(/\|/g, "\\|").replace(/\n/g, "<br>") || "—";
}

function absoluteUrl(value, pageUrl) {
  if (!value) return "";
  try {
    return new URL(value, pageUrl).href;
  } catch {
    return value;
  }
}

function decodeCloudflareEmail(value) {
  if (!value || value.length < 4 || value.length % 2 !== 0) return null;
  const key = Number.parseInt(value.slice(0, 2), 16);
  if (!Number.isFinite(key)) return null;
  let decoded = "";
  for (let index = 2; index < value.length; index += 2) {
    decoded += String.fromCharCode(Number.parseInt(value.slice(index, index + 2), 16) ^ key);
  }
  return decoded;
}

function renderInline($, node, pageUrl) {
  if (!node) return "";
  if (node.type === "text") return node.data || "";
  if (node.type !== "tag") return "";

  const element = $(node);
  const tag = node.tagName?.toLowerCase();
  const content = element
    .contents()
    .toArray()
    .map((child) => renderInline($, child, pageUrl))
    .join("");

  if (tag === "br") return "<br>";
  if (tag === "code") return `\`${normalizeInlineText(element.text())}\``;
  if (tag === "strong" || tag === "b") return `**${normalizeInlineText(content)}**`;
  if (tag === "em" || tag === "i") return `*${normalizeInlineText(content)}*`;
  if (tag === "a") {
    const text = normalizeInlineText(content) || absoluteUrl(element.attr("href"), pageUrl);
    return `[${text}](${absoluteUrl(element.attr("href"), pageUrl)})`;
  }
  if (tag === "img") {
    return `![${normalizeInlineText(element.attr("alt") || "")}](${absoluteUrl(element.attr("src"), pageUrl)})`;
  }
  return content;
}

function renderTable($, element, pageUrl) {
  const rows = element
    .find("tr")
    .toArray()
    .map((row) =>
      $(row)
        .children("th,td")
        .toArray()
        .map((cell) => escapeTableCell(renderInline($, cell, pageUrl))),
    )
    .filter((row) => row.length > 0);
  if (rows.length === 0) return "";
  const width = Math.max(...rows.map((row) => row.length));
  for (const row of rows) while (row.length < width) row.push("—");
  return [
    `| ${rows[0].join(" | ")} |`,
    `| ${rows[0].map(() => "---").join(" | ")} |`,
    ...rows.slice(1).map((row) => `| ${row.join(" | ")} |`),
  ].join("\n");
}

function renderList($, element, pageUrl, depth = 0) {
  const ordered = element[0]?.tagName?.toLowerCase() === "ol";
  const lines = [];
  element.children("li").each((_index, item) => {
    const clone = $(item).clone();
    clone.children("ul,ol").remove();
    const text = normalizeInlineText(
      clone
        .contents()
        .toArray()
        .map((node) => renderInline($, node, pageUrl))
        .join(""),
    );
    if (text) lines.push(`${"  ".repeat(depth)}${ordered ? "1." : "-"} ${text}`);
    $(item)
      .children("ul,ol")
      .each((_nestedIndex, nested) => lines.push(renderList($, $(nested), pageUrl, depth + 1)));
  });
  return lines.filter(Boolean).join("\n");
}

function renderBlock($, node, pageUrl) {
  if (!node || node.type !== "tag") return "";
  const element = $(node);
  const tag = node.tagName?.toLowerCase();
  const text = () => normalizeInlineText(renderInline($, node, pageUrl));

  if (/^h[1-6]$/.test(tag)) return `${"#".repeat(Number(tag.slice(1)))} ${text()}`;
  if (tag === "p") return text();
  if (tag === "hr") return "---";
  if (tag === "table") return renderTable($, element, pageUrl);
  if (tag === "ul" || tag === "ol") return renderList($, element, pageUrl);
  if (tag === "blockquote") {
    return element
      .text()
      .trim()
      .split(/\r?\n/)
      .map((line) => `> ${line.trim()}`)
      .join("\n");
  }
  if (tag === "pre") {
    if (element.hasClass("openapi__method-endpoint")) {
      const method = normalizeInlineText(element.find(".badge").first().text());
      const endpointPath = normalizeInlineText(
        element.find(".openapi__method-endpoint-path").first().text(),
      );
      return method && endpointPath ? `**Endpoint:** \`${method} ${endpointPath}\`` : "";
    }
    const languageClass = `${element.attr("class") || ""} ${element.parent().attr("class") || ""}`;
    const language = languageClass.match(/language-([a-z0-9_-]+)/i)?.[1] || "";
    const tokenLines = element.find(".token-line").toArray();
    const code = tokenLines.length > 0
      ? tokenLines.map((line) => $(line).text().replace(/\r/g, "")).join("\n")
      : element.text().replace(/\r/g, "");
    return `\`\`\`${language}\n${code.trim()}\n\`\`\``;
  }
  if (tag === "img") return renderInline($, node, pageUrl);

  const blocks = element
    .children()
    .toArray()
    .map((child) => renderBlock($, child, pageUrl))
    .filter(Boolean);
  if (blocks.length > 0) return blocks.join("\n\n");
  return text();
}

function extractWebsiteMarkdown(html, pageUrl) {
  const $ = load(html);
  const root = $(".theme-doc-markdown").first();
  if (root.length === 0) {
    throw new Error(`No rendered documentation article found at ${pageUrl}`);
  }

  root.find(".__cf_email__[data-cfemail]").each((_index, email) => {
    const decoded = decodeCloudflareEmail($(email).attr("data-cfemail"));
    if (!decoded) return;
    const anchor = $(email).closest("a");
    if (anchor.length > 0) {
      anchor.attr("href", `mailto:${decoded}`).text(decoded);
    } else {
      $(email).replaceWith(decoded);
    }
  });
  root.find("script,style,svg,button,.hash-link,.openapi-skeleton").remove();
  let markdown = root
    .children()
    .toArray()
    .map((node) => renderBlock($, node, pageUrl))
    .filter(Boolean)
    .join("\n\n")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (!/^#\s+/m.test(markdown)) {
    const fallbackTitle = normalizeInlineText($("article h1").first().text() || $("title").text());
    if (!fallbackTitle) throw new Error(`No documentation title found at ${pageUrl}`);
    markdown = `# ${fallbackTitle}\n\n${markdown}`;
  }

  const notice = `> Live website snapshot from [HighLevel API Documentation](${pageUrl}). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.`;
  const version = normalizeInlineText($(".theme-doc-version-badge").first().text())
    .replace(/^Version:\s*/i, "");
  const metadata = version ? `\n\n**Website Version:** ${version}` : "";
  return `${notice}${metadata}\n\n${markdown}\n`;
}

function parseSitemap(xml, sitemapUrl = DEFAULT_SITEMAP_URL) {
  const $ = load(xml, { xmlMode: true });
  if ($.root().children().length !== 1 || $.root().children().first()[0]?.tagName !== "urlset") {
    throw new Error(`Expected a documentation URL sitemap at ${sitemapUrl}`);
  }
  const sitemapOrigin = new URL(sitemapUrl).origin;
  const pages = [];
  const seen = new Set();

  $("url").each((_index, entry) => {
    const loc = $(entry).find("loc").first().text().trim();
    if (!loc) return;
    const url = new URL(loc, sitemapUrl);
    if (url.origin !== sitemapOrigin || !url.pathname.startsWith("/docs/")) return;
    if (/^\/docs\/\d{4}-\d{2}-\d{2}\//.test(url.pathname)) return;
    if (/^\/docs\/(?:category|tags)(?:\/|$)/i.test(url.pathname)) return;
    if (/^\/docs\/(?:markdown-page|blog)\/?$/.test(url.pathname)) return;
    url.hash = "";
    url.search = "";
    url.pathname = url.pathname.replace(/\/+$/, "") || "/docs";
    if (url.pathname === "/docs") return;
    const canonicalUrl = url.href;
    if (seen.has(canonicalUrl)) return;
    seen.add(canonicalUrl);
    pages.push({
      url: canonicalUrl,
      lastmod: $(entry).find("lastmod").first().text().trim() || null,
    });
  });

  if (pages.length === 0) {
    throw new Error(`No canonical documentation pages found in sitemap at ${sitemapUrl}`);
  }
  return pages.sort((left, right) => left.url.localeCompare(right.url));
}

function outputNameForUrl(pageUrl) {
  const parsed = new URL(pageUrl);
  const route = decodeURIComponent(parsed.pathname.replace(/^\/docs\/?/, "")) || "index";
  const slug = route
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 140);
  return `${slug || "document"}-${sha256(pageUrl).slice(0, 10)}.md`;
}

async function fetchWithRetry(url, { attempts = 3 } = {}) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": "ghl-api-mcp-docs-sync/1.0" },
        signal: AbortSignal.timeout(120_000),
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await sleep(500 * 2 ** (attempt - 1));
    }
  }
  throw new Error(`Failed to fetch ${url}: ${lastError?.message || lastError}`);
}

async function readManifest(outputDir) {
  try {
    return JSON.parse(await fs.readFile(path.join(outputDir, MANIFEST_NAME), "utf8"));
  } catch {
    return null;
  }
}

async function collectFiles(root) {
  try {
    const entries = await fs.readdir(root, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
      const fullPath = path.join(root, entry.name);
      if (entry.isDirectory()) files.push(...(await collectFiles(fullPath)));
      if (entry.isFile()) files.push(fullPath);
    }
    return files.sort();
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function directorySnapshot(root) {
  const result = {};
  for (const file of await collectFiles(root)) {
    result[path.relative(root, file).split(path.sep).join("/")] = sha256(await fs.readFile(file));
  }
  return result;
}

async function syncWebsite({
  pages,
  sitemapUrl = DEFAULT_SITEMAP_URL,
  outputDir = DEFAULT_OUTPUT_DIR,
  check = false,
  concurrency = DEFAULT_CONCURRENCY,
  fetchPage = fetchWithRetry,
  forceRefresh = false,
  onProgress = null,
} = {}) {
  await fs.mkdir(path.dirname(outputDir), { recursive: true });
  const stagingDir = await fs.mkdtemp(path.join(path.dirname(outputDir), ".ghl-website-sync-"));
  const previousManifest = await readManifest(outputDir);
  const previousPages = new Map((previousManifest?.pages || []).map((page) => [page.url, page]));
  const manifestPages = new Array(pages.length);
  let fetched = 0;
  let reused = 0;
  let cursor = 0;

  async function processPage(page, index) {
    const output = outputNameForUrl(page.url);
    const previous = previousPages.get(page.url);
    let content;
    if (!forceRefresh && page.lastmod && previous?.lastmod === page.lastmod && previous.output === output) {
      try {
        content = await fs.readFile(path.join(outputDir, output), "utf8");
        reused += 1;
      } catch {
        // Fetch a missing cache entry below.
      }
    }
    if (!content) {
      content = extractWebsiteMarkdown(await fetchPage(page.url), page.url);
      fetched += 1;
    }
    await fs.writeFile(path.join(stagingDir, output), content, "utf8");
    manifestPages[index] = {
      url: page.url,
      lastmod: page.lastmod,
      output,
      sha256: sha256(content),
    };
    onProgress?.({ completed: fetched + reused, total: pages.length, fetched, reused });
  }

  try {
    const workers = Array.from({ length: Math.max(1, Math.min(concurrency, pages.length || 1)) }, async () => {
      while (cursor < pages.length) {
        const index = cursor;
        cursor += 1;
        await processPage(pages[index], index);
      }
    });
    const workerResults = await Promise.allSettled(workers);
    const failure = workerResults.find((result) => result.status === "rejected");
    if (failure) throw failure.reason;

    const manifest = {
      schemaVersion: 1,
      sitemap: sitemapUrl,
      pageCount: manifestPages.length,
      pages: manifestPages,
    };
    await fs.writeFile(
      path.join(stagingDir, MANIFEST_NAME),
      `${JSON.stringify(manifest, null, 2)}\n`,
      "utf8",
    );
    const stagingSnapshot = await directorySnapshot(stagingDir);
    const outputSnapshot = await directorySnapshot(outputDir);
    const changedFiles = [...new Set([
      ...Object.keys(stagingSnapshot),
      ...Object.keys(outputSnapshot),
    ])]
      .filter((file) => stagingSnapshot[file] !== outputSnapshot[file])
      .sort();
    const changed = changedFiles.length > 0;
    if (!check && changed) {
      await fs.rm(outputDir, { recursive: true, force: true });
      await fs.rename(stagingDir, outputDir);
    }
    return {
      changed,
      changedFileCount: changedFiles.length,
      changedFiles: changedFiles.slice(0, 50),
      pageCount: pages.length,
      fetched,
      reused,
      outputDir,
    };
  } finally {
    await fs.rm(stagingDir, { recursive: true, force: true });
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const sitemapUrl = args.sitemap || process.env.GHL_DOCS_SITEMAP || DEFAULT_SITEMAP_URL;
  const outputDir = path.resolve(args.output || DEFAULT_OUTPUT_DIR);
  const concurrency = Number(
    args.concurrency || process.env.GHL_DOCS_WEBSITE_CONCURRENCY || DEFAULT_CONCURRENCY,
  );
  let pages;
  if (args.url) {
    pages = [{ url: new URL(args.url).href.replace(/\/$/, ""), lastmod: null }];
  } else {
    pages = parseSitemap(await fetchWithRetry(sitemapUrl), sitemapUrl);
  }
  if (args.limit) pages = pages.slice(0, Number(args.limit));
  let lastReported = 0;
  const result = await syncWebsite({
    pages,
    sitemapUrl,
    outputDir,
    check: Boolean(args.check),
    concurrency,
    forceRefresh: Boolean(args.refresh) || process.env.GHL_DOCS_WEBSITE_REFRESH === "1",
    onProgress: ({ completed, total, fetched, reused }) => {
      if ((completed === total && lastReported !== total) || completed - lastReported >= 50) {
        process.stderr.write(`Website sync: ${completed}/${total} (${fetched} fetched, ${reused} cached)\n`);
        lastReported = completed;
      }
    },
  });
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  if (args.check && result.changed) process.exitCode = 1;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  await main();
}

export { extractWebsiteMarkdown, outputNameForUrl, parseSitemap, syncWebsite };
