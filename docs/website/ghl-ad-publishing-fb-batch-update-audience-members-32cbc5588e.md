> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-batch-update-audience-members). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Batch update audience members

**Endpoint:** `PUT /ad-publishing/facebook/custom-audience/:audienceId/member/batch`

Add or remove members in bulk from a Facebook custom audience, sourced from a CSV or one or more smart lists — at least one of `csvPath` or `smartlistIds` is required. The work is queued rather than performed inline, so the acknowledgement confirms only that the job was accepted; nothing about the outcome is reported here. Unlike the single-member endpoints this one answers with `{ success: true }` rather than a status-and-message body.

## Request

**Version**

string

required

API Version

Available options

`v3`

**audienceId**

string

required

Custom audience identifier

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation identifier**csvPath**stringCSV file path**operationType**stringrequiredBatch operation typeAvailable options`ADD``REMOVE``REPLACE`**smartlistIds**string[]Smartlist IDs array**dynamicAudience**stringDynamic audience flag

```json
{
  "locationId": "loc_abc123",
  "csvPath": "/uploads/audience.csv",
  "operationType": "ADD",
  "smartlistIds": [
    "list_1",
    "list_2"
  ],
  "dynamicAudience": "true"
}
```

application/json

Acknowledgement that the bulk update was queued

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredTrue when the operation succeeded

```json
{
  "success": true
}
```
