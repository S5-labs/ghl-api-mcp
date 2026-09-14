> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/import-email-template). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Import an email template

**Endpoint:** `POST /emails/locations/:locationId/templates/import`

Import a template from a provider URL

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

**importProvider**stringrequiredImport provider (URL-based providers only)Available options`mailchimp``active_campaign`**importUrl**stringrequiredPublic import URL**name**stringTemplate name**parentFolderId**stringParent folder ID**userId**stringID of the user performing this action

```json
{
  "importProvider": "mailchimp",
  "importUrl": "https://templates.example.com/public/template-123",
  "name": "Imported Template",
  "parentFolderId": "67f15c2ae99226d5bcccb8f0",
  "userId": "507f1f77bcf86cd799439011"
}
```

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredTemplate ID**name**stringrequiredTemplate name**editorType**stringrequiredEditor typeAvailable options`html``text`**isPlainText**booleanrequiredWhether template is plain text**parentFolderId**stringParent folder ID**fromName**stringSender name**fromEmail**stringSender email address**subjectLine**stringEmail subject line**previewText**stringPreview text**previewUrl**stringPreview URL**createdAt**stringCreated timestamp**updatedAt**stringUpdated timestamp**traceId**stringTrace ID of request

```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "Newsletter Template",
  "editorType": "html",
  "isPlainText": false,
  "parentFolderId": "67f15c2ae99226d5bcccb8f0",
  "fromName": "John Doe",
  "fromEmail": "john@example.com",
  "subjectLine": "Welcome to our newsletter",
  "previewText": "Email preview text",
  "previewUrl": "https://example.com/preview/template123",
  "createdAt": "2025-07-24T11:55:43.598Z",
  "updatedAt": "2025-07-24T11:55:43.598Z",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
