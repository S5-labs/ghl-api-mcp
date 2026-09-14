> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/other/mcp). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# LeadConnector MCP Server

The LeadConnector MCP (Model Context Protocol) server securely connects MCP-compatible AI assistants to your CRM. Based on the scopes you approve, assistants can find records and perform supported read, create, update, and delete actions.

**Choose the URL that matches your AI client: Claude connects at `https://services.leadconnectorhq.com/mcp/anthropic/v2`, while ChatGPT, Codex, and other compatible OpenAI clients connect at `https://services.leadconnectorhq.com/mcp/openai/v2/`.**

## What is MCP?

MCP is an open protocol that standardizes how applications provide context to large language models. The LeadConnector MCP server gives AI assistants a standardized way to work with your LeadConnector data and operations — without you or the model needing to know the internal details of how the underlying APIs work.

## Authentication

LeadConnector MCP connections use **OAuth**. When you connect, your client opens the LeadConnector sign-in and consent flow. You choose the sub-account or sub-accounts the connection can access and approve the requested scopes.

The integration can only perform operations allowed by the scopes you grant. You can review or revoke its access from your LeadConnector account.

Every **request** targets a single sub-account (location). The per-client endpoint also lets an **agency connect once and work across many sub-accounts** — choosing the sub-account per request (see [Working across sub-accounts](https://marketplace.gohighlevel.com/docs/other/mcp#working-across-sub-accounts-agencies)).

---

# Connect using your client endpoint

Use the OAuth endpoint listed for your client. Both endpoints provide access to the current active LeadConnector MCP operation catalog.

**Available today:**

- **Claude:** `https://services.leadconnectorhq.com/mcp/anthropic/v2`
- **ChatGPT, Codex, and other compatible OpenAI clients:** `https://services.leadconnectorhq.com/mcp/openai/v2/`

> ▶️ Walkthrough video: Watch on Loom

- **Broad CRM coverage** — more than 550 active read, create, update, and delete operations across 38 domains. The exact operations an assistant sees depend on your OAuth grant.
- **OAuth** — connect through the LeadConnector sign-in and consent flow, without manually creating or rotating a token.
- **One sub-account, or your whole agency** — connect to a **single sub-account** (the default), or, as an **agency**, connect **once and work across many sub-accounts** from the same connection. Every request still runs against one sub-account you choose — see [Working across sub-accounts](https://marketplace.gohighlevel.com/docs/other/mcp#working-across-sub-accounts-agencies).
- **A small, stable toolset** — instead of hundreds of individual tools competing for the model’s attention, the server exposes a compact set of unified tools (below). The assistant uses them to discover and run the operations available to your connection.

> Single sub-account: with OAuth, your client opens a browser to the LeadConnector sign-in page — sign in, choose the sub-account (location) to expose, and approve. The connection then operates on that location for its lifetime.
> Agency, many sub-accounts: installing as an agency, you choose which sub-accounts to include. The one connection can then work across all of them — the assistant uses the sub-account you name, or asks which one when it’s ambiguous, and you can switch between them in the same chat. It only ever touches the sub-accounts you selected.

## A small, unified toolset

Rather than listing every operation as its own tool, the server presents a handful of unified tools. There are only a few to learn — the assistant handles the rest.

| Tool | What it does |
| --- | --- |
| `list_locations` | List the sub-accounts this connection can use, or return the one bound sub-account, so the correct CRM context can be chosen |
| `search_operations` | Discover active operations by intent, including record searches and read, create, update, or delete actions |
| `describe_operation` | Inspect an operation's inputs, example payload, required scopes, and safety information before running it |
| `execute_operation` | Run an operation, subject to OAuth scopes, permissions, tenant boundaries, and built-in safety checks |

Behind these four tools sits the active LeadConnector MCP catalog — **more than 550 operations across 38 domains**. Use `search_operations` at any time to see exactly what is available to your OAuth grant.

## A single prompt in action

Once connected, you don’t need to know the LeadConnector API — you just ask. For example:

> “Find the contact with email jane@example.com, add the tag ‘vip-2026’, and create a new opportunity in the ‘Sales Pipeline’ for them worth $5,000.”

Behind the scenes the assistant:

1. `search_operations` → discovers the operations for finding the contact, adding tags, and creating an opportunity
1. `describe_operation` → inspects the inputs, scopes, and safety information for each operation
1. `execute_operation` → finds Jane's contact
1. `execute_operation` → adds the tag and creates the opportunity

You get a single, natural-language confirmation back.

## Working across sub-accounts (agencies)

> ▶️ Walkthrough video: Multiple sub-account support in Claude.ai — watch on Loom

Individual users connect to one sub-account and never think about locations again. **Agencies** can instead connect **once** and work across **many** sub-accounts from the same connection — no separate connection per sub-account.

**How it works:**

1. **Install for your agency.** When you connect, choose **which** sub-accounts to include (one, several, or all). The connection can work with exactly those — and no others.
1. **Name the sub-account, or let the assistant ask.** In a request, refer to the sub-account by name (e.g. *“in Downtown Clinic, …”*). If you don’t say which one and it’s ambiguous, the assistant calls `list_locations` and asks you to choose.
1. **Switch freely in the same chat.** Ask about one sub-account, then another, without reconnecting — *“now do the same for the Uptown location.”*

**Example:**

> “List the contacts tagged ‘vip-2026’ in Downtown Clinic, then compare the count with Uptown Med Spa.”

The assistant uses `list_locations` to resolve the names, runs the query against each sub-account, and reports both — each request authorized against your installation.

> One sub-account at a time, always authorized. Each request runs against a single sub-account you chose at install. A request for a sub-account you didn’t include (or that isn’t part of the installation) is refused — the connection can never reach beyond the sub-accounts you selected.

> Availability: individual single-sub-account connections work today. Agency-wide connections across multiple sub-accounts are rolling out — an agency enables them by installing with the multi-sub-account (bulk) option. If your install offers only a single sub-account, that option isn’t enabled for your app yet.

## What you can do

The active MCP operation catalog includes:

- **Contacts** — get and search contacts; create, update, delete, and upsert; duplicate lookup; tags, notes, tasks, followers, campaigns, appointments, business assignment, and workflow enrollment
- **Conversations & Messages** — create, get, update, delete, and search conversations; read and send messages; attachments, scheduled messages, status updates, recordings, transcriptions, exports, and typing indicators
- **Opportunities & Pipelines** — pipelines, lost reasons, search, create, update, delete, upsert, followers, and status changes
- **Calendars & Appointments** — calendars, groups, appointments, events, notes, notifications, free and blocked slots, resources, availability schedules, services, service locations, and bookings
- **Payments** — coupons, payment provider configuration, integrations, orders, fulfillment, recorded payments, subscriptions, and transactions
- **Products & Store** — products, prices, collections, inventory, reviews, store placement, shipping carriers, zones and rates, and store settings
- **Invoices, Estimates & Documents** — invoices, estimates, templates, schedules, manual payments, send and void actions, invoice-from-estimate, proposals, and document links
- **Social Planner** — social accounts, posts, comments, categories, tags, CSV imports, category queues, calendar views, edit sessions, and statistics
- **Blogs** — blog sites, authors, categories, posts, and slug checks
- **Emails** — templates, folders and imports, campaigns, scheduling, campaign statistics, bulk-action campaigns, workflow campaigns, and email verification
- **Forms & Surveys** — forms, surveys, and their submissions
- **Funnels** — funnels, funnel pages, page counts, and redirects
- **Workflows** — workflow lookup, with contact enrollment and removal available through contact operations
- **Voice AI** — agents, agent actions, and call logs
- **Phone System** — number pools, active and available numbers, and phone-number purchasing
- **Knowledge Base** — knowledge bases, website crawling and training, crawl status, FAQs, and files
- **Media Library & Files** — files and folders, folder creation, and bulk media updates and deletion
- **Brand Boards** — design kits, brand voices, and default brand settings
- **Custom Objects, Fields & Associations** — object schemas, records, record search, custom fields and folders, association definitions, and relationships between records
- **Locations & CRM Settings** — sub-account search and lookup, conversation channels, custom values, recurring tasks, tags, templates, time zones, and task search
- **Businesses & Users** — businesses and users, including search, create, update, and delete actions
- **Marketplace & Wallet** — installer details, wallet charges, fund checks, and location wallet transactions
- **Ads & Affiliates** — supported Facebook, Google, and LinkedIn advertising operations; audiences, lead forms, reporting, affiliates, commissions, and payouts
- **Additional CRM areas** — chat widgets, links, snapshots, campaigns, and courses

Available operations depend on your OAuth scopes and permissions. Ask `search_operations` for the exact operations available to your connection.

## Connect Claude (`/mcp/anthropic/v2`)

Claude connects to `https://services.leadconnectorhq.com/mcp/anthropic/v2` through OAuth.

### Claude.ai

1. Open **Claude.ai** → **Settings** → **Connectors** → **Add custom connector**.
1. Set the server URL to `https://services.leadconnectorhq.com/mcp/anthropic/v2`.
1. Click **Connect** and complete the LeadConnector sign-in (sign in → pick sub-account(s) → approve).
1. Start a new chat — the LeadConnector tools are now available.

> Tip: Ask “Find the last 5 contacts I added in LeadConnector” to confirm the connection works.

### Claude Code (CLI)

```bash
claude mcp add --transport http leadconnector https://services.leadconnectorhq.com/mcp/anthropic/v2
```

Or add it to `.mcp.json` at your project root:

```json
{
  "mcpServers": {
    "leadconnector": {
      "type": "http",
      "url": "https://services.leadconnectorhq.com/mcp/anthropic/v2"
    }
  }
}
```

On first use, Claude Code opens a browser for LeadConnector authorization. Verify with `claude mcp list`.

### Claude Cowork

1. In **Claude Cowork**, open the **connectors / integrations** settings and choose **Add custom connector**.
1. Set the server URL to `https://services.leadconnectorhq.com/mcp/anthropic/v2`.
1. Complete the LeadConnector sign-in (sign in → pick sub-account(s) → approve).
1. Your Cowork agents can now use the LeadConnector tools.

## Connect OpenAI clients (`/mcp/openai/v2/`)

ChatGPT, Codex, and other compatible OpenAI clients connect to `https://services.leadconnectorhq.com/mcp/openai/v2/` through OAuth.

### ChatGPT

1. In ChatGPT, open **Settings** → **Security and login**, then turn on **Developer mode**.
1. Open **ChatGPT Plugins**, select the plus button, and create a new plugin.
1. Enter a name and description. Under **Connection**, add `https://services.leadconnectorhq.com/mcp/openai/v2/` as the MCP server URL and create the connection.
1. Complete the LeadConnector OAuth flow (sign in → pick sub-account(s) → approve).
1. Start a new conversation and add the LeadConnector connection from the tools menu.

> ▶️ Setup video: Connect ChatGPT to LeadConnector MCP — watch on Loom

### Codex

Add the LeadConnector server, then start the OAuth flow:

```bash
codex mcp add leadconnector --url https://services.leadconnectorhq.com/mcp/openai/v2/
codex mcp login leadconnector
```

In the Codex IDE extension, open the gear menu → **MCP servers** → **Add server**, choose **Streamable HTTP**, and enter the same URL. Select **Authenticate** to complete OAuth when prompted.

Other compatible OpenAI clients can use the same endpoint as a remote Streamable HTTP MCP server and complete the LeadConnector OAuth flow when prompted.

## Permissions & security

- **You choose the sub-accounts.** At connect time you select which sub-account(s) the connection can operate on — a single one, or (for agencies) several. It never reaches a sub-account you didn’t include, and every request is authorized against your installation before it runs.
- **Scoped to your grant.** The assistant can only perform operations your OAuth scopes allow. You can review or revoke access at any time from your LeadConnector account.
- **Safety checks.** Sensitive and irreversible operations are gated with additional confirmation and safety checks before they run.

## Try it out & feedback

- Please try out the MCP server and let us know what you think — we value your feedback!
- Connect Claude, ChatGPT, or Codex.
- For questions or support, feel free to reach out.
