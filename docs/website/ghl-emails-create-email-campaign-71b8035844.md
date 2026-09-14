> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/create-email-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Email Campaign

**Endpoint:** `POST /emails/locations/:locationId/campaigns/emails`

Create a new email campaign

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringrequiredCampaign name**editorType**stringrequiredEditor type for the campaign content. Use `html` for code-editor campaigns or `text` for plain-text campaigns.Available options`html``text`**templateId**stringExisting template ID to create the campaign from. Omit this field to create a blank campaign.**editorContent**stringOptional initial editor content to persist immediately after campaign creation. Provide HTML or plain-text string content.**parentFolderId**stringParent folder ID**timeZone**stringrequiredTimezone for the campaign**userId**stringrequiredID of the user performing this action**userName**stringName of the user performing this action

```json
{
  "name": "Untitled campaign name",
  "editorType": "html",
  "templateId": "507f1f77bcf86cd799439011",
  "editorContent": "<html><body>Hello World</body></html>",
  "parentFolderId": "67f15c2ae99226d5bcccb8f0",
  "timeZone": "Asia/Kolkata",
  "userId": "507f1f77bcf86cd799439099",
  "userName": "John Doe"
}
```

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredCampaign ID**source**stringSource of the campaign**sourceId**stringSource ID of the campaign**name**stringCampaign name**status**stringCampaign statusAvailable options`all``sent``failed``archived``draft``processing``scheduled``cancelled``paused`**campaignType**stringCampaign type**campaignCategory**stringCampaign category**variations**object[]AB test variation identifiers (available only for AB test campaigns)**deleted**booleanrequiredWhether the campaign is deleted**createdAt**stringrequiredCreated at timestamp**updatedAt**stringrequiredLast updated timestamp**traceId**stringTrace ID of request

```json
{
  "id": "67f15c2ae99226d5bcccb8f3",
  "source": "email-campaign",
  "sourceId": "bulkRequest_abc123",
  "name": "February Newsletter",
  "status": "sent",
  "campaignType": "bulk-email",
  "campaignCategory": "email-campaign",
  "variations": [
    {
      "sourceId": "9MhVcU7dTdLI7XOU1Vdt",
      "isWinner": true
    }
  ],
  "deleted": false,
  "createdAt": "2025-07-24T11:55:43.598Z",
  "updatedAt": "2026-02-09T04:49:12.322Z",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
