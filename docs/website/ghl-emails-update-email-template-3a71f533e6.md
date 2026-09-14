> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/update-email-template). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update an email template

**Endpoint:** `PATCH /emails/locations/:locationId/templates/:templateId`

Update email template

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

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringTemplate name**editorContent**stringEditor content to update. Required only when updating template content, and must be provided together with editorType. Provide HTML or plain-text string content.**editorType**stringType of editor content. Required only when updating template content, and must be provided together with editorContent.Available options`html``text`**previewText**stringPreview text**subjectLine**stringEmail subject line**fromName**stringSender name**fromEmail**stringSender email address**archived**booleanWhether template is archived**parentFolderId**stringParent folder ID. Pass `null` to move template to the root level.**userId**stringID of the user performing this action

```json
{
  "name": "Newsletter Template",
  "editorContent": "<html><body>Hello World</body></html>",
  "editorType": "html",
  "previewText": "Email preview text",
  "subjectLine": "Welcome to our newsletter",
  "fromName": "John Doe",
  "fromEmail": "john@example.com",
  "archived": false,
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

**id**stringrequiredTemplate ID**name**stringrequiredTemplate name**archived**booleanrequiredWhether template is archived**fromName**stringrequiredSender name**fromEmail**stringrequiredSender email address**subjectLine**stringrequiredEmail subject line**previewText**stringrequiredPreview text**previewUrl**stringrequiredPreview URL**editorType**stringTemplate typeAvailable options`html``text`**isPlainText**booleanWhether template is plain text**parentFolderId**stringParent folder ID**updatedAt**stringLast updated timestamp**createdAt**stringCreated timestamp**traceId**stringTrace ID of request

```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "My Email Template",
  "archived": false,
  "fromName": "John Doe",
  "fromEmail": "john@example.com",
  "subjectLine": "Welcome to our newsletter",
  "previewText": "Check out our latest updates",
  "previewUrl": "https://example.com/preview/template123",
  "editorType": "html",
  "isPlainText": false,
  "parentFolderId": "67f15c2ae99226d5bcccb8f0",
  "updatedAt": "2025-07-24T11:55:43.598Z",
  "createdAt": "2025-07-24T11:55:43.598Z",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
