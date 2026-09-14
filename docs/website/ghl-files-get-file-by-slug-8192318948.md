> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/files/get-file-by-slug). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get File

**Endpoint:** `GET /files/d/:slug`

Get the file by slug.

## Request

**slug**

string

required

Share-link slug identifying the file.

application/json

Returns a short-lived download URL and the file's metadata.

- application/json

- Schema
- Example (auto)
- Example

**Schema**

**url**stringrequiredShort-lived, signed URL to download the file.**asset_id**stringrequiredIdentifier of the file.**content_type**stringrequiredMIME type of the file.**filename**stringrequiredOriginal filename.**size**integer<int64>requiredFile size in bytes.**allow_download**booleanrequiredWhether the file may be downloaded.

```json
{
  "url": "https://assets-registry.leadconnectorhq.com/5DP4iH6HLkQsiKESj6rh/4DkigiMRTkqxyAcHwGnO/document/YQPAlfnG8Hzptjg59Anv/019ee07c-564f-785b-bc68-305b4fe30768?Expires=1782375949&KeyName=assets-registry-key&Signature=tnFXYal8xDNonieCM6i4HngcUEM=",
  "asset_id": "019ee07c-564f-785b-bc68-305b4fe30768",
  "content_type": "application/pdf",
  "filename": "🗃️ A Sample File - 11.pdf",
  "size": 18810,
  "allow_download": true
}
```

```json
{
  "allow_download": true,
  "asset_id": "019ee07c-564f-785b-bc68-305b4fe30768",
  "content_type": "application/pdf",
  "filename": "🗃️ A Sample File - 11.pdf",
  "size": 18810,
  "url": "https://assets-registry.leadconnectorhq.com/5DP4iH6HLkQsiKESj6rh/4DkigiMRTkqxyAcHwGnO/document/YQPAlfnG8Hzptjg59Anv/019ee07c-564f-785b-bc68-305b4fe30768?Expires=1782375949&KeyName=assets-registry-key&Signature=tnFXYal8xDNonieCM6i4HngcUEM="
}
```
