> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-invoices). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List invoices

**Endpoint:** `GET /invoices/`

API to get list of invoices

## Request

**Version**

string

required

API Version

Available options

`v3`

**altId**

string

required

location Id / company Id based on altType

**altType**

string

required

Alt Type

Available options

`location`

**status**

string

status to be filtered

**startAt**

string

startAt in YYYY-MM-DD format

**endAt**

string

endAt in YYYY-MM-DD format

**search**

string

To search for an invoice by id / name / email / phoneNo

**paymentMode**

string

payment mode

Available options

`default`

`live`

`test`

**contactId**

string

Contact ID for the invoice

**limit**

string

required

Limit the number of items to return

**offset**

string

required

Number of items to skip

**sortField**

string

The field on which sorting should be applied

Available options

`issueDate`

**sortOrder**

string

The order of sort which should be applied for the sortField

Available options

`ascend`

`descend`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**invoices**object[]required**total**numberrequiredTotal number of invoices

```json
{
  "invoices": [
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
      "paymentSchedule": {},
      "totalSummary": {
        "subTotal": 999,
        "discount": 0,
        "tax": 0
      },
      "remindersConfiguration": {
        "reminderExecutionDetailsList": {},
        "reminderSettings": {
          "defaultEmailTemplateId": "dhwjqi2899012990w2u",
          "reminders": [
            {
              "enabled": true,
              "emailTemplate": "default",
              "smsTemplate": "default",
              "emailSubject": "Reminder",
              "reminderId": "9333e45f-a27d-4659-90e5-76c5ef06d094",
              "reminderName": "Special Reminder",
              "reminderTime": "before",
              "intervalType": "daily",
              "maxReminders": 3,
              "reminderInvoiceCondition": "invoice_sent",
              "reminderNumber": 10,
              "startTime": "9:00 AM",
              "endTime": "5:00 PM",
              "timezone": "businessTZ"
            }
          ]
        }
      }
    }
  ],
  "total": 100
}
```
