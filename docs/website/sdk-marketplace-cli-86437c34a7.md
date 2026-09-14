> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/sdk/marketplace-cli). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# HighLevel Marketplace CLI

The HighLevel Marketplace CLI provides the `ghl` command for creating, configuring, testing, and publishing apps in the [HighLevel Marketplace developer portal](https://marketplace.gohighlevel.com/).

The CLI supports interactive use in a terminal and non-interactive use in scripts, CI pipelines, and AI coding agents. It validates supported changes before sending them to the Marketplace API and can synchronize app configuration through local JSON files.

## Requirements

- Node.js 20.12 or later
- A [HighLevel developer account](https://marketplace.gohighlevel.com/)

## Install the CLI

Install the package globally with npm:

```bash
npm install -g @gohighlevel/marketplace-cli
```

Verify the installation:

```bash
ghl --version
```

## Get help

Use the built-in help to explore commands and their current arguments and flags:

| Command | Description |
| --- | --- |
| `ghl --help` | Show the top-level command groups. |
| `ghl help [command]` | Show help for a command or topic. |
| `ghl <command> --help` | Show the arguments, flags, and examples for a specific command. |
| `ghl commands` | List every available command. Add `--json` for machine-readable output. |
| `ghl --version` | Show the installed CLI version. |

Use the full `--help` flag; the short `-h` flag is not supported. `ghl help` also supports `--nested-commands` to include nested command topics. Read commands commonly support `--json`. Destructive commands ask for confirmation in an interactive terminal and require `--force` when run non-interactively.

## Authenticate and select a developer account

Log in through the browser:

```bash
ghl login
```

Use `ghl login --no-browser` to print the approval URL instead of opening it. Use `--profile <name>` to keep separate login identities; the default profile is named `default`.

One login can have access to multiple developer accounts. The following commands manage the active login and account:

| Command | Description |
| --- | --- |
| `ghl login` | Authenticate through the browser. Supports `--no-browser` and `--profile <name>`. |
| `ghl account` | List accessible developer accounts and mark the active account. Supports `--json`. |
| `ghl account switch [accountId]` | Switch the account used by subsequent commands. Omitting the ID opens an interactive picker; scripts must provide it. |
| `ghl logout` | Delete stored login tokens and the current app selection. Unrevealed one-time secrets remain in the local ledger. |

Switching accounts clears the app selection stored for the previous account. Existing app workspaces remain bound to their original apps.

## Quick start

Create an app and synchronize its local configuration:

```bash
ghl login
ghl account
ghl account switch
ghl app create
ghl app validate
ghl app diff
ghl app push
ghl app validate --remote
ghl app publish
```

For an existing app, create a local workspace with:

```bash
ghl app pull <appId>
```

After the first pull, run `ghl app pull` anywhere inside that workspace to refresh it.

## Interactive and non-interactive use

When a mutating command runs in a terminal without all its arguments, the CLI prompts for the missing values and pre-fills current values when available.

- Type in searchable pickers to filter long lists. Use `space` or `tab` to select and `enter` to confirm.
- Press `Esc` or `Ctrl+C` to cancel. A cancellation exits successfully without making an API call.
- Non-interactive commands never wait for prompts. They exit with an error that identifies the required flags.
- Use `--json` on supported read commands and check the process exit code before consuming stdout.
- Pass `--force` only after reviewing destructive or irreversible changes.

The CLI exits with code `0` on success or user cancellation and a non-zero code on errors. Human-readable errors and progress indicators are written to stderr; JSON-enabled commands write structured output to stdout.

## App workspaces and selection

Commands resolve the current app in this order:

1. An explicit `--app <id>` flag
1. The nearest parent directory containing `ghl-app.json`
1. The selection saved by `ghl app use` or `ghl app create`

Use `ghl app current` to verify which app and version a command will target.

`ghl app create` creates the remote app, generates a local workspace, and selects the app. `ghl app pull [appId]` creates a workspace for an existing app or refreshes the current one. When creating a workspace non-interactively, pass `--directory <parent>` and `--folder <name>`.

The portal remains the source of truth. Before pushing, `ghl app diff` compares the last pull, local files, and the current portal state. `ghl app push` rejects conflicts, merges non-overlapping set changes, updates only changed API sections, verifies the remote result, and refreshes the local state. Use `--dry-run` to inspect the API plan without changing local or remote state.

Important workspace files include:

| File | Purpose |
| --- | --- |
| `ghl-app.json` | App identity, version binding, listing, profiles, OAuth metadata, support, billing settings, and review configuration. |
| `src/webhooks/ghl-webhooks.json` | Webhook URL and event subscriptions. |
| `src/modules/workflows/actions/<action-name>.json` | One workflow action per file. |
| `src/modules/workflows/actions/code/<action-key>.<version>.js` | JavaScript for a code-backed action version. |
| `src/modules/workflows/triggers/<trigger-name>.json` | One workflow trigger per file. |
| `src/billing/subscription.json` | Marketplace subscription plans. |
| `src/billing/usage-based.json` | Fixed or dynamic usage meters and price tiers. |
| `.ghl/*.json` | Private synchronization baselines used for three-way conflict detection. Do not edit these files. |
| `HIGHLEVEL_APP.md` | Generated guide to the workspace structure and synchronization flow. |
| `AGENTS.md` and `CLAUDE.md` | Generated command and workspace guidance for coding agents. |

Workspace configuration does not contain credentials. Client secrets, SSO keys, review credentials, password defaults, and secret-bearing external-auth values are not exported. Generated manifests use schema version `1`; generated configuration files use mode 0644 and private CLI state uses mode 0600.

Running `ghl app pull` replaces generated JSON with portal values, so run `ghl app diff` first if the workspace may contain unpushed changes. Pulling into an existing folder is allowed only when its `ghl-app.json` belongs to the same app. Developer-created files and customized agent instructions are preserved.

## Select and synchronize apps

| Command | Description |
| --- | --- |
| `ghl app list` | List apps. Supports `--search <text>`, `--limit <n>` (default `50`), `--skip <n>`, and `--json`. |
| `ghl app create` | Create a remote app and local workspace, then select it. Non-interactive use requires app type, target user, listing type, and installer rules where applicable. Supports `--json`. |
| `ghl app pull [appId]` | Create or refresh a local workspace. Supports `--version <versionId\|semver>`, `--directory <parent>`, `--folder <name>`, and `--json`. |
| `ghl app validate` | Validate local workspace files without authentication or API calls. Add `--remote` for the server publish-readiness checklist. Supports `--json`. |
| `ghl app diff` | Show local changes, portal-only changes, conflicts, and the minimal API plan. Supports `--directory` and `--json`. |
| `ghl app push` | Validate, merge, push only changed sections, verify, and refresh local state. Supports `--directory`, `--dry-run`, and `--json`. |
| `ghl app use [appId]` | Select an app and version. Omitting the ID opens an interactive picker. |
| `ghl app current` | Show the workspace or stored app selection. Supports `--json`. |
| `ghl app info` | Show the selected app and its publish readiness. Supports `--json`. |

For non-interactive app creation, provide `--name`, `--type public|private`, `--target sub-account|agency`, and `--listing white-label|standard`. A sub-account target also requires `--installer everyone|agency-only`; `--installer` is invalid for agency-targeted apps. Use `--directory <parent>` and `--folder <name>` to control the workspace destination. If remote creation succeeds but local initialization fails, recover the app with `ghl app pull <appId>`.

Editing a live version automatically creates and selects a pending draft when required, so subsequent commands continue against the editable version.

## Configure the listing and profiles

Section editors are interactive with existing values pre-filled and also support fully flag-driven use. Each editor saves the complete section after merging the supplied values with the current configuration.

| Command | Description |
| --- | --- |
| `ghl app basic-info` | Configure with `--name`, `--tagline`, `--company`, `--website`, repeatable `--category` and `--niche`, and `--logo-url`. |
| `ghl app listing` | Configure with `--type`, `--target`, `--installer`, `--listing`, and `--keywords`. |
| `ghl app profiles` | Configure with `--description`, `--video-url`, `--sub-account` or `--no-sub-account`, `--sub-description`, and `--sub-video-url`. |
| `ghl app support` | Configure with `--email`, `--phone`, `--website`, `--docs-url`, `--terms-url`, `--privacy-url`, and repeatable `--service`. |
| `ghl app review-details` | Configure with `--demo`, `--scopes-demo`, `--credentials`, `--notes`, and `--private-reason`. |

All five commands support `--app <appId>` and require at least one field flag outside a terminal. The CLI enforces Marketplace constraints such as a 20–170 character tagline, one to three categories, up to three niches, 300–5000 character plain-text profile descriptions, HTTPS YouTube preview videos, required support contact details, and public-review requirements. Run each command with `--help` for accepted values.

## Manage media

| Command | Description |
| --- | --- |
| `ghl app media upload <files...>` | Upload and attach a logo or profile screenshots. Use `--logo` for one logo or `--profile agency |
| `ghl app media delete <urls...>` | Detach and delete media. Destructive; scripts must pass `--force`. |

Logo files must be square, 400–800 pixels, and no larger than 512 KB. Screenshots must be 600–1000 pixels wide, have an aspect ratio from 1.5:1 through 1.8:1, and be no larger than 5 MB. Each profile supports at most nine screenshots. Adding the third sub-account screenshot automatically enables the sub-account profile.

## Configure OAuth and client keys

| Command | Description |
| --- | --- |
| `ghl app scopes` | Show the app's current OAuth scopes. Add `--available` for the compatible scope catalog; supports `--json`. |
| `ghl app scopes add [scopes...]` | Add scopes. Omitting scopes opens a searchable picker. Use `--redirect <url>` when saving OAuth configuration for the first time. |
| `ghl app scopes remove [scopes...]` | Remove scopes. Events no longer supported by the remaining scopes are also unsubscribed after confirmation. |
| `ghl app redirect` | Show OAuth redirect URIs. Supports `--json`. |
| `ghl app redirect add [urls...]` | Add redirect URIs. HTTP is supported for local development. |
| `ghl app redirect remove [urls...]` | Remove redirect URIs. Omitting URLs opens a picker of current values. |
| `ghl app redirect default [url]` | Set the default redirect URI for a live, deprecating, or deprecated version. |
| `ghl app keys` | Show OAuth client keys. Supports `--json`. |
| `ghl app keys create [name]` | Create a client ID and reveal-once secret. Add `--reveal` to print the secret immediately instead of retaining it locally; supports `--json`. |
| `ghl app keys delete [keyId]` | Delete a client key and its ledger entry. Destructive; scripts must pass `--force`. |
| `ghl app keys default [keyId]` | Set the default client key. |
| `ghl app sso-key` | Generate or rotate the SSO key. Non-interactive use requires `--force --reveal`. |

All commands in this section accept `--app <appId>`. Adding the first OAuth configuration requires at least one redirect URI. Adding sensitive scopes such as `users.write` or `locations.write` requires confirmation or `--force` in scripts. White-label-friendly apps cannot use HighLevel-branded redirect URLs. A key name is required when creating a key non-interactively.

## Configure webhooks

| Command | Description |
| --- | --- |
| `ghl app webhook` | Show the webhook configuration. Supports `--json`. |
| `ghl app webhook url [url]` | Set the public HTTPS webhook URL in the local workspace and on the portal. |
| `ghl app webhook events` | List events unlocked by the app's current scopes. Supports `--json`. |
| `ghl app webhook subscribe [events...]` | Subscribe to scope-compatible events. Use `--url` for a per-event override. |
| `ghl app webhook unsubscribe [events...]` | Unsubscribe from selected events. |

Webhook mutation commands update and validate the local workspace first, apply only the webhook section remotely, verify the result, and then advance the baseline. A confirmed API rejection restores the previous JSON. If the remote outcome is uncertain, the intended local change remains visible to `ghl app diff` and `ghl app push`.

## Manage workflow actions

Workflow actions are app-scoped and independently versioned. Store one action in each `src/modules/workflows/actions/<action-name>.json` file. The lowercase, hyphenated filename determines the expected underscore-separated `key`; for example, `send-contact-sync-payload.json` requires `send_contact_sync_payload`.

| Command | Description |
| --- | --- |
| `ghl app actions` | List remote actions. Supports workspace selection, `--app`, and `--json`. |
| `ghl app actions pull` | Refresh action JSON and code files, regenerate the authoring guide, and reset the conflict baseline. |
| `ghl app actions create [name]` | Create a local version `1.0` draft. Automation supplies `--key <stable_key>`. |
| `ghl app actions validate` | Compile referenced JavaScript without executing it and validate local actions and required app scopes. |
| `ghl app actions test <action>` | Execute a local action version through the portal test runner using `--input` or `--input-file`. |
| `ghl app actions diff` | Show three-way changes, conflicts, and create/update/delete operations. Supports `--json`. |
| `ghl app actions push` | Validate and push planned actions independently. Supports `--dry-run`; scripted deletions require `--force`. |
| `ghl app actions delete [key]` | Stage an action deletion locally. Non-interactive staging and the subsequent push require `--force`. |
| `ghl app actions new-version [key]` | Create a server-assigned draft from a published action. |
| `ghl app actions publish [key]` | Publish a complete draft. Automation requires `--notes <change-log> --force`. |

Code-backed actions store JavaScript in `actions/code/<action-key>.<version>.js` and reference it with `executionConfig.codeFile`. Code files must be UTF-8, no larger than 1 MiB, canonical for the action key and version, and cannot be symbolic links. `ghl app actions validate` and `push` compile these files without executing them.

Use `--publishable` with action validation to enforce release requirements, and optionally target `--action` and `--version`. Action tests accept `--version`, `--input`, `--input-file`, `--location`, and `--json`; `--input` and `--input-file` are mutually exclusive and input defaults to `{}`. An API action test can call its configured endpoint and cause real side effects. The generated `HIGHLEVEL_WORKFLOW_ACTIONS.md` contains the complete JSON authoring reference.

## Manage workflow triggers

Workflow triggers are app-scoped and independently versioned. Store one trigger in each `src/modules/workflows/triggers/<trigger-name>.json` file. As with actions, the hyphenated filename must match the trigger's underscore-separated immutable `key`.

| Command | Description |
| --- | --- |
| `ghl app triggers` | List remote triggers for the current workspace, `--app`, or selected app. |
| `ghl app triggers pull` | Refresh trigger JSON, regenerate the authoring guide, and reset the conflict baseline. |
| `ghl app triggers create [name]` | Create a local version `1.0` draft. Automation supplies `--key <stable_key>`. |
| `ghl app triggers validate` | Validate prerequisites, sample data, filters, variables, callbacks, URLs, secrets, and versions locally. |
| `ghl app triggers diff` | Show three-way changes, conflicts, and create/update/delete operations. |
| `ghl app triggers push` | Validate and push changed triggers independently. Supports `--dry-run`; scripted deletions require `--force`. |
| `ghl app triggers delete [key]` | Stage a local deletion. Non-interactive staging and the subsequent push require `--force`. |
| `ghl app triggers new-version [key]` | Create the next server-assigned draft from a published trigger. |
| `ghl app triggers publish [key]` | Publish after a clean push. Automation requires `--notes <change-log> --force`. |

Add `--publishable`, `--trigger`, and optionally `--version` for targeted release validation. Put representative event data in `customVarsJson`; filter and variable references use dot paths into that data. The generated `HIGHLEVEL_WORKFLOW_TRIGGERS.md` documents all supported fields, callbacks, request and response shapes, and lifecycle rules.

## Manage billing and pricing

The `billing` section in `ghl-app.json` controls the billing model, external billing URL, and trials. Subscription plans and usage meters use an independent JSON-first synchronization flow.

| Command | Description |
| --- | --- |
| `ghl app billing` | Show remote subscription plans and usage meters. |
| `ghl app billing pull` | Refresh local billing manifests and the private billing baseline. |
| `ghl app billing validate` | Validate plans, meters, tiers, product references, version rules, and immutable fields locally. |
| `ghl app billing diff` | Show three-way conflicts and planned plan, meter, and tier operations. |
| `ghl app billing push` | Validate, merge, update only required resources, and verify remote state. Supports `--dry-run`; scripted deletions require `--force`. |
| `ghl app billing plan` | List local subscription plans. |
| `ghl app billing plan create [name]` | Stage a free, monthly, yearly, lifetime, or split agency/location plan. |
| `ghl app billing plan delete [plan]` | Stage plan deletion by ID or exact name. Non-interactive use requires `--force`. |
| `ghl app billing meter` | List local usage meters. |
| `ghl app billing meter create [name]` | Stage fixed or dynamic pricing for supported Marketplace components. |
| `ghl app billing meter delete [meter]` | Stage meter deletion by meter ID or unambiguous product ID. Non-interactive use requires `--force`. |
| `ghl app pricing` | Show portal billing, trial settings, and pricing plans. Supports `--json`. |
| `ghl app pricing setup` | Directly configure free, paid, or freemium portal pricing. |
| `ghl app pricing add` | Directly add a portal pricing plan. |
| `ghl app pricing remove [planId]` | Directly remove a plan. Automation requires the plan ID and `--force`. |

New plan workflows should use `ghl app billing` so local JSON and conflict baselines remain authoritative. The `ghl app pricing` commands remain for compatibility and update the portal directly.

Plans support up to five features and six total plans. After creation, only the plan name and features are editable. Meter prices support six-decimal precision from `0.000001` through `200`. Dynamic pricing is available only for custom products and requires minimum, default, and maximum prices plus a public HTTPS pricing page.

External billing is unavailable for apps created after June 17, 2026. Usage meters are unavailable for template apps and external-billed apps. Workflow action and trigger meters must reference components already registered in the portal.

## Manage versions and publication

| Command | Description |
| --- | --- |
| `ghl app versions` | List all app versions and statuses. |
| `ghl app validate --remote` | Run the server publish-readiness checklist and show fix guidance. |
| `ghl app analyze` | Analyze the draft and recommend the next semantic version. Scope changes require a major version. |
| `ghl app publish` | Publish a private app immediately or submit a public app for review. |
| `ghl app draft` | Create and select a draft from the latest live version. |
| `ghl app withdraw` | Return a version under Marketplace review to draft. Destructive; scripts require `--force`. |
| `ghl app deprecate` | Schedule a live version for deprecation with a date, reason, and optional timezone. |
| `ghl app security-review` | Request a security review for an eligible private live app. |

The first publish uses version `1.0.0`. Later releases must be a patch, minor, or major increment of the current live version. Non-interactive publication requires `--version <x.y.z>`, `--agency-notes`, and `--force`; use `--sub-account-notes` when applicable. Public apps require completed review details and only one version can be in review at a time.

Deprecation must be scheduled at least three days in advance with `--date YYYY-MM-DD` and a user-visible `--reason`; `--timezone` defaults to the local timezone. The newest live version cannot be deprecated, and at least one live version must remain unless the app has only one version.

## Manage sandbox accounts

| Command | Description |
| --- | --- |
| `ghl sandbox` | List sandbox agency accounts and connected apps. Supports `--json`. |
| `ghl sandbox create` | Create a sandbox agency with `--name` and `--password`. |
| `ghl sandbox delete [companyId]` | Delete a sandbox. Omitting the ID opens a picker; scripts require `--force`. |

A developer can have one active sandbox account and must have a phone number on their developer profile. Sandbox passwords must contain at least 12 characters with uppercase, lowercase, number, and special characters. The CLI stores the password in the reveal-once secret ledger and removes its entry when the sandbox is deleted.

## Manage one-time secrets

Client secrets, SSO keys, and sandbox passwords cannot be retrieved from the API after creation. The CLI keeps values it creates in a local ledger until their first reveal.

| Command | Description |
| --- | --- |
| `ghl secrets` | List masked secrets for the selected app. Add `--include-account` for sandbox passwords. |
| `ghl secrets reveal` | Reveal matching values once and atomically remove their local copies. Scripts require `--force`. |

When a ledger write succeeds, creation output shows a masked value. Use the creation command's `--reveal` flag only when a script must receive the value immediately; no local copy is retained in that case. Values created outside the CLI were never captured and must be replaced by rotating them.

## Use the CLI in automation and AI agents

For deterministic non-interactive behavior:

1. Pass all required arguments and flags.
1. Use `--json` on supported read commands and parse stdout only after checking the exit code.
1. Use `--dry-run` before synchronization commands when you need to review the planned API operations.
1. Pass `--force` for a destructive or irreversible operation only after explicitly deciding to perform it.
1. Do not reveal one-time secrets unless the workflow explicitly requires their values.

The CLI validates supported workflows before mutating the API and returns actionable errors for invalid scopes, incomplete publishing details, unsupported versions, and other Marketplace rules.

## Additional resources

- [Marketplace CLI package on npm](https://www.npmjs.com/package/@gohighlevel/marketplace-cli)
- [Marketplace CLI source code](https://github.com/GoHighLevel/marketplace-cli)
- [Marketplace developer portal](https://marketplace.gohighlevel.com/)
- [Create a Marketplace app](https://marketplace.gohighlevel.com/docs/oauth/AppCreationGuide)
- [Test a Marketplace app](https://marketplace.gohighlevel.com/docs/oauth/AppTestingGuide)
