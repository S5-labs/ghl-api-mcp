# GHL API Documentation Review — Master Task List

*Updated: March 2026 | Source: GHL API v2 Official Documentation*

This document catalogs all available GoHighLevel API sections and tracks our documentation review progress. The complete API catalog was sourced from the [official GHL API v2 GitHub repository](https://github.com/GoHighLevel/highlevel-api-docs).

---

## Summary

| Status | Count | Documents |
|--------|-------|-----------|
| ✅ Completed | 7 groups / 33 API sections | 7 review documents |
| ⏳ Pending | 0 | — |
| **Total** | **33 API sections / ~370 endpoints** | **7 documents** |

---

## ✅ Completed Reviews

### Group 1 — CRM Objects & Data Model
*Document: `GHL_Custom_Objects_Fields_Review.md`*

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Custom Fields V2** | 8 | `customFields.readonly`, `customFields.write` |
| **Objects (Custom Objects)** | 9 | `objects/schema.readonly`, `objects/records.readonly`, `objects/records.write` |
| **Associations** | 7 | `associations.readonly`, `associations.write` |

---

### Group 2 — Contacts
*Document: `GHL_Contacts_API_Review.md`*

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Contacts** | 30+ | `contacts.readonly`, `contacts.write` |

Includes: Core CRUD, Search (with `searchAfter` cursor pagination), Notes, Tasks, Tags, Appointments, Campaigns, Workflows, Followers, Bulk Actions.

---

### Group 3 — Core CRM & Business
*Document: `GHL_Core_CRM_Business_API_Review.md`*

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Businesses** | 5 | `businesses.readonly`, `businesses.write` |
| **Companies** | 1 | `companies.readonly` |
| **Sub-Accounts (Locations)** | 29 | `locations.readonly`, `locations.write` |
| **Users** | 7 | `users.readonly`, `users.write` |

---

### Group 4 — Scheduling & Communication
*Document: `GHL_Scheduling_Communication_API_Review.md`*

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Calendars** | 34 | `calendars.readonly`, `calendars.write`, `calendars/events.readonly` |
| **Conversations** | 19 | `conversations.readonly`, `conversations.write`, `conversations/message.readonly` |
| **Emails** | 5 | `emails.readonly`, `emails.write` |
| **Email ISV** | 1 | `email-isv.readonly` |
| **Phone System** | 2 | `phone-system.readonly`, `phone-system.write` |
| **Voice AI** | 11 | `voice-ai.readonly`, `voice-ai.write` |

---

### Group 5 — Marketing & Content
*Document: `GHL_Marketing_Content_API_Review.md`*

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Blogs** | 7 | `blogs.readonly`, `blogs.write` |
| **Campaigns** | 1 | `campaigns.readonly` |
| **Courses** | 1 | `courses.readonly` |
| **Forms** | 3 | `forms.readonly` |
| **Funnels** | 7 | `funnels.readonly` |
| **Trigger Links** | 6 | `links.readonly`, `links.write` |
| **Media Library** | 7 | `medias.readonly`, `medias.write` |
| **Social Media Posting** | 40 | `social-media-posting.readonly`, `social-media-posting.write` |
| **Surveys** | 2 | `surveys.readonly` |

---

### Group 6 — Sales & Commerce
*Document: `GHL_Sales_Commerce_API_Review.md`*

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Invoices** | 41 | `invoices.readonly`, `invoices.write` |
| **Opportunities** | 10 | `opportunities.readonly`, `opportunities.write` |
| **Payments** | 24 | `payments.readonly`, `payments.write` |
| **Products** | 27 | `products.readonly`, `products.write` |
| **Proposals (Documents & Contracts)** | 4 | `proposals.readonly`, `proposals.write` |
| **Store** | 18 | `store.readonly`, `store.write` |

---

### Group 7 — Platform & Automation
*Document: `GHL_Platform_Automation_API_Review.md`*

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Custom Menus** | 5 | `custom-menus.readonly`, `custom-menus.write` |
| **Marketplace** | 7 | `marketplace.readonly`, `marketplace.write` |
| **SaaS API** | 22 | `saas/company.readonly`, `saas/company.write` |
| **Snapshots** | 4 | `snapshots.readonly` |
| **Workflows** | 1 | `workflows.readonly` |

---

## Notes on Agencies API

The `agencies.json` file in the GHL API v2 repository contains no documented endpoints (`"paths": {}`). The Agency-level API appears to use the legacy `https://api.msgsndr.com` base URL rather than `https://services.leadconnectorhq.com`. Agency-level operations are primarily handled through the Sub-Accounts (Locations) API using an Agency Token.

---

*Source: [GHL API v2 GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs/tree/main/apps)*
