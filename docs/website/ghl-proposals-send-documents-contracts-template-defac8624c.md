> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/proposals/send-documents-contracts-template). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Send template

**Endpoint:** `POST /proposals/templates/send`

Send template to a client

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**templateId**stringrequiredTemplate Id**userId**stringrequiredUser Id**sendDocument**booleanSend Document**locationId**stringrequiredLocation Id**contactId**stringrequiredContact Id**opportunityId**stringOpportunity Id

```json
{
  "templateId": "hTlkh7t8gujsahgg93",
  "userId": "hTlkh7t8gujsahgg93",
  "sendDocument": true,
  "locationId": "hTlkh7t8gujsahgg93",
  "contactId": "hTlkh7t8gujsahgg93",
  "opportunityId": "hTlkh7t8gujsahgg93"
}
```

application/json

Document sent successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status**links**object[]requiredLinks for all recipients

```json
{
  "success": true,
  "links": [
    {
      "referenceId": "550e8400-e29b-41d4-a716-446655440000",
      "documentId": "c1e87a91-93b2-4b78-821f-85cf0e1f925b",
      "recipientId": "u240JcS0E5qE0ziHnwMm",
      "entityName": "contacts",
      "recipientCategory": "recipient",
      "documentRevision": 1,
      "createdBy": "b6d8fa28-1112-4dc7-b9d2-f22b75a477ea",
      "deleted": false
    }
  ]
}
```
