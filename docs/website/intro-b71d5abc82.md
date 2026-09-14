> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/intro). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Introduction

Welcome to the API documentation. This developer portal is your reference for integrating with our platform programmatically — automating workflows, syncing data, and building custom applications on top of the REST API.

## What you can do

The API gives you secure, programmatic access to core platform resources, including:

- **Contacts** — create, update, search, and manage records.
- **Conversations & Messaging** — send and receive messages across channels.
- **Calendars & Appointments** — manage availability and bookings.
- **Payments** — handle orders, transactions, and subscriptions.
- **Webhooks** — subscribe to real-time events and react to changes as they happen.

## How it works

The API is organized around standard REST conventions:

- Predictable, resource-oriented URLs.
- JSON-encoded request and response bodies.
- Standard HTTP response codes to indicate success or failure.
- OAuth 2.0 for secure, scoped authorization.

## Authentication

All requests are authenticated using **OAuth 2.0**. You'll exchange your credentials for an access token, then include that token in the `Authorization` header of each request:

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Access tokens are scoped, so an application only receives the permissions it has been granted.

## Getting started

1. **Create an app** to obtain your client credentials.
1. **Authorize** and exchange your credentials for an access token.
1. **Make your first request** to a resource endpoint.
1. **Subscribe to webhooks** to receive real-time updates.

Use the navigation sidebar to explore the full API reference. Each endpoint includes request parameters, example payloads, and live code samples in multiple languages.
