> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/update-invoice-late-fees-configuration). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update invoice late fees configuration

**Endpoint:** `PATCH /invoices/:invoiceId/late-fees-configuration`

API to update invoice late fees configuration by invoice id

## Request

**Version**

string

required

API Version

Available options

`v3`

**invoiceId**

string

required

Invoice Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredlocation Id / company Id based on altType**altType**stringrequiredAlt TypeAvailable options`location`**lateFeesConfiguration**objectrequiredlate fees configuration

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
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
