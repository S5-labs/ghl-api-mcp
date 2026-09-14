> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/AppReviewGuidelines). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Publishing your App to HighLevel Marketplace

**App review guidelines to make your app public and gain discovery via the HighLevel Platform.**

## Overview

his document outlines the requirements for apps listed in the HighLevel App Marketplace. These requirements are designed to ensure consistency, security, performance, whitelabel compliance, and a high-quality user experience.

They apply to both Standard and Whitelabel apps, with specific branding requirements called out where applicable.

---

## 1. App Type Guidelines: Standard vs Whitelabel Apps

Before submitting your app, identify whether it is intended for:

### 1.1 Standard / Non-Whitelabel Apps

Standard apps are shown in the HighLevel Marketplace experience.

For Standard apps:

- Factual references to HighLevel are allowed where relevant.
- HighLevel references must not imply endorsement, certification, partnership, or ownership unless explicitly authorized.
- HighLevel or GHL logos, marks, and brand assets must not be used unless authorization has been provided.
- Public-facing content must remain accurate, professional, and non-misleading.

### 1.2 Whitelabel Apps

Whitelabel apps are shown in whitelabelled customer experiences where HighLevel branding must not appear.

For Whitelabel apps:

- Do not use **HighLevel**, **GHL**, or HighLevel-branded visuals in public-facing app content, installation flows, screenshots, videos, or embedded app experiences.
- Use neutral or approved terminology instead, such as:
  - **CRM**
  - **your CRM**
  - **LeadConnector**, where applicable
  - **business account**
  - **client account**
  - **users**
  - **businesses**
  - **clients**

Whitelabel compliance applies to all user-facing surfaces, including marketplace listing content, screenshots, videos, OAuth screens, setup pages, embedded apps, and support documentation shown to end users.

---

## 2. App Catalog Requirements

### 2.1 Naming & Branding

App names must not impersonate or replicate third-party brands unless authorization has been provided.

Recommended integration naming formats:

- `<Your Brand> for <Service>`
- `<Your Brand> - <Service> Integration`
- `Unofficial <Service> Tools by <Your Brand>`

Apps must not make false claims of endorsement, certification, partnership, or official status.

The publisher name must be visible and clearly associated with the app.

For unofficial integrations, avoid names that suggest the app is owned or operated by the third-party service.

---

### 2.2 Logos & Visual Identity

Third-party logos are restricted to authorized entities only.

Third-party logos must not be used in:

- App Logo
- Screenshots or videos in a way that implies ownership, partnership, or endorsement

Use text references or generic badges instead where needed.

For Whitelabel apps:

- Do not use HighLevel or GHL branding.
- Do not include HighLevel logos, GHL logos, or HighLevel-branded UI references.
- Use neutral terms such as **CRM**, **your CRM**, or **LeadConnector** where appropriate.

For Standard apps:

- HighLevel may be referenced factually where relevant.
- HighLevel brand assets should not be used unless explicitly authorized.

---

### 2.3 Disclaimers

Unofficial integrations must include a clear disclaimer.

Recommended disclaimer:

> “This app is not affiliated with or endorsed by Brand.”

The disclaimer should be visible in the app listing where users can reasonably understand the relationship between the app, the publisher, and the third-party service.

---

### 2.4 App Description

The app description must clearly explain:

- What the app does
- Who the app is for
- The value it provides
- Any additional costs, subscriptions, usage fees, or external account requirements
- Any important setup requirements

The app description must not include:

- Grammar or spelling errors
- Misleading claims
- Profanity
- Unsupported performance claims
- False partnership or endorsement claims
- Internal HighLevel terminology in public-facing copy

#### Internal terminology replacements

Avoid internal terminology in marketplace-facing or end-user-facing content.

| Avoid | Use instead |
| --- | --- |
| Sub-account | business account, client account, account, business |
| Agency | company, business, organization, client |
| Location | business, account, client account |
| GHL / HighLevel, for Whitelabel apps | CRM, your CRM, LeadConnector where applicable |
| Agency users | users, team members, client users |
| Sub-account users | users, business users, account users |

Example:

Instead of:

> “Connect this app to your sub-account.”

Use:

> “Connect this app to your business account.”

Instead of:

> “Built for agencies managing sub-accounts.”

Use:

> “Built for businesses and teams managing multiple client accounts.”

---

### 2.5 Media: Images & Videos

Images and videos must reflect the app’s actual functionality.

Media must:

- Show real or representative app flows
- Match the correct user context
- Use readable text
- Have good visual contrast
- Clearly show the UI without distortion or excessive cropping
- Avoid misleading before-and-after claims unless they are accurate and supportable

Media must not include:

- Internal terminology such as **sub-account** or **agency** in public-facing contexts
- Unapproved third-party logos or brand assets
- Misleading UI screens or functionality that does not exist
- HighLevel or GHL branding in Whitelabel app listings or Whitelabel user flows

For Whitelabel apps, use neutral references such as:

- **CRM**
- **your CRM**
- **LeadConnector**, where applicable
- **business account**
- **client account**
- **users**
- **businesses**

For Standard apps, factual HighLevel references are acceptable where relevant, provided they do not imply unauthorized endorsement or partnership.

---

## 3. Installation & Setup

Installation must complete without errors.

Setup instructions must be clearly documented and should include both:

- Internal setup steps required by the app publisher
- External setup steps required in third-party platforms, where applicable

OAuth-based apps must support the applicable installation types:

- Business/client account installs
- Bulk installs, where supported
- SaaS automated installs, where supported

Redirect URLs must:

- Use HTTPS
- Match a verified domain
- Be stable and production-ready
- Not redirect users through untrusted or unrelated domains

### 3.1 Whitelabel Installation Requirements

For Whitelabel apps:

- No HighLevel or GHL branding should appear during installation.
- Installation screens should use neutral terms such as **CRM**, **your CRM**, or **LeadConnector**, where appropriate.
- The app must not expose HighLevel-branded URLs, copy, visuals, or references to end users in Whitelabel contexts.

### 3.2 Standard Installation Requirements

For Standard apps:

- HighLevel may be referenced where needed to explain installation or connection steps.
- Any HighLevel references must be factual and must not imply official endorsement, partnership, or ownership unless approved.

---

## 4. Submission Review Materials

### 4.1 Loom Demo Requirement

A Loom demo is required as the final step in the app submission flow.

The Loom demo should clearly show the main user flows required to review the app.

The demo should include:

- App installation
- Setup or configuration steps
- Main app functionality
- Expected user outcome
- Any required third-party connection or authorization
- Error handling or edge cases, where relevant
- Uninstallation or disconnect flow, where applicable

For data sync apps, the Loom demo must also show:

- Data being created, updated, or synced
- The source and destination of the synced data
- Expected sync behavior
- How duplication or data corruption is prevented
- Sync timing, including expected latency where applicable

The Loom demo should be easy for the review team to follow without requiring additional explanation.

---

## 5. Performance & Reliability

### 5.1 Core Functionality

The app must work consistently as described in the marketplace listing.

Core functionality must be complete, testable, and available in the submitted version of the app.

Apps may be rejected if the listed functionality:

- Does not work
- Works only partially
- Requires undocumented setup
- Produces unexpected errors
- Differs materially from the marketplace description or demo

---

### 5.2 Performance Standards

The app UI must be responsive.

Common user actions should not have noticeable lag.

Apps should avoid:

- Long blocking loaders without explanation
- Broken states
- Repeated failed requests
- Unclear error messages
- UI freezes
- Excessive redirects

---

### 5.3 Data Sync Apps

Data sync apps must ensure:

- Data consistency
- No unintended duplication
- No data corruption
- Clear handling of failed sync attempts
- Clear retry or recovery behavior where applicable

---

### 5.4 Embedded Apps: iFrame / Custom Cards

Embedded apps must be fully responsive.

They must:

- Avoid horizontal scrolling
- Render correctly across common screen sizes
- Not override HighLevel navigation
- Handle internal navigation independently
- Avoid breaking the parent app experience
- Load securely inside the embedded context

For Whitelabel apps, embedded experiences must not expose HighLevel or GHL branding.

---

## 6. Security, Privacy & Compliance

### 6.1 Access Control

Apps must follow the Principle of Least Privilege.

OAuth apps must request only the scopes required for their functionality.

Developers must be able to justify requested scope usage during review.

Apps may be rejected if they request broad or unnecessary permissions without a clear functional reason.

---

### 6.2 Data Security

Secrets must not be exposed in client-side code.

This includes:

- API keys
- OAuth client secrets
- Access tokens
- Refresh tokens
- Signing secrets
- Private credentials

Tokens and credentials must be stored securely.

All production endpoints must:

- Use HTTPS
- Have valid TLS certificates
- Avoid insecure redirects
- Protect sensitive data in transit

Apps must not leak customer data through logs, browser consoles, public URLs, or client-side storage.

---

### 6.3 Embedded App Verification

Embedded apps must validate the parent frame using a secure context.

Apps should ensure that embedded content is loaded only in approved and expected environments.

Embedded apps must not trust client-side context alone for sensitive authorization decisions.

---

### 6.4 Legal Documentation

Privacy Policy and Terms of Service are not mandatory fields in the current submission flow.

However, developers are responsible for complying with applicable legal, privacy, and data protection requirements.

Where provided, the Privacy Policy should include:

- What data is collected
- Why the data is collected
- How data is stored
- How data is protected
- Whether data is shared with third-party processors
- Applicable compliance references, such as GDPR or CCPA, where relevant

Where provided, the Terms of Service should include:

- User responsibilities
- Acceptable use terms
- Liability limitations
- Intellectual property terms
- Subscription, payment, or cancellation terms, where applicable

HighLevel may request additional legal documentation during review depending on the app’s functionality, data access, or risk profile.

---

## 7. Support Requirements

Apps must provide at least one direct support channel.

At minimum, developers must provide either:

- Email support, or
- Phone support

Live chat may also be provided as an additional support option.

First response time for support inquiries must be no more than 24 hours.

Support must be provided directly by the app developer or publisher.

Apps must not redirect users to unrelated third-party support channels where the developer does not directly own or manage the support experience.

Support information must be accurate, active, and visible to users.

---

## 8. Uninstallation & Disconnection

Users must be clearly informed when the app is disconnected or uninstalled.

External apps must include a clear disconnect option.

When an external app is disconnected, the app must trigger the HighLevel Uninstall API where applicable.

The disconnect flow should clearly explain:

- What access will be removed
- Whether synced data will remain or be deleted
- Whether the user needs to take any additional action in the external platform
- Whether billing or subscription cancellation must be handled separately

For Whitelabel apps, disconnect messaging must not expose HighLevel or GHL branding.

---

## 9. Prohibited Apps

The following app types are not allowed:

- Apps acting as sub-marketplaces
- Undisclosed data extraction tools
- Duplicate apps with identical or near-identical functionality
- Apps built primarily for data harvesting
- Apps that mislead users about ownership, affiliation, or functionality
- Apps that impersonate third-party services
- Apps that violate intellectual property rights
- Apps that request permissions unrelated to their stated functionality
- Apps that hide important costs or external requirements

Apps may also be rejected if they create user confusion, platform risk, security risk, or marketplace quality concerns.

---

## 10. Fraud Prevention & Verification

HighLevel may verify developer identity and app ownership during review.

HighLevel may validate:

- Developer identity
- Domain ownership
- Support channels
- Redirect URLs
- Branding claims
- Third-party authorization claims
- App functionality
- OAuth scope usage
- Marketplace listing accuracy

Apps may be rejected for:

- Impersonation
- Misleading users
- Intellectual property violations
- False claims of partnership or endorsement
- Undisclosed data access
- Security concerns
- Whitelabel compliance violations

HighLevel may also delist or remove an app after approval at Marketplace discretion if post-approval complaints, security concerns, compliance issues, user harm, misleading behavior, or other marketplace quality concerns are identified.
