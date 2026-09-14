> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/AgencyVsSubAccount). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Understanding HighLevel’s Go-To-Market Model

HighLevel is not a standalone SaaS platform sold directly to end-users. Instead, our core customers are digital marketing agencies and consultants who:

- Purchase HighLevel licenses to power their portfolio of marketing, sales, and service tools.
- White-label the platform under their own branding and custom domains.
- Resell access and services built on HighLevel to their small-business clients.

As an app developer in the HighLevel ecosystem, it’s crucial to understand this multi-tiered relationship. Your app isn’t just being sold to an end business—it’s being sold to agencies, who then package and brand it before offering it to their clients.

---

## 1. Agencies as HighLevel’s Primary Customers

### License Holders

Agencies subscribe to HighLevel’s platform at the agency level. Each agency account can host multiple “sub-accounts” (often one per SMB client).

### Revenue Streams

- **Platform Subscription:** Agencies pay a monthly fee for HighLevel itself, often tiered by the number of sub-accounts or feature set.
- **App Marketplace Purchases:** Agencies can purchase third-party apps (built by you) on a per-sub-account or usage-based pricing model.
- **Add-On Services:** Some agencies offer managed services—campaign setup, consulting, or custom development—for additional fees.

### Scale Through Reselling

Agencies bundle your app’s functionality into their own service packages.

---

## 2. White-Labeling: Agencies as the Face of the Platform

HighLevel empowers agencies to present the platform—and any integrated apps—as their own proprietary software:

### Custom Branding

- **Logo & Color Scheme:** Agencies replace HighLevel’s default logo and colors with their own.
- **Email & SMS Sender IDs:** Messages are sent from the agency’s branded domains rather than HighLevel’s.

### Custom Domains

Every agency can map a domain or sub-domain (e.g., `crm.agencyname.com`) so that their clients never see HighLevel’s domain.

### UI Obfuscation

Core HighLevel footers, help links, and login screens can be rebranded or removed, further hiding HighLevel from the end client.

**Result:** SMB clients often believe they’re using the agency’s in-house platform rather than a third-party solution—and agencies control the entire client relationship.

---

## 3. What This Means for App Developers

### Your Buyer Is the Agency

- All communication, billing discussions, and support happen through the agency.
- Feature requests often come from agencies who want to bundle your app into their own service offerings.

### Revenue Share & Billing

- HighLevel handles billing directly with agencies, collects payment, then remits to you per agreed revenue-share terms.
- You’ll see payouts based on installations or usage by sub-accounts, but your contract is with HighLevel (the agency’s vendor).

---

## 4. Tips for Thriving in the HighLevel Ecosystem

- **Pricing Flexibility:** Support usage-based or per-sub-account plans so agencies can profitably resell to businesses of all sizes.
- **Agency-Centric Documentation:** Write your docs and tutorials with white-label protection in mind—show them how to train their clients quickly.
- **Co-Brandable Assets:** Provide white-label versions of screenshots, videos, and PDF one-pagers.
- **Develop White-Label Features:** If your app can inherit or respect the agency’s branding settings, it will integrate more seamlessly.
- **Partner Programs:** Consider running joint webinars or trainings with top HighLevel agencies to drive installs.

---

By understanding that agencies are both your direct customers and the gatekeepers to SMB end users, you can tailor your app's features, pricing, and marketing to align with their white-label reselling business model—and maximize adoption across the HighLevel network.
