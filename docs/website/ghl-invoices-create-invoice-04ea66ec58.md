> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/create-invoice). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Invoice

**Endpoint:** `POST /invoices/`

API to create an invoice

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

**altId**stringrequiredlocation Id / company Id based on altType**altType**stringrequiredAlt TypeAvailable options`location`**name**stringrequiredInvoice Name**businessDetails**objectrequired**currency**stringrequiredCurrency code**items**object[]requiredAn array of items for the invoice.**discount**objectrequired**termsNotes**stringTerms notes, Also supports HTML markups**title**stringTitle for the invoice**contactDetails**objectrequiredContact information to send the invoice to**invoiceNumber**stringInvoice Number**issueDate**stringrequiredIssue date in YYYY-MM-DD format**dueDate**stringDue date in YYYY-MM-DD format**sentTo**objectrequired**liveMode**booleanrequired**automaticTaxesEnabled**booleanAutomatic taxes enabled for the Invoice**paymentSchedule**objectsplit invoice into payment schedule summing up to full invoice amount**lateFeesConfiguration**objectlate fees configuration**tipsConfiguration**objecttips configuration for the invoice**invoiceNumberPrefix**stringprefix for invoice number**paymentMethods**objectPayment Methods for Invoices**attachments**object[]attachments for the invoice**miscellaneousCharges**objectmiscellaneous charges for the invoice

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "name": "New Invoice",
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
      "taxInclusive": true
    }
  ],
  "discount": {
    "value": 10,
    "type": "percentage",
    "validOnProductIds": "[ '6579751d56f60276e5bd4154' ]"
  },
  "termsNotes": "<p>This is a default terms.</p>",
  "title": "INVOICE",
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
  "invoiceNumber": "1001",
  "issueDate": "2023-01-01",
  "dueDate": "2023-01-14",
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
  "liveMode": true,
  "automaticTaxesEnabled": true,
  "paymentSchedule": {
    "type": "percentage",
    "schedules": [
      "string"
    ]
  },
  "lateFeesConfiguration": {
    "enable": true,
    "value": 10,
    "type": "fixed",
    "frequency": {
      "intervalCount": 10,
      "interval": "day"
    },
    "grace": {
      "intervalCount": 10,
      "interval": "day"
    },
    "maxLateFees": {
      "type": "fixed",
      "value": "10"
    }
  },
  "tipsConfiguration": {
    "tipsPercentage": [
      5,
      10,
      15
    ],
    "tipsEnabled": true
  },
  "invoiceNumberPrefix": "INV-",
  "paymentMethods": {
    "stripe": {
      "enableBankDebitOnly": false
    }
  },
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

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredInvoice Id**status**stringrequiredInvoice StatusAvailable options`draft``sent``payment_processing``paid``void``partially_paid`**liveMode**booleanrequiredLive Mode**amountPaid**numberrequiredAmount Paid**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**name**stringrequiredName of the invoice**businessDetails**objectrequiredBusiness Details**invoiceNumber**numberrequiredInvoice Number**currency**stringrequiredCurrency**contactDetails**objectrequiredContact Details**issueDate**stringrequiredIssue date in YYYY-MM-DD format**dueDate**stringrequiredDue date in YYYY-MM-DD format**discount**objectDiscount**invoiceItems**string[]requiredInvoice Items**total**numberrequiredTotal Amount**title**stringrequiredTitle**amountDue**numberrequiredTotal Amount Due**createdAt**stringrequiredcreated at**updatedAt**stringrequiredupdated at**automaticTaxesEnabled**booleanAutomatic taxes enabled for the Invoice**automaticTaxesCalculated**booleanIs Automatic taxes calculated for the Invoice items**paymentSchedule**objectsplit invoice into payment schedule summing up to full invoice amount

```json
{
  "_id": "6578278e879ad2646715ba9c",
  "status": "draft",
  "liveMode": false,
  "amountPaid": 0,
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "name": "New Invoice",
  "businessDetails": {
    "name": "Alex",
    "address": {
      "addressLine1": "9931 Beechwood",
      "city": "St. Houston",
      "state": "TX",
      "countryCode": "USA",
      "postalCode": "559-6993"
    },
    "phoneNo": "+1-214-559-6993",
    "website": "www.example.com"
  },
  "invoiceNumber": "19",
  "currency": "USD",
  "contactDetails": {
    "id": "c6tZZU0rJBf30ZXx9Gli",
    "phoneNo": "+1-214-559-6993",
    "email": "alex@example.com",
    "customFields": [],
    "name": "Alex",
    "address": {
      "countryCode": "US"
    }
  },
  "issueDate": "2023-01-01",
  "dueDate": "2023-01-01",
  "discount": {
    "type": "percentage",
    "value": 0
  },
  "invoiceItems": [
    {
      "taxes": [],
      "_id": "c6tZZU0rJBf30ZXx9Gli",
      "productId": "c6tZZU0rJBf30ZXx9Gli",
      "priceId": "c6tZZU0rJBf30ZXx9Gli",
      "currency": "USD",
      "name": "Macbook Pro",
      "qty": 1,
      "amount": 999
    }
  ],
  "total": 999,
  "title": "INVOICE",
  "amountDue": 999,
  "createdAt": "2023-12-12T09:27:42.355Z",
  "updatedAt": "2023-12-12T09:27:42.355Z",
  "automaticTaxesEnabled": true,
  "automaticTaxesCalculated": true,
  "paymentSchedule": {}
}
```
