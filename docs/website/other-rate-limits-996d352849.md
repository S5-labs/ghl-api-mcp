> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/other/rate-limits). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Rate Limits

HighLevel applies rate limits to the public API 2.0 endpoints authenticated with OAuth, to keep performance and stability predictable for everyone.

## The limits

Limits are counted **per Marketplace app (client) per resource** — a resource being a single Location (sub-account) or Company (agency).

| Limit | Allowance | Window |
| --- | --- | --- |
| Burst | 100 API requests | per 10 seconds |
| Daily | 200,000 API requests | per day |

Because the quota is scoped per app *per resource*, installing on more sub-accounts does not divide your allowance — each install gets its own budget.

> Example. GHL-APP is installed on two sub-accounts, A and B. Against sub-account A it may make 200,000 requests per day and 100 requests per 10 seconds; against sub-account B it may make the same again, independently.

## Tracking your usage

Every API response carries headers describing your current position against both limits. Read them rather than counting requests yourself — they are authoritative.

| Header | Meaning |
| --- | --- |
| `X-RateLimit-Limit-Daily` | Your daily limit |
| `X-RateLimit-Daily-Remaining` | Requests remaining for the day |
| `X-RateLimit-Interval-Milliseconds` | The time interval for burst requests |
| `X-RateLimit-Max` | The maximum request limit in that interval |
| `X-RateLimit-Remaining` | Requests remaining in the current interval |
