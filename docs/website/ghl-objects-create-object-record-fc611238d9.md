> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/objects/create-object-record). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Record

**Endpoint:** `POST /objects/:schemaKey/records`

Create a Custom Object Record. Supported Objects business and custom objects. Documentation Link - [https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296)

## Request

**Version**

string

required

API Version

Available options

`v3`

**schemaKey**

string

required

The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings.

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation Id**properties**objectrequiredProperties of the custom object record. Keys are the object field names; values are the field values (string, number, or a monetary { currency, value } object).

```json
{
  "locationId": "ve9EPM428h8vShlRW1KT",
  "properties": {
    "pet_name": "Cat",
    "pet_age": 10
  }
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**record**object

```json
{
  "record": {
    "id": "661c06b4ffde146bdb469442",
    "owner": [
      "sx6wyHhbFdRXh302Lunr"
    ],
    "followers": [
      "sx6wyHhbFdRXh302Lunr",
      "v5cEPM428h8vShlRW1KT"
    ],
    "properties": {
      "customer_number": 1424,
      "ticket_name": "Customer not able login",
      "phone_number": "+917000000000",
      "money": {
        "currency": "default",
        "value": 100
      },
      "type_of_ticket": "doubt",
      "section_of_app": [
        "contacts",
        "smartlist"
      ],
      "recieved_on": "2024-07-11",
      "my_files": [
        {
          "url": "---url_of_file---"
        }
      ],
      "my_textbox_list.option_a": "Value 1",
      "my_textbox_list.option_b": "Value 2"
    },
    "dateAdded": "2024-07-29T15:51:28.071Z",
    "dateUpdated": "2024-07-29T15:51:28.071Z"
  }
}
```
