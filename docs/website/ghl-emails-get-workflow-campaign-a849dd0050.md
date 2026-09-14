> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/get-workflow-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Workflow Campaign by ID

**Endpoint:** `GET /emails/locations/:locationId/campaigns/workflows/:campaignId`

Get a single workflow campaign by its ID

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

**id**stringrequiredCampaign ID**name**stringCampaign name**status**stringCampaign statusAvailable options`published``draft`**source**stringSource of the campaign**sourceId**stringSource ID of the campaign**subSources**object[]Sub-sources (email-sending steps) within this workflow. Each entry's `id` can be passed as the `subSourceId` query parameter to the campaign stats endpoint to retrieve per-step stats.**deleted**booleanWhether the campaign is deleted**createdAt**stringrequiredCreated at timestamp**updatedAt**stringrequiredUpdated at timestamp**traceId**stringTrace ID of the request

```json
{
  "id": "693bd14ea6b50a8df0180e9a",
  "name": "sorting workflow",
  "status": "published",
  "source": "workflow",
  "sourceId": "115b9030-907c-474c-90a5-2debd838a024",
  "subSources": [
    {
      "id": "a3f1c0e2-6d4b-4f3a-9c1e-7b2d8f5a4c01",
      "name": "Send welcome email",
      "subject": "Welcome to our newsletter",
      "fromName": "John Doe",
      "fromEmail": "john@example.com",
      "previewText": "Check out our latest updates",
      "editorType": "html",
      "isPlainText": false,
      "editorContentUrl": "https://storage.googleapis.com/email-templates/abc123.html",
      "createdAt": "2025-12-12T08:24:46.700Z",
      "updatedAt": "2026-01-23T05:58:48.453Z"
    },
    {
      "id": "b7d9e4f1-2a0c-4f8e-bf2a-5e1d3c9b6a02",
      "name": "Follow-up after 3 days",
      "subject": "Quick follow-up",
      "fromName": "John Doe",
      "fromEmail": "john@example.com",
      "editorType": "builder",
      "isPlainText": false,
      "createdAt": "2025-12-13T10:15:22.300Z",
      "updatedAt": "2026-01-20T09:42:11.100Z"
    }
  ],
  "deleted": false,
  "createdAt": "2025-12-12T08:24:46.700Z",
  "updatedAt": "2026-01-23T05:58:48.453Z",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
