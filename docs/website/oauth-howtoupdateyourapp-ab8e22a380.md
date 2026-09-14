> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# How to Update Your App

This document explains how app versioning and updates work in the HighLevel Marketplace, using simple language and clear steps. It is meant for developers publishing or updating apps.

---

## 1. What Is App Versioning?

App versioning lets you create new versions of your app instead of changing the live app directly.

Each version keeps its own history, status, and review record. This makes updates safer for users and easier for developers to manage.

This replaces the old system where updates overwrote the same app record.

---

## 2. Purpose

Versioning solves several longstanding issues:

- No more overwriting live production apps.
- Developers can prepare changes in a draft without impacting users.
- Agencies/Sub-accounts see exactly what changed before updating.
- Trust & Safety gains clearer auditability and version review history.
- Updates become safer, controlled, and easier to test.

---

## 3. Versioning System – How It Works

Apps now have multiple explicit versions with lifecycle statuses. Developers work on a new version without modifying the live one.

### Available Version States

- **Draft** – Editable working copy. *(Version = `draft`)*
- **In Review** – Submitted to Marketplace review *(non-private apps only)*.
- **Live** – Approved and installable.
- **Deprecated** – Scheduled for removal and later uninstallation.
- **Disapproved** – Rejected review; behaves like a draft.

info

Drafts can’t be deleted immediately. After you click Delete, it may take some time for the deletion to complete.

### Version Limits

To keep things clean and safe, these limits apply:

- Only **one** **Draft** or **Disapproved** version at a time
- Maximum **5 total versions** per app
- *(In Review + Deprecated + Live) ≤ 5*
- *(In Review + Disapproved + Draft) = 1*

These rules prevent unfinished or risky versions from piling up.

---

## 4. Creating a New Version (Draft)

To start a new version:

1. Open your app and go to the **Versions** tab
1. On the latest **Live** version, click **Clone as Draft**
1. A new **Draft** version is created

You cannot create another draft until the current **Draft** or **Disapproved** version is resolved.

info

As of today, if your app already has three versions, you must deprecate one version before you can release a patch update. Once the version is deprecated, you can proceed with publishing the patch.

---

## 5. Publishing an Update

When your draft is ready, publish it by following these steps.

### Step 1 — Choose a Version Type

HighLevel uses Semantic Versioning (`x.y.z`):

- **Major** – Breaking or incompatible changes
- **Minor** – New features that don’t break existing behavior
- **Patch** – Bug fixes only

### Step 2 — Add Release Notes

Release notes explain what changed.

**Required:**

- Agency Release Notes *(mandatory)*

**Optional:**

- Sub-Account Release Notes *(shown when provided)*

Clear release notes help users decide whether to update.

### Step 3 — Review or Go Live

What happens next depends on your app type:

- **Public Apps** → Sent for Marketplace review. The update goes live only after approval.
- **Private Apps** → Go live immediately *(no review)*.

info

**Important:** Private App Install Limits apply at the **app level**, not the version level.

If your app has already reached its install limit (for example, 5 installs on an older version), new versions cannot be installed until the app is reviewed and approved.

See [**Private App Install Limits**](https://marketplace.gohighlevel.com/docs/MarketplacePolicies/PrivateAppInstallLimits) for details.

---

## 6. Major vs Minor vs Patch — What Users Experience

| Update Type | What It Means | User Experience |
| --- | --- | --- |
| **Major** | Breaking changes | User must confirm before updating; manual update required |
| **Minor** | Backward-compatible features | Normal update flow |
| **Patch** | Bug fixes | Safe update; usually seamless |

info

**Important Module Note:** If you update modules *(except Custom Page)*, publish as a **Major** update.

Modules do not automatically update for existing installs. Users must manually update or reinstall.

---

## 7. What Users See When an Update Is Live

When a new version is **Live**:

- Users see an **Update** button
- **What’s New?** shows the release notes
- **Major** updates may show a confirmation screen

This avoids surprise changes and builds trust.

---

## 8. Deprecating Old Versions

You can schedule a **Live** version for removal.

**Rules:**

- Minimum **3-day notice**
- On the deprecation date:
  - The version is removed
  - All installs using that version are automatically uninstalled

Deprecation prevents outdated or unsafe versions from lingering.

---

## 9. Future Milestones

- As of today, if your app already has three versions, you must deprecate one version before you can release a patch update. Once the version is deprecated, you can proceed with publishing the patch. We’re working to make this more flexible, and in the near future you’ll be able to release patch and minor updates without having to deprecate any live versions of your app.
- As of today, changes to a module apply to the app as a whole, not to a specific app version. That means if you edit an existing module and click Save, the update can become visible to end-users immediately—even if you did not publish a new version. When introducing new module functionality (for example, new actions or triggers), package those changes as a Major version release rather than editing live behavior directly. Validate module changes in a private app (or equivalent non-production environment) before applying them to a live app. Treat direct edits in a live app as production-impacting. We are working on to ensure module changes can be scoped to a specific app version, so unpublished work does not affect end-users.
- As of today, pricing changes currently apply only to new installations. Existing installs won’t automatically reflect pricing changes based on version status. We are working to enable pricing changes to apply based on version (not only to new installs), so pricing and versioning behave consistently.

---

## Contact Us

If you have any questions or concerns:

- Email us: `marketplace@gohighlevel.com`
- Fill out the [**Marketplace Support Form**](https://developers.gohighlevel.com/support)
