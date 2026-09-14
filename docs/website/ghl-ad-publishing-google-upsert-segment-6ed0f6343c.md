> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-segment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upsert segment

**Endpoint:** `PUT /ad-publishing/google/segments`

Create or update a Google Ads audience segment

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

Location identifier

**type**

string

required

Segment type

Available options

`CUSTOM_SEGMENTS`

`WEBSITE_VISITOR`

`CUSTOMER_MATCH`

`LOOKALIKE`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringrequiredSegment name**description**stringSegment description**members**object[]Segment members — keywords, URLs, or apps that define the custom segment**status**stringSegment status**type**stringGoogle custom-audience type, used only when the `type` query parameter is `CUSTOM_SEGMENTS`. Defaults to `AUTO` when omitted. This is NOT the same field as the `type` query parameter, which selects which kind of segment to upsert — settable values here are `AUTO`, `INTEREST`, `PURCHASE_INTENT` and `SEARCH`.**id**stringSegment identifier**membershipStatus**stringMembership status**ruleBasedUserList**objectRule-based user list config**membershipLifeSpan**numberMembership life span**seedUserListIds**string[]Seed user list IDs**countryCodes**string[]Country codes**expansionLevel**stringExpansion levelAvailable options`BALANCED``BROAD``NARROW`

```json
{
  "name": "My Segment",
  "description": "Target audience segment",
  "members": [
    {
      "memberType": "KEYWORD",
      "keyword": "digital marketing"
    },
    {
      "memberType": "URL",
      "url": "https://example.com"
    },
    {
      "memberType": "APP",
      "app": "com.example.app"
    }
  ],
  "status": "ENABLED",
  "type": "AUTO",
  "id": "seg_123",
  "membershipStatus": "OPEN",
  "ruleBasedUserList": {
    "prepopulationStatus": "REQUESTED",
    "flexibleRuleUserList": {
      "inclusiveOperands": [],
      "exclusiveOperands": []
    }
  },
  "membershipLifeSpan": 30,
  "seedUserListIds": [
    "list_1"
  ],
  "countryCodes": [
    "US",
    "CA"
  ],
  "expansionLevel": "BALANCED"
}
```

application/json

The saved segment, shaped by the requested `type`: a custom audience for `CUSTOM_SEGMENTS`, or a Google user list for `DATA_SEGMENTS`.

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
