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

**conversationId**stringConversation Id**contactId**stringContact Id**workflowId**stringWorkflow Id**campaignId**stringCampaign Id**locationId**stringrequired**attachmentUrls**string[]required

```json
{
  "conversationId": "ve9EPM428h8vShlRW1KT",
  "contactId": "ve9EPM428h8vShlRW1KT",
  "workflowId": "ve9EPM428h8vShlRW1KT",
  "campaignId": "ve9EPM428h8vShlRW1KT",
  "locationId": "string",
  "attachmentUrls": [
    "string"
  ]
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
