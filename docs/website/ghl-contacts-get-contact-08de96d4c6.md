> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Contact

**Endpoint:** `GET /contacts/:contactId`

Retrieves a contact by its unique identifier.

## Request

**Version**

string

required

API Version

Available options

`v3`

**contactId**

string

required

Unique identifier of the contact

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**contact**objectContact details

```json
{
  "contact": {
    "id": "seD4PfOuKoVMLkEZqohJ",
    "name": "rubika deo",
    "firstName": "rubika",
    "lastName": "Deo",
    "email": "rubika@deos.com",
    "phone": "+18832327657",
    "locationId": "ve9EPM428h8vShlRW1KT"
  }
}
```
