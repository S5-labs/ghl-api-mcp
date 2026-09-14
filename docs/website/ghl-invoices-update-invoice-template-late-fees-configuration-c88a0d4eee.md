> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/update-invoice-template-late-fees-configuration). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update template late fees configuration

**Endpoint:** `PATCH /invoices/template/:templateId/late-fees-configuration`

API to update template late fees configuration by template id

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

**_id**stringrequiredTemplate Id**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**name**stringrequiredName of the Template**businessDetails**objectrequiredBusiness Details**currency**stringrequiredCurrency**discount**objectDiscount**items**string[]requiredInvoice Items**invoiceNumberPrefix**stringprefix for invoice number**total**numberrequiredTotal Amount**createdAt**stringrequiredcreated at**updatedAt**stringrequiredupdated at

```json
{
  "_id": "6578278e879ad2646715ba9c",
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "name": "New Template",
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
  "currency": "USD",
  "discount": {
    "type": "percentage",
    "value": 0
  },
  "items": [
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
  "invoiceNumberPrefix": "INV-",
  "total": 999,
  "createdAt": "2023-12-12T09:27:42.355Z",
  "updatedAt": "2023-12-12T09:27:42.355Z"
}
```
