> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/update-estimate-template). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Estimate Template

**Endpoint:** `PUT /invoices/estimate/template/:templateId`

Update an existing estimate template

## Request

**Version**

string

required

API Version

Available options

`v3`

**templateId**

string

required

Template Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**name**stringrequiredEstimate Name**businessDetails**objectrequired**currency**stringrequiredCurrency code**items**array[]requiredAn array of items for the estimate.**liveMode**booleanlivemode for estimate**Default value:**`true`**discount**objectrequired**termsNotes**stringTerms notes, Also supports HTML markups**title**stringTitle for the estimate**automaticTaxesEnabled**booleanAutomatic taxes enabled for the Estimate**Default value:**`false`**meta**objectMeta data for the estimate**sendEstimateDetails**objectWhen sending estimate directly while saving**estimateNumberPrefix**stringPrefix for the estimate number**Default value:**`EST-`**attachments**object[]attachments for the invoice**miscellaneousCharges**objectmiscellaneous charges for the estimate

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "name": "Home Service Estimate Template",
  "businessDetails": {
    "logoUrl": "https://example.com/logo.png",
    "name": "ABC Corp.",
    "phoneNo": "+1-214-559-6993",
    "address": "9931 Beechwood, TX",
    "website": "wwww.example.com",
    "customValues": [
      "string"
    ]
  },
  "currency": "USD",
  "items": [
    null
  ],
  "liveMode": true,
  "discount": {
    "value": 10,
    "type": "percentage",
    "validOnProductIds": "[ '6579751d56f60276e5bd4154' ]"
  },
  "termsNotes": "<p>This is a default terms.</p>",
  "title": "ESTIMATE",
  "automaticTaxesEnabled": true,
  "meta": {
    "key": "value"
  },
  "sendEstimateDetails": {
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
  },
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
  "miscellaneousCharges": {
    "charges": [
      null
    ],
    "collectedMiscellaneousCharges": 10,
    "paidCharges": [
      {
        "name": "Processing Fee",
        "charge": 10,
        "amount": 10,
        "_id": "673d01d7d547648a8dab6211"
      }
    ]
  }
}
```

application/json

Successfully updated

- application/json

- Schema
- Example (auto)

**Schema**

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**_id**stringrequiredUnique identifier**liveMode**booleanrequiredIndicates if it is in live mode**deleted**booleanrequiredIndicates if deleted**name**stringrequiredName**currency**stringrequiredCurrency code**businessDetails**objectrequiredBusiness details associated with the estimate**items**array[]requiredAn array of items**discount**objectrequiredDiscount details for the estimate template**title**stringTitle**estimateNumberPrefix**stringEstimate number prefix**attachments**object[]Attachments**updatedBy**stringUser Id of who last updated**total**numberrequiredTotal amount**createdAt**string<date-time>requiredTimestamp when created**updatedAt**string<date-time>requiredTimestamp when last updated**__v**numberrequiredVersion number**automaticTaxesEnabled**booleanrequiredIndicates if automatic taxes are enabled for this estimate**termsNotes**stringTerms and conditions for the estimate, supports HTML markup

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
  "termsNotes": "<p>All services are subject to availability.</p>"
}
```
