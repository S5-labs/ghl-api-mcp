> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/get-email-template). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Email Template by ID

**Endpoint:** `GET /emails/locations/:locationId/templates/:templateId`

Get a single email template by its ID

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

**templateId**

string

required

Template ID

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredTemplate ID**name**stringrequiredTemplate name**editorType**stringrequiredEditor typeAvailable options`html``builder``text`**isPlainText**booleanrequiredWhether template is plain text**parentFolderId**stringParent folder ID**fromName**stringSender name**fromEmail**stringSender email address**subject**stringEmail subject line**previewText**stringPreview text**editorContentUrl**stringURL to fetch the rendered template content as HTML. Issue a GET against this URL to retrieve the body.**deleted**booleanrequiredWhether the template is deleted**createdAt**stringCreated timestamp**updatedAt**stringUpdated timestamp**traceId**stringTrace ID of request

```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "Newsletter Template",
  "editorType": "html",
  "isPlainText": false,
  "parentFolderId": "67f15c2ae99226d5bcccb8f0",
  "fromName": "John Doe",
  "fromEmail": "john@example.com",
  "subject": "Welcome to our newsletter",
  "previewText": "Email preview text",
  "editorContentUrl": "https://storage.googleapis.com/email-templates/abc123.html",
  "deleted": false,
  "createdAt": "2025-07-24T11:55:43.598Z",
  "updatedAt": "2025-07-24T11:55:43.598Z",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
