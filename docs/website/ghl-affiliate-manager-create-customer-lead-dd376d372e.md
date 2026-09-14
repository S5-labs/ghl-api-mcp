> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/create-customer-lead). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create customer lead

**Endpoint:** `POST /affiliate-manager/:locationId/affiliates/:affiliateId/lead/create`

Create or update a lead for an affiliate customer.

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**firstName**stringFirst Name**lastName**stringLast Name**email**stringrequiredemail**phone**stringphone**campaignId**stringrequiredCampaign Id**contactId**stringCRM contact identifier

```json
{
  "firstName": "John",
  "lastName": "Deo",
  "email": "john@deo.com",
  "phone": "+91 88888 88888",
  "campaignId": "ve9EPM428h8vShlRW1KT",
  "contactId": "ve9EPM428h8vShlRW1KT"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredCustomer identifier**locationId**stringrequiredLocation identifier**affiliateId**stringrequiredAffiliate identifier**campaignId**stringrequiredCampaign identifier**contactId**stringrequiredContact identifier**firstName**stringCustomer first name**lastName**stringCustomer last name**email**stringCustomer email address**phone**stringCustomer phone number**type**stringCustomer typeAvailable options`lead``customer``dropped`**subscriptionId**stringSubscription identifier**dueAt**string<date-time>Customer due date**deleted**booleanrequiredWhether the customer is deleted**isDisabled**booleanrequiredWhether the customer is disabled**createdAt**string<date-time>Customer creation timestamp**updatedAt**string<date-time>Customer update timestamp

```json
{
  "_id": "ve9EPM428h8vShlRW1KT",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "affiliateId": "ve9EPM428h8vShlRW1KT",
  "campaignId": "ve9EPM428h8vShlRW1KT",
  "contactId": "ve9EPM428h8vShlRW1KT",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+15551234567",
  "type": "customer",
  "subscriptionId": "sub_123",
  "dueAt": "2026-01-01T00:00:00.000Z",
  "deleted": false,
  "isDisabled": true,
  "createdAt": "2026-01-01T00:00:00.000Z",
  "updatedAt": "2026-01-01T00:00:00.000Z"
}
```
