#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import puppeteer from "puppeteer-core";

const ROOT_DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const DEFAULT_OUTPUT_DIR = path.join(ROOT_DIR, "docs", "generated");

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
    requested === "auto" ? ["zen", "chrome", "canary"] : [requested, "chrome", "canary"];

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

    function visibleText(element) {
      if (!element) return "";
      return collapseWhitespace(element.innerText || element.textContent || "");
    }

    function renderTable(table) {
      const rows = Array.from(table.querySelectorAll("tr"))
        .map((row) =>
          Array.from(row.querySelectorAll("th, td")).map((cell) =>
            visibleText(cell).replace(/\|/g, "\\|"),
          ),
        )
        .filter((row) => row.length > 0);

      if (rows.length === 0) return "";

      const [header, ...body] = rows;
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

    function serialize(root) {
      const blocks = [];

      function walk(node) {
        if (!node || node.nodeType !== Node.ELEMENT_NODE) return;

        const style = window.getComputedStyle(node);
        if (style.display === "none" || style.visibility === "hidden") return;

        const tag = node.tagName;

        if (tag === "TABLE") {
          const rendered = renderTable(node);
          if (rendered) blocks.push(rendered);
          return;
        }

        if (tag === "PRE") {
          const code = collapseWhitespace(node.innerText || "");
          if (code) blocks.push(`\`\`\`\n${code}\n\`\`\``);
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
      return collapseWhitespace(blocks.join("\n\n"));
    }

    const root = isClickUp
      ? document.querySelector('[data-test="dashboard-doc-container__content"]') || document.body
      : document.querySelector("main") || document.body;
    const bodyText = collapseWhitespace(root.innerText || root.textContent || "");
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

function renderMarkdown({ source, supplements, browserName }) {
  const endpointPath = source.endpointUrl ? new URL(source.endpointUrl).pathname : null;
  const lines = [
    `# ${source.title}`,
    "",
    `- Source URL: ${source.url}`,
    `- Browser: ${browserName}`,
    source.endpointMethod && source.endpointUrl
      ? `- Endpoint URL: ${source.endpointMethod} ${source.endpointUrl}`
      : null,
    "",
    "## API Reference",
    "",
    source.endpointMethod && endpointPath
      ? `**Endpoint:** \`${source.endpointMethod} ${endpointPath}\``
      : null,
    source.scopes.length > 0 ? `**Scope:** \`${source.scopes.join(", ")}\`` : null,
    source.tokenTypes.length > 0 ? `**Token Type:** ${source.tokenTypes.join(", ")}` : null,
    source.authMethods.length > 0 ? `**Auth Method(s):** ${source.authMethods.join(", ")}` : null,
    "",
    "## HighLevel Page",
    "",
    source.markdown,
  ].filter(Boolean);

  for (const supplement of supplements) {
    lines.push(
      "",
      `## ClickUp Supplement: ${supplement.title}`,
      "",
      `- Source URL: ${supplement.url}`,
      "",
      supplement.markdown,
    );
  }

  return `${lines.join("\n")}\n`;
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

    const markdown = renderMarkdown({
      source,
      supplements,
      browserName: browserConfig.name,
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

await main();
