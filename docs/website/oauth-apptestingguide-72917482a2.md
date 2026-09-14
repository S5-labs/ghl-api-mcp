> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/AppTestingGuide). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# App Testing Guide

This guide walks you through testing a Marketplace App in HighLevel using Sandbox (App Test) accounts. It covers how to create and use a test environment, install and validate your app, and verify key behaviors like OAuth, scopes, API calls, webhooks, and workflows. It’s written to be practical and easy to follow, so you can catch issues early, iterate quickly, and confidently ship to production.

## What you’ll test

By the end of this document, you will have:

- A Sandbox (App Test) account created and ready for testing
- Your Marketplace App installed in a test account (private or public flow)
- OAuth verified end-to-end (authorization, redirect, token exchange)
- Scopes and permissions validated against real API behavior
- Core API flows tested (example: create/update contacts, fetch locations, trigger workflows)
- Webhooks tested (subscription setup + event delivery + signature/verification, if applicable)
- A repeatable checklist you can run before publishing or releasing a new version
