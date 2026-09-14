> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/get-bulk-action-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Bulk Action Campaign by ID

**Endpoint:** `GET /emails/locations/:locationId/campaigns/bulk-actions/:campaignId`

Get a single bulk action campaign by its ID

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

**campaignId**

string

required

Campaign ID

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredCampaign ID**source**stringSource of the campaign**sourceId**stringSource ID of the campaign**name**stringCampaign name**status**stringrequiredCampaign statusAvailable options`processing``scheduled``paused``complete``cancelled`**scheduleType**stringSchedule type (NOW, SCHEDULED, or DRIP)Available options`NOW``SCHEDULED``DRIP`**fromName**stringSender name**fromEmail**stringSender email address**subject**stringEmail subject line**replyToAddress**stringReply-to email address**previewText**stringPreview text**editorType**stringEditor type for this campaignAvailable options`html``builder``text`**isPlainText**booleanWhether the campaign uses plain text**editorContentUrl**stringURL to fetch the rendered campaign content as HTML. Issue a GET against this URL to retrieve the body.**deleted**booleanrequiredWhether the campaign is deleted**createdAt**stringrequiredCreated at timestamp**updatedAt**stringrequiredLast updated timestamp**completedAt**stringProcessing completion timestamp**traceId**stringTrace ID of the request

```json
{
  "id": "OI72xYec4Mho6VBykTvj",
  "source": "email-marketing",
  "sourceId": "115b9030-907c-474c-90a5-2debd838a024",
  "name": "Test Mail",
  "status": "complete",
  "scheduleType": "SCHEDULED",
  "fromName": "John Doe",
  "fromEmail": "john@example.com",
  "subject": "Welcome to our newsletter",
  "replyToAddress": "reply@example.com",
  "previewText": "Check out our latest updates",
  "editorType": "html",
  "isPlainText": false,
  "editorContentUrl": "https://storage.googleapis.com/email-templates/abc123.html",
  "deleted": false,
  "createdAt": "2025-07-24T11:55:43.598Z",
  "updatedAt": "2026-02-09T04:49:12.322Z",
  "completedAt": "2025-07-24T11:55:48.000Z",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
