> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/working-hours). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Working Hours

Documentation for AI Employees API

## 📄️Get Agent Working Hours

Retrieves the working-hours configuration for an AI agent: the weekly schedule, the channels it applies to, the timezone mode, and the off-hours auto-reply and follow-up settings.

## 📄️Create Agent Working Hours

Creates the working-hours configuration for an AI agent. Returns 409 when one already exists — use the update endpoint to replace it.

## 📄️Update Agent Working Hours

Fully replaces the working-hours configuration for an AI agent. Returns 404 when none exists yet — use the create endpoint first. This is a replace, not a merge: omitted fields are not preserved.

## 📄️Delete Agent Working Hours

Deletes the working-hours configuration for an AI agent. The agent then replies at any time. Succeeds with deleted=false when there was nothing to delete.
