> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-invoice-templates). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List templates

**Endpoint:** `GET /invoices/template`

API to get list of templates

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

**data**object[]required**totalCount**numberrequiredTotal number of Templates

```json
{
  "data": [
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
  ],
  "totalCount": 100
}
```
