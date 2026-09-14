> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-pixel). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upsert conversion pixel

**Endpoint:** `PUT /ad-publishing/facebook/pixels`

Create a Facebook conversion pixel, or rename an existing one by passing `conversionPixelId`. The two paths acknowledge differently: a create returns the new id, a rename returns only `{ success: true }`. Renaming is the only update supported, and it rejects `type: INSTAGRAM_DM`. Creating an `INSTAGRAM_DM` dataset requires `igUserId` and fails if one already exists for that account.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation identifier**conversionPixelId**stringConversion pixel ID**name**stringPixel name**igUserId**stringInstagram user ID**type**stringrequiredPixel event typeAvailable options`LEAD_EVENT``FUNNEL_EVENT``INSTAGRAM_DM`

```json
{
  "locationId": "loc_abc123",
  "conversionPixelId": "px_123",
  "name": "My Pixel",
  "igUserId": "ig_user_123",
  "type": "LEAD_EVENT"
}
```

application/json

The new id when a pixel was created, or a success flag when an existing pixel was renamed

- application/json

- Schema
- Example (auto)

**Schema**

oneOfFacebookUpsertPixelCreatedDTOFacebookUpsertPixelUpdatedDTO**id**stringrequiredId of the pixel or dataset that was created

```json
{
  "id": "1712619223343735"
}
```
