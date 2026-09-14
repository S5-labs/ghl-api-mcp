> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/users/delete-user). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete User

**Endpoint:** `DELETE /users/:userId`

Delete User

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeeded**booleanIndicates whether the user deletion was queued successfully**message**stringMessage describing the result of the deletion request

```json
{
  "succeeded": true,
  "message": "Queued deleting user with e-mail john@deo.com and name John Deo. Will take effect in a few minutes."
}
```
