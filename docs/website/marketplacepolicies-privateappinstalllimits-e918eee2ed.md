> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/MarketplacePolicies/PrivateAppInstallLimits). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Developer Policy: Private App Distribution Limit (with Security Review Path)

## Effective date

Applies to Private apps created on or after **18 November 2025**.

## Purpose

Private apps are for small pilots, not broad distribution. This policy limits how widely a Private app can be installed. For legitimate enterprise/regulated scenarios, a Security Review path lets you remain private while lifting the cap.

---

## Summary

- **Cap:** A Private app may be installed in up to 5 Agencies.
- **Block:** At 6 or more Agencies, new installs are blocked. Existing installs continue to work.
- **Sub‑accounts don’t count:** One Agency = one count, regardless of how many Sub‑accounts are installed.
- **Unblock options:** Either publish publicly (listed) or request a Security Review (available after you hit 6+). If you pass, your app remains private and the cap is lifted for that app.

---

## Key definitions

- **Agency:** Top‑level HighLevel account.
- **Sub‑account** (formerly “Location”): Child account under an Agency;*all Sub‑accounts under one Agency count as one toward the cap.
- **Bulk install:** Installing to multiple Sub‑accounts in one action; still counts as one Agency.
- **Active install (real time):** If uninstalled from all Sub‑accounts within an Agency, that Agency stops counting immediately.
- **App ID:** Limits apply per App ID across all versions.
- **Anti‑evasion:** HighLevel may aggregate counts for materially similar apps intended to circumvent this policy.

> Tip for developers: Use install‑lifecycle webhooks to track installs, uninstalls, and Sub‑account changes.

---

## Thresholds and behavior

| State | Condition | What happens |
| --- | --- | --- |
| **OK** | ≤ **3** Agencies | No warnings; new installs proceed. |
| **Approaching** | **4–5** Agencies | **Warning** (amber). Installs continue; plan to publish or prepare Security Review materials. |
| **Blocked** | ≥ **6** Agencies (unreviewed) | **New installs are blocked** (red). Existing installs continue. Choose **Publish publicly** or **Request Security Review**. |

### Install experience

- **Agency view when blocked:** “Install unavailable. Please contact the app developer.”
- **After Security Review pass:** A small note indicates the app is Security reviewed; installs proceed beyond 5 while remaining Private.

### Real‑time enforcement

Counts update in real time as installs/uninstalls occur.

---

## Security Review

### When you can request

Only **after you exceed the cap** (installs in **6 or more Agencies**).

### What you submit

- **End‑to‑end demo video URL (install + core flows):** In this video, provide a complete end‑to‑end demo of the app.
- **Scopes‑justification video URL:** Explain why your app needs each requested scope/permission.
- **Why the app must remain private:** Short written rationale (≥ **20** characters).
- **Optional:** Test credentials and any additional details.
- **Acknowledgement:** Confirm the submission reflects the current app state.

### Outcomes

- **Approved:** The cap is lifted for that app; it may remain Private.
- **Not approved / Changes required:** New installs remain blocked at 6+ until you publish publicly or resubmit and pass.

### Re‑review

If you later make material changes (e.g., scopes, domains, or data flows), HighLevel may require a re‑review. Until re‑approved, new installs may be restricted.

---

## Publishing publicly

You can remove the Private cap by publishing as **Public (listed)**.

### How to publish

1. Open your app in **My Apps**.
1. Click **Start Public (listed) review**.
1. Under **Listing configuration**, set **App type = Public**.
1. Complete listing details, scopes, and support info.
1. Submit for review; track updates via email/product notifications.

### Public listing requirements

- **Listing & Brand:** App name & tagline; logo/icon; **3–6** screenshots; short (≤ **160** chars) and detailed description; categories/tags.
- **Policy & Trust:** Privacy Policy URL; Terms of Service URL; data‑usage summary; security contact email.
- **Support & Success:** Support email and URL; response times/hours; optional demo video or quick‑start guide.
- **Technical:** Correct OAuth scopes + justification; redirect URLs configured; working install/uninstall behavior; clear error states; release notes; test credentials if requested.

> Note: Private apps often skip marketing assets; these are required for Public review.

---

## Where you’ll see this in product

- **Create App → App type = Private**<br> “Private is for small pilots. If your app is installed in **6 or more** agencies, new installs are blocked until you **publish** or **pass Security Review**.”
- **My Apps**
  - **Warning** at **4–5** (amber).
  - **Blocked** at **6+** (red) with actions: **Start Public review** or **Request Security Review**.
  - Notifications are sent on threshold changes (no daily spam).

---

## Converting between Public and Private

| Conversion | Behavior |
| --- | --- |
| **Public → Private** | Allowed anytime. The Private cap applies immediately. If you already have **6+** Agencies, new installs are **blocked** until you pass review or switch back to Public. |
| **Private → Public (listed)** | Use **Start Public review**. Once listed, the Private cap **no longer applies**. |

---

## Examples

- **Pilot: 3 Agencies** → OK
- **Growing: 4–5 Agencies** → Warning “Publish soon”; installs continue
- **Breach: 6+ Agencies (unreviewed)** → New installs blocked; existing continue; choose Publish or Request Security Review
- **6+ Agencies (Security Review passed)** → App remains Private; cap lifted; installs proceed
- **Public → Private with 10 Agencies** → Conversion allowed; new installs blocked unless you pass Security Review (or remain Public)

---

## Legacy scope

Private apps created before **18 November 2025** are out of scope (no warnings or blocks) unless later migrated into this policy.

---

## Optional: Bulk Installation (Public apps)

If your Public app is meant for deployment across many Sub‑accounts, enable Bulk Installation so an Agency can install to multiple Sub‑accounts in one action. *(This does not affect counting rules for Private apps.)*

---

## FAQs

**Do Sub‑accounts count separately?**<br> No. They count once per Agency, even with bulk install.

**Will existing customers be disrupted if I hit the cap?**<br> No. Existing installs continue. Only new installs are blocked.

**Can I request Security Review before I reach 6 Agencies?**<br> No. The request becomes available after you hit 6 or more.

**If I pass Security Review, do I have to go Public later?**<br> No. Passing Security Review lifts the cap while you remain Private. Material changes may require a re‑review.

**Can I publish publicly instead of requesting review?**<br> Yes. Once listed as Public, the Private cap no longer applies.

**What about “similar” apps used to work around the cap?**<br> Not permitted. HighLevel may aggregate counts across materially similar apps and enforce this policy.

**Need help?** Email us on **[marketplace@gohighlevel.com](mailto:marketplace@gohighlevel.com)**

---

## Versioning & change log

- **v1 (18 Nov 2025):** Breadth‑only cap: **5** Agencies; warn at **4–5**; block at **6+**; real‑time enforcement.
- **v1.1 (24 Nov 2025):** Added **Security Review** path that can lift the cap while remaining **Private**; clarified notices and examples.

---

## Change management

HighLevel may update this policy. Material changes will be announced with reasonable notice before taking effect.
