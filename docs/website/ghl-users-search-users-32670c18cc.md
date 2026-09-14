> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/users/search-users). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Search Users

**Endpoint:** `GET /users/search`

Search Users

## Request

**Version**

string

required

API Version

Available options

`v3`

**companyId**

string

required

Company ID in which the search needs to be performed

**query**

string

The search term for the user is matched based on the user full name, email or phone

**skip**

string

No of results to be skipped before returning the result

`0`

**limit**

string

No of results to be limited before returning the result

`25`

**locationId**

string

Location ID in which the search needs to be performed

**type**

string

Type of the users to be filtered in the search

**role**

string

Role of the users to be filtered in the search

**ids**

string

List of User IDs to be filtered in the search

**sort**

string

The field on which sort is applied in which the results need to be sorted. Default is based on the first and last name

**sortDirection**

string

The direction in which the results need to be sorted

**enabled2waySync**

boolean

Filter users by whether 2-way sync is enabled

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
