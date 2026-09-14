> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-segment-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get segment by ID

**Endpoint:** `GET /ad-publishing/google/segments/:segmentId`

Retrieve a specific Google Ads audience segment by ID

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

The segment, shaped by the requested `type`. `CUSTOM_SEGMENTS` returns a custom audience with `status` and `members`; `DATA_SEGMENTS` returns a Google user list with rules, sizes, access metadata, and an optional `extras` block holding this product's own record.

- application/json

- Schema
- Example (auto)

**Schema**

oneOfGoogleSegmentDetailDTOGoogleDataSegmentDetailDTO**resourceName**stringrequiredGoogle Ads resource name**id**stringrequiredSegment id**status**stringrequiredSegment status**name**stringrequiredSegment name**type**stringrequiredGoogle custom-audience type. `AUTO` is the default applied when none is supplied on create.**members**object[]requiredKeywords, URLs and apps that define the segment

```json
{
  "resourceName": "customers/6776452901/customAudiences/874396901",
  "id": "874396901",
  "status": "ENABLED",
  "name": "Running shoe shoppers",
  "type": "AUTO",
  "members": [
    {
      "memberType": "KEYWORD",
      "keyword": "running shoes",
      "url": "www.example.com",
      "app": "app.example.com"
    }
  ]
}
```
