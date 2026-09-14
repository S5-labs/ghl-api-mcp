> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/upload-affiliate-tax-form). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upload affiliate tax form

**Endpoint:** `POST /affiliate-manager/:locationId/affiliates/:affiliateId/tax-form`

Upload a W-8 or W-9 document for an affiliate. Send the document as multipart/form-data; the storage location is assigned by the server.

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

Location Id

**affiliateId**

string

required

Affiliate Id

multipart/form-data

- multipart/form-data

- Body
- Example (auto)

### Body**required**

**file**string<binary>requiredTax form document. Allowed types: application/pdf. Maximum 5 MB.**formType**stringrequiredWhich tax form the uploaded document isAvailable options`w8Form``w9Form`

```json
{
  "file": "w9.pdf",
  "formType": "w8Form"
}
```

application/json

Tax form uploaded

- application/json

- Schema
- Example (auto)

**Schema**

**succeeded**booleanrequiredWhether the tax form was stored**affiliateId**stringrequiredAffiliate the form belongs to**formType**stringrequiredWhich tax form was storedAvailable options`w8Form``w9Form`

```json
{
  "succeeded": true,
  "affiliateId": "6336c7285ad8e6c08298f7fc",
  "formType": "w9Form"
}
```
