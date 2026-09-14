> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-keyword-ideas). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get keyword ideas

**Endpoint:** `POST /ad-publishing/google/keyword-ideas`

Retrieve keyword suggestions for Google Ads campaigns

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**url**stringrequiredTarget URL**languageCode**stringLanguage code**locations**string[]Target locations**keywords**string[]Seed keywords

```json
{
  "url": "https://example.com",
  "languageCode": "en",
  "locations": [
    "US",
    "CA"
  ],
  "keywords": [
    "marketing"
  ]
}
```

application/json

Keyword suggestions ordered by search volume, highest first

- application/json

- Schema
- Example (auto)

**Schema**

- Array [
- ]

```json
[
  {
    "text": "crm software",
    "avgMonthlySearches": "450000"
  }
]
```
