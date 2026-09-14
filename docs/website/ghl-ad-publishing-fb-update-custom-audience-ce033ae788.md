> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-update-custom-audience). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update custom audience

**Endpoint:** `PUT /ad-publishing/facebook/custom-audience/:audienceId`

Rename a Facebook custom audience or change its description. Only those two fields can be updated; membership is changed through the member endpoints. The audience is also queued for reprocessing, so the acknowledgement does not mean downstream state has caught up.

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

**locationId**stringrequiredLocation identifier**name**stringrequiredAudience name**description**stringAudience description

```json
{
  "locationId": "HChooFuiyPpVYzeJ4HMe",
  "name": "My Custom Audience",
  "description": "Lookalike audience from website visitors"
}
```

application/json

Acknowledgement that the audience was updated

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
