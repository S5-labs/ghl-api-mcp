> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/users/filter-users-by-email). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Filter Users by Email

**Endpoint:** `POST /users/search/filter-by-email`

Filter users by company ID, deleted status, and email array

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**companyId**stringrequiredCompany ID to filter users**emails**stringrequiredComma-separated list of email addresses to filter users**deleted**booleanFilter deleted users**Default value:**`false`**skip**stringNo of results to be skipped before returning the result**Default value:**`0`**limit**stringNo of results to be limited before returning the result**Default value:**`25`**projection**stringProjection fields to return. Use "all" for all fields, or specify comma-separated field names. Default returns only id and email

```json
{
  "companyId": "5DP41231LkQsiKESj6rh",
  "emails": "user1@example.com,user2@example.com",
  "deleted": false,
  "skip": "1",
  "limit": "10",
  "projection": "all"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**users**object[]List of users matching the search criteria**count**numberTotal number of users matching the search criteria

```json
{
  "users": [
    {
      "id": "0IHuJvc2ofPAAA8GzTRi",
      "firstName": "John",
      "lastName": "Deo",
      "email": "john@deo.com"
    }
  ],
  "count": 1231
}
```
