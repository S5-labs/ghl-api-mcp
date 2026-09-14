> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/send-estimate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Send Estimate

**Endpoint:** `POST /invoices/estimate/:estimateId/send`

API to send estimate by estimate id

## Request

**Version**

string

required

API Version

Available options

`v3`

**estimateId**

string

required

Estimate Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**action**stringrequiredAvailable options`sms_and_email``send_manually``email``sms`**liveMode**booleanrequiredlivemode for estimate**userId**stringrequiredPlease ensure that the UserId corresponds to an authorized personnel, either by an employee ID or agency ID, to access this location. This account will serve as the primary channel for all future communications and updates.**sentFrom**objectsender details for invoice, valid only if invoice is not sent manually**estimateName**stringestimate name

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "action": "sms_and_email",
  "liveMode": true,
  "userId": "6578278e879ad2646715ba9c",
  "sentFrom": {
    "fromName": "Alex",
    "fromEmail": "alex@example.com"
  },
  "estimateName": "Estimate"
}
```

application/json

Created

- application/json

- Schema
- Example (auto)

**Schema**

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**_id**stringrequiredUnique identifier**liveMode**booleanrequiredIndicates if it is in live mode**deleted**booleanrequiredIndicates if deleted**name**stringrequiredName**currency**stringrequiredCurrency code**businessDetails**objectrequiredBusiness details associated with the estimate**items**array[]requiredAn array of items**discount**objectrequiredDiscount details for the estimate template**title**stringTitle**estimateNumberPrefix**stringEstimate number prefix**attachments**object[]Attachments**updatedBy**stringUser Id of who last updated**total**numberrequiredTotal amount**createdAt**string<date-time>requiredTimestamp when created**updatedAt**string<date-time>requiredTimestamp when last updated**__v**numberrequiredVersion number**automaticTaxesEnabled**booleanrequiredIndicates if automatic taxes are enabled for this estimate**termsNotes**stringTerms and conditions for the estimate, supports HTML markup**companyId**stringrequiredCompany identifier associated with the estimate**contactDetails**objectrequiredContact details for the estimate**issueDate**string<date-time>requiredDate when the estimate was issued**expiryDate**string<date-time>requiredDate when the estimate expires**sentBy**stringUser who sent the estimate**automaticTaxesCalculated**booleanrequiredIndicates if automatic taxes were calculated**meta**objectrequiredAdditional metadata associated with the estimate**estimateActionHistory**string[]requiredHistory of actions taken on the estimate**sentTo**objectrequiredRecipient details for the estimate**frequencySettings**objectrequiredFrequency settings for recurring estimates**lastVisitedAt**string<date-time>requiredTimestamp when the estimate was last visited**totalamountInUSD**numberrequiredTotal amount in USD**autoInvoice**objectAuto-invoice settings for the estimate**traceId**stringrequiredTrace ID for logging and debugging

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "_id": "67ac9a51106ee8311e911XXXX",
  "liveMode": true,
  "deleted": false,
  "name": "Estimate Name",
  "currency": "USD",
  "businessDetails": {
    "logoUrl": "your_image-url",
    "name": "Business name",
    "address": {
      "addressLine1": "address line 1",
      "city": "Test City",
      "state": "State Name",
      "countryCode": "US",
      "postalCode": "12345"
    },
    "phoneNo": "+1 1234567890",
    "website": "www.example.com",
    "customValues": [
      {
        "name": "Test",
        "fieldKey": "{{custom_values.test}}",
        "id": "5DYTWoiQvWiIJZXX44XXX",
        "value": "Test's Custom Value"
      }
    ]
  },
  "items": [
    {
      "taxes": [],
      "taxInclusive": false,
      "_id": "67ac9a51106ee8311e911XXXX",
      "description": "<p>Futuristic anti-gravity racing</p>",
      "currency": "USD",
      "productId": "67ac9a51106ee8311e911XXXX",
      "priceId": "67ac9a51106ee8311e911XXXX",
      "amount": 9.99,
      "qty": 1,
      "name": "TEST",
      "type": "one_time"
    },
    {
      "taxes": [
        {
          "_id": "67ac9a51106ee8311e911XXXX",
          "name": "TaxTwo",
          "rate": 8.5,
          "calculation": "exclusive"
        }
      ],
      "taxInclusive": true,
      "_id": "67ac9a51106ee8311e911XXXX",
      "productId": "67ac9a51106ee8311e911XXXX",
      "priceId": "67ac9a51106ee8311e911XXXX",
      "currency": "USD",
      "name": "TEST2",
      "qty": 1,
      "amount": 500,
      "description": "",
      "type": "recurring"
    }
  ],
  "discount": {
    "type": "percentage",
    "value": 0
  },
  "title": "ESTIMATE",
  "estimateNumberPrefix": "EST-",
  "attachments": [
    {
      "id": "6241712be68f7a98102ba272",
      "name": "Electronics.pdf",
      "url": "https://example.com/digital-delivery",
      "type": "string",
      "size": 10000
    }
  ],
  "updatedBy": "3HIpOF9NIc5ltriQXXXX",
  "total": 1222.03,
  "createdAt": "2025-02-12T13:17:47.416Z",
  "updatedAt": "2025-02-12T13:17:47.416Z",
  "__v": 0,
  "automaticTaxesEnabled": false,
  "termsNotes": "<p>All services are subject to availability.</p>",
  "companyId": "COMP12345",
  "contactDetails": {
    "id": "jvzfKTNdE7OYXXXXXX",
    "name": "Contact Name",
    "phoneNo": "+911111111114",
    "email": "email@test.com",
    "address": {
      "countryCode": "US"
    }
  },
  "issueDate": "2023-06-15T00:00:00.000Z",
  "expiryDate": "2023-07-15T00:00:00.000Z",
  "sentBy": "user@example.com",
  "automaticTaxesCalculated": true,
  "meta": {
    "key": "value"
  },
  "estimateActionHistory": [
    {
      "action": "Created",
      "timestamp": "2023-06-15T10:00:00.000Z"
    }
  ],
  "sentTo": {
    "email": [
      "test@example.com"
    ],
    "phoneNo": [
      "+1 99444444444"
    ]
  },
  "frequencySettings": {
    "enabled": false
  },
  "lastVisitedAt": "2023-06-20T08:30:00.000Z",
  "totalamountInUSD": 1500.75,
  "autoInvoice": {
    "enabled": true,
    "directPayments": false
  },
  "traceId": "010c7a01-857f-4619-970d-xyxyxyxy"
}
```
