> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/create-email-template). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create an email template

**Endpoint:** `POST /emails/locations/:locationId/templates`

Create a new email template

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

**name**stringrequiredTemplate name**editorType**stringrequiredEditor type for the new template. Use `html` for code-editor templates or `text` for plain-text templates.Available options`html``text`**editorContent**stringOptional initial editor content. Provide HTML or plain-text string content.**parentFolderId**stringParent folder ID**subjectLine**stringEmail subject line**fromName**stringSender name**fromEmail**stringSender email address**previewText**stringPreview text**userId**stringID of the user performing this action

```json
{
  "name": "Newsletter Template",
  "editorType": "html",
  "editorContent": "<html><body>Hello World</body></html>",
  "parentFolderId": "67f15c2ae99226d5bcccb8f0",
  "subjectLine": "Welcome to our newsletter",
  "fromName": "John Doe",
  "fromEmail": "john@example.com",
  "previewText": "Email preview text",
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
