> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/create-enrollment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Enroll Contact

**Endpoint:** `POST /courses/enrollments`

Grant a contact access to a membership offer. Requires a Location token with courses.write. Send Version: v3. Uses POST smart-list/user with source public_api (not the queued attach-offer-user path). Returns 200 when already enrolled and 201 when newly attached. Login tokens are never returned. checkoutFrom public_api is not in membership paidSources, so these grants are omitted from Net Revenue paid filters. Default-offer rows return 404.

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

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**alreadyEnrolled**booleanrequiredtrue when the contact already has a purchase for this offer in the location**contactId**stringrequired**offerId**stringrequired

```json
{
  "alreadyEnrolled": true,
  "contactId": "abc123ContactId",
  "offerId": "c3d4e5f6-7890-4123-cdef-123456789012"
}
```
