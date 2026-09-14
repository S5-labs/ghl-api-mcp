> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/get-email-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Email Campaign by ID

**Endpoint:** `GET /emails/locations/:locationId/campaigns/emails/:campaignId`

Get a single email campaign by its ID

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

**id**stringrequiredCampaign ID**source**stringSource of the campaign**sourceId**stringSource ID of the campaign**name**stringCampaign name**status**stringCampaign statusAvailable options`all``sent``failed``archived``draft``processing``scheduled``cancelled``paused`**campaignType**stringCampaign delivery type**campaignCategory**stringCampaign category**variations**object[]AB test variation identifiers (available only for AB test campaigns)**editorType**stringOriginal editor type the campaign was created withAvailable options`html``builder``text`**isPlainText**booleanWhether the campaign uses plain text**editorContentUrl**stringURL to fetch the rendered campaign content as HTML. Issue a GET against this URL to retrieve the body.**fromName**stringSender name**fromEmail**stringSender email address**subject**stringEmail subject line**replyToAddress**stringReply-to email address**previewText**stringPreview text**deleted**booleanrequiredWhether the campaign is deleted**createdAt**stringrequiredCreated at timestamp**updatedAt**stringrequiredLast updated timestamp**traceId**stringTrace ID of the request

```json
{
  "id": "67f15c2ae99226d5bcccb8f3",
  "source": "email-campaign",
  "sourceId": "bulkRequest_abc123",
  "name": "February Newsletter",
  "status": "sent",
  "campaignType": "bulk-email",
  "campaignCategory": "normal",
  "variations": [
    {
      "sourceId": "9MhVcU7dTdLI7XOU1Vdt",
      "isWinner": true
    }
  ],
  "editorType": "html",
  "isPlainText": false,
  "editorContentUrl": "https://storage.googleapis.com/email-templates/abc123.html",
  "fromName": "John Doe",
  "fromEmail": "john@example.com",
  "subject": "Welcome to our newsletter",
  "replyToAddress": "reply@example.com",
  "previewText": "Check out our latest updates",
  "deleted": false,
  "createdAt": "2025-07-24T11:55:43.598Z",
  "updatedAt": "2026-02-09T04:49:12.322Z",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
