> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/delete-enrollment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Revoke Enrollment

**Endpoint:** `DELETE /courses/enrollments`

Revoke a contact from a membership offer. Requires a Location token with courses.write. Send Version: v3. Uses DELETE smart-list/user (offer revoke, not product blacklist). Sibling products on the same offer are also revoked. Default-offer rows return 404.

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

Location id or sub-account id is required.

**Possible values:** `non-empty`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**contactId**stringrequiredCRM contact id**offerId**stringrequiredMembership offer id

```json
{
  "contactId": "abc123ContactId",
  "offerId": "c3d4e5f6-7890-4123-cdef-123456789012"
}
```

Enrollment revoked
