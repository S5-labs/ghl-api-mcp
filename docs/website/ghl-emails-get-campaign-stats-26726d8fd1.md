> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/get-campaign-stats). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Campaign Statistics

**Endpoint:** `GET /emails/locations/:locationId/campaigns/stats/:source/:sourceId`

Get statistics for email campaigns, workflows, or bulk actions

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location ID

**source**

string

required

Source type: email-campaigns, workflow-campaigns, or bulk-actions

Available options

`email-campaigns`

`workflow-campaigns`

`bulk-actions`

**sourceId**

string

required

Source ID of the email campaign, workflow campaign, or bulk action

**subSourceId**

string

Workflow action ID. Only valid when source is `workflow-campaigns`

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**locationId**stringrequiredLocation ID**source**stringrequiredSource typeAvailable options`email-campaigns``workflow-campaigns``bulk-actions`**sourceId**stringrequiredSource ID**subSourceId**stringWorkflow action ID**stats**objectrequiredEmail performance metrics**traceId**stringTrace ID of the request

```json
{
  "locationId": "abc123",
  "source": "email-campaigns",
  "sourceId": "campaign123",
  "subSourceId": "step001",
  "stats": {
    "sent": 1020,
    "accepted": 5,
    "delivered": 1000,
    "opened": 450,
    "clicked": 120,
    "unsubscribed": 5,
    "complained": 2,
    "permanentFail": 15,
    "temporaryFail": 3,
    "rejected": 10,
    "failed": 5,
    "replied": 25,
    "openRate": 45,
    "clickRate": 12,
    "unsubscribeRate": 0.5,
    "complaintRate": 0.2,
    "bounceRate": 1.76,
    "replyRate": 2.5
  },
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
