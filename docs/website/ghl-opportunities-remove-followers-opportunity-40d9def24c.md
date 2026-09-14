> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/remove-followers-opportunity). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Remove Followers

**Endpoint:** `DELETE /opportunities/:id/followers`

Allows removal of one or all followers from an opportunity.

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

**isRemoveAllFollowers**

boolean

Set to true to remove all followers from the opportunity

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

Followers successfully removed.

- application/json

- Schema
- Example (auto)

**Schema**

**followers**string[]Current list of all follower user IDs after the operation**followersRemoved**string[]User IDs that were successfully removed as followers

```json
{
  "followers": [
    "sx6wyHhbFdRXh302Lunr",
    "sx6wyHhbFdRXh302LLss"
  ],
  "followersRemoved": [
    "Mx6wyHhbFdRXh302Luer",
    "Ka6wyHhbFdRXh302LLsAm"
  ]
}
```
