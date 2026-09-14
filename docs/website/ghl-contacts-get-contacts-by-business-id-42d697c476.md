> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contacts-by-business-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Contacts By BusinessId

**Endpoint:** `GET /contacts/business/:businessId`

Get Contacts By BusinessId

## Request

**Version**

string

required

API Version

Available options

`v3`

**businessId**

string

required

Business Id

**limit**

string

Maximum number of records per page (up to 100, default 25)

**locationId**

string

required

Location Id

**skip**

string

Number of records to skip

**query**

string

Search query (name, email, phone)

**startAfter**

string[]

Cursor for pagination (comma-separated name,id pair)

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**contacts**object[]List of contacts associated with the business**count**numberTotal number of contacts matching the query

```json
{
  "contacts": [
    {
      "id": "ocQHyuzHvysMo5N5VsXc",
      "locationId": "C2QujeCh8ZnC7al2InWR",
      "email": "JohnDeo@gmail.com",
      "country": "DE",
      "source": "xyz form",
      "dateAdded": "2020-10-29T09:31:30.255Z"
    }
  ],
  "count": 10
}
```
