> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/get-all-or-email-sms-templates). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# GET all or email/sms templates

**Endpoint:** `GET /locations/:locationId/templates`

GET all or email/sms templates

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

**deleted**

boolean

`false`

**skip**

string

`0`

**limit**

string

`25`

**type**

string

Available options

`sms`

`email`

`whatsapp`

**originId**

string

required

Origin Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**templates**object[]**totalCount**number

```json
{
  "templates": [
    {
      "id": "2yMwhgTNO19bpintqrap",
      "name": "sms template",
      "type": "sms",
      "template": {
        "body": "sms body",
        "attachments": []
      },
      "dateAdded": "2022-01-27T12:31:19.679Z",
      "locationId": "ve9EPM428h8vShlRW1KT",
      "urlAttachments": []
    },
    {
      "id": "2yMwhgTNO19bpintqrap",
      "name": "email template",
      "type": "email",
      "dateAdded": "2022-01-27T12:31:19.679Z",
      "template": {
        "subject": "subject text",
        "attachments": [],
        "html": "<html><head><style>body{font-family: sans-serif;}</style></head><body>testing</body></html>"
      },
      "locationId": "ve9EPM428h8vShlRW1KT"
    }
  ],
  "totalCount": 100
}
```
