> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/update-estimate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Estimate

**Endpoint:** `PUT /invoices/estimate/:estimateId`

Update an existing estimate with new details

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

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**name**stringrequiredEstimate Name**businessDetails**objectrequired**currency**stringrequiredCurrency code**items**object[]requiredAn array of items for the estimate.**liveMode**booleanlivemode for estimate**Default value:**`true`**discount**objectrequired**termsNotes**stringTerms notes, Also supports HTML markups**title**stringTitle for the estimate**contactDetails**objectrequiredContact information to send the estimate to**estimateNumber**numberEstimate Number, if not specified will take in the next valid estimate number**issueDate**stringissue date estimate**expiryDate**stringexpiry date estimate**sentTo**objectEmail and sent to details for the estimate**automaticTaxesEnabled**booleanAutomatic taxes enabled for the Estimate**Default value:**`false`**meta**objectMeta data for the estimate**sendEstimateDetails**objectWhen sending estimate directly while saving**frequencySettings**objectrequiredfrequency settings for the estimate**estimateNumberPrefix**stringPrefix for the estimate number**Default value:**`EST-`**userId**stringUser Id**attachments**object[]attachments for the invoice**autoInvoice**objectAuto invoice for the estimate**miscellaneousCharges**objectmiscellaneous charges for the estimate**paymentScheduleConfig**objectPayment Schedule Config for the estimate**estimateStatus**stringEstimate StatusAvailable options`all``draft``sent``accepted``declined``invoiced``viewed`

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "name": "Home Service Estimate",
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
    {
      "name": "ABC Product",
      "description": "ABC Corp.",
      "productId": "6578278e879ad2646715ba9c",
      "priceId": "6578278e879ad2646715ba9c",
      "currency": "USD",
      "amount": 999,
      "qty": 1,
      "taxes": [
        {
          "_id": "string",
          "name": "string",
          "rate": 0,
          "calculation": "exclusive",
          "description": "string",
          "taxId": "string"
        }
      ],
      "automaticTaxCategoryId": "6578278e879ad2646715ba9c",
      "isSetupFeeItem": true,
      "type": "one_time",
      "taxInclusive": true,
      "attachments": [
        "https://example.com/file1.jpg",
        "https://example.com/file2.png"
      ]
    }
  ],
  "liveMode": true,
  "discount": {
    "value": 10,
    "type": "percentage",
    "validOnProductIds": "[ '6579751d56f60276e5bd4154' ]"
  },
  "termsNotes": "<p>This is a default terms.</p>",
  "title": "ESTIMATE",
  "contactDetails": {
    "id": "6578278e879ad2646715ba9c",
    "name": "Alex",
    "phoneNo": "+1234567890",
    "email": "alex@example.com",
    "additionalEmails": [
      {
        "email": "alex@example.com"
      }
    ],
    "companyName": "ABC Corp.",
    "address": {
      "addressLine1": "9931 Beechwood",
      "addressLine2": "Beechwood",
      "city": "St. Houston",
      "state": "TX",
      "countryCode": "US",
      "postalCode": "559-6993"
    },
    "customFields": [
      "string"
    ]
  },
  "estimateNumber": 1001,
  "issueDate": "2024-08-07",
  "expiryDate": "2024-08-10",
  "sentTo": {
    "email": [
      "alex@example.com"
    ],
    "emailCc": [
      "alex@example.com"
    ],
    "emailBcc": [
      "alex@example.com"
    ],
    "phoneNo": [
      "+1-214-559-6993"
    ]
  },
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
  "frequencySettings": {
    "enabled": true,
    "schedule": {
      "executeAt": "string",
      "rrule": {
        "intervalType": "monthly",
        "interval": 2,
        "startDate": "2023-01-01",
        "startTime": "20:45:00",
        "endDate": "2029-11-01",
        "endTime": "18:45:00",
        "dayOfMonth": 15,
        "dayOfWeek": "mo",
        "numOfWeek": -1,
        "monthOfYear": "jan",
        "count": 10,
        "daysBefore": 5,
        "useStartAsPrimaryUserAccepted": true,
        "endType": "by"
      }
    }
  },
  "estimateNumberPrefix": "EST-",
  "userId": "6578278e879ad2646715ba9c",
  "attachments": [
    {
      "id": "6241712be68f7a98102ba272",
      "name": "Electronics.pdf",
      "url": "https://example.com/digital-delivery",
      "type": "string",
      "size": 10000
    }
  ],
  "autoInvoice": {
    "enabled": true,
    "directPayments": true
  },
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
  },
  "paymentScheduleConfig": {
    "type": "fixed",
    "dateConfig": {
      "depositDateType": "estimate_accepted",
      "scheduleDateType": "regular_interval"
    },
    "schedules": [
      null
    ]
  },
  "estimateStatus": "sent"
}
```

application/json

Successfully updated

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
