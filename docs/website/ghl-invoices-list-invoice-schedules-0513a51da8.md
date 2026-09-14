> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-invoice-schedules). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List schedules

**Endpoint:** `GET /invoices/schedule`

API to get list of schedules

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

**limit**

string

required

Limit the number of items to return

**offset**

string

required

Number of items to skip

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**schedules**object[]required**total**numberrequiredTotal number of Schedules

```json
{
  "schedules": [
    {
      "_id": "6578278e879ad2646715ba9c",
      "status": "draft",
      "liveMode": false,
      "altId": "6578278e879ad2646715ba9c",
      "altType": "location",
      "name": "New Invoice",
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
      },
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
          "paymentSchedule": {}
        }
      ],
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
      "total": 999,
      "title": "INVOICE",
      "termsNotes": "Confidential",
      "compiledTermsNotes": "Confidential",
      "createdAt": "2023-12-12T09:27:42.355Z",
      "updatedAt": "2023-12-12T09:27:42.355Z"
    }
  ],
  "total": 100
}
```
