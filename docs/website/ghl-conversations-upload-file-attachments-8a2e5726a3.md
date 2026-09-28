> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/upload-file-attachments). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upload file attachments

**Endpoint:** `POST /conversations/messages/upload`

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "fileAttachment". <br><br> **Note:** One of conversationId or contactId must be provided. <br><br> **File Size Limits:**

- Maximum file size: 5 MB
- Maximum files per upload: 5

<br>

**Allowed file types:**

<br>

<br>

**Images:**

<br>

<br>

**Videos:**

<br>

<br>

**Audio:**

<br>

<br>

**Documents:**

<br>

<br>

**Archives:**

<br>

<br>

**Other:**

<br>

<br>

<br>

<br>

**Secure attachments:**

`isSecureAttachment`

`true`

**email channel only**

<br>

<br>

`/files/d/{slug}`

`{slug}`

`GET /files/d/{slug}`

`files.readonly`

<br>

<br>

**Note:**

`isSecureAttachment`

## Request

**Version**

string

required

API Version

Available options

`v3`

multipart/form-data

- multipart/form-data

- Body
- Example (auto)

### Body**required**

**conversationId**stringConversation Id**contactId**stringContact Id**workflowId**stringWorkflow Id**campaignId**stringCampaign Id**locationId**stringrequired**attachmentUrls**string[]required**isSecureAttachment**stringSet to true to upload the file as a secure attachment. Defaults to false. Currently supported for the email channel only; support for the remaining conversation channels is coming. A secure attachment URL is publicly accessible for one hour after upload, after which the file must be fetched with GET /files/d/{slug} using the files.readonly OAuth scope. Considered only until 30 November 2026; from that date every upload is stored as a secure attachment and this field is ignored.**Default value:**`false`

```json
{
  "conversationId": "ve9EPM428h8vShlRW1KT",
  "contactId": "ve9EPM428h8vShlRW1KT",
  "workflowId": "ve9EPM428h8vShlRW1KT",
  "campaignId": "ve9EPM428h8vShlRW1KT",
  "locationId": "string",
  "attachmentUrls": [
    "string"
  ],
  "isSecureAttachment": "false"
}
```

application/json

Uploaded the file successfully

- application/json

- Schema
- Example (auto)

**Schema**

**uploadedFiles**objectrequired

```json
{
  "uploadedFiles": {}
}
```
