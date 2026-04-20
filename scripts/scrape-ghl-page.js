#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import puppeteer from "puppeteer-core";

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.resolve(path.dirname(__filename), "..");
const DEFAULT_OUTPUT_DIR = path.join(ROOT_DIR, "docs", "generated");
const HTTP_METHOD_PATTERN = /^(GET|POST|PUT|PATCH|DELETE)\b/i;

const BROWSER_CANDIDATES = {
  zen: {
    executablePath: "/Applications/Zen.app/Contents/MacOS/zen",
    product: "firefox",
    args: ["--no-remote"],
  },
  chrome: {
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  },
  canary: {
    executablePath:
      "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
  },
};

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const current = argv[i];
    if (!current.startsWith("--")) continue;

    const key = current.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    i += 1;
  }

  return args;
}

function normalizePathname(filePath) {
  return decodeURIComponent(filePath);
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function resolveBrowser(args) {
  const requested = args.browser || process.env.SCRAPER_BROWSER || "auto";
  const explicitExecutable =
    args.executablePath ||
    process.env.ZEN_BROWSER_PATH ||
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    null;

  if (explicitExecutable) {
    return {
      name: requested === "auto" ? "custom" : requested,
      launchOptions: {
        executablePath: explicitExecutable,
        headless: args.headless !== "false",
      },
    };
  }

  const order =
    requested === "auto" ? ["chrome", "canary", "zen"] : [requested, "chrome", "canary", "zen"];

  for (const name of order) {
    const candidate = BROWSER_CANDIDATES[name];
    if (!candidate) continue;
    if (!(await fileExists(candidate.executablePath))) continue;

    return {
      name,
      launchOptions: {
        executablePath: candidate.executablePath,
        product: candidate.product,
        args: candidate.args,
        headless: args.headless !== "false",
      },
    };
  }

  throw new Error(
    "No supported browser executable found. Set --executablePath or ZEN_BROWSER_PATH.",
  );
}

function ensureAbsoluteOutput(outputPath) {
  if (path.isAbsolute(outputPath)) return outputPath;
  return path.join(ROOT_DIR, outputPath);
}

function sanitizeFilename(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

function buildOutputPath(url, requestedOutput) {
  if (requestedOutput) return ensureAbsoluteOutput(requestedOutput);

  const parsed = new URL(url);
  const filename = sanitizeFilename(parsed.pathname.split("/").filter(Boolean).slice(-1)[0] || "doc");
  return path.join(DEFAULT_OUTPUT_DIR, `${filename}.md`);
}

function extractLinesBetween(text, startMarker, endMarkers) {
  const startIndex = text.indexOf(startMarker);
  if (startIndex === -1) return [];

  const afterStart = text.slice(startIndex + startMarker.length);
  let endIndex = afterStart.length;

  for (const endMarker of endMarkers) {
    const candidateIndex = afterStart.indexOf(endMarker);
    if (candidateIndex !== -1 && candidateIndex < endIndex) {
      endIndex = candidateIndex;
    }
  }

  return afterStart
    .slice(0, endIndex)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripUiNoise(text) {
  return text
    .replace(/\r/g, "")
    .replace(/^Copy\s*$/gm, "")
    .replace(/^Get ClickUp Free\s*$/gm, "")
    .replace(/^Open in ClickUp\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function cleanGeneratedMarkdown(markdown, title) {
  return stripUiNoise(markdown)
    .split("\n")
    .filter((line) => {
      const trimmed = line.trim();
      if (!trimmed) return true;
      if (trimmed === title) return false;
      return true;
    })
    .join("\n")
    .trim();
}

function cleanIntroText(text, title = "") {
  const lines = stripUiNoise(text)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const firstMeaningfulIndex = lines.findIndex(
    (line) =>
      line.startsWith("Please note:") ||
      /^The\s.+\sAPI\b/.test(line) ||
      line.includes(" enables users to ") ||
      line.includes(" allows users to "),
  );

  const relevantLines = firstMeaningfulIndex === -1 ? lines : lines.slice(firstMeaningfulIndex);
  const cleaned = [];

  for (const line of relevantLines) {
    if (!line) continue;
    if (title && line === title) continue;
    if (line === "Endpoint:") break;
    if (/^(Scope\(s\)|Auth Method\(s\)|Token Type\(s\)|Request)$/i.test(line)) break;
    if (HTTP_METHOD_PATTERN.test(line)) continue;
    if (/^https?:\/\//i.test(line)) continue;
    if (HTTP_METHOD_PATTERN.test(line) && line.includes("/")) break;
    if (/^(Request Body|Filters|Sort|Response Body)$/i.test(line)) break;
    if (line === "Requirements") continue;
    if (line.includes("Documentation Link - ")) {
      cleaned.push(line.split("Documentation Link - ")[0].trim());
      continue;
    }
    if (line.includes("GoHighLevel Marketplace Documentation")) continue;
    cleaned.push(line);
  }

  return cleaned.join("\n\n").trim();
}

function splitTopLevelSections(markdown) {
  const lines = markdown.split("\n");
  const intro = [];
  const sections = [];
  let current = null;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current) {
        current.content = current.content.join("\n").trim();
        sections.push(current);
      }

      current = {
        title: line.replace(/^##\s+/, "").trim(),
        content: [],
      };
      continue;
    }

    if (current) {
      current.content.push(line);
    } else {
      intro.push(line);
    }
  }

  if (current) {
    current.content = current.content.join("\n").trim();
    sections.push(current);
  }

  return {
    intro: intro.join("\n").trim(),
    sections,
  };
}

function cleanSectionTitle(title) {
  return title.replace(/^[^A-Za-z0-9]+/, "").trim();
}

function normalizeCodeBlock(code) {
  return stripUiNoise(code)
    .replace(/\t/g, "  ")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeCurlBlock(code) {
  return stripUiNoise(code)
    .split("\n")
    .map((line) => line.trimEnd())
    .filter(Boolean)
    .join("\n")
    .trim();
}

function extractFirstCurlBlock(markdown) {
  const matches = markdown.matchAll(/```[a-z]*\n([\s\S]*?)```/gi);
  for (const match of matches) {
    if (match[1].includes("curl ")) {
      return normalizeCurlBlock(match[1]);
    }
  }
  return null;
}

function parseMarkdownRow(line) {
  const placeholder = "__ESCAPED_PIPE__";
  const safeLine = line.replace(/\\\|/g, placeholder);
  return safeLine
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.replaceAll(placeholder, "|").trim());
}

function formatMarkdownRow(cells) {
  return `| ${cells.join(" | ")} |`;
}

function normalizeTableRows(rows) {
  if (rows.length < 2) return rows;

  const width = Math.max(...rows.map((row) => row.length));
  const [header, separator, ...body] = rows;
  const normalized = [header, separator];
  let lastTopLevel = null;

  for (const rawRow of body) {
    const row = [...rawRow];
    while (row.length < width) row.push("");

    const firstCell = row[0].trim();
    if (firstCell && !firstCell.startsWith("|----") && !firstCell.startsWith("\\|----")) {
      lastTopLevel = firstCell.replace(/`/g, "");
    }

    if (firstCell.startsWith("|----") || firstCell.startsWith("\\|----")) {
      const nestedKey = firstCell.replace(/^\\?\|----\s*/, "").trim();
      row[0] = lastTopLevel ? `\`${lastTopLevel}.${nestedKey}\`` : `\`${nestedKey}\``;
    }

    if (!row[0] && /note/i.test(row[3] || "")) {
      row[0] = "`Note`";
    }

    normalized.push(row);
  }

  return normalized;
}

function normalizeMarkdownTables(markdown) {
  const lines = markdown.split("\n");
  const output = [];
  let index = 0;

  while (index < lines.length) {
    if (!lines[index].trim().startsWith("|")) {
      output.push(lines[index]);
      index += 1;
      continue;
    }

    const tableLines = [];
    while (index < lines.length && lines[index].trim().startsWith("|")) {
      tableLines.push(lines[index].trim());
      index += 1;
    }

    const rows = tableLines.map(parseMarkdownRow);
    const normalizedRows = normalizeTableRows(rows).map(formatMarkdownRow);
    output.push(...normalizedRows);
  }

  return output.join("\n");
}

function cleanSectionContent(content) {
  return normalizeMarkdownTables(stripUiNoise(content))
    .replace(/For more information on how searchable fields work for contacts, please refer to this guide:\s*(?:<br>\s*)?GohighlevelSearching an Object Record\s*/gi, "")
    .replace(/```\n([\s\S]*?)```/g, (_match, code) => `\`\`\`\n${normalizeCodeBlock(code)}\n\`\`\``)
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function scoreOverviewText(text) {
  let score = 0;
  if (!text) return score;
  if (text.includes("Please note:")) score += 3;
  if (/\bAPI\b/.test(text)) score += 2;
  if (/enables users|allows users/i.test(text)) score += 2;
  if (/https?:\/\//i.test(text)) score -= 2;
  if (/Requirements\b/.test(text)) score -= 1;
  if (/ContactsSearchSearch Contacts/.test(text)) score -= 4;
  if (text.length > 120) score += 1;
  return score;
}

function extractOverviewText(source, primarySupplement) {
  const sourceIntro = source.bodyText
    .split(/Scope\(s\)|Auth Method\(s\)|Token Type\(s\)|Request/i)[0]
    .trim();
  const candidates = [
    cleanIntroText(sourceIntro, source.title),
    primarySupplement ? cleanIntroText(primarySupplement.intro, primarySupplement.title) : "",
  ].filter(Boolean);

  return candidates.sort((left, right) => scoreOverviewText(right) - scoreOverviewText(left))[0]
    || "This document was generated from the public HighLevel API page and its linked ClickUp supplement.";
}

function promoteNestedMajorSections(sections) {
  const promoted = [];
  const majorHeadings = new Set(["Sort", "Response Body"]);

  for (const section of sections) {
    const lines = section.content.split("\n");
    let current = { title: section.title, content: [] };

    for (const line of lines) {
      if (line.startsWith("### ")) {
        const nestedTitle = cleanSectionTitle(line.replace(/^###\s+/, ""));
        if (majorHeadings.has(nestedTitle)) {
          if (current.content.join("\n").trim()) {
            promoted.push({
              title: current.title,
              content: current.content.join("\n").trim(),
            });
          }
          current = { title: nestedTitle, content: [] };
          continue;
        }
      }

      current.content.push(line);
    }

    if (current.content.join("\n").trim()) {
      promoted.push({
        title: current.title,
        content: current.content.join("\n").trim(),
      });
    }
  }

  return promoted;
}

function renderReviewMarkdown({ source, supplements }) {
  const endpointPath = source.endpointUrl ? new URL(source.endpointUrl).pathname : null;
  const curlBlock = extractFirstCurlBlock(source.markdown);
  const primarySupplement = supplements[0] || null;
  const parsedSupplement = primarySupplement
    ? splitTopLevelSections(cleanGeneratedMarkdown(primarySupplement.markdown, primarySupplement.title))
    : { intro: "", sections: [] };
  const overviewText = extractOverviewText(source, primarySupplement && {
    ...primarySupplement,
    intro: parsedSupplement.intro,
  });

  const dynamicSections = promoteNestedMajorSections(parsedSupplement.sections)
    .map((section) => ({
      title: cleanSectionTitle(section.title),
      content: cleanSectionContent(section.content),
    }))
    .filter((section) => section.title && section.content);

  const tableOfContents = [
    { title: "Overview", number: 1 },
    { title: "API Reference", number: 2 },
    ...dynamicSections.map((section, index) => ({ title: section.title, number: index + 3 })),
    { title: "Authentication and Scopes Reference", number: dynamicSections.length + 3 },
    { title: "References", number: dynamicSections.length + 4 },
  ];

  const lines = [
    `# GoHighLevel ${source.title} API Review`,
    "",
    "**Author:** Browser Scraper",
    `**Date:** ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
    "**API Version:** 2021-07-28",
    "**Base URL:** `https://services.leadconnectorhq.com`",
    "",
    "---",
    "",
    "## Table of Contents",
    "",
    ...tableOfContents.map((section) => `${section.number}. [${section.title}](#${section.number}-${slugify(section.title)})`),
    "",
    "---",
    "",
    "## 1. Overview",
    "",
    overviewText,
    "",
    "---",
    "",
    "## 2. API Reference",
    "",
    endpointPath ? `**Endpoint:** \`${source.endpointMethod} ${endpointPath}\`` : null,
    source.scopes.length > 0 ? `**Scope:** \`${source.scopes.join(", ")}\`` : null,
    source.tokenTypes.length > 0 ? `**Token Type:** ${source.tokenTypes.join(", ")}` : null,
    source.authMethods.length > 0 ? `**Auth Method(s):** ${source.authMethods.join(", ")}` : null,
    curlBlock ? "" : null,
    curlBlock ? "**Sample cURL Request:**" : null,
    curlBlock ? "" : null,
    curlBlock ? `\`\`\`bash\n${curlBlock}\n\`\`\`` : null,
  ].filter((line) => line !== null);

  dynamicSections.forEach((section, index) => {
    lines.push(
      "",
      "---",
      "",
      `## ${index + 3}. ${section.title}`,
      "",
      section.content,
    );
  });

  lines.push(
    "",
    "---",
    "",
    `## ${dynamicSections.length + 3}. Authentication and Scopes Reference`,
    "",
    "| API Group | Scope | Token Type | Auth Method(s) |",
    "| --- | --- | --- | --- |",
    `| ${source.title} | ${source.scopes.length > 0 ? `\`${source.scopes.join(", ")}\`` : "(not detected)"} | ${source.tokenTypes.length > 0 ? source.tokenTypes.join(", ") : "(not detected)"} | ${source.authMethods.length > 0 ? source.authMethods.join(", ") : "(not detected)"} |`,
    "",
    "---",
    "",
    `## ${dynamicSections.length + 4}. References`,
    "",
    `[^1]: [HighLevel API Page](${source.url})`,
    primarySupplement ? `[^2]: [ClickUp Supplement](${primarySupplement.url})` : null,
    "",
  );

  return `${lines.filter(Boolean).join("\n")}\n`;
}

async function extractPage(page, url) {
  await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 120000,
  });

  const host = new URL(url).hostname;
  const isClickUp = host.includes("clickup.com");

  return page.evaluate(({ isClickUp }) => {
    function collapseWhitespace(text) {
      return text
        .replace(/\u00a0/g, " ")
        .replace(/[ \t]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    }

    function stripNoise(text) {
      return collapseWhitespace(text)
        .replace(/^Copy\s*$/gm, "")
        .replace(/^Get ClickUp Free\s*$/gm, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    }

    function visibleText(element) {
      if (!element) return "";
      return stripNoise(element.innerText || element.textContent || "");
    }

    function tableCellText(cell) {
      return visibleText(cell)
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .join("<br>")
        .replace(/\|/g, "\\|");
    }

    function renderTable(table) {
      const rows = Array.from(table.querySelectorAll("tr"))
        .map((row) =>
          Array.from(row.querySelectorAll("th, td")).map((cell) => tableCellText(cell)),
        )
        .filter((row) => row.length > 0);

      if (rows.length === 0) return "";

      const width = Math.max(...rows.map((row) => row.length));
      const padded = rows.map((row) => {
        const cells = [...row];
        while (cells.length < width) cells.push("");
        return cells;
      });

      const [header, ...body] = padded;
      const headerLine = `| ${header.join(" | ")} |`;
      const separatorLine = `| ${header.map(() => "---").join(" | ")} |`;
      const bodyLines = body.map((row) => `| ${row.join(" | ")} |`);
      return [headerLine, separatorLine, ...bodyLines].join("\n");
    }

    function renderList(list, depth = 0) {
      const prefixBase = list.tagName === "OL" ? "1." : "-";
      const lines = [];

      for (const item of Array.from(list.children).filter((child) => child.tagName === "LI")) {
        const nestedLists = Array.from(item.children).filter(
          (child) => child.tagName === "UL" || child.tagName === "OL",
        );
        const textParts = Array.from(item.childNodes)
          .filter((node) => {
            if (node.nodeType === Node.TEXT_NODE) return node.textContent.trim();
            if (node.nodeType !== Node.ELEMENT_NODE) return false;
            return node.tagName !== "UL" && node.tagName !== "OL";
          })
          .map((node) =>
            node.nodeType === Node.TEXT_NODE
              ? node.textContent.trim()
              : visibleText(node),
          )
          .filter(Boolean);

        if (textParts.length > 0) {
          lines.push(`${"  ".repeat(depth)}${prefixBase} ${textParts.join(" ")}`);
        }

        for (const nested of nestedLists) {
          lines.push(renderList(nested, depth + 1));
        }
      }

      return lines.filter(Boolean).join("\n");
    }

    function renderCodeBlock(node) {
      const code = stripNoise(node.innerText || node.textContent || "");
      return code ? `\`\`\`\n${code}\n\`\`\`` : "";
    }

    function serialize(root) {
      const blocks = [];

      function walk(node) {
        if (!node || node.nodeType !== Node.ELEMENT_NODE) return;

        const style = window.getComputedStyle(node);
        if (style.display === "none" || style.visibility === "hidden") return;

        const tag = node.tagName;
        if (["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "BUTTON"].includes(tag)) return;

        if (tag === "TABLE") {
          const rendered = renderTable(node);
          if (rendered) blocks.push(rendered);
          return;
        }

        if (tag === "PRE") {
          const rendered = renderCodeBlock(node);
          if (rendered) blocks.push(rendered);
          return;
        }

        if (tag === "UL" || tag === "OL") {
          const rendered = renderList(node);
          if (rendered) blocks.push(rendered);
          return;
        }

        if (/^H[1-6]$/.test(tag)) {
          const text = visibleText(node);
          if (text) blocks.push(`${"#".repeat(Number(tag.slice(1)))} ${text}`);
          return;
        }

        const childElements = Array.from(node.children);
        if (childElements.length === 0) {
          const text = visibleText(node);
          if (text) blocks.push(text);
          return;
        }

        for (const child of childElements) {
          walk(child);
        }
      }

      walk(root);
      return stripNoise(blocks.join("\n\n"));
    }

    const root = isClickUp
      ? document.querySelector('[data-test="dashboard-doc-container__content"]') || document.body
      : document.querySelector("main") || document.body;
    const bodyText = stripNoise(root.innerText || root.textContent || "");
    const clickupLinks = Array.from(document.querySelectorAll("a"))
      .map((anchor) => ({
        text: visibleText(anchor),
        href: anchor.href,
      }))
      .filter((link) => link.href.includes("clickup.com") && link.href.startsWith("http"));

    const endpointMatch = bodyText.match(/\b(GET|POST|PUT|PATCH|DELETE)\s+(https?:\/\/\S+)/);
    const title =
      visibleText(document.querySelector("h1")) ||
      document.title ||
      bodyText.split("\n")[0] ||
      "Untitled";

    return {
      title,
      url: location.href,
      endpointMethod: endpointMatch?.[1] || null,
      endpointUrl: endpointMatch?.[2] || null,
      clickupLinks,
      bodyText,
      markdown: serialize(root),
    };
  }, { isClickUp });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const url = args.url;

  if (!url) {
    throw new Error(
      "Usage: npm run scrape:page -- --url <ghl-doc-url> [--output docs/generated/file.md]",
    );
  }

  const outputPath = buildOutputPath(url, args.output);
  const browserConfig = await resolveBrowser(args);

  let browser;
  try {
    browser = await puppeteer.launch(browserConfig.launchOptions);
  } catch (error) {
    if (browserConfig.name === "zen") {
      const fallback = await resolveBrowser({ ...args, browser: "chrome" });
      browser = await puppeteer.launch(fallback.launchOptions);
      browserConfig.name = `${browserConfig.name} (fallback: ${fallback.name})`;
    } else {
      throw error;
    }
  }

  try {
    const page = await browser.newPage();
    const source = await extractPage(page, url);
    source.scopes = extractLinesBetween(source.bodyText, "Scope(s)", ["Auth Method(s)", "Token Type(s)", "Request"]);
    source.authMethods = extractLinesBetween(source.bodyText, "Auth Method(s)", ["Token Type(s)", "Request"]);
    source.tokenTypes = extractLinesBetween(source.bodyText, "Token Type(s)", ["Request", "HEADER PARAMETERS"]);

    const supplements = [];
    const uniqueClickupLinks = Array.from(new Set(source.clickupLinks.map((link) => link.href)));

    for (const supplementUrl of uniqueClickupLinks) {
      const supplementPage = await browser.newPage();
      const supplement = await extractPage(supplementPage, supplementUrl);
      supplements.push(supplement);
      await supplementPage.close();
    }

    const markdown = renderReviewMarkdown({
      source,
      supplements,
    });

    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(normalizePathname(outputPath), markdown, "utf8");

    process.stdout.write(
      JSON.stringify(
        {
          outputPath,
          sourceTitle: source.title,
          supplements: supplements.map((item) => item.url),
          browser: browserConfig.name,
        },
        null,
        2,
      ),
    );
    process.stdout.write("\n");
  } finally {
    await browser.close();
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  await main();
}

export {
  cleanIntroText,
  cleanSectionContent,
  extractOverviewText,
  normalizeMarkdownTables,
  renderReviewMarkdown,
};
