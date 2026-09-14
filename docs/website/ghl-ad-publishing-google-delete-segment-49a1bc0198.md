> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-delete-segment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete segment

**Endpoint:** `DELETE /ad-publishing/google/segments/:segmentId`

Delete a Google Ads audience segment by ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**segmentId**

string

required

Segment identifier

**locationId**

string

required

Location identifier

**type**

string

required

Segment type

Available options

`CUSTOM_SEGMENTS`

`DATA_SEGMENTS`

application/json

Acknowledgement that the segment was removed

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredTrue when the operation succeeded

```json
{
  "success": true
}
```
