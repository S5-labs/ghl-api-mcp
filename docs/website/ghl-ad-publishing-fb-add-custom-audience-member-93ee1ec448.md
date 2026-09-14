> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-add-custom-audience-member). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Add custom audience member

**Endpoint:** `PUT /ad-publishing/facebook/custom-audience/:audienceId/member`

Add a single contact to a Facebook custom audience. The contact is resolved from `contactId` and its identifiers are hashed before being sent to Meta. Use the batch endpoint for more than one member.

## Request

**Version**

string

required

API Version

Available options

`v3`

**audienceId**

string

required

Custom audience identifier

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation identifier**contactId**stringrequiredContact identifier**fbAdAccountId**stringFacebook ad account ID

```json
{
  "locationId": "loc_abc123",
  "contactId": "contact_123",
  "fbAdAccountId": "act_123456"
}
```

application/json

Acknowledgement that the contact was added, naming the audience in `msg`

- application/json

- Schema
- Example (auto)

**Schema**

**status**numberrequiredAlways 200. Mirrors the HTTP status rather than reporting anything additional.**msg**stringrequiredHuman-readable confirmation. Wording varies with the operation performed.

```json
{
  "status": 200,
  "msg": "Successfully updated audience"
}
```
