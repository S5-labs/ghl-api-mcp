> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/create-invoice-from-estimate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Invoice from Estimate

**Endpoint:** `POST /invoices/estimate/:estimateId/invoice`

Create a new invoice from an existing estimate

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

**altId**stringrequiredLocation Id or Agency Id**altType**stringrequiredAvailable options`location`**markAsInvoiced**booleanrequiredMark Estimate as Invoiced**version**stringVersion of the update requestAvailable options`v1``v2`

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "markAsInvoiced": true,
  "version": "v2"
}
```

application/json

Successfully Created

- application/json

- Schema
- Example (auto)

**Schema**

**estimate**objectrequiredEstimate details**invoice**objectrequiredInvoice details

```json
{
  "estimate": {
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
  },
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
