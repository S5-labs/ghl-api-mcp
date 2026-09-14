> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-affiliates). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Affiliates

**Endpoint:** `GET /affiliate-manager/:locationId/affiliates`

Retrieve the list of affiliates for a location.

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

**query**

string

Search affiliates by name or email

**active**

string

Filter affiliates by active status

`false`

**campaignId**

string

Filter affiliates by campaign ID

**skip**

number

Number of records to skip for pagination

**Possible values:** `>= 0`

`0`

**limit**

number

Maximum number of records to return. Maximum allowed value is 100. A value of 0 is treated as the default of 10.

**Possible values:** `>= 0` and `<= 100`

`10`

**fromDate**

string

Filter affiliates created on or after this date (YYYY-MM-DD)

**toDate**

string

Filter affiliates created on or before this date (YYYY-MM-DD)

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**affiliates**object[]requiredAffiliate list**meta**objectrequiredPagination metadata

```json
{
  "affiliates": [
    {
      "_id": "63d147176c5bbc30e9e091a4",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1 888 888-8888",
      "locationId": "ve9EPM428h8vShlRW1KT",
      "active": true,
      "contactId": "ve9EPM428h8vShlRW1KT",
      "createdAt": "2024-06-16T00:00:00.000Z"
    }
  ],
  "meta": {
    "count": 10
  }
}
```
