> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-remove-custom-audience-member). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Remove custom audience member

**Endpoint:** `DELETE /ad-publishing/facebook/custom-audience/:audienceId/member`

Remove a single contact from a Facebook custom audience. Note this DELETE takes a request body carrying `locationId` and `contactId`, rather than identifying the member through the path or query.

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

Acknowledgement that the contact was removed, naming the audience in `msg`

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
