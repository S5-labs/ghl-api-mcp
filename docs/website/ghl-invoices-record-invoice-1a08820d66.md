> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/record-invoice). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Record a manual payment for an invoice

**Endpoint:** `POST /invoices/:invoiceId/record-payment`

API to record manual payment for an invoice by invoice id

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

**altId**stringrequiredlocation Id / company Id based on altType**altType**stringrequiredAlt TypeAvailable options`location`**mode**stringrequiredmanual payment methodAvailable options`cash``card``cheque``bank_transfer``other`**card**objectrequired**cheque**objectrequired**notes**stringrequiredAny note to be recorded with the transaction**amount**numberAmount to be paid against the invoice.**meta**object**paymentScheduleIds**string[]Payment Schedule Ids to be recorded against the invoice.**fulfilledAt**stringUpdated At to be recorded against the invoice.

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "mode": "card",
  "card": {
    "brand": "string",
    "last4": "string"
  },
  "cheque": {
    "number": "129-129-129-912"
  },
  "notes": "This was a direct payment",
  "amount": 999,
  "meta": {},
  "paymentScheduleIds": [
    "6578278e879ad2646715ba9c"
  ],
  "fulfilledAt": "2025-03-19T05:03:00.000Z"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredstatus**invoice**objectrequired

```json
{
  "success": true,
  "invoice": {
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
}
```
