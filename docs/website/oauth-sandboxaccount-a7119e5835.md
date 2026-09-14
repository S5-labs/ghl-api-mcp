> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/SandboxAccount). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# GHL Marketplace Sandbox Accounts: Setup and Usage Guide

## Overview

A Sandbox account is a non-production HighLevel environment created for Marketplace developers. Use it to build, test, and validate apps and integrations without affecting production systems or customer data.

Sandbox accounts are:

- Isolated from production
- Rate-limited
- Governed by Sandbox Fair Use guidelines
- Intended only for development, testing, and demos.

## What is a Sandbox Account?

A Sandbox account is a HighLevel test environment that lets developers:

- Develop and test Marketplace apps and integrations
- Validate behavior safely using test data
- Avoid impact to real customer accounts or live systems

## Eligibility: Who Can Create a Sandbox Account?

Sandbox accounts are available to:

- Marketplace developers building **private** or **public** apps
- Technology partners integrating with **HighLevel APIs**
- Developers testing:
  - **Private Integration Tokens (PITs)**
  - Marketplace app behavior

info

Sandbox access is tied to the **Marketplace Developer account**.

## How to Create a Sandbox Account

Sandbox accounts are created in the **GHL Marketplace Developer Portal**.

### Steps

1. Log in to the **Marketplace Developer Portal**.
1. In the top navigation, click **Testing**.
1. Click **+ Create App Test Account**.
1. In the **Create App Test Account** modal:
  - Enter an **Account / Agency Name**
  - Set a **Password**
1. Click **Create**.

### Result

- The Sandbox account is provisioned **immediately**.
- The account appears in the **Testing** environment.

## How to Access the Sandbox Account

After creation:

- The Sandbox account works as a **standalone HighLevel account**.
- Log in using the **credentials** set during creation.
- The account is **clearly identified** as a test environment.
- **Trial access to Enterprise features** is enabled for testing.

## Sandbox Account Lifetime (Active Duration)

Sandbox accounts are meant for **temporary development and testing**.

- A Sandbox account remains active for up to **6 months** from the **creation date**.
- After 6 months:
  - The Sandbox account **may be deactivated**
  - Developers can **request reactivation** if needed
- A Sandbox account may be deactivated **earlier** if it violates [**Sandbox Fair Use guidelines**](https://marketplace.gohighlevel.com/docs/MarketplacePolicies/SandBoxFUP)

## How to Use Sandbox for App Development

Use Sandbox accounts to:

- Develop and test **Marketplace apps** (private or public)
- Test **Private Integration Tokens (PITs)**
- Validate API:
  - Authentication
  - Scopes
  - Permissions
- Test:
  - Workflows
  - Automations
  - Webhooks (at **low volume**)
- Perform functional testing with **test or mock data**

Sandbox environments are best for **end-to-end validation** before moving to **production**.
