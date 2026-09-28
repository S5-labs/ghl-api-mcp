> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/delete-offer). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Offer

**Endpoint:** `DELETE /courses/offers/:offerId`

Delete a membership offer. Requires a Location token with courses.write. Send Version: v3.

## Request

**Version**

string

required

API Version

Available options

`v3`

**offerId**

string<uuid>

required

Offer id

**Possible values:** `non-empty`

**locationId**

string

required

Location id or sub-account id is required.

**Possible values:** `non-empty`

Offer deleted
