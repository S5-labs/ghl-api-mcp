> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/add-followers-opportunity). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Add Followers

**Endpoint:** `POST /opportunities/:id/followers`

Add Followers

## Request

**Version**

string

required

API Version

Available options

`v3`

**id**

string

required

Opportunity Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**followers**string[]requiredArray of user IDs to add or remove as followers (max 10)

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

**followers**string[]Current list of all follower user IDs after the operation**followersAdded**string[]User IDs that were successfully added as followers

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
