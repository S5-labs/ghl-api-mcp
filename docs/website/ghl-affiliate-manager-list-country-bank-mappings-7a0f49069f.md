> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-country-bank-mappings). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Country Bank Mappings

**Endpoint:** `GET /affiliate-manager/:locationId/country-bank-mapping`

List the bank fields each supported country requires, for building a bank payout method. This is shared reference data, identical for every location.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**countryBankMappings**object[]requiredSupported countries and their bank fields**meta**objectrequired

```json
{
  "countryBankMappings": [
    {
      "_id": "6385d230f6d19db03eef6fb2",
      "country": "Germany",
      "fields": [
        {
          "key": "IBAN",
          "name": "IBAN",
          "type": "text",
          "required": true,
          "example": "DE89370400440532013000",
          "validationRegexp": "^[A-Z]{2}[0-9A-Z]{13,32}$"
        }
      ]
    }
  ],
  "meta": {
    "count": 55
  }
}
```
