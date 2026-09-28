> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/managed-agents). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Managed Agents

Published Managed Agent discovery and execution

## 📄️List published Managed Agents

Returns only Managed Agents with a published production version in the authorized sub-account.

## 📄️Get a published Managed Agent

Returns public metadata for a published production Managed Agent. Unknown, unpublished, and cross-location identifiers return 404.

## 📄️Execute a published Managed Agent

Runs one JSON turn against the published production snapshot. Omit sessionId on the first turn and pass the returned sessionId on subsequent turns. Reuse the same Idempotency-Key only when retrying the exact same logical turn. For a 429 response, retry that key only when retryable is true and Retry-After is present.
