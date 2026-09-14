> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-followers-contact). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Add Followers

**Endpoint:** `POST /contacts/:contactId/followers`

Add Followers

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

Contact Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**followers**string[]requiredList of user Ids to follow or unfollow the contact

```json
{
  "followers": [
    "sx6wyHhbFdRXh302Lunr",
    "sx6wyHhbFdRXh302Lunr"
  ]
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**followers**string[]Current followers after the operation**followersAdded**string[]Followers that were added

```json
{
  "followers": [
    "sx6wyHhbFdRXh302Lunr",
    "sx6wyHhbFdRXh302LLss"
  ],
  "followersAdded": [
    "Mx6wyHhbFdRXh302Luer",
    "Ka6wyHhbFdRXh302LLsAm"
  ]
}
```
