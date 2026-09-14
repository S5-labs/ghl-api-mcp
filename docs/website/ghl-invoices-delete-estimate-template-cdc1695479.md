> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-estimate-template). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Estimate Template

**Endpoint:** `DELETE /invoices/estimate/template/:templateId`

Delete an existing estimate template

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

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location"
}
```

application/json

Successfully deleted

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
